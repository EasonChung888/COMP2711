"""Snapshot actual matching originals only after all explanations are committed."""
from pathlib import Path
from fractions import Fraction
from itertools import permutations, product
from math import factorial
import importlib.util
import json
import re
from practice_answers import answer_fields, metadata_fields

spec=importlib.util.spec_from_file_location('practice',Path(__file__).with_name('chapter-practice.py'))
shared=importlib.util.module_from_spec(spec);spec.loader.exec_module(shared)
chapter=shared.ROOT/'chapters/l1-9'
manifest=json.loads((chapter/'manifest.json').read_text())
assert len(manifest['pages'])==32 and all(p['status']=='written' for p in manifest['pages'])
REVIEW={
 'Q-2020-FINAL2-P06-a':'选择唯一固定位置有 10 种，其余九位必须错排，10D9=1334960。以九元素全排列枚举与错排递推交叉核验；首位可以为 0。',
 'Q-2020-FINAL2-P06-c':'固定 0、1 两位互换，其余八个元素任意排列，8!=40320；没有额外错排要求。',
 'Q-2020-FINAL2-P06-d':'指定两个固定位置后，其余八位无约束，8!=40320；允许更多固定点，不能用 D8。',
 'Q-2019-FINAL-P08-a':'六位小写字母串允许重复。用补集排除无 a 的 25^6 个串，26^6−25^6。以是否出现 a 的状态动态规划独立检查。保留原计数题，不改为概率题。',
 'Q-2019-FINAL-P08-b':'要求 a、b 均出现，用补集与容斥得 26^6−2×25^6+24^6；四状态动态规划独立核验。',
 'Q-2020-FINAL1-P04-a':'原范围 0≤n<1000 包含 0，各整除类均计入 0。最小公倍数交集给 734，枚举全部 1000 个整数核验。共享题干在第 2 页，题目与答案在第 3 页。',
 'Q-2025S-FINAL-P10':'九格二色有 512 个等可能结果，四个 2×2 红方块事件容斥得坏结果 95、好结果 417。枚举 512 种格局与交集固定格数双重核验，答案 417/512。',
 'Q-2016-FINAL-P03-a-1':'保留完整印刷 3(a) 对 A1/A2 两个边际的提问，只计一道原题。选择骰子与当前朝上面的 12 种组合等可能，8 种满足条件，两个边际各 2/3。无需假设两次掷骰独立；排除本卷依赖未明确独立性的后续精确联合计算题。',
 'Q-2017-FINAL-P06-b':'单行同类有全 H、全 T 两种，q=2/256=1/128。不同八行使用互不相交的独立硬币，恰好一行同类概率 8q(1−q)^7。只需事件、计数和独立乘法，不需要期望或方差。以八行状态的分组计数核验。'
}

def checks():
 d=[1,0]
 for n in range(2,10):d.append((n-1)*(d[n-1]+d[n-2]))
 enum=sum(all(i!=v for i,v in enumerate(p)) for p in permutations(range(9)))
 assert enum==d[9]==133496
 dp=[1,0,0,0]
 for _ in range(6):
  nxt=[0]*4
  for mask,count in enumerate(dp):
   for bit,choices in [(0,24),(1,1),(2,1)]:nxt[mask|bit]+=count*choices
  dp=nxt
 assert dp[1]+dp[3]==26**6-25**6 and dp[3]==26**6-2*25**6+24**6
 assert sum(any(n%d==0 for d in [2,3,5]) for n in range(1000))==734
 squares=[{3*r+c,3*r+c+1,3*(r+1)+c,3*(r+1)+c+1} for r in range(2) for c in range(2)]
 good=sum(not any(all(bits[i] for i in sq) for sq in squares) for bits in product([0,1],repeat=9))
 assert good==417
 assert 4*32-(4*8+2*4)+4*2-1==512-good
 dice=[(d,f) for d in range(2) for f in range(6)]
 assert Fraction(sum(d==1 or f<2 for d,f in dice),12)==Fraction(2,3)
 rowgood=sum(len(set(bits))==1 for bits in product([0,1],repeat=8))
 count=sum(2**sum(flags)*254**(8-sum(flags)) for flags in product([0,1],repeat=8) if sum(flags)==1)
 prob=Fraction(count,256**8)
 assert rowgood==2 and prob==8*Fraction(1,128)*Fraction(127,128)**7
 return dict(D9=enum,oneFixedPoint=10*enum,fixedTwo=factorial(8),containsA=dp[1]+dp[3],containsAB=dp[3],multiples=734,gridGood=good,gridTotal=512,diceMarginals='2/3',oneHomogeneousRow=str(prob))

