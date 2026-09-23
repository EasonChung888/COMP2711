import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync,statSync,existsSync} from 'node:fs';
import {basename,join} from 'node:path';
import {createHash} from 'node:crypto';
import {parseFrontmatter,validateQuestionProperties} from '../knowledge-base/schema.mjs';

const R=String.raw;
const fixture=JSON.parse(readFileSync('scripts/tests/fixtures/task9-source-evidence.json','utf8'));
const specs={
 '2025S-MID':['COMP2711_S2025_Midterm','2025 Spring Midterm',20,16,4,12,4,'P01-a P01-b P01-c P02-a-i P02-a-ii P02-a-iii P02-b-iv P02-b-v P03 P04-i P04-ii P04-iii P04-iv P04-v P05 P06-a P06-b P07 P08-a P08-b'],
 '2025S-FINAL':['COMP2711_S2025_Final','2025 Spring Final',31,29,2,29,0,'P01-a-i P01-a-ii P01-a-iii P01-b P01-c P01-d P02-a P02-b P03-a P03-b P04-a P04-b P05-a-i P05-a-ii P05-a-iii P05-b P05-c P06-a P06-b P07-N P07-sufficient P07-minimal P08 P09 P10 P11 P12-a-i P12-a-ii P12-a-iii P12-b P12-c'],
 '2025F-MID':['COMP2711_F2025_Midterm','2025 Fall Midterm',44,33,11,33,0,'P01-a P01-b P01-c P02-a-i P02-a-ii P02-b P02-c-premise1 P02-c-premise2 P02-c-proof P03-a P03-b P03-c-i P03-c-ii P03-c-iii P03-c-iv P03-c-v P03-c-vi P03-c-vii P04-a-i P04-a-ii P04-a-iii P04-a-iv P04-b P04-c-i P04-c-ii P04-d P05 P06 P07 P08-a P08-b P08-c P08-d P08-e P09-a P09-b P10-a-i-E P10-a-i-var P10-a-ii-E P10-a-ii-var P10-a-iii-E P10-a-iii-var P10-b P10-c'],
 '2025F-FINAL':['COMP2711_F2025_Final','2025 Fall Final',36,34,2,34,0,'P01-a P01-b P01-c-i P01-c-ii P02-a-i P02-a-ii P02-a-iii P02-b P02-c P03-a P03-b P03-c P04-a P04-b P04-c P05-a P05-b P06 P07-i P07-ii P07-iii P08-i P08-ii P08-iii P08-iv P08-v P09-a P09-b P10-i P10-ii P10-iii P11-a-i P11-a-ii P11-a-iii P11-b P11-c']
};
const sources=new Set(Object.values(specs).map(s=>'knowledge_base/past_paper/'+s[0]+'.pdf'));
const allRows=JSON.parse(readFileSync('knowledge_base/06-Audit/question-audit.json','utf8')).questions;
const rows=allRows.filter(r=>sources.has(r.source_pdf));
const admitted=rows.filter(r=>r.note_path),byId=new Map(rows.map(r=>[r.id,r]));
const read=id=>readFileSync(byId.get(id).note_path,'utf8');
const prop=id=>parseFrontmatter(read(id)).properties;
const section=(t,h)=>t.match(new RegExp(`## ${h}\\n\\n([\\s\\S]*?)(?=\\n## |$)`))?.[1]?.trim()??'';
const hash=x=>createHash('sha256').update(x).digest('hex');
const walk=p=>readdirSync(p).flatMap(n=>{const f=join(p,n);return statSync(f).isDirectory()?walk(f):[f];});
const files=['knowledge_base/01-Topics','knowledge_base/02-Methods','knowledge_base/03-Papers','knowledge_base/04-Questions','knowledge_base/06-Audit'].flatMap(walk);
const controls=/[\u0000-\u0008\u000B-\u001F]/;

test('Task 9 exact four-source atomic order, reconciled Paper counts and provenance totals',()=>{
 for(const [code,[pdf,title,total,n,review,official,derived,order]] of Object.entries(specs)){
  const rs=rows.filter(r=>r.source_pdf==='knowledge_base/past_paper/'+pdf+'.pdf');
  assert.deepEqual(rs.map(r=>r.id),order.split(' ').map(s=>'Q-'+code+'-'+s));
  assert.deepEqual([rs.length,rs.filter(r=>r.note_path).length,rs.filter(r=>r.status==='needs-review').length,rs.filter(r=>r.status==='out-of-scope').length],[total,n,review,0]);
  const t=readFileSync('knowledge_base/03-Papers/'+title+'.md','utf8'),p=parseFrontmatter(t).properties;
  assert.deepEqual([p.identified_count,p.admitted_count,p.excluded_count,p.unresolved_count],[total,n,0,review]);assert.equal(p.verification_status,'verified');assert.equal(p.year,2025);
  assert.equal(p.term,code.startsWith('2025S')?'spring':'fall');assert.equal(p.exam_type,code.endsWith('MID')?'midterm':'final');
  assert.deepEqual([...t.matchAll(/\[\[(?:knowledge_base\/04-Questions\/)?(Q-2025[^\]|]+)(?:\|[^\]]*)?\]\]/g)].map(m=>m[1]),rs.filter(r=>r.note_path).map(r=>basename(r.note_path,'.md')));
  const ps=rs.filter(r=>r.note_path).map(r=>prop(r.id));assert.equal(ps.filter(p=>p.answer_source==='official').length,official);assert.equal(ps.filter(p=>p.answer_source==='derived').length,derived);
 }
 assert.deepEqual([rows.length,admitted.length],[131,112]);
 assert.equal(files.filter(p=>/^knowledge_base\/04-Questions\/Q-2025[SF]-/.test(p)).length,112);
});

