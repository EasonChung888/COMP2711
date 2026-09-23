import assert from 'node:assert/strict';
import {existsSync,readFileSync,readdirSync,statSync} from 'node:fs';
import {basename,join} from 'node:path';
import test from 'node:test';
import {parseFrontmatter} from '../knowledge-base/schema.mjs';

// Fixed evidence reconciled against all 90 rendered PDF pages, including
// continuation pages. Scope every assertion to these six sources; later years
// may add arbitrary notes and records without changing these expectations.
const root=process.cwd();
const counts={
 '2017-midterm':[28,27,0,1], '2017-final':[34,29,0,5],
 '2018-midterm':[24,24,0,0], '2018-final':[38,26,0,12],
 '2019-midterm':[31,31,0,0], '2019-final':[40,36,0,4]
};
const order={
 '2017-midterm':'P01-a P01-b P01-c P01-d P02-1 P02-2 P02-3 P02-4 P03-a P03-b P04-a P04-b P05-a P05-b P06-a P06-b P06-c P06-d P07 P08-a P08-b P09-a P09-b P09-c P10-a P10-b P10-c P11',
 '2017-final':'P01 P02 P03-a P03-b P03-c P04-a P04-b-algorithm P04-b-time P04-c P05-a P05-b P06-a P06-b P06-c P06-d P07 P08 P09 P10-a-first P10-a-second P10-b P11-a-T1 P11-a-T2 P11-b P11-c P11-d P12-a P12-b P13-a P13-b P13-c P14-a P14-b P14-c',
 '2018-midterm':'P01-a P01-b P02-a P02-b P02-c P02-d P03-a P03-b P03-c P04-a-contrapositive P04-a-proof P04-b P04-c P05-a P05-b P06-a P06-b P06-c P07-a P07-b P07-c P08-a P08-b P08-c',
 '2018-final':'P01-a P01-b P01-c P01-d P02-a-E1 P02-a-E2 P02-a-E3 P02-b P02-c P03-a P03-b P04-a P04-b P04-c-basis P04-c-edges P05-a P05-b P06-a P06-b P07-1-E1 P07-1-E2 P07-1-conditional P07-2-E1 P07-2-E2 P07-2-conditional P08-a P08-b P08-c P09-a P09-b P10-a P10-b P10-c P10-d P11-a P11-b P12-a P12-b',
 '2019-midterm':'P01-a P01-b P01-c P01-d P02-a P02-b P02-c P02-d P02-e P03-a P03-b P04 P05 P06-a P06-b P07-a P07-b P07-c P08 P09-a P09-b P09-c P10-a P10-b P10-c P10-d P11-a P11-b P11-c P12 BONUS',
 '2019-final':'P01-a P01-b P01-c P01-d P02 P03-a P03-b P04-a P04-b P05 P06-a P06-b P07 P08-a P08-b P08-c P08-d P09-a P09-b P10-a P10-b P10-c P10-d P11-a-W1 P11-a-W3 P11-a-decision P11-b-W1 P11-b-W2 P11-b-decision P11-c P11-d-strategy P11-d-probability P12-a P12-b P12-c P13-a P13-b P13-c BONUS-a BONUS-b'
};
const prefix=paper=>`Q-${paper.slice(0,4)}-${paper.endsWith('midterm')?'MID':'FINAL'}-`;
const sources=new Set(Object.keys(counts).map(p=>`knowledge_base/past_paper/${p}.pdf`));
const records=JSON.parse(readFileSync(join(root,'knowledge_base/06-Audit/question-audit.json'),'utf8')).questions.filter(r=>sources.has(r.source_pdf));
const byId=new Map(records.map(r=>[r.id,r]));
const admitted=records.filter(r=>r.note_path);
const read=id=>readFileSync(join(root,byId.get(id).note_path),'utf8');
const props=id=>parseFrontmatter(read(id)).properties;
const section=(s,h)=>s.match(new RegExp(`## ${h}\\n\\n([\\s\\S]*?)(?=\\n## |$)`))?.[1]?.trim()??'';
const controls=/[\u0000-\u0008\u000B-\u001F]/;
const generic=/\(cid:\d+\)|Exact English source-page transcription|Official result and derivation are on the embedded|从题设识别出|先写出定义或样本空间；再代入题中给出的限制|Directly identifies the required object in|Requires a short, source-specific chain for|Requires a complete multi-step derivation or proof for|\bTODO\b|\bTBD\b|先任选五位/;

