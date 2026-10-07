import {section, workedSolution} from '../knowledge-base/answers.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync,mkdtempSync,mkdirSync,writeFileSync,rmSync} from 'node:fs';
import {join} from 'node:path';
import {tmpdir} from 'node:os';
import {parseFrontmatter} from '../knowledge-base/schema.mjs';
import {collectVaultTotals,formatTotalsTable} from '../knowledge-base/totals.mjs';
import {renderExtractionAudit} from '../knowledge-base/render-audits.mjs';
import {compareInventories} from '../knowledge-base/compare-inventories.mjs';

const read=p=>readFileSync(p,'utf8');
const inventory=JSON.parse(read('knowledge_base/06-Audit/source-inventory.json'));
const audit=JSON.parse(read('knowledge_base/06-Audit/question-audit.json'));
const rows=audit.questions,byId=new Map(rows.map(r=>[r.id,r]));
const note=id=>read(byId.get(id).note_path);
const props=id=>parseFrontmatter(note(id)).properties;
const totals=collectVaultTotals('.',inventory,audit);

test('live totals reconcile current authoritative data and both generated documentation tables',()=>{
 assert.equal(totals.identified,totals.admitted+totals.excluded+totals.unresolved);
 assert.equal(totals.admitted,totals.official+totals.marking_scheme+totals.derived);
 assert.equal(totals.source_filenames,inventory.sources.length);
 assert.equal(totals.canonical_papers,inventory.sources.filter(s=>s.duplicate_of===null).length);
 for(const [folder,type,key] of [['knowledge_base/01-Topics','topic','topics'],['knowledge_base/01-Topics','subtopic','subtopics'],['knowledge_base/01-Topics/Concepts','concept','concepts'],['knowledge_base/02-Methods','method','methods']]){
  const actual=readdirSync(folder).filter(f=>f.endsWith('.md')&&parseFrontmatter(read(join(folder,f))).properties.note_type===type).length;
  assert.equal(totals[key],actual,key);
 }
 const table=formatTotalsTable(totals);
 for(const path of ['knowledge_base/00-Home/Knowledge Base Guide.md','knowledge_base/06-Audit/Extraction and Verification Audit.md'])assert.ok(read(path).includes(table),path+' stale totals');
});

test('totals helper accepts future taxonomy and ignores historical provenance on nonadmitted rows',()=>{
 const root=mkdtempSync(join(tmpdir(),'comp2711-totals-'));
 try {
  mkdirSync(join(root,'knowledge_base'),{recursive:true});
  for(const folder of ['knowledge_base/01-Topics','knowledge_base/02-Methods','knowledge_base/03-Papers','knowledge_base/04-Questions'])mkdirSync(join(root,folder));
  const put=(path,body)=>writeFileSync(join(root,path),'---\n'+body+'\n---\n');
  put('knowledge_base/01-Topics/Future.md','note_type: "topic"');
  put('knowledge_base/03-Papers/Canonical.md','note_type: "paper"\nduplicate_of: null');
  put('knowledge_base/03-Papers/Alias.md','note_type: "paper"\nduplicate_of: "canonical.pdf"');
  put('knowledge_base/04-Questions/Future.md','note_type: "question"\nanswer_source: "marking-scheme"');
  const inv={sources:[{},{}]},a={questions:[{status:'in-scope',note_path:'knowledge_base/04-Questions/Future.md',answer_source:'derived'},{status:'needs-review',answer_source:'official',note_path:null},{status:'out-of-scope',answer_source:'derived',note_path:null}]};
  const t=collectVaultTotals(root,inv,a);assert.deepEqual([t.source_filenames,t.canonical_papers,t.identified,t.admitted,t.excluded,t.unresolved,t.official,t.marking_scheme,t.derived,t.topics],[2,1,3,1,1,1,0,1,0,1]);
  put('knowledge_base/01-Topics/Another.md','note_type: "topic"');assert.equal(collectVaultTotals(root,inv,a).topics,2);
  put('knowledge_base/04-Questions/Future.md','note_type: "question"\nanswer_source: "derived"');assert.equal(collectVaultTotals(root,inv,a).derived,1);
 } finally {rmSync(root,{recursive:true,force:true});}
});

