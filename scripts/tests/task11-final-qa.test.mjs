import test from 'node:test';
import assert from 'node:assert/strict';
import {readdirSync,readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {parseFrontmatter} from '../knowledge-base/schema.mjs';
import {renderExtractionAudit} from '../knowledge-base/render-audits.mjs';

const sha=s=>createHash('sha256').update(s).digest('hex');
const audit=JSON.parse(readFileSync('knowledge_base/06-Audit/question-audit.json','utf8')).questions;
const byId=new Map(audit.map(r=>[r.id,r]));
const section=(t,h)=>t.split('## '+h+'\n\n')[1]?.split('\n## ')[0].trim();
const fixtures=readdirSync('scripts/tests/fixtures').filter(n=>/^task11-.*\.json$/.test(n));

function checkChinese(t,checkpoints,id){
 const block=section(t,'Detailed Solution').split('### 中文解答\n\n')[1];
 assert.ok(block,id+' Chinese worked block');
 assert.match(block,/\*\*推导。\*\*/);
 for(const token of checkpoints)assert.ok(block.includes(token),id+' lacks '+token);
 // Structural safeguard only: a list of pending tokens is not worked reasoning.
 // This is intentionally not advertised as semantic validation of arbitrary proofs.
 const prose=block.replace(/```[\s\S]*?```|`[^`]*`/g,'').replace('**推导。**','').trim();
 assert.doesNotMatch(prose,/待使用的检查点|尚未推导/,id+' pending checklist');
 assert.ok(prose.replace(/\s/g,'').length>=60,id+' lacks worked content outside code/checkpoint quotations');
 assert.ok((prose.match(/[\u3400-\u9fff]/g)||[]).length>=18,id+' lacks explanatory Chinese prose');
}

test('Task11 batch1 covers every admitted 2013–2016 atom, not just a sample',()=>{
 const covered=fixtures.flatMap(name=>Object.keys(JSON.parse(readFileSync('scripts/tests/fixtures/'+name,'utf8')).questions));
 const scope=id=>/^Q-201[3-6]-/.test(id);
 assert.deepEqual(covered.filter(scope).sort(),audit.filter(r=>scope(r.id)&&r.status==='in-scope').map(r=>r.id).sort());
 assert.equal(new Set(covered).size,covered.length,'no duplicate evidence assignment');
});

test('Task11 2017 checkpoint covers every admitted atom and approved source-defect ruling',()=>{
 const covered=fixtures.flatMap(name=>Object.keys(JSON.parse(readFileSync('scripts/tests/fixtures/'+name,'utf8')).questions)).filter(id=>id.startsWith('Q-2017-'));
 assert.deepEqual(covered.sort(),audit.filter(r=>r.id.startsWith('Q-2017-')&&r.status==='in-scope').map(r=>r.id).sort());
 for(const suffix of ['P01-c','P03-b','P04-a']){const r=byId.get('Q-2017-MID-'+suffix);assert.equal(r.answer_source,'official');assert.ok(r.source_correction.length>100);assert.ok(readFileSync(r.note_path,'utf8').includes(r.source_correction));}
 const d=byId.get('Q-2017-FINAL-P04-c');assert.equal(d.answer_source,'derived');assert.match(d.source_correction,/failed candidate primes divide T/);
 for(const suffix of ['P05-b','P07','P12-a','P12-b']){const r=byId.get('Q-2017-FINAL-'+suffix);assert.equal(r.status,'needs-review');assert.equal(r.note_path,null);assert.ok(r.verification.solution.length>200);}
 assert.match(byId.get('Q-2017-FINAL-P07').verification.solution,/common uniform[\s\S]*probability1/);
 const literalSieve=n=>{let L=Array.from({length:Math.max(0,n-1)},(_,i)=>i+2),P=[];if(!L.length)return 'undefined step2';while(true){const p=L[0];P.push(p);L=L.filter(x=>x!==p&&!(x>=p*p&&x%p===0));if(!L.length)return 'undefined step3';if(L[0]>Math.sqrt(n))return P.concat(L);}};
 assert.equal(literalSieve(1),'undefined step2');assert.equal(literalSieve(2),'undefined step3');assert.deepEqual(literalSieve(3),[2,3],'n=3 is a nonfailure control');
 assert.match(byId.get('Q-2017-FINAL-P12-b').verification.solution,/n=3[\s\S]*does return/);
});

test('Task11 batch2 covers every admitted 2017–2019 atom with source-specific 2019 controls',()=>{
 const covered=fixtures.flatMap(name=>Object.keys(JSON.parse(readFileSync('scripts/tests/fixtures/'+name,'utf8')).questions));
 const scope=id=>/^Q-201[7-9]-/.test(id);
 assert.deepEqual(covered.filter(scope).sort(),audit.filter(r=>scope(r.id)&&r.status==='in-scope').map(r=>r.id).sort());
 const proof=byId.get('Q-2019-MID-P04');assert.equal(proof.answer_source,'official');assert.match(proof.source_correction,/R\(w\)[\s\S]*R\(x\)/);
 assert.match(readFileSync(proof.note_path,'utf8'),/10\. \$\\exists x\(Q\(x\)\\land R\(x\)\)\$/);
 for(const suffix of ['P03-a','P03-b','P12-a','P12-c']){const r=byId.get('Q-2019-FINAL-'+suffix);assert.equal(r.status,'needs-review');assert.equal(r.note_path,null);assert.ok(r.verification.transcription.length>200);assert.ok(r.verification.solution.length>300);}
 let x=3,y=-5,ys=[];while(y){ys.push(y);const r=((x%Math.abs(y))+Math.abs(y))%Math.abs(y);x=y;y=r;}
 assert.deepEqual(ys,[-5,3,1]);assert.ok(!(ys[0]>2*ys[2]));
 assert.match(byId.get('Q-2019-FINAL-P03-a').verification.solution,/−5>2 is false/);
 assert.match(byId.get('Q-2019-FINAL-P12-a').verification.solution,/E\(T_100\)=∞/);
 assert.equal(3600**2*.5*.5,3240000);assert.equal(3600*.5*.5,900);
 assert.equal(byId.get('Q-2019-FINAL-P12-b').status,'in-scope');assert.match(byId.get('Q-2019-FINAL-P12-b').verification.solution,/linearity/);
 const graph=readFileSync('knowledge_base/04-Questions/Stems/STEM-2019-FINAL-P13 - Shared Problem Prompt.md','utf8');
 for(const suffix of ['a','b','c'])assert.ok(graph.includes('2019-FINAL-P13-'+suffix+'.png'));
 assert.match(graph,/## Source interpretation[\s\S]*intersections as vertices/);
 assert.match(byId.get('Q-2019-FINAL-P04-a').verification.solution,/scale-to3200[\s\S]*exponent of 2/);
});

test('Task11 2020 checkpoint covers every admitted atom, preserves source slips and tests coupled game models',()=>{
 const covered=fixtures.flatMap(name=>Object.keys(JSON.parse(readFileSync('scripts/tests/fixtures/'+name,'utf8')).questions)).filter(id=>id.startsWith('Q-2020-'));
 assert.deepEqual(covered.sort(),audit.filter(r=>r.id.startsWith('Q-2020-')&&r.status==='in-scope').map(r=>r.id).sort());
 for(const id of ['Q-2020-MID-P07','Q-2020-FINAL1-P04-c','Q-2020-FINAL2-P01']){const r=byId.get(id);assert.equal(r.answer_source,'official');assert.ok(r.source_correction.length>150);assert.ok(readFileSync(r.note_path,'utf8').includes(r.source_correction));}
 assert.equal(23*(-3)+10*7,1);assert.notEqual(23*(-1)+10*7,1);
 const bonus=['a-fair','a-advantage','b-player1','b-player2','c-player1','c-player2','c-player3'].map(s=>'Q-2020-FINAL2-BONUS-'+s);
 for(const id of bonus){const r=byId.get(id);assert.equal(r.status,'needs-review');assert.equal(r.note_path,null);assert.match(r.verification.solution,/Terminating two-player countermodel[\s\S]*Terminating three-player countermodel/);assert.ok(r.verification.transcription.includes('No independence'));}
 const two=[0,0];for(const B of [0,1]){const winner=B===0?1:0;two[winner]+=.5;}assert.deepEqual(two,[.5,.5]);
 for(let player=0;player<3;player++){let marginal=0,win=0;for(let W=0;W<3;W++){marginal+=(W===player?1:.25)/3;win+=(W===player?1:0)/3;}assert.ok(Math.abs(marginal-.5)<1e-12);assert.equal(win,1/3);}
 assert.match(byId.get('Q-2020-FINAL2-BONUS-c-player3').verification.solution,/玩家1被淘汰后，玩家3是剩下两人中的后手，获胜概率为2\/3/);
 assert.match(byId.get('Q-2020-MID-P10').verification.solution,/deliberate unit choice/);
 assert.match(byId.get('Q-2020-MID-BONUS').verification.solution,/square1[\s\S]*stronger|square1[\s\S]*divisors p_i²>1/);
 assert.ok(readFileSync(byId.get('Q-2020-MID-P05-e').note_path,'utf8').includes('可用的对角枚举'));
 // Explicit independence in this source is preserved, not quarantined by a broad keyword rule.
 for(const s of ['P05-a','P05-b-expectation','P05-b-variance','P05-c','P05-d'])assert.equal(byId.get('Q-2020-FINAL2-'+s).status,'in-scope');
});

test('Task11 2021 checkpoint covers every admitted atom and source-specific probability quarantines',()=>{
 const covered=fixtures.flatMap(name=>Object.keys(JSON.parse(readFileSync('scripts/tests/fixtures/'+name,'utf8')).questions)).filter(id=>id.startsWith('Q-2021-'));
 assert.deepEqual(covered.sort(),audit.filter(r=>r.id.startsWith('Q-2021-')&&r.status==='in-scope').map(r=>r.id).sort());
 for(const suffix of ['P03-a','P03-b','P03-c','P04-a','P04-b']){const r=byId.get('Q-2021-FINAL2-'+suffix);assert.equal(r.status,'needs-review');assert.equal(r.note_path,null);assert.ok(r.verification.transcription.length>200);assert.ok(r.verification.solution.length>500);}
 assert.match(byId.get('Q-2021-FINAL2-P03-c').verification.solution,/minimum is2/);
 assert.equal(.5/(.5+.5*.25),.8);assert.ok(.8>2/3);assert.equal(2*(1+1*.25)-2,.5);
 assert.match(byId.get('Q-2021-FINAL2-P04-b').verification.solution,/Cross-respondent independence is not needed/);
 assert.match(byId.get('Q-2021-FINAL2-P04-b').verification.solution,/Polynomial identity forces/);
 for(const suffix of ['BONUS-a','BONUS-b'])assert.equal(byId.get('Q-2021-FINAL2-'+suffix).status,'in-scope');
 assert.match(byId.get('Q-2021-FINAL2-BONUS-a').verification.solution,/conditional transition law/);
 assert.match(byId.get('Q-2021-MID-P01-e').verification.solution,/x=0,y=2[\s\S]*y=0/);
 assert.equal(byId.get('Q-2021-MID-BONUS').answer_source,'derived');
 assert.match(byId.get('Q-2021-MID-BONUS').verification.solution,/outside the open square/);
 assert.equal(byId.get('Q-2021-FINAL1-P05').answer_source,'derived');
 assert.match(byId.get('Q-2021-FINAL1-P05').verification.solution,/no assertion that the source grammar is false/i);
 // Exhaust all short bit strings to check the independently derived insertion grammar.
 const generated=new Set(['0']);for(let len=1;len<=8;len++)for(const w of [...generated].filter(w=>w.length===len))for(let i=0;i<=w.length;i++)for(const ins of ['0','01','10'])if(w.length+ins.length<=8)generated.add(w.slice(0,i)+ins+w.slice(i));
 for(let len=1;len<=8;len++)for(let v=0;v<2**len;v++){const w=v.toString(2).padStart(len,'0');assert.equal(generated.has(w),[...w].filter(c=>c==='0').length>len/2,w);}
 for(let U=0;U<7;U++){const weekdays=Array(5).fill(U);assert.equal(new Set(weekdays).size,1);}
});

test('Task11 batch3 and all pre2023 admission/disposition evidence are exhaustive',()=>{
 const covered=fixtures.flatMap(name=>Object.keys(JSON.parse(readFileSync('scripts/tests/fixtures/'+name,'utf8')).questions));
 const pre=id=>/^Q-20(1[3-9]|2[0-2])-/.test(id),batch3=id=>/^Q-202[0-2]-/.test(id);
 for(const scope of [pre,batch3])assert.deepEqual(covered.filter(scope).sort(),audit.filter(r=>scope(r.id)&&r.status==='in-scope').map(r=>r.id).sort());
 for(const r of audit.filter(r=>pre(r.id)))for(const k of ['transcription','scope','solution'])assert.ok(r.verification?.[k]?.length>50,r.id+' missing '+k);
 for(const id of ['Q-2022-MID-P07-b','Q-2022-FINAL2-P05-c']){const r=byId.get(id);assert.equal(r.answer_source,'official');assert.ok(readFileSync(r.note_path,'utf8').includes(r.source_correction));}
 assert.match(byId.get('Q-2022-MID-P07-b').source_correction,/3022[\s\S]*2022/);
 assert.match(byId.get('Q-2022-FINAL2-P05-c').source_correction,/displayed partition fails[\s\S]*V2 empty/);
 for(const s of ['P01-a','P01-b','P01-c','P01-d','P05-a','P05-b','P05-c']){const r=byId.get('Q-2022-FINAL1-'+s);assert.equal(r.status,'needs-review');assert.equal(r.note_path,null);assert.match(r.verification.solution,/countermodel/);}
 for(const s of ['P02-c-34','P02-c-35','P02-d','P02-e','P04-a','P04-b','P04-c']){const r=byId.get('Q-2022-FINAL2-'+s);assert.equal(r.status,'needs-review');assert.equal(r.note_path,null);assert.ok(r.verification.solution.length>500);}
 for(const s of ['P02-a-23','P02-a-35','P02-b','P06-a-expectation','P06-a-variance','P06-c'])assert.equal(byId.get('Q-2022-FINAL2-'+s).status,'in-scope');
 const order=['M','P','J','H','A','a','B','b','C','c'],pairs=[['M','P'],['J','H'],['A','a'],['B','b'],['C','c']];let ea=0,eb=0,ec=0;const marginals=Object.fromEntries(order.map(x=>[x,Array(10).fill(0)]));
 for(let k=0;k<10;k++){const row=order.slice(k).concat(order.slice(0,k)),adj=(a,b)=>Math.abs(row.indexOf(a)-row.indexOf(b))===1;row.forEach((x,i)=>marginals[x][i]++);if(adj('M','P')&&adj('P','J')&&adj('J','H'))ea++;if(pairs.every(([a,b])=>adj(a,b)))eb++;if(pairs.every(([a,b])=>!adj(a,b)))ec++;}
 assert.deepEqual([ea,eb,ec],[7,5,0]);for(const row of Object.values(marginals))assert.deepEqual(row,Array(10).fill(1));
 assert.match(byId.get('Q-2022-FINAL1-P05-b').verification.solution,/6 couples[\s\S]*mix this rotation distribution/);
 // Compute both allowed-door interpretations independently; only a/b agree.
 const law=excludeChosen=>{let marginal=0,joint=0;for(let w=1;w<=5;w++){const goats=[1,2,3,4,5].filter(d=>d!==w&&(!excludeChosen||d!==1));const pairs=[];for(let i=0;i<goats.length;i++)for(let j=i+1;j<goats.length;j++)pairs.push([goats[i],goats[j]]);for(const [a,b]of pairs)if(a===3&&b===4){marginal+=1/(5*pairs.length);if(w===2)joint+=1/(5*pairs.length);}}return[marginal,joint/marginal];};
 for(const [actual,expected]of [[law(true),[1/6,2/5]],[law(false),[1/10,1/3]]])actual.forEach((x,i)=>assert.ok(Math.abs(x-expected[i])<1e-12));
 assert.match(byId.get('Q-2022-FINAL2-P04-a').verification.solution,/EX=∞/);
 assert.match(byId.get('Q-2022-FINAL2-P01').verification.solution,/two parallel ab edges/);
 // Exact rounding for every small quartile interval, not an assumed exact quarter reduction.
 for(let L=1;L<=1000;L++){const right=L-1-Math.floor((L-1)/4);assert.ok(right<=3*L/4);assert.ok(right>=3*(L-1)/4);}
});

test('Task11 live source bytes recompute for every inventory path and the exact duplicate pair',()=>{
 const sources=JSON.parse(readFileSync('knowledge_base/06-Audit/source-inventory.json','utf8')).sources;
 const disk=readdirSync('knowledge_base/past_paper').filter(f=>f.toLowerCase().endsWith('.pdf')).map(f=>'knowledge_base/past_paper/'+f).sort();
 assert.deepEqual(sources.map(s=>s.source_pdf).sort(),disk,'inventory covers live PDF filenames');
 const groups=new Map();
 for(const s of sources){
  const actual=sha(readFileSync(s.source_pdf));assert.equal(actual,s.sha256,s.source_pdf);
  const members=groups.get(actual)??[];members.push(s.source_pdf);groups.set(actual,members);
 }
 assert.deepEqual([...groups.values()].filter(g=>g.length>1).map(g=>g.sort()),[['knowledge_base/past_paper/COMP2711_S2023_Final.pdf','knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf']]);
 assert.deepEqual(sources.filter(s=>s.duplicate_of).map(s=>[s.source_pdf,s.duplicate_of]),[['knowledge_base/past_paper/COMP2711_S2023_Final.pdf','knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf']]);
 assert.equal(groups.size,sources.filter(s=>s.duplicate_of===null).length);
});

test('Task11 2023 midterms have direct per-ID review and source-scoped ambiguity controls',()=>{
 for(const r of audit.filter(r=>/^Q-2023[SF]-MID-/.test(r.id)))for(const k of ['transcription','scope','solution'])assert.ok(r.verification?.[k]?.length>50,r.id+' '+k);
 for(const r of audit.filter(r=>/^Q-2023[SF]-MID-/.test(r.id)&&r.status==='in-scope'))assert.ok(r.final_review?.conclusion_check?.length>80,r.id);
 const logarithm=byId.get('Q-2023S-MID-P08-d');assert.equal(logarithm.status,'needs-review');assert.equal(logarithm.note_path,null);assert.match(logarithm.verification.solution,/b=10[\s\S]*b=√2/);
 assert.ok(2/Math.log2(10)<2);assert.ok(Math.abs(2/Math.log2(Math.sqrt(2))-4)<1e-12);
 assert.equal(byId.get('Q-2023S-MID-P08-c').status,'in-scope');
 const antennas=byId.get('Q-2023F-MID-P07');assert.equal(antennas.status,'needs-review');assert.equal(antennas.note_path,null);assert.match(antennas.verification.solution,/every subset now has positive probability/);
 for(const [sets,expected]of [[[[1,3],[2,4]],1],[[[1,2],[3,4]],0]]){const marginals=[0,0,0,0];let good=0;for(const [a,b]of sets){marginals[a-1]+=.5;marginals[b-1]+=.5;if(b-a>1)good+=.5;}assert.deepEqual(marginals,[.5,.5,.5,.5]);assert.equal(good,expected);}
 for(const suffix of ['ii','iii']){const r=byId.get('Q-2023F-MID-P03-b-'+suffix);assert.equal(r.answer_source,'official');assert.equal(r.source_correction,undefined);assert.match(r.verification.transcription,/C, C, U/);}
 const crt=byId.get('Q-2023S-MID-P05');assert.ok(!crt.verification.scope.includes('nonunit coefficients'));assert.match(crt.verification.scope,/coefficients other than1/);
 assert.match(byId.get('Q-2023S-MID-P07-b').verification.solution,/private-key encoding/);
 assert.match(byId.get('Q-2023F-MID-P04-d').verification.solution,/only one subdivision vertex|Only one subdivision vertex/);
});

test('Task11 2023 Final probability quarantines retain weighted sampling and finite-mean countermodels',()=>{
 for(const suffix of ['P02-a-i','P02-a-ii','P04-c']){const r=byId.get('Q-2023F-FINAL-'+suffix);assert.equal(r.status,'needs-review');assert.equal(r.note_path,null);assert.ok(r.verification.transcription.length>200);assert.ok(r.verification.solution.length>400);}
 const weighted=(b,g,k)=>k===1?2*g/(b+2*g):(b?b/(b+2*g)*weighted(b-1,g,k-1):0)+(g?2*g/(b+2*g)*weighted(b,g-1,k-1):0);
 assert.ok(Math.abs(5/11*4/10*3/9*6/8-1/22)<1e-12);assert.ok(Math.abs(weighted(5,3,4)-100/231)<1e-12);assert.notEqual(100/231,3/8);
 assert.match(byId.get('Q-2023F-FINAL-P04-c').verification.solution,/EK=−Σ1=−∞/);
 const kept=byId.get('Q-2023F-FINAL-P04-d'),t=readFileSync(kept.note_path,'utf8');assert.equal(kept.status,'in-scope');assert.ok(!t.includes('[[Q-2023F-FINAL-P04-c'));
 assert.match(section(t,'Detailed Solution'),/finite uniform average[\s\S]*contradicting/);assert.match(section(t,'Detailed Solution'),/有限个值的均匀平均/);
 assert.match(byId.get('Q-2023F-FINAL-P08-a').verification.solution,/finitely many steps[\s\S]*k\+1/);
 assert.match(byId.get('Q-2023F-FINAL-P10').verification.transcription,/scale-to3200[\s\S]*outside inner while/);
});

test('Task11 2018 Midterm coverage and high-resolution nondefect evidence are explicit',()=>{
 const f=JSON.parse(readFileSync('scripts/tests/fixtures/task11-2018-mid.json','utf8'));
 assert.deepEqual(Object.keys(f.questions).sort(),audit.filter(r=>r.source_pdf==='knowledge_base/past_paper/2018-midterm.pdf'&&r.status==='in-scope').map(r=>r.id).sort());
 const odd=byId.get('Q-2018-MID-P03-b');assert.equal(odd.answer_source,'official');assert.ok(!odd.source_correction);assert.match(odd.verification.solution,/scale-to3000[\s\S]*divisibility bar, not an equality/);
 for(const suffix of ['P04-c','P07-c']){const r=byId.get('Q-2018-MID-'+suffix);assert.equal(r.answer_source,'official');assert.ok(r.source_correction);assert.ok(readFileSync(r.note_path,'utf8').includes(r.source_correction));}
 assert.match(byId.get('Q-2017-FINAL-P13-b').source_correction,/undefined v_\(n\+1\)/);
});

test('Task11 generic per-ID renderer never invents absent evidence or promotes a quarantine',()=>{
 const rows=[{id:'Q-FUTURE-A',source_pdf:'future.pdf',source_page:2,status:'in-scope',answer_source:'derived',note_path:null},
  {id:'Q-FUTURE-B',source_pdf:'future.pdf',source_page:3,status:'needs-review',note_path:null,verification:{transcription:'Viewed page3',scope:'Uncertain domain',solution:'Countermodel: A | B'}},
  {id:'Q-FUTURE-C',source_pdf:'future.pdf',source_page:4,status:'in-scope',note_path:null}];
 const source={sources:[{source_pdf:'future.pdf'}]},text=renderExtractionAudit('.',source,{questions:rows});
 assert.match(text,/\| Q-FUTURE-A \| in-scope \|/);
 assert.match(text,/\| Q-FUTURE-B \| needs-review \|/);
 assert.match(text,/NOT RECORDED — source review required/);
 assert.ok(text.includes('Countermodel: A \\| B'));
 assert.ok(text.includes('**0/2**'));
 assert.match(text,/NOT RECORDED — provenance review required/);
 assert.equal(text,renderExtractionAudit('.',source,{questions:rows}));
});

test('Task11 2018 Final coverage, exact corrections and quarantine countermodels remain source-scoped',()=>{
 const f=JSON.parse(readFileSync('scripts/tests/fixtures/task11-2018-final.json','utf8'));
 assert.deepEqual(Object.keys(f.questions).sort(),audit.filter(r=>r.source_pdf==='knowledge_base/past_paper/2018-final.pdf'&&r.status==='in-scope').map(r=>r.id).sort());
 for(const suffix of ['P01-a','P01-c','P07-1-E1','P07-1-E2','P07-1-conditional','P07-2-E1','P07-2-E2','P07-2-conditional','P08-b','P08-c']){const r=byId.get('Q-2018-FINAL-'+suffix);assert.equal(r.status,'needs-review');assert.equal(r.note_path,null);assert.ok(r.verification.transcription.length>100);assert.ok(r.verification.solution.length>200);}
 assert.equal(byId.get('Q-2018-FINAL-P08-a').status,'in-scope');
 assert.match(byId.get('Q-2018-FINAL-P01-a').verification.solution,/E\(X⁺\)=E\(X⁻\)[\s\S]*undefined/);
 assert.match(byId.get('Q-2018-FINAL-P01-c').verification.solution,/S=T=U=N[\s\S]*undefined/);
 // Two balls sharing a fair box preserve both marginals, but not iid variance/emptiness.
 const X=[2,0],Y=[1,1],mean=X.reduce((s,x)=>s+x/2,0),variance=X.reduce((s,x)=>s+(x-mean)**2/2,0);
 assert.equal(mean,1);assert.equal(variance,1);assert.equal(Y.reduce((s,y)=>s+y/2,0),1);assert.notEqual(variance,2*(2-1)/2**2);
 const red=.75*.1+.25*.9,joint=.75*.1**2+.25*.9**2;assert.ok(Math.abs(red-.3)<1e-12);assert.ok(Math.abs(joint/red-.7)<1e-12);
 for(const suffix of ['P03-a','P04-a','P09-a']){const r=byId.get('Q-2018-FINAL-'+suffix);assert.equal(r.answer_source,'official');assert.ok(r.source_correction);assert.ok(readFileSync(r.note_path,'utf8').includes(r.source_correction));}
 const d=byId.get('Q-2018-FINAL-P12-b');assert.equal(d.answer_source,'derived');assert.match(d.source_correction,/positive on all reals/);
 for(const x of [-10,0,10]){assert.ok(2**x>0);assert.equal((2*2**x)/(2**x),2);}
 assert.equal(35+14+10-7-5-2+1,46);assert.equal(70-46,24);
});

test('Task11 batch1 approved quarantines retain concrete models and no Question note',()=>{
 const ids=['Q-2013-MID-P05-a','Q-2013-MID-P05-b','Q-2013-MID-P05-c','Q-2014-MID-P02-c','Q-2014-MID-P07-expectation','Q-2014-MID-P07-n100','Q-2015-MID-P05','Q-2015-FINAL-P02-a','Q-2015-FINAL-P02-b','Q-2015-FINAL-P02-d','Q-2015-FINAL-P03-a','Q-2015-FINAL-P03-b','Q-2015-FINAL-P04-a','Q-2015-FINAL-P04-b','Q-2016-MID-P07-a','Q-2016-MID-P07-b','Q-2016-MID-P07-c','Q-2016-FINAL-P08'];
 const notes=readdirSync('knowledge_base/04-Questions');
 for(const id of ids){const r=byId.get(id);assert.equal(r.status,'needs-review',id);assert.equal(r.note_path,null,id);assert.ok(r.exclusion_reason.length>100,id);assert.ok(r.verification.transcription,id);assert.ok(r.verification.solution.length>100,id);assert.ok(!notes.some(n=>n.startsWith(id+' - ')),id);assert.ok(!Object.hasOwn(r,'syllabus_status'),id+' audit uses canonical status');}
 assert.match(byId.get('Q-2014-MID-P02-c').verification.solution,/80[\s\S]*8/);
 assert.match(byId.get('Q-2015-FINAL-P02-d').verification.solution,/900[\s\S]*15/);
 assert.match(byId.get('Q-2016-MID-P07-b').verification.solution,/3\/10/);
 assert.match(byId.get('Q-2016-FINAL-P08').verification.solution,/−n³[\s\S]*unbounded/);
 assert.equal(byId.get('Q-2015-FINAL-P02-c').status,'in-scope','linearity-only expectation stays admitted');
});
for(const name of fixtures){
 const fixture=JSON.parse(readFileSync('scripts/tests/fixtures/'+name,'utf8'));
 test('Task 11 source and Chinese proof checkpoints: '+name,()=>{
  for(const [id,f] of Object.entries(fixture.questions)){
   const r=byId.get(id);assert.ok(r?.note_path,id);
   const t=readFileSync(r.note_path,'utf8'),p=parseFrontmatter(t).properties;
   assert.doesNotMatch(t,/[\u0000-\u0008\u000B-\u001F]/,id+' control-byte contamination');
   assert.equal(r.status,'in-scope',id+' disposition');
   assert.equal(p.source_pdf,f.source_pdf,id);assert.equal(p.source_page,f.source_page,id);
   assert.deepEqual(p.solution_page??null,f.solution_page,id);assert.equal(p.answer_source,f.answer_source,id);
   assert.equal(sha(section(t,'Question')),f.prompt_sha256,id+' original request');
   assert.ok(r.verification.transcription.includes('page '+f.source_page),id);
   assert.ok(r.verification.solution.includes('Independent check:'),id);
   checkChinese(t,f.checkpoints,id);
  }
 });
 test('Task 11 negative controls reject approach-only or removed proof steps: '+name,()=>{
  for(const [id,f] of Object.entries(fixture.questions)){
   const t=readFileSync(byId.get(id).note_path,'utf8');
   const approach=t.replace(/### 中文解答[\s\S]*?(?=\n## Common Mistakes)/,'### 中文解答\n\n**推导。** 先考虑相关定义，再计算和核对答案。\n');
   assert.throws(()=>checkChinese(approach,f.checkpoints,id),undefined,id);
   const checklist='**推导。** 先考虑定义，随后计算。\n\n待使用的检查点（尚未推导）：\n'+f.checkpoints.map(token=>'`'+token+'`').join('\n');
   const noReasoning=t.replace(/### 中文解答[\s\S]*?(?=\n## Common Mistakes)/,()=> '### 中文解答\n\n'+checklist+'\n');
   for(const token of f.checkpoints)assert.ok(noReasoning.includes(token),'negative control must preserve '+token);
   assert.throws(()=>checkChinese(noReasoning,f.checkpoints,id),undefined,id+' checklist-only case retaining every checkpoint');
   for(const token of f.checkpoints)assert.throws(()=>checkChinese(t.replaceAll(token,'[removed]'),f.checkpoints,id),undefined,id+' '+token);
  }
 });
}
