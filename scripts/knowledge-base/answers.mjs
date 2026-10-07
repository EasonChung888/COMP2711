// Structural safeguards only. Source fidelity and mathematical correctness need review.
export const ANSWER_HEADINGS = ['Official Answer', 'Supplementary Explanation'];
export const ABSENT_OFFICIAL = 'No official answer is provided in the supplied source.';
export const NON_ENGLISH = /[\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af]/;

// Mask code rather than deleting it: heading offsets must still address the
// original text, whose content (including comments) remains subject to English QA.
function maskCode(text) {
  let fence = null;
  const masked = text.split(/(?<=\n)/).map(line => {
    const match = line.match(/^ {0,3}(`{3,}|~{3,})([^\r\n]*)/);
    if (fence) {
      const closing = match && match[1][0] === fence.character
        && match[1].length >= fence.length && /^[ \t]*$/.test(match[2]);
      if (closing) fence = null;
      return line.replace(/[^\r\n]/g, ' ');
    }
    if (match && (match[1][0] !== '`' || !match[2].includes('`'))) {
      fence = {character: match[1][0], length: match[1].length};
      return line.replace(/[^\r\n]/g, ' ');
    }
    return line;
  }).join('');
  return masked.replace(/(`+)[\s\S]*?\1/g, code => code.replace(/[^\r\n]/g, ' '));
}

function h2Positions(text) {
  return [...maskCode(text).matchAll(/^ {0,3}##[ \t]+([^\n]+?)[ \t]*(?:\n|$)/gm)]
    .map(match => ({heading: match[1].replace(/[ \t]+#+[ \t]*$/, '').trim(), index: match.index, end: match.index + match[0].length}));
}

export function section(text, heading) {
  const headings = h2Positions(text);
  const index = headings.findIndex(item => item.heading === heading);
  if (index < 0) return '';
  return text.slice(headings[index].end, headings[index + 1]?.index ?? text.length).trim();
}

export function solutionBlocks(text) {
  return ANSWER_HEADINGS.map(heading => ({heading, content: section(text, heading)}));
}

export function workedSolution(text) {
  // A caller may already have selected the Supplementary Explanation body.
  return h2Positions(text).length ? section(text, 'Supplementary Explanation') : text.trim();
}

export function visibleAnswerText(text) {
  return text.replace(/!?\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, target, alias) => alias ?? target)
    .replace(/\[([^\]]+)\]\([^\n)]+\)/g, '$1');
}


export function answerStructureErrors(text, provenance, inventoryBySource) {
  const errors = [];
  const headings = h2Positions(text).map(item => item.heading);
  const expected = ['Source', 'Question', ...ANSWER_HEADINGS, 'Connections'];
  const answerOnly = headings.filter(h => !['Source', 'Question', 'Connections'].includes(h));
  if (JSON.stringify(answerOnly) !== JSON.stringify(ANSWER_HEADINGS)) errors.push('answers must contain exactly Official Answer then Supplementary Explanation');
  if (headings.some(h => ['Source', 'Question', 'Connections'].includes(h)) && JSON.stringify(headings) !== JSON.stringify(expected)) errors.push('unexpected, repeated or out-of-order question heading');
  for (const {heading, content} of solutionBlocks(text)) {
    if (!content) errors.push(`empty ${heading} section`);
    if (NON_ENGLISH.test(visibleAnswerText(content))) errors.push(`${heading} contains non-English answer prose`);
    if (/^ {0,3}#{1,6}(?:[ \t]+|$)/m.test(maskCode(content))) errors.push(`${heading} must not contain nested answer headings`);
  }
  const official = section(text, 'Official Answer');
  const live = maskCode(official);
  const citations = [...live.matchAll(/\[\[([^\]\n]+\.pdf)#page=([^\]|\n]*)(?:\|[^\]\n]+)?\]\]/g)];
  const validPage = value => /^[1-9]\d*$/.test(value) && Number.isSafeInteger(Number(value));
  if (!citations.some(([, , page]) => validPage(page))) errors.push('Official Answer requires a physical PDF page citation');
  for (const [, path, page] of citations) {
    if (!validPage(page)) errors.push(`Official Answer has an invalid physical PDF page citation: ${path}#page=${page}`);
    if (inventoryBySource) {
      const source = inventoryBySource.get(path);
      if (!source || !Number.isInteger(source.page_count) || Number(page) > source.page_count) errors.push(`Official Answer citation outside inventory/page bounds: ${path}#page=${page}`);
    }
  }
  const absence = official.includes(ABSENT_OFFICIAL);
  if (absence) {
    if (provenance !== 'derived') errors.push('official absence requires derived provenance');
    const checkedSource = /^No official answer is provided in the supplied source\.\n\nChecked source: \[\[[^\]\n]+\.pdf#page=[1-9]\d*(?:\|[^\]\n]+)?\]\]\.$/;
    if (!checkedSource.test(official)) errors.push('official absence requires only the availability statement and checked source evidence; do not mix quotation or derived work');
  } else {
    if (/no official answer|official answer (?:is )?(?:absent|unavailable|not provided)/i.test(live)) errors.push('official absence must use the exact availability statement');
    if (!live.replace(/!?\[\[[^\]]+\]\]/g, '').replace(/^Source:\s*\.?$/gm, '').trim()) errors.push('Official Answer has no transcribed content');
    if (/^(?:Provenance:.*independently (?:added|derived)|\*\*Independently derived solution\.\*\*)/mi.test(live)) errors.push('Official Answer must not mix authored explanation with the quotation');
  }
  return errors;
}
