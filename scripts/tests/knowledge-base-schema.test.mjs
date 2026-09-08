import assert from "node:assert/strict";
import test from "node:test";
import {
  parseFrontmatter,
  normalizeWikiLink,
  validateQuestionProperties
} from "../knowledge-base/schema.mjs";

function validQuestion(overrides = {}) {
  return {
    id: "Q-2015-MID-P01-a",
    note_type: "question",
    schema_version: 1,
    course: "COMP2711",
    source_paper: "[[2015 Midterm]]",
    source_pdf: "past_paper/2015-midterm.pdf",
    source_page: 3,
    question_number: "1(a)",
    year: 2015,
    term: "unspecified",
    exam_type: "midterm",
    topics: ["[[Topic - Logic - 逻辑]]"],
    subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"],
    concepts: ["[[Logical Equivalence - 逻辑等价]]"],
    methods: ["[[Logical Equivalence Laws - 逻辑等价律]]"],
    question_types: ["proof"],
    difficulty: 3,
    difficulty_basis: "Several justified equivalence steps",
    syllabus_version: "COMP2711-2026-27-fall",
    syllabus_status: "in-scope",
    answer_source: "official",
    verification_status: "verified",
    ...overrides
  };
}

test("parses the supported Obsidian frontmatter subset", () => {
  const note = `---
id: "Q-2015-MID-P01-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
topics: ["[[Topic - Logic - 逻辑]]"]
difficulty: 3
published: true
solution_page: null
---
# Body`;
  const parsed = parseFrontmatter(note);
  assert.equal(parsed.properties.id, "Q-2015-MID-P01-a");
  assert.deepEqual(parsed.properties.topics, ["[[Topic - Logic - 逻辑]]"]);
  assert.equal(parsed.properties.difficulty, 3);
  assert.equal(parsed.properties.published, true);
  assert.equal(parsed.properties.solution_page, null);
  assert.equal(parsed.body.trim(), "# Body");
});
test("rejects multiline YAML arrays outside the contract", () => {
  assert.throws(
    () => parseFrontmatter("---\ntopics:\n  - one\n---\nBody"),
    /multiline YAML arrays are not supported/
  );
});

test("normalizes an aliased Wikilink", () => {
  assert.equal(normalizeWikiLink("[[Topic - Logic - 逻辑|Logic]]"), "Topic - Logic - 逻辑");
});

test("normalizes a Wikilink with path and heading fragments", () => {
  assert.equal(normalizeWikiLink("[[01-Topics/Topic - Logic - 逻辑#Overview]]"), "Topic - Logic - 逻辑");
});

test("accepts a complete in-scope Question note", () => {
  assert.deepEqual(validateQuestionProperties(validQuestion()), []);
});

test("rejects a Question note outside the admitted syllabus", () => {
  const errors = validateQuestionProperties(validQuestion({ syllabus_status: "out-of-scope" }));
  assert(errors.includes("syllabus_status must be in-scope"));
});

test("enforces required fields, controlled values, links, and difficulty", () => {
  const question = validQuestion({
    source_paper: "2015 Midterm",
    topics: [],
    term: "summer",
    question_types: ["essay"],
    difficulty: 6
  });
  delete question.methods;

  const errors = validateQuestionProperties(question);
  assert(errors.includes("missing required property: methods"));
  assert(errors.includes("source_paper must be a Wikilink"));
  assert(errors.includes("topics must be a nonempty array of Wikilinks"));
  assert(errors.includes("term must be one of: spring, fall, unspecified"));
  assert(errors.includes("question_types contains unsupported value: essay"));
  assert(errors.includes("difficulty must be an integer from 1 to 5"));
});

test("validates the three optional fields", () => {
  const errors = validateQuestionProperties(validQuestion({
    solution_page: [0, 2.5],
    marks: 0,
    related_questions: ["[[Not a Question]]", "plain text"]
  }));

  assert(errors.includes("solution_page must be an array of positive integers"));
  assert(errors.includes("marks must be a positive number"));
  assert(errors.includes("related_questions must be an array of Question Wikilinks"));
});
