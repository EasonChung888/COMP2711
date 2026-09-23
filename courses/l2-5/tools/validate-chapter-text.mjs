import fs from 'node:fs';
import path from 'node:path';
import {root, markdown} from './render.mjs';

let checked = 0;
let math = 0;
for (const id of ['l1-1','l1-2','l1-3','l1-4']) {
  const dir = path.join(root,'chapters',id);
  const config = JSON.parse(fs.readFileSync(path.join(dir,'course.config.json')));
  const manifest = JSON.parse(fs.readFileSync(path.join(dir,'manifest.json')));
  for (const topic of config.topics) {
    const html = fs.readFileSync(path.join(dir,'lessons',`${topic.slug}.html`),'utf8');
    if (html.includes('katex-error')) throw Error(`${id}/${topic.slug}: formula rendering error`);
    math += (html.match(/class="katex"/g)||[]).length;
    for (const n of topic.pages) {
      const record = manifest.pages.find(p => p.page === n);
      const response = fs.readFileSync(path.join(dir,record.response),'utf8');
      if (!html.includes(markdown(response))) throw Error(`${id}/${n}: original response differs in lesson`);
      checked += 1;
    }
  }
}
if (checked !== 189 || math < 100) throw Error(`Unexpected coverage: ${checked} responses, ${math} formulas`);
console.log(`PASS: ${checked} complete original explanations reproduced in lessons; ${math} local KaTeX formula renders without errors.`);
