import assert from 'node:assert/strict';
import {readFileSync,readdirSync,existsSync,statSync} from 'node:fs';
import {basename,join} from 'node:path';
import {createHash} from 'node:crypto';
import test from 'node:test';
import {parseFrontmatter} from '../knowledge-base/schema.mjs';

// Fixed source evidence: all 43 PDF pages, including both separately numbered
// Final parts, were rendered and inspected. These assertions intentionally
// ignore later sources, so future corpus batches do not change this contract.
const evidence={
 '2020-MID':['2020-midterm','2020 Midterm',23,23,0,'P01-a P01-b P01-c P01-d P02 P03-a P03-b P03-c P03-d P03-e P03-f P04 P05-a P05-b P05-c P05-d P05-e P06 P07 P08 P09 P10 BONUS'],
 '2020-FINAL1':['2020-final-part-1','2020 Final Part 1',16,16,0,'P01-a-i P01-a-ii P01-a-iii P01-b P01-c P02 P03-a P03-b P04-a P04-b P04-c P05-a-formula P05-a-proof P05-b P06-a P06-b'],
 '2020-FINAL2':['2020-final-part-2','2020 Final Part 2',27,20,7,'P01 P02 P03 P04-a-decision P04-a-insert P04-b P04-c-decision P04-c-insert P04-d-decision P04-d-insert P05-a P05-b-expectation P05-b-variance P05-c P05-d P06-a P06-b P06-c P06-d P06-e BONUS-a-fair BONUS-a-advantage BONUS-b-player1 BONUS-b-player2 BONUS-c-player1 BONUS-c-player2 BONUS-c-player3'],
 '2021-MID':['2021-midterm','2021 Midterm',25,24,1,'P01-a P01-b P01-c P01-d P01-e P02-translation-course P02-translation-gcd P02-translation-rule P02-translation-conclusion P02-proof P03 P04-a P04-b P05 P06-a P06-b P07 P08-a P08-b P08-c P08-d P08-e P09-A P09-B BONUS'],
 '2021-FINAL1':['2021-final-part-1','2021 Final Part 1',9,9,0,'P01 P02 P03 P04-a P04-b P04-c P04-d P05 P06'],
 '2021-FINAL2':['2021-final-part-2','2021 Final Part 2',13,8,5,'P01 P02 P03-a P03-b P03-c P04-a P04-b P05-a P05-b P05-c P05-d BONUS-a BONUS-b'],
 '2022-MID':['2022-midterm','2022 Midterm',33,33,0,'P01-a-i P01-a-ii P01-a-iii P01-b P02-a P02-b P02-c P03-1 P03-2 P03-3 P03-4 P03-proof P04-a P04-b P04-c P05-a P05-b P05-c P05-d P06-a P06-b P06-c P07-a P07-b P08-a P08-b P09 P10-a-best P10-a-worst P10-b-best P10-b-worst P10-c-best P10-c-worst'],
 '2022-FINAL1':['2022-final-part-1','2022 Final Part 1',13,6,7,'P01-a P01-b P01-c P01-d P02 P03-a P03-b P03-c P03-d P04 P05-a P05-b P05-c'],
 '2022-FINAL2':['2022-final-part-2','2022 Final Part 2',20,12,8,'P01 P02-a-23 P02-a-35 P02-b P02-c-34 P02-c-35 P02-d P02-e P03 P04-a P04-b P04-c P05-a-i P05-a-ii P05-b P05-c P06-a-expectation P06-a-variance P06-b P06-c']
};
const sources=new Set(Object.values(evidence).map(e=>`knowledge_base/past_paper/${e[0]}.pdf`));
const rows=JSON.parse(readFileSync('knowledge_base/06-Audit/question-audit.json','utf8')).questions.filter(r=>sources.has(r.source_pdf));
const byId=new Map(rows.map(r=>[r.id,r]));
const read=id=>readFileSync(byId.get(id).note_path,'utf8');
const props=id=>parseFrontmatter(read(id)).properties;
const admitted=rows.filter(r=>r.note_path);
const section=(s,h)=>s.match(new RegExp(`## ${h}\\n\\n([\\s\\S]*?)(?=\\n## |$)`))?.[1]?.trim()??'';
const noControls=/[\u0000-\u0008\u000B-\u001F]/;
const noGeneric=/\(cid:\d+\)|Exact English source-page transcription|Official result and derivation are on the embedded|从题设识别出|先写出定义或样本空间；再代入题中给出的限制|Directly identifies the required object in|Requires a short, source-specific chain for|Requires a complete multi-step derivation or proof for|\bTODO\b|\bTBD\b/;

