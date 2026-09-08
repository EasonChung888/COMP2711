import assert from "node:assert/strict";
import {
  mkdtempSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync
} from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { validateVault } from "../knowledge-base/validate.mjs";

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
    source_pdf: "past_paper/sample.pdf",
    source_page: 2,
    topics: ["[[Topic - Logic - 逻辑]]"],
    ...overrides
  };
  const body = bodyOverride ?? `## Source
![[${values.source_pdf}#page=${values.source_page}]]

## Question
Show that the two propositions are equivalent.

## 中文解析
使用逻辑等价律逐步化简。

## Detailed Solution
Apply De Morgan's law and simplify both sides.

## Common Mistakes
Do not reverse an implication without justification.

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
source_pdf: "past_paper/sample.pdf"
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
  write(root, "past_paper/sample.pdf", "fixture");
  write(root, "06-Audit/source-inventory.json", `${JSON.stringify({
    schema_version: 1,
    sources: [{ source_pdf: "past_paper/sample.pdf", page_count: 3 }]
  }, null, 2)}\n`);
  write(root, "06-Audit/question-audit.json", `${JSON.stringify({
    schema_version: 1,
    syllabus_version: "COMP2711-2026-27-fall",
    questions: [{
      id: "Q-2015-MID-P01-a",
      source_pdf: "past_paper/sample.pdf",
      source_page: 2,
      question_number: "1(a)",
      status: "in-scope",
      syllabus_evidence: ["Subtopic - Propositional Logic - 命题逻辑"],
      exclusion_reason: null,
      note_path: "04-Questions/Q-2015-MID-P01-a - Propositional Equivalence.md"
    }]
  }, null, 2)}\n`);
  write(root, "03-Papers/2015 Midterm.md", paperNote());
  write(root, "01-Topics/Topic - Logic - 逻辑.md", "---\nnote_type: \"topic\"\n---\n");
  write(root, "01-Topics/Subtopic - Propositional Logic - 命题逻辑.md", "---\nnote_type: \"subtopic\"\n---\n");
  write(root, "01-Topics/Concepts/Logical Equivalence - 逻辑等价.md", "---\nnote_type: \"concept\"\n---\n");
  write(root, "02-Methods/Logical Equivalence Laws - 逻辑等价律.md", "---\nnote_type: \"method\"\n---\n");
  write(root, "04-Questions/Q-2015-MID-P01-a - Propositional Equivalence.md", questionNote());
  for (const filename of VIEW_FILES) write(root, `05-Views/${filename}`, "views:\n  - type: table\n");
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
test("rejects duplicate Question IDs", () => {
  withFixture((root) => {
    write(root, "04-Questions/duplicate.md", questionNote());
    assertError(validateVault(root), /duplicate question ID: Q-2015-MID-P01-a/);
  });
});

test("checks duplicate note IDs globally when source filters are active", () => {
  withFixture((root) => {
    write(root, "past_paper/other.pdf", "fixture");
    updateJson(root, "06-Audit/source-inventory.json", (inventory) => {
      inventory.sources.push({ source_pdf: "past_paper/other.pdf", page_count: 3 });
    });
    write(
      root,
      "04-Questions/Q-duplicate-from-other-source.md",
      questionNote({ source_pdf: "past_paper/other.pdf" })
    );

    assertError(
      validateVault(root, { sources: ["past_paper/sample.pdf"] }),
      /duplicate question ID: Q-2015-MID-P01-a/
    );
  });
});

test("checks duplicate audit IDs globally when source filters are active", () => {
  withFixture((root) => {
    write(root, "past_paper/other.pdf", "fixture");
    updateJson(root, "06-Audit/source-inventory.json", (inventory) => {
      inventory.sources.push({ source_pdf: "past_paper/other.pdf", page_count: 3 });
    });
    updateJson(root, "06-Audit/question-audit.json", (audit) => {
      audit.questions.push({
        ...audit.questions[0],
        source_pdf: "past_paper/other.pdf",
        note_path: "04-Questions/Q-from-other-source.md"
      });
    });

    assertError(
      validateVault(root, { sources: ["past_paper/sample.pdf"] }),
      /duplicate audit question ID: Q-2015-MID-P01-a/
    );
  });
});

test("rejects a missing source PDF", () => {
  withFixture((root) => {
    rmSync(join(root, "past_paper/sample.pdf"));
    assertError(validateVault(root), /source PDF does not exist: past_paper\/sample\.pdf/);
  });
});

test("rejects source pages beyond the inventory page count", () => {
  withFixture((root) => {
    const path = "04-Questions/Q-2015-MID-P01-a - Propositional Equivalence.md";
    write(root, path, questionNote({ source_page: 4 }));
    assertError(validateVault(root), /source_page 4 exceeds page count 3/);
  });
});

test("rejects an unresolved Topic Wikilink", () => {
  withFixture((root) => {
    const path = "04-Questions/Q-2015-MID-P01-a - Propositional Equivalence.md";
    write(root, path, questionNote({ topics: ["[[Topic - Missing - 缺失]]"] }));
    assertError(validateVault(root), /unresolved topics Wikilink: Topic - Missing - 缺失/);
  });
});

test("requires an admitted audit record to have a verified note", () => {
  withFixture((root) => {
    rmSync(join(root, "04-Questions/Q-2015-MID-P01-a - Propositional Equivalence.md"));
    assertError(
      validateVault(root, { requireComplete: true }),
      /in-scope audit record has no Question note: Q-2015-MID-P01-a/
    );
  });
});

test("rejects Paper counts that do not match the audit", () => {
  withFixture((root) => {
    write(root, "03-Papers/2015 Midterm.md", paperNote({ admitted_count: 0 }));
    assertError(validateVault(root), /Paper admitted_count is 0 but audit count is 1/);
  });
});

test("rejects placeholder text in a verified note", () => {
  withFixture((root) => {
    const relativePath = "04-Questions/Q-2015-MID-P01-a - Propositional Equivalence.md";
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
    const relativePath = "04-Questions/Q-2015-MID-P01-a - Propositional Equivalence.md";
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
      "03-Papers/2015 Midterm.md",
      paperNote().replace("past_paper/sample.pdf", "past_paper/other.pdf")
    );
    assertError(
      validateVault(root),
      /source_paper 2015 Midterm uses past_paper\/other\.pdf, expected past_paper\/sample\.pdf/
    );
  });
});

test("requires all seven native Bases only when requested", () => {
  withFixture((root) => {
    rmSync(join(root, "05-Views/Methods.base"));
    assert.deepEqual(validateVault(root).errors, []);
    assertError(
      validateVault(root, { requireViews: true }),
      /missing required view: 05-Views\/Methods\.base/
    );
  });
});

test("inventories the complete source corpus with known anomalies", () => {
  const inventory = JSON.parse(readFileSync(
    join(REPOSITORY_ROOT, "06-Audit/source-inventory.json"),
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
    (source) => source.source_pdf === "past_paper/COMP2711_S2023_Final.pdf"
  );
  const canonical = inventory.sources.find(
    (source) => source.source_pdf === "past_paper/COMP2711_S2023_Midterm.pdf"
  );
  assert.equal(
    duplicate.duplicate_of,
    "past_paper/COMP2711_S2023_Midterm.pdf"
  );
  assert.equal(duplicate.sha256, canonical.sha256);

  const scanned = inventory.sources.find(
    (source) => source.source_pdf === "past_paper/2013-final.pdf"
  );
  assert.equal(scanned.text_layer_status, "none");
});
