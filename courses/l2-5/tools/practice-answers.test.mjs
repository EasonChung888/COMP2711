import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {root} from './render.mjs';
import {answerFields,answerBlock} from './practice-answers.mjs';

test('printed error remains official and verified derived result remains separate',()=>{
  const text=fs.readFileSync(path.resolve(root,'../../knowledge_base/04-Questions/Q-2017-MID-P10-c - Combinatorial Selection.md'),'utf8');
  const fields=answerFields(text);
  assert.ok(fields.officialMarkdown.includes('\\binom{35+4-1}{3}'));
  assert.ok(!fields.officialMarkdown.includes('5456'));
  assert.ok(fields.solutionMarkdown.includes('\\binom{33}{3}=5456'));
  const html=answerBlock({id:'Q-2017-MID-P10-c',sourceNote:'source.md',pdf:'paper.pdf',page:12,answerSource:'derived',...fields});
  assert.ok(html.includes('印刷原文与知识库独立推导'));
  assert.deepEqual([...html.matchAll(/<h4>([^<]+)<\/h4>/g)].map(m=>m[1]),['Official Answer','Supplementary Explanation']);
});
test('shared parser preserves fenced H2 comments rather than truncating the retained answer',()=>{
  const source='## Official Answer\n\nPrinted answer.\n\n## Supplementary Explanation\n\n```python\n## English code comment\nprint(1)\n```\n\nRetained ending.\n\n## Common Mistakes\n\nDiscard this legacy prose.\n';
  const fields=answerFields(source);
  assert.ok(fields.solutionMarkdown.includes('## English code comment'));
  assert.ok(fields.solutionMarkdown.endsWith('Retained ending.'));
  assert.ok(!fields.solutionMarkdown.includes('Discard'));
  assert.throws(()=>answerFields(source.replace('English code comment','中文代码注释')),/Non-English/);
});
test('joined socks exercise includes both companion proofs without extra answer sections',()=>{
  const q=JSON.parse(fs.readFileSync(path.join(root,'practice.json'),'utf8')).find(q=>q.id==='Q-2025S-FINAL-P07-N');
  assert.deepEqual(q.answerParts.map(p=>p.id),['Q-2025S-FINAL-P07-N','Q-2025S-FINAL-P07-sufficient','Q-2025S-FINAL-P07-minimal']);
  const html=answerBlock(q);
  assert.deepEqual([...html.matchAll(/<h4>([^<]+)<\/h4>/g)].map(m=>m[1]),['Official Answer','Supplementary Explanation']);
  assert.equal((html.match(/data-answer-source-id=/g)||[]).length,6);
  assert.ok(html.includes('This valid counterexample disproves sufficiency'));
});
test('outdated snapshots stop a rebuild instead of silently restoring a single answer block',()=>{
  assert.throws(()=>answerBlock({id:'old',solutionMarkdown:'Old worked answer.'}),/Refresh the two-part answer snapshot/);
});