test('Task 6 has fixed source-specific atomic order, printed labels and reconciled Paper indexes',()=>{
 for(const [code,[source,title,count,accepted,unresolved,order]] of Object.entries(evidence)){
  const items=rows.filter(r=>r.source_pdf===`knowledge_base/past_paper/${source}.pdf`);
  assert.deepEqual(items.map(r=>r.id),order.split(' ').map(x=>`Q-${code}-${x}`));
  assert.deepEqual([items.length,items.filter(r=>r.note_path).length,items.filter(r=>r.status==='needs-review').length],[count,accepted,unresolved]);
  const paper=readFileSync(`knowledge_base/03-Papers/${title}.md`,'utf8'),p=parseFrontmatter(paper).properties;
  assert.deepEqual([p.identified_count,p.admitted_count,p.excluded_count,p.unresolved_count],[count,accepted,0,unresolved]);
  assert.equal(p.term,'spring');assert.equal(p.source_pdf,`knowledge_base/past_paper/${source}.pdf`);
  const links=[...paper.matchAll(/\[\[(Q-202[012]-[^\]|]+)\]\]/g)].map(m=>m[1]);
  assert.deepEqual(links,items.filter(r=>r.note_path).map(r=>basename(r.note_path,'.md')));
  for(const r of items){const suffix=r.id.slice(code.length+3),[n,part,roman]=suffix.split('-');let label;
   if(n==='BONUS')label=(code==='2020-MID'?'Bonus Problem':'Bonus')+(['a','b','c'].includes(part)?`(${part})`:'');
   else label=String(Number(n.slice(1)))+(/^[a-z]$|^[1-4]$/.test(part??'')?`(${part})`:'')+(['i','ii','iii'].includes(roman)?`(${roman})`:'');
   assert.equal(r.question_number,label,r.id);if(r.note_path)assert.equal(props(r.id).question_number,label);
  }
 }
});

// Each group fixes atomic suffixes, PDF question page, solution pages, marks.
// A dash means the PDF allocated only a combined total or no atomic total.
const metadata={
 '2020-MID':[
 'P01-a P01-b P01-c P01-d|1|1|- - - -','P02|1|2|10','P03-a P03-b P03-c P03-d P03-e P03-f|2|2|- - - - - -','P04|2|3|10','P05-a P05-b P05-c P05-d P05-e|3|3|- - - - -','P06|3|3,4|10','P07 P08|4|4|10 10','P09|4|5|10','P10 BONUS|5|5|10 10'],
 '2020-FINAL1':[
 'P01-a-i P01-a-ii P01-a-iii P01-b P01-c|1|1|- - - 2 2','P02|1|1,2|8','P03-a P03-b|2|2|2 3','P04-a P04-b P04-c|3|3|3 4 7','P05-a-formula P05-a-proof P05-b|3|4|- - 5','P06-a P06-b|5|5|2 4'],
 '2020-FINAL2':[
 'P01|1|1,2|8','P02 P03|2|2|5 5','P04-a-decision P04-a-insert P04-b P04-c-decision P04-c-insert P04-d-decision P04-d-insert|3|3|- - 2 - - - -','P05-a P05-b-expectation P05-b-variance P05-c|3|4|2 - - 2','P05-d|4|4|3','P06-a|4|4,5|2','P06-b P06-c P06-d P06-e|4|5|1 1 1 5','BONUS-a-fair BONUS-a-advantage|5|6|- -','BONUS-b-player1 BONUS-b-player2 BONUS-c-player1 BONUS-c-player2 BONUS-c-player3|6|6|- - - - -'],
 '2021-MID':[
 'P01-a P01-b P01-c P01-d|1|1|3 3 3 3','P02-translation-course P02-translation-gcd P02-translation-rule P02-translation-conclusion|1|1|- - - -','P02-proof|1|2|-','P03 P04-a P04-b P05|2|2|10 6 2 10','P06-a P06-b P07|3|3|4 8 10','P08-a P08-b P08-c P08-d P08-e|3|4|3 3 3 3 3','P09-A P09-B|4|4|4 4','BONUS|4|4,5|10'],
 '2021-FINAL1':[
 'P01|1|1|10','P02|1|2|10','P03|2|2,3|10','P04-a P04-b P04-c P04-d P05|3|3|2 2 2 2 6','P06|3|4|10'],
 '2021-FINAL2':[
 'P01|1|1|10','P02|1|1,2|10','P03-a P03-b P03-c|2|2|2 3 3','P04-a P04-b|3|3|5 5','P05-a P05-b P05-c|3|4|2 2 2','P05-d|4|4|2','BONUS-a|4|4|2','BONUS-b|4|5|8'],
 '2022-MID':[
 'P01-a-i P01-a-ii P01-a-iii P01-b P02-a P02-b P02-c|1|1|- - - 3 - - -','P03-1|1|2|-','P03-2 P03-3 P03-4 P03-proof P04-a P04-b P04-c P05-a P05-b|2|2|- - - - - - - - -','P05-c P05-d|2|3|- -','P06-a P06-b P06-c P07-a P07-b P08-a|3|3|8 10 10 5 5 5','P08-b|3|4|8','P09|4|4|6','P10-a-best P10-a-worst P10-b-best P10-b-worst P10-c-best P10-c-worst|4|5|- - - - - -'],
 '2022-FINAL1':[
 'P01-a P01-b P01-c P01-d|1|1|3 3 4 -','P02 P03-a P03-b|2|2|8 2 2','P03-c P03-d|2|3|3 3','P04|3|3|8','P05-a|3|3,4|3','P05-b P05-c|3|4|3 6'],
 '2022-FINAL2':[
 'P02-a-23 P02-a-35 P02-b P02-c-34 P02-c-35 P02-d P02-e P03|2|2|- - 2 - - 2 2 6','P04-a P04-b P04-c P05-a-i P05-a-ii P05-b P05-c|3|3|2 2 2 - - 2 2','P06-a-expectation P06-a-variance P06-b|3|4|- - 4','P06-c|4|4|4']
};
test('Task 6 every source page, solution continuation and atomic mark matches printed evidence',()=>{
 const checked=[];
 for(const [code,groups] of Object.entries(metadata))for(const group of groups){const [ids,page,sol,marks]=group.split('|'),ms=marks.split(' ');assert.equal(ids.split(' ').length,ms.length);
  ids.split(' ').forEach((suffix,i)=>{const id=`Q-${code}-${suffix}`,r=byId.get(id);assert.equal(r.source_page,+page,id);if(!r.note_path){assert.equal(r.status,'needs-review');assert.ok(r.verification?.solution);return;}const p=props(id);checked.push(id);assert.equal(p.source_page,+page,id);assert.deepEqual(p.solution_page,sol.split(',').map(Number),id);assert.equal(p.marks,ms[i]==='-'?undefined:+ms[i],id);});
 }
 assert.deepEqual(checked.sort(),admitted.map(r=>r.id).sort());
});

