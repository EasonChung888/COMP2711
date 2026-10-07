import {checkWorkedProof, translatedCheckpoints, workedSolution} from './answer-proof-helpers.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync,readdirSync,existsSync,statSync} from 'node:fs';
import {basename,join} from 'node:path';
import {createHash} from 'node:crypto';
import {parseFrontmatter,validateQuestionProperties} from '../knowledge-base/schema.mjs';

// Source-scoped fixtures transcribed from all 58 rendered canonical PDF pages.
// Later batches may add sources and notes without changing these assertions.
const evidence={
 '2023S-MID':['COMP2711_S2023_Midterm','2023 Spring Midterm','spring','midterm',24,22,'P01-a-1 P01-a-2 P01-a-3 P01-a-proof P01-b P02-a P02-b P02-c P02-d P03-1 P03-2 P03-3 P03-4 P03-5 P04 P05 P06 P07-a P07-b P08-a P08-b P08-c P08-d P08-e'],
 '2023F-MID':['COMP2711_F2023_Midterm','2023 Fall Midterm','fall','midterm',27,22,'P01-a P01-b P01-c P02-a P02-b P02-c P03-a P03-b-i P03-b-ii P03-b-iii P03-c P04-a P04-b P04-c P04-d P05 P06 P07 P08 P09-a-expectation P09-a-variance P09-b-expectation P09-b-variance P09-c P09-d-i P09-d-ii P09-d-iii'],
 '2023F-FINAL':['COMP2711_F2023_Final','2023 Fall Final','fall','final',25,19,'P01-a-i P01-a-ii P01-a-iii P01-b P02-a-i P02-a-ii P02-b P03 P04-a P04-b P04-c P04-d P05-a P05-b P06-a P06-b P07 P08-a P08-b P09-a P09-b P09-c P09-d P10 P11']
};
const sources=new Set(Object.values(evidence).map(e=>'knowledge_base/past_paper/'+e[0]+'.pdf'));
const alias='knowledge_base/past_paper/COMP2711_S2023_Final.pdf';
const allRows=JSON.parse(readFileSync('knowledge_base/06-Audit/question-audit.json','utf8')).questions;
const rows=allRows.filter(r=>sources.has(r.source_pdf)),admitted=rows.filter(r=>r.note_path),byId=new Map(rows.map(r=>[r.id,r]));
const derivedCorrections=new Set();
const read=id=>readFileSync(byId.get(id).note_path,'utf8');
const props=id=>parseFrontmatter(read(id)).properties;
const section=(text,title)=>text.match(new RegExp(`## ${title}\\n\\n([\\s\\S]*?)(?=\\n## |$)`))?.[1]?.trim()??'';
const has=(id,fragment)=>assert.ok(read(id).includes(fragment),`${id}: missing ${fragment}`);
const controls=/[\u0000-\u0008\u000B-\u001F]/;
const generic=/\(cid:\d+\)|Exact English source-page transcription|Official result and derivation are on the embedded|从题设识别出|先写出定义或样本空间；再代入题中给出的限制|Directly identifies the required object in|Requires a short, source-specific chain for|Requires a complete multi-step derivation or proof for|\bTODO\b|\bTBD\b|placeholder/i;
function walk(dir){return readdirSync(dir).flatMap(n=>{const p=join(dir,n);return statSync(p).isDirectory()?walk(p):[p];});}
const vault= ['knowledge_base/01-Topics','knowledge_base/02-Methods','knowledge_base/03-Papers','knowledge_base/04-Questions','knowledge_base/06-Audit'].flatMap(walk);

test('Task 7 fixes three canonical counts, atomic order, faithful labels and season-aware Paper metadata',()=>{
 for(const [code,[file,title,term,exam,count,noteCount,order]] of Object.entries(evidence)){
  const rs=rows.filter(r=>r.source_pdf==='knowledge_base/past_paper/'+file+'.pdf');
  assert.deepEqual(rs.map(r=>r.id),order.split(' ').map(s=>'Q-'+code+'-'+s));
  assert.equal(rs.length,count);assert.equal(rs.filter(r=>r.note_path).length,noteCount);
  const paper=readFileSync('knowledge_base/03-Papers/'+title+'.md','utf8'),p=parseFrontmatter(paper).properties;
  assert.deepEqual([p.year,p.term,p.exam_type,p.identified_count,p.admitted_count,p.excluded_count,p.unresolved_count],[2023,term,exam,count,noteCount,0,count-noteCount]);
  assert.equal(p.source_pdf,'knowledge_base/past_paper/'+file+'.pdf');assert.equal(p.verification_status,'verified');
  const links=[...paper.matchAll(/\[\[(Q-2023[SF]-[^\]|]+)\]\]/g)].map(m=>m[1]);assert.deepEqual(links,rs.filter(r=>r.note_path).map(r=>basename(r.note_path,'.md')));
  for(const r of rs){const parts=r.id.slice(('Q-'+code+'-').length).split('-');let label=String(+parts[0].slice(1));for(const s of parts.slice(1))if(/^[a-z]$|^[1-5]$|^ii$|^iii$/.test(s))label+='('+s+')';assert.equal(r.question_number,label,r.id);if(r.note_path){const p=props(r.id);assert.equal(p.question_number,label);assert.equal(p.term,term);assert.equal(p.exam_type,exam);}}
 }
 assert.equal(rows.length,76);assert.equal(admitted.length,Object.values(evidence).reduce((sum,e)=>sum+e[5],0));
});

