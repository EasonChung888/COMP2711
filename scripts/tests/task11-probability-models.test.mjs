import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync} from 'node:fs';
import {parseFrontmatter} from '../knowledge-base/schema.mjs';
const audit=JSON.parse(readFileSync('knowledge_base/06-Audit/question-audit.json','utf8')).questions;
const byId=new Map(audit.map(r=>[r.id,r]));
const review=JSON.parse(readFileSync('scripts/tests/fixtures/probability-model-review.json','utf8')).families;
const text=id=>readFileSync(byId.get(id).note_path,'utf8');
const close=(a,b)=>assert.ok(Math.abs(a-b)<1e-12,`${a} != ${b}`);
const mean=xs=>xs.reduce((a,b)=>a+b,0)/xs.length;
const variance=xs=>mean(xs.map(x=>x*x))-mean(xs)**2;
const cart=(n,k)=>k?cart(n,k-1).flatMap(a=>Array.from({length:n},(_,i)=>[...a,i+1])):[[]];

test('review coverage discovers retained probability and random-placement families without freezing future unrelated files',()=>{
 const stems=readdirSync('knowledge_base/04-Questions/Stems').map(n=>({name:n.slice(0,-3),text:readFileSync('knowledge_base/04-Questions/Stems/'+n,'utf8')}));
 for(const r of audit.filter(r=>r.status==='in-scope')){
  const t=text(r.id),p=parseFrontmatter(t).properties,q=t.split('## Question\n\n')[1].split('\n## ')[0];
  const shared=stems.filter(s=>q.includes('[['+s.name)).map(s=>s.text.split('## Shared printed wording\n\n')[1]?.split('\n## ')[0]).join('\n');
  if(!p.topics.some(t=>t.includes('Probability'))&&!/\b(random(?:ly|ized)?|probability|fair (?:coin|dice)|uniform(?:ly)?|lottery|variance|expected|spins?|dice)\b/i.test(q+'\n'+shared))continue;
  const record=review.find(f=>f.ids.includes(r.id));assert.ok(record,r.id+' needs a source-specific model review');
  assert.ok(record.model_check.length>100);assert.equal(record.source_pdf,r.source_pdf);assert.ok(record.source_pages.includes(r.source_page));
 }
 for(const family of review)for(const id of family.quarantined_ids){const r=byId.get(id);assert.equal(r.status,'needs-review');assert.equal(r.note_path,null);assert.ok(r.verification.transcription.includes('Literal atomic request:'));assert.ok(r.verification.solution.includes('intended-model work retained'));}
});

test('conditional bar is restored directly in the literal quarantined prompt and rendered audit',()=>{
 const r=byId.get('Q-2013-MID-P04-c');
 assert.ok(r.transcription_correction.restored.includes('P(F\\mid E)'));
 assert.ok(r.verification.transcription.includes('P(F\\mid E)'));
 assert.ok(!r.transcription_correction.restored.includes('P(Fmid E)'));
 const rendered=readFileSync('knowledge_base/06-Audit/Extraction and Verification Audit.md','utf8');assert.ok(rendered.includes('P(F\\mid E)'));
 const fixture=JSON.parse(readFileSync('scripts/tests/fixtures/task11-2013-mid.json','utf8'));
 assert.ok(!Object.hasOwn(fixture.questions,r.id),'do not freeze the old corrupted hash or hash a nonexistent admitted note');
 // An operator-specific control rejects the former corrupt spelling independently of fixture hashes.
 const operator=s=>assert.match(s,/P\(F\\mid E\)/);operator(r.transcription_correction.restored);assert.throws(()=>operator(r.transcription_correction.restored.replace('\\mid','mid')));
});