test('Task 9 every source label, one-based page, explicit-only mark, prompt and answer attribution matches reviewed evidence',()=>{
 assert.deepEqual(Object.keys(fixture.questions).sort(),rows.map(r=>r.id).sort());
 for(const r of rows){const f=fixture.questions[r.id];assert.equal(r.source_pdf,f.source_pdf);assert.equal(r.source_page,f.page);assert.equal(r.question_number,f.label);assert.equal(r.status,f.status);assert.deepEqual(r.syllabus_evidence,f.subtopics.map(s=>s.slice(2,-2)));
  if(!r.note_path)continue;const t=read(r.id),p=prop(r.id);
  assert.deepEqual(validateQuestionProperties(p),[],r.id);assert.equal(p.source_page,f.page);assert.equal(p.question_number,f.label);assert.equal(p.marks??null,f.marks);assert.deepEqual(p.solution_page??null,f.solution_page);assert.equal(p.answer_source,f.answer_source);assert.equal(r.answer_source,p.answer_source);assert.deepEqual(p.subtopics,f.subtopics);
  assert.equal(hash(section(t,'Question')),f.prompt_sha256,r.id+' prompt');assert.ok(section(t,'Source').includes(`![[${r.source_pdf}#page=${f.page}]]`));
  if(p.answer_source==='derived'){assert.equal(p.solution_page,undefined);assert.match(section(t,'Detailed Solution'),/independently derived/);assert.ok(r.source_correction.length>100);assert.ok(section(t,'Source').includes(r.source_correction));}
  else {assert.ok(p.solution_page.length);for(const page of p.solution_page)assert.ok(section(t,'Source').includes(`![[${r.source_pdf}#page=${page}]]`));}
 }
});

