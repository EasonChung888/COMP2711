import assert from 'node:assert/strict';
import {existsSync, readFileSync, readdirSync} from 'node:fs';
import {join, basename} from 'node:path';
import test from 'node:test';
import {parseFrontmatter} from '../knowledge-base/schema.mjs';

// Fixed source evidence from rendered 2015–2016 question/marking pages.
// No expectation below depends on later-year files or a global vault count.
const root=process.cwd();
const audit=JSON.parse(readFileSync(join(root,'knowledge_base/06-Audit/question-audit.json'),'utf8')).questions;
const counts=new Map([['2015-midterm',[25,24,0,1]],['2015-final',[26,15,0,11]],['2016-midterm',[20,16,1,3]],['2016-final',[27,20,0,7]]]);
const selected=audit.filter(r=>counts.has(r.source_pdf.replace('knowledge_base/past_paper/','').replace('.pdf','')));
const batch=audit.filter(r=>/^knowledge_base\/past_paper\/201[3-6]-(midterm|final)\.pdf$/.test(r.source_pdf));
const byId=new Map(batch.map(r=>[r.id,r]));
const read=id=>{assert.ok(byId.has(id),`missing source item ${id}`);return readFileSync(join(root,byId.get(id).note_path),'utf8');};
const props=id=>parseFrontmatter(read(id)).properties;
const section=(s,h)=>s.match(new RegExp(`## ${h}\\n\\n([\\s\\S]*?)(?=\\n## |$)`))?.[1]?.trim()??'';
const controls=/[\u0000-\u0008\u000B-\u001F]/;
const generic=/\(cid:\d+\)|Exact English source-page transcription|Official result and derivation are on the embedded|从题设识别出|先写出定义或样本空间；再代入题中给出的限制|Directly identifies the required object in|Requires a short, source-specific chain for|Requires a complete multi-step derivation or proof for/;
const expectedOrder={
 '2015-midterm':'P01-a P01-b P01-c P01-d P02-a P02-b P02-c P03-statement-a P03-statement-b P03-statement-c P03-equivalence P04-a P04-b P04-c P05 P06-a P06-b P06-c P06-d P07-a P07-b P07-c P08-a P08-b P08-c',
 '2015-final':'P01-a P01-b P01-c P01-d P02-a P02-b P02-c P02-d P03-a P03-b P04-a P04-b P05-a P05-b P05-c P06-a P06-b P06-c P07-a P07-b P08-a P08-b P09-recurrence P09-closed-form P09-theta P10',
 '2016-midterm':'P01-a P01-b P01-c P01-d P02-a P02-b P03-a P03-b P04-a P04-b P05-a P05-b P06-a P06-b P06-c P06-d P07-a P07-b P07-c P08',
 '2016-final':'P01-a P01-b P01-c P01-d P02-a P02-b P02-c P02-d P03-a-1 P03-a-2 P03-b P03-c P03-d P03-e P04-a P04-b-i P04-b-ii P05-a-raymond P05-a-kenneth P05-b P06-a P06-b P07-a-recurrence P07-a-proof P07-b P07-c P08'
};
const prefix=paper=>`Q-${paper.slice(0,4)}-${paper.endsWith('midterm')?'MID':'FINAL'}-`;