test('Task 5 source counts, printed atomic order, labels, and Paper indexes are stable',()=>{
 for(const [paper,expected] of Object.entries(counts)){
  const rows=records.filter(r=>r.source_pdf===`knowledge_base/past_paper/${paper}.pdf`);
  assert.deepEqual([rows.length,...['in-scope','out-of-scope','needs-review'].map(s=>rows.filter(r=>r.status===s).length)],expected,paper);
  assert.deepEqual(rows.map(r=>r.id),order[paper].split(' ').map(s=>prefix(paper)+s));
  const title=paper.slice(0,4)+' '+(paper.endsWith('midterm')?'Midterm':'Final');
  const text=readFileSync(join(root,'knowledge_base/03-Papers',title+'.md'),'utf8'),p=parseFrontmatter(text).properties;
  assert.deepEqual(['identified_count','admitted_count','excluded_count','unresolved_count'].map(k=>p[k]),expected);
  assert.equal(p.term,paper.startsWith('2019')?'spring':'fall');
  const links=[...text.matchAll(/\[\[(?:knowledge_base\/04-Questions\/)?(Q-201[789]-[^\]|]+)(?:\|[^\]]*)?\]\]/g)].map(m=>m[1]);
  assert.deepEqual(links,rows.filter(r=>r.note_path).map(r=>basename(r.note_path,'.md')));
  for(const r of rows){
   const suffix=r.id.slice(prefix(paper).length);
   const parts=suffix.split('-');
   const label=parts[0]==='BONUS'?'Bonus Problem'+(parts[1]?`(${parts[1]})`:''):Number(parts[0].slice(1))+(parts[1]?`(${parts[1]})`:'');
   assert.equal(r.question_number,String(label),r.id);
  }
 }
});

