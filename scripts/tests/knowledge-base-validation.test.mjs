import assert from "node:assert/strict";
import {
  existsSync,
  mkdtempSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync
} from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { validateVault } from "../knowledge-base/validate.mjs";
import { CONTROLLED, normalizeWikiLink, parseFrontmatter } from "../knowledge-base/schema.mjs";

const VIEW_FILES = [
  "All Questions.base",
  "Topic Coverage.base",
  "Papers by Year.base",
  "Methods.base",
  "Question Type and Difficulty.base",
  "Answer Verification.base",
  "Paper Reconciliation.base"
];

const REPOSITORY_ROOT = join(dirname(fileURLToPath(import.meta.url)), "../..");

const TOPIC_FILES = [
  "Topic - Logic - 逻辑.md",
  "Topic - Sets and Functions - 集合与函数.md",
  "Topic - Induction and Recursion - 归纳与递归.md",
  "Topic - Number Theory - 数论.md",
  "Topic - Algorithms - 算法.md",
  "Topic - Counting - 计数.md",
  "Topic - Probability - 概率.md",
  "Topic - Graphs - 图论.md"
];
const SUBTOPIC_FILES = [
  "Subtopic - Propositional Logic - 命题逻辑.md", "Subtopic - Predicate Logic - 谓词逻辑.md",
  "Subtopic - Inference and Proofs - 推理与证明.md", "Subtopic - Sets and Functions - 集合与函数.md",
  "Subtopic - Induction - 数学归纳法.md", "Subtopic - Recursion - 递归.md",
  "Subtopic - Modular Arithmetic - 模运算.md", "Subtopic - GCDs and Congruences - 最大公因数与同余.md",
  "Subtopic - Cryptography - 密码学.md", "Subtopic - Algorithms - 算法.md",
  "Subtopic - Basic Counting - 基本计数.md", "Subtopic - Permutations and Combinations - 排列与组合.md",
  "Subtopic - Binomial Coefficients - 二项式系数.md", "Subtopic - Inclusion-Exclusion - 容斥原理.md",
  "Subtopic - Introduction to Probability - 概率基础.md", "Subtopic - Conditional Probability - 条件概率.md",
  "Subtopic - Random Variables - 随机变量.md", "Subtopic - Graphs - 图论基础.md"
];
const PAPER_FILES = [
  "2013 Midterm.md", "2013 Final.md", "2014 Midterm.md", "2014 Final.md", "2015 Midterm.md", "2015 Final.md",
  "2016 Midterm.md", "2016 Final.md", "2017 Midterm.md", "2017 Final.md", "2018 Midterm.md", "2018 Final.md",
  "2019 Midterm.md", "2019 Final.md", "2020 Midterm.md", "2020 Final Part 1.md", "2020 Final Part 2.md",
  "2021 Midterm.md", "2021 Final Part 1.md", "2021 Final Part 2.md", "2022 Midterm.md", "2022 Final Part 1.md",
  "2022 Final Part 2.md", "2023 Spring Midterm.md", "2023 Fall Midterm.md", "2023 Fall Final.md",
  "2024 Spring Midterm.md", "2024 Spring Final.md", "2024 Fall Midterm.md", "2024 Fall Final.md",
  "2025 Spring Midterm.md", "2025 Spring Final.md", "2025 Fall Midterm.md", "2025 Fall Final.md"
];

function write(root, relativePath, content) {
  const path = join(root, relativePath);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content);
}

function updateJson(root, relativePath, update) {
  const path = join(root, relativePath);
  const document = JSON.parse(readFileSync(path, "utf8"));
  update(document);
  writeFileSync(path, `${JSON.stringify(document, null, 2)}\n`);
}

function questionNote(overrides = {}, bodyOverride) {
  const values = {
    id: "Q-2015-MID-P01-a",
    source_paper: "[[2015 Midterm]]",
    source_pdf: "knowledge_base/past_paper/sample.pdf",
    source_page: 2,
    topics: ["[[Topic - Logic - 逻辑]]"],
    ...overrides
  };
  const body = bodyOverride ?? `## Source
![[${values.source_pdf}#page=${values.source_page}]]

## Question
Show that the two propositions are equivalent.

## Official Answer
Apply De Morgan's law and simplify both sides.

[[${values.source_pdf}#page=${values.source_page}]]

## Supplementary Explanation
Apply logical equivalence laws one step at a time. Do not reverse an implication without justification.

## Connections
This exercise applies the standard equivalence-law method.`;

  return `---
id: "${values.id}"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "${values.source_paper}"
source_pdf: "${values.source_pdf}"
source_page: ${values.source_page}
question_number: "1(a)"
year: 2015
term: "unspecified"
exam_type: "midterm"
topics: ${JSON.stringify(values.topics)}
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logical Equivalence Laws - 逻辑等价律]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Several justified equivalence steps"
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
---
${body}
`;
}

function paperNote(overrides = {}) {
  const counts = {
    identified_count: 1,
    admitted_count: 1,
    excluded_count: 0,
    unresolved_count: 0,
    ...overrides
  };
  return `---
id: "P-2015-MID"
note_type: "paper"
schema_version: 1
course: "COMP2711"
source_pdf: "knowledge_base/past_paper/sample.pdf"
year: 2015
term: "unspecified"
exam_type: "midterm"
identified_count: ${counts.identified_count}
admitted_count: ${counts.admitted_count}
excluded_count: ${counts.excluded_count}
unresolved_count: ${counts.unresolved_count}
---
# 2015 Midterm
`;
}