const metadata={
 '2023S-MID':[
 'P01-a-1 P01-a-2 P01-a-3 P01-a-proof|3|4|- - - -','P02-a P02-b P02-c P02-d|5|5|3 3 3 3','P03-1 P03-2 P03-3 P03-4 P03-5|6|6|- - - - -','P04|7|7|13','P05|8|8|13','P06|9|9|12','P07-a|10|10|7','P07-b|10|11|8','P08-a P08-b P08-c P08-e|12|12|2 2 2 2'],
 '2023F-MID':[
  'P01-a P01-b|3|3|4 4','P01-c|3|3,4|3','P02-a P02-b|5|5,6|4 4','P03-a P03-c|7|7|4 3','P03-b-ii P03-b-iii|7|7|1 1','P04-a P04-b P04-c|8|9,10|4 4 4','P04-d|9|10|4','P05|12|12|7','P06|13|13,14|12','P08|17|17,18|8','P09-a-expectation P09-a-variance P09-b-expectation P09-b-variance P09-c|19|19|- - - - 2','P09-d-i|19|20|1'],
 '2023F-FINAL':[
 'P01-a-i P01-a-ii P01-a-iii P01-b|3|3|1 1 1 2','P02-b|4|4,5|3','P03|6|6|7','P04-d|7|7|4','P05-a P05-b|8|8,9|5 6','P06-a P06-b|10|10|6 3','P07|11|11|11','P08-a P08-b|12|12,13|7 4','P09-a P09-b P09-c P09-d|14|14,15|2 2 5 3','P10|16|16|6']
};
test('Task 7 every admitted source page, rubric continuation and explicit atomic mark is fixed',()=>{
 const checked=[];for(const [code,groups] of Object.entries(metadata))for(const line of groups){const [s,p,sol,m]=line.split('|'),ss=s.split(' '),mm=m.split(' ');assert.equal(ss.length,mm.length);ss.forEach((suffix,i)=>{const id='Q-'+code+'-'+suffix,pr=props(id);checked.push(id);assert.equal(pr.source_page,+p,id);assert.deepEqual(pr.solution_page,sol==='-'?undefined:sol.split(',').map(Number),id);assert.equal(pr.marks,mm[i]==='-'?undefined:+mm[i],id);});}
 assert.deepEqual(checked.sort(),admitted.map(r=>r.id).sort());
});

const quarantines={
 'Q-2023F-FINAL-P02-a-i':[4,/uniform.*1\/22/s],
 'Q-2023F-FINAL-P02-a-ii':[4,/distribution.*100\/231/s],
 'Q-2023F-FINAL-P11':[17,/finite.*two.*odd-degree endpoints/i],
 'Q-2023F-FINAL-P04-c':[7,/arbitrary random variable.*finite real expectation.*−∞/s],
 'Q-2023F-MID-P07':[16,/at random.*uniform.*full support/s],
 'Q-2023S-MID-P08-d':[12,/no base.*official.*base 2.*unresolved/s],
 'Q-2023S-MID-P01-b':[4,/no parentheses.*left association.*Right association.*p=F,q=F,r=F/s],
 'Q-2023F-MID-P02-c':[5,/nonempty.*empty pub/s],
 'Q-2023F-MID-P03-b-i':[7,/infinitely countable.*finite union/s],
 'Q-2023F-MID-P09-d-ii':[19,/independent.*P\(T=3\)=0.*4\/27/s],
 'Q-2023F-MID-P09-d-iii':[19,/independent.*T=∞.*E\(T\)=∞/s],
 'Q-2023F-FINAL-P04-a':[7,/perfectly correlated.*E\(X_i\)=0/s],
 'Q-2023F-FINAL-P04-b':[7,/flip together.*E\(Y\)=0.*Linearity/s]
};
test('Task 7 source-scoped ambiguities stay quarantined without notes or inflated alias records',()=>{
 assert.deepEqual(rows.filter(r=>r.status==='needs-review').map(r=>r.id).sort(),Object.keys(quarantines).sort());
 for(const [id,[page,pattern]] of Object.entries(quarantines)){const r=byId.get(id);assert.equal(r.source_page,page);assert.equal(r.note_path,null);assert.match(r.exclusion_reason,pattern);assert.ok(!vault.some(p=>basename(p).startsWith(id+' - ')),id);}
 assert.equal(rows.filter(r=>r.status==='out-of-scope').length,0);
 assert.equal(allRows.filter(r=>r.source_pdf===alias).length,0);
 assert.ok(!existsSync('knowledge_base/03-Papers/2023 Spring Final.md'));
 assert.ok(!vault.some(p=>/Q-2023S-FINAL|STEM-2023S-FINAL/.test(p)));
});

test('Task 7 all four immutable PDF hashes, Spring duplicate inventory and rendered-title record agree',()=>{
 const expected={
  'COMP2711_S2023_Midterm':'7cb61aa82894104e5769eb2c2a20c53874e401c9f1e41b1e0cd8e7191a318aa5',
  'COMP2711_S2023_Final':'7cb61aa82894104e5769eb2c2a20c53874e401c9f1e41b1e0cd8e7191a318aa5',
  'COMP2711_F2023_Midterm':'4ced9291189c331f77d1a2d614cac17c95b372cf3153db6403c3946af2c1ea9b',
  'COMP2711_F2023_Final':'7d130692eefddad676faf43cbe4eac7f777c09fea055dd5d4d84acf575355c0e'
 };
 const inventory=JSON.parse(readFileSync('knowledge_base/06-Audit/source-inventory.json','utf8')).sources;
 for(const [f,hash] of Object.entries(expected)){const path='knowledge_base/past_paper/'+f+'.pdf';assert.equal(createHash('sha256').update(readFileSync(path)).digest('hex'),hash,path);assert.equal(inventory.find(x=>x.source_pdf===path).sha256,hash);}
 assert.equal(inventory.find(x=>x.source_pdf===alias).duplicate_of,'knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf');
 const text=readFileSync('knowledge_base/03-Papers/2023 Spring Midterm.md','utf8'),p=parseFrontmatter(text).properties;assert.deepEqual(p.source_aliases,[alias]);assert.equal(p.sha256,expected.COMP2711_S2023_Midterm);assert.equal(p.page_count,14);assert.match(text,/Both rendered first pages read “Spring 2023 Midterm Examination”/);assert.match(text,/zero extra questions/);
});