// Each line: atomic suffixes | PDF question page | answer/marking pages |
// published marks per atom. A dash means no separately allocated atom mark.
const metadata={
 '2017-midterm':[
 'P01-a P01-b P01-c P01-d|3|3|- - - -','P02-1 P02-2 P02-3 P02-4|4|4|- - - -',
 'P03-a P03-b|5|5|- -','P04-a P04-b|6|6|- -','P05-a P05-b|7|7|- -',
 'P06-a P06-b P06-c P06-d|8|8|- - - -','P07|9|9|7','P08-a P08-b|10|10|- -',
 'P09-a P09-b|11|11|- -','P10-a P10-b P10-c|12|12|- - -','P11|13|13|10'],
 '2017-final':[
 'P01|3|3|4','P02|4|4|4','P03-a P03-b P03-c|5|5|- - -',
 'P04-a P04-b-algorithm P04-b-time|6|6 7|5 - -','P04-c|6|7|3','P05-a P05-b|8|8 9|4 5',
 'P06-a P06-b P06-c P06-d|10|10|1 2 2 2','P07|11|11|7','P08|12|12|6','P09|13|13|6',
 'P10-a-first P10-a-second P10-b|14|14|- - 4','P11-a-T1 P11-a-T2 P11-b P11-c P11-d|15|15|- - 2 3 3',
 'P12-a P12-b|16|16|4 4','P13-a P13-b P13-c|17|17|2 2 3','P14-a P14-c|18|18|1 4'],
 '2018-midterm':[
 'P01-a P01-b|3|3|- -','P02-a P02-b P02-c P02-d|4|4|- - - -','P03-a P03-b P03-c|5|5|2 3 2',
 'P04-a-contrapositive P04-a-proof P04-b P04-c|6|6|- - - -','P05-a P05-b|7|7|- -',
 'P06-a P06-b P06-c|8|8|- - -','P07-a P07-b P07-c|9|9|- - -','P08-a P08-b P08-c|10|10|- - -'],
 '2018-final':[
 'P01-a P01-b P01-c|3|3|- - -','P02-a-E1 P02-a-E2 P02-a-E3 P02-b P02-c|4|4|- - - - -',
 'P03-a P03-b|5|5|- -','P04-a P04-b P04-c-basis P04-c-edges|6|6|- - - -',
 'P05-a P05-b|7|7|- -','P06-a P06-b|8|9|- -',
 'P07-1-E1 P07-1-E2 P07-1-conditional P07-2-E1 P07-2-E2 P07-2-conditional|10|10|- - - - - -',
 'P08-a P08-b|11|11|- -','P08-c|11|12|-','P09-a|13|13|-',
 'P10-a P10-b P10-c P10-d|14|15|- - - -','P11-a P11-b|16|16|- -','P12-a P12-b|17|17|- -'],
 '2019-midterm':[
 'P01-a P01-b P01-c P01-d|3|3|2 2 2 2','P02-a P02-b P02-c P02-d P02-e|4|4|2 2 2 3 3',
 'P03-a P03-b|5|5|3 3','P04|6|6|8','P05|7|7|6','P06-a P06-b|8|8|3 3',
 'P07-a P07-b P07-c|9|9|2 3 3','P08|10|10|8','P09-a P09-b P09-c|11|11|2 2 2',
 'P10-a P10-b P10-c P10-d|12|12|2 3 3 4','P11-a P11-b P11-c|13|13|3 6 3','P12|14|14|8','BONUS|15|15|10'],
 '2019-final':[
 'P01-a P01-b P01-c P01-d|3|3|2 2 2 2','P02|4|4|4','P03-a P03-b|5|5|4 4','P04-a P04-b|6|6|4 4',
 'P05|7|7|8','P06-a P06-b|8|8|2 6','P07|9|9|8','P08-a P08-b P08-c P08-d|10|10|2 3 2 3',
 'P09-a P09-b|11|11|2 2','P10-a P10-b P10-c P10-d|12|12|2 2 2 3',
 'P11-a-W1 P11-a-W3 P11-a-decision P11-b-W1 P11-b-W2 P11-b-decision P11-c|13|13 14|- - - - - - 2',
 'P11-d-strategy P11-d-probability|13|14|- -','P12-a P12-b P12-c|15|15|3 2 3',
 'P13-a P13-b P13-c|16|16|2 2 2','BONUS-a BONUS-b|17|17|3 7']
};
test('every Task 5 source page, marking continuation, and published mark matches its evidence',()=>{
 const checked=new Set();
 for(const [paper,groups] of Object.entries(metadata))for(const row of groups){
  const [ids,page,solutions,marks]=row.split('|'),ms=marks.split(' ');
  assert.equal(ids.split(' ').length,ms.length);
  ids.split(' ').forEach((suffix,i)=>{
   const id=prefix(paper)+suffix,r=byId.get(id);
   assert.equal(r.source_page,Number(page),id);
   if(!r.note_path){assert.equal(r.status,'needs-review',id);assert.ok(r.verification?.solution,id);return;}
   const p=props(id);checked.add(id);
   assert.equal(p.source_page,Number(page),id);assert.deepEqual(p.solution_page,solutions.split(' ').map(Number),id);
   if(ms[i]==='-')assert.ok(!Object.hasOwn(p,'marks'),`${id}: invented mark`);else assert.equal(p.marks,Number(ms[i]),id);
  });
 }
 assert.deepEqual([...checked].sort(),admitted.map(r=>r.id).sort());
});

