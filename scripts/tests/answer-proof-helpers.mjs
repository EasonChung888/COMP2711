import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {workedSolution, visibleAnswerText, NON_ENGLISH} from '../knowledge-base/answers.mjs';

const archived = JSON.parse(readFileSync(new URL('./fixtures/pre-two-part-answer-sections.json', import.meta.url), 'utf8'));

// Historical fixtures are explicitly separate from the current note contract.
export function historicalSection(text, heading) {
  const id = text.match(/^id: "([^"]+)"/m)?.[1];
  const content = archived.sections[id]?.[heading];
  assert.ok(content, `${id}: no explicitly archived ${heading} fixture`);
  return content;
}

const translations = JSON.parse(readFileSync(new URL('./fixtures/english-answer-checkpoints.json', import.meta.url), 'utf8'));

export function translatedCheckpoints(id, legacy) {
  const record = translations[id];
  assert.ok(record, `${id}: missing checkpoint translation`);
  assert.deepEqual(record.legacy, legacy, `${id}: original proof obligations changed`);
  assert.equal(record.english.length, legacy.length, `${id}: checkpoint translation must preserve each obligation`);
  for (const token of record.english) assert.ok(typeof token === 'string' && token.length && !NON_ENGLISH.test(token), `${id}: incomplete English checkpoint`);
  const retired = archived.removed_proof_obligations[id]?.checkpoints ?? [];
  return record.english.filter(token => !retired.includes(token));
}

export function checkWorkedProof(text, checkpoints, id) {
  const block = workedSolution(text);
  assert.ok(block, `${id}: missing authored worked solution`);
  assert.match(block, /\*\*Answer\.\*\*/, `${id}: missing answer`);
  assert.match(block, /\*\*Derivation\/proof\.\*\*/, `${id}: missing derivation`);
  assert.ok(!NON_ENGLISH.test(visibleAnswerText(block)), `${id}: untranslated answer prose`);
  for (const token of checkpoints) assert.ok(block.includes(token), `${id}: missing proof obligation ${token}`);
  const prose = block.replace(/```[\s\S]*?```|`[^`]*`/g, '').replace(/\*\*(Answer|Derivation\/proof)\.\*\*/g, '').trim();
  assert.doesNotMatch(prose, /pending checkpoints|not yet derived|see the (?:English )?answer/i, `${id}: checklist/approach is not worked reasoning`);
  assert.ok(prose.replace(/\s/g, '').length >= 60, `${id}: insufficient worked content`);
  assert.ok((prose.match(/[A-Za-z]+/g) ?? []).length >= 12, `${id}: insufficient explanatory English`);
}

export {workedSolution};
