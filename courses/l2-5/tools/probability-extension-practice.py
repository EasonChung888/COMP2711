"""Append-only snapshots for L1.10/11. Run only after both serial manifests finish."""
from pathlib import Path
import importlib.util
import json
import re
from fractions import Fraction as F
from itertools import permutations, combinations
from math import comb
from practice_answers import answer_fields, metadata_fields

spec=importlib.util.spec_from_file_location('shared',Path(__file__).with_name('chapter-practice.py'))
s=importlib.util.module_from_spec(spec);spec.loader.exec_module(s)

# Independent rational calculations, separate from the official answer parser.
assert F(5,10)/(F(7,10)+F(4,10)-F(2,10))==F(5,9)
placements=list(permutations(range(1,15),3))
assert F(sum(a==1 for a,b,c in placements if a<b),sum(a<b for a,b,c in placements))==F(1,7)
assert F(sum(a==7 for a,b,c in placements if c<a<b),sum(c<a<b for a,b,c in placements))==F(3,26)
assert F(4,5)/(F(4,5)+F(1,2))==F(8,13)
assert F(7,10)*F(9,10)/(F(7,10)*F(9,10)+F(3,10)*F(1,5))==F(21,23)
assert F(1,6)*F(3,4)/(F(1,6)*F(3,4)+F(5,6)*F(1,4))==F(3,8)
prior={1:F(1,2),2:F(3,10),3:F(1,5)}
joint={(1,2):F(1,4),(1,3):F(1,4),(2,3):F(3,10),(3,2):F(1,5)}
assert joint[1,2]/sum(v for (w,m),v in joint.items() if m==2)==F(5,9)
assert joint[1,3]/sum(v for (w,m),v in joint.items() if m==3)==F(5,11)
assert joint[1,2]+joint[2,3]==F(11,20)
assert sum(v for w,v in prior.items() if w!=3)==F(4,5)
assert len(list(combinations([2,3,4,5],2)))==6
assert not any(2 in p for p in combinations([1,3,4,5],2))
rowq=F(2,2**8)
dist={k:F(comb(8,k))*rowq**k*(1-rowq)**(8-k) for k in range(9)}
mean=sum(k*p for k,p in dist.items());var=sum((k-mean)**2*p for k,p in dist.items())
assert sum(dist.values())==1 and mean==F(1,16) and var==F(127,2048)
dieMean=F(sum(range(1,7)),6);dieVar=sum((F(k)-dieMean)**2/F(6) for k in range(1,7))
assert dieVar==F(35,12) and 100*dieVar==F(875,3)
assert F(sum(range(2,13)),11)*5==35

# Keep definitions/properties/applications together; only move page ownership.
configs={
 'l1-10':dict(title='条件概率与 Bayes 推断',subtitle='Conditional Probability & Bayes’ Theorem',topics=[
  ('conditional-probability','条件概率与独立性','在已知事件下缩小样本空间，连接乘法法则、生日问题与独立性。',list(range(1,9)),['Q-2020-FINAL2-P03','Q-2025F-FINAL-P03-a','Q-2025F-FINAL-P03-c']),
  ('bayesian-inference','Bayes 推断与全概率','从检验结果、盒子、垃圾邮件及生产来源更新先验概率。',list(range(9,21)),['Q-2017-FINAL-P05-a','Q-2023F-MID-P08','Q-2025S-FINAL-P11']),
  ('monty-hall-strategies','Monty Hall 与条件决策','区分先验、主持人规则及观测后的最优决策，比较完整策略。',list(range(21,26)),['Q-2019-FINAL-P11','Q-2022-FINAL2-P02-a','Q-2022-FINAL2-P02-b'])]),
 'l1-11':dict(title='随机变量、期望与方差',subtitle='Random Variables, Expectation & Variance',topics=[
  ('random-variable-foundations','随机变量与分布','把试验结果映射为数值，按相同数值汇总概率。',[1,2,3],['Q-2017-FINAL-P06-a']),
  ('bernoulli-binomial-and-density','Bernoulli、二项分布与密度','从独立重复试验构造二项分布，认识离散概率与连续密度的差别。',[4,5,6,7],['Q-2017-FINAL-P06-b']),
  ('expectation-and-indicators','期望、线性性与指示变量','从加权平均到指示变量，分析帽子、雇用及球盒模型。',list(range(10,21)),['Q-2016-FINAL-P01-b','Q-2018-FINAL-P08-a','Q-2017-FINAL-P06-c']),
  ('average-case-algorithms','算法的平均情况分析','在明确输入分布后，用期望分析线性查找和插入排序。',[21,22,23,24],[]),
  ('geometric-waiting-times','几何分布与等待时间','连接首次成功的分布、期望等待次数及 Coupon Collector。',[8,9,25,26,27],[]),
  ('independent-random-variables','随机变量的独立性','检验联合概率，推导独立时的乘积期望，并比较相关变量。',[28,29,30],['Q-2016-FINAL-P02-d']),
  ('variance-and-averaging','方差、标准差与平均测量','计算波动大小，使用独立方差相加分析骰子、二项分布和平均值。',list(range(31,38)),['Q-2016-FINAL-P02-a','Q-2017-FINAL-P06-d','Q-2025F-MID-P10-a-iii'])])}

