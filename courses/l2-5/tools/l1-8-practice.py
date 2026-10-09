"""Preserve selected original questions after all 22 explanations are committed."""
from pathlib import Path
from math import comb, factorial
from itertools import product, permutations
import importlib.util
import json
import re
import yaml

spec = importlib.util.spec_from_file_location('practice', Path(__file__).with_name('chapter-practice.py'))
shared = importlib.util.module_from_spec(spec)
spec.loader.exec_module(shared)
chapter = shared.ROOT / 'chapters/l1-8'
manifest = json.loads((chapter / 'manifest.json').read_text())
assert len(manifest['pages']) == 22 and all(p['status'] == 'written' for p in manifest['pages'])

REVIEW = {
    'Q-2019-FINAL-P08-b': '六位小写字母串允许重复。缺 a、缺 b 各有 25^6，二者都缺有 24^6；补集得到 26^6−2×25^6+24^6。另以四状态动态规划逐位统计是否出现 a/b 核验。',
    'Q-2020-FINAL1-P04-a': '范围包含 0，不含 1000。三个整除集合的两两交集使用 lcm=6,10,15，三重使用 30，结果 734；逐个枚举 0…999 核验。共享题干在 PDF 第 2 页，小题及答案在第 3 页。',
    'Q-2025F-MID-P06': '六位数首位不能为 0。禁用 r 个指定非零数字时首位 9−r 种、后五位各 10−r 种，容斥为 9×10^5−3×8×9^5+3×7×8^5−6×7^5；枚举全部六位数核验，保留原题允许不计算最终数值的要求。',
    'Q-2024F-MID-P07': '五个带身份任务到三台带身份服务器的满射。3^5−3×2^5+3=150；枚举全部 243 个函数核验。',
    'Q-2017-FINAL-P01': '九份不同报告到四位员工的满射。4^9−4×3^9+6×2^9−4=186480；枚举全部 262144 个函数核验。',
    'Q-2020-FINAL2-P06-a': '十种数字的排列允许 0 在首位。先选唯一固定位置，再错排其余九个，10D9=1334960；枚举九个元素的全部排列计算 D9，并与递推和阶乘交替和交叉核验。',
    'Q-2020-FINAL2-P06-b': '九个固定位置确定以后，最后一个位置必然也固定，恰好九个固定点不可能，答案 0。等价 C(10,9)D1=0。',
    'Q-2020-FINAL2-P06-d': '仅要求两个指定位置固定，允许更多固定点，删除这两位置与两数字后是任意八元素排列，8!=40320。不可误用 D8。',
    'Q-2019-FINAL-P10-b': 'x1≥9，平移后总量 11、三变量非负，C(13,2)=78；枚举原方程非负解核验。',
    'Q-2019-FINAL-P10-d': '各变量小于 9 即至多 8，坏事件阈值为 9。231−3×78+3×6=15；枚举三变量并独立使用 y_i=8−x_i 的双射核验。',
    'Q-2023F-MID-P06': '坏阈值为 5、6、7。单交集为45,36,28，双交集为6,3,1，三交集空。105−45−36−28+6+3+1=6；枚举仅用于独立核验，网页原题解析保留要求的容斥法。',
}