function makeValidFixture() {
  const root = mkdtempSync(join(tmpdir(), "comp2711-kb-"));
  write(root, "knowledge_base/past_paper/sample.pdf", "fixture");
  write(root, "knowledge_base/06-Audit/source-inventory.json", `${JSON.stringify({
    schema_version: 1,
    sources: [{ source_pdf: "knowledge_base/past_paper/sample.pdf", page_count: 3 }]
  }, null, 2)}\n`);
  write(root, "knowledge_base/06-Audit/question-audit.json", `${JSON.stringify({
    schema_version: 1,
    syllabus_version: "COMP2711-2026-27-fall",
    questions: [{
      id: "Q-2015-MID-P01-a",
      source_pdf: "knowledge_base/past_paper/sample.pdf",
      source_page: 2,
      question_number: "1(a)",
      status: "in-scope",
      syllabus_evidence: ["Subtopic - Propositional Logic - 命题逻辑"],
      exclusion_reason: null,
      note_path: "knowledge_base/04-Questions/Q-2015-MID-P01-a - Propositional Equivalence.md"
    }]
  }, null, 2)}\n`);
  write(root, "knowledge_base/03-Papers/2015 Midterm.md", paperNote());
  write(root, "knowledge_base/01-Topics/Topic - Logic - 逻辑.md", "---\nnote_type: \"topic\"\n---\n");
  write(root, "knowledge_base/01-Topics/Subtopic - Propositional Logic - 命题逻辑.md", "---\nnote_type: \"subtopic\"\n---\n");
  write(root, "knowledge_base/01-Topics/Concepts/Logical Equivalence - 逻辑等价.md", "---\nnote_type: \"concept\"\n---\n");
  write(root, "knowledge_base/02-Methods/Logical Equivalence Laws - 逻辑等价律.md", "---\nnote_type: \"method\"\n---\n");
  write(root, "knowledge_base/04-Questions/Q-2015-MID-P01-a - Propositional Equivalence.md", questionNote());
  for (const filename of VIEW_FILES) write(root, `knowledge_base/05-Views/${filename}`, "views:\n  - type: table\n");
  return root;
}

function withFixture(run) {
  const root = makeValidFixture();
  try {
    run(root);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
}

function assertError(result, pattern) {
  assert.match(result.errors.join("\n"), pattern);
}

test("accepts a complete valid vault fixture", () => {
  withFixture((root) => {
    const result = validateVault(root, { requireComplete: true, requireViews: true });
    assert.deepEqual(result.errors, []);
    assert.equal(result.summary.questions, 1);
    assert.equal(result.summary.auditRecords, 1);
  });
});

test("requires the complete native taxonomy and canonical Paper records", () => {
  const topicDir = join(REPOSITORY_ROOT, "knowledge_base/01-Topics");
  const paperDir = join(REPOSITORY_ROOT, "knowledge_base/03-Papers");
  const read = (dir, file) => parseFrontmatter(readFileSync(join(dir, file), "utf8")).properties;
  const notes = (dir) => readdirSync(dir).filter((file) => file.endsWith(".md"));
  const topicNotes = notes(topicDir).filter((file) => read(topicDir, file).note_type === "topic");
  const subtopicNotes = notes(topicDir).filter((file) => read(topicDir, file).note_type === "subtopic");
  const paperNotes = notes(paperDir).filter((file) => read(paperDir, file).note_type === "paper");
  assert.equal(TOPIC_FILES.length, 8);
  assert.equal(SUBTOPIC_FILES.length, 18);
  assert.equal(PAPER_FILES.length, 34);
  assert.deepEqual(new Set(topicNotes), new Set(TOPIC_FILES));
  assert.deepEqual(new Set(subtopicNotes), new Set(SUBTOPIC_FILES));
  assert.equal(topicNotes.length, 8);
  assert.equal(subtopicNotes.length, 18);
  assert.equal(paperNotes.length, 34);
  const topicBasenames = new Set(TOPIC_FILES.map((file) => file.slice(0, -3)));
  for (const file of TOPIC_FILES) assert.equal(read(topicDir, file).note_type, "topic");
  for (const file of SUBTOPIC_FILES) {
    const properties = read(topicDir, file);
    assert.equal(properties.note_type, "subtopic");
    assert.equal(typeof properties.parent_topic, "string");
    assert.match(properties.parent_topic, /^\[\[[^\]]+\]\]$/);
    assert(topicBasenames.has(normalizeWikiLink(properties.parent_topic)));
  }
  const inventory = JSON.parse(readFileSync(join(REPOSITORY_ROOT, "knowledge_base/06-Audit/source-inventory.json"), "utf8"));
  const inventoryBySource = new Map(inventory.sources.map((source) => [source.source_pdf, source]));
  const canonicalSources = new Set(inventory.sources.filter((source) => !source.duplicate_of).map((source) => source.source_pdf));
  const paperSources = new Set();
  for (const file of PAPER_FILES) {
    const properties = read(paperDir, file);
    assert.equal(properties.note_type, "paper");
    paperSources.add(properties.source_pdf);
    const source = inventoryBySource.get(properties.source_pdf);
    assert(source, `Paper source missing from inventory: ${properties.source_pdf}`);
    assert.equal(properties.sha256, source.sha256);
    assert.equal(properties.page_count, source.page_count);
    assert.equal(properties.text_layer_status, source.text_layer_status);
    for (const key of ["identified_count", "admitted_count", "excluded_count", "unresolved_count"]) {
      assert(Number.isInteger(properties[key]) && properties[key] >= 0);
    }
    assert.equal(properties.identified_count, properties.admitted_count + properties.excluded_count + properties.unresolved_count);
  }
  assert.deepEqual(paperSources, canonicalSources);
  const springPaper = read(paperDir, "2023 Spring Midterm.md");
  assert.deepEqual(springPaper.source_aliases, ["knowledge_base/past_paper/COMP2711_S2023_Final.pdf"]);
  assert.equal([...paperNotes].filter((file) => read(paperDir, file).source_pdf === "knowledge_base/past_paper/COMP2711_S2023_Final.pdf").length, 0);
  assert.equal([...paperNotes].filter((file) => (read(paperDir, file).source_aliases ?? []).includes("knowledge_base/past_paper/COMP2711_S2023_Final.pdf")).length, 1);
  assert.equal(existsSync(join(paperDir, "2023 Spring Final.md")), false);
});
test("rejects duplicate Question IDs", () => {
  withFixture((root) => {
    write(root, "knowledge_base/04-Questions/duplicate.md", questionNote());
    assertError(validateVault(root), /duplicate question ID: Q-2015-MID-P01-a/);
  });
});

