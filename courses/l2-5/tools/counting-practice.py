from practice_answers import answer_fields, metadata_fields
"""Snapshot original questions only after every new explanation is written."""
from pathlib import Path
from collections import Counter
from itertools import permutations, combinations, combinations_with_replacement
from math import comb, factorial
import importlib.util
import json
import re

spec = importlib.util.spec_from_file_location('chapter_practice', Path(__file__).with_name('chapter-practice.py'))
shared = importlib.util.module_from_spec(spec)
spec.loader.exec_module(shared)
ROOT, REPO, KB = shared.ROOT, shared.REPO, shared.KB
IDS = ('l1-6', 'l1-7')
REVIEW = {
 'Q-2014-MID-P02-a': '3n 个不同人物依次填入直线座位，乘积为 (3n)!。',
 'Q-2025F-MID-P04-a-i': '6+5=11 个不同人物，直线排列为 11!。',
 'Q-2025F-MID-P04-c-i': '按 A 的标签依次选不同 B 配偶，10×9×…×4=P(10,7)；不再除 7! 或 2^7。',
 'Q-2013-MID-P01-a': '12 个编号鸡蛋选 5 个，C(12,5)=792；颜色不影响此小题。',
 'Q-2014-MID-P01-a': '9 个不同候选人选 5 个无序成员，C(9,5)=126。',
 'Q-2018-MID-P07-a': '20 位员工选 5 人，C(20,5)=15504。',
 'Q-2014-MID-P02-b': 'n 个家庭块外排 n!，各块 3! 内排，乘积 n!(3!)^n；n=2 穷举交叉核验。',
 'Q-2014-MID-P02-d': 'n 个母子块加 n 位父亲共 2n 单位，每块两种方向，(2n)!2^n；n=2 穷举交叉核验。',
 'Q-2025F-MID-P04-a-iv': '5 学生创造 6 个间隙，6 教师恰好各占一隙，5!6!；职业序列穷举仅 TSTSTSTSTST 合法。',
 'Q-2017-MID-P09-a': '从 6 女选 2、9 男选 3，15×84=1260；成员集合唯一分解。',
 'Q-2017-MID-P09-b': '女数精确为 2/3/4/5，互斥类别合计 1260+720+135+6=2121。',
 'Q-2024F-MID-P06-b': '严格递增的六位数不能含 0，选 1…9 的六元素集合即唯一数字，C(9,6)=84。',
 'Q-2015-MID-P08-a': '六只手套三颜色、每色至多二只强制每色二只，C(12,3)=220；穷举24只中选6核验。',
 'Q-2015-MID-P08-b': '六只四色强制二双二单，C(12,2)C(10,2)2^2=11880；穷举核验。',
 'Q-2015-MID-P08-c': '六只六色，C(12,6)2^6=59136；穷举核验。',
 'Q-2013-MID-P03': '两组各 n 人，二人组或同组(两类各C(n,2))或跨组(n²)，分类互斥穷尽；n=1亦成立。',
 'Q-2016-MID-P03-a': '计数(S,s)，|S|=k且s∈S；先S再s得kC(n,k)，先s再余人得nC(n-1,k-1)，k>0可除。',
 'Q-2016-MID-P03-b': 'n/k × (n-1)!/[(k-1)!(n-k)!] = n!/[k!(n-k)!]，0<k≤n。',
 'Q-2014-MID-P04-a': 'java 有 a×2，4!/2!=12；实际生成不同排列核验。',
 'Q-2014-MID-P04-b': 'lollapalooza 长12，l×4,a×3,o×3,p×1,z×1，12!/(4!3!3!)=554400；独立字母频次检查。',
 'Q-2019-FINAL-P09-a': '40 不同杂志固定四个有标签盒各10本，依次选10的乘积=40!/(10!)⁴。',
 'Q-2019-FINAL-P09-b': '四个盒均非空且内容互异，每个无标签分组恰有4!个加标签版本，再除4!；无固定点。',
 'Q-2018-MID-P08-c': '十种数字无序重复取5，十维非负频次和5，C(14,5)=2002；前小题限制不继承。',
 'Q-2024F-MID-P06-c': '六位非增数对应十种数字频次和6；仅全0失效，C(15,9)-1=5004；实际生成5005个多重集合核验。',
 'Q-2024F-MID-P06-d': '六位非减数不能含0，九种数字重复取6，C(14,8)=3003；生成核验。',
 'Q-2013-MID-P08': '三元非负有序解和100对应100星2隔板，C(102,2)=5151；双重循环枚举核验。',
 'Q-2017-MID-P10-b': '50相同糖、四标签盒，50星3板，C(53,3)=23426；盒计数枚举核验。',
 'Q-2017-MID-P10-c': '每盒先给5共20，剩30星3板，C(33,3)=5456；不使用官方印刷的35，枚举核验。',
 'Q-2018-FINAL-P11-b': '5右3上共56；缺边C(2,2)→D(3,2)，禁行6×1×3=18，答案38；原图查看并独立DP核验。',
 'Q-2020-FINAL1-P03-b': '6右5上共462；必经C(3,3)20×10=200，避开262；原图查看并独立DP核验。',
 'Q-2024S-FINAL-P04': '必经(2,3)前缀10，后续462减经(6,5)的15×10，10×312=3120；带访问标记DP核验。',
}


def local_media(text, chapter):
    def replace(match):
        target = match.group(1)
        if '.pdf' in target:
            return ''
        source = REPO / target if target.startswith('knowledge_base/') else KB / 'Figures' / target
        if not source.is_file() or source.suffix.lower() not in ('.png', '.jpg', '.jpeg', '.svg'):
            raise ValueError(f'Unresolved source embed: {target}')
        rel = shared.snapshot(source, chapter, 'figures')
        return f'![原题图示](../{rel})'
    return re.sub(r'!\[\[([^\]]+)\]\]', replace, text).strip()

