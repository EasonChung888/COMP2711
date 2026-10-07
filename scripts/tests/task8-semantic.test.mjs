import {historicalSection} from './answer-proof-helpers.mjs';
import {checkWorkedProof, translatedCheckpoints, workedSolution} from './answer-proof-helpers.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync,statSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {basename,join} from 'node:path';
import {parseFrontmatter,validateQuestionProperties} from '../knowledge-base/schema.mjs';

const R=String.raw;
const fixture=JSON.parse(readFileSync('scripts/tests/fixtures/task8-source-evidence.json','utf8'));
const specs={
 '2024S-MID':['COMP2711_S2024_Midterm','2024 Spring Midterm',21,21,0,0,21,0,'P01 P02-a P02-b P02-c P02-d P02-e P03-a P03-b P03-c P03-d P04-a P04-b P05 P06 P07 P08 P09 P10 P11 P12-a P12-b'],
 '2024S-FINAL':['COMP2711_S2024_Final','2024 Spring Final',13,8,1,4,8,0,'P01-N P01-proof P02-a P02-b P03-a P03-b P04 P05 P06 P07 P08 P09-a P09-b'],
 '2024F-MID':['COMP2711_F2024_Midterm','2024 Fall Midterm',29,28,0,1,27,1,'P01-a P01-b P01-c P01-d P02-a P02-b P02-c P03-a-i P03-a-ii P03-a-iii P03-a-iv P03-b-i P03-b-ii P03-c P04-a-i P04-a-ii P04-a-iii P04-b-i P04-b-ii P05-a P05-b P06-a P06-b P06-c P06-d P07 P08 P09-a P09-b'],
 '2024F-FINAL':['COMP2711_F2024_Final','2024 Fall Final',35,26,0,9,20,6,'P01-a P01-b P01-c P02-a P02-b P03-a P03-b P03-c-i P03-c-ii P04-a P04-b-i P04-b-ii P04-b-iii P05-a P05-b P05-c P06-a P06-b P07-1 P07-2 P08-a P08-b P08-c P09-a-i P09-a-ii P09-a-iii P09-a-iv P09-a-v P09-b-i P09-b-ii P09-b-iii P10 P11-a P11-b P11-c']
};
const sources=new Set(Object.values(specs).map(s=>'knowledge_base/past_paper/'+s[0]+'.pdf'));
const allRows=JSON.parse(readFileSync('knowledge_base/06-Audit/question-audit.json','utf8')).questions;
const rows=allRows.filter(r=>sources.has(r.source_pdf)),admitted=rows.filter(r=>r.note_path),byId=new Map(rows.map(r=>[r.id,r]));
const section=(text,h)=>text.match(new RegExp(`## ${h}\\n\\n([\\s\\S]*?)(?=\\n## |$)`))?.[1]?.trim()??'';
const read=id=>readFileSync(byId.get(id).note_path,'utf8');
const properties=id=>parseFrontmatter(read(id)).properties;
const sha=s=>createHash('sha256').update(s).digest('hex');
const walk=dir=>readdirSync(dir).flatMap(n=>{const p=join(dir,n);return statSync(p).isDirectory()?walk(p):[p];});
const files=['knowledge_base/01-Topics','knowledge_base/02-Methods','knowledge_base/03-Papers','knowledge_base/04-Questions','knowledge_base/06-Audit'].flatMap(walk);
const controls=/[\u0000-\u0008\u000B-\u001F]/;

test('Task 8 source-derived exact atomic inventory, order, reconciliation and official/derived counts',()=>{
 for(const [code,[pdf,title,identified,noteCount,excluded,review,official,derived,order]] of Object.entries(specs)){
  const source='knowledge_base/past_paper/'+pdf+'.pdf',rs=rows.filter(r=>r.source_pdf===source);
  assert.deepEqual(rs.map(r=>r.id),order.split(' ').map(s=>'Q-'+code+'-'+s));
  assert.deepEqual([rs.length,rs.filter(r=>r.note_path).length,rs.filter(r=>r.status==='out-of-scope').length,rs.filter(r=>r.status==='needs-review').length],[identified,noteCount,excluded,review]);
  const text=readFileSync('knowledge_base/03-Papers/'+title+'.md','utf8'),p=parseFrontmatter(text).properties;
  assert.deepEqual([p.identified_count,p.admitted_count,p.excluded_count,p.unresolved_count],[identified,noteCount,excluded,review]);
  assert.equal(p.verification_status,'verified');assert.equal(p.year,2024);assert.equal(p.source_pdf,source);
  assert.equal(p.term,code.startsWith('2024S')?'spring':'fall');assert.equal(p.exam_type,code.endsWith('MID')?'midterm':'final');
  const links=[...text.matchAll(/\[\[(Q-2024[^\]|]+)\]\]/g)].map(m=>m[1]);assert.deepEqual(links,rs.filter(r=>r.note_path).map(r=>basename(r.note_path,'.md')));
  const ps=rs.filter(r=>r.note_path).map(r=>properties(r.id));assert.equal(ps.filter(p=>p.answer_source==='official').length,official);assert.equal(ps.filter(p=>p.answer_source==='derived').length,derived);
 }
 assert.deepEqual([rows.length,admitted.length],[98,83]);
});

