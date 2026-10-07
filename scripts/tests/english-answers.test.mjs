import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {answerStructureErrors, workedSolution, section, solutionBlocks, ABSENT_OFFICIAL} from '../knowledge-base/answers.mjs';

const quote = 'x = 2.\n\n[[source.pdf#page=1]]';
const explanation = '**Answer.** x = 2.\n\n**Derivation/proof.** Subtract 3 from both sides and divide by 2. The substitution gives 2(2)+3=7.';
const note = (official = quote, supplementary = explanation) =>
  `## Source\n\n![[source.pdf#page=1]]\n\n## Question\n\nSolve 2x+3=7.\n\n## Official Answer\n\n${official}\n\n## Supplementary Explanation\n\n${supplementary}\n\n## Connections\n\n[[Concept - 代数]]`;
const inventory = new Map([['source.pdf', {page_count: 2}]]);
const absent = `${ABSENT_OFFICIAL}\n\nChecked source: [[source.pdf#page=1|physical PDF page 1]].`;

test('two-part contract accepts official, marking-scheme and derived provenance without changing quotations', () => {
  for (const provenance of ['official', 'marking-scheme', 'derived']) assert.deepEqual(answerStructureErrors(note(), provenance, inventory), []);
  assert.deepEqual(answerStructureErrors(note(absent), 'derived', inventory), []);
  assert.equal(section(note(), 'Official Answer'), quote);
  assert.deepEqual(answerStructureErrors(note('**Answer.** ' + quote), 'official', inventory), []);
  assert.deepEqual(solutionBlocks(note()).map(b => b.heading), ['Official Answer', 'Supplementary Explanation']);
});

test('two-part contract rejects extra, duplicate, nested, empty and out-of-order answer sections', () => {
  for (const body of [
    note().replace('## Official Answer', '## Analysis\n\nOld approach.\n\n## Official Answer'),
    note().replace('## Connections', '## Supplementary Explanation\n\nDuplicate.\n\n## Connections'),
    note().replace('## Official Answer', '## Supplementary Explanation').replace('## Supplementary Explanation\n\n**Answer.', '## Official Answer\n\n**Answer.'),
    note(quote, '### Derived Solution\n\n' + explanation),
    note(quote, ''),
    note('', explanation),
  ]) assert.ok(answerStructureErrors(body, 'official', inventory).length, body);
});

test('English contract and source bounds reject missing, invented and non-live citation evidence', () => {
  for (const [body, expected] of [
    [note(quote, '中文解析'), /non-English/],
    [note(quote.replace('x = 2.', '')), /no transcribed content/],
    [note(quote.replace('[[source.pdf#page=1]]', 'page one')), /physical PDF page/],
    [note(quote.replace('[[source.pdf#page=1]]', '`[[source.pdf#page=1]]`')), /physical PDF page/],
    [note(quote.replace('[[source.pdf#page=1]]', '```text\n[[source.pdf#page=1]]\n```')), /physical PDF page/],
    [note(quote.replace('page=1', 'page=0')), /physical PDF page/],
    [note(quote.replace('page=1', 'page=3')), /page bounds/],
    [note(quote.replace('source.pdf', 'unlisted.pdf')), /inventory/],
    [note(quote + '\n\n**Independently derived solution.** My independent proof.'), /mix authored/],
  ]) assert.match(answerStructureErrors(body, 'official', inventory).join('\n'), expected);
  assert.deepEqual(answerStructureErrors(note(quote, 'Use [[Concept - 代数|Algebra]].'), 'official', inventory), []);
});

test('official-absence statement is derived, exact, source-checked, and cannot be mixed with a fabricated quotation', () => {
  assert.match(answerStructureErrors(note(absent), 'official', inventory).join('\n'), /derived provenance/);
  for (const official of [ABSENT_OFFICIAL, absent.replace(ABSENT_OFFICIAL, '`' + ABSENT_OFFICIAL + '`'), absent + '\n\nThe official result is x=2.', absent.replace('page=1', 'page=3'), absent.replace('source.pdf', 'unknown.pdf'), absent.replace('Checked source:', 'Source:'), absent.replace('No official answer is provided in the supplied source.', 'No official answer is available.')]) {
    assert.ok(answerStructureErrors(note(official), 'derived', inventory).length, official);
  }
});

test('proof checks inspect only retained Supplementary Explanation, excluding the official quotation', () => {
  assert.equal(workedSolution(note()), explanation);
  assert.equal(workedSolution(section(note(), 'Supplementary Explanation')), explanation);
  assert.equal(section(note(), 'Analysis'), '');
  assert.equal(section(note(), 'Detailed Solution'), '');
});