test('maintenance instructions are exact, reproducible and distinguish completeness from certainty',()=>{
 const g=read('knowledge_base/00-Home/Knowledge Base Guide.md');
 for(const command of [
  'python3 scripts/knowledge-base/inventory-pdfs.py --root . --overrides knowledge_base/06-Audit/source-overrides.json --output tmp/source-inventory-recomputed.json',
  'node scripts/knowledge-base/compare-inventories.mjs knowledge_base/06-Audit/source-inventory.json tmp/source-inventory-recomputed.json',
  'node --check scripts/knowledge-base/schema.mjs',
  'node --check scripts/knowledge-base/validate.mjs',
  'node --check scripts/knowledge-base/render-audits.mjs',
  'node --check scripts/knowledge-base/totals.mjs',
  'node --check scripts/knowledge-base/compare-inventories.mjs',
  'node --check scripts/validate-knowledge-base.mjs',
  'node --test scripts/tests/knowledge-base-schema.test.mjs scripts/tests/knowledge-base-validation.test.mjs',
  'node --test scripts/tests/*.test.mjs',
  'node scripts/knowledge-base/totals.mjs',
  'node scripts/knowledge-base/render-audits.mjs',
  'node scripts/validate-knowledge-base.mjs --require-complete --require-views',
  'git diff --check'
 ])assert.ok(g.includes(command),command);
 assert.match(g,/Source completeness/i);assert.match(g,/admission certainty/i);
 assert.match(read('knowledge_base/06-Audit/Extraction and Verification Audit.md'),/Source completeness does not certify unresolved admission/);
});

test('every current atom has individual evidence and every admitted provenance agrees with its note',()=>{
 const rendered=read('knowledge_base/06-Audit/Extraction and Verification Audit.md');
 assert.equal(new Set(rows.map(r=>r.id)).size,rows.length);
 for(const r of rows){
  assert.ok(['in-scope','out-of-scope','needs-review'].includes(r.status));
  for(const key of ['transcription','scope','solution'])assert.ok(typeof r.verification?.[key]==='string'&&r.verification[key].length>20,r.id+' '+key);
  assert.ok(rendered.includes('| '+r.id+' | '+r.status+' |'),r.id+' missing register');
  if(r.status==='in-scope'){
   const p=props(r.id);assert.equal(p.answer_source,r.answer_source,r.id);
   assert.ok(r.verification.solution.length>40,r.id);
   if(p.answer_source==='derived'){assert.match(note(r.id),/deriv|独立推导/i,r.id);assert.match(r.verification.solution,/independent/i,r.id);}
   else assert.ok(p.solution_page.length>0,r.id);
  } else assert.equal(r.note_path,null,r.id);
 }
});

test('source-correction table does not promote quarantined historical provenance',()=>{
 const q={id:'Q-FUTURE-QUARANTINED',source_pdf:'future.pdf',source_page:1,status:'needs-review',answer_source:'derived',note_path:null,source_correction:'Source defect remains unresolved.',verification:{transcription:'Reviewed source page 1.',scope:'Missing necessary domain.',solution:'Countermodel retained in audit.'}};
 const t=renderExtractionAudit('.',{sources:[{source_pdf:'future.pdf'}]},{questions:[q]});
 assert.ok(t.includes('| Q-FUTURE-QUARANTINED | [[future.pdf]] | 1 | not admitted | Source defect'));
 assert.ok(!t.includes('| 1 | derived | Source defect'));
});

function assertTableAliases(text){
 for(const line of text.split('\n').filter(l=>/^\s*\|/.test(l)))for(const match of line.matchAll(/\[\[([^\]]+)\]\]/g))assert.doesNotMatch(match[1],/(?<!\\)\|/,'unescaped wikilink alias splits a Markdown table cell');
}
test('Hub table wikilinks render as links rather than truncated table cells, including a negative control',()=>{
 const hub=read('knowledge_base/00-Home/COMP2711 Knowledge Hub.md');assertTableAliases(hub);
 const table=hub.split('## Browse｜浏览入口')[1].split('\n## ')[0];assert.equal((table.match(/\\\|/g)||[]).length,8);
 assert.throws(()=>assertTableAliases(table.replaceAll('\\|','|')));
 // The restriction is table-scoped; ordinary paragraph aliases remain valid.
 assert.doesNotThrow(()=>assertTableAliases('Open [[Future|label]] in a paragraph.'));
});