test('2015–2016 enumeration reconciles to fixed source counts and printed order',()=>{
 for(const [paper,expected] of counts){
  const rows=selected.filter(r=>r.source_pdf===`knowledge_base/past_paper/${paper}.pdf`);
  assert.deepEqual([rows.length,...['in-scope','out-of-scope','needs-review'].map(s=>rows.filter(r=>r.status===s).length)],expected,paper);
  assert.deepEqual(rows.map(r=>r.id),expectedOrder[paper].split(' ').map(s=>prefix(paper)+s),`${paper} printed atomic order`);
  const title=paper.slice(0,4)+' '+(paper.endsWith('midterm')?'Midterm':'Final');
  const paperText=readFileSync(join(root,'knowledge_base/03-Papers',title+'.md'),'utf8'),p=parseFrontmatter(paperText).properties;
  assert.deepEqual(['identified_count','admitted_count','excluded_count','unresolved_count'].map(k=>p[k]),expected,paper);
  assert.equal(p.term,'fall');
  const orderedLinks=[...paperText.matchAll(/\[\[(?:knowledge_base\/04-Questions\/)?(Q-201[56]-[^\]|]+)(?:\|[^\]]*)?\]\]/g)].map(m=>m[1]);
  assert.deepEqual(orderedLinks,rows.filter(r=>r.note_path).map(r=>basename(r.note_path,'.md')));
 }
 for(const r of selected)assert.match(r.question_number,/^\d+(?:\([a-z]\))?(?:\(i{1,3}\))?$/,`${r.id}: invented printed label`);
 for(const id of ['Q-2016-FINAL-P03-a-1','Q-2016-FINAL-P03-a-2'])assert.equal(props(id).question_number,'3(a)');
 for(const id of ['Q-2016-FINAL-P05-a-raymond','Q-2016-FINAL-P05-a-kenneth'])assert.equal(props(id).question_number,'5(a)');
 const excluded=byId.get('Q-2016-MID-P08');assert.equal(excluded.note_path,null);assert.match(excluded.exclusion_reason,/coordinate geometry[\s\S]*12–14/);
});

test('every rebuilt atomic note has a substantive prompt, answer, reasoning, and nondefault metadata',()=>{
 const bases=new Set(),derivations=new Set();
 for(const r of selected.filter(r=>r.note_path)){
  const text=read(r.id),p=props(r.id),prompt=section(text,'Question').split(/\n\nShared context:/)[0];
  assert.ok(prompt.length>=20,`${r.id}: empty or truncated atomic prompt`);
  assert.doesNotMatch(prompt,/^(?:What is P|No\. Let p|\$?∃x ∈ U p)\s*\$?$/);
  assert.ok(section(text,'中文解析').length>=50,`${r.id}: Chinese explanation`);
  const solution=section(text,'Detailed Solution');
  assert.match(solution,/^\*\*Answer\.\*\*\s+\S[\s\S]+\n\n\*\*Derivation\/proof\.\*\*\s+\S/m);
  const work=solution.split('**Derivation/proof.** ')[1];assert.ok(work.length>=80,`${r.id}: incomplete derivation`);
  assert.ok(!derivations.has(work),`${r.id}: duplicate generic solution`);derivations.add(work);
  const mistakes=section(text,'Common Mistakes').split('\n').filter(s=>s.startsWith('- '));assert.ok(mistakes.length>=2);
  assert.equal(p.answer_source,r.answer_source??'official');assert.equal(p.verification_status,'verified');assert.equal(p.term,'fall');
  assert.ok(p.difficulty_basis.length>45,`${r.id}: missing factual difficulty basis`);
  assert.ok(!bases.has(p.difficulty_basis),`${r.id}: repeated default difficulty basis`);bases.add(p.difficulty_basis);
  assert.doesNotMatch(text,generic);assert.doesNotMatch(text,controls);
  assert.ok(text.includes(`![[${r.source_pdf}#page=${p.source_page}]]`));
  for(const page of p.solution_page??[])assert.ok(section(text,'Source').includes(`![[${r.source_pdf}#page=${page}]]`));
 }
});