test('Task 8 all source labels, pages, atomic marks, answer provenance and source-compared prompt fingerprints',()=>{
 assert.deepEqual(Object.keys(fixture.questions).sort(),rows.map(r=>r.id).sort());
 for(const r of rows){const f=fixture.questions[r.id];assert.equal(r.source_page,f.page,r.id);assert.equal(r.question_number,f.label,r.id);assert.equal(r.status,f.status,r.id);
  if(!r.note_path)continue;
  const t=read(r.id),p=properties(r.id);assert.deepEqual(validateQuestionProperties(p),[],r.id);
  assert.equal(p.source_page,f.page);assert.equal(p.question_number,f.label);assert.deepEqual(p.solution_page??null,f.solution_page);assert.equal(p.marks??null,f.marks);assert.equal(p.answer_source,f.answer_source);assert.deepEqual(p.subtopics,f.subtopics);
  assert.equal(sha(section(t,'Question')),f.prompt_sha256,`${r.id}: source prompt changed`);
  assert.ok(section(t,'Source').includes(`![[${r.source_pdf}#page=${f.page}]]`));
  if(p.answer_source==='official')assert.ok(p.solution_page.length);else {assert.equal(p.solution_page,undefined);assert.match(section(t,'Source'),/printed|Printed|Page|page/);assert.equal(p.answer_source,'derived');}
 }
});