test('all knowledge-base Markdown links resolve, control bytes are absent and every Stem is referenced',()=>{
 const walk=dir=>readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(join(dir,e.name)):[join(dir,e.name)]);
 const files=['knowledge_base/00-Home','knowledge_base/01-Topics','knowledge_base/02-Methods','knowledge_base/03-Papers','knowledge_base/04-Questions','knowledge_base/05-Views','knowledge_base/06-Audit','knowledge_base/past_paper'].flatMap(walk),paths=new Set(files);
 const names=new Map();for(const f of files){const n=f.split('/').at(-1);for(const key of new Set([n,n.replace(/\.md$/,'')])){const group=names.get(key)??new Set();group.add(f);names.set(key,group);}}
 const md=files.filter(f=>f.endsWith('.md')),questions=md.filter(f=>f.startsWith('knowledge_base/04-Questions/Q-')).map(read);
 for(const f of md){const text=read(f);assert.doesNotMatch(text,/[\u0000-\u0008\u000B-\u001F]/,f);assertTableAliases(text);
  for(const m of text.replaceAll('\\|','|').matchAll(/!?\[\[([^\]]+)\]\]/g)){const target=m[1].split('|')[0].split('#')[0];if(!target)continue;assert.ok(paths.has(target)||paths.has(target+'.md')||names.get(target)?.size===1,f+' unresolved or ambiguous '+target);}
 }
 for(const f of md.filter(f=>f.startsWith('knowledge_base/04-Questions/Stems/'))){const name=f.split('/').at(-1).slice(0,-3);assert.ok(questions.some(t=>t.includes('[['+name)),f+' orphan Stem');}
});

test('final later-source quarantines retain exact domains and concrete alternative models',()=>{
 const cases={
  'Q-2023F-FINAL-P11':['a_0,b_0','degree1','finite'],
  'Q-2024F-FINAL-P10':['T(1/2)=0 or1','k≥0','2^(k−i)'],
  'Q-2025S-MID-P02-b-iv':['a=m=0','gcd(0,0)','positive-domain'],
  'Q-2025S-FINAL-P06-a':['210','60','between two students'],
  'Q-2025S-FINAL-P08':['13/7','45/7','29/7'],
  'Q-2025F-FINAL-P05-a':['0.8t','8/35','8/17'],
  'Q-2025F-FINAL-P05-b':['0.2t','2/5','2/3']
 };
 for(const [id,tokens] of Object.entries(cases)){const r=byId.get(id);assert.equal(r.status,'needs-review');assert.equal(r.note_path,null);for(const token of tokens)assert.ok(JSON.stringify(r).includes(token),id+' '+token);}
 const posterior=(t,success)=>{const p=success?.2:.8,q=success?.1:.9;return p*t/(p*t+q*(1-t));};
 for(const [t,s,expected] of [[.5,false,8/17],[.25,false,8/35],[.5,true,2/3],[.25,true,2/5]])assert.ok(Math.abs(posterior(t,s)-expected)<1e-12);
 const row='BBBBBGGGGGGGGG',rotations=Array.from({length:14},(_,i)=>row.slice(i)+row.slice(0,i));
 const transitions=s=>[...s].slice(1).filter((c,i)=>c!==s[i]).length;
 assert.equal(rotations.reduce((sum,s)=>sum+transitions(s),0),26);assert.equal((13/7+45/7)/2,29/7);
 let arrangements=0;for(let a=1;a<8;a++)for(let b=a+1;b<8;b++)for(let c=b+1;c<8;c++)arrangements+=6;
 assert.equal(arrangements,210);assert.notEqual(arrangements,5*4*3);
});

