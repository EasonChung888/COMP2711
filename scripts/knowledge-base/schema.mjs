import { basename } from "node:path";

export const CONTROLLED = Object.freeze({
  term: new Set(["spring", "fall", "unspecified"]),
  exam_type: new Set(["midterm", "final"]),
  syllabus_status: new Set(["in-scope"]),
  answer_source: new Set(["official", "marking-scheme", "derived"]),
  verification_status: new Set(["transcribed", "classified", "solution-drafted", "verified"]),
  question_types: new Set([
    "proof", "calculation", "construction", "translation",
    "classification", "counterexample", "modeling", "algorithm-analysis"
  ])
});

export const QUESTION_REQUIRED = Object.freeze([
  "id", "note_type", "schema_version", "course", "source_paper",
  "source_pdf", "source_page", "question_number", "year", "term",
  "exam_type", "topics", "subtopics", "concepts", "methods",
  "question_types", "difficulty", "difficulty_basis", "syllabus_version",
  "syllabus_status", "answer_source", "verification_status"
]);

const QUESTION_OPTIONAL = Object.freeze([
  "solution_page", "marks", "related_questions"
]);

function parseScalar(source, key) {
  const value = source.trim();
  if (value === "") {
    throw new Error(`property ${key} has no value; multiline YAML arrays are not supported`);
  }
  if (value === "true") return true;
  if (value === "false") return false;
  if (value === "null") return null;
  if (/^-?(?:0|[1-9]\d*)(?:\.\d+)?$/.test(value)) return Number(value);

  if (value.startsWith("\"") || value.startsWith("[")) {
    try {
      const parsed = JSON.parse(value);
      if (typeof parsed === "string" || Array.isArray(parsed)) return parsed;
    } catch (error) {
      throw new Error(`invalid JSON value for property ${key}: ${error.message}`);
    }
  }

  throw new Error(`unsupported frontmatter value for property ${key}`);
}
export function parseFrontmatter(markdown) {
  if (typeof markdown !== "string") {
    throw new TypeError("markdown must be a string");
  }

  const normalized = markdown.replace(/\r\n?/g, "\n");
  if (!normalized.startsWith("---\n")) {
    return { properties: {}, body: normalized };
  }

  const closingIndex = normalized.indexOf("\n---", 4);
  if (closingIndex === -1) {
    throw new Error("frontmatter is missing its closing delimiter");
  }

  const afterClosing = closingIndex + 4;
  if (afterClosing < normalized.length && normalized[afterClosing] !== "\n") {
    throw new Error("frontmatter closing delimiter must be on its own line");
  }

  const properties = {};
  const frontmatter = normalized.slice(4, closingIndex);
  for (const [index, line] of frontmatter.split("\n").entries()) {
    if (line.trim() === "") continue;
    if (/^\s+-\s/.test(line)) {
      throw new Error("multiline YAML arrays are not supported");
    }
    const match = line.match(/^([A-Za-z_][A-Za-z0-9_-]*):(?:\s*)(.*)$/);
    if (!match) {
      throw new Error(`unsupported frontmatter syntax on line ${index + 2}`);
    }
    const [, key, source] = match;
    if (Object.hasOwn(properties, key)) {
      throw new Error(`duplicate frontmatter property: ${key}`);
    }
    properties[key] = parseScalar(source, key);
  }

  const bodyStart = normalized[afterClosing] === "\n" ? afterClosing + 1 : afterClosing;
  return { properties, body: normalized.slice(bodyStart) };
}

export function normalizeWikiLink(value) {
  if (typeof value !== "string") return "";
  let target = value.trim();
  if (target.startsWith("[[") && target.endsWith("]]")) {
    target = target.slice(2, -2);
  }
  target = target.split("|", 1)[0].split("#", 1)[0].replaceAll("\\", "/");
  return basename(target.trim(), ".md");
}

function isWikiLink(value) {
  return typeof value === "string" && /^\[\[[^\[\]]+(?:\|[^\[\]]+)?\]\]$/.test(value.trim());
}

function validateLinkArray(properties, key, errors) {
  const value = properties[key];
  if (!Array.isArray(value) || value.length === 0 || value.some((item) => !isWikiLink(item))) {
    errors.push(`${key} must be a nonempty array of Wikilinks`);
  }
}

function validateControlled(properties, key, errors) {
  if (!CONTROLLED[key].has(properties[key])) {
    errors.push(`${key} must be one of: ${[...CONTROLLED[key]].join(", ")}`);
  }
}