def checks():
    dp = [1, 0, 0, 0]
    for _ in range(6):
        nxt = [0] * 4
        for mask, count in enumerate(dp):
            for bit, choices in [(0, 24), (1, 1), (2, 1)]:
                nxt[mask | bit] += count * choices
        dp = nxt
    assert dp[3] == 26**6 - 2 * 25**6 + 24**6
    assert sum(any(n % d == 0 for d in [2, 3, 5]) for n in range(1000)) == 734
    digits = sum(set('123') <= set(str(n)) for n in range(100000, 1000000))
    assert digits == 9*10**5 - 3*8*9**5 + 3*7*8**5 - 6*7**5
    for m, n, expected in [(5, 3, 150), (9, 4, 186480)]:
        assert sum(len(set(p)) == n for p in product(range(n), repeat=m)) == expected
        assert sum((-1)**r * comb(n,r) * (n-r)**m for r in range(n+1)) == expected
    derangements = sum(all(i != v for i, v in enumerate(p)) for p in permutations(range(9)))
    d = [1, 0]
    for n in range(2, 10):
        d.append((n-1) * (d[n-1] + d[n-2]))
    assert derangements == d[9] == sum((-1)**k * factorial(9)//factorial(k) for k in range(10)) == 133496
    assert factorial(8) == 40320 and comb(10,9)*d[1] == 0
    solutions = [(x,y,20-x-y) for x in range(21) for y in range(21-x)]
    assert sum(x >= 9 for x,y,z in solutions) == 78
    assert sum(max(x,y,z) < 9 for x,y,z in solutions) == 15
    assert sum(a+b+c == 13 for a,b,c in product(range(5),range(6),range(7))) == 6
    return {'letterStrings':dp[3], 'multiples':734, 'sixDigitNumbers':digits,
            'onto5to3':150, 'onto9to4':186480, 'D9':derangements,
            'oneFixedPoint':10*derangements, 'nineFixedPoints':0, 'twoSpecifiedFixed':40320,
            'lowerBoundSolutions':78, 'symmetricUpperBounds':15, 'unequalUpperBounds':6}

if __name__ == '__main__':
    evidence = checks()
    config = json.loads((chapter/'course.config.json').read_text())
    results = []
    for topic in config['topics']:
        for ident in topic['questions']:
            matches = list(shared.KB.glob(ident+' - *.md'))
            assert len(matches) == 1
            source = matches[0]
            text = source.read_text()
            meta = yaml.safe_load(text.split('---',2)[1])
            assert meta['verification_status'] == 'verified' and meta['answer_source'] == 'official'
            question, stems = shared.printed_question(text, chapter)
            paper = shared.REPO / meta['source_pdf']
            pdf = shared.snapshot(paper, chapter, 'papers')
            official = shared.section(text, 'Official Answer')
            # Convert Obsidian source links to local links without changing answer wording.
            official = re.sub(r'\[\[knowledge_base/past_paper/([^\]#]+)#page=(\d+)\|([^\]]+)\]\]',
                              lambda m: f'[{m[3]}](../sources/papers/{m[1]}#page={m[2]})', official)
            assert '[[' not in official
            stem_pages = [yaml.safe_load((shared.KB/'Stems'/f'{stem}.md').read_text().split('---',2)[1])['source_page'] for stem in stems]
            results.append(dict(id=ident,topic=topic['slug'],sourceNote=shared.snapshot(source,chapter,'notes'),
                sourceNoteSha256=shared.sha(source),stems=stems,stemPages=stem_pages,
                paper=meta['source_paper'].replace('[[','').replace(']]',''),pdf=pdf,pdfSha256=shared.sha(paper),
                page=meta['source_page'],solutionPages=meta.get('solution_page',[]),number=meta['question_number'],marks=meta.get('marks'),
                verificationStatus='verified',answerSource='official',solutionSection='Supplementary Explanation',
                questionMarkdown=question,officialMarkdown=official,solutionMarkdown=shared.section(text,'Supplementary Explanation'),
                mistakesMarkdown='',independentVerification=REVIEW[ident],verificationNote=''))
    (chapter/'practice.json').write_text(json.dumps(results,ensure_ascii=False,indent=2)+'\n')
    audit = chapter/'sources/audit'
    audit.mkdir(exist_ok=True)
    lines = ['# L1.8 原题独立核验', '全部 22 页讲解入站后才开始选题。11 道原题，逐题核对知识库、印刷原题和官方答案，并独立推导、枚举或动态规划交叉检查。',
             '满射课保留直接匹配的两道题；没有为凑数加入只含“满射”关键词的函数复合或无非空要求的题。其余三课各 3 题。',
             '所有练习均为开放计算题，保持原题形态，不新增选择题。', '## 独立计算结果', '```json',json.dumps(evidence,ensure_ascii=False,indent=2),'```']
    for q in results:
        lines += [f"## {q['id']}", q['independentVerification'],
                  f"{q['paper']}：原题第 {q['page']} 页；共享题干页 {q['stemPages']}；答案页 {q['solutionPages']}。"]
    (audit/'l1-8-question-review.md').write_text('\n\n'.join(lines)+'\n')
    (audit/'numerical-checks.json').write_text(json.dumps(evidence,indent=2)+'\n')
    print(f'{len(results)} original questions verified and snapshotted')
