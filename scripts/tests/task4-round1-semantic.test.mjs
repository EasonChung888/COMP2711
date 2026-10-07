import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = process.cwd();
const expectedSourceCounts = new Map([
  ["knowledge_base/past_paper/2013-midterm.pdf", 25],
  ["knowledge_base/past_paper/2013-final.pdf", 21],
  ["knowledge_base/past_paper/2014-midterm.pdf", 20],
  ["knowledge_base/past_paper/2014-final.pdf", 24]
]);
const selectedSources = new Set(expectedSourceCounts.keys());
const audit = JSON.parse(readFileSync(join(root, "knowledge_base/06-Audit/question-audit.json"), "utf8"));
const records = audit.questions.filter((record) => selectedSources.has(record.source_pdf));
const quarantined = new Set(['Q-2013-MID-P05-a','Q-2013-MID-P05-b','Q-2013-MID-P05-c','Q-2014-MID-P02-c','Q-2014-MID-P07-expectation','Q-2014-MID-P07-n100']);
for (const family of JSON.parse(readFileSync('scripts/tests/fixtures/probability-model-review.json','utf8')).families)
  for (const id of family.quarantined_ids) quarantined.add(id);
// Newline and horizontal tab are legitimate Markdown whitespace. Every other C0
// byte, including carriage return, is an extraction artifact in this corpus.
const controls = /[\u0000-\u0008\u000B-\u001F]/;
const atomicWholeProblemMarks = new Set([
  "Q-2013-MID-P03", "Q-2013-MID-P08",
  "Q-2013-FINAL-P03", "Q-2013-FINAL-P04", "Q-2013-FINAL-P07", "Q-2013-FINAL-P09",
  "Q-2014-MID-P03", "Q-2014-MID-P08",
  "Q-2014-FINAL-P07", "Q-2014-FINAL-P08"
]);
const typeAssertions = new Map([
  ["Q-2013-MID-P03", "proof"],
  ["Q-2013-MID-P08", "construction"],
  ["Q-2013-FINAL-P01-a", "proof"],
  ["Q-2013-FINAL-P01-b", "classification"],
  ["Q-2013-FINAL-P03", "proof"],
  ["Q-2013-FINAL-P04", "proof"],
  ["Q-2013-FINAL-P09", "proof"],
  ["Q-2014-MID-P03", "proof"],
  ["Q-2014-FINAL-P02-a", "proof"],
  ["Q-2014-FINAL-P02-b", "counterexample"],
  ["Q-2014-FINAL-P04-b", "proof"],
  ["Q-2014-FINAL-P08", "proof"],
  ["Q-2014-FINAL-P10-recurrence", "construction"]
]);
const requiredStems = new Map([
  ["STEM-2013-FINAL-P05", ["Q-2013-FINAL-P05-a", "Q-2013-FINAL-P05-b", "Q-2013-FINAL-P05-c"]],
  ["STEM-2013-FINAL-P08", ["Q-2013-FINAL-P08-closed-form", "Q-2013-FINAL-P08-theta"]]
]);

function section(note, heading) {
  const match = note.match(new RegExp(`## ${heading}\\n\\n([\\s\\S]*?)(?=\\n## |$)`));
  return match?.[1]?.trim() ?? "";
}

