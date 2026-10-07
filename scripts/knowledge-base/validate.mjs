import { answerStructureErrors } from "./answers.mjs";
import {
  existsSync,
  readFileSync,
  readdirSync,
  statSync
} from "node:fs";
import { basename, join, relative, resolve, sep } from "node:path";
import {
  normalizeWikiLink,
  parseFrontmatter,
  validateQuestionProperties
} from "./schema.mjs";

const CONTENT_DIRECTORIES = Object.freeze([
  "knowledge_base/00-Home",
  "knowledge_base/01-Topics",
  "knowledge_base/02-Methods",
  "knowledge_base/03-Papers",
  "knowledge_base/04-Questions",
  "knowledge_base/06-Audit"
]);

const REQUIRED_LINKS = Object.freeze({
  source_paper: "paper",
  topics: "topic",
  subtopics: "subtopic",
  concepts: "concept",
  methods: "method"
});

const REQUIRED_HEADINGS = Object.freeze([
  "Source",
  "Question",
  "Official Answer",
  "Supplementary Explanation",
  "Connections"
]);

const REQUIRED_VIEWS = Object.freeze([
  "All Questions.base",
  "Topic Coverage.base",
  "Papers by Year.base",
  "Methods.base",
  "Question Type and Difficulty.base",
  "Answer Verification.base",
  "Paper Reconciliation.base"
]);

const INCOMPLETE_MARKERS = Object.freeze([
  { label: "TODO", pattern: /\bTODO\b/i },
  { label: "TBD", pattern: /\bTBD\b/i },
  { label: "FIXME", pattern: /\bFIXME\b/i },
  { label: "placeholder", pattern: /\bplaceholder\b/i },
  { label: "待补充", pattern: /待补充/ },
  { label: "待完成", pattern: /待完成/ }
]);

function vaultPath(root, relativePath) {
  return join(root, ...relativePath.split("/"));
}
function portableRelative(root, path) {
  return relative(root, path).split(sep).join("/");
}

function readJson(root, relativePath, errors) {
  const path = vaultPath(root, relativePath);
  if (!existsSync(path)) {
    errors.push(`missing required audit file: ${relativePath}`);
    return null;
  }
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch (error) {
    errors.push(`cannot read ${relativePath}: ${error.message}`);
    return null;
  }
}

function collectMarkdownPaths(path, paths) {
  if (!existsSync(path)) return;
  for (const entry of readdirSync(path, { withFileTypes: true })) {
    const child = join(path, entry.name);
    if (entry.isDirectory()) collectMarkdownPaths(child, paths);
    else if (entry.isFile() && entry.name.endsWith(".md")) paths.push(child);
  }
}

function collectNotes(root, errors) {
  const paths = [];
  for (const directory of CONTENT_DIRECTORIES) {
    collectMarkdownPaths(vaultPath(root, directory), paths);
  }
  paths.sort();

  const notes = [];
  for (const path of paths) {
    const relativePath = portableRelative(root, path);
    let parsed;
    try {
      parsed = parseFrontmatter(readFileSync(path, "utf8"));
    } catch (error) {
      errors.push(`${relativePath}: invalid frontmatter: ${error.message}`);
      continue;
    }
    if (typeof parsed.properties.note_type !== "string") continue;
    notes.push({
      path,
      relativePath,
      basename: basename(path, ".md"),
      properties: parsed.properties,
      body: parsed.body
    });
  }
  return notes;
}

function matchesSource(sourcePdf, selectedSources) {
  return selectedSources.size === 0 || selectedSources.has(sourcePdf);
}

function noteLabel(note) {
  return note.properties.id ?? note.relativePath;
}

function validateUniqueIds(notes, errors) {
  const seen = new Map();
  for (const note of notes) {
    const { id, note_type: noteType } = note.properties;
    if (typeof id !== "string" || id.length === 0) continue;
    if (seen.has(id)) {
      const label = noteType === "question" ? "question" : "note";
      errors.push(`duplicate ${label} ID: ${id}`);
    } else {
      seen.set(id, note);
    }
  }
}