test('Task 8 all notes have English worked solutions, fixed two-section order and concrete syllabus evidence',()=>{
 const work=new Set();
 for(const r of admitted){const t=read(r.id),p=properties(r.id),w=section(t,'Supplementary Explanation');
  assert.deepEqual([...t.matchAll(/^## (.+)$/gm)].map(m=>m[1]),['Source','Question','Official Answer','Supplementary Explanation','Connections']);
  assert.equal(p.syllabus_status,'in-scope');assert.equal(p.syllabus_version,'COMP2711-2026-27-fall');assert.equal(p.verification_status,'verified');
  assert.match(workedSolution(w),/\*\*Answer\.\*\*/);assert.match(workedSolution(w),/\*\*Derivation\/proof\.\*\*/);assert.ok((w.match(/[A-Za-z]/g)??[]).length>=30,r.id);assert.ok(w.length>=220,r.id);
  assert.ok(!work.has(w),r.id);work.add(w);
  assert.ok(!controls.test(t),r.id);assert.ok(!/\bTODO\b|\bTBD\b|placeholder|\(cid:\d+\)|The dependent item imports the precise premise/.test(t),r.id);
  assert.deepEqual(r.syllabus_evidence,p.subtopics.map(s=>s.slice(2,-2)));for(const s of r.syllabus_evidence){assert.match(s,/Subtopic - [A-Za-z].* - [\u3400-\u9fff]/);assert.ok(r.verification.scope.includes(s),r.id);}
  assert.ok(r.verification.scope.length>90,r.id);assert.ok(r.verification.solution.includes('Independent check:'));assert.ok(r.verification.solution.includes(p.answer_source==='derived'?'Derived correction/completion':'Official answer')||r.verification.solution.includes('Task11 compared the '+p.answer_source+' conclusion')); assert.ok(p.difficulty_basis.length>45,r.id);
 }
});

// Independently selected result + intermediate checkpoints, one entry per admitted
// atom. These inspect the authored English derivation, not mere answer presence or
// length. Removing any checkpoint or substituting an approach-only paragraph fails.
const checkpoints={
 '2024S-MID':{
  'P01':[R`\log n=o(n^{1/2})`,R`(2/3)^n`,R`(n/2)^{n/2}`],
  'P02-a':['p=T,q=F','p=q=T','不能是 contradiction'],
  'P02-b':['p=F,q=T',R`p\lor\neg q=F\lor F=F`,'没有真赋值'],
  'P02-c':['distributive law','左右同真同假','答案是 $T$'],
  'P02-d':['真值全部相同','最后的否定','两类情况穷尽'],
  'P02-e':[R`\neg p\lor q\lor r`,'幂等律','双条件恒真'],
  'P03-a':['固定 $x_0$','同一个 $x_0$','前件为假'],
  'P03-b':[R`\{0,1\}`,'$x=y$','$x=0$ 不满足 $y=1$','后件假'],
  'P03-c':[R`\{0,1\}`,'$x=0$','P(1,y)','后件'],
  'P03-d':[R`\{0,1\}`,'$y=x$','后件假'],
  'P04-a':[R`4\mid x`,R`\exists a\exists b`,R`x=a^2-b^2`],
  'P04-b':[R`\neg(A\to B)\equiv A\land\neg B`,'两个全称',R`x\ne a^2-b^2`],
  'P05':['由 4、6','由 2、8','由 1、9',R`p\land\neg q`],
  'P06':[R`5+2\sqrt6=a^2/b^2`,R`p^2=6q^2`,'p=2k','q$ 也偶'],
  'P07':[R`D=\prod_i a_i`,R`D/a_i=\prod_{j\ne i}a_j`,'左侧偶','右侧 $D$ 为奇数'],
  'P08':['2,1,2,1,1','249',R`71\equiv3\pmod4`,'76,79,83,80,80'],
  'P09':['792=46',R`233\cdot17-5\cdot792`,'3961'],
  'P10':['M_1=35,M_2=21,M_3=15','269',R`59+105k`],
  'P11':['共有 $p-1$ 项',R`9S=10^{p-1}-1`,R`p\nmid9`,R`p\mid S`],
  'P12-a':['a=du,m=dv','y=d(ru+sv)',R`y\ge d`],
  'P12-b':[R`ab\equiv1\pmod m`,'1=ba-tm','0<1<d']
 },
 '2024S-FINAL':{
  'P01-N':['128<147','256>192',R`2k^2-(k+1)^2=k^2-2k-1`],
  'P01-proof':['基础步',R`2^8=256>192`,R`(k-1)^2-2\ge49-2`, '归纳假设'],
  'P04':['五次上移','462','150','3120','唯一分解'],
  'P05':['P_0=0','互斥',R`(2n+3)P_{n+1}=(2n+1)P_n+1`,'A_{n+1}=A_n+1'],
  'P07':['两端',R`\binom{m+1}k`,R`\binom{n-1}{k-1}`,'k>n','k>m+1'],
  'P08':['A_p,A_q,A_r','n/(pq)','n/(pqr)','提出 n'],
  'P09-a':[R`C\,k!(p-k)!=p!`,R`p\nmid k!(p-k)!`,R`p\mid C`],
  'P09-b':['基础步',R`(a+1)^p-(a+1)=(a^p-a)+\sum_{i=1}^{p-1}\binom pi a^i`,'归纳假设']
 },
 '2024F-MID':{
  'P01-a':[R`\neg p\lor(q\lor\neg q)\lor r`,R`q\lor\neg q=T`],
  'P01-b':['F\\to F=T','T\\to F=F','同一个合法赋值'],
  'P01-c':['由 6、7','由 8、9','由 1、10',R`\neg p\land\neg t`],
  'P02-a':['Even(x)',R`\exists y\exists z`,'Every even natural number greater than 2 is the sum of two prime numbers.','distinct'],
  'P02-b':[R`\exists x(A(x)\land\forall y\forall z\neg B(x,y,z))`,R`\neg Prime(y)\lor\neg Prime(z)`,R`y+z\ne x`],
  'P02-c':['P(a)=T,P(b)=F,Q(a)=T,Q(b)=F','选 $y=b$','T\\to F=F'],
  'P03-a-i':['有限长度字符串','可数并集','无限多个'],
  'P03-a-ii':['X=0','(0,y)','有理数合并会使实数可数'],
  'P03-a-iii':['q_1,q_2', 'i+j=2,3,4', '对角线','无限'],
  'P03-a-iv':['反设',R`\mathcal P(\mathbb R)=C\cup D`,'Cantor','矛盾'],
  'P03-b-i':[R`B=\mathbb R\setminus\mathbb N`,'B 包含全部无理数',R`=\mathbb N`],
  'P03-b-ii':['B=(0,1)','[1,2]','不可数集合的超集'],
  'P03-c':['De Morgan','分配律','各步均为双向等价'],
  'P04-a-i':['六次 Right','四次 Up',R`\binom{10}4=210`],
  'P04-a-ii':['(5,1)','(5,2)',R`\binom61=6`,R`\binom31=3`,'=18'],
  'P04-a-iii':['=210','=18','210-18=192','禁止的是边'],
  'P04-b-i':['二、四、六、八','第三、五、七','2\\cdot2\\cdot2=8'],
  'P04-b-ii':['第五列顶行','第三、七列','2\\cdot1\\cdot2=4'],
  'P05-a':['一在顶面','五个数字','4!/4=3!=6','6!/24=30'],
  'P05-b':['b=(a+c)/2','同奇偶',R`2\binom n2`,'唯一端点对'],
  'P06-a':['六位数字互不相同',R`\binom{10}6`,'首位一定非零'],
  'P06-b':['零','一至九',R`\binom96=84`],
  'P06-c':['x_0+\\cdots+x_9=6',R`\binom{15}9=5005`,'000000','5004'],
  'P06-d':['x_0=0','x_1+\\cdots+x_9=6',R`\binom{14}8=3003`],
  'P07':['3^5=243','2^5','1^5=1','243-3\\cdot32+3\\cdot1=150'],
  'P08':[R`w+d+\ell=5`,R`2w+5\le13`,'十四分不可能','最多十五种'],
  'P09-a':['2n-1','补集','二元对','每对恰一个小子集'],
  'P09-b':['2^{2n-2}',R`\binom{2n-1}r`,'互斥','同一批子集']
 },
 '2024F-FINAL':{
  'P01-a':[R`\neg(p\land\neg q)\lor r`,'De Morgan','双重否定','同一表达式'],
  'P01-b':[R`\forall n`,R`\exists p`,'n<p','p<2n'],
  'P01-c':[R`\exists n((n>1)\land\neg\exists p`,'De Morgan',R`p\le n`,R`p\ge2n`],
  'P02-a':['A\\subseteq B','B\\subseteq A','双向包含'],
  'P02-b':['索引对','对角线','固定 $n=2$','至少无限'],
  'P05-a':['a=4k','a=4k+2','16k^2+16k+4','实现零和四'],
  'P05-b':['a=2k+1','4k(k+1)+1','一个偶数',R`a^2\equiv1\pmod8`],
  'P05-c':[R`a^2+b^2\equiv6\pmod8`,'0,1,4','0,1,2,4,5','矛盾'],
  'P06-a':[R`p\mid a^2`,R`p\mid[(a^2+b^2)-a^2]=b^2`,'Euclid'],
  'P06-b':[R`p\nmid b`,'2k+1',R`a^{p-1}\equiv-b^{p-1}`,R`p\mid2`,'矛盾'],
  'P07-1':['3\\cdot2=6','3\\cdot5=15',R`x\equiv30\equiv2\pmod7`,'完全等价'],
  'P07-2':['M=5\\cdot4\\cdot7=140','28,35,20','2,3,6','618','58+140t'],
  'P08-a':['4\\cdot18=72',R`\gcd(9,72)=9>1`,'不可能等于一'],
  'P08-b':['72=3\\cdot23+3',R`8\cdot72-25\cdot23`,'1081'],
  'P08-c':['3^{23}', '196\\equiv6','23=16+4+2+1','2916','594','72'],
  'P09-a-i':[R`\log n/(2n)\to0`,'正的最终下界','不是'],
  'P09-a-ii':['10/(2+10000/n+5\\log n/n)','=5','正上下界','三个'],
  'P09-a-iii':[R`5^{\log_2 n}=n^{\log_2 5}`,R`\log_2 5>2`,R`\to0`],
  'P09-a-iv':['n/(\\log n)^5','趋无穷',R`A=\Omega(B)`],
  'P09-a-v':['(\\log n)^5/n^{0.1}','趋零',R`A=O(B)`],
  'P09-b-i':['T(1)=1','T(n-1)+n','1,3,6,10,15'],
  'P09-b-ii':['n+(n-1)+\\cdots+1','2S=n(n+1)','n(n+1)/2'],
  'P09-b-iii':['基础步','归纳假设','(k+1)(k+2)/2','全部正整数'],
  'P11-a':['两个不同端点',R`2|E(G)|`,'偶数'],
  'P11-b':[R`G\cong H`,R`\deg_G(v)+\deg_H(v)=n-1`,'S+S=2S'],
  'P11-c':['S=2e','n(n-1)=2S=4e','2\\cdot1=2','3\\cdot2=6']
 }
};
const checks=new Map(Object.entries(checkpoints).flatMap(([code,map])=>Object.entries(map).map(([s,c])=>['Q-'+code+'-'+s,c])));
function assertEnglishProof(id,w){checkWorkedProof(w,translatedCheckpoints(id,checks.get(id)),id);}
test('Task 8 all admitted English derivations retain their specific intermediate computations or proof obligations',()=>{
 assert.deepEqual([...checks.keys()].sort(),admitted.map(r=>r.id).sort());for(const r of admitted)assertEnglishProof(r.id,section(read(r.id),'Supplementary Explanation'));
});
test('Task 8 negative controls reject approach-only English and removal of each mathematical checkpoint',()=>{
 for(const r of admitted){const original=section(read(r.id),'Supplementary Explanation');
  const approach='**Answer.** Pending.\n\n**Derivation/proof.** Select the definitions, substitute the assumptions, and check the conclusion.';
  assert.throws(()=>assertEnglishProof(r.id,approach),undefined,r.id+' approach-only');
  for(const token of translatedCheckpoints(r.id,checks.get(r.id))){const changed=original.replaceAll(token,'[removed]');assert.throws(()=>assertEnglishProof(r.id,changed),undefined,r.id+' '+token);}
 }
});

test('Task 8 excluded/unresolved items have concrete countermodels or continuous-scope evidence and no notes',()=>{
 const expected={'Q-2024F-FINAL-P04-a':/arbitrary random variable.*Var\(X\) are undefined.*finite variance/s,'Q-2024S-FINAL-P03-a':/continuous.*outside.*finite-expectation/s,'Q-2024S-FINAL-P03-b':/undefined.*rather than zero/,'Q-2024S-FINAL-P06':/1\/9.*probability 0/s,'Q-2024F-MID-P01-d':/0 intermediate.*11.*shorter-arc/s,'Q-2024F-FINAL-P03-a':/range=3.*97\/C/,'Q-2024F-FINAL-P03-b':/2\/3.*1\/2/s,'Q-2024F-FINAL-P03-c-i':/1\/64.*probability 1/s,'Q-2024F-FINAL-P03-c-ii':/1\/16.*probability 1/s,'Q-2024F-FINAL-P04-b-i':/k=n=2.*1\/2/s,'Q-2024F-FINAL-P04-b-ii':/k=n=2.*independence gives 1/s,'Q-2024F-FINAL-P04-b-iii':/k=n=2.*1\/2/s};
 expected['Q-2024F-FINAL-P10']=/integer k.*T\(1\/2\).*values0 or1.*k≥0/s;
 expected['Q-2024S-FINAL-P02-a']=/11\/24.*3\/5/;expected['Q-2024S-FINAL-P02-b']=/9\/13.*3\/4/;
 assert.deepEqual(rows.filter(r=>!r.note_path).map(r=>r.id).sort(),Object.keys(expected).sort());
 for(const [id,re] of Object.entries(expected)){const r=byId.get(id);assert.equal(r.note_path,null);assert.match(r.exclusion_reason,re);assert.ok(!files.some(p=>basename(p).startsWith(id+' - ')));}
 const audit=readFileSync('knowledge_base/06-Audit/Syllabus Audit.md','utf8');for(const id of Object.keys(expected))assert.ok(audit.includes(id));
});

test('Task 8 dependent atoms import exact local mathematical context with reciprocal specific links',()=>{
 const pairs=[['2024S-MID-P04-b','2024S-MID-P04-a'],['2024S-MID-P12-b','2024S-MID-P12-a'],['2024S-FINAL-P01-proof','2024S-FINAL-P01-N'],['2024S-FINAL-P09-b','2024S-FINAL-P09-a'],['2024F-MID-P02-b','2024F-MID-P02-a'],['2024F-MID-P09-b','2024F-MID-P09-a'],['2024F-FINAL-P01-c','2024F-FINAL-P01-b'],['2024F-FINAL-P05-c','2024F-FINAL-P05-a'],['2024F-FINAL-P05-c','2024F-FINAL-P05-b'],['2024F-FINAL-P06-b','2024F-FINAL-P06-a'],['2024F-FINAL-P07-2','2024F-FINAL-P07-1'],['2024F-FINAL-P08-c','2024F-FINAL-P08-b'],['2024F-FINAL-P09-b-ii','2024F-FINAL-P09-b-i'],['2024F-FINAL-P09-b-iii','2024F-FINAL-P09-b-i'],['2024F-FINAL-P09-b-iii','2024F-FINAL-P09-b-ii'],['2024F-FINAL-P11-c','2024F-FINAL-P11-a'],['2024F-FINAL-P11-c','2024F-FINAL-P11-b']];
 for(let [a,b] of pairs){a='Q-'+a;b='Q-'+b;const la='[['+basename(byId.get(a).note_path,'.md')+']]',lb='[['+basename(byId.get(b).note_path,'.md')+']]';assert.ok(properties(a).related_questions.includes(lb));assert.ok(properties(b).related_questions.includes(la));assert.ok(section(read(a),'Source').includes(lb));assert.match(section(read(a),'Source'),/Prerequisite context \(editorial\):/);assert.ok(section(read(a),'Connections').includes('本题导入此前提/结果'));assert.ok(section(read(b),'Connections').includes('此结果在后续小题中的具体用途'));}
 assert.match(section(read('Q-2024F-FINAL-P08-c'),'Source'),/public exponent \$e=23\$/);
 assert.match(section(read('Q-2024F-FINAL-P07-2'),'Source'),/x\\equiv3\\pmod5/);
});

test('Task 8 answer-free stems and original cropped figures preserve verified bytes, links and teaching substance',()=>{
 assert.equal(Object.keys(fixture.stems).length,14);assert.equal(Object.keys(fixture.figures).length,4);
 const ownedStems=files.filter(p=>p.startsWith('knowledge_base/04-Questions/Stems/STEM-2024'));assert.equal(ownedStems.length,14);
 for(const [name,hash] of Object.entries(fixture.stems)){const p='knowledge_base/04-Questions/Stems/'+name+'.md',t=readFileSync(p,'utf8');assert.equal(sha(t),hash);const shared=section(t,'Shared printed wording');assert.ok(shared.length>50);assert.ok(!/Answer:|Solution:|答案|推导|Provenance|\*\*Answer/.test(shared));assert.ok(admitted.some(r=>read(r.id).includes('[['+name+'#Shared printed wording]]')));}
 for(const [f,hash] of Object.entries(fixture.figures)){const p='knowledge_base/06-Audit/figures/'+f;assert.equal(sha(readFileSync(p)),hash);assert.ok(ownedStems.some(s=>readFileSync(s,'utf8').includes('[['+p+']]')));}
 const targets=new Map(files.filter(p=>p.endsWith('.md')).map(p=>[basename(p,'.md'),p]));
 for(const path of [...admitted.map(r=>r.note_path),...ownedStems,'knowledge_base/01-Topics/Concepts/Graph Complements - 图的补图.md']){const t=readFileSync(path,'utf8');assert.ok(!controls.test(t));for(const m of t.matchAll(/!?\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)){const dest=m[1].split('#')[0];assert.ok(existsSync(dest)||targets.has(dest),`${path}: ${dest}`);}}
 const concept=readFileSync('knowledge_base/01-Topics/Concepts/Graph Complements - 图的补图.md','utf8');assert.match(concept,/parent_subtopics.*Subtopic - Graphs/);assert.match(concept,/c,a,d,b/);assert.match(concept,/必要顶点数条件/);assert.ok(concept.length>1400);
});

test('Task 8 independent arithmetic, enumeration, recurrence and countermodel checks',()=>{
 const C=(n,k)=>{if(k<0||k>n)return 0;let v=1;for(let i=1;i<=k;i++)v=v*(n-i+1)/i;return v;};
 assert.equal(17*233%792,1);assert.equal(23*47%72,1);assert.equal(Number(3n**23n%95n),72);
 assert.deepEqual([59%3,59%5,59%7],[2,4,3]);assert.deepEqual([3*58%5,58%4,3*58%7],[4,2,6]);
 assert.equal(C(5,2)*(C(11,6)-C(6,4)*C(5,2)),3120);
 assert.equal(C(10,4),210);assert.equal(C(6,1)*C(3,1),18);
 let diagonal=[[0,1]],forced=[[0,1]];for(let step=1;step<=8;step++){const advance=states=>{const m=new Map();for(const [y,num] of states)for(const dy of [-1,1]){const z=y+dy;if(z>=0&&z<=2)m.set(z,(m.get(z)||0)+num);}return [...m];};diagonal=advance(diagonal);forced=advance(forced).filter(([y])=>step!==4||y===2);}assert.equal(diagonal.find(([y])=>y===0)[1],8);assert.equal(forced.find(([y])=>y===0)[1],4);
 for(let n=1;n<=8;n++){let aps=0;for(let a=1;a<=2*n;a++)for(let b=a+1;b<=2*n;b++)for(let c=b+1;c<=2*n;c++)if(b-a===c-b)aps++;assert.equal(aps,2*C(n,2));}
 const digitCounts=[0,0,0,0];for(let n=100000;n<=999999;n++){const ds=String(n).split('').map(Number);if(ds.every((x,i)=>!i||ds[i-1]>x))digitCounts[0]++;if(ds.every((x,i)=>!i||ds[i-1]<x))digitCounts[1]++;if(ds.every((x,i)=>!i||ds[i-1]>=x))digitCounts[2]++;if(ds.every((x,i)=>!i||ds[i-1]<=x))digitCounts[3]++;}assert.deepEqual(digitCounts,[210,84,5004,3003]);
 let onto=0;for(let x=0;x<3**5;x++){let t=x,s=new Set();for(let j=0;j<5;j++){s.add(t%3);t=Math.floor(t/3);}if(s.size===3)onto++;}assert.equal(onto,150);
 const scores=new Set();for(let w=0;w<=5;w++)for(let d=0;d<=5-w;d++)scores.add(3*w+d);assert.equal(scores.size,15);assert.ok(!scores.has(14));
 for(let k=0,t=1;k<=10;k++){const n=2**k;if(k)t=3*t+n;assert.equal(t,3*3**k-2*n);}
 for(let n=0,p=0;n<=10;n++){if(n)p=(1-p)/(2*n+1)+(1-1/(2*n+1))*p;assert.ok(Math.abs(p-n/(2*n+1))<1e-12);}
 for(let n=1;n<=6;n++)for(let m=1;m<=6;m++){const counts=new Map();for(let x=0;x<2**(m+n);x++){const b=x.toString(2).padStart(m+n,'0');if([...b].filter(c=>c==='1').length!==n)continue;const k=(b.match(/1+/g)||[]).length;counts.set(k,(counts.get(k)||0)+1);}for(let k=1;k<=n+m;k++)assert.equal(counts.get(k)||0,C(m+1,k)*C(n-1,k-1));}
 assert.deepEqual([...new Set(Array.from({length:8},(_,a)=>a*a%8))].sort(),[0,1,4]);
 const joint=[{p:.5,loc:[0,0]},{p:.5,loc:[1,1]}];assert.deepEqual([0,1,2].map(kind=>joint.reduce((s,o)=>s+o.p*[0,1].filter(j=>{const c=o.loc.filter(x=>x===j).length;return kind===2?c>1:c===kind;}).length,0)),[1,0,1]);
});

test('Task 8 literal source errors, derived corrections, rubric marks and split-only Stem boundaries remain explicit',()=>{
 const defects={
  'Q-2024F-MID-P08':['If a team with 15 points exists, the next team must have at least a loss','two teams may never play each other'],
  'Q-2024F-FINAL-P07-2':['supplies no CRT computation or final residue','Page 20 is blank'],
  'Q-2024F-FINAL-P09-a-i':['(i) O, Ω and Θ'],
  'Q-2024F-FINAL-P09-a-ii':['(ii) A = O(B)'],
  'Q-2024F-FINAL-P09-a-iii':['(iii) A = Ω(B)'],
  'Q-2024F-FINAL-P09-a-iv':['(iv) A = O(B)'],
  'Q-2024F-FINAL-P09-a-v':['No (v) answer is printed'],
 };
 assert.deepEqual(Object.keys(defects).sort(),admitted.filter(r=>properties(r.id).answer_source==='derived').map(r=>r.id).sort());
 assert.equal(properties('Q-2024S-FINAL-P04').answer_source,'official');assert.deepEqual(properties('Q-2024S-FINAL-P04').solution_page,[4,5]);assert.match(byId.get('Q-2024S-FINAL-P04').source_correction,/label should be #P2.*3120/);
 for(const [id,tokens] of Object.entries(defects)){const source=section(read(id),'Source');for(const token of tokens)assert.ok(source.includes(token),id+' '+token);assert.match(byId.get(id).verification.solution,/Derived correction\/completion|Task11 compared the derived conclusion/);}
 assert.equal(properties('Q-2024F-MID-P01-c').answer_source,'official');assert.deepEqual(properties('Q-2024F-MID-P01-c').solution_page,[4]);assert.match(byId.get('Q-2024F-MID-P01-c').source_correction,/from7,2.*from7,6/);
 assert.equal(properties('Q-2024S-FINAL-P01-N').marks,3);
 assert.equal(properties('Q-2024S-FINAL-P01-proof').marks,undefined);
 for(const suffix of ['1','2'])assert.equal(properties('Q-2024F-FINAL-P07-'+suffix).marks,undefined);
 const crtStem=readFileSync('knowledge_base/04-Questions/Stems/STEM-2024F-FINAL-P07 - Shared Problem Prompt.md','utf8');assert.ok(!crtStem.includes('Remove the coefficients'));assert.ok(!crtStem.includes('Use Chinese Remainder Theorem'));
});

function assertFixedAsymptoticWarnings(part,m){
 const required=part==='ii'
  ?[R`B=2n^2+10000n+5n\log n`,R`A/B\to5`,'finite positive limit','official answer (ii) lists only $O$',R`$\Omega$ and $\Theta$`,'omits']
  :[R`n^{2-\log_2 5}\to0`,'Only $O$ holds',R`positive lower bound for $\Omega$`,'official answer (iii) writes',R`$A=\Omega(B)$`,'This label is wrong','incorrectly asserts that $n^2$ grows at least as fast as $B$','actually $n^2=o(B)$'];
 for(const token of required)assert.ok(m.includes(token),`9(a)(${part}) warning lacks ${token}`);
 assert.doesNotMatch(m,/B=2n(?![\d^])|official missing O/,'must not import the linear item or misidentify the missing key label');
 if(part==='iii'){
  assert.doesNotMatch(m,/all three relations hold/,'zero ratio cannot support all three relations');
  assert.ok(!m.includes('treats the slower $n^2$ as an asymptotic lower bound for $B$'),'the wrong Omega claim makes B a lower bound of A, not A of B');
 }
}
test('Historical removed warnings: Task 8 fix 1 asymptotic warnings agree with each actual ratio and its precise printed-key defect',()=>{
 for(const part of ['ii','iii'])assertFixedAsymptoticWarnings(part,historicalSection(read('Q-2024F-FINAL-P09-a-'+part),'Common Mistakes'));
});
test('Historical removed warnings: Task 8 fix 1 negative controls reject reviewed copied warnings and swapped limit/key claims',()=>{
 const copied='- A finite positive ratio means all three relations hold; add the official missing O.\n';
 const reviewed={ii:copied+'- B=2n is linear, not two to the nth power; preserve the distinction.',iii:copied+'- The exponent of five is a base-two logarithm; rewrite as a fixed power of n.'};
 for(const part of ['ii','iii']){
  assert.throws(()=>assertFixedAsymptoticWarnings(part,reviewed[part]),undefined,part+' reviewed contradiction');
  const good=historicalSection(read('Q-2024F-FINAL-P09-a-'+part),'Common Mistakes');
  assert.throws(()=>assertFixedAsymptoticWarnings(part,good+'\n'+reviewed[part]),undefined,part+' contradiction appended to correct warnings');
  const wrongLimit=part==='ii'?good.replace(R`A/B\to5`,R`A/B\to0`):good.replace(R`n^{2-\log_2 5}\to0`,R`n^{2-\log_2 5}\to5`);
  assert.throws(()=>assertFixedAsymptoticWarnings(part,wrongLimit),undefined,part+' swapped limit');
  const wrongKey=part==='ii'?good.replace('lists only $O$',R`lists only $\Omega$`):good.replace(R`$A=\Omega(B)$`,'$A=O(B)$');
  assert.throws(()=>assertFixedAsymptoticWarnings(part,wrongKey),undefined,part+' incorrect printed label');
  if(part==='iii'){
   const reversed='it treats the slower $n^2$ as an asymptotic lower bound for $B$';
   assert.throws(()=>assertFixedAsymptoticWarnings(part,good.replace('incorrectly asserts that $n^2$ grows at least as fast as $B$',reversed)),undefined,'reversed lower-bound direction');
   assert.throws(()=>assertFixedAsymptoticWarnings(part,good+'\n'+reversed),undefined,'reversed claim appended to correct direction');
  }
 }
});
// Persistent coverage is source-scoped and semantic. Whole-file fix-scope
// preservation is one-off report evidence, not a freeze on future batches.
const quarantineScopeCodes={
 'Q-2024S-FINAL-P03-a':'X','Q-2024S-FINAL-P03-b':'X','Q-2024S-FINAL-P06':'V','Q-2024F-MID-P01-d':'I',
 'Q-2024F-FINAL-P03-a':'VC','Q-2024F-FINAL-P03-b':'Y','Q-2024F-FINAL-P03-c-i':'VB','Q-2024F-FINAL-P03-c-ii':'VB',
 'Q-2024F-FINAL-P04-a':'X','Q-2024F-FINAL-P04-b-i':'X','Q-2024F-FINAL-P04-b-ii':'X','Q-2024F-FINAL-P04-b-iii':'X'
};
const quarantineScopeNames={X:'Subtopic - Random Variables - 随机变量',V:'Subtopic - Introduction to Probability - 概率基础',I:'Subtopic - Inference and Proofs - 推理与证明',C:'Subtopic - Permutations and Combinations - 排列与组合',Y:'Subtopic - Conditional Probability - 条件概率',B:'Subtopic - Basic Counting - 基本计数'};
function assertTask8AuditDecisions(records){
 const actual=records.filter(r=>sources.has(r.source_pdf)).map(r=>({id:r.id,source_pdf:r.source_pdf,source_page:r.source_page,question_number:r.question_number,status:r.status,hasNote:r.note_path!==null,syllabus_evidence:r.syllabus_evidence})).sort((a,b)=>a.id.localeCompare(b.id));
 const expected=Object.entries(fixture.questions).map(([id,f])=>{
  const code=Object.keys(specs).find(c=>id.startsWith('Q-'+c+'-'));
  return {id,source_pdf:'knowledge_base/past_paper/'+specs[code][0]+'.pdf',source_page:f.page,question_number:f.label,status:f.status,hasNote:f.status==='in-scope',syllabus_evidence:f.subtopics?.map(s=>s.slice(2,-2))??[...quarantineScopeCodes[id]].map(c=>quarantineScopeNames[c])};
 }).sort((a,b)=>a.id.localeCompare(b.id));
 assert.deepEqual(actual,expected);
}
test('Task 8 fix 2 persistent audit assertions retain only Task 8 atom identities, scope and admission decisions',()=>{
 assertTask8AuditDecisions(allRows);
});
test('Task 8 fix 2 permits later audit rows and editorial wording while rejecting changed Task 8 decisions',()=>{
 const future={id:'Q-2025S-FINAL-TEST-CONTROL',source_pdf:'knowledge_base/past_paper/COMP2711_S2025_Final.pdf',status:'needs-review',note_path:null};
 assertTask8AuditDecisions([...allRows,future]);
 const edited=structuredClone(allRows);for(const r of edited)if(sources.has(r.source_pdf)){r.verification={transcription:'Revised editorial wording'};if(r.exclusion_reason)r.exclusion_reason+=' Editorial clarification.';}
 assertTask8AuditDecisions([...edited,future]);
 for(const change of [rs=>rs.filter(r=>r.id!=='Q-2024F-FINAL-P04-a'),rs=>rs.map(r=>r.id==='Q-2024F-FINAL-P04-a'?{...r,status:'in-scope',note_path:'invented.md'}:r),rs=>rs.map(r=>r.id==='Q-2024F-FINAL-P09-a-iii'?{...r,source_page:24}:r),rs=>rs.map(r=>r.id==='Q-2024F-FINAL-P04-a'?{...r,syllabus_evidence:[quarantineScopeNames.B]}:r)])assert.throws(()=>assertTask8AuditDecisions(change(allRows)));
});

test('Task 8 four immutable source hashes match original inventory',()=>{
 const expected={COMP2711_S2024_Midterm:'1cc40fb0f4795239949a0e2f0b4c0b789ab2d3e701f2eebddf5b407b97bae526',COMP2711_S2024_Final:'c3c98022a98dd9586cb2eff94c5e7d78bda69b0cb0fb4f4ecf5401241615779d',COMP2711_F2024_Midterm:'a2c7c1624898971f48fd6a5cf143df67db1fe4f9a8bd59cdfc880c8a3120458c',COMP2711_F2024_Final:'d6ddd1bb2ff55313079dbc5927731593d3c49cbbe3cc0294d000f8d10f014e0d'};
 const inv=JSON.parse(readFileSync('knowledge_base/06-Audit/source-inventory.json','utf8')).sources;
 for(const [name,hash] of Object.entries(expected)){const path='knowledge_base/past_paper/'+name+'.pdf';assert.equal(sha(readFileSync(path)),hash);assert.equal(inv.find(s=>s.source_pdf===path).sha256,hash);}
});