test("2013–2014 atomic notes are source-complete and non-template", () => {
  const difficultyBases = new Map();
  const counts = new Map();
  for (const record of records) {
    counts.set(record.source_pdf, (counts.get(record.source_pdf) ?? 0) + 1);
    if (quarantined.has(record.id)) {
      assert.equal(record.status, 'needs-review', record.id);
      assert.equal(record.note_path, null, record.id);
      assert.ok(record.verification?.solution, record.id);
      continue;
    }
    assert.equal(record.status, "in-scope", `${record.id} should be admitted`);
    assert.ok(record.note_path, `${record.id} needs a note path`);
    const file = join(root, record.note_path);
    assert.ok(existsSync(file), `${record.id} note is missing`);
    const note = readFileSync(file, "utf8");
    assert.doesNotMatch(note, controls, `${record.id} contains an extraction control byte`);
    assert.doesNotMatch(note, /\(cid:\d+\)|Exact English source-page transcription|Official result and derivation are on the embedded/i);
    const prompt = section(note, "Question");
    const solution = section(note, "Supplementary Explanation");
    assert.ok(prompt.length >= 30, `${record.id} has an empty or truncated atomic prompt`);
    assert.match(solution, /^\*\*Answer\.\*\*\s+\S[\s\S]*?\n\n\*\*Derivation\/proof\.\*\*\s+\S/m, `${record.id} needs answer and derivation`);
    assert.doesNotMatch(solution, /从题设识别出|按 .*逐步处理|先写出定义或样本空间；再代入题中给出的限制/i, `${record.id} still has a generic derivation`);
    assert.match(note, /^source_page: [1-9]\d*$/m, `${record.id} needs a source page`);
    if (record.answer_source === 'derived') assert.ok(record.source_correction, `${record.id} needs explicit correction evidence`);
    else assert.match(note, /^solution_page: \[[1-9]\d*(, [1-9]\d*)*\]$/m, `${record.id} needs a source-grounded solution page`);
    const expectedTerm = record.source_pdf.startsWith("knowledge_base/past_paper/2013-") ? "spring" : "fall";
    assert.match(note, new RegExp(`^term: "${expectedTerm}"$`, "m"), `${record.id} must retain the source's semester`);
    if (atomicWholeProblemMarks.has(record.id)) {
      assert.match(note, /^marks: [1-9]\d*$/m, `${record.id} is a complete printed problem with a supported mark`);
    } else {
      assert.doesNotMatch(note, /^marks: /m, `${record.id} must not invent a per-part mark from a whole-problem total`);
    }
    if (typeAssertions.has(record.id)) {
      assert.ok(note.includes(`question_types: ["${typeAssertions.get(record.id)}"]`), `${record.id} type must follow the actual request`);
    }
    const basis = note.match(/^difficulty_basis: "(.+)"$/m)?.[1];
    assert.ok(basis && basis.length > 45, `${record.id} needs concrete difficulty evidence`);
    assert.doesNotMatch(
      basis,
      /^(?:Directly identifies the required object in|Requires a short, source-specific chain for|Requires a complete multi-step derivation or proof for)\b/,
      `${record.id} difficulty basis must not be a prompt-interpolated template`
    );
    difficultyBases.set(basis, (difficultyBases.get(basis) ?? 0) + 1);
  }
  assert.ok([...difficultyBases.values()].every((count) => count <= 2), "difficulty metadata must not be a fixed generated default");
  for (const [source, expected] of expectedSourceCounts) {
    const count = counts.get(source) ?? 0;
    assert.equal(count, expected, `${source} must retain its independently enumerated atomic count`);
    const [year, exam] = source.match(/(20\d\d)-(midterm|final)/).slice(1);
    const paper = readFileSync(join(root, "knowledge_base/03-Papers", `${year} ${exam === "midterm" ? "Midterm" : "Final"}.md`), "utf8");
    assert.match(paper, new RegExp(`identified_count: ${count}`), `${source} paper count must reconcile with its audit rows`);
    const admitted = records.filter(record => record.source_pdf === source && record.status === 'in-scope').length;
    assert.match(paper, new RegExp(`admitted_count: ${admitted}`), `${source} admitted count must reconcile with its audit rows`);
  }
});