// Each row groups siblings with identical source/solution pages. Marks are
// published per-part values; '-' means the source does not allocate this atom.
const metadata={
 '2015-midterm':[
 ['P01-a P01-b P01-c P01-d',3,[4],[3,3,4,4]],['P02-a P02-b P02-c',5,[6],[4,4,4]],
 ['P03-statement-a P03-statement-b P03-statement-c P03-equivalence',7,[8],[2,2,2,'-']],
 ['P04-a P04-b P04-c',9,[9],[4,4,4]],['P05',10,[10],[10]],['P06-a P06-b P06-c P06-d',11,[11],[2,3,4,5]],
 ['P07-a P07-b P07-c',12,[12],[3,4,4]],['P08-a P08-b P08-c',13,[13],[5,5,5]]],
 '2015-final':[
 ['P01-a P01-b P01-c P01-d',3,[4],[3,2,2,3]],['P02-a P02-b P02-c P02-d',5,[5],[2,2,2,2]],
 ['P03-a',7,[7],[5]],['P03-b',7,[8],[5]],['P04-a P04-b',9,[9],[3,5]],['P05-a P05-b P05-c',10,[10],[4,3,3]],
 ['P06-a P06-b',11,[11],[3,5]],['P06-c',11,[12],[6]],['P07-a P07-b',13,[13],[6,4]],['P08-a P08-b',14,[14],[4,6]],
 ['P09-recurrence P09-closed-form P09-theta',15,[16],[3,5,2]],['P10',17,[17],[10]]],
 '2016-midterm':[
 ['P01-a P01-b P01-c P01-d',3,[3],[2,2,3,3]],['P02-a P02-b',4,[4],[4,6]],['P03-a',5,[5],[9]],['P03-b',5,[6],[6]],
 ['P04-a P04-b',7,[7],[4,6]],['P05-a P05-b',9,[9],[5,5]],['P06-a P06-b P06-c P06-d',10,[10],[3,4,5,3]],['P07-a P07-b P07-c',11,[11],[5,5,5]]],
 '2016-final':[
 ['P01-a P01-b P01-c',3,[3],[2,2,4]],['P01-d',3,[4],[5]],['P02-a P02-b',5,[5],[3,3]],['P02-c P02-d',5,[6],[3,3]],
 ['P03-a-1 P03-a-2 P03-b P03-c P03-d P03-e',7,[7],['-','-',3,3,3,3]],
 ['P04-a',8,[8],[5]],['P04-b-i',8,[8,9],['-']],['P04-b-ii',8,[9],['-']],
 ['P05-a-raymond P05-a-kenneth P05-b',10,[10],['-','-',3]],['P06-a',11,[11],[8]],['P06-b',11,[11,12],[7]],
 ['P07-a-recurrence P07-a-proof P07-b',13,[13],['-','-',3]],['P07-c',13,[13,14],[3]],['P08',15,[15,16],[10]]]
};
test('all rebuilt source pages, solution continuations, and marks match rendered evidence',()=>{
 const checked=new Set();
 for(const [paper,groups] of Object.entries(metadata))for(const [ids,page,sol,marks] of groups)ids.split(' ').forEach((suffix,i)=>{
  const id=prefix(paper)+suffix,record=byId.get(id);
  assert.equal(record.source_page,page,id);
  if(!record.note_path){assert.notEqual(record.status,'in-scope',id);return;}
  const p=props(id);checked.add(id);
  assert.equal(p.source_page,page,id);
  if(p.answer_source==='derived'){assert.equal(p.solution_page,undefined,id);assert.ok(record.source_correction,id);}
  else assert.deepEqual(p.solution_page,sol,id);
  if(marks[i]==='-')assert.ok(!Object.hasOwn(p,'marks'),`${id}: invented split mark`);else assert.equal(p.marks,marks[i],id);
 });
 assert.deepEqual([...checked].sort(),selected.filter(r=>r.note_path).map(r=>r.id).sort());
});

