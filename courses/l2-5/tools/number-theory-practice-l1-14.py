"""Snapshot original exercises only after all 92 serial explanations are written."""
import importlib.util,json,math
from datetime import datetime,timezone
from pathlib import Path
from practice_answers import answer_fields,metadata_fields
spec=importlib.util.spec_from_file_location('s',Path(__file__).with_name('chapter-practice.py'))
s=importlib.util.module_from_spec(spec);spec.loader.exec_module(s)
chapter=s.ROOT/'chapters/l1-14'
for id in ['l1-12','l1-13','l1-14']:
 m=json.loads((s.ROOT/'chapters'/id/'manifest.json').read_text())
 assert len(m['pages'])==m['pageCount'] and all(p['status']=='written' for p in m['pages'])
selection={
 'secret-key-ciphers':[],
 'modular-exponentiation':['Q-2019-MID-P12','Q-2016-FINAL-P04-a','Q-2023F-FINAL-P06-b'],
 'fermat-little-theorem':['Q-2022-MID-P07-a','Q-2025S-MID-P06-b','Q-2024S-MID-P11'],
 'diffie-hellman':['Q-2021-MID-P05'],
 'rsa-and-public-keys':['Q-2019-MID-P11-c','Q-2024S-MID-P09','Q-2025F-FINAL-P07-iii'],
 'rsa-correctness':['Q-2013-FINAL-P04','Q-2021-MID-P07','Q-2015-FINAL-P07-a']}
checks={
'Q-2019-MID-P12':'Independently squared to i=10: residues8,20,4,16,14,20,4,16,14,20,4; selected2^10+2+1 gives4*20*8 mod22=2. No coprimality needed.',
'Q-2016-FINAL-P04-a':'1161=1024+128+8+1. Independent square table6,36,92,36,92,36,92,36,92,36,92; selected product gives216 mod602. Noncoprime base valid for repeated squaring.',
'Q-2023F-FINAL-P06-b':'17 mod14=3;3^3=-1 mod14;2023=674*3+1 and674 is even, so remainder3. Independent modular pow gives3.',
'Q-2022-MID-P07-a':'109 prime (trial divisors2,3,5,7). 542=5*108+2; base2 nonzero, FLT yields4. Independent pow gives4.',
'Q-2025S-MID-P06-b':'47 mod11=3;FLT period10. Exponent37^27 mod10 independently equals3 via7^4=1 and27 mod4=3;final3^3 mod11=5. Nested exponent reduced under different modulus.',
'Q-2024S-MID-P11':'For prime p>=7, p divides neither10 nor9. Telescoping9*(1+10+...+10^(p-2))=10^(p-1)-1 and FLT imply9S=0 modp;inverse9 givesS=0. Checked representative primes7..199 with modular summation; proof covers all.',
'Q-2021-MID-P05':'31 prime;34*41=1394=46*30+14.17^2,17^4,17^8 mod31=10,7,18;product1260 mod31=20. Independent two-party calculations both20.',
'Q-2019-MID-P11-c':'Substitute message720<n989 and public exponent53 in encryption C=m^e modn. No private exponent required. Original shared context preserved.',
'Q-2024S-MID-P09':'23 and37 prime, n851 andT792. Extended Euclid yields233*17-5*792=1. Inverse233 checked directly; all x=0..850 round-trip using e17,d233 including nonunits.',
'Q-2025F-FINAL-P07-iii':'3^2 mod77=9 and3^4 mod77=4;7=4+2+1;4*9*3 mod77=31. Original prompt omits modulus after m^e; named RSA context and official solution specify77. Wording retained.',
'Q-2013-FINAL-P04':'7 and11 prime;46 nonzero mod both;120 multiple of6 and10. FLT gives1 modulo7,11;CRT unique standard representative modulo77 is1. Direct pow confirms. Printed solution uses4 in second modulus where46 mod11=2; conclusion remains1, correct derivation preserved in supplement and separate review note.',
'Q-2021-MID-P07':'For distinct primes p,q, p nonzero modq and q nonzero modp. FLT term gives1 and other positive-power term0 separately. Coprime divisibility gives1 modpq, including prime2. Enumerated all distinct primes<=199 as numerical cross-check.',
'Q-2015-FINAL-P07-a':'48 divisible by2,4,6;given a nonzero modulo3,5,7. Thus a^49=a modulo each;CRT gives equal standard residues modulo105. Independently enumerated all a in0..104 with gcd(a,105)=1.'}
# Arithmetic verification is independent of the KB answer text parser.
assert pow(8,1027,22)==2 and pow(6,1161,602)==216 and pow(17,2023,14)==3
assert pow(2,542,109)==4 and pow(37,27,10)==3 and pow(47,pow(37,27),11)==5
assert pow(17,34*41,31)==pow(pow(17,34,31),41,31)==pow(pow(17,41,31),34,31)==20
assert pow(17,-1,792)==233 and all(pow(pow(x,17,851),233,851)==x for x in range(851))
assert pow(3,7,77)==31 and pow(46,120,77)==1
primes=[p for p in range(2,200) if all(p%d for d in range(2,math.isqrt(p)+1))]
assert all((pow(p,q-1,p*q)+pow(q,p-1,p*q))%(p*q)==1 for p in primes for q in primes if p!=q)
assert all(sum(pow(10,k,p) for k in range(p-1))%p==0 for p in primes if p>=7)
assert all(pow(a,49,105)==a for a in range(105) if math.gcd(a,105)==1)
config=json.loads((chapter/'course.config.json').read_text());results=[]
now=datetime.now(timezone.utc).isoformat()
with (chapter/'events.jsonl').open('a') as f:f.write(json.dumps(dict(time=now,event='practice_selection_started',sourceId='l1-14',basis='all 92 explanations written before selection'))+'\n')
for topic in config['topics']:
 topic['questions']=selection[topic['slug']]
 for qid in topic['questions']:
  src,=s.KB.glob(qid+' - *.md');txt=src.read_text();meta=metadata_fields(txt)
  assert meta['verification_status']=='verified' and meta['answer_source']=='official'
  question,stems=s.printed_question(txt,chapter)
  paper=s.REPO/meta['source_pdf'];stem_pages=[]
  for st in stems:
   sm=metadata_fields((s.KB/'Stems'/(st+'.md')).read_text());stem_pages.append(sm['source_page'])
  q=dict(id=qid,topic=topic['slug'],sourceNote=s.snapshot(src,chapter,'notes'),sourceNoteSha256=s.sha(src),stems=stems,stemPages=stem_pages,paper=meta['source_paper'].replace('[[','').replace(']]',''),pdf=s.snapshot(paper,chapter,'papers'),pdfSha256=s.sha(paper),page=meta['source_page'],solutionPages=meta.get('solution_page',[]),number=meta['question_number'],marks=meta.get('marks'),verificationStatus='verified',answerSource='official',questionMarkdown=question,independentVerification=checks[qid],**answer_fields(txt))
  if qid=='Q-2013-FINAL-P04':
   q['reviewMarkdown']='The printed solution uses $4$ as the reduced base in the modulo-$11$ line, although $46\\bmod11=2$. Its final answer is still correct. Use $46^{120}=(46^{10})^{12}\\equiv1\\pmod{11}$ (or use base $2$), together with the modulo-$7$ result. The Official Answer is preserved verbatim; the Supplementary Explanation gives the correct argument.'
  if qid=='Q-2025F-FINAL-P07-iii':
   q['reviewMarkdown']='The printed prompt ends with $c=m^e$ without writing the modulus. The RSA context and the official solution specify $c=m^e\\bmod77$; the original prompt is retained.'
  results.append(q)