function validateLink(note, key, link, expectedType, notesByBasename, errors) {
  const targetName = normalizeWikiLink(link);
  const target = notesByBasename.get(targetName);
  if (!target) {
    errors.push(`${noteLabel(note)}: unresolved ${key} Wikilink: ${targetName}`);
  } else if (target.properties.note_type !== expectedType) {
    errors.push(
      `${noteLabel(note)}: ${key} Wikilink ${targetName} resolves to ${target.properties.note_type}, expected ${expectedType}`
    );
  }
}

function validateQuestionLinks(note, notesByBasename, errors) {
  for (const [key, expectedType] of Object.entries(REQUIRED_LINKS)) {
    const value = note.properties[key];
    const links = Array.isArray(value) ? value : [value];
    for (const link of links) {
      if (typeof link === "string") {
        validateLink(note, key, link, expectedType, notesByBasename, errors);
      }
    }
  }

  if (typeof note.properties.source_paper === "string") {
    const targetName = normalizeWikiLink(note.properties.source_paper);
    const target = notesByBasename.get(targetName);
    if (
      target?.properties.note_type === "paper"
      && target.properties.source_pdf !== note.properties.source_pdf
    ) {
      errors.push(
        `${noteLabel(note)}: source_paper ${targetName} uses ${target.properties.source_pdf}, expected ${note.properties.source_pdf}`
      );
    }
  }
}