test('all Task 5 atoms have substantial unique explanations, derivations, and factual metadata',()=>{
 const works=new Set(),bases=new Set(),difficulties=new Set(),types=new Set();
 for(const r of admitted){
  const text=read(r.id),p=props(r.id),prompt=section(text,'Question').split(/\n\nShared context:/)[0];
  const restoredShortAtom=prompt.length>0&&r.transcription_correction&&r.verification?.transcription&&section(text,'Question').includes('Shared context: [[STEM-');
  assert.ok(prompt.length>=15||/^Find \$T\([123]\)\$\.$/.test(prompt)||restoredShortAtom,r.id);assert.doesNotMatch(prompt,/[\u3400-\u9FFF]|Solution:|Grading scheme:/,r.id);
  assert.ok(section(text,'中文解析').length>=50,`${r.id}: Chinese reasoning`);
  const solution=section(text,'Detailed Solution');
  assert.match(solution,/^\*\*Answer\.\*\*\s+\S[\s\S]+\n\n\*\*Derivation\/proof\.\*\*\s+\S/m,r.id);
  const work=solution.split('**Derivation/proof.** ')[1];assert.ok(work.length>=90,r.id);
  assert.ok(!works.has(work),`${r.id}: generic duplicate derivation`);works.add(work);
  assert.ok(p.difficulty_basis.length>45,r.id);assert.ok(!bases.has(p.difficulty_basis),r.id);bases.add(p.difficulty_basis);
  assert.ok(section(text,'Common Mistakes').split('\n').filter(s=>s.startsWith('- ')).length>=2,r.id);
  assert.equal(p.verification_status,'verified');assert.equal(p.term,p.year===2019?'spring':'fall');
  for(const page of [p.source_page,...p.solution_page])assert.ok(section(text,'Source').includes(`![[${r.source_pdf}#page=${page}]]`),r.id);
  assert.doesNotMatch(text,controls,r.id);assert.doesNotMatch(text,generic,r.id);
  difficulties.add(p.difficulty);p.question_types.forEach(t=>types.add(t));
 }
 assert.ok(difficulties.size>=4);assert.ok(types.size>=7);
});

test('source-reviewed irreconcilable printed items remain quarantined without Question notes',()=>{
 const reasons={
  'Q-2017-MID-P09-c':/all women and all men[\s\S]*OR/,
  'Q-2017-FINAL-P05-b':/no independence across flips/,
  'Q-2017-FINAL-P07':/neither uniformity nor independence/,
  'Q-2017-FINAL-P12-a':/n=1 and n=2[\s\S]*empty list/,
  'Q-2017-FINAL-P12-b':/n=1 and n=2[\s\S]*empty list/,
  'Q-2017-FINAL-P14-b':/n\s*=\s*1[\s\S]*k\s*=\s*0/,
  'Q-2018-FINAL-P01-d':/log[\s\S]*(?:nonpositive|z\s*<=\s*0|z≤0)/,
  'Q-2018-FINAL-P01-a':/moment-existence[\s\S]*variance/,
  'Q-2018-FINAL-P01-c':/arbitrary sets[\s\S]*infinite/,
  ...Object.fromEntries(['1-E1','1-E2','1-conditional','2-E1','2-E2','2-conditional'].map(s=>['Q-2018-FINAL-P07-'+s,/uniform selection probabilities or independent redraws/])),
  'Q-2018-FINAL-P08-b':/independence across balls is absent/,
  'Q-2018-FINAL-P08-c':/Independence across balls is missing/,
  'Q-2018-FINAL-P09-b':/distinct[\s\S]*p\s*=\s*q/,
  'Q-2019-FINAL-P03-a':/integers[\s\S]*positive[\s\S]*Negative/,
  'Q-2019-FINAL-P03-b':/n≤0[\s\S]*undefined/,
  'Q-2019-FINAL-P12-a':/marginals[\s\S]*independence/,
  'Q-2019-FINAL-P12-c':/marginals[\s\S]*covariances/
 };
 assert.deepEqual(records.filter(r=>!r.note_path).map(r=>r.id).sort(),Object.keys(reasons).sort());
 for(const [id,reason] of Object.entries(reasons)){
  const r=byId.get(id);assert.equal(r.status,'needs-review');assert.equal(r.note_path,null);assert.match(r.exclusion_reason,reason,id);
  assert.ok(!readdirSync(join(root,'knowledge_base/04-Questions')).some(f=>f.startsWith(id+' - ')),id);
 }
 assert.match(read('Q-2017-FINAL-P14-c'),/at least two vertices/);
});

const gcd=(a,b)=>{while(b)[a,b]=[b,a%b];return a;};
const choose=(n,k)=>{let v=1;for(let i=1;i<=k;i++)v=v*(n-i+1)/i;return v;};
const pow=(a,e,m)=>{let r=1n;for(a=BigInt(a),e=BigInt(e),m=BigInt(m);e;e>>=1n,a=a*a%m)if(e&1n)r=r*a%m;return r;};