test("2013–2014 stems retain only shared context", () => {
  const referenced = new Set();
  for (const record of records.filter(record => record.note_path)) {
    const note = readFileSync(join(root, record.note_path), "utf8");
    for (const match of note.matchAll(/\[\[(STEM-201[34]-[^\]|]+) - Shared Problem Prompt\]\]/g)) referenced.add(match[1]);
  }
  for (const id of referenced) {
    const path = join(root, "knowledge_base/04-Questions", "Stems", `${id} - Shared Problem Prompt.md`);
    assert.ok(existsSync(path), `${id} is linked but absent`);
    const stem = readFileSync(path, "utf8");
    assert.doesNotMatch(stem, controls, `${id} contains a control byte`);
    assert.match(stem, /## Shared printed wording\n\n\S/);
    assert.doesNotMatch(stem, /\n(?:Answer|Solution)\s*:/i, `${id} leaks an answer-bearing extraction block`);
    // Source-shared predicates and the premises used by a later inference may
    // contain printed lettered statements; answer-bearing blocks remain banned.
  }
  for (const [stemId, questionIds] of requiredStems) {
    const path = join(root, "knowledge_base/04-Questions", "Stems", `${stemId} - Shared Problem Prompt.md`);
    assert.ok(existsSync(path), `${stemId} is a required shared stem, not merely a discovered reference`);
    const stem = readFileSync(path, "utf8");
    assert.match(stem, /## Shared printed wording\n\n\S/, `${stemId} needs real source wording`);
    for (const questionId of questionIds) {
      const record = records.find((candidate) => candidate.id === questionId);
      assert.ok(record, `${questionId} must remain in the source audit`);
      const note = readFileSync(join(root, record.note_path), "utf8");
      assert.match(note, new RegExp(`\\[\\[${stemId} - Shared Problem Prompt\\]\\]`), `${questionId} must link its required shared stem`);
    }
  }
});

test("2013–2014 source-specific corrections remain represented", () => {
  const byId = new Map(records.map((record) => [record.id, record]));
  const read = (id) => readFileSync(join(root, byId.get(id).note_path), "utf8");
  assert.ok(read("Q-2013-MID-P01-c").includes("\\binom{4}{3}\\binom{8}{2}+\\binom{4}{4}\\binom{8}{1}=120"));
  assert.ok(read("Q-2014-MID-P04-b").includes("12!/(4!3!3!)=554400"));
  assert.equal(byId.get('Q-2013-MID-P06-c').status,'needs-review');
  assert.match(byId.get('Q-2013-MID-P06-c').verification.solution,/0\.6337[\s\S]*0\.6322[\s\S]*cross-day|0\.6337[\s\S]*0\.6322[\s\S]*repeat/);
  assert.doesNotMatch(read("Q-2014-FINAL-P08"), controls, "the recurrence proof must not contain a carriage return");
  for (const id of ["Q-2014-MID-P05-a", "Q-2014-MID-P05-c"]) {
    assert.equal(byId.get(id).status,'needs-review');
    assert.match(byId.get(id).verification.solution,/fair marginals|fair coupling/);
  }
  const p9 = read("Q-2013-FINAL-P09");
  assert.match(p9, /\[\[Mathematical Induction - 数学归纳法\]\]/);
  assert.match(p9, /\[\[Induction Proof Method - 归纳证明法\]\]/);
  assert.doesNotMatch(read("Q-2013-FINAL-P04"), /RSA Cryptosystem|RSA Calculation Method/, "the Fermat/CRT proof must not inherit RSA mappings");
  const midtermAnomaly = ["Q-2014-MID-P05-second-a", "Q-2014-MID-P05-second-b"];
  for (const id of midtermAnomaly) assert.match(byId.get(id).question_number, /^5\([ab]\)$/, `${id} must preserve its printed Problem 5 label`);
  const midtermPaper = readFileSync(join(root, "knowledge_base/03-Papers/2014 Midterm.md"), "utf8");
  assert.match(midtermPaper, /## Source-numbering anomaly[\s\S]*second \*\*Problem 5\*\*/);
  assert.deepEqual(
    records.filter((record) => record.source_pdf === "knowledge_base/past_paper/2014-final.pdf" && record.question_number === "10").map((record) => record.id),
    ["Q-2014-FINAL-P10-recurrence", "Q-2014-FINAL-P10-closed-form"],
    "2014 Final Problem 10 must remain in printed recurrence-then-closed-form order"
  );
});