test("checks duplicate note IDs globally when source filters are active", () => {
  withFixture((root) => {
    write(root, "knowledge_base/past_paper/other.pdf", "fixture");
    updateJson(root, "knowledge_base/06-Audit/source-inventory.json", (inventory) => {
      inventory.sources.push({ source_pdf: "knowledge_base/past_paper/other.pdf", page_count: 3 });
    });
    write(
      root,
      "knowledge_base/04-Questions/Q-duplicate-from-other-source.md",
      questionNote({ source_pdf: "knowledge_base/past_paper/other.pdf" })
    );

    assertError(
      validateVault(root, { sources: ["knowledge_base/past_paper/sample.pdf"] }),
      /duplicate question ID: Q-2015-MID-P01-a/
    );
  });
});

test("checks duplicate audit IDs globally when source filters are active", () => {
  withFixture((root) => {
    write(root, "knowledge_base/past_paper/other.pdf", "fixture");
    updateJson(root, "knowledge_base/06-Audit/source-inventory.json", (inventory) => {
      inventory.sources.push({ source_pdf: "knowledge_base/past_paper/other.pdf", page_count: 3 });
    });
    updateJson(root, "knowledge_base/06-Audit/question-audit.json", (audit) => {
      audit.questions.push({
        ...audit.questions[0],
        source_pdf: "knowledge_base/past_paper/other.pdf",
        note_path: "knowledge_base/04-Questions/Q-from-other-source.md"
      });
    });

    assertError(
      validateVault(root, { sources: ["knowledge_base/past_paper/sample.pdf"] }),
      /duplicate audit question ID: Q-2015-MID-P01-a/
    );
  });
});

test("rejects a missing source PDF", () => {
  withFixture((root) => {
    rmSync(join(root, "knowledge_base/past_paper/sample.pdf"));
    assertError(validateVault(root), /source PDF does not exist: knowledge_base\/past_paper\/sample\.pdf/);
  });
});

test("rejects source pages beyond the inventory page count", () => {
  withFixture((root) => {
    const path = "knowledge_base/04-Questions/Q-2015-MID-P01-a - Propositional Equivalence.md";
    write(root, path, questionNote({ source_page: 4 }));
    assertError(validateVault(root), /source_page 4 exceeds page count 3/);
  });
});

test("rejects an unresolved Topic Wikilink", () => {
  withFixture((root) => {
    const path = "knowledge_base/04-Questions/Q-2015-MID-P01-a - Propositional Equivalence.md";
    write(root, path, questionNote({ topics: ["[[Topic - Missing - 缺失]]"] }));
    assertError(validateVault(root), /unresolved topics Wikilink: Topic - Missing - 缺失/);
  });
});

test("requires an admitted audit record to have a verified note", () => {
  withFixture((root) => {
    rmSync(join(root, "knowledge_base/04-Questions/Q-2015-MID-P01-a - Propositional Equivalence.md"));
    assertError(
      validateVault(root, { requireComplete: true }),
      /in-scope audit record has no Question note: Q-2015-MID-P01-a/
    );
  });
});

test("rejects Paper counts that do not match the audit", () => {
  withFixture((root) => {
    write(root, "knowledge_base/03-Papers/2015 Midterm.md", paperNote({ admitted_count: 0 }));
    assertError(validateVault(root), /Paper admitted_count is 0 but audit count is 1/);
  });
});

test("rejects placeholder text in a verified note", () => {
  withFixture((root) => {
    const relativePath = "knowledge_base/04-Questions/Q-2015-MID-P01-a - Propositional Equivalence.md";
    const content = readFileSync(join(root, relativePath), "utf8").replace(
      "Apply De Morgan's law",
      "TODO: Apply De Morgan's law"
    );
    write(root, relativePath, content);
    assertError(validateVault(root), /verified Question contains incomplete marker: TODO/);
  });
});