test('secondary-source slips retain correct official conclusions and exact answer-page evidence',()=>{
 for(const [id,pages,tokens] of [
  ['Q-2024S-FINAL-P04',[4,5],['3120']],
  ['Q-2024F-MID-P01-c',[4],['7,6']],
  ['Q-2025S-FINAL-P05-c',[7],['n/2','n=4 gives 6']],
  ['Q-2025F-MID-P02-c-premise2',[8],['grouping parentheses']],
  ['Q-2025F-MID-P02-c-proof',[8],['grouping parentheses']],
  ['Q-2025F-FINAL-P09-a',[14,15],['1.584','0.79248']],
  ['Q-2025F-FINAL-P09-b',[15,16],['double minus','256m²−9m^c']]
 ]){assert.equal(props(id).answer_source,'official',id);assert.deepEqual(props(id).solution_page,pages,id);for(const token of tokens)assert.ok(byId.get(id).source_correction.includes(token),id+' '+token);assert.match(note(id).split('## Source')[1].split('## Question')[0],/secondary|line reference|grouping|double minus/,id);}
 for(let k=0,T=1;k<8;k++){const n=4**k;if(k)T=3*T+n*n;assert.equal(T,(16*n*n-3*3**k)/13);}
});

test('all deferred wording defects have item-specific repairs, without mandatory proof-method claims',()=>{
 for(const id of ['Q-2023S-MID-P07-a','Q-2023S-MID-P07-b']){const links=note(id).split('## Connections')[1];assert.match(links,/encode message 2 as 500 with the private exponent/);assert.ok(!links.includes('decrypt'));}
 assert.match(note('Q-2023S-MID-P05'),/coefficients other than 1/);assert.ok(!note('Q-2023S-MID-P05').includes('nonunit'));
 assert.match(byId.get('Q-2020-FINAL2-BONUS-c-player3').verification.solution,/玩家1被淘汰后，玩家3是剩下两人中的后手，获胜概率为2\/3/);
 const p=props('Q-2025F-MID-P04-a-i');assert.equal(p.difficulty,1);assert.match(p.difficulty_basis,/unrestricted row; no adjacency or block condition/);
 assert.ok(note('Q-2024F-FINAL-P05-b').includes('k(k+1)'));
 assert.ok(read('knowledge_base/01-Topics/Concepts/Prime Factorization and LCM - 素因数分解与最小公倍数.md').includes('所得数就不再被相应原数整除'));
 assert.ok(workedSolution(note('Q-2025F-MID-P03-c-ii')).includes('g(n)=f_n(n)+1'));
 assert.ok(!JSON.stringify(audit).includes('strictly le"'));assert.ok(!JSON.stringify(audit).includes('a terminating smaller insta"'));
 const missing=byId.get('Q-2024F-FINAL-P09-a-v');assert.equal(props(missing.id).answer_source,'derived');assert.match(missing.verification.solution,/missing-answer observation must not be framed as a literal printed quotation/);
});

test('inventory comparison tolerates only extraction-count diagnostics and rejects changed identity or source coverage',()=>{
 const stored={schema_version:1,sources:[{source_pdf:'future.pdf',sha256:'a'.repeat(64),page_count:2,duplicate_of:null,text_layer_status:'full',low_text_pages:[],text_char_count:100}]};
 const changed=structuredClone(stored);changed.sources[0].text_char_count=101;
 assert.deepEqual(compareInventories(stored,changed),{verified_sources:1,diagnostic_changes:[{source_pdf:'future.pdf',stored:100,recomputed:101}]});
 for(const [key,value] of [['sha256','b'.repeat(64)],['page_count',3],['duplicate_of','other.pdf'],['text_layer_status','partial'],['low_text_pages',[1]]]){const invalid=structuredClone(changed);invalid.sources[0][key]=value;assert.throws(()=>compareInventories(stored,invalid),undefined,key);}
 for(const sources of [[],[...changed.sources,...changed.sources],[...changed.sources,{...changed.sources[0],source_pdf:'additional.pdf'}]])assert.throws(()=>compareInventories(stored,{schema_version:1,sources}));
});