(chapter/'course.config.json').write_text(json.dumps(config,ensure_ascii=False,indent=2)+'\n')
(chapter/'practice.json').write_text(json.dumps(results,ensure_ascii=False,indent=2)+'\n')
audit=chapter/'sources/audit/l1-14-question-review.md';audit.parent.mkdir(parents=True,exist_ok=True)
lines=['# L1.14 原题与答案独立核验','',f'真实选题开始：{now}。三章92页全部written后才开始。','', '原题、共享题干、Official Answer、Supplementary Explanation均从知识库快照保留。每题对照源PDF物理页；2013试卷扫描页另外渲染目视核对。','']
for t in config['topics']:
 lines.extend([f"## {t['title']} — {len(t['questions'])} 题",''])
 if not t['questions']:lines+=['已搜索全部题库的 Caesar/shift/affine/AES/secret key/block cipher 等主题；没有找到直接匹配且带可核验官方答案的原题，保留0题。','']
 if t['slug']=='diffie-hellman':lines+=['题库仅找到1道直接匹配的 Diffie–Hellman 原题，保留实际数量。费马小定理课安排在此课之前，以满足题目先修知识。','']
 for q in results:
  if q['topic']==t['slug']:
   lines += [f"### {q['id']}",f"来源：{q['paper']}，物理第{q['page']}页；答案页{q['solutionPages']}。",q['independentVerification']]
   if q.get('reviewMarkdown'):lines+=['印刷原文说明（不改原文）：'+q['reviewMarkdown']]
   lines+=['']
audit.write_text('\n'.join(lines)+'\n')
with (chapter/'events.jsonl').open('a') as f:f.write(json.dumps(dict(time=datetime.now(timezone.utc).isoformat(),event='practice_selection_completed',sourceId='l1-14',questions=len(results)))+'\n')
print('L1.14:',len(results),'independently checked original questions')