test('Task 6 explicit quarantine and answer provenance sets cannot silently change',()=>{
 const quarantined=['Q-2021-MID-P01-e','Q-2022-FINAL2-P01',...['a-fair','a-advantage','b-player1','b-player2','c-player1','c-player2','c-player3'].map(s=>'Q-2020-FINAL2-BONUS-'+s),...['P03-a','P03-b','P03-c','P04-a','P04-b'].map(s=>'Q-2021-FINAL2-'+s),...['P01-a','P01-b','P01-c','P01-d','P05-a','P05-b','P05-c'].map(s=>'Q-2022-FINAL1-'+s),...['P02-c-34','P02-c-35','P02-d','P02-e','P04-a','P04-b','P04-c'].map(s=>'Q-2022-FINAL2-'+s)];
 assert.deepEqual(rows.filter(r=>r.status==='needs-review').map(r=>r.id).sort(),quarantined.sort());
 for(const [id,reason,page] of [['Q-2021-MID-P01-e',/y=0.*undefined/s,1],['Q-2022-FINAL2-P01',/parallel edges.*simple/s,1]]){const r=byId.get(id);assert.equal(r.note_path,null);assert.equal(r.source_page,page);assert.match(r.exclusion_reason,reason);assert.ok(!readdirSync('knowledge_base/04-Questions').some(f=>f.startsWith(id+' - ')));}
 const derived=['Q-2021-MID-BONUS','Q-2021-FINAL1-P05'];
 assert.deepEqual(admitted.filter(r=>props(r.id).answer_source==='derived').map(r=>r.id).sort(),derived.sort());
 for(const r of admitted){const p=props(r.id);assert.equal(p.answer_source,derived.includes(r.id)?'derived':'official');assert.match(section(read(r.id),'Detailed Solution'),/Provenance: (?:published official|independently derived)/);}
 assert.match(read('Q-2021-MID-BONUS'),/outside \(0,1\).*1\/2/s);
 assert.match(read('Q-2021-FINAL1-P05'),/Soundness:.*Completeness:/s);
 assert.equal(rows.filter(r=>r.status==='out-of-scope').length,0);
 assert.equal(rows.length,Object.values(evidence).reduce((n,e)=>n+e[2],0));assert.equal(admitted.length,Object.values(evidence).reduce((n,e)=>n+e[3],0));
 assert.equal(admitted.filter(r=>props(r.id).answer_source==='official').length,admitted.length-derived.length);
});