test("rejects an empty required section in a verified note", () => {
  withFixture((root) => {
    const relativePath = "knowledge_base/04-Questions/Q-2015-MID-P01-a - Propositional Equivalence.md";
    const content = readFileSync(join(root, relativePath), "utf8").replace(
      "## Question\nShow that the two propositions are equivalent.",
      "## Question\n   "
    );
    write(root, relativePath, content);
    assertError(validateVault(root), /verified Question section is empty: Question/);
  });
});

test("requires source_paper to reference a Paper for the same source PDF", () => {
  withFixture((root) => {
    write(
      root,
      "knowledge_base/03-Papers/2015 Midterm.md",
      paperNote().replace("knowledge_base/past_paper/sample.pdf", "knowledge_base/past_paper/other.pdf")
    );
    assertError(
      validateVault(root),
      /source_paper 2015 Midterm uses knowledge_base\/past_paper\/other\.pdf, expected knowledge_base\/past_paper\/sample\.pdf/
    );
  });
});

test("requires all seven native Bases only when requested", () => {
  withFixture((root) => {
    rmSync(join(root, "knowledge_base/05-Views/Methods.base"));
    assert.deepEqual(validateVault(root).errors, []);
    assertError(
      validateVault(root, { requireViews: true }),
      /missing required view: knowledge_base\/05-Views\/Methods\.base/
    );
  });
});

test("inventories the complete source corpus with known anomalies", () => {
  const inventory = JSON.parse(readFileSync(
    join(REPOSITORY_ROOT, "knowledge_base/06-Audit/source-inventory.json"),
    "utf8"
  ));

  assert.equal(inventory.sources.length, 35);
  assert.equal(
    new Set(inventory.sources.map((source) => source.source_pdf)).size,
    35
  );
  for (const source of inventory.sources) {
    assert.match(source.sha256, /^[a-f0-9]{64}$/);
    assert(Number.isInteger(source.page_count) && source.page_count > 0);
  }

  const duplicate = inventory.sources.find(
    (source) => source.source_pdf === "knowledge_base/past_paper/COMP2711_S2023_Final.pdf"
  );
  const canonical = inventory.sources.find(
    (source) => source.source_pdf === "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
  );
  assert.equal(
    duplicate.duplicate_of,
    "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
  );
  assert.equal(duplicate.sha256, canonical.sha256);

  const scanned = inventory.sources.find(
    (source) => source.source_pdf === "knowledge_base/past_paper/2013-final.pdf"
  );
  assert.equal(scanned.text_layer_status, "none");
});

// Ruby's standard-library Psych parses actual YAML, including Obsidian's block
// and flow styles. No npm install or community Obsidian plugin is required.
function parseBaseYaml(source) {
  const result = spawnSync("ruby", ["-ryaml", "-rjson", "-e", `
    source = STDIN.read
    visit = lambda do |node|
      if node.is_a?(Psych::Nodes::Mapping)
        keys = node.children.each_slice(2).map { |key, _| key.value }
        raise "duplicate YAML key" unless keys.uniq.length == keys.length
      end
      (node.respond_to?(:children) && node.children || []).each { |child| visit.call(child) }
    end
    visit.call(Psych.parse_stream(source))
    puts JSON.generate(YAML.safe_load(source, permitted_classes: [], aliases: false))
  `], { input: source, encoding: "utf8" });
  assert.equal(result.status, 0, `Native Base YAML parse failed (requires Ruby with Psych): ${result.error ?? result.stderr}`);
  return JSON.parse(result.stdout);
}

function corpusNotes(directory) {
  return readdirSync(join(REPOSITORY_ROOT, directory), { withFileTypes: true }).flatMap((entry) => {
    const path = `${directory}/${entry.name}`;
    if (entry.isDirectory()) return corpusNotes(path);
    if (!entry.name.endsWith(".md")) return [];
    const source = readFileSync(join(REPOSITORY_ROOT, path), "utf8");
    return [{ path, name: entry.name.slice(0, -3), source, ...parseFrontmatter(source) }];
  });
}

function filterExpressions(filter) {
  if (filter === undefined) return [];
  if (typeof filter === "string") return [filter];
  assert(filter && !Array.isArray(filter), "filter must be an expression or a conjunction object");
  const keys = Object.keys(filter);
  assert.equal(keys.length, 1, "filter object needs exactly one conjunction");
  assert(["and", "or", "not"].includes(keys[0]), "invalid filter conjunction");
  assert(Array.isArray(filter[keys[0]]) && filter[keys[0]].length > 0, "empty conjunction");
  return filter[keys[0]].flatMap(filterExpressions);
}