const requiredStems={
 '2015-MID':{P01:'P01-a P01-b P01-c P01-d',P02:'P02-a P02-b P02-c',P03:'P03-statement-a P03-statement-b P03-statement-c P03-equivalence',P04:'P04-a P04-b P04-c',P06:'P06-a P06-b P06-c P06-d',P07:'P07-a P07-b P07-c',P08:'P08-a P08-b P08-c'},
 '2015-FINAL':{P01:'P01-a P01-b P01-c P01-d',P02:'P02-a P02-b P02-c P02-d',P03:'P03-a P03-b',P04:'P04-a P04-b',P05:'P05-a P05-b P05-c',P06:'P06-a P06-b P06-c',P08:'P08-a P08-b',P09:'P09-recurrence P09-closed-form P09-theta'},
 '2016-MID':{P01:'P01-a P01-b P01-c P01-d',P02:'P02-a P02-b',P03:'P03-a P03-b',P05:'P05-a P05-b',P06:'P06-a P06-b P06-c P06-d',P07:'P07-a P07-b P07-c'},
 '2016-FINAL':{P01:'P01-a P01-b P01-c P01-d',P02:'P02-a P02-b P02-c P02-d',P03:'P03-a-1 P03-a-2 P03-b P03-c P03-d P03-e','P04-b':'P04-b-i P04-b-ii',P05:'P05-a-raymond P05-a-kenneth P05-b',P06:'P06-a P06-b',P07:'P07-a-recurrence P07-a-proof P07-b P07-c'}
};
test('required stems exist and contain reusable wording rather than answers or atomic requests',()=>{
 for(const [paper,groups] of Object.entries(requiredStems))for(const [suffix,ids] of Object.entries(groups)){
  const admittedIds=ids.split(' ').filter(id=>byId.get(`Q-${paper}-${id}`)?.note_path);
  if(!admittedIds.length)continue;
  const stem=`STEM-${paper}-${suffix} - Shared Problem Prompt`,path=join(root,'knowledge_base/04-Questions/Stems',stem+'.md');assert.ok(existsSync(path),stem);
  const s=readFileSync(path,'utf8'),body=section(s,'Shared printed wording');assert.ok(body.length>40,stem);
  assert.doesNotMatch(body,/(?:^|\n)\s*(?:Answer|Solution)\s*:|\(cid:\d+\)|The official (?:solution|counting model)|see (?:the )?PDF/i,stem);
  assert.doesNotMatch(body,/\n\s*\([a-z]\)\s+(?:What|Find|Prove|Show|How)/i,stem);
  for(const id of admittedIds)assert.ok(read(`Q-${paper}-${id}`).includes(`[[${stem}]]`),`${id}: missing shared context`);
 }
 const rsa=read('Q-2015-FINAL-P06-c');assert.equal((section(rsa,'Question').match(/You may find the following equalities helpful/g)||[]).length,1);
 assert.ok(section(rsa,'Question').includes('171^2\\bmod527=256'));
});

test('residual 2013–2014 types, mappings, factual bases, and exact recurrence token stay repaired',()=>{
 assert.deepEqual(props('Q-2014-FINAL-P02-d').question_types,['counterexample']);
 for(const id of ['Q-2014-MID-P05-e','Q-2013-MID-P07-c','Q-2013-FINAL-P10-b','Q-2014-MID-P05-b']){
  assert.equal(byId.get(id).status,'needs-review');assert.equal(byId.get(id).note_path,null);
 }
 const inference=props('Q-2013-FINAL-P06-b');assert.ok(inference.subtopics.some(x=>x.includes('Inference and Proofs')));assert.ok(inference.methods.some(x=>x.includes('Proof Method')));assert.ok(!inference.methods.some(x=>x.includes('Translation')));
 const p8=read('Q-2014-FINAL-P08');assert.ok(p8.includes(String.raw`a^n\left(1+\sum_{i=1}^ni(1/a)^i\right)`));assert.doesNotMatch(p8,/iight|Recursion-Tree Method/);assert.ok(props('Q-2014-FINAL-P08').subtopics.some(x=>x.includes('Recursion')));
 for(const [id,pattern] of [
  ['Q-2014-MID-P02-a',/factorial/],['Q-2014-MID-P02-b',/six internal orders/],
  ['Q-2013-MID-P02-c',/endpoints may coincide/],['Q-2013-MID-P02-d',/strict endpoint inequality/],['Q-2014-FINAL-P06-a',/square root of three.*both numerator and denominator/]
 ])assert.match(props(id).difficulty_basis,pattern,id);
 for(const r of batch.filter(r=>r.note_path)){const links=section(read(r.id),'Connections').split('\n').filter(s=>s.trim());assert.doesNotMatch(links.join('\n'),/^- - /m,r.id);assert.equal(new Set(links).size,links.length,`${r.id}: duplicate Connection`);}
});