test('Task 6 prompts, independent solutions, Chinese reasoning and difficulties are substantive',()=>{
 const bases=new Set(),works=new Set(),difficulties=new Set(),types=new Set();
 for(const r of admitted){const text=read(r.id),p=props(r.id);assert.ok(!noControls.test(text),r.id);assert.ok(!noGeneric.test(text),r.id);assert.equal(p.term,'spring');assert.equal(p.verification_status,'verified');
  assert.ok(section(text,'Question').length>5,r.id);const zh=section(text,'中文解析'),work=section(text,'Detailed Solution');assert.ok((zh.match(/[\u3400-\u9fff]/g)??[]).length>=40,r.id);assert.ok(work.length>=280,r.id);assert.match(work,/\*\*Answer\.\*\* /);assert.match(work,/\*\*Derivation\/proof\.\*\* /);assert.ok(!works.has(work),r.id);works.add(work);
  assert.ok(p.difficulty_basis.length>=30,r.id);assert.ok(!bases.has(p.difficulty_basis),r.id);bases.add(p.difficulty_basis);difficulties.add(p.difficulty);p.question_types.forEach(t=>types.add(t));assert.equal((section(text,'Common Mistakes').match(/^- /gm)??[]).length,2,r.id);
  const headers=[...text.matchAll(/^## (.+)$/gm)].map(m=>m[1]);assert.deepEqual(headers,['Source','Question','中文解析','Detailed Solution','Common Mistakes','Connections']);assert.ok(text.includes(`![[${p.source_pdf}#page=${p.source_page}]]`));
 }
 assert.deepEqual([...difficulties].sort(),[1,2,3,4]);assert.ok(types.has('proof')&&types.has('construction')&&types.has('algorithm-analysis'));
 // The only source-scoped modeling atom (2021 Final2 P04-b) is now quarantined for unspecified question weights.
 assert.equal(byId.get('Q-2021-FINAL2-P04-b').status,'needs-review');
});

test('Task 6 source-sensitive formulas, answer boundaries and semantic types remain intact',()=>{
 const includes=(id,fragment)=>assert.ok(read(id).includes(fragment),`${id}: ${fragment}`);
 includes('Q-2020-FINAL2-P03',String.raw`p(B\mid A\cup\overline B)`);includes('Q-2020-FINAL2-P03','$5/9$');
 includes('Q-2022-MID-P07-b',String.raw`3^{3^{2022}}`);includes('Q-2022-MID-P09',String.raw`\sqrt{2n}`);includes('Q-2022-MID-P09',String.raw`\log(2^n)`);
 includes('Q-2020-FINAL1-P05-a-formula',String.raw`(-1)^n n!x^{-(n+1)}`);includes('Q-2021-FINAL1-P06','(6^n+2^n)/2');
 assert.match(byId.get('Q-2022-FINAL1-P01-d').verification.solution,/C\(2n,n−1\)[\s\S]*Every path ending−2 first reaches−1/);
 includes('Q-2021-MID-P06-a','93473');includes('Q-2021-MID-P06-b','71341');includes('Q-2022-MID-P08-a','$122$');includes('Q-2022-MID-P08-b','$41$');
 includes('Q-2021-FINAL1-P04-a','Only $n=0$');includes('Q-2021-FINAL1-P04-c','Only $n=1$');
 for(const [id,expected] of [['Q-2020-FINAL2-P04-a-insert',['construction']],['Q-2022-MID-P03-proof',['proof']],['Q-2022-MID-P10-c-worst',['algorithm-analysis']],['Q-2022-FINAL2-P05-c',['counterexample','classification']]])assert.deepEqual(props(id).question_types,expected);
});

test('Task 6 solution-driven mappings and real cross-part contrasts are preserved',()=>{
 const required={
  'Q-2021-MID-P05':['Cryptography','GCDs and Congruences','Modular Arithmetic'],
  'Q-2020-FINAL1-P01-a-ii':['Predicate Logic','Graphs'],
  'Q-2020-FINAL1-P02':['Induction','Modular Arithmetic'],
  'Q-2020-FINAL2-P05-b-variance':['Random Variables','Graphs','Permutations and Combinations'],
  'Q-2021-FINAL2-BONUS-b':['Random Variables','Graphs','Recursion'],
  'Q-2021-FINAL2-P01':['Recursion','Binomial Coefficients','Basic Counting'],
 };
 for(const [id,expected] of Object.entries(required)){const p=props(id);for(const label of expected)assert.ok(p.subtopics.some(x=>x.startsWith('[[Subtopic - '+label+' - ')),`${id}: ${label}`);assert.deepEqual(byId.get(id).syllabus_evidence,p.subtopics.map(x=>x.slice(2,-2)));}
 for(const id of ['Q-2020-MID-P05-d','Q-2020-MID-P05-e'])assert.ok(props(id).methods.every(x=>!x.includes('Function Counting Method')),'Infinite-valued function cardinality must not use the finite function-counting recipe');
 for(const [a,b] of [['Q-2021-FINAL1-P06','Q-2021-FINAL2-P01'],['Q-2020-FINAL2-P05-d','Q-2022-FINAL2-P06-c']])for(const [x,y] of [[a,b],[b,a]])assert.ok(props(x).related_questions.some(link=>link.startsWith('[['+y+' - ')));
});

const fact=n=>{let z=1;for(let i=2;i<=n;i++)z*=i;return z;};
const choose=(n,k)=>k<0||k>n?0:fact(n)/(fact(k)*fact(n-k));
const pow=(a,n,m)=>{a=BigInt(a);n=BigInt(n);m=BigInt(m);let z=1n;while(n){if(n&1n)z=z*a%m;a=a*a%m;n>>=1n;}return Number(z);};
test('Task 6 modular answers and overwritten CRT suffix recompute independently',()=>{
 assert.equal(53*17%180,1);assert.equal((10*18+4)%23,0);assert.equal(pow(3,68,23),9);assert.equal(pow(17,34*41,31),20);assert.equal(121*71341%92820,1);assert.equal(pow(2,542,109),4);assert.equal(pow(3,2022,4),1);assert.equal(pow(12,29,133),122);assert.equal(29*41%108,1);assert.equal((5*9+9*9)%11,5);assert.equal(((3*9-4*9)%11+11)%11,2);
 let suffix='',first;for(let i=1;i<=18448;i++){const digit=i%53===0?'3':i%43===0?'2':i%31===0?'1':'0';suffix=(suffix+digit).slice(-5);if(suffix==='31020'){first=i;break;}}assert.equal(first,18448);
 for(let n=0;n<100;n++){const a=21*n+4,b=14*n+3;assert.equal(3*b-2*a,1);}
});

test('Task 6 counting and reflection results pass finite exhaustive checks',()=>{
 const under1000=Array.from({length:1000},(_,n)=>n);assert.equal(under1000.filter(n=>n%2===0||n%3===0||n%5===0).length,734);assert.equal(under1000.filter(n=>n%2===1&&n%3===2&&n%5===3).length,33);assert.equal(under1000.filter(n=>n%9===0&&!String(n).includes('9')).length,81);
 assert.equal(choose(11,5)-choose(6,3)*choose(5,3),262);assert.equal(choose(26,7)-8*choose(16,7),566280);
 for(let n=1;n<=5;n++){let good=0,balanced=0,minus2=0,div4=0;for(let mask=0;mask<2**(2*n);mask++){let s=0,min=0;for(let i=0;i<2*n;i++){s+=(mask>>i&1)?1:-1;min=Math.min(min,s);}if(s===0){balanced++;if(min>=0)good++;}if(s===-2)minus2++;if(s%4===0)div4++;}assert.equal(balanced,choose(2*n,n));assert.equal(minus2,choose(2*n,n-1));assert.equal(good,balanced-minus2);assert.equal(div4,2**(2*n-1));}
 const digits=[0,2,4,7,8,9];for(let n=0;n<=5;n++){let even=0;for(let code=0;code<6**n;code++){let v=code,s=0;for(let i=0;i<n;i++){s+=digits[v%6];v=Math.floor(v/6);}even+=Number(s%2===0);}assert.equal(even,(6**n+2**n)/2);}
});

test('Task 6 source graph augmentations and four-vertex graph probabilities verify',()=>{
 const parity=edges=>{const d={};for(const [u,v] of edges){d[u]=(d[u]??0)+1;d[v]=(d[v]??0)+1;}return Object.keys(d).filter(v=>d[v]%2).sort();};
 const a='AH HB BF FD DG GC CE EA HI IG FI IE'.split(' ');
 const cube='AB BC CD DA EF FG GH HE AE BH CG DF'.split(' ');
 const d='AB AC AD BD DC DE DF DG EG GF GH GI GJ HJ JI JK'.split(' ');
 assert.deepEqual(parity(a),['E','F','G','H']);assert.deepEqual(parity([...a,'HF','EG']),[]);
 assert.deepEqual(parity(cube),['A','B','C','D','E','F','G','H']);assert.deepEqual(parity([...cube,'AH','BE','DG','CF']),[]);
 assert.deepEqual(parity(d),['A','K']);assert.deepEqual(parity([...d,'AK']),[]);
 assert.deepEqual(parity('GD DA HE EC GF FE DF FH DB BC AB BE'.split(' ')),[]);
 const edges=[[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]];let connected=0,disconnected=0;
 for(let mask=0;mask<64;mask++){const chosen=edges.filter((e,i)=>mask>>i&1);if(chosen.length!==3)continue;const reach=new Set([0]);let changed=true;while(changed){changed=false;for(const [u,v] of chosen)if(reach.has(u)!==reach.has(v)){reach.add(u);reach.add(v);changed=true;}}if(reach.size===4)connected++;else disconnected++;}
 assert.equal(connected,16);assert.equal(disconnected,4);
});

test('Task 6 conditional probabilities, hitting times and recursion invariants recompute',()=>{
 assert.equal(.5/(1-(.6-.5)),5/9);assert.ok(Math.abs((1/3/5)/(1/6)-2/5)<1e-12);
 const [q1,q2,q3]=[5/21,6/21,10/21];assert.ok(Math.abs(q1+q2+q3-1)<1e-12);assert.equal(q1,q3/2);assert.ok(Math.abs(q2-(q1/2+1/6))<1e-12);assert.ok(Math.abs(q3-(q2/2+1/3))<1e-12);
 for(let n=2;n<=15;n++){const h=Array.from({length:n},(_,i)=>(n-1)**2-i*i);assert.equal(h[n-1],0);assert.equal(h[0],1+h[1]);for(let i=1;i<n-1;i++)assert.equal(h[i],1+(h[i-1]+h[i+1])/2);}
 const S=new Set(['0']);for(let length=1;length<=8;length++)for(const w of [...S])for(let i=0;i<=w.length;i++)for(const insert of ['0','01','10']){const next=w.slice(0,i)+insert+w.slice(i);if(next.length<=8)S.add(next);}for(let length=1;length<=8;length++)for(let mask=0;mask<2**length;mask++){const w=mask.toString(2).padStart(length,'0');assert.equal(S.has(w),[...w].filter(c=>c==='0').length>length/2,w);}
});

function walk(dir){return readdirSync(dir).flatMap(name=>{const p=join(dir,name);return statSync(p).isDirectory()?walk(p):[p];});}
test('Task 6 Stems, figures, teaching links and Question bodies have no contamination, dangling links or orphans',()=>{
 const vaultFiles=['knowledge_base/01-Topics','knowledge_base/02-Methods','knowledge_base/03-Papers','knowledge_base/04-Questions','knowledge_base/06-Audit',...(existsSync('knowledge_base/05-Views')?['knowledge_base/05-Views']:[])].flatMap(walk),known=new Set(vaultFiles.map(p=>basename(p,'.md')));
 const scopedStems=walk('knowledge_base/04-Questions/Stems').filter(p=>/STEM-202[012]-/.test(p));const touched=new Set();
 for(const r of admitted){const p=props(r.id);for(const link of [...p.concepts,...p.methods]){const name=link.slice(2,-2);const target=vaultFiles.find(p=>basename(p,'.md')===name);assert.ok(target,name);touched.add(target);}const text=read(r.id);for(const m of text.matchAll(/\[\[([^\]|#]+)(?:[^\]]*)\]\]/g)){const target=m[1];if(target.endsWith('.pdf'))assert.ok(existsSync(target),target);else assert.ok(known.has(basename(target,'.md')),`${r.id}: ${target}`);}}
 for(const p of scopedStems){const text=readFileSync(p,'utf8'),fm=parseFrontmatter(text).properties;assert.ok(sources.has(fm.source_pdf));assert.ok(!noControls.test(text));assert.ok(!noGeneric.test(text));assert.ok(!/^## (?:Answer|Detailed Solution)|\*\*Answer\./m.test(text));assert.ok(admitted.some(r=>read(r.id).includes(`[[${basename(p,'.md')}]]`)),p);for(const m of text.matchAll(/!\[\[([^\]#]+\.png)\]\]/g))assert.ok(existsSync('knowledge_base/04-Questions/Figures/'+m[1]),m[1]);}
 for(const p of touched){const text=readFileSync(p,'utf8');assert.ok(!noControls.test(text),p);assert.ok(!noGeneric.test(text),p);assert.match(text,/[\u3400-\u9fff]/);assert.ok(text.length>250,p);for(const m of text.matchAll(/\[\[([^\]|#]+)(?:[^\]]*)\]\]/g))assert.ok(known.has(basename(m[1],'.md')),`${p}: ${m[1]}`);}
 const disk=walk('knowledge_base/04-Questions').filter(p=>/\/Q-202[012]-/.test(p));assert.deepEqual(disk.sort(),admitted.map(r=>r.note_path).sort());
 const figures=walk('knowledge_base/04-Questions/Figures').filter(p=>/202[012]-/.test(p));assert.equal(figures.length,5);for(const f of figures)assert.ok(scopedStems.some(p=>readFileSync(p,'utf8').includes(`![[${basename(f)}]]`)),f);
});

test('Task 6 all nine immutable source PDF SHA-256 values match the original inventory',()=>{
 const inventory=JSON.parse(readFileSync('knowledge_base/06-Audit/source-inventory.json','utf8')).sources;
 for(const source of sources){const record=inventory.find(r=>r.source_pdf===source);assert.ok(record);assert.equal(createHash('sha256').update(readFileSync(source)).digest('hex'),record.sha256,source);}
});

test('Task 6 fix 1 intended birthday fractions remain accurate in the quarantined audit model',()=>{
 const row=byId.get('Q-2021-FINAL2-P03-c'),en=row.verification.solution;
 assert.equal(row.status,'needs-review');assert.equal(row.note_path,null);
 assert.match(en,/Intended independent-uniform model/);assert.match(en,/shared-U countermodel/);
 assert.ok(en.includes('19/49<1/2'));assert.ok(en.includes('223/343>1/2'));
 for(const [n,num,den] of [[3,19,49],[4,223,343]]){let collisions=0;for(let code=0;code<7**n;code++){let z=code;const weekdays=new Set();for(let i=0;i<n;i++){weekdays.add(z%7);z=Math.floor(z/7);}if(weekdays.size<n)collisions++;}assert.equal(collisions*den,num*7**n);}
 assert.ok(2*19<49);assert.ok(2*223>343);assert.match(en,/monotonicity/);
});

// Manual audit of all 177 atomic prompts plus source-relative references in
// their derivations. Ordinary local pronouns and independently recomputed
// sibling examples do not acquire invented prerequisite edges.
const prerequisites={
 '2020-MID':{'P05-c':'P05-b','P05-d':'P05-b'},
 '2020-FINAL1':{'P01-b':'P01-a-ii','P01-c':'P01-a-iii','P03-b':'P03-a','P05-a-proof':'P05-a-formula','P05-b':'P05-a-formula P05-a-proof','P06-b':'P06-a'},
 '2020-FINAL2':{'P04-a-insert':'P04-a-decision','P04-c-insert':'P04-c-decision','P04-d-insert':'P04-d-decision','P05-d':'P05-c','P06-e':'P06-a P06-b P06-c P06-d'},
 '2021-MID':{'P02-proof':'P02-translation-course P02-translation-gcd P02-translation-rule P02-translation-conclusion','P04-b':'P04-a','P06-b':'P06-a'},
 '2021-FINAL2':{'BONUS-b':'BONUS-a'},
 '2022-MID':{'P03-proof':'P03-1 P03-2 P03-3 P03-4','P06-b':'P06-a','P06-c':'P06-b'},
 '2022-FINAL2':{'P05-b':'P05-a-i','P05-c':'P05-a-ii'}
};
test('Task 6 fix 1 every audited sibling prerequisite is linked with locally sufficient editorial context',()=>{
 const expected=new Set();
 for(const [code,items] of Object.entries(prerequisites))for(const [suffix,parents] of Object.entries(items)){
  const id=`Q-${code}-${suffix}`,text=read(id),src=section(text,'Source'),p=props(id);expected.add(id);
  assert.match(src,/Prerequisite context \(editorial\):/);assert.ok((src.match(/[\u3400-\u9fff]/g)??[]).length>=10,id);
  const actual=[...section(text,'Connections').matchAll(/^- Prerequisite: \[\[([^\]]+)\]\]/gm)].map(m=>m[1]);
  const priorIds=parents.split(' ').map(s=>`Q-${code}-${s}`);
  assert.deepEqual(actual,priorIds.map(prior=>basename(byId.get(prior).note_path,'.md')),id);
  for(const prior of priorIds){const r=byId.get(prior),link=`[[${basename(r.note_path,'.md')}]]`,backlink=`[[${basename(byId.get(id).note_path,'.md')}]]`;assert.equal(r.source_pdf,byId.get(id).source_pdf);assert.ok(rows.indexOf(r)<rows.indexOf(byId.get(id)),`${id}: dependencies must precede the dependent atom`);assert.ok(p.related_questions.includes(link));assert.ok(src.includes(link));assert.ok(props(prior).related_questions.includes(backlink));assert.ok(section(read(prior),'Connections').includes(`- Used by: ${backlink}`));}
  assert.ok(!section(text,'Question').includes('Prerequisite context'),`${id}: do not mix editorial imports into printed wording`);
 }
 assert.equal(expected.size,Object.values(prerequisites).reduce((n,p)=>n+Object.keys(p).length,0));
 assert.deepEqual(admitted.filter(r=>read(r.id).includes('Prerequisite context (editorial):')).map(r=>r.id).sort(),[...expected].sort());
 const exact={
  'Q-2021-MID-P06-b':[String.raw`$[120,130]$`,String.raw`$e\in\{121,127\}$`,'e=121','92820'],
  'Q-2020-FINAL1-P05-a-proof':[String.raw`$f_n(x)=(-1)^n n!x^{-(n+1)}$`,String.raw`$x\ne0$`],
  'Q-2022-MID-P06-c':[String.raw`$4n^2+1$`,String.raw`$p\equiv1\pmod4$`,'product'],
  'Q-2021-FINAL2-BONUS-b':['expected number of steps starting at u until first reaching v','opposite endpoints','not assumed'],
  'Q-2020-FINAL2-P06-e':['$10D_9$','impossible','$8!$','union'],
 };
 for(const [id,fragments] of Object.entries(exact))for(const fragment of fragments)assert.ok(section(read(id),'Source').includes(fragment),`${id}: ${fragment}`);
 for(const r of admitted){const q=section(read(r.id),'Question'),w=section(read(r.id),'Detailed Solution');if(/If \(a\)|Redo \([ab]\)|Use induction to prove its|Satisfying any of the above|Then show a step-by-step|first three statements|answer of \(a\)|part \(a\)/.test(q)||/preceding divisor result|The formula gives/.test(w))assert.ok(expected.has(r.id),r.id);}
});

test('Task 6 fix 1 attacker-chosen units admit the official RSA signature construction',()=>{
 const id='Q-2020-MID-P10',r=byId.get(id),p=props(id),text=read(id);
 assert.equal(r.status,'in-scope');assert.equal(r.exclusion_reason,null);assert.equal(p.answer_source,'official');assert.equal(p.source_page,5);assert.deepEqual(p.solution_page,[5]);assert.equal(p.marks,10);assert.deepEqual(p.question_types,['construction','proof']);
 assert.match(section(text,'Question'),/chosen by the attacker/);assert.ok(section(text,'Source').includes(String.raw`\gcd(r,n)=1`));
 assert.ok(section(text,'Detailed Solution').includes(String.raw`$st\equiv x^d=C\pmod n$`));assert.match(section(text,'中文解析'),/自己选择.*互质.*模 n 的逆元/s);
 assert.deepEqual(r.syllabus_evidence,p.subtopics.map(x=>x.slice(2,-2)));
 const gcd=(a,b)=>{while(b)[a,b]=[b,a%b];return a;};
 for(const [n,e,d,phi] of [[55,3,27,40],[33,3,7,20],[77,7,43,60]]){
  assert.equal(e*d%phi,1);assert.equal(gcd(n-1,n),1);
  for(let r=2;r<n;r++){const inverse=Array.from({length:n},(_,t)=>t).find(t=>r*t%n===1);if(gcd(r,n)!==1){assert.equal(inverse,undefined);continue;}assert.ok(inverse!==undefined);
   for(let x=0;x<n;x++){const y=pow(r,e,n)*x%n,s=pow(y,d,n),forged=s*inverse%n;assert.equal(forged,pow(x,d,n));assert.equal(pow(forged,e,n),x);}
  }
 }
 assert.equal(pow(2,3,55)*7%55,1);assert.equal(pow(1,27,55)*28%55,28);assert.equal(pow(28,3,55),7);
});

test('Task 6 fix 1 official CRT construction proves the stronger consecutive nontrivial-square theorem',()=>{
 const id='Q-2020-MID-BONUS',r=byId.get(id),p=props(id),text=read(id);
 assert.equal(r.status,'in-scope');assert.equal(r.exclusion_reason,null);assert.equal(p.answer_source,'official');assert.equal(p.source_page,5);assert.deepEqual(p.solution_page,[5]);assert.equal(p.marks,10);assert.deepEqual(p.question_types,['proof','construction']);
 assert.match(section(text,'Question'),/15 is not a quasi-square number/);assert.match(section(text,'Source'),/square 1.*inconsistent.*stronger/s);assert.ok(section(text,'Detailed Solution').includes(String.raw`$x\equiv-i\pmod{p_i^2}$`));assert.match(section(text,'中文解析'),/两两互质.*中国剩余定理.*大于一/s);assert.deepEqual(r.syllabus_evidence,p.subtopics.map(x=>x.slice(2,-2)));
 const primes=[2n,3n,5n,7n,11n,13n,17n,19n];let x=0n,M=1n;
 for(let i=1;i<=primes.length;i++){const modulus=primes[i-1]**2n,target=(modulus-BigInt(i)%modulus)%modulus;while(x%modulus!==target)x+=M;M*=modulus;x%=M;for(let j=1;j<=i;j++){assert.equal((x+BigInt(j))%(primes[j-1]**2n),0n);assert.ok(x+BigInt(j)>0n);assert.ok(primes[j-1]**2n>1n);}if(i===3)assert.equal(x,547n);}
 assert.equal(548,4*137);assert.equal(549,9*61);assert.equal(550,25*22);
 const mid=rows.filter(r=>r.source_pdf==='knowledge_base/past_paper/2020-midterm.pdf');assert.equal(mid.length,23);assert.equal(mid.filter(r=>r.status==='in-scope').length,23);assert.equal(mid.filter(r=>r.status==='needs-review').length,0);
});