test('derived provenance and independent candy / graph boundary checks agree',()=>{
 const derived=['Q-2017-MID-P10-c','Q-2017-FINAL-P04-c','Q-2017-FINAL-P13-a','Q-2017-FINAL-P13-c','Q-2018-FINAL-P05-b','Q-2018-FINAL-P12-b'];
 assert.deepEqual(admitted.filter(r=>props(r.id).answer_source==='derived').map(r=>r.id).sort(),derived.sort());
 for(const r of admitted)assert.equal(props(r.id).answer_source,derived.includes(r.id)?'derived':'official');
 let candy=0;for(let a=0;a<=30;a++)for(let b=0;b<=30-a;b++)for(let c=0;c<=30-a-b;c++)candy++;
 assert.equal(candy,5456);assert.equal(choose(33,3),candy);assert.ok(read('Q-2017-MID-P10-c').includes('50-4\\cdot5=30'));
 const bipartite=n=>{for(let mask=0;mask<(1<<n);mask++){let ok=true;for(let i=0;i<n;i++)for(let j=i+1;j<n;j++)if(((mask>>i)&1)===((mask>>j)&1))ok=false;if(ok)return true;}return false;};
 for(let n=1;n<=8;n++)assert.equal(bipartite(n),n<=2);
 for(let m=1;m<=9;m++)for(let n=1;n<=9;n++){
  const degrees=[...Array(m).fill(n),...Array(n).fill(m)],open=degrees.filter(d=>d%2).length===2;
  assert.equal(open,(m===2&&n%2===1)||(n===2&&m%2===1)||(m===1&&n===1));
 }
 for(const id of ['Q-2017-FINAL-P13-c','Q-2018-FINAL-P05-b'])assert.match(read(id),/(?:1,1|m=n=1)/);
 assert.equal(props('Q-2018-FINAL-P05-a').answer_source,'official');assert.match(read('Q-2018-FINAL-P05-a'),/marking note explicitly accepts n=1/);
});

test('2017 Final 5(a) bilingual posterior probability keeps numerator and denominator aligned',()=>{
 const text=read('Q-2017-FINAL-P05-a'),zh=section(text,'中文解析');
 assert.match(zh,/十三分之八/);
 assert.doesNotMatch(zh,/八分之十三|13\s*\/\s*8/);
 assert.match(section(text,'Detailed Solution'),/^\*\*Answer\.\*\* \$8\/13\$/m);
});

test('2019 Final Bonus (b) bilingual strengthened bound subtracts both n and two',()=>{
 const text=read('Q-2019-FINAL-BONUS-b'),zh=section(text,'中文解析');
 assert.ok(zh.includes('减去 $n+2$'));
 assert.doesNotMatch(zh,/再减 n 加二|-n\s*\+\s*2/);
 assert.ok(section(text,'Detailed Solution').includes('2\\cdot2^n-n-2'));
});

test('2017 inclusion-exclusion, posterior coin probability, and recursive invariants recompute',()=>{
 assert.equal(4**9-4*3**9+6*2**9-4,186480);
 assert.equal(Array.from({length:720},(_,i)=>i).filter(i=>gcd(i,720)!==1).length+1,529);
 let winAndHeads=0,heads=0;
 // Enumerate coin assignment plus all six ordered flips, conditioning on the
 // friend's observed first head; this is independent of the grouped derivation.
 for(const friendP of [0.5,0.8])for(let f=0;f<8;f++)for(let me=0;me<8;me++){
  const myP=friendP===0.5?0.8:0.5;let w=0.5,fh=0,mh=0;
  for(let i=0;i<3;i++){const fb=(f>>i)&1,mb=(me>>i)&1;w*=fb?friendP:1-friendP;w*=mb?myP:1-myP;fh+=fb;mh+=mb;}
  if(f&1){heads+=w;if(mh>fh)winAndHeads+=w;}
 }
 assert.ok(Math.abs(heads-0.65)<1e-12);assert.ok(Math.abs(winAndHeads/heads-72/325)<1e-12);
 assert.match(byId.get('Q-2017-FINAL-P05-b').verification.solution,/72\/325[\s\S]*probability0/);
 let t=2;for(let n=1;n<=12;n++){assert.equal(t,2**(n+1)-2);t=2*t+2;}
 for(let n=18;n<=150;n++)assert.ok(Array.from({length:Math.floor(n/7)+1},(_,b)=>b).some(b=>(n-7*b)%4===0));
 assert.match(byId.get('Q-2017-FINAL-P12-b').verification.solution,/least prime factor[\s\S]*u≥p[\s\S]*n=1[\s\S]*n=2[\s\S]*n=3/);
});