if __name__=='__main__':
 evidence=checks();config=json.loads((chapter/'course.config.json').read_text());results=[]
 for topic in config['topics']:
  for ident in topic['questions']:
   matches=list(shared.KB.glob(ident+' - *.md'));assert len(matches)==1
   source=matches[0];text=source.read_text();meta=metadata_fields(text)
   assert meta['verification_status']=='verified' and meta['answer_source']=='official'
   question,stems=shared.printed_question(text,chapter)
   # Editorial atomic focus is not printed wording. Full original 3(a) is kept.
   question=re.sub(r'^Atomic focus \[editorial\]:.*\n?', '',question,flags=re.M).strip()
   paper=shared.REPO/meta['source_pdf']
   stem_pages=[metadata_fields((shared.KB/'Stems'/f'{stem}.md').read_text())['source_page'] for stem in stems]
   results.append(dict(id=ident,topic=topic['slug'],sourceNote=shared.snapshot(source,chapter,'notes'),sourceNoteSha256=shared.sha(source),stems=stems,stemPages=stem_pages,paper=meta['source_paper'].replace('[[','').replace(']]',''),pdf=shared.snapshot(paper,chapter,'papers'),pdfSha256=shared.sha(paper),page=meta['source_page'],solutionPages=meta.get('solution_page',[]),number=meta['question_number'],marks=meta.get('marks'),verificationStatus='verified',answerSource='official',questionMarkdown=question,**answer_fields(text),independentVerification=REVIEW[ident]))
 (chapter/'practice.json').write_text(json.dumps(results,ensure_ascii=False,indent=2)+'\n')
 audit=chapter/'sources/audit';audit.mkdir(exist_ok=True)
 lines=['# L1.9 原题独立核验','全部 32 页入站后才检索与选题。逐题查看印刷原题和官方答案，独立推导及枚举/动态规划交叉验证，共 9 道原题。','基础课没有找到只依赖该课内容的独立原题，保留 0 道。排列课 3 道，补事件课 1 道，容斥课 3 道，分布课 1 道，独立事件课 1 道。没有凑数、改题或新增选择题。','计数题保留原计数要求，用于相应概率方法的分子计数练习。生日主题没有直接匹配原题。未选入需要 Bayes、期望、方差、图论连通性或递推解法的题；2016 3(e) 的官方计算有未印明独立性前提，也不选入。','2016 3(a) 完整提问含两个边际，只选择一条题库原子，不重复计数。显示去掉非印刷的 Atomic focus 编辑说明，题库快照保持原样。','## 独立计算证据','```json',json.dumps(evidence,ensure_ascii=False,indent=2),'```']
 for q in results:lines += [f"## {q['id']}",q['independentVerification'],f"{q['paper']}：原题第 {q['page']} 页；共享题干页 {q['stemPages']}；官方答案页 {q['solutionPages']}。"]
 (audit/'l1-9-question-review.md').write_text('\n\n'.join(lines)+'\n')
 (audit/'numerical-checks.json').write_text(json.dumps(evidence,indent=2)+'\n')
 print(f'{len(results)} original questions independently verified')