checks={
 'Q-2020-FINAL2-P03':'Venn masses (both,A only,B only,neither)=(.5,.2,.1,.2); denominator .9, numerator .5: 5/9.',
 'Q-2025F-FINAL-P03-a':'Enumerated all 14*13*12 ordered placements of A,B,C; among A taller than B, A at rank 1 occurs with conditional probability 1/7.',
 'Q-2025F-FINAL-P03-c':'Enumerated distinct ranks A,B,C; among C<A<B, A at rank 7 has 6*7 favorable placements, yielding 3/26.',
 'Q-2017-FINAL-P05-a':'Equal coin priors: (.5*.8)/(.5*.8+.5*.5)=8/13; first flip only, no other evidence.',
 'Q-2023F-MID-P08':'Bayes with send0=.7 and likelihoods .9,.2: .63/(.63+.06)=21/23.',
 'Q-2025S-FINAL-P11':'Independent die and truthfulness: P(6,YES)=1/6*3/4; P(YES)=1/6*3/4+5/6*1/4; ratio3/8.',
 'Q-2019-FINAL-P11':'Enumerated joint masses (.25,.25,.30,.20) for (W,M)=(1,2),(1,3),(2,3),(3,2). Posteriors5/9,4/9,5/11,6/11; keep/switch policy11/20; choose3 then switch4/5.',
 'Q-2022-FINAL2-P02-a':'Given W=1 the eligible set is {2,3,4,5}; enumerated six unordered pairs, each target has probability1/6. No ambiguity about opening the initial door affects this condition.',
 'Q-2022-FINAL2-P02-b':'Given W=2 every permitted goat-door pair excludes2; event{2,3} is impossible, probability0.',
 'Q-2017-FINAL-P06-a':'Eight rows each homogeneous if all64heads; X counts rows, so8.',
 'Q-2017-FINAL-P06-b':'Independent coins in disjoint rows give iid row indicators with q=2/256=1/128; independent rational binomial PMF gives P(X=1)=8q(1-q)^7.',
 'Q-2016-FINAL-P01-b':'Exact average of uniform integers2..12 is77/11=7; expectation of five-spin sum is35 without requiring independence.',
 'Q-2018-FINAL-P08-a':'X=sum of m indicators, each mean1/n; linearity givesm/n using only the explicitly supplied marginals, avoiding unwarranted independence.',
 'Q-2017-FINAL-P06-c':'Exact rational binomial PMF over0..8 independently gives mean1/16; equivalently8*(2/256).',
 'Q-2016-FINAL-P02-d':'Expand (an+b)(ap+b); independence and identical means give E(np)=m^2 and result a^2*m^2+2abm+b^2=(am+b)^2. Finite variance supplies integrability.',
 'Q-2016-FINAL-P02-a':'Centering: f(n)-E[f(n)]=a(n-m); square and average givesa^2*v for all reala,b includinga=0. Official first-line missing parenthesis retained as printed, supplementary derivation correct.',
 'Q-2017-FINAL-P06-d':'Exact rational binomial PMF over0..8 gives variance127/2048; independent disjoint rows justify8q(1-q).',
 'Q-2025F-MID-P10-a-iii':'Reconstructed printed joint request; exact single-die enumeration gives mean7/2,variance35/12; 50 positive and50 negative means cancel, 100 squared coefficients1 give variance875/3. Independence explicitly printed.'}

merged={
 'Q-2019-FINAL-P11':['Q-2019-FINAL-P11-a-W1','Q-2019-FINAL-P11-b-W1','Q-2019-FINAL-P11-c','Q-2019-FINAL-P11-d-strategy'],
 'Q-2022-FINAL2-P02-a':['Q-2022-FINAL2-P02-a-23','Q-2022-FINAL2-P02-a-35'],
 'Q-2025F-MID-P10-a-iii':['Q-2025F-MID-P10-a-iii-E','Q-2025F-MID-P10-a-iii-var']}