test('2013 ball-return and matching countermodels preserve full support but change the requested probabilities',()=>{
 for(const alpha of [.5,.75]){let p=1;for(let n=1;n<=12;n++){p=.75*p+alpha/4;close(p,alpha+(1-alpha)*.75**n);}}
 close(.75+.5/4,7/8);close(.75+.75/4,15/16);
 // All 8! bijections are enumerated with biased John and (given E) Jack partners.
 const permutations=a=>a.length?a.flatMap((x,i)=>permutations(a.filter((_,j)=>j!==i)).map(p=>[x,...p])):[[]];
 let total=0,e=0,ef=0;const t=.5,s=.5,denominator=846720;
 for(const p of permutations([0,1,2,3,4,5,6,7])){const E=p[0]===0,F=p[1]===1;const weight=E?(F?294:49):12;assert.ok(weight>0);total+=weight;if(E)e+=weight;if(E&&F)ef+=weight;}
 assert.equal(total,denominator);close(e/denominator,t);close(ef/e,s);assert.notEqual(t,1/8);assert.notEqual(s,1/7);
 for(const id of ['Q-2013-MID-P04-a','Q-2013-MID-P04-d'])assert.equal(byId.get(id).status,'in-scope');
});

test('2013 lottery and hidden-gift countermodels invalidate iid conclusions while retaining intended numeric evidence',()=>{
 assert.equal((1-(119/120)**120).toFixed(4),'0.6337');
 assert.notEqual((1-(119/120)**120).toFixed(4),'0.6322');
 const triples=[];for(let a=0;a<10;a++)for(let b=a+1;b<10;b++)for(let c=b+1;c<10;c++)triples.push([a,b,c]);assert.equal(triples.length,120);
 const fixed=[0,1,2].join(',');const waits=triples.map(U=>U.join(',')===fixed?1:Infinity);
 assert.equal(mean(waits),Infinity);close(mean(waits.map(t=>+(t<=120))),1/120);
 for(const t of [.25,.75]){close(t+1-t,1);close(t*1+(1-t)*2,2-t);close(t*(1-(2-t))**2+(1-t)*(2-(2-t))**2,t*(1-t));}
 const q=.9,r=2/3;const replacementVariance=r*(1-q)/q**2+r*(1-r)/q**2;
 close(replacementVariance,260/729);assert.ok(replacementVariance<2/3);
 for(const s of ['a','b','c'])assert.equal(byId.get('Q-2013-MID-P06-'+s).status,'needs-review');
});

test('2014 fair dice, sticker recipients and weighted reshuffles distinguish marginals from joint laws',()=>{
 const iid=cart(6,2),shared=Array.from({length:6},(_,i)=>[i+1,i+1]);
 const payoff=([a,b])=>a===b?a:-1;
 close(mean(iid.map(payoff)),-1/4);close(variance(iid.map(payoff)),475/144);
 close(mean(shared.map(payoff)),7/2);close(variance(shared.map(payoff)),35/12);
 const events=pairs=>{const A=p=>((p[0]+p[1])%2)===0,B=p=>p[0]%2===1||p[1]%2===1;return [mean(pairs.map(p=>+A(p))),mean(pairs.map(p=>+B(p))),mean(pairs.map(p=>+(A(p)&&B(p))))];};
 assert.deepEqual(events(iid),[.5,.75,.25]);assert.deepEqual(events(shared),[1,.5,.5]);
 close(events(shared)[2],events(shared)[0]*events(shared)[1]);assert.notEqual(.25,.5*.75);
 for(const U of Array.from({length:20},(_,i)=>i)){const recipients=Array(30).fill(U);assert.equal(new Set(recipients).size,1);}
 assert.notEqual(1/20,1-(19/20)**30);close([1,2,3,4].reduce((s,r)=>s+(48+r)/r,0),104);close(4/.5,8);
 // Reusing an iid game sample preserves its marginal but scales total variance quadratically.
 close(variance(iid.map(p=>10*payoff(p))),100*475/144);
});