function isNonblankString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isQuestionId(value) {
  return isNonblankString(value)
    && /^Q-[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/.test(value);
}

function isPastPaperPdf(value) {
  return isNonblankString(value)
    && /^knowledge_base\/past_paper\/[^/].*\.pdf$/i.test(value)
    && !value.includes("\\")
    && !value.split("/").includes("..");
}

export function validateQuestionProperties(properties) {
  const errors = [];
  if (!properties || typeof properties !== "object" || Array.isArray(properties)) {
    return ["properties must be an object"];
  }

  for (const key of QUESTION_REQUIRED) {
    if (!Object.hasOwn(properties, key) || properties[key] === null || properties[key] === "") {
      errors.push(`missing required property: ${key}`);
    }
  }

  const allowed = new Set([...QUESTION_REQUIRED, ...QUESTION_OPTIONAL]);
  for (const key of Object.keys(properties)) {
    if (!allowed.has(key)) errors.push(`unsupported property: ${key}`);
  }

  if (!isQuestionId(properties.id)) {
    errors.push("id must be a nonblank Question ID beginning with Q-");
  }
  if (!isPastPaperPdf(properties.source_pdf)) {
    errors.push("source_pdf must be a nonblank path under knowledge_base/past_paper ending in .pdf");
  }
  if (!isNonblankString(properties.question_number)) {
    errors.push("question_number must be a nonblank string");
  }
  if (!isNonblankString(properties.difficulty_basis)) {
    errors.push("difficulty_basis must be a nonblank string");
  }
  for (const key of [
    "note_type", "course", "source_paper", "term", "exam_type",
    "syllabus_version", "syllabus_status", "answer_source", "verification_status"
  ]) {
    if (!isNonblankString(properties[key])) errors.push(`${key} must be a nonblank string`);
  }

  if (properties.note_type !== "question") errors.push("note_type must be question");
  if (properties.course !== "COMP2711") errors.push("course must be COMP2711");
  if (properties.schema_version !== 1) errors.push("schema_version must be 1");
  if (properties.syllabus_version !== "COMP2711-2026-27-fall") {
    errors.push("syllabus_version must be COMP2711-2026-27-fall");
  }

  if (properties.syllabus_status !== "in-scope") {
    errors.push("syllabus_status must be in-scope");
  }
  validateControlled(properties, "term", errors);
  validateControlled(properties, "exam_type", errors);
  validateControlled(properties, "answer_source", errors);
  validateControlled(properties, "verification_status", errors);

  if (!Number.isInteger(properties.difficulty) || properties.difficulty < 1 || properties.difficulty > 5) {
    errors.push("difficulty must be an integer from 1 to 5");
  }
  if (!Number.isInteger(properties.source_page) || properties.source_page < 1) {
    errors.push("source_page must be a positive integer");
  }
  if (!Number.isInteger(properties.year) || properties.year < 1) {
    errors.push("year must be a positive integer");
  }

  if (!isWikiLink(properties.source_paper)) errors.push("source_paper must be a Wikilink");
  for (const key of ["topics", "subtopics", "concepts", "methods"]) {
    validateLinkArray(properties, key, errors);
  }

  if (!Array.isArray(properties.question_types) || properties.question_types.length === 0) {
    errors.push("question_types must be a nonempty array");
  } else {
    for (const value of properties.question_types) {
      if (!CONTROLLED.question_types.has(value)) {
        errors.push(`question_types contains unsupported value: ${value}`);
      }
    }
  }

  if (Object.hasOwn(properties, "solution_page") && (
    !Array.isArray(properties.solution_page)
    || properties.solution_page.some((page) => !Number.isInteger(page) || page < 1)
  )) {
    errors.push("solution_page must be an array of positive integers");
  }
  if (Array.isArray(properties.solution_page) && properties.solution_page.length === 0) {
    errors.push("solution_page must be a nonempty array of positive integers");
  }
  if (Object.hasOwn(properties, "marks") && (
    typeof properties.marks !== "number"
    || !Number.isFinite(properties.marks)
    || properties.marks <= 0
  )) {
    errors.push("marks must be a positive number");
  }
  if (Object.hasOwn(properties, "related_questions") && (
    !Array.isArray(properties.related_questions)
    || properties.related_questions.some((link) => !isWikiLink(link) || !normalizeWikiLink(link).startsWith("Q-"))
  )) {
    errors.push("related_questions must be an array of Question Wikilinks");
  }

  return errors;
}