for chapter_id,config in configs.items():
 chapter=s.ROOT/'chapters'/chapter_id
 for cid in configs:
  assert all(p['status']=='written' for p in json.loads((s.ROOT/'chapters'/cid/'manifest.json').read_text())['pages'])
 config['storagePrefix']=f'comp2711:{chapter_id}:'
 config['topics']=[dict(zip(['slug','title','description','pages','questions'],t)) for t in config['topics']]
 (chapter/'course.config.json').write_text(json.dumps(config,ensure_ascii=False,indent=2)+'\n')
 results=[]
 for topic in config['topics']:
  for qid in topic['questions']:
   atoms=merged.get(qid,[qid]); parts=[]; notes=[]
   for atom in atoms:
    src,=s.KB.glob(atom+' - *.md');text=src.read_text();meta=metadata_fields(text)
    assert meta['verification_status']=='verified' and meta['answer_source']=='official'
    printed,stems=s.printed_question(text,chapter)
    note=s.snapshot(src,chapter,'notes');notes.append((src,text,meta,printed,stems,note))
    parts.append(dict(id=atom,sourceNote=note,sourceNoteSha256=s.sha(src),**answer_fields(text)))
   src,text,meta,printed,stems,note=notes[0]
   restoration=None
   if qid=='Q-2019-FINAL-P11':
    stem=s.KB/'Stems'/'STEM-2019-FINAL-P11 - Shared Problem Prompt.md'
    printed=s.local_media(s.section(stem.read_text(),'Shared printed wording'),chapter)
    restoration='Entire original problem11, parts(a)-(d), from the shared printed wording; no repeated atomic fragments. Official parts retain original source notes.'
   elif qid=='Q-2022-FINAL2-P02-a':
    stem=s.KB/'Stems'/'STEM-2022-FINAL2-P02 - Shared Problem Prompt.md'
    printed=s.local_media(s.section(stem.read_text(),'Shared printed wording'),chapter)+'\n\n'+r'(a) (2 pts) What is $P(M=\{2,3\}\mid W=1)$? What is $P(M=\{3,5\}\mid W=1)$?'
    restoration='Restored original combined2(a) from physical PDF page2; no independent atomic marks invented.'
   elif qid=='Q-2025F-MID-P10-a-iii':
    stem=s.KB/'Stems'/'STEM-2025F-MID-P10-a-iii - Shared Problem Prompt.md'
    printed=s.local_media(s.section(stem.read_text(),'Shared printed wording'),chapter)+'\n\n'+r'What are $E(Z)$ and $var(Z)$?'
    restoration='Restored original joint expectation-and-variance request from physical PDF page21. Original solution labels Z as(iv); preserved. Counts once.'
   paper=s.REPO/meta['source_pdf'];pdf=s.snapshot(paper,chapter,'papers')
   stem_pages=[]
   for stemname in stems:
    stemfile=s.KB/'Stems'/(stemname+'.md');sm=metadata_fields(stemfile.read_text());stem_pages.append(sm['source_page'])
   record=dict(id=qid,topic=topic['slug'],sourceNote=note,sourceNoteSha256=s.sha(src),stems=stems,stemPages=stem_pages,
    paper=meta['source_paper'].replace('[[','').replace(']]',''),pdf=pdf,pdfSha256=s.sha(paper),page=meta['source_page'],solutionPages=sorted(set(n for _,_,m,_,_,_ in notes for n in m.get('solution_page',[]))),
    number=meta['question_number'],marks=meta.get('marks'),verificationStatus='verified',answerSource='official',questionMarkdown=printed,
    independentVerification=checks[qid],**answer_fields(text))
   if qid in merged:record.update(answerParts=parts,originalRestoration=restoration)
   if qid=='Q-2019-FINAL-P11':record.update(number='11(a)–(d)',marks=11)
   if qid=='Q-2022-FINAL2-P02-a':record.update(number='2(a)',marks=2)
   if qid=='Q-2025F-MID-P10-a-iii':record.update(marks=2)
   results.append(record)
 (chapter/'practice.json').write_text(json.dumps(results,ensure_ascii=False,indent=2)+'\n')
 print(chapter_id,len(config['topics']),'lessons;',len(results),'original exercises')