shared.local_media = local_media

def numerical_checks():
    assert len(set(permutations('java'))) == 12
    assert Counter('lollapalooza') == dict(l=4,o=3,a=3,p=1,z=1)
    assert factorial(12)//(factorial(4)*factorial(3)**2) == 554400
    # Two families: independently enumerate all six-person seatings.
    rows = list(permutations(range(6)))
    together = sum(all(max(row.index(i) for i in f)-min(row.index(i) for i in f)==2
                       for f in ((0,1,2),(3,4,5))) for row in rows)
    mother_child = sum(abs(row.index(0)-row.index(2))==1 and abs(row.index(3)-row.index(5))==1 for row in rows)
    assert together == 2*6**2 and mother_child == factorial(4)*4
    assert sum(all(i+1 not in c for i in c) for c in combinations(range(11),6)) == 1
    glove = Counter(len({g//2 for g in chosen}) for chosen in combinations(range(24),6))
    assert (glove[3],glove[4],glove[6]) == (220,11880,59136)
    digits = list(combinations_with_replacement(range(10),6))
    assert sum(max(d)>0 for d in digits)==5004
    assert sum(min(d)>0 for d in digits)==3003
    assert sum(1 for x in range(101) for y in range(101-x))==5151
    for total, expected in ((50,23426),(30,5456)):
        assert sum(total-x-y+1 for x in range(total+1) for y in range(total-x+1)) == expected
    def dp(w,h,point=None,edge=None,must=None):
        ways={(0,0,False):1}
        for x in range(w+1):
            for y in range(h+1):
                for seen in (False,True):
                    count=ways.get((x,y,seen),0)
                    for nx,ny in ((x+1,y),(x,y+1)):
                        if nx>w or ny>h or (nx,ny)==point or ((x,y),(nx,ny))==edge: continue
                        flag=seen or (nx,ny)==must
                        ways[nx,ny,flag]=ways.get((nx,ny,flag),0)+count
        return ways.get((w,h,True),0) if must else sum(ways.get((w,h,s),0) for s in (False,True))
    assert dp(5,3,edge=((2,2),(3,2)))==38
    assert dp(6,5,point=(3,3))==262
    assert dp(8,8,point=(6,5),must=(2,3))==3120
    return '全部独立整数检查通过：家庭块、间隙、手套、字母频次、重复数字、整数解与限制路径。'

def main():
    # Guard before any question content is selected or read.
    for ident in IDS:
        chapter=ROOT/'chapters'/ident
        manifest=json.loads((chapter/'manifest.json').read_text())
        assert len(manifest['pages'])==manifest['pageCount']
        assert all(p['status']=='written' for p in manifest['pages'])
    check_result=numerical_checks()
    report=REPO/'output/counting-courses-20261002/l1-7-question-review.md'
    report_text=report.read_text()
    for ident in IDS:
        chapter=ROOT/'chapters'/ident
        config=json.loads((chapter/'course.config.json').read_text())
        results=[]
        for topic in config['topics']:
            for question_id in topic['questions']:
                matches=list(KB.glob(question_id+' - *.md'))
                assert len(matches)==1
                source=matches[0]; text=source.read_text()
                meta=metadata_fields(text)
                assert meta['verification_status']=='verified'
                assert meta['answer_source']=='official' or (
                    question_id=='Q-2017-MID-P10-c' and meta['answer_source']=='derived')
                if ident=='l1-6':
                    independent=REVIEW[question_id]
                else:
                    assert f'### {question_id}' in report_text
                    independent='独立推导及交叉核验见随课程保存的 L1.7 原题核验报告。'
                question,stems=shared.printed_question(text,chapter)
                answers=answer_fields(text)
                paper=REPO/meta['source_pdf']
                assert paper.is_file()
                results.append(dict(
                    id=question_id,topic=topic['slug'],sourceNote=shared.snapshot(source,chapter,'notes'),
                    sourceNoteSha256=shared.sha(source),stems=stems,
                    paper=meta['source_paper'].replace('[[','').replace(']]',''),
                    pdf=shared.snapshot(paper,chapter,'papers'),pdfSha256=shared.sha(paper),
                    page=meta['source_page'],solutionPages=meta.get('solution_page',[]),
                    number=meta['question_number'],marks=meta.get('marks'),
                    verificationStatus=meta['verification_status'],answerSource=meta['answer_source'],
                    questionMarkdown=question,**answers,
                    independentVerification=independent
                ))
        (chapter/'practice.json').write_text(json.dumps(results,ensure_ascii=False,indent=2)+'\n')
        if ident=='l1-7':
            shared.snapshot(report,chapter,'audit')
        else:
            review=REPO/'output/counting-courses-20261002/l1-6-question-review.md'
            lines=['# L1.6 原题独立核验\n','全部讲解完成后选题；保留知识库与原课件。31 道题均为 verified：30 道答案来自 official，2017-MID-P10-c 为修正印刷算术错误的 derived 答案，另独立核验数学及条件。\n',check_result+'\n']
            for q in results:
                lines += [f"## {q['id']}\n",q['independentVerification']+'\n',
                          f"原题与答案出处：{q['paper']}，题页 {q['page']}，答案页 {q['solutionPages']}。\n"]
            review.write_text('\n'.join(lines))
            shared.snapshot(review,chapter,'audit')
        print(f'{ident}: {len(results)} verified original questions')

if __name__=='__main__':
    main()