test('2018 RSA, units, grid geometry, matrix output, and tilings are independently checked',()=>{
 assert.equal(11*59%648,1);assert.equal(pow(3,11,703),694n);assert.equal(pow(694,59,703),3n);
 assert.equal(gcd(4914,3588),78);assert.equal(Array.from({length:70},(_,i)=>i).filter(i=>gcd(i,70)===1).length,24);
 assert.equal(choose(20,5)-choose(11,5)-choose(9,5),14916);assert.equal(choose(14,5),2002);
 const paths=blocked=>{const d=Array.from({length:6},()=>Array(4).fill(0));d[0][0]=1;for(let x=0;x<=5;x++)for(let y=0;y<=3;y++){if(x)d[x][y]+=blocked&&x===3&&y===2?0:d[x-1][y];if(y)d[x][y]+=d[x][y-1];}return d[5][3];};
 assert.equal(paths(false),56);assert.equal(paths(true),38);assert.match(read('Q-2018-FINAL-P11-b'),/56-6\\cdot1\\cdot3=38/);
 const A=[[-1,1],[5,0]],B=[[3,1,2],[0,1,4]],C=A.map(row=>B[0].map((_,j)=>row.reduce((s,a,k)=>s+a*B[k][j],0)));
 assert.deepEqual(C,[[-3,0,2],[15,5,10]]);assert.equal(60*25*8+50*60*8,36000);
 // Exact-cover recursion places a triomino at the first unfilled board cell.
 const tile=n=>{const full=(1n<<BigInt(3*n))-1n;const visit=mask=>{if(mask===full)return 1;let i=0;while(mask&(1n<<BigInt(i)))i++;const x=i%3,y=Math.floor(i/3);let total=0;for(const offsets of [x===0?[0,1,2]:null,y+2<n?[0,3,6]:null])if(offsets){const bits=offsets.reduce((v,o)=>v|(1n<<BigInt(i+o)),0n);if(!(mask&bits))total+=visit(mask|bits);}return total;};return visit(0n);};
 const expected=[1,1,2,3,4,6,9];expected.forEach((v,i)=>assert.equal(tile(i+1),v));
 assert.ok(read('Q-2018-FINAL-P03-a').includes('$an\\in S$'));assert.doesNotMatch(section(read('Q-2018-FINAL-P03-a'),'Question'),/a\^n/);
});