// Independent interpreter for the deliberately small filter vocabulary used by
// these views. Unsupported syntax fails closed instead of silently passing rows.
function matchesBaseFilter(filter, note) {
  if (filter === undefined) return true;
  if (typeof filter !== "string") {
    filterExpressions(filter);
    if (filter.and) return filter.and.every((part) => matchesBaseFilter(part, note));
    if (filter.or) return filter.or.some((part) => matchesBaseFilter(part, note));
    return !filter.not.some((part) => matchesBaseFilter(part, note));
  }
  let match = filter.match(/^note\.([a-z_]+)\s*(==|!=|>=|<=|>|<)\s*("(?:[^"\\]|\\.)*"|\d+)$/);
  if (match) {
    const [, key, op, literal] = match, a = note.properties[key], b = JSON.parse(literal);
    return ({ "==": () => a === b, "!=": () => a !== b, ">=": () => a >= b,
      "<=": () => a <= b, ">": () => a > b, "<": () => a < b })[op]();
  }
  match = filter.match(/^note\.([a-z_]+)\.contains\((?:link\(("(?:[^"\\]|\\.)*")\)|("(?:[^"\\]|\\.)*"))\)$/);
  if (match) {
    const [, key, linkLiteral, stringLiteral] = match;
    return (note.properties[key] ?? []).some((value) => linkLiteral
      ? normalizeWikiLink(value) === normalizeWikiLink(JSON.parse(linkLiteral))
      : value === JSON.parse(stringLiteral));
  }
  match = filter.match(/^file\.inFolder\(("(?:[^"\\]|\\.)*")\)$/);
  if (match) return note.path.startsWith(`${JSON.parse(match[1])}/`);
  throw new Error(`Unsupported static filter: ${filter}`);
}

function baseStructureErrors(base, documented) {
  const errors = [], check = (condition, message) => { if (!condition) errors.push(message); };
  const formulas = base.formulas ?? {};
  const property = (key) => {
    check(typeof key === "string" && /^(?:note|file|formula)\.[A-Za-z_][A-Za-z0-9_]*$/.test(key), `invalid property reference: ${key}`);
    check(documented.has(key), `undocumented property: ${key}`);
    if (key?.startsWith("formula.")) check(Object.hasOwn(formulas, key.slice(8)), `undefined formula: ${key}`);
  };
  const expression = (value) => {
    check(typeof value === "string" && value.length > 0, "empty expression");
    if (typeof value !== "string") return;
    const stripped = value.replace(/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/g, '""');
    check(!/\bthis\b/.test(stripped), "dynamic this semantics are not allowed");
    for (const call of stripped.matchAll(/\.([A-Za-z_][A-Za-z0-9_]*)\s*\(/g)) {
      check(["asLink", "inFolder", "contains", "split", "slice", "join"].includes(call[1]), `unknown expression function: ${call[1]}`);
    }
    for (const ref of stripped.matchAll(/\b(?:note|file|formula)\.[A-Za-z_][A-Za-z0-9_]*/g)) {
      if (!["file.asLink", "file.inFolder"].includes(ref[0])) property(ref[0]);
    }
    const allowed = new Set(["note", "file", "formula", "if", "link", "true", "false"]);
    const bare = stripped.replace(/\.[A-Za-z_][A-Za-z0-9_]*/g, "");
    for (const token of bare.matchAll(/\b[A-Za-z_][A-Za-z0-9_]*\b/g)) check(allowed.has(token[0]), `unknown expression token: ${token[0]}`);
    try { new Function("note", "file", "formula", "iff", "link", `return (${value.replace(/\bif\(/g, "iff(")});`); }
    catch { errors.push(`invalid expression syntax: ${value}`); }
  };
  try { filterExpressions(base.filters).forEach(expression); } catch (error) { errors.push(error.message); }
  for (const [name, formula] of Object.entries(formulas)) { property(`formula.${name}`); expression(formula); }
  Object.keys(base.properties ?? {}).forEach(property);
  check(Array.isArray(base.views) && base.views.length > 0, "missing named views");
  const names = new Set();
  for (const view of base.views ?? []) {
    check(typeof view.name === "string" && view.name.trim() !== "" && !/[#|\[\]]/.test(view.name), "invalid view name");
    check(!names.has(view.name), `duplicate view name: ${view.name}`); names.add(view.name);
    check(view.type === "table", "all delivered views must be native tables");
    check(Array.isArray(view.order) && view.order.length > 0, `missing columns: ${view.name}`);
    check(new Set(view.order).size === view.order?.length, `duplicate columns: ${view.name}`);
    (view.order ?? []).forEach(property);
    for (const sort of view.sort ?? []) { property(sort.property); check(["ASC", "DESC"].includes(sort.direction), "invalid sort direction"); }
    if (view.groupBy) { property(view.groupBy.property); check(["ASC", "DESC"].includes(view.groupBy.direction), "invalid group direction"); }
    for (const [key, summary] of Object.entries(view.summaries ?? {})) {
      property(key); check(["Filled", "Sum", "Average", "Min", "Max", "Unique"].includes(summary), `unsupported summary: ${summary}`);
    }
    try { filterExpressions(view.filters).forEach(expression); } catch (error) { errors.push(error.message); }
  }
  return errors;
}

const BASE_DOCUMENTED = new Set([...readFileSync(join(REPOSITORY_ROOT, "knowledge_base/00-Home/Knowledge Base Guide.md"), "utf8")
  .matchAll(/`((?:note|file|formula)\.[A-Za-z_][A-Za-z0-9_]*)`/g)].map((match) => match[1]));
const ALL_BASES_PRESENT = VIEW_FILES.every((name) => existsSync(join(REPOSITORY_ROOT, "knowledge_base/05-Views", name)));
  const BASES = new Map();

for (const filename of VIEW_FILES) {
  test(`native view structure: ${filename}`, () => {
    const path = join(REPOSITORY_ROOT, "knowledge_base/05-Views", filename);
    assert(existsSync(path), `missing required view: knowledge_base/05-Views/${filename}`);
    const source = readFileSync(path, "utf8"), base = parseBaseYaml(source);
    assert.deepEqual(baseStructureErrors(base, BASE_DOCUMENTED), [], filename);
    BASES.set(filename, base);
    const papers = ["Papers by Year.base", "Paper Reconciliation.base"].includes(filename);
    assert(filterExpressions(base.filters).includes(`note.note_type == "${papers ? "paper" : "question"}"`), "global entity filter is required (folder-only filters also admit Stems)");
    if (!papers) {
      for (const field of filename === "Answer Verification.base" ? ["syllabus_status"] : ["syllabus_status", "verification_status"]) {
        assert(filterExpressions(base.filters).includes(`note.${field} == "${field === "syllabus_status" ? "in-scope" : "verified"}"`));
      }
      for (const stem of corpusNotes("knowledge_base/04-Questions/Stems")) assert.equal(matchesBaseFilter(base.filters, stem), false, stem.path);
    }
  });
}

test("native Bases reject malformed YAML, duplicate views, and invalid references", () => {
  assert.throws(() => parseBaseYaml("views: [\n"), /YAML parse failed/);
  assert.throws(() => parseBaseYaml("views: []\nviews: []\n"), /duplicate YAML key/);
  const good = { filters: 'note.note_type == "question"', views: [{ type: "table", name: "Valid", order: ["note.id"] }] };
  const documented = new Set(["note.id", "note.note_type", "formula.missing"]);
  assert.deepEqual(baseStructureErrors(good, documented), []);
  for (const [mutate, pattern] of [
    [(b) => { b.views = []; }, /missing named views/],
    [(b) => { b.views.push({ ...b.views[0] }); }, /duplicate view name/],
    [(b) => { b.views[0].order.push("note.unknown"); }, /undocumented property/],
    [(b) => { b.views[0].order.push("formula.missing"); }, /undefined formula/],
    [(b) => { b.filters = 'note.note_type =='; }, /invalid expression syntax/],
    [(b) => { b.filters = 'note.note_type.bogus()'; }, /unknown expression function/],
    [(b) => { b.filters = 'this.file.name == "a"'; }, /dynamic this/],
    [(b) => { b.views[0].groupBy = [{ property: "note.id", direction: "ASC" }]; }, /invalid property/]
  ]) {
    const broken = structuredClone(good); mutate(broken);
    assert.match(baseStructureErrors(broken, documented).join("\n"), pattern);
  }
});

test("native Bases exclude website snapshots and legacy root-level records", () => {
  for (const [filename, base] of BASES) {
    const papers = ["Papers by Year.base", "Paper Reconciliation.base"].includes(filename);
    const canonical = corpusNotes(papers ? "knowledge_base/03-Papers" : "knowledge_base/04-Questions")
      .find(note => matchesBaseFilter(base.filters, note));
    assert(canonical, `${filename}: must retain canonical records`);
    for (const path of ["courses/l2-5/sources/notes/copy.md", "06-Audit/copy.md"]) {
      assert.equal(matchesBaseFilter(base.filters, {...canonical, path}), false, `${filename}: duplicate outside knowledge_base`);
    }
  }
});

test("native navigation reaches exactly seven Bases and every static entity view", { skip: !ALL_BASES_PRESENT }, () => {
  assert.deepEqual(readdirSync(join(REPOSITORY_ROOT, "knowledge_base/05-Views")).filter((name) => name.endsWith(".base")).sort(), [...VIEW_FILES].sort());
  const hub = readFileSync(join(REPOSITORY_ROOT, "knowledge_base/00-Home/COMP2711 Knowledge Hub.md"), "utf8");
  for (const filename of VIEW_FILES) assert(hub.includes(filename), filename);
  for (const name of ["Knowledge Base Guide", ...readdirSync(join(REPOSITORY_ROOT, "knowledge_base/06-Audit")).filter((name) => /\.(md|json)$/.test(name))]) {
    assert(hub.includes(name.replace(/\.md$/, "")), `hub missing guide/audit: ${name}`);
  }
  const entities = [...corpusNotes("knowledge_base/01-Topics"), ...corpusNotes("knowledge_base/02-Methods")];
  const questions = corpusNotes("knowledge_base/04-Questions").filter((note) => note.properties.note_type === "question");
  const fields = { topic: "topics", subtopic: "subtopics", concept: "concepts", method: "methods" };
  for (const entity of entities) {
    const field = fields[entity.properties.note_type]; if (!field) continue;
    const filename = field === "methods" ? "Methods.base" : "Topic Coverage.base";
    const base = BASES.get(filename), name = `${entity.properties.id} - Questions`;
    const view = base.views.find((candidate) => candidate.name === name);
    assert(view, `missing static view: ${name}`);
    assert(filterExpressions(view.filters).includes(`note.${field}.contains(link(${JSON.stringify(entity.path)}))`), `incorrect field or full-path target: ${name}`);
    assert(entity.source.includes(`![[knowledge_base/05-Views/${filename}#${name}]]`), `missing matching embed: ${entity.path}`);
    const expected = questions.filter((note) => note.properties[field].some((link) => normalizeWikiLink(link) === entity.name)).map((note) => note.properties.id).sort();
    const actual = questions.filter((note) => matchesBaseFilter(base.filters, note) && matchesBaseFilter(view.filters, note)).map((note) => note.properties.id).sort();
    assert.deepEqual(actual, expected, `incorrect static membership: ${name}`);
    if (field === "topics") assert.equal(view.groupBy?.property, "note.subtopics", "Topic views must group by Subtopic");
  }
  const topic = BASES.get("Topic Coverage.base").views.find((v) => v.name === "Topic and Subtopic Summary");
  assert.equal(topic.groupBy.property, "note.topics");
  assert.equal(topic.sort[0].property, "note.subtopics");
  const methods = BASES.get("Methods.base").views.find((v) => v.name === "Method Summary");
  assert.equal(methods.groupBy.property, "note.methods");
  const papers = BASES.get("Paper Reconciliation.base");
  for (const paper of corpusNotes("knowledge_base/03-Papers")) {
    const name = `${paper.properties.id} - Reconciliation`, view = papers.views.find((v) => v.name === name);
    assert(view, `missing paper view: ${name}`);
    assert(paper.source.includes(`![[knowledge_base/05-Views/Paper Reconciliation.base#${name}]]`));
    assert.deepEqual(corpusNotes("knowledge_base/03-Papers").filter((note) => matchesBaseFilter(view.filters, note)).map((note) => note.properties.id), [paper.properties.id]);
  }
  // Compare all admitted indexes with current audit order, not a historical tree hash.
  const audit = JSON.parse(readFileSync(join(REPOSITORY_ROOT, "knowledge_base/06-Audit/question-audit.json"), "utf8")).questions;
  for (const paper of corpusNotes("knowledge_base/03-Papers")) {
    const index = paper.body.split("## Question Index")[1]?.split(/^## /m)[0] ?? "";
    const actual = [...index.matchAll(/\[\[(?:knowledge_base\/04-Questions\/)?(Q-[^\]|]+)(?:\|[^\]]*)?\]\]/g)].map((m) => m[1].split(" - ")[0]);
    const expected = audit.filter((row) => row.source_pdf === paper.properties.source_pdf && row.status === "in-scope").map((row) => row.id);
    assert.deepEqual(actual, expected, `${paper.name}: printed question order`);
  }
});

test("multi-topic Questions appear in every applicable static view without duplicate notes", { skip: !ALL_BASES_PRESENT }, () => {
  const notes = corpusNotes("knowledge_base/04-Questions").filter((note) => note.properties.note_type === "question");
  const sample = notes.find((note) => note.properties.topics.length > 1 && note.properties.methods.length > 1);
  assert(sample, "need a multi-topic/multi-method sample");
  assert.equal(notes.filter((note) => note.properties.id === sample.properties.id).length, 1);
  for (const [field, directory, filename] of [["topics", "knowledge_base/01-Topics", "Topic Coverage.base"], ["subtopics", "knowledge_base/01-Topics", "Topic Coverage.base"], ["concepts", "knowledge_base/01-Topics", "Topic Coverage.base"], ["methods", "knowledge_base/02-Methods", "Methods.base"]]) {
    for (const target of sample.properties[field]) {
      const entity = corpusNotes(directory).find((note) => note.name === normalizeWikiLink(target));
      const base = BASES.get(filename), view = base.views.find((candidate) => candidate.name === `${entity.properties.id} - Questions`);
      assert(matchesBaseFilter(base.filters, sample) && matchesBaseFilter(view.filters, sample), `${sample.properties.id} missing from ${view.name}`);
    }
  }
});

test("native table columns, grouping, sort ranks, and verification visibility match their responsibilities", { skip: !ALL_BASES_PRESENT }, () => {
  const all = BASES.get("All Questions.base").views[0];
  for (const field of ["note.id", "formula.title", "note.topics", "note.subtopics", "note.year", "note.term", "note.exam_type", "note.marks", "note.difficulty"]) assert(all.order.includes(field), field);
  const paper = BASES.get("Papers by Year.base");
  assert.deepEqual(paper.views[0].sort.slice(0, 3), [
    { property: "note.year", direction: "DESC" },
    { property: "formula.term_order", direction: "ASC" },
    { property: "formula.exam_order", direction: "ASC" }
  ]);
  // Synthetic values detect a syntactically valid formula with the wrong ranks.
  const calculate = (expression, note) => new Function("note", "iff", `return (${expression.replace(/\bif\(/g, "iff(")});`)(note, (condition, a, b) => condition ? a : b);
  assert.deepEqual(["spring", "fall", "unspecified"].map((term) => calculate(paper.formulas.term_order, { term })), [0, 1, 2]);
  assert.deepEqual(["midterm", "final"].map((exam_type) => calculate(paper.formulas.exam_order, { exam_type })), [0, 1]);
  const typeBase = BASES.get("Question Type and Difficulty.base");
  assert.equal(typeBase.views[0].groupBy.property, "note.question_types");
  assert.deepEqual(typeBase.views[0].sort[0], { property: "note.difficulty", direction: "ASC" });
  for (const type of CONTROLLED.question_types) {
    const view = typeBase.views.find((v) => v.name === `Type - ${type}`);
    assert(view, `missing question-type view: ${type}`);
    assert.equal(view.groupBy.property, "note.difficulty");
    for (const candidate of CONTROLLED.question_types) assert.equal(matchesBaseFilter(view.filters, { properties: { question_types: [candidate] } }), candidate === type);
  }
  for (let difficulty = 1; difficulty <= 5; difficulty++) {
    const view = typeBase.views.find((v) => v.name === `Difficulty ${difficulty}`);
    assert(view, `missing difficulty view: ${difficulty}`);
    for (let candidate = 1; candidate <= 5; candidate++) assert.equal(matchesBaseFilter(view.filters, { properties: { difficulty: candidate } }), candidate === difficulty);
  }
  const answer = BASES.get("Answer Verification.base");
  const pending = answer.views.find((v) => v.name === "Needs Verification");
  assert(pending);
  for (const view of answer.views) {
    for (const column of ["note.answer_source", "note.verification_status"]) assert(view.order.includes(column));
    assert.deepEqual(view.sort[0], { property: "formula.verification_order", direction: "ASC" });
  }
  for (const verification_status of CONTROLLED.verification_status) {
    const note = { path: "knowledge_base/04-Questions/example.md", properties: { note_type: "question", syllabus_status: "in-scope", verification_status } };
    assert(matchesBaseFilter(answer.filters, note), "verification view must retain in-scope unfinished work");
    assert.equal(matchesBaseFilter(pending.filters, note), verification_status !== "verified");
    assert.equal(calculate(answer.formulas.verification_order, note.properties), verification_status === "verified" ? 1 : 0);
  }
  const reconciliation = BASES.get("Paper Reconciliation.base").views[0];
  for (const count of ["identified", "admitted", "excluded", "unresolved"]) {
    assert(reconciliation.order.includes(`note.${count}_count`));
    assert.equal(reconciliation.summaries[`note.${count}_count`], "Sum");
  }
  for (const column of ["note.text_layer_status", "note.duplicate_of", "note.source_aliases"]) assert(reconciliation.order.includes(column));
});

test("all native Base embeds and filter links resolve to existing named targets", { skip: !ALL_BASES_PRESENT }, () => {
  for (const directory of ["knowledge_base/00-Home", "knowledge_base/01-Topics", "knowledge_base/02-Methods", "knowledge_base/03-Papers"]) {
    for (const note of corpusNotes(directory)) {
      for (const match of note.source.replaceAll("\\|", "|").matchAll(/\[\[([^\]|]+\.base)(?:#([^\]|]+))?(?:\|[^\]]*)?\]\]/g)) {
        const [, name, viewName] = match, base = BASES.get(name.split("/").at(-1));
        assert(base, `${note.path}: unresolved Base ${name}`);
        if (viewName) assert(base.views.some((view) => view.name === viewName), `${note.path}: unresolved view ${viewName}`);
      }
    }
  }
  for (const [name, base] of BASES) {
    for (const expression of [base.filters, ...base.views.map((view) => view.filters)].flatMap(filterExpressions)) {
      for (const target of expression.matchAll(/link\(("(?:[^"\\]|\\.)*")\)/g)) {
        const path = JSON.parse(target[1]);
        assert(existsSync(join(REPOSITORY_ROOT, path)), `${name}: unresolved filter link ${path}`);
      }
    }
  }
});

test("curated cross-corpus variant and contrast links are reciprocal and explained bilingually", () => {
  const questions = corpusNotes("knowledge_base/04-Questions").filter((note) => note.properties.note_type === "question");
  const byName = new Map(questions.map((note) => [note.name, note]));
  let count = 0;
  for (const question of questions) {
    const connections = question.body.split("## Connections")[1] ?? "";
    for (const relation of connections.matchAll(/^- (Variant \/ 变式|Contrast \/ 对比): (\[\[[^\]]+\]\]) — (.+)$/gm)) {
      count++;
      const [, kind, link, explanation] = relation, other = byName.get(normalizeWikiLink(link));
      assert(other, `${question.name}: missing related Question ${link}`);
      assert.notEqual(other.properties.source_pdf, question.properties.source_pdf, "cross-corpus relation must join distinct Papers");
      assert(question.properties.related_questions.includes(link));
      assert(other.properties.related_questions.includes(`[[${question.name}]]`));
      assert.match(explanation, /[A-Za-z]{3,}/);
      assert.match(explanation, /[\u3400-\u9fff]{8,}/);
      assert(other.body.split("## Connections")[1].includes(`- ${kind}: [[${question.name}]] — `));
    }
  }
  assert(count > 0, "cross-corpus curation must be present");
});

test("Guide permits only the approved direct Question-link criteria", () => {
  const guide = readFileSync(join(REPOSITORY_ROOT, "knowledge_base/00-Home/Knowledge Base Guide.md"), "utf8");
  const approved = ["shared problem archetype", "meaningful variant", "useful contrast"];
  const checkCriteria = (text) => {
    const section = text.split(/^## Curated Question connections\s*$/m)[1]?.split(/^## /m)[0];
    assert(section, "missing curated Question-link policy");
    const clauses = [...section.matchAll(/direct Question link only for\s+([^.]+)\./g)];
    assert.equal(clauses.length, 1, "expected one closed direct-link criterion list");
    const criteria = clauses[0][1].split(/,\s*(?:or\s+)?|\s+or\s+/)
      .map((criterion) => criterion.trim().replace(/^(?:a|an)\s+/, "").replace(/\s+/g, " "));
    assert.deepEqual(criteria, approved, "unsupported direct Question-link criterion");
  };
  checkCriteria(guide);

  // Check the policy list, not the complete Guide text or any historical corpus.
  // Editorial wording outside that list can evolve without changing permission.
  checkCriteria(guide.replace("Use broad Topic/Concept/Method views to find candidates", "Browse the native knowledge views to find candidates"));
  for (const unsupported of ["explicit prerequisite", "same broad Topic", "shared difficulty"]) {
    const invalid = guide.replace("or useful contrast.", `useful contrast, or ${unsupported}.`);
    assert.notEqual(invalid, guide, "negative control must modify the criterion list");
    assert.throws(() => checkCriteria(invalid), /unsupported direct Question-link criterion/);
  }
});