test('all migrated answers retain exact audited official and supplementary bodies with no discarded sections', () => {
  const audit = JSON.parse(readFileSync('knowledge_base/06-Audit/answer-format-2026-09-30.json', 'utf8'));
  const sha = text => createHash('sha256').update(text).digest('hex');
  assert.equal(audit.records.length, 715);
  for (const record of audit.records) {
    const text = readFileSync(record.path, 'utf8');
    assert.deepEqual([...text.matchAll(/^## (.+)$/gm)].map(m => m[1]), ['Source', 'Question', 'Official Answer', 'Supplementary Explanation', 'Connections'], record.id);
    assert.equal(sha(section(text, 'Official Answer')), record.retained_official_sha256, record.id + ' quotation');
    assert.equal(sha(section(text, 'Supplementary Explanation')), record.retained_supplementary_sha256, record.id + ' retained reasoning');
    assert.doesNotMatch(section(text, 'Supplementary Explanation'), /^#{3,}\s|^\*\*(?:Approach|Common mistakes|Correction \/ completion)\.\*\*/m, record.id);
  }
});

test('historical audit records the 13 deliberately retired current proof obligations', () => {
  const archive = JSON.parse(readFileSync('scripts/tests/fixtures/pre-two-part-answer-sections.json', 'utf8'));
  const translations = JSON.parse(readFileSync('scripts/tests/fixtures/english-answer-checkpoints.json', 'utf8'));
  assert.equal(Object.keys(archive.removed_proof_obligations).length, 11);
  assert.equal(Object.values(archive.removed_proof_obligations).flatMap(x => x.checkpoints).length, 13);
  const migration = JSON.parse(readFileSync('knowledge_base/06-Audit/answer-format-2026-09-30.json', 'utf8'));
  for (const [id, record] of Object.entries(archive.removed_proof_obligations)) {
    const migrated = migration.records.find(r => r.id === id);
    assert.equal(record.snapshot_sha256, migrated.before_sha256, id + ' historical source');
    const current = section(readFileSync(migrated.path, 'utf8'), 'Supplementary Explanation');
    const check = text => { for (const token of record.checkpoints) assert.ok(text.includes(token), id + ' historical obligation ' + token); };
    check(record.correction);
    for (const token of record.checkpoints) {
      assert.ok(translations[id].english.includes(token), id);
      assert.ok(record.correction.includes(token), id);
      assert.ok(!current.includes(token), id + ' deliberately retired current requirement');
    }
  }
});

test('absence evidence forbids extra raw content even when fenced or inline code', () => {
  for (const extra of ['\n\n```text\nThe official answer is x=99.\n```', '\n\n`x=99`', '\n\n<!-- fabricated answer -->']) {
    assert.match(answerStructureErrors(note(absent + extra), 'derived', inventory).join('\n'), /only the availability statement/);
  }
});

test('code-aware section boundaries retain fenced H2 comments and validate their original English content', () => {
  for (const [opener, closer] of [['```python', '```'], ['~~~python', '~~~~'], ['```python', '````']]) {
    const english = `Reasoning:\n${opener}\n## Explanation\n# Compute the answer\nx=2\n${closer}\n\nThe answer is two.`;
    assert.equal(section(note(quote, english), 'Supplementary Explanation'), english);
    assert.equal(workedSolution(english), english);
    assert.deepEqual(answerStructureErrors(note(quote, english), 'official', inventory), []);
    const chinese = english.replace('# Compute the answer', '# 中文');
    assert.match(answerStructureErrors(note(quote, chinese), 'official', inventory).join('\n'), /non-English/);
  }
});

test('actual nested headings at every Markdown level are rejected while fenced headings remain code', () => {
  for (let level = 1; level <= 6; level++) {
    const heading = '#'.repeat(level) + ' Common Mistakes';
    const errors = answerStructureErrors(note(quote, explanation + '\n\n' + heading + '\n\nDo not guess.'), 'official', inventory);
    assert.ok(errors.some(error => /heading|exactly Official/.test(error)), heading);
  }
  const unclosed = '**Answer.** Two.\n\n```python\n## Explanation\n# 中文';
  assert.equal(workedSolution(unclosed), unclosed);
  assert.match(answerStructureErrors(note(quote, unclosed), 'official', inventory).join('\n'), /non-English/);
});

test('one valid page citation cannot conceal another invalid or unlisted PDF anchor', () => {
  for (const anchor of ['source.pdf#page=0', 'source.pdf#page=-1', 'source.pdf#page=one', 'source.pdf#page=', 'source.pdf#page=3', 'unlisted.pdf#page=0', 'unlisted.pdf#page=1']) {
    const errors = answerStructureErrors(note(quote + '\n\n[[' + anchor + ']]'), 'official', inventory);
    assert.ok(errors.some(error => /page citation|page bounds/.test(error)), anchor);
  }
});