test('2019 modular arithmetic, parity, constrained counts, Monty Hall, and recurrence recompute',()=>{
 for(const [a,x,b] of [[7,49,31],[15,47,81],[49,83,11]])assert.equal(a*x%104,b);
 assert.equal((9*16+2*89)%104,10);assert.equal((16+89)%104,1);assert.equal(53*401%924,1);assert.equal(pow(8,1027,22),2n);
 assert.deepEqual([148%9,148%14,148%5],[4,8,3]);
 const triples=[];for(let a=0;a<=20;a++)for(let b=0;b<=20-a;b++)triples.push([a,b,20-a-b]);
 assert.deepEqual([triples.length,triples.filter(t=>t[0]>=9).length,triples.filter(t=>t[0]>=9&&t[1]>=9).length,triples.filter(t=>t.every(x=>x<9)).length],[231,78,6,15]);
 assert.equal(5*24*23*22*21,1275120);assert.equal(choose(6,2)*24*23*22*21,3825360);
 assert.ok(read('Q-2019-FINAL-P09-b').includes('(10!)^4\\cdot4!'));
 for(let n=1;n<=8;n++){let sum=0;for(let i=0;i<=n;i++)for(let j=0;j<=n-i;j++)sum+=choose(n,i)*choose(n-i,j);assert.equal(sum,3**n);}
 const prior=[0.5,0.3,0.2],joint=Array.from({length:3},()=>[0,0,0]);
 for(let w=0;w<3;w++){const options=[1,2].filter(m=>m!==w);for(const m of options)joint[w][m]=prior[w]/options.length;}
 const m2=joint.reduce((s,row)=>s+row[1],0),m3=joint.reduce((s,row)=>s+row[2],0);
 assert.ok(Math.abs(joint[0][1]/m2-5/9)<1e-12);assert.ok(Math.abs(joint[2][1]/m2-4/9)<1e-12);
 assert.ok(Math.abs(joint[0][2]/m3-5/11)<1e-12);assert.ok(Math.abs(joint[1][2]/m3-6/11)<1e-12);
 assert.equal(joint[0][1]+joint[1][2],0.55);assert.equal(1-prior[2],0.8);
 let f=1;for(let n=1;n<=20;n++){assert.equal(f,2**(n+1)-n-2);f=2*f+n+1;}
 assert.match(read('Q-2019-FINAL-BONUS-a'),/one fixed C/);assert.match(read('Q-2019-FINAL-BONUS-b'),/stronger exact identity/);
});

test('solution-driven mappings distinguish construction, inference, counting, and algorithm tracing',()=>{
 const has=(id,key,value)=>assert.ok(props(id)[key].some(s=>s.includes(value)),`${id}: missing ${value}`);
 has('Q-2017-FINAL-P04-a','subtopics','Inclusion-Exclusion');
 assert.ok(byId.get('Q-2017-FINAL-P05-b').syllabus_evidence.some(s=>s.includes('Random Variables')));
 assert.ok(byId.get('Q-2017-FINAL-P12-b').syllabus_evidence.some(s=>s.includes('Algorithms')));
 has('Q-2018-MID-P04-a-proof','methods','Proof Method');assert.ok(!props('Q-2018-MID-P04-a-proof').methods.some(s=>s.includes('Function Counting')));
 has('Q-2018-FINAL-P03-b','subtopics','GCDs and Congruences');has('Q-2018-FINAL-P03-b','methods','Structural Induction');
 has('Q-2018-FINAL-P10-a','methods','Algorithm Trace');assert.ok(!props('Q-2018-FINAL-P10-a').concepts.some(s=>s.includes('Asymptotic')));
 has('Q-2019-MID-P04','methods','Proof Method');assert.ok(!props('Q-2019-MID-P04').methods.some(s=>s.includes('Translation')));
 assert.match(section(read('Q-2019-MID-P04'),'Detailed Solution'),/numbered inference\.\n\n1\. /);
 has('Q-2019-MID-BONUS','methods','Enumeration and Cardinality');
 has('Q-2019-FINAL-P06-a','methods','Recursive Construction');has('Q-2019-FINAL-P06-b','methods','Structural Induction');
 has('Q-2019-FINAL-P07','subtopics','Basic Counting');has('Q-2019-FINAL-P07','subtopics','Modular Arithmetic');
 has('Q-2019-FINAL-P10-d','subtopics','Inclusion-Exclusion');
 has('Q-2019-FINAL-BONUS-b','subtopics','Induction');has('Q-2019-FINAL-BONUS-b','subtopics','Algorithms');has('Q-2019-FINAL-BONUS-b','subtopics','Recursion');
});