test('2015 repaired logic, expectation, inclusion-exclusion, and source corrections are explicit',()=>{
 for(const part of ['c','d']){const p=props(`Q-2015-MID-P01-${part}`);assert.deepEqual(p.question_types,['classification']);assert.ok(p.subtopics.some(x=>x.includes('Predicate Logic')));assert.ok(!p.methods.some(x=>x.includes('Translation')));}
 assert.match(section(read('Q-2015-MID-P01-a'),'Detailed Solution'),/\*\*Answer\.\*\* 1, 2, 4/);
 assert.match(read('Q-2015-MID-P02-c'),/printed solution.*line 3.*line 2/);
 const indicator=byId.get('Q-2015-FINAL-P03-a');assert.equal(indicator.status,'needs-review');assert.match(indicator.verification.solution,/indicator expectations/);
 const inclusion=byId.get('Q-2015-FINAL-P03-b');assert.equal(inclusion.status,'needs-review');assert.match(inclusion.verification.solution,/inclusion–exclusion/);
 assert.ok(read('Q-2015-FINAL-P06-c').includes('349^7\\bmod527=2'));assert.match(read('Q-2015-FINAL-P08-b'),/otherwise omitted transition from 0 to 1/);
 assert.match(read('Q-2015-FINAL-P10'),/newly allowed \$m=n\$/);
});

test('2016 atomic formulas, keys, predicate counterexamples, and induction are source faithful',()=>{
 for(const [part,type] of [['a','classification'],['b','counterexample'],['c','counterexample'],['d','classification']]){const p=props(`Q-2016-MID-P06-${part}`);assert.deepEqual(p.question_types,[type]);assert.ok(p.subtopics.some(x=>x.includes('Predicate Logic')));assert.ok(!p.methods.some(x=>x.includes('Translation')));}
 assert.match(read('Q-2016-MID-P06-b'),/set \$x=1\$/);assert.match(read('Q-2016-MID-P06-c'),/witness \$x=1\$/);
 for(const part of ['b','c'])assert.equal(byId.get(`Q-2016-MID-P07-${part}`).status,'needs-review');
 const p4i=section(read('Q-2016-FINAL-P04-b-i'),'Question'),p4ii=section(read('Q-2016-FINAL-P04-b-ii'),'Question');
 const truthTable=section(read('Q-2016-MID-P04-a'),'Detailed Solution');
 assert.ok(truthTable.includes('\n\n| $p$ | $q$ | $r$ |'), 'truth table header must start its own Markdown block');
 const truthRows=truthTable.split('\n').filter(line=>/^\| [TF] \|/.test(line));
 assert.equal(truthRows.length,8);
 for(const row of truthRows){const [p,q,r,xor,result]=row.split('|').slice(1,-1).map(cell=>cell.trim()==='T');assert.equal(xor,p!==q);assert.equal(result,xor===r);}
 assert.equal(byId.get('Q-2016-FINAL-P01-d').status,'needs-review');
 assert.match(byId.get('Q-2016-FINAL-P01-d').verification.solution,/65\/72[\s\S]*2\/3<100\/121/);
 assert.ok(p4i.includes('178^{88}'));assert.ok(p4i.includes('401^{3,243,554}'));assert.ok(p4ii.includes('21^{70}\\bmod71'));assert.ok(p4ii.includes('21^{71}\\bmod72'));assert.doesNotMatch(p4ii,/2\^\{170\}|2\^\{171\}|2170|2171/);assert.notEqual(p4i,p4ii);
 assert.match(section(read('Q-2016-FINAL-P05-a-raymond'),'Detailed Solution'),/d_R=31/);assert.match(section(read('Q-2016-FINAL-P05-a-kenneth'),'Detailed Solution'),/d_K=37/);
 assert.match(read('Q-2016-FINAL-P06-b'),/447693\+988027k/);
 const induction=byId.get('Q-2016-FINAL-P08');assert.equal(induction.status,'needs-review');assert.match(induction.verification.solution,/\(19\/2\)n²−\(5\/2\)n/);assert.match(induction.verification.solution,/−n³/);
 const modPow=(a,e,m)=>{let r=1n;for(a=BigInt(a),e=BigInt(e),m=BigInt(m);e;e>>=1n,a=a*a%m)if(e&1n)r=r*a%m;return r;};
 assert.equal(modPow(6,1161,602),216n);assert.equal(modPow(21,70,71),1n);assert.equal(modPow(21,71,72),45n);assert.equal(modPow(20,7,247),58n);assert.equal(modPow(349,7,527),2n);
});