test('2015 maxima and 2016 dice/wheel comparisons reverse under allowed fair/uniform couplings',()=>{
 const max2=cart(6,2).map(a=>Math.max(...a)),max3=cart(6,3).map(a=>Math.max(...a)),shared=[1,2,3,4,5,6];
 close(mean(max2),161/36);close(variance(max2),2555/1296);close(variance(max3),2261/1728);assert.ok(variance(max3)<variance(max2));assert.ok(variance(shared)>variance(max2));
 close(mean(cart(6,2).map(a=>+(a[0]+a[1]>5))),13/18);close(mean(shared.map(x=>+(2*x>5))),2/3);
 const wheel=Array.from({length:11},(_,i)=>i+2);close(mean(wheel.flatMap(a=>wheel.map(b=>+(a+b>=10)))),100/121);close(mean(wheel.map(x=>+(2*x>=10))),8/11);
 close(mean(cart(6,4).map(a=>+(a.reduce((s,x)=>s+x,0)>=10))),65/72);assert.ok(2/3<100/121);assert.ok(65/72>100/121);
 close(mean(wheel.map(x=>5*x)),35);assert.equal(byId.get('Q-2016-FINAL-P01-b').status,'in-scope');
});

test('2016 mixed dice dependence remains true for every feasible conditional coupling',()=>{
 for(const t of [0,1/9,1/3]){const J=.5+t/2;assert.ok(J>4/9);close((2/3)+(2/3)-J,5/6-t/2);}
 const r=byId.get('Q-2016-FINAL-P03-e');assert.equal(r.status,'in-scope');assert.equal(r.answer_source,'derived');assert.match(r.source_correction,/Conditional independence[\s\S]*not printed/);
 assert.ok(text(r.id).includes('1/2>4/9'));assert.ok(text(r.id).includes('没有借用'));
 for(const s of ['a-1','a-2'])assert.equal(byId.get('Q-2016-FINAL-P03-'+s).answer_source,'official');
 for(const s of ['b','c','d'])assert.equal(byId.get('Q-2016-FINAL-P03-'+s).status,'needs-review');
});

test('linearity, explicitly independent models and deterministic random-placement guarantees remain admitted',()=>{
 for(const id of ['Q-2015-FINAL-P02-c','Q-2018-FINAL-P08-a','Q-2019-FINAL-P12-b','Q-2017-FINAL-P06-d','Q-2024S-FINAL-P05','Q-2025S-FINAL-P10','Q-2025F-FINAL-P02-b'])assert.equal(byId.get(id).status,'in-scope');
 // Shared Bernoulli outcomes leave the linear mean unchanged although variance differs.
 for(const p of [.1,.5,.9])close((60*0)*(1-p)+(60*1)*p,60*p);
 let bad=0;const blocks=[[0,1,3,4],[1,2,4,5],[3,4,6,7],[4,5,7,8]];for(let mask=0;mask<512;mask++)if(blocks.some(b=>b.every(i=>(mask>>i)&1)))bad++;assert.equal(bad,95);
 for(let n=1;n<=10;n++){let odd=0;for(let k=1;k<=n;k++){const p=1/(2*k+1);odd=(1-odd)*p+odd*(1-p);}close(odd,n/(2*n+1));}
});

test('2023 medical-test percentage correction preserves exact prompt and the official Bayes structure',()=>{
 const r=byId.get('Q-2023F-FINAL-P03');assert.equal(r.answer_source,'official');assert.match(r.source_correction,/0\.02%[\s\S]*0\.0002[\s\S]*0\.00002 twice/);
 assert.ok(text(r.id).includes('only 0.02%'));close(.9999*.9998/(.9999*.9998+.0001*.001),49985001/49985006);
 assert.notEqual(.00002,.02/100);close(.0002,.02/100);
});

test('maintenance documentation states the structural and native-acceptance limits honestly',()=>{
 for(const file of ['knowledge_base/00-Home/Knowledge Base Guide.md','knowledge_base/06-Audit/Extraction and Verification Audit.md']){
  const s=readFileSync(file,'utf8');assert.match(s,/structural\/regression safeguards, not automatic semantic proof/);assert.match(s,/native Obsidian|Native rendering/);
 }
});