function validateVerifiedBody(note, errors) {
  if (note.properties.verification_status !== "verified") return;

  let priorIndex = -1;
  for (const heading of REQUIRED_HEADINGS) {
    const match = new RegExp(`^## ${escapeRegExp(heading)}\\s*$`, "m").exec(note.body);
    if (!match) {
      errors.push(`${noteLabel(note)}: verified Question is missing heading: ${heading}`);
      continue;
    }

    if (match.index < priorIndex) {
      errors.push(`${noteLabel(note)}: verified Question headings are out of order`);
    }
    priorIndex = match.index;

    const afterHeading = note.body.slice(match.index + match[0].length);
    const nextHeadingIndex = afterHeading.search(/^##\s+/m);
    const section = nextHeadingIndex === -1
      ? afterHeading
      : afterHeading.slice(0, nextHeadingIndex);
    if (section.trim().length === 0) {
      errors.push(`${noteLabel(note)}: verified Question section is empty: ${heading}`);
    }
  }

  const expectedEmbed = `${note.properties.source_pdf}#page=${note.properties.source_page}`;
  const embeds = [...note.body.matchAll(/!\[\[([^\]]+)\]\]/g)].map((match) => match[1].split("|", 1)[0]);
  if (!embeds.includes(expectedEmbed)) {
    errors.push(`${noteLabel(note)}: missing matching source embed: ![[${expectedEmbed}]]`);
  }

  for (const marker of INCOMPLETE_MARKERS) {
    if (marker.pattern.test(note.body)) {
      errors.push(`${noteLabel(note)}: verified Question contains incomplete marker: ${marker.label}`);
    }
  }
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function validateQuestionPages(note, root, inventoryBySource, errors) {
  const sourcePdf = note.properties.source_pdf;
  if (typeof sourcePdf !== "string") return;

  const sourcePath = vaultPath(root, sourcePdf);
  if (!existsSync(sourcePath) || !statSync(sourcePath).isFile()) {
    errors.push(`${noteLabel(note)}: source PDF does not exist: ${sourcePdf}`);
  }

  const source = inventoryBySource.get(sourcePdf);
  if (!source) {
    errors.push(`${noteLabel(note)}: source PDF is absent from source inventory: ${sourcePdf}`);
    return;
  }
  const pageCount = source.page_count;
  if (!Number.isInteger(pageCount) || pageCount < 1) {
    errors.push(`source inventory has invalid page_count for ${sourcePdf}`);
    return;
  }
  if (Number.isInteger(note.properties.source_page) && note.properties.source_page > pageCount) {
    errors.push(`${noteLabel(note)}: source_page ${note.properties.source_page} exceeds page count ${pageCount}`);
  }
  if (Array.isArray(note.properties.solution_page)) {
    for (const page of note.properties.solution_page) {
      if (Number.isInteger(page) && page > pageCount) {
        errors.push(`${noteLabel(note)}: solution_page ${page} exceeds page count ${pageCount}`);
      }
    }
  }
}

function auditCounts(records) {
  return {
    identified_count: records.length,
    admitted_count: records.filter((record) => record.status === "in-scope").length,
    excluded_count: records.filter((record) => record.status === "out-of-scope").length,
    unresolved_count: records.filter((record) => record.status === "needs-review").length
  };
}

function validatePaperCounts(papers, auditRecords, errors) {
  for (const paper of papers) {
    const sourcePdf = paper.properties.source_pdf;
    const records = auditRecords.filter((record) => record.source_pdf === sourcePdf);
    const expected = auditCounts(records);
    for (const [key, count] of Object.entries(expected)) {
      const actual = paper.properties[key];
      if (!Number.isInteger(actual) || actual < 0) {
        errors.push(`${noteLabel(paper)}: Paper ${key} must be a nonnegative integer`);
      } else if (actual !== count) {
        errors.push(`${noteLabel(paper)}: Paper ${key} is ${actual} but audit count is ${count}`);
      }
    }
    if (
      Number.isInteger(paper.properties.identified_count)
      && Number.isInteger(paper.properties.admitted_count)
      && Number.isInteger(paper.properties.excluded_count)
      && Number.isInteger(paper.properties.unresolved_count)
      && paper.properties.identified_count !== (
        paper.properties.admitted_count
        + paper.properties.excluded_count
        + paper.properties.unresolved_count
      )
    ) {
      errors.push(`${noteLabel(paper)}: Paper counts do not reconcile`);
    }
  }
}

function validateAuditRelationship(questions, auditRecords, root, requireComplete, errors) {
  const questionsById = new Map();
  for (const question of questions) {
    if (!questionsById.has(question.properties.id)) {
      questionsById.set(question.properties.id, question);
    }
  }
  const auditById = new Map();
  for (const record of auditRecords) {
    if (!auditById.has(record.id)) auditById.set(record.id, record);
  }

  for (const question of questions) {
    const id = question.properties.id;
    const record = auditById.get(id);
    if (!record) {
      errors.push(`${noteLabel(question)}: Question note has no audit record`);
    } else if (record.status !== "in-scope") {
      errors.push(`${noteLabel(question)}: Question note is forbidden for audit status ${record.status}`);
    } else {
      if (record.source_pdf !== question.properties.source_pdf) {
        errors.push(`${noteLabel(question)}: source_pdf does not match its audit record`);
      }
      if (record.source_page !== question.properties.source_page) {
        errors.push(`${noteLabel(question)}: source_page does not match its audit record`);
      }
      if (record.note_path && portableRelative(root, question.path) !== record.note_path) {
        errors.push(`${noteLabel(question)}: note path does not match its audit record`);
      }
    }
  }

  if (!requireComplete) return;
  for (const record of auditRecords) {
    if (record.status !== "in-scope") continue;
    const question = questionsById.get(record.id);
    if (!question) {
      errors.push(`in-scope audit record has no Question note: ${record.id}`);
    } else if (question.properties.verification_status !== "verified") {
      errors.push(`in-scope audit record has no verified Question note: ${record.id}`);
    }
  }
}

function validateUniqueAuditIds(auditRecords, errors) {
  const seen = new Set();
  for (const record of auditRecords) {
    if (seen.has(record.id)) errors.push(`duplicate audit question ID: ${record.id}`);
    else seen.add(record.id);
  }
}

function validateRelatedQuestions(questions, notesByBasename, errors) {
  for (const question of questions) {
    const related = question.properties.related_questions;
    if (!Array.isArray(related)) continue;
    for (const link of related) {
      if (typeof link !== "string") continue;
      const targetName = normalizeWikiLink(link);
      const target = notesByBasename.get(targetName);
      if (!target || target.properties.note_type !== "question") {
        errors.push(`${noteLabel(question)}: unresolved related_questions Wikilink: ${targetName}`);
        continue;
      }
      const reciprocal = Array.isArray(target.properties.related_questions)
        && target.properties.related_questions.some(
          (candidate) => normalizeWikiLink(candidate) === question.basename
        );
      if (!reciprocal) {
        errors.push(`${noteLabel(question)}: related Question link is not reciprocal: ${targetName}`);
      }
    }
  }
}

function validateViews(root, errors) {
  for (const filename of REQUIRED_VIEWS) {
    const relativePath = `knowledge_base/05-Views/${filename}`;
    if (!existsSync(vaultPath(root, relativePath))) {
      errors.push(`missing required view: ${relativePath}`);
    }
  }
}

export function validateVault(root, options = {}) {
  const resolvedRoot = resolve(root);
  const errors = [];
  const selectedSources = new Set(options.sources ?? []);
  const inventory = readJson(resolvedRoot, "knowledge_base/06-Audit/source-inventory.json", errors);
  const audit = readJson(resolvedRoot, "knowledge_base/06-Audit/question-audit.json", errors);
  const inventorySources = Array.isArray(inventory?.sources) ? inventory.sources : [];
  const allAuditRecords = Array.isArray(audit?.questions) ? audit.questions : [];
  const inventoryBySource = new Map(
    inventorySources.map((source) => [source.source_pdf, source])
  );

  for (const source of selectedSources) {
    if (!inventoryBySource.has(source)) errors.push(`requested source is not present in source inventory: ${source}`);
  }

  for (const source of inventorySources) {
    if (!matchesSource(source.source_pdf, selectedSources)) continue;
    const path = vaultPath(resolvedRoot, source.source_pdf);
    if (!existsSync(path) || !statSync(path).isFile()) {
      errors.push(`source PDF does not exist: ${source.source_pdf}`);
    }
  }

  const allNotes = collectNotes(resolvedRoot, errors);
  const selectedNotes = allNotes.filter((note) => {
    if (selectedSources.size === 0) return true;
    if (note.properties.note_type !== "question" && note.properties.note_type !== "paper") return true;
    return matchesSource(note.properties.source_pdf, selectedSources);
  });
  const notesByBasename = new Map(allNotes.map((note) => [note.basename, note]));
  const questions = selectedNotes.filter((note) => note.properties.note_type === "question");
  const papers = selectedNotes.filter((note) => note.properties.note_type === "paper");
  const auditRecords = allAuditRecords.filter(
    (record) => matchesSource(record.source_pdf, selectedSources)
  );

  validateUniqueIds(allNotes, errors);
  validateUniqueAuditIds(allAuditRecords, errors);
  for (const question of questions) {
    for (const error of validateQuestionProperties(question.properties)) {
      errors.push(`${noteLabel(question)}: ${error}`);
    }
    validateQuestionPages(question, resolvedRoot, inventoryBySource, errors);
    if (question.properties.verification_status === "verified") {
      for (const error of answerStructureErrors(question.body, question.properties.answer_source, inventoryBySource)) errors.push(`${noteLabel(question)}: ${error}`);
    }
    validateQuestionLinks(question, notesByBasename, errors);
    validateVerifiedBody(question, errors);
  }
  validateAuditRelationship(
    questions,
    auditRecords,
    resolvedRoot,
    options.requireComplete === true,
    errors
  );
  validatePaperCounts(papers, auditRecords, errors);
  validateRelatedQuestions(questions, notesByBasename, errors);
  if (options.requireViews === true) validateViews(resolvedRoot, errors);

  return {
    errors,
    summary: {
      sources: inventorySources.filter(
        (source) => matchesSource(source.source_pdf, selectedSources)
      ).length,
      papers: papers.length,
      questions: questions.length,
      auditRecords: auditRecords.length,
      admitted: auditRecords.filter((record) => record.status === "in-scope").length,
      excluded: auditRecords.filter((record) => record.status === "out-of-scope").length,
      unresolved: auditRecords.filter((record) => record.status === "needs-review").length
    }
  };
}