test('Task 7 verified notes have unique item-specific solutions, English reasoning and metadata',()=>{
 const works=new Set(),bases=new Set(),difficulties=new Set();
 for(const r of admitted){const t=read(r.id),p=props(r.id);assert.deepEqual(validateQuestionProperties(p),[],r.id);assert.equal(p.answer_source,derivedCorrections.has(r.id)?'derived':'official');assert.equal(p.verification_status,'verified');assert.equal(p.year,2023);assert.equal(p.source_pdf,r.source_pdf);assert.ok(!controls.test(t),r.id);assert.ok(!generic.test(t),r.id);
  assert.deepEqual([...t.matchAll(/^## (.+)$/gm)].map(m=>m[1]),['Source','Question','Official Answer','Supplementary Explanation','Connections']);
  assert.ok(!t.includes('The dependent item imports the precise premise or result'),r.id);
  const w=section(t,'Supplementary Explanation');assert.ok(w.length>=300,r.id);assert.match(w,/\*\*Answer\.\*\*/);assert.match(w,/\*\*Derivation\/proof\.\*\*/);assert.ok(!works.has(w),r.id);works.add(w);
  assert.ok(p.difficulty_basis.length>45,r.id);assert.ok(!bases.has(p.difficulty_basis),r.id);bases.add(p.difficulty_basis);difficulties.add(p.difficulty);assert.ok(t.includes(`![[${r.source_pdf}#page=${r.source_page}]]`));assert.deepEqual(r.syllabus_evidence,p.subtopics.map(l=>l.slice(2,-2)));assert.ok(r.verification.transcription.includes(String(r.source_page)));assert.ok(r.verification.solution.includes('Independent check:')||r.verification.solution.startsWith('Task11 '));
 }
 assert.deepEqual([...difficulties].sort(),[1,2,3,4]);
 for(const id of ['Q-2023F-FINAL-P01-a-i','Q-2023F-FINAL-P01-a-ii','Q-2023F-FINAL-P01-a-iii'])assert.deepEqual(props(id).question_types,['classification']);
 assert.deepEqual(props('Q-2023F-FINAL-P10').question_types,['algorithm-analysis']);
 for(const id of ['Q-2023F-FINAL-P09-c','Q-2023F-FINAL-P09-d'])assert.deepEqual(props(id).question_types,['modeling']);
});

test('Task 7 every atomic moment isolates its own request, while source context and joint marks stay explicit',()=>{
 for(const variable of ['X','Y'])for(const [kind,op] of [['expectation','E'],['variance','V']]){const id=`Q-2023F-MID-P09-${variable==='X'?'a':'b'}-${kind}`,t=read(id);assert.match(section(t,'Source'),/Atomic extraction: the original combined request/);assert.ok(section(t,'Question').includes(`$${op}(${variable})$`));assert.ok(!section(t,'Question').includes(`$${op==='E'?'V':'E'}(${variable})$`));assert.equal(props(id).marks,undefined);}
 const x=read('Q-2023F-MID-P09-d-i');assert.match(section(x,'Supplementary Explanation'),/any dependence structure/);assert.match(section(x,'Source'),/PMF.*unambiguously.*support/s);
});

test('Task 7 source-sensitive formulas and computed answers stay attached to the correct items',()=>{
 const cases={
  'Q-2023S-MID-P01-a-1':[String.raw`(\neg r\lor\neg f)\to(s\land l)`],
  'Q-2023S-MID-P02-d':[String.raw`\neg\forall x\exists y(P(x)\lor\neg Q(y))`,'$P(1)$ is true and $P(0)$ is false'],
  'Q-2023S-MID-P04':[String.raw`2x^2-5y^2=7`,String.raw`2x^2\equiv7+5\equiv4\pmod8`],
  'Q-2023S-MID-P05':[String.raw`4x\equiv1\pmod7`,String.raw`3x\equiv1\pmod{11}`,'37+231k'],
  'Q-2023S-MID-P06':[String.raw`\gcd(2^{100}-1,2^{65}-1)`,'$31$'],
  'Q-2023S-MID-P07-b':['767','1333','500'],
  'Q-2023S-MID-P08-c':[String.raw`\log_5 n`],
  'Q-2023F-MID-P02-a':[String.raw`\forall x\bigl(P(x)\land\exists y(Q(y)\land\neg R(y)\land\neg S(y))\bigr)`],
  'Q-2023F-MID-P02-b':[String.raw`\forall a\forall b\bigl(CoPrime(a,b)\leftrightarrow\forall c\exists x\exists y(c=ax+by)\bigr)`],
  'Q-2023F-MID-P04-a':[String.raw`\binom{12}{5}-\binom63\binom62`,'492'],
  'Q-2023F-MID-P04-b':[String.raw`\binom42\,2^4=96`],
  'Q-2023F-MID-P04-c':['$6(1+6+8)=90$'],
  'Q-2023F-MID-P04-d':['only one lattice vertex lies strictly inside','equality is possible only between two distinct vertices'],
  'Q-2023F-MID-P06':['105-45-36-28+6+3+1=6'],
  'Q-2023F-MID-P08':['21/23'],
  'Q-2023F-FINAL-P02-b':['54'],
  'Q-2023F-FINAL-P03':['0.0002',String.raw`49\,985\,001/49\,985\,006`],
  'Q-2023F-FINAL-P04-d':['independently','uniform distribution',String.raw`K=-Y`,String.raw`Y\ge n/2`],
  'Q-2023F-FINAL-P05-a':['263'],
  'Q-2023F-FINAL-P05-b':[String.raw`18^{23}`,'323'],
  'Q-2023F-FINAL-P06-a':['distinctness is not required'],
  'Q-2023F-FINAL-P07':['27+30t'],
  'Q-2023F-FINAL-P08-a':[String.raw`\lfloor9N/10\rfloor<N`,'0 through 5'],
  'Q-2023F-FINAL-P08-b':[String.raw`2\cdot3^n-1`],
  'Q-2023F-FINAL-P09-c':[String.raw`a_{j-2}a_{2n-j}`,'zero for odd'],
  'Q-2023F-FINAL-P09-d':[String.raw`\sum_{k=1}^{n}a_{2k-2}a_{2n-2k}`],
  'Q-2023F-FINAL-P10':['while j < i and location = 0','n(n-1)/2'],
 };
 for(const [id,parts] of Object.entries(cases))parts.forEach(p=>has(id,p));
});

test('Task 7 explicit dependencies have sufficient local context and reciprocal actual relationships',()=>{
 const deps={
  'Q-2023S-MID-P01-a-proof':['Q-2023S-MID-P01-a-1','Q-2023S-MID-P01-a-2','Q-2023S-MID-P01-a-3'],
  'Q-2023S-MID-P07-b':['Q-2023S-MID-P07-a'],
  'Q-2023F-FINAL-P05-b':['Q-2023F-FINAL-P05-a'],
  'Q-2023F-FINAL-P09-d':['Q-2023F-FINAL-P09-b','Q-2023F-FINAL-P09-c']
 };
 for(const [id,parents] of Object.entries(deps)){const src=section(read(id),'Source');assert.match(src,/Prerequisite context \(editorial\)/);assert.ok((src.match(/[\u3400-\u9fff]/g)??[]).length>20,id);for(const parent of parents){const link='[['+basename(byId.get(parent).note_path,'.md')+']]';assert.ok(src.includes(link));assert.ok(props(id).related_questions.includes(link));assert.ok(rows.indexOf(byId.get(parent))<rows.indexOf(byId.get(id)));assert.ok(section(read(id),'Connections').includes('- Prerequisite: '+link));assert.ok(section(read(parent),'Connections').includes('- Used by: [['+basename(byId.get(id).note_path,'.md')+']]'));}}
 for(const r of admitted)for(const link of props(r.id).related_questions??[]){const p=vault.find(p=>basename(p,'.md')===link.slice(2,-2));assert.ok(p,link);const other=parseFrontmatter(readFileSync(p,'utf8')).properties;assert.ok(other.related_questions.includes('[['+basename(r.note_path,'.md')+']]'));assert.ok(section(read(r.id),'Connections').includes(link));}
 assert.deepEqual(admitted.filter(r=>read(r.id).includes('Prerequisite context (editorial):')).map(r=>r.id).sort(),Object.keys(deps).sort());
 const key=(a,b)=>[a,b].sort().join(' / '),expectedPairs=new Set(Object.entries(deps).flatMap(([a,bs])=>bs.map(b=>key(a,b))));
 for(const [a,b] of [
  ['Q-2023F-MID-P03-b-ii','Q-2023F-MID-P03-b-iii'],
  ['Q-2023F-MID-P09-a-expectation','Q-2023F-MID-P09-b-expectation'],
  ['Q-2023F-MID-P09-a-variance','Q-2023F-MID-P09-b-variance'],
  ['Q-2023F-FINAL-P01-a-i','Q-2023F-FINAL-P01-a-ii'],
  ['Q-2023F-FINAL-P01-a-ii','Q-2023F-FINAL-P01-a-iii'],
 ])expectedPairs.add(key(a,b));
 const actualPairs=new Set(admitted.flatMap(r=>(props(r.id).related_questions??[]).map(l=>key(r.id,l.slice(2,-2).split(' - ')[0]))));assert.deepEqual([...actualPairs].sort(),[...expectedPairs].sort());
 has('Q-2023S-MID-P07-b','$d=767$');has('Q-2023F-FINAL-P04-d','$K=-Y$');has('Q-2023F-FINAL-P05-b','computed private exponent is not needed');
});

test('Task 7 solution-driven scope and method mappings retain each essential technique',()=>{
 const expected={
  'Q-2023S-MID-P01-a-proof':['Propositional Logic','Inference and Proofs'],
  'Q-2023S-MID-P07-b':['Cryptography','GCDs and Congruences','Modular Arithmetic'],
  'Q-2023F-MID-P04-a':['Basic Counting','Permutations and Combinations'],
  'Q-2023F-MID-P04-d':['Basic Counting','Inference and Proofs'],
  'Q-2023F-MID-P06':['Inclusion-Exclusion','Permutations and Combinations'],
  'Q-2023F-FINAL-P04-d':['Random Variables','Inference and Proofs'],
  'Q-2023F-FINAL-P06-a':['Modular Arithmetic','Basic Counting'],
  'Q-2023F-FINAL-P08-a':['Induction','Algorithms'],
  'Q-2023F-FINAL-P09-d':['Recursion','Basic Counting'],

 };
 for(const [id,labels] of Object.entries(expected))for(const label of labels)assert.ok(props(id).subtopics.some(l=>l.startsWith('[[Subtopic - '+label+' - ')),id+': '+label);
 for(const n of [1,2,3])assert.ok(props('Q-2023S-MID-P01-a-'+n).methods[0].startsWith('[[Propositional Translation Method - '));
});

test('Task 7 Stems, figures and teaching targets have no answers, contamination, dangling links or orphans',()=>{
 const scopedStems=vault.filter(p=>p.includes('/STEM-2023S-')||p.includes('/STEM-2023F-'));
 assert.equal(scopedStems.length,10);const names=new Set(vault.map(p=>basename(p,'.md'))),targets=new Set();
 const resolveLinks=(t,label)=>{for(const m of t.matchAll(/\[\[([^\]|#]+)(?:[^\]]*)\]\]/g)){const dest=m[1];if(/\.(pdf|png|base)$/.test(dest))assert.ok(existsSync(dest),label+': '+dest);else assert.ok(names.has(basename(dest,'.md')),label+': '+dest);}};
 for(const r of admitted){const t=read(r.id);resolveLinks(t,r.id);for(const l of [...props(r.id).concepts,...props(r.id).methods])targets.add(vault.find(p=>basename(p,'.md')===l.slice(2,-2)));}
 for(const path of scopedStems){const t=readFileSync(path,'utf8'),p=parseFrontmatter(t).properties;assert.equal(p.note_type,'stem');assert.ok(sources.has(p.source_pdf));assert.ok(!controls.test(t));assert.ok(!generic.test(t));assert.ok(!/^## (?:Answer|Official Answer|Supplementary Explanation|Detailed Solution)|\*\*Answer\./m.test(t));assert.ok(admitted.some(r=>read(r.id).includes('[['+basename(path,'.md')+'#Shared printed wording]]')),path);resolveLinks(t,path);}
 for(const path of targets){assert.ok(path);const t=readFileSync(path,'utf8');assert.ok(!controls.test(t),path);assert.ok(!generic.test(t),path);assert.ok(t.length>350,path);assert.ok(/[\u3400-\u9fff]/.test(t),path);resolveLinks(t,path);}
 const figures=vault.filter(p=>/Figures\/2023[SF]-/.test(p));assert.equal(figures.length,4);for(const p of figures){assert.ok(statSync(p).size>3000,p);assert.ok([...admitted.map(r=>read(r.id)),...scopedStems.map(p=>readFileSync(p,'utf8')),readFileSync('knowledge_base/03-Papers/2023 Fall Final.md','utf8')].some(t=>t.includes('[['+p+']]')),p);}
 const declared=new Set(admitted.map(r=>r.note_path));assert.deepEqual(vault.filter(p=>/\/Q-2023[SF]-/.test(p)).sort(),[...declared].sort());
});

const choose=(n,k)=>{if(k<0||k>n)return 0;let a=1;for(let i=1;i<=k;i++)a=a*(n-i+1)/i;return Math.round(a);};
const gcd=(a,b)=>{while(b)[a,b]=[b,a%b];return a;};
const pow=(a,n,m)=>{a=BigInt(a);n=BigInt(n);m=BigInt(m);let r=1n;while(n){if(n&1n)r=r*a%m;a=a*a%m;n>>=1n;}return Number(r);};
test('Task 7 number-theory and probability answers recompute independently',()=>{
 assert.equal(gcd((1n<<100n)-1n,(1n<<65n)-1n),31n);
 assert.equal(23*767%1260,1);assert.equal(pow(2,767,1333),500);assert.equal(23*263%288,1);assert.equal(pow(18,23,323),18);assert.equal(pow(17,2023,14),3);
 const spring=[],fall=[];for(let x=0;x<231;x++)if(x%3===1&&4*x%7===1&&3*x%11===1)spring.push(x);for(let x=0;x<30;x++)if(3*x%10===1&&5*x%6===3)fall.push(x);assert.deepEqual(spring,[37]);assert.deepEqual(fall,[27]);
 const residues=new Set();for(let x=0;x<8;x++)for(let y=0;y<8;y++)residues.add(((2*x*x-5*y*y)%8+8)%8);assert.ok(!residues.has(7));
 for(let a=-2;a<=4;a++)for(let b=-2;b<=4;b++)for(let c=-2;c<=4;c++)for(let d=-2;d<=4;d++)assert.equal(Math.abs((a-b)*(a-c)*(a-d)*(b-c)*(b-d)*(c-d))%12,0);
 assert.ok(Math.abs((.9*.7)/(.9*.7+.2*.3)-21/23)<1e-12);assert.ok(Math.abs(5/8*4/7*3/6*3/5-3/28)<1e-12);assert.ok(Math.abs(3/28+choose(5,2)*choose(3,1)/choose(8,3)*2/5+choose(5,1)*choose(3,2)/choose(8,3)/5-3/8)<1e-12);
 assert.ok(Math.abs((.9999*.9998)/(.9999*.9998+.0001*.001)-49985001/49985006)<1e-15);
 assert.equal(2/3-1/3,1/3);assert.equal(1-(1/3)**2,8/9);assert.equal(0*2/3+(-2)/3,-2/3);
});

test('Task 7 grid paths, colorings, balanced tables, bounded sums and decimal counts pass exhaustive checks',()=>{
 const dp=Array.from({length:8},()=>Array(6).fill(0));dp[0][0]=1;for(let x=0;x<=7;x++)for(let y=0;y<=5;y++){if(x===0&&y===0)continue;if(x===3&&y===3)continue;dp[x][y]=(x?dp[x-1][y]:0)+(y?dp[x][y-1]:0);}assert.equal(dp[7][5],492);assert.equal(choose(12,5)-choose(6,3)*choose(6,2),492);
 let colorings=0;for(let mask=0;mask<256;mask++){let x=0,y=0;for(let i=0;i<5&&x<3&&y<3;i++){if(x===2&&y===2){colorings++;break;}const bit=x+3*y;mask>>bit&1?y++:x++;}}assert.equal(colorings,96);
 let tables=0;for(let mask=0;mask<65536;mask++){const cells=Array.from({length:16},(_,i)=>mask>>i&1);if([0,1,2,3].every(r=>[0,1,2,3].reduce((s,c)=>s+cells[4*r+c],0)===2)&&[0,1,2,3].every(c=>[0,1,2,3].reduce((s,r)=>s+cells[4*r+c],0)===2))tables++;}assert.equal(tables,90);
 let sums=0;for(let a=0;a<=4;a++)for(let b=0;b<=5;b++)for(let c=0;c<=6;c++)sums+=Number(a+b+c===13);assert.equal(sums,6);
 let digits=0;for(let n=1000;n<10000;n++)if([...String(n)+String(2*n)].every(d=>Number(d)%2===0))digits++;assert.equal(digits,54);
 for(let n=0;n<=10;n++)for(let m=0;m<=n;m++){let good=0;for(let mask=0;mask<2**n;mask++){if(mask.toString(2).split('1').length-1!==m)continue;if(!(mask&(mask<<1)))good++;}assert.equal(good,choose(n-m+1,m));}
 for(let n=0;n<=12;n++)assert.equal(Array.from({length:n+1},(_,i)=>choose(n,i)**2).reduce((a,b)=>a+b,0),choose(2*n,n));
});

test('Task 7 ambiguity countermodels and derived existence construction keep their different assumptions',()=>{
 const imp=(a,b)=>!a||b,p=false,q=false,r=false;
 assert.equal(imp(imp(p&&q,p||q),r&&q),false);assert.equal(imp(p&&q,imp(p||q,r&&q)),true);
 assert.equal([].some(x=>!x||[].every(y=>y)),false);assert.equal(new Set(Array.from({length:20},()=>0)).size,1);
 // Perfectly correlated fair switches preserve OFF; fair marginals alone fail.
 assert.equal((0+((1+1)%2))/2,0);
 // The admitted existence proof explicitly chooses all switch subsets uniformly.
 for(let m=1;m<=4;m++)for(let incident=1;incident<2**m;incident++)for(const initial of [0,1]){let on=0;for(let choice=0;choice<2**m;choice++)on+=initial^((incident&choice).toString(2).split('1').length-1)%2;assert.equal(on/2**m,.5);}
 assert.equal(choose(2,1)-choose(2,2),1);assert.equal((2/3)**2*(1/3),4/27); // independent first hit at t=3
 const constantSignHitAtThree=0;assert.notEqual(constantSignHitAtThree,4/27);
});

test('Task 7 digit-deletion induction, affine recurrence and noncrossing recurrence verify on finite instances',()=>{
 for(let n=1;n<=2000;n++){const next=n%10<=5?Math.floor(n/10):Math.floor(9*n/10);assert.ok(next<n);if(n%10>5)assert.ok(9*n%10<=5);let x=n,steps=0;while(x>0){x=x%10>5?9*x:Math.floor(x/10);assert.ok(++steps<1000,n);} }
 let a=1;for(let n=0;n<=12;n++){assert.equal(a,2*3**n-1);a=3*a+2;}
 const c=[1];for(let n=1;n<=7;n++)c[n]=Array.from({length:n},(_,k)=>c[k]*c[n-1-k]).reduce((a,b)=>a+b,0);assert.deepEqual(c.slice(0,5),[1,1,2,5,14]);
 function matchings(v){if(!v.length)return [[]];return v.slice(1).flatMap((b,j)=>matchings(v.filter((_,i)=>i!==0&&i!==j+1)).map(rest=>[[v[0],b],...rest]));}
 for(let n=1;n<=5;n++){const valid=matchings(Array.from({length:2*n},(_,i)=>i)).filter(es=>es.every(([a,b],i)=>es.every(([c,d],j)=>i===j||!(a<c&&c<b&&b<d)&&!(c<a&&a<d&&d<b))));assert.equal(valid.length,c[n]);}
 const comparisons=n=>{let count=0;const a=Array.from({length:n},(_,i)=>i);for(let i=1;i<n;i++)for(let j=0;j<i;j++){count++;assert.notEqual(a[i],a[j]);}return count;};for(let n=0;n<=30;n++)assert.equal(comparisons(n),n<2?0:n*(n-1)/2);
});

// These checkpoints name each actual result, intermediate calculation, and proof mechanism.
// The historical obligations below are translated in english-answer-checkpoints.json.
// Check authored reasoning, excluding the official quotation.
const chineseCheckpoints = {
  "Q-2023S-MID-P01-a-1": [
    "\\neg r\\lor\\neg f",
    "s\\land l",
    "前件为假"
  ],
  "Q-2023S-MID-P01-a-2": [
    "s\\to t",
    "唯一的否定情形",
    "颁奖而没有比赛"
  ],
  "Q-2023S-MID-P01-a-3": [
    "\\neg t",
    "t$ 的真值为假",
    "额外的推理步骤"
  ],
  "Q-2023S-MID-P01-a-proof": [
    "\\neg(s\\land l)",
    "\\neg(\\neg r\\lor\\neg f)",
    "⑨ $r$"
  ],
  "Q-2023S-MID-P02-a": [
    "(x-y)^2\\ge0",
    "x^2+y^2\\ge2xy",
    "当且仅当 $x=y$"
  ],
  "Q-2023S-MID-P02-b": [
    "\\forall x\\exists y(x<y^2)",
    "\\sqrt{|x|+1}",
    "y^2=|x|+1>x"
  ],
  "Q-2023S-MID-P02-c": [
    "\\neg\\exists x",
    "De Morgan",
    "x\\le0\\lor\\neg P(x)"
  ],
  "Q-2023S-MID-P02-d": [
    "P(1)$ 真",
    "P(0)$ 假",
    "分别是假、真"
  ],
  "Q-2023S-MID-P03-1": [
    "a+b",
    "最终必定列到",
    "所以集合无限可数"
  ],
  "Q-2023S-MID-P03-2": [
    "D=\\{n:n\\notin A_n\\}",
    "至少在元素 $k$",
    "与“完整列出全部子集”矛盾"
  ],
  "Q-2023S-MID-P03-3": [
    "f\\mapsto(f(0),f(1))",
    "bijection",
    "函数集合无限可数"
  ],
  "Q-2023S-MID-P03-4": [
    "A_f=\\{n:f(n)=1\\}",
    "g(n)=1-f_n(n)",
    "与完整枚举矛盾"
  ],
  "Q-2023S-MID-P03-5": [
    "\\{1,2\\}",
    "g(n)=3-f_n(n)",
    "每个子集都至多可数"
  ],
  "Q-2023S-MID-P04": [
    "y^2\\equiv1\\pmod8",
    "2x^2\\equiv7+5\\equiv4",
    "两种情况穷尽所有整数"
  ],
  "Q-2023S-MID-P05": [
    "x=37+231k",
    "1192\\equiv37",
    "3\\cdot37=111"
  ],
  "Q-2023S-MID-P06": [
    "2^n(2^{m-n}-1)",
    "\\gcd(2^n,2^n-1)=1",
    "(5,0)"
  ],
  "Q-2023S-MID-P07-a": [
    "1260=54\\cdot23+18",
    "9\\cdot1260-493\\cdot23",
    "17641=14\\cdot1260+1"
  ],
  "Q-2023S-MID-P07-b": [
    "512+128+64+32+16+8+4+2+1",
    "219,-27,729,907,188,686",
    "16\\cdot560\\cdot128\\equiv500"
  ],
  "Q-2023S-MID-P08-a": [
    "n^{-0.1}+100n^{-1}",
    "小于任何这样的 $c$",
    "没有 $\\Theta$"
  ],
  "Q-2023S-MID-P08-b": [
    "2^{-n}",
    "2^{-n}<c",
    "排除 $\\Omega$"
  ],
  "Q-2023S-MID-P08-c": [
    "\\frac{\\log_bn}{\\log_b5}",
    "有限正常数",
    "因此题目要求的所有适用关系"
  ],
  "Q-2023S-MID-P08-e": [
    "A/B\\to\\infty",
    "A=\\Omega(B)",
    "任何拟定的有限上界常数"
  ],
  "Q-2023F-MID-P01-a": [
    "(\\neg p\\lor r)\\lor(\\neg q\\lor r)",
    "\\neg(p\\land q)\\lor r",
    "(p\\land q)\\to r"
  ],
  "Q-2023F-MID-P01-b": [
    "⑤ $p$",
    "⑥ $q\\to r$",
    "⑧ $\\neg r\\to\\neg t$"
  ],
  "Q-2023F-MID-P01-c": [
    "p=F,q=T,r=F,s=F",
    "T\\to T=T",
    "T\\to F=F"
  ],
  "Q-2023F-MID-P02-a": [
    "\\forall x(P(x)\\land\\neg\\forall y",
    "\\exists y\\neg",
    "\\neg R(y)\\land\\neg S(y)"
  ],
  "Q-2023F-MID-P02-b": [
    "\\forall c\\exists x\\exists y(c=ax+by)",
    "biconditional",
    "系数可依赖 $a,b,c$"
  ],
  "Q-2023F-MID-P03-a": [
    "S\\ne\\varnothing",
    "x\\in T",
    "x\\in S\\cap T"
  ],
  "Q-2023F-MID-P03-b-ii": [
    "官方分类一致",
    "f\\mapsto(f(1),f(2))",
    "故是无限可数"
  ],
  "Q-2023F-MID-P03-b-iii": [
    "官方分类一致",
    "g(n)=3-f_n(n)",
    "与完整枚举矛盾"
  ],
  "Q-2023F-MID-P03-c": [
    "\\mathbb Z^{d+1}",
    "至多有 $d$ 个",
    "x-k"
  ],
  "Q-2023F-MID-P04-a": [
    "C=(3,3)",
    "20\\cdot15=300",
    "792-300=492"
  ],
  "Q-2023F-MID-P04-b": [
    "\\binom42=6",
    "2^4=16",
    "不可能同时属于两条不同路径"
  ],
  "Q-2023F-MID-P04-c": [
    "数量分别为一、一、四",
    "第三行",
    "6(1\\cdot1+1\\cdot6+4\\cdot2)=90"
  ],
  "Q-2023F-MID-P04-d": [
    "九个边长一",
    "顶点仅有一个",
    "距离只能严格小于一"
  ],
  "Q-2023F-MID-P05": [
    "固定 $i$ 时相乘",
    "互斥且覆盖全部选择",
    "\\binom n{n-i}=\\binom ni"
  ],
  "Q-2023F-MID-P06": [
    "A:a\\ge5",
    "三重交集为空",
    "105-45-36-28+6+3+1-0=6"
  ],
  "Q-2023F-MID-P08": [
    "0.7\\cdot0.9=0.63",
    "0.3\\cdot0.2=0.06",
    "\\frac{21}{23}"
  ],
  "Q-2023F-MID-P09-a-expectation": [
    "(-1)\\cdot(1/3)",
    "=1/3",
    "完全不需要假设"
  ],
  "Q-2023F-MID-P09-a-variance": [
    "E(X^2)=1^2",
    "1-1/9=8/9",
    "\\frac8{27}+\\frac{16}{27}"
  ],
  "Q-2023F-MID-P09-b-expectation": [
    "Y=-2",
    "=-2/3",
    "E(X)-1=-2/3"
  ],
  "Q-2023F-MID-P09-b-variance": [
    "E(Y^2)",
    "4/3-4/9=8/9",
    "(X-1)-E(X-1)=X-E(X)"
  ],
  "Q-2023F-MID-P09-c": [
    "(-1)(-2)=2",
    "E(Z)=1-1/3=2/3",
    "并没有 independence"
  ],
  "Q-2023F-MID-P09-d-i": [
    "\\{T=2k\\}",
    "概率只能为零",
    "不使用不同步之间 independent"
  ],
  "Q-2023F-FINAL-P01-a-i": [
    "x=6,a=2,b=3",
    "T\\to F",
    "没有被限制为 prime"
  ],
  "Q-2023F-FINAL-P01-a-ii": [
    "ux+va=1",
    "uxb+vab=b",
    "x\\mid b"
  ],
  "Q-2023F-FINAL-P01-a-iii": [
    "x=1,a=b=1",
    "P(1)=F",
    "T\\to F=F"
  ],
  "Q-2023F-FINAL-P01-b": [
    "Q(a,p)",
    "E(a^{p-1},1,p)",
    "两个必要假设"
  ],
  "Q-2023F-FINAL-P02-b": [
    "进位一",
    "\\{0,2,4\\}",
    "2\\cdot3\\cdot3\\cdot3=54"
  ],
  "Q-2023F-FINAL-P03": [
    "0.0002",
    "0.99970012",
    "49\\,985\\,001/49\\,985\\,006"
  ],
  "Q-2023F-FINAL-P04-d": [
    "2^m",
    "一一配对",
    "K=-Y",
    "Y\\ge n/2"
  ],
  "Q-2023F-FINAL-P05-a": [
    "288=12\\cdot23+12",
    "2\\cdot288-25\\cdot23",
    "6049=21\\cdot288+1"
  ],
  "Q-2023F-FINAL-P05-b": [
    "18^2=324",
    "23=16+4+2+1",
    "1\\cdot1\\cdot1\\cdot18"
  ],
  "Q-2023F-FINAL-P06-a": [
    "模三只有三个余数类",
    "两个偶因子",
    "乘积为零仍被十二整除"
  ],
  "Q-2023F-FINAL-P06-b": [
    "2023=3\\cdot674+1",
    "(-1)^{674}\\cdot3=3",
    "标准余数范围"
  ],
  "Q-2023F-FINAL-P07": [
    "4k\\equiv2\\pmod6",
    "k=2+3t",
    "x=27+30t"
  ],
  "Q-2023F-FINAL-P08-a": [
    "Base cases",
    "induction hypothesis",
    "\\lfloor9N/10\\rfloor<N",
    "归纳步成立"
  ],
  "Q-2023F-FINAL-P08-b": [
    "b_n=3a_{n-1}+3",
    "b_0=a_0+1=2",
    "3(2\\cdot3^{n-1}-1)+2"
  ],
  "Q-2023F-FINAL-P09-a": [
    "p_2,p_3,p_4",
    "三是奇数",
    "违反 noncrossing 条件"
  ],
  "Q-2023F-FINAL-P09-b": [
    "j-2",
    "2n-j",
    "相邻两人配成对"
  ],
  "Q-2023F-FINAL-P09-c": [
    "a_{j-2}a_{2n-j}",
    "奇数 $j$ 时为零",
    "bijection"
  ],
  "Q-2023F-FINAL-P09-d": [
    "\\sum_{k=1}^{n}a_{2k-2}a_{2n-2k}",
    "a_0=1",
    "a_6=2+1+2=5"
  ],
  "Q-2023F-FINAL-P10": [
    "\\sum_{i=2}^n(i-1)",
    "真实可达到的二次下界",
    "同一表达式也给出比较数上界"
  ],
};
function englishWorkedBlock(t) { return workedSolution(t); }
function englishWorkedErrors(id,t) {
 try { checkWorkedProof(t, translatedCheckpoints(id,chineseCheckpoints[id]), id); return []; }
 catch(error) { return [error.message]; }
}
test('Task 7 all admitted English worked solutions retain their item-specific result, steps and proof checkpoints',()=>{
 assert.deepEqual(Object.keys(chineseCheckpoints).sort(),admitted.map(r=>r.id).sort());
 const distinct=new Set();
 for(const r of admitted){const t=read(r.id),z=englishWorkedBlock(t);assert.deepEqual(englishWorkedErrors(r.id,t),[],r.id);assert.ok(!distinct.has(z),r.id);distinct.add(z);assert.ok(z.includes('**Answer.**'),r.id);}
});
test('Task 7 an approach-only English paragraph or a missing mathematical checkpoint cannot pass',()=>{
 for(const r of admitted){
  const t=read(r.id),z=englishWorkedBlock(t),approach='Identify the relevant definitions, substitute the assumptions, and check the result.';
  // Even with plausible headings and two numbered lines, duplicating the approach is not a worked answer.
  const shallow=t.replace(section(t,'Supplementary Explanation'),()=>'**Answer.** See the answer.\n\n**Derivation/proof.**\n\n1. '+approach+'\n2. '+approach);
  assert.ok(englishWorkedErrors(r.id,shallow).length>0,r.id);
  for(const checkpoint of translatedCheckpoints(r.id,chineseCheckpoints[r.id])){
   const dropped=t.replace(section(t,'Supplementary Explanation'),()=>''+z.replaceAll(checkpoint,'[omitted]'));
   assert.ok(englishWorkedErrors(r.id,dropped).some(e=>e.includes(checkpoint)),r.id+': '+checkpoint);
  }
 }
});
test('Task 7 function classifications match the high-resolution official C,C,U key',()=>{
 for(const [suffix,result] of [['ii','C'],['iii','U']]){
  const id='Q-2023F-MID-P03-b-'+suffix,r=byId.get(id),t=read(id);
  assert.equal(r.answer_source,'official');assert.deepEqual(props(id).solution_page,[7]);assert.equal(r.source_correction,undefined);
  assert.match(section(t,'Source'),/complete printed key.*C, C, U/);assert.match(r.verification.transcription,/scale-to3200/);
  assert.ok(section(t,'Official Answer'));
  assert.ok(!t.includes('derived correction'));assert.ok(!t.includes('C, U, C'));assert.ok(section(t,'Supplementary Explanation').includes('**Answer.** '+result));
 }
});
test('Task 7 Spring function-domain prompts preserve rendered natural-number symbols and visible set braces',()=>{
 const expected={
  '3':String.raw`3. The set of all functions from $\{0,1\}$ to $\mathbb N$`,
  '4':String.raw`4. The set of all functions from $\mathbb N$ to $\{0,1\}$`,
  '5':String.raw`5. The set of all functions from $\mathbb N$ to $\mathbb N$`
 };
 for(const [suffix,prompt]of Object.entries(expected)){
  const q=section(read('Q-2023S-MID-P03-'+suffix),'Question');assert.equal(q.split('\n\n')[0],prompt);
  assert.ok(!q.includes('$mathbb N$'));assert.ok(!q.includes('1$'));
 }
});