function verifyProof(id,w){
 assert.match(w,/### 中文解答/);assert.match(w,/\*\*答案。\*\*/);const derivation=w.split('**推导。**')[1];assert.ok(derivation,id);
 assert.ok((derivation.match(/[\u3400-\u9fff]/g)||[]).length>=40,id+' Chinese worked proof');
 for(const token of fixture.questions[id].checkpoints)assert.ok(derivation.includes(token),id+' lacks '+token);
}
test('Task 9 all admitted complete Chinese derivations, specific teaching warnings and controlled metadata',()=>{
 const works=new Set(),mistakes=new Set();
 for(const r of admitted){const t=read(r.id),p=prop(r.id),w=section(t,'Detailed Solution'),m=section(t,'Common Mistakes');
  assert.deepEqual([...t.matchAll(/^## (.+)$/gm)].map(m=>m[1]),['Source','Question','中文解析','Detailed Solution','Common Mistakes','Connections']);verifyProof(r.id,w);
  assert.ok(!works.has(w));works.add(w);assert.ok(!mistakes.has(m));mistakes.add(m);assert.ok((m.match(/[\u3400-\u9fff]/g)||[]).length>=25,r.id);assert.equal((m.match(/^- /gm)||[]).length,2);
  assert.ok(!controls.test(t),r.id);assert.doesNotMatch(t,/\bTODO\b|\bTBD\b|placeholder|\(cid:\d+\)/);assert.equal(p.syllabus_status,'in-scope');assert.equal(p.syllabus_version,'COMP2711-2026-27-fall');assert.equal(p.verification_status,'verified');assert.ok(p.difficulty_basis.length>=45,r.id);
  for(const e of r.syllabus_evidence)assert.ok(r.verification.scope.includes(e));assert.match(r.verification.solution,/Independent check:/);assert.ok(r.verification.transcription.includes(String(r.source_page)));
 }
});
test('Task 9 negative controls reject an approach-only paragraph and every omitted proof checkpoint',()=>{
 for(const r of admitted){const w=section(read(r.id),'Detailed Solution');
  assert.throws(()=>verifyProof(r.id,'### 中文解答\n\n**答案。** 待求结果。\n\n**推导。** 应先分析题目条件，选择适当定义和公式，再按照顺序逐步计算或证明，最后检查边界和结论是否符合题意。'),undefined,r.id);
  for(const token of fixture.questions[r.id].checkpoints)assert.throws(()=>verifyProof(r.id,w.replaceAll(token,'[removed]')),undefined,r.id+' '+token);
 }
});

const quarantines={
 'Q-2025F-FINAL-P05-a':['0.8t','8/17','8/35'],
 'Q-2025F-FINAL-P05-b':['0.2t','2/3','2/5'],
 'Q-2025S-MID-P02-b-iv':['a=m=0','gcd(0,0)','undefined','positive-domain'],
 'Q-2025S-FINAL-P06-a':['between two students','60','210','adjacency'],
 'Q-2025S-FINAL-P08':['45/7','13/7','uniform seat','full support','29/7'],
 'Q-2025S-MID-P02-a-i':['m=0','a=b=1,m=0','undefined','m>0','a+mu=b+mv','u=0,v=t','u=-t,v=0','ra=mq_1+r','a=1,b=3,m=5'],
 'Q-2025S-MID-P02-a-ii':['gcd(0,0)','a=b=0','undefined is not false','a,b>0','kx=a','ky=b','k=2,x=y=0','not adopted'],
 'Q-2025S-MID-P02-a-iii':['gcd(0,0)','a=b=d=0','k<d','a=b=d=1'],
 'Q-2025F-MID-P03-b':['complement bar','A=B=C={0}','C̄=∅'],
 'Q-2025F-MID-P04-b':['1440','A–B–C–B–C–D–C–B–A','4 distinct B–C'],
 'Q-2025F-MID-P08-a':['1/32','P(k=0)=1/2'],
 'Q-2025F-MID-P08-b':['5/32','P(k=1)=0'],
 'Q-2025F-MID-P08-c':['10/32','P(k=2)=0'],
 'Q-2025F-MID-P08-d':['3/8','5/8','(5/8)(4/5)=1/2'],
 'Q-2025F-MID-P08-e':['3/4','probability 1','shared fair bit'],
 'Q-2025F-MID-P09-a':['1/4','P(D|B)=0'],
 'Q-2025F-MID-P09-b':['9/17','P(D)=1/9>0','P(B|D)=0'],
 'Q-2025F-MID-P10-b':['49/4<91/6','V=U','equal','not this newly introduced scenario'],
 'Q-2025F-MID-P10-c':['orphaned answer fragment','1–26','10.6','no Question']
};
function checkQuarantine(id,r){assert.equal(r.status,'needs-review');assert.equal(r.note_path,null);for(const token of quarantines[id])assert.ok(r.exclusion_reason.includes(token),id+' '+token);}
test('Task 9 approved quarantines preserve the literal defect or incompatible countermodels without a Question note',()=>{
 assert.deepEqual(rows.filter(r=>!r.note_path).map(r=>r.id).sort(),Object.keys(quarantines).sort());
 for(const [id,tokens] of Object.entries(quarantines)){const r=byId.get(id);checkQuarantine(id,r);assert.ok(r.original_prompt.length>10);assert.ok(!files.some(p=>p.startsWith('knowledge_base/04-Questions/'+id+' - ')));for(const token of tokens)assert.throws(()=>checkQuarantine(id,{...r,exclusion_reason:r.exclusion_reason.replaceAll(token,'[removed]')}));}
 const audit=readFileSync('knowledge_base/06-Audit/Syllabus Audit.md','utf8');for(const id of Object.keys(quarantines))assert.ok(audit.includes(id));
});

const corrections={
 'Q-2025S-MID-P02-b-v':['omitting non-zero','p=2,x=0'],
 'Q-2025S-MID-P05':['two-node','f(0)'],
 'Q-2025S-MID-P08-a':['only the forward direction','reverse implication'],
 'Q-2025S-MID-P08-b':['omits all extended Euclidean steps','back-substitution'],
};
test('Task 9 all admitted derived source corrections retain their precise defects, not merely a derived label',()=>{
 assert.deepEqual(admitted.filter(r=>prop(r.id).answer_source==='derived').map(r=>r.id).sort(),Object.keys(corrections).sort());
 for(const [id,tokens] of Object.entries(corrections))for(const token of tokens)assert.ok(section(read(id),'Source').includes(token),id+' '+token);
 for(const suffix of ['premise2','proof']){const id='Q-2025F-MID-P02-c-'+suffix;assert.equal(prop(id).answer_source,'official');assert.deepEqual(prop(id).solution_page,[8]);assert.match(byId.get(id).source_correction,/grouping parentheses.*same|grouping parentheses.*next/s);}
 assert.equal(prop('Q-2025S-FINAL-P05-c').answer_source,'official');assert.deepEqual(prop('Q-2025S-FINAL-P05-c').solution_page,[7]);assert.match(byId.get('Q-2025S-FINAL-P05-c').source_correction,/n[/]2.*n=4 gives 6 rather than 8.*secondary/);
 assert.match(section(read('Q-2025F-FINAL-P02-a-i'),'Source'),/grading concession/);
 for(const s of ['ii','iii'])for(const part of ['E','var'])assert.match(section(read('Q-2025F-MID-P10-a-'+s+'-'+part),'Source'),/answer|calculation|variance/);
 for(const id of ['Q-2025F-MID-P10-a-i-E','Q-2025F-MID-P10-a-i-var','Q-2025F-MID-P02-c-premise1','Q-2025F-MID-P02-c-premise2','Q-2025F-MID-P02-c-proof','Q-2025S-FINAL-P12-a-i','Q-2025S-FINAL-P12-a-ii','Q-2025S-FINAL-P12-a-iii'])assert.equal(prop(id).marks,undefined);
 assert.deepEqual(['N','sufficient','minimal'].map(s=>prop('Q-2025S-FINAL-P07-'+s).marks),[4,1,1]);
});

test('Task 9 exact imported premises and reciprocal item-specific dependency links are self-contained',()=>{
 const pairs=[['2025S-MID-P08-b','2025S-MID-P08-a'],['2025S-FINAL-P01-d','2025S-FINAL-P01-c'],['2025S-FINAL-P02-b','2025S-FINAL-P02-a'],['2025S-FINAL-P03-b','2025S-FINAL-P03-a'],['2025S-FINAL-P07-sufficient','2025S-FINAL-P07-N'],['2025S-FINAL-P07-minimal','2025S-FINAL-P07-N'],['2025F-MID-P02-c-proof','2025F-MID-P02-c-premise1'],['2025F-MID-P02-c-proof','2025F-MID-P02-c-premise2'],['2025F-FINAL-P09-b','2025F-FINAL-P09-a'],['2025F-FINAL-P10-ii','2025F-FINAL-P10-i'],['2025F-FINAL-P10-iii','2025F-FINAL-P10-i'],['2025F-FINAL-P10-iii','2025F-FINAL-P10-ii']];
 for(const [a,b] of pairs){const qa=byId.get('Q-'+a),qb=byId.get('Q-'+b),la='[['+basename(qa.note_path,'.md')+']]',lb='[['+basename(qb.note_path,'.md')+']]';assert.ok(prop(qa.id).related_questions.includes(lb));assert.ok(prop(qb.id).related_questions.includes(la));assert.ok(section(read(qa.id),'Source').includes('Prerequisite context (editorial): '+lb));assert.ok(section(read(qb.id),'Connections').includes(la));}
 for(const [id,premise] of [['Q-2025S-FINAL-P01-d',R`\forall x(x\notin A\lor x\notin B)`],['Q-2025S-FINAL-P02-b',R`2^{62}\equiv4\pmod{63}`],['Q-2025F-MID-P02-c-proof',R`\exists x(E(x)\land\neg S(x))`],['Q-2025F-FINAL-P09-b',R`T(n)=(16n^2-3n^{\log_4 3})/13`],['Q-2025F-FINAL-P10-iii',R`a_n=8\cdot2^n+2`]])assert.ok(section(read(id),'Source').includes(premise),id);
});

test('Task 9 split requests remain atomic and source-specific forms and techniques are accurate',()=>{
 for(const [part,v] of [['i','X_1'],['ii','Y'],['iii','Z']])for(const [kind,op,other] of [['E','E','var'],['var','var','E']]){
  const id='Q-2025F-MID-P10-a-'+part+'-'+kind,t=read(id),body=section(t,'Question');
  assert.ok(body.includes('$'+op+'('+v+')$'));assert.ok(!body.includes('$'+other+'('+v+')$'));
  assert.ok(section(t,'Source').includes('What are $E('+v+')$ and $var('+v+')$?'));assert.match(section(t,'Source'),/Atomic extraction/);
  const sibling='Q-2025F-MID-P10-a-'+part+'-'+(kind==='E'?'var':'E');assert.ok(prop(id).related_questions.includes('[['+basename(byId.get(sibling).note_path,'.md')+']]'));
 }
 const s=readFileSync('knowledge_base/04-Questions/Stems/STEM-2025F-MID-P02-c - Shared Problem Prompt.md','utf8');assert.ok(!s.includes('First, write'));assert.ok(!s.includes('Some excuses are not clear explanations'));
 for(const id of ['Q-2025S-FINAL-P01-a-iii','Q-2025F-FINAL-P11-a-i','Q-2025F-FINAL-P11-a-ii','Q-2025F-FINAL-P11-a-iii'])assert.deepEqual(prop(id).question_types,['classification']);
 for(const id of ['Q-2025S-FINAL-P09','Q-2025S-FINAL-P12-b'])assert.deepEqual(prop(id).question_types,['calculation']);
 assert.deepEqual(prop('Q-2025F-FINAL-P10-i').question_types,['modeling']);
 assert.deepEqual(prop('Q-2025S-FINAL-P01-a-iii').concepts,['[[Functions - 函数]]']);assert.deepEqual(prop('Q-2025F-FINAL-P11-a-i').concepts,['[[Bipartite Graphs - 二分图]]']);
 const method='[[Prime Exponent Method - 素因数指数方法]]';assert.deepEqual(prop('Q-2025S-FINAL-P04-a').methods,[method]);assert.deepEqual(prop('Q-2025S-FINAL-P04-b').methods,[method,'[[Counting Method - 计数方法]]']);
 const teaching=readFileSync('knowledge_base/02-Methods/Prime Exponent Method - 素因数指数方法.md','utf8');assert.ok(teaching.length>1800);assert.ok(teaching.includes('(e+1)^2'));assert.ok(teaching.includes('2e+1'));for(const suffix of ['a','b'])assert.ok(teaching.includes('[[Q-2025S-FINAL-P04-'+suffix+' - Prime Factorization and LCM]]'));
});

test('Task 9 answer-free Stems, original figure bytes, controlled link targets and substantive new Concept',()=>{
 assert.equal(Object.keys(fixture.stems).length,25);assert.equal(Object.keys(fixture.figures).length,5);
 const owned=files.filter(p=>p.startsWith('knowledge_base/04-Questions/Stems/STEM-2025'));assert.equal(owned.length,25);
 for(const [name,sha] of Object.entries(fixture.stems)){const t=readFileSync('knowledge_base/04-Questions/Stems/'+name+'.md','utf8');assert.equal(hash(t),sha);assert.doesNotMatch(section(t,'Shared printed wording'),/Answer:|Solution:|答案|推导|Provenance/);assert.ok(admitted.some(r=>read(r.id).includes('[['+name+'#Shared printed wording]]')));}
 for(const [name,sha] of Object.entries(fixture.figures)){const path='knowledge_base/06-Audit/figures/'+name;assert.equal(hash(readFileSync(path)),sha);assert.ok(admitted.some(r=>read(r.id).includes('[['+path+']]'))||rows.some(r=>r.exclusion_reason?.includes(path)));}
 const targets=new Map(files.filter(f=>f.endsWith('.md')).map(f=>[basename(f,'.md'),f]));
 for(const path of [...admitted.map(r=>r.note_path),...owned,'knowledge_base/01-Topics/Concepts/Prime Factorization and LCM - 素因数分解与最小公倍数.md','knowledge_base/02-Methods/Prime Exponent Method - 素因数指数方法.md']){
  const t=readFileSync(path,'utf8');assert.ok(!controls.test(t));for(const m of t.matchAll(/!?\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)){const dest=m[1].split('#')[0];assert.ok(existsSync(dest)||targets.has(dest),path+' '+dest);}
 }
 const concept=readFileSync('knowledge_base/01-Topics/Concepts/Prime Factorization and LCM - 素因数分解与最小公倍数.md','utf8');assert.match(concept,/parent_subtopics.*GCDs and Congruences/);assert.ok(concept.includes('(e+1)^2-e^2=2e+1'));assert.ok(concept.length>1500);
 const postman=byId.get('Q-2025F-FINAL-P11-c');assert.match(postman.verification.scope,/10\.5.*three-candidate/s);
});

function decisions(rs){return rs.filter(r=>sources.has(r.source_pdf)).map(r=>({id:r.id,source_pdf:r.source_pdf,page:r.source_page,label:r.question_number,status:r.status,admitted:r.note_path!==null,evidence:r.syllabus_evidence})).sort((a,b)=>a.id.localeCompare(b.id));}
test('Task 9 persistent decisions are source-scoped and allow later sources and editorial audit revisions',()=>{
 const expected=Object.entries(fixture.questions).map(([id,f])=>({id,source_pdf:f.source_pdf,page:f.page,label:f.label,status:f.status,admitted:f.status==='in-scope',evidence:f.subtopics.map(s=>s.slice(2,-2))})).sort((a,b)=>a.id.localeCompare(b.id));
 assert.deepEqual(decisions(allRows),expected);
 const future={id:'Q-2026F-MID-TEST',source_pdf:'knowledge_base/past_paper/COMP2711_F2026_Midterm.pdf',status:'needs-review',note_path:null};
 const edited=structuredClone(allRows);for(const r of edited){r.verification={transcription:'Editorial revision'};if(r.exclusion_reason)r.exclusion_reason+=' Editorial clarification.';}
 assert.deepEqual(decisions([...edited,future]),expected);
 for(const change of [r=>({...r,source_page:r.source_page+1}),r=>({...r,status:'out-of-scope'}),r=>({...r,syllabus_evidence:[]})])assert.notDeepEqual(decisions(rows.map((r,i)=>i? r:change(r))),expected);
});

const C=(n,k)=>{if(k<0||k>n)return 0;let x=1;for(let j=1;j<=k;j++)x=x*(n-j+1)/j;return x;};

test('Task 9 fix 1 zero-domain predicates stay audit-only with positive-domain algebra and no orphaned Stem',()=>{
 const removed=['Q-2025S-MID-P02-a-i','Q-2025S-MID-P02-a-ii'];
 for(const id of removed){
  const r=byId.get(id);checkQuarantine(id,r);assert.equal(r.answer_source,undefined);assert.equal(r.source_correction,undefined);
  assert.equal(r.source_page,4);assert.deepEqual(r.printed_answer_pages,[4]);assert.equal(r.printed_marks,null);
  assert.ok(r.original_prompt.includes('Take the natural numbers'));assert.match(r.exclusion_reason,/pages 1–12/);assert.match(r.exclusion_reason,/page 5/);
  assert.equal(fixture.questions[id].status,'needs-review');assert.equal(fixture.questions[id].answer_source,undefined);
  assert.ok(readFileSync('knowledge_base/06-Audit/Extraction and Verification Audit.md','utf8').includes('| '+id+' | needs-review |'));
 }
 const stem='STEM-2025S-MID-P02-a - Shared Problem Prompt';assert.ok(!existsSync('knowledge_base/04-Questions/Stems/'+stem+'.md'));assert.equal(fixture.stems[stem],undefined);
 for(const r of admitted)for(const name of [...removed.map(id=>id+' - Predicate Logic'),stem])assert.ok(!read(r.id).includes('[['+name),r.id+' dangling '+name);
 const gcdPositive=(a,b)=>{if(a===0&&b===0)return undefined;while(b)[a,b]=[b,a%b];return a;};
 const commonDivisorFormula=(a,b)=>{for(let k=0;k<=16;k++){let common=false;for(let x=0;x<=16;x++)for(let y=0;y<=16;y++)if(k*x===a&&k*y===b)common=true;if(common&&k!==1)return false;}return true;};
 for(let a=1;a<=16;a++)for(let b=1;b<=16;b++)assert.equal(commonDivisorFormula(a,b),gcdPositive(a,b)===1);
 assert.equal(gcdPositive(0,0),undefined);assert.equal(commonDivisorFormula(0,0),false);
 // An undefined source term is not silently converted into a false predicate.
 assert.notEqual(gcdPositive(0,0),commonDivisorFormula(0,0));
 const congruencePositive=(a,b,m)=>m>0?(a-b)%m===0:undefined;
 assert.equal(congruencePositive(1,1,0),undefined);assert.equal(1+0*0,1+0*0);
});

function checkFermatMapping(id,p,r,body,f){
 const mod='[[Subtopic - Modular Arithmetic - 模运算]]',flt='[[Subtopic - GCDs and Congruences - 最大公因数与同余]]';
 assert.deepEqual(p.subtopics,[mod,flt],id);assert.deepEqual(f.subtopics,[mod,flt],id);
 assert.deepEqual(r.syllabus_evidence,[mod.slice(2,-2),flt.slice(2,-2)],id);
 assert.ok(r.verification.scope.includes('Fermat'));assert.ok(r.verification.scope.includes('4.3-4.4'));
 assert.ok(section(body,'Connections').includes(flt));assert.ok(section(body,'Connections').includes('4.3-4.4'));
}
test('Task 9 fix 1 both Fermat solutions retain the essential GCDs and Congruences mapping',()=>{
 for(const part of ['a','b']){const id='Q-2025S-MID-P06-'+part,p=prop(id),r=byId.get(id),t=read(id),f=fixture.questions[id];
  checkFermatMapping(id,p,r,t,f);assert.equal(p.answer_source,'official');assert.equal(r.status,'in-scope');assert.match(section(t,'Detailed Solution'),/Fermat|费马小定理/);
  assert.throws(()=>checkFermatMapping(id,{...p,subtopics:p.subtopics.slice(0,1)},r,t,f));
  assert.throws(()=>checkFermatMapping(id,p,{...r,syllabus_evidence:r.syllabus_evidence.slice(0,1)},t,f));
  assert.throws(()=>checkFermatMapping(id,p,r,t.replaceAll('[[Subtopic - GCDs and Congruences - 最大公因数与同余]]','[removed]'),f));
  assert.throws(()=>checkFermatMapping(id,p,r,t,{...f,subtopics:f.subtopics.slice(0,1)}));
 }
});

const gcd=(a,b)=>b?gcd(b,a%b):a;
const pow=(a,e,m)=>{let x=1n;for(a=BigInt(a),e=BigInt(e),m=BigInt(m);e;e>>=1n,a=a*a%m)if(e&1n)x=x*a%m;return Number(x);};
test('Task 9 independent logic, natural-witness arithmetic, Fibonacci boundaries, inverses and recurrences',()=>{
 const imp=(a,b)=>!a||b,nand=(a,b)=>!(a&&b);
 for(const p of [false,true])for(const q of [false,true])for(const r of [false,true]){
  assert.ok(!imp(!p,q&&!r)||!(!p&&r));assert.equal(nand(p,imp(q,r)),imp(p,q)&&imp(p,!r));assert.equal(imp(!p||!q,p&&q&&r),p&&q);
  for(const s of [false,true])if(((!s)===imp(q,r))&&!q&&imp(imp(q,s),p||s))assert.ok(!s&&p);
  for(const t of [false,true])if(imp(p,imp(r,q))&&!q&&(q||p)&&t)assert.ok(!r&&t);
 }
 assert.deepEqual([nand(true,nand(true,false)),nand(nand(true,true),false)],[false,true]);
 assert.equal(3*1,5*0+3);assert.notEqual(1%5,3%5);
 for(let a=0;a<=15;a++)for(let b=0;b<=15;b++)for(let m=1;m<=8;m++){
  let exists=false;for(let u=0;u<=15;u++)for(let v=0;v<=15;v++)if(a+m*u===b+m*v)exists=true;assert.equal(exists,((a-b)%m+m)%m===0);
 }
 const f=[0,1,1];for(let i=3;i<35;i++)f[i]=f[i-1]+f[i-2];const min=[1,2];for(let h=2;h<=30;h++)min[h]=1+min[h-1]+min[h-2];for(let h=0;h<=30;h++)assert.ok(min[h]>=f[h+2]-1);
 assert.equal(pow(2,62,63),4);assert.equal(pow(47,37n**27n,11),5);assert.equal(pow(2,65536,17),1);assert.equal(14*5%23,1);assert.equal(28*11%46,32);assert.equal(28*34%46,32);
 assert.deepEqual([31%2,31%3,31%4,31%5],[1,1,3,1]);assert.equal(7*43%60,1);assert.equal(pow(3,7,77),31);assert.deepEqual(Array.from({length:11},(_,i)=>i+10).filter(e=>gcd(e,60)===1),[11,13,17,19]);
 let t=1;for(let k=0;k<=5;k++){const n=2**(2**k);if(k)t=Math.sqrt(n)*t+n;assert.equal(t,n/2+n*k);}
 t=1;for(let k=0;k<=10;k++){const n=4**k;if(k)t=3*t+n*n;assert.equal(t,(16*n*n-3*3**k)/13);}
 let legs=10;for(let n=0;n<=20;n++){assert.equal(legs,8*2**n+2);legs=2*legs-2;}
});

test('Task 9 independent combinatorial enumeration, expectation and inclusion-exclusion values',()=>{
 let safe=0;for(let n=1;n<1001;n++)if([7,11,13].every(p=>n%p>2&&n%p<p-2))safe++;assert.equal(safe,96);
 for(let e=0;e<=13;e++){let num=0;for(let a=0;a<=e;a++)for(let b=0;b<=e;b++)if(Math.max(a,b)===e)num++;assert.equal(num,2*e+1);}assert.equal(7*15*27,2835);
 let seats=0;for(let a=1;a<=7;a++)for(let b=a+2;b<=7;b++)for(let c=b+2;c<=7;c++)seats++;assert.equal(seats*6,60);
 let sum11=0,all123=0;for(let n=100000;n<=999999;n++){const s=String(n);if([...s].reduce((v,x)=>v+Number(x),0)===11)sum11++;if(s.includes('1')&&s.includes('2')&&s.includes('3'))all123++;}assert.equal(sum11,2992);assert.equal(all123,9*10**5-3*8*9**5+3*7*8**5-6*7**5);
 for(let r=0;r<=23;r++)for(let g=0;g<=23-r;g++)for(let b=0;b<=23-r-g;b++){const k=23-r-g-b;assert.ok([r,g,b,k].reduce((v,n)=>v+Math.floor(n/2),0)>=10);}assert.equal([5,5,5,7].reduce((v,n)=>v+Math.floor(n/2),0),9);
 let transitions=0,count=0;for(let mask=0;mask<2**14;mask++){const bits=Array.from({length:14},(_,i)=>(mask>>i)&1);if(bits.reduce((a,b)=>a+b)!==5)continue;count++;for(let i=1;i<14;i++)transitions+=bits[i]!==bits[i-1];}assert.equal(count,C(14,5));assert.equal(transitions*7,count*45);
 for(let n=1;n<=10;n++)for(let k=1;k<=n;k++){let sum=0;for(let m=1;m<=n-k+1;m++)sum+=m*C(n-m,k-1);assert.equal(sum,C(n+1,k+1));}
 const squares=[[0,1,3,4],[1,2,4,5],[3,4,6,7],[4,5,7,8]];let bad=0;for(let x=0;x<512;x++)if(squares.some(s=>s.every(i=>x&(1<<i))))bad++;assert.equal(bad,95);
 const rankPairs=[];for(let a=1;a<=14;a++)for(let b=1;b<=14;b++)if(a<b)rankPairs.push([a,b]);assert.equal(rankPairs.filter(([a])=>a===1).length/rankPairs.length,1/7);assert.equal(rankPairs.filter(([a])=>a===3).length/rankPairs.length,11/91);
 let triple=0,good=0;for(let a=1;a<=14;a++)for(let b=a+1;b<=14;b++)for(let c=1;c<a;c++){triple++;if(a===7)good++;}assert.equal(good/triple,3/26);
});

test('Task 9 independent quarantine joint distributions and route countermodel respect all stated marginals',()=>{
 assert.equal(.5*0+.5*1,.5);assert.equal((5/8)*(4/5),.5);assert.notEqual(3/8,.5);
 const independentLikelihoods=[(2/3)*(3/8),(1/2)*3*(2/3)**2*(1/3)];assert.ok(Math.abs(independentLikelihoods[0]/(independentLikelihoods[0]+independentLikelihoods[1])-9/17)<1e-12);
 const dependent=[0,2/9];assert.equal(dependent[0]/(dependent[0]+dependent[1]),0);assert.equal((dependent[0]+dependent[1])/2,1/9);
 let e=0,e2=0;for(let x=1;x<=6;x++){e+=x/6;e2+=x*x/6;}assert.ok(Math.abs(e2-91/6)<1e-12);assert.ok(Math.abs(e2-e*e-35/12)<1e-12);assert.ok(e*e<e2);assert.equal(6*(35/12),35/2);assert.equal(100*35/12,875/3);
 const trail=['AB1','BC1','BC2','BC3','CD1','CD2','BC4','AB2'];assert.equal(new Set(trail).size,trail.length);assert.equal(trail.filter(e=>e.startsWith('BC')).length,4);assert.ok(trail.length>6);
 const U=new Set([0]),A=new Set([0]),B=new Set([0]),Cset=new Set([0]),complement=[...U].filter(x=>!Cset.has(x));assert.ok([...A,...B].every(x=>Cset.has(x)));assert.ok(![...A,...B].every(x=>complement.includes(x)));
});

test('Task 9 graph degree counterexamples, ordered paths and weighted postman optimality independently recompute',()=>{
 const pairs=[];for(let a=0;a<6;a++)for(let b=a+1;b<6;b++)pairs.push([a,b]);const forbidden=['5,4,3,2,2,0','4,4,3,2,1,1','4,4,4,2,1,1'];
 for(let mask=0;mask<2**15;mask++){const deg=Array(6).fill(0);pairs.forEach(([a,b],i)=>{if(mask&(1<<i)){deg[a]++;deg[b]++;}});assert.ok(!forbidden.includes(deg.sort((a,b)=>b-a).join(',')));}
 assert.equal(Array.from({length:64},(_,m)=>m.toString(2).replaceAll('0','').length).filter(d=>d>=4).length*2**15,720896);
 const edges=[['A','B',5],['A','C',5],['A','D',5],['B','D',5],['B','F',5],['B','E',6],['D','F',6],['C','D',7],['C','F',7],['C','G',7],['E','F',7],['G','H',7],['F','H',4]];
 const adj=new Map('ABCDEFGH'.split('').map(v=>[v,[]]));for(const [a,b,w] of edges){adj.get(a).push([b,w]);adj.get(b).push([a,w]);}
 assert.equal(edges.reduce((s,e)=>s+e[2],0),76);assert.deepEqual([...adj].filter(([,n])=>n.length%2).map(([v])=>v),['A','F']);
 let min=Infinity;function dfs(v,seen,cost){if(v==='F'){min=Math.min(min,cost);return;}for(const [n,w] of adj.get(v))if(!seen.has(n))dfs(n,new Set([...seen,n]),cost+w);}dfs('A',new Set(['A']),0);assert.equal(min,10);
 const tour='HGCFDCADBABFEBFH'.split(''),counts=new Map();let total=0;for(let i=1;i<tour.length;i++){const key=[tour[i-1],tour[i]].sort().join('');const edge=edges.find(([a,b])=>[a,b].sort().join('')===key);assert.ok(edge);total+=edge[2];counts.set(key,(counts.get(key)||0)+1);}assert.equal(total,86);for(const [a,b] of edges)assert.ok(counts.has([a,b].sort().join('')));assert.equal(counts.get('AB'),2);assert.equal(counts.get('BF'),2);
 const sample=[['A','B'],['A','C'],['B','C'],['A','D'],['B','E']];assert.deepEqual('ABCDE'.split('').map(v=>sample.filter(e=>e.includes(v)).length),[3,3,2,1,1]);
 for(let mask=0;mask<64;mask++){const es=[[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]].filter((_,i)=>mask&(1<<i)),nbr=Array.from({length:4},()=>[]);for(const [a,b] of es){nbr[a].push(b);nbr[b].push(a);}let paths=0;for(let a=0;a<4;a++)for(const b of nbr[a])for(const c of nbr[b])if(c!==a)paths++;assert.equal(paths,nbr.reduce((s,ns)=>s+ns.length*(ns.length-1),0));}
});

test('Task 9 four immutable source byte hashes equal the reviewed inventory',()=>{
 const expected={COMP2711_S2025_Midterm:'48c1146c444e656e80b6525864946de08f287ab4dddf92190c2188faa6284fde',COMP2711_S2025_Final:'15b253986652a8a846ad56904c0d61c46450bcc4b8369299e36002d2bdba647a',COMP2711_F2025_Midterm:'3788b124362e1897cf11b78ff30651c01d24394d9c74afb01cc98f3c34b8a38e',COMP2711_F2025_Final:'8c99ca5ef7b1426d42aedc27023a61333a17cef4f9133a2e253803604384388f'};
 const inventory=JSON.parse(readFileSync('knowledge_base/06-Audit/source-inventory.json','utf8')).sources;
 for(const [n,sha] of Object.entries(expected)){const p='knowledge_base/past_paper/'+n+'.pdf';assert.equal(hash(readFileSync(p)),sha);assert.equal(inventory.find(s=>s.source_pdf===p).sha256,sha);}
});