const stems={
 '2017-MID':'P01 P02 P03 P04 P06 P09 P10','2017-FINAL':'P03 P04 P05 P06 P10 P11 P13 P14',
 '2018-MID':'P01 P02 P03 P04-a P06 P07 P08','2018-FINAL':'P01 P02 P03 P04-c P06 P08 P10 P11',
 '2019-MID':'P01 P02 P03 P07 P09 P10 P11','2019-FINAL':'P01 P06 P08 P09 P10 P11 P12 P13 BONUS'
};
test('all required shared contexts, source diagrams, and interpretation notes are preserved',()=>{
 for(const [paper,suffixes] of Object.entries(stems)){
  const expected=suffixes.split(' ').map(s=>`STEM-${paper}-${s} - Shared Problem Prompt.md`).sort();
  assert.deepEqual(readdirSync(join(root,'knowledge_base/04-Questions/Stems')).filter(f=>f.startsWith(`STEM-${paper}-`)).sort(),expected);
  for(const file of expected){
   const text=readFileSync(join(root,'knowledge_base/04-Questions/Stems',file),'utf8'),shared=section(text,'Shared printed wording');
   assert.ok(shared.length>50,file);assert.doesNotMatch(shared,/(?:^|\n)\s*(?:Answer|Solution):|The published (?:model|solution)|The supplied solution|see (?:the )?PDF/i,file);
   assert.ok(admitted.some(r=>read(r.id).includes(`[[${basename(file,'.md')}]]`)),`${file}: orphan stem`);
  }
 }
 const figures=['2018-FINAL-P02-tilings.png','2018-FINAL-P11-grid.png','2019-FINAL-P13-a.png','2019-FINAL-P13-b.png','2019-FINAL-P13-c.png'];
 for(const f of figures){const path=join(root,'knowledge_base/04-Questions/Figures',f),png=readFileSync(path);assert.ok(statSync(path).size>200);assert.equal(png.subarray(1,4).toString(),'PNG');assert.ok(png.readUInt32BE(16)>100&&png.readUInt32BE(20)>100,f);}
 const graph=readFileSync(join(root,'knowledge_base/04-Questions/Stems/STEM-2019-FINAL-P13 - Shared Problem Prompt.md'),'utf8');
 assert.match(graph,/intersections as vertices/);for(const part of ['a','b','c'])assert.ok(graph.includes(`2019-FINAL-P13-${part}.png`));
 assert.match(read('Q-2019-FINAL-P13-a'),/six[\s\S]*degree (?:2|two)/i);
 assert.match(read('Q-2019-FINAL-P13-b'),/two[\s\S]*degree (?:1|one)/i);
 assert.match(read('Q-2019-FINAL-P13-c'),/four odd-degree/i);
});

test('Task 5 teaching notes, Stems, and body links are substantive, clean, and resolved',()=>{
 const walk=dir=>readdirSync(join(root,dir),{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(join(dir,e.name)):e.name.endsWith('.md')?[join(dir,e.name)]:[]);
 const files=['knowledge_base/00-Home','knowledge_base/01-Topics','knowledge_base/02-Methods','knowledge_base/03-Papers','knowledge_base/04-Questions','knowledge_base/06-Audit'].flatMap(walk),names=new Set(files.map(f=>basename(f,'.md')));
 const linkedTeaching=new Set(admitted.flatMap(r=>[...props(r.id).concepts,...props(r.id).methods]).map(s=>s.slice(2,-2)));
 const scope=new Set(admitted.map(r=>r.note_path));
 for(const f of files)if(/^knowledge_base\/04-Questions\/Stems\/STEM-201[789]-/.test(f)||/^knowledge_base\/03-Papers\/201[789] (?:Midterm|Final)\.md$/.test(f)||linkedTeaching.has(basename(f,'.md')))scope.add(f);
 for(const f of scope){const text=readFileSync(join(root,f),'utf8');assert.doesNotMatch(text,controls,f);assert.doesNotMatch(text,generic,f);
  for(const m of text.matchAll(/\[\[([^\]]+)\]\]/g)){const t=m[1].split('|')[0].split('#')[0];assert.ok(!t||names.has(t)||existsSync(join(root,t))||existsSync(join(root,t+'.md')),`${f}: dangling ${t}`);}
  if(linkedTeaching.has(basename(f,'.md'))){assert.match(text,/[\u3400-\u9FFF]/);assert.ok(text.length>500,f);}
 }
 const allowed=new Set(admitted.map(r=>r.note_path));for(const f of files.filter(f=>/^knowledge_base\/04-Questions\/Q-201[789]-/.test(f)))assert.ok(allowed.has(f),`${f}: orphan or excluded Question`);
});