test('Task 4 linked teaching notes and stems are free of C0 bytes and generic remnants',()=>{
 const targets=new Set();
 for(const r of batch.filter(r=>r.note_path)){const p=props(r.id);for(const link of [...p.concepts,...p.methods])targets.add(link.slice(2,-2));}
 for(const dir of ['knowledge_base/01-Topics/Concepts','knowledge_base/02-Methods'])for(const f of readdirSync(join(root,dir)).filter(f=>targets.has(basename(f,'.md')))){
  const s=readFileSync(join(root,dir,f),'utf8');assert.doesNotMatch(s,controls,f);assert.doesNotMatch(s,generic,f);
  assert.doesNotMatch(s,/Look for the precise vocabulary|State the assumption that makes the rule applicable|the stated domain, independence\/ordering condition, modulus, or initial condition|Apply the governing rule while keeping cases disjoint/,f);
 }
 for(const f of readdirSync(join(root,'knowledge_base/04-Questions/Stems')).filter(f=>/^STEM-201[3-6]-/.test(f))){const s=readFileSync(join(root,'knowledge_base/04-Questions/Stems',f),'utf8');assert.doesNotMatch(s,controls,f);assert.doesNotMatch(s,generic,f);}
 const graph=readFileSync(join(root,'knowledge_base/01-Topics/Concepts/Graph Connectivity - 图连通性.md'),'utf8');assert.match(graph,/spanning tree/);assert.match(graph,/连通分量/);
 const method=readFileSync(join(root,'knowledge_base/02-Methods/Graph Proof Method - 图论证明法.md'),'utf8');assert.match(method,/reached-set boundary/);assert.match(method,/two disjoint triangles/);
});

test('Task 4 body links resolve and superseded notes are absent',()=>{
 const walk=dir=>readdirSync(join(root,dir),{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(join(dir,e.name)):e.name.endsWith('.md')?[join(dir,e.name)]:[]);
 const files=['knowledge_base/00-Home','knowledge_base/01-Topics','knowledge_base/02-Methods','knowledge_base/03-Papers','knowledge_base/04-Questions','knowledge_base/06-Audit'].flatMap(walk);
 const names=new Set(files.map(f=>basename(f,'.md')));
 const scoped=new Set(batch.filter(r=>r.note_path).map(r=>r.note_path));
 for(const f of files)if(/^knowledge_base\/04-Questions\/Stems\/STEM-201[3-6]-/.test(f)||/^knowledge_base\/03-Papers\/201[3-6] (?:Midterm|Final)\.md$/.test(f)||/^(?:knowledge_base\/01-Topics\/Concepts|knowledge_base\/02-Methods)\//.test(f))scoped.add(f);
 for(const file of scoped){
  const s=readFileSync(join(root,file),'utf8');
  for(const match of s.matchAll(/\[\[([^\]]+)\]\]/g)){
   const target=match[1].split('|')[0].split('#')[0];
   assert.ok(!target||names.has(target)||existsSync(join(root,target))||existsSync(join(root,target+'.md')),`${file}: dangling ${target}`);
  }
 }
 const admittedPaths=new Set(batch.filter(r=>r.note_path).map(r=>r.note_path));
 for(const file of files.filter(f=>/^knowledge_base\/04-Questions\/Q-201[3-6]-/.test(f)))assert.ok(admittedPaths.has(file),`${file}: orphan or superseded Question`);
 for(const file of [
  'knowledge_base/04-Questions/Q-2014-MID-P05-b - Conditional Probability.md',
  'knowledge_base/04-Questions/Q-2016-FINAL-P05-a - RSA Cryptosystem.md',
  'knowledge_base/04-Questions/Stems/STEM-2015-FINAL-P07 - Shared Problem Prompt.md',
  'knowledge_base/04-Questions/Stems/STEM-2016-FINAL-P04 - Shared Problem Prompt.md',
  'knowledge_base/04-Questions/Stems/STEM-2016-MID-P04 - Shared Problem Prompt.md'
 ])assert.ok(!existsSync(join(root,file)),`${file}: superseded file remains`);
});
