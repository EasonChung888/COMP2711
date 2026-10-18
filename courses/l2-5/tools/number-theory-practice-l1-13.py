"""Reproduce the independently checked L1.13 original-question snapshots.

Only this chapter's practice, config.questions, sources, audit and events change.
Never builds HTML or writes to the source knowledge base or response files.
"""
from pathlib import Path
import importlib.util
import json
import re
from datetime import datetime, timezone
from itertools import combinations
from math import gcd, prod
from practice_answers import answer_fields, metadata_fields

spec = importlib.util.spec_from_file_location('chapter_practice', Path(__file__).with_name('chapter-practice.py'))
shared = importlib.util.module_from_spec(spec)
spec.loader.exec_module(shared)
ROOT, REPO, KB = shared.ROOT, shared.REPO, shared.KB
CHAPTER = ROOT / 'chapters/l1-13'
OUT = REPO / 'output/number-theory-20261016'
SELECTIONS = {
    'gcd-and-euclid': ['Q-2014-FINAL-P02-c', 'Q-2017-MID-P05-a', 'Q-2023S-MID-P06'],
    'bezout-and-extended-euclid': ['Q-2024S-MID-P12-a', 'Q-2020-MID-P08', 'Q-2018-MID-P05-a'],
    'multiplicative-inverses': ['Q-2024S-MID-P12-b', 'Q-2020-MID-P06'],
    'linear-congruences': ['Q-2017-MID-P05-b', 'Q-2019-MID-P10-b', 'Q-2020-MID-P07'],
    'hashing-and-checksums': [],
    'chinese-remainder-theorem': ['Q-2013-FINAL-P03', 'Q-2019-FINAL-P02', 'Q-2025F-FINAL-P06'],
}
SCOPE = {
    'Q-2014-FINAL-P02-c': 'Pages 3-5: common divisors and remainder preservation; a=qn+1 makes every common divisor divide 1. The complete original true/false instruction is supplied.',
    'Q-2017-MID-P05-a': 'Pages 4-5: exactly the Euclidean remainder algorithm and its last nonzero remainder.',
    'Q-2023S-MID-P06': 'Pages 4-5: ordinary integer Euclidean division suffices even for these powers. Direct quotient/remainder certificates avoid requiring later modular exponentiation or cancellation theorems.',
    'Q-2024S-MID-P12-a': 'Pages 6-7: every integer linear combination is divisible by the positive gcd; positivity supplies its lower bound.',
    'Q-2020-MID-P08': 'Pages 6-7: the identity 3(14n+3)-2(21n+4)=1 is a complete symbolic Bezout certificate. No induction or inverse theorem is needed.',
    'Q-2018-MID-P05-a': 'Pages 6-7: multiply a Bezout identity sy+tz=1 by x and use divisibility. It requires no modular inverse or future theorem.',
    'Q-2024S-MID-P12-b': 'Pages 10-12: an inverse would express 1 as an integer linear combination despite gcd>1. Original preceding part (a) is supplied verbatim as context, not counted as another exercise here.',
    'Q-2020-MID-P06': 'Pages 13-14: extended Euclidean algorithm, the coefficient of 53, and normalization modulo 180.',
    'Q-2017-MID-P05-b': 'Pages 15-18, using earlier inverse computation: solve a single coprime linear congruence in the explicitly printed standard range.',
    'Q-2019-MID-P10-b': 'Pages 15-18: move a constant, multiply by the inverse already supplied in the original shared prompt, and normalize into 0..103.',
    'Q-2020-MID-P07': 'Pages 15-18, using earlier extended Euclid: solve one affine congruence; preserve the official coefficient typo and explain it separately.',
    'Q-2013-FINAL-P03': 'Pages 25-26: uniqueness modulo the product of distinct primes; the question gives existence. Basic contrapositive/contradiction proof is prerequisite logic, not a future number-theory theorem.',
    'Q-2019-FINAL-P02': 'Pages 25-27: pairwise coprime moduli, partial products, inverses and the explicit CRT construction.',
    'Q-2025F-FINAL-P06': 'Pages 25-27: first omit the implied mod-2 condition, then apply exactly the pairwise-coprime CRT taught here. No generalized noncoprime CRT is required.',
}
REVIEWS = {
    'Q-2023S-MID-P06': r'''官方答案第 9 页的一句行内因式分解漏写了结尾（应为 $a^n(a^{m-n}-1)$），邻近展示公式和结论 $31$ 正确。官方段落原样保留。

本题也可完全按本课普通带余除法核验：

$$2^{100}-1=2^{35}(2^{65}-1)+(2^{35}-1),$$
$$2^{65}-1=2^{30}(2^{35}-1)+(2^{30}-1),$$
$$2^{35}-1=2^5(2^{30}-1)+(2^5-1).$$

最后 $31=2^5-1$ 整除 $2^{30}-1$，所以最后非零余数为 $31$。每步余数都在合法范围内；不需要 Fermat 定理或预先套用指数 GCD 公式。''',
    'Q-2020-MID-P07': r'''官方第 4 页末行反向代回写成 $1=23(-1)+10\cdot7$，右边实际为 $47$。正确系数是 $-3$：

$$1=10-3\cdot3=10-3(23-2\cdot10)=7\cdot10-3\cdot23.$$

因此逆元 $7$ 和官方最终解 $x\equiv18\pmod{23}$ 正确。验算 $10\cdot18+4=184=8\cdot23$。官方段落未改写，题库补充解析已给出正确系数。''',
    'Q-2013-FINAL-P03': r'''官方第 6 页差值的严格上界写为 $0<x_1-x_2<pq-1$，一般应为 $0<x_1-x_2\le pq-1<pq$。所需矛盾只用 $0<|x_1-x_2|<pq$；题库补充解析已采用正确界。

按题目要求也可表述为逆否证明：若 $x_1\ne x_2$ 且两者都在 $\mathbb Z_{pq}$，差的绝对值为正且小于 $pq$；它不可能同时被不同素数 $p,q$ 整除，因此两者至少有一个余数不同。故余数均相同的两个标准代表必相等。官方段落保持原样。''',
}


def now():
    return datetime.now(timezone.utc).isoformat()


def log(name, **fields):
    with (CHAPTER / 'events.jsonl').open('a') as stream:
        stream.write(json.dumps(dict(time=now(), event=name, sourceId='l1-13', **fields), ensure_ascii=False) + '\n')


def write_json(file, value):
    file.parent.mkdir(parents=True, exist_ok=True)
    file.write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n')


def note(qid):
    files = list(KB.glob(qid + ' - *.md'))
    assert len(files) == 1, qid
    return files[0]


def euclid(a, b):
    rows = []
    while b:
        q, r = divmod(a, b)
        assert a == q * b + r and 0 <= r < b
        rows.append(dict(a=a, b=b, quotient=q, remainder=r))
        a, b = b, r
    return a, rows


def extended(a, b):
    r0, r1, s0, s1, t0, t1 = a, b, 1, 0, 0, 1
    while r1:
        q = r0 // r1
        r0, r1 = r1, r0 - q * r1
        s0, s1 = s1, s0 - q * s1
        t0, t1 = t1, t0 - q * t1
    assert a * s0 + b * t0 == r0 == gcd(a, b)
    return dict(a=a, b=b, gcd=r0, coefficientA=s0, coefficientB=t0)


def independent_checks():
    """Calculations and proofs are independent of the official-section parser."""
    checks = {}

    def add(qid, proof, **evidence):
        checks[qid] = dict(proof=proof, **evidence)

    d, chain = euclid(221, 15)
    assert d == 1
    add('Q-2017-MID-P05-a', 'Each Euclidean step preserves all common divisors; the last nonzero remainder is 1.', result=d, divisions=chain)
    d, chain = euclid(2**100 - 1, 2**65 - 1)
    assert d == 31 and [x['remainder'] for x in chain] == [2**35-1, 2**30-1, 31, 0]
    add('Q-2023S-MID-P06', 'Direct integer division on the original two numbers gives valid nonnegative remainders 2^35-1, 2^30-1, 31, 0. This proves gcd=31 without any future modular theorem.', result=d, divisions=chain)
    assert all(gcd(a, n) == 1 for a in range(2, 201) for n in range(2, 201) if a % n == 1)
    add('Q-2014-FINAL-P02-c', 'For all positive a,n in the printed domain: a=qn+1, so every positive common divisor divides a-qn=1. Hence gcd(a,n)=1. This symbolic divisibility proof, rather than the sample check, proves the universal statement.', result=True, finiteCrossCheck=dict(a=[2,200], n=[2,200]))
    add('Q-2024S-MID-P12-a', 'Put d=gcd(a,m)>0. Since a=du and m=dv, any integer combination ra+sm=d(ru+sv). If positive, the integer multiplier is at least 1, so the value is >=d. This holds for all positive a,m and all integer r,s.', result='Every positive combination is at least gcd(a,m).')
    assert (3*14-2*21, 3*3-2*4) == (0, 1)
    assert all(gcd(21*n+4, 14*n+3) == 1 for n in range(1001))
    add('Q-2020-MID-P08', 'The exact polynomial identity 3(14n+3)-2(21n+4)=1 has n coefficient 0 and constant 1. Every common divisor divides 1. This proves the result for all natural n (including either convention for zero).', result=1, identityCoefficients=[3,-2], polynomialCoefficients=[0,1], finiteCrossCheck=[0,1000])
    assert all(x % z == 0 for x in range(1,51) for y in range(1,51) for z in range(1,51) if gcd(y,z) == 1 and (x*y) % z == 0)
    add('Q-2018-MID-P05-a', 'Bezout supplies s*y+t*z=1 because gcd(y,z)=1. Multiply by x: x=s*(x*y)+t*z*x. Both terms are divisible by z under the printed hypotheses, hence z divides x. Without coprimality this is not valid (x=1,y=z=2).', result='z divides x', finiteCrossCheck=dict(x=[1,50], y=[1,50], z=[1,50]), necessaryHypothesisCounterexample=[1,2,2])
    assert not any((a*b) % m == 1 for m in range(2,91) for a in range(1,91) if gcd(a,m)>1 for b in range(m))
    add('Q-2024S-MID-P12-b', 'If an inverse b existed, a*b-m*k=1 would represent a positive integer 1 smaller than d=gcd(a,m)>1, contradicting the supplied original part (a). Equivalently every left term is divisible by d, so d would divide 1.', result='No inverse when gcd(a,m)>1.', finiteCrossCheck=dict(a=[1,90], m=[2,90]), prerequisite='Q-2024S-MID-P12-a')
    certificate = extended(53,180)
    assert certificate['coefficientA'] == 17 and 53*17-180*5 == 1
    assert [b for b in range(180) if (53*b) % 180 == 1] == [17]
    add('Q-2020-MID-P06', 'Independent extended Euclid gives 17*53-5*180=1. All 180 standard representatives have been checked and only 17 multiplies 53 to residue 1.', result=17, certificate=certificate, standardDomain=[0,179])
    for qid, a, constant, rhs, m, expected in [
        ('Q-2017-MID-P05-b',15,0,2,221,118),
        ('Q-2019-MID-P10-b',15,41,18,104,47),
        ('Q-2020-MID-P07',10,4,0,23,18),
    ]:
        certificate = extended(a,m)
        solutions = [x for x in range(m) if (a*x+constant-rhs) % m == 0]
        inverse = certificate['coefficientA'] % m
        assert solutions == [expected] and inverse*(rhs-constant) % m == expected
        add(qid, f'Independent Euclid gives inverse {inverse}; full enumeration of 0..{m-1} yields exactly {expected}. Substitution satisfies the original affine congruence. Coprimality proves all integer solutions are {expected}+{m}k; retain any printed standard-range restriction.', result=expected, modulus=m, certificate=certificate, allStandardSolutions=solutions, substitutionDifference=a*expected+constant-rhs)
    prime_pairs = list(combinations([2,3,5,7,11],2))
    for p,q in prime_pairs:
        pairs = [(x % p,x % q) for x in range(p*q)]
        assert len(set(pairs)) == p*q
    add('Q-2013-FINAL-P03', 'For distinct standard representatives, 0<abs(x1-x2)<=pq-1<pq. Equal residues modulo distinct primes p,q would force pq to divide the difference, impossible. Thus distinct representatives differ in at least one residue (the contrapositive); given existence, this proves uniqueness. The official strict <pq-1 bound is a typo; <pq is sufficient.', result='Exactly one standard representative.', finiteCrossCheckPrimePairs=prime_pairs, correctDifferenceBound='0 < abs(x1-x2) <= pq-1 < pq')
    for qid, moduli, residues, expected in [
        ('Q-2019-FINAL-P02',[9,14,5],[4,8,3],148),
        ('Q-2025F-FINAL-P06',[3,4,5],[1,3,1],31),
    ]:
        assert all(gcd(a,b) == 1 for a,b in combinations(moduli,2))
        M = prod(moduli)
        partial = [M//m for m in moduli]
        inverses = [extended(a,m)['coefficientA'] % m for a,m in zip(partial,moduli)]
        raw = sum(r*a*y for r,a,y in zip(residues,partial,inverses))
        solutions = [x for x in range(M) if all(x % m == r for r,m in zip(residues,moduli))]
        assert raw % M == expected and solutions == [expected]
        if qid == 'Q-2025F-FINAL-P06':
            assert [x for x in range(60) if x%2 == 1 and x%3 == 1 and x%4 == 3 and x%5 == 1] == [31]
            assert all(x % 2 == 1 for x in range(60) if x % 4 == 3)
        add(qid, f'Pairwise gcds are 1. Independently calculated partial products {partial}, inverses {inverses}, and raw sum {raw}; exhaustive residue check gives only {expected} modulo {M}. CRT supplies exactly the full class {expected}+{M}k.' + (' The original mod-2 equation is implied by mod-4=3, so it must be omitted before using the product theorem; period is 60, not 120.' if qid.endswith('P06') else ''), result=expected, modulus=M, partialProducts=partial, inverses=inverses, rawSum=raw, allStandardSolutions=solutions)
    assert set(checks) == {qid for ids in SELECTIONS.values() for qid in ids}
    return checks


def search_inventory():
    terms = r'hash|checksum|check.?digit|HKID|ISBN|transposition|identity.?card|加权|校验'
    rows = []
    for file in sorted(KB.rglob('*.md')):
        text = file.read_text()
        wording = shared.section(text, 'Question') or shared.section(text, 'Shared printed wording')
        rows.append(dict(file=str(file.relative_to(REPO)), sha256=shared.sha(file),
            numberTheoryCandidate=('[[Topic - Number Theory' in text or '[[Subtopic - GCDs and Congruences' in text),
            directHashChecksumMatch=bool(re.search(terms, wording, re.I))))
    assert not any(row['directHashChecksumMatch'] for row in rows), 'Review newly added direct application candidates before retaining zero.'
    return dict(searchScope='Every markdown question and shared-stem note in knowledge_base/04-Questions; inspect printed Question/Shared printed wording sections.',
        query=terms, notesScanned=len(rows), directHashChecksumMatches=0, rows=rows)


def main():
    baseline = {}
    for cid,count in [('l1-12',31),('l1-13',27),('l1-14',34)]:
        manifest = json.loads((ROOT/'chapters'/cid/'manifest.json').read_text())
        assert len(manifest['pages']) == count
        assert all(p['page'] == i+1 and p['status'] == 'written' for i,p in enumerate(manifest['pages']))
        for p in manifest['pages']:
            response = ROOT/'chapters'/cid/p['response']
            assert shared.sha(response) == p['responseSha256']
            baseline[str(response)] = shared.sha(response)
    config_file = CHAPTER/'course.config.json'
    config = json.loads(config_file.read_text())
    before_config = json.loads(json.dumps(config))
    assert [t['slug'] for t in config['topics']] == list(SELECTIONS)
    log('practice_snapshot_started', agent='review_build_support', allNumberTheoryPagesWritten=92,
        scope='L1.13 only; reproduce independently verified original-question snapshots, without building HTML.')
    checks = independent_checks()
    search = search_inventory()
    records = []
    source_hashes = {}
    for topic in config['topics']:
        topic['questions'] = SELECTIONS[topic['slug']]
        for qid in topic['questions']:
            source = note(qid)
            text = source.read_text()
            meta = metadata_fields(text)
            assert meta['verification_status'] == 'verified' and meta['answer_source'] == 'official', qid
            printed, stems = shared.printed_question(text, CHAPTER)
            source_hashes[str(source)] = shared.sha(source)
            prerequisites = []
            if qid == 'Q-2024S-MID-P12-b':
                prior = note('Q-2024S-MID-P12-a')
                prior_text = prior.read_text()
                prior_copy = shared.snapshot(prior, CHAPTER, 'notes')
                printed = '**Original preceding part (a), supplied as context for part (b):**\n\n' + shared.section(prior_text, 'Question') + '\n\n**Part (b):**\n\n' + printed
                prerequisites = [dict(id='Q-2024S-MID-P12-a', sourceNote=prior_copy, sourceNoteSha256=shared.sha(prior), sourcePage=18)]
            paper = REPO/meta['source_pdf']
            source_hashes[str(paper)] = shared.sha(paper)
            stem_pages = []
            stem_sources = []
            for stem in stems:
                file = KB/'Stems'/(stem+'.md')
                sm = metadata_fields(file.read_text())
                source_hashes[str(file)] = shared.sha(file)
                stem_pages.append(sm['source_page'])
                stem_sources.append(dict(id=stem, sourceNote=shared.snapshot(file,CHAPTER,'notes'), sourceNoteSha256=shared.sha(file), sourcePage=sm['source_page']))
            record = dict(id=qid, topic=topic['slug'], sourceNote=shared.snapshot(source,CHAPTER,'notes'),
                sourceNoteSha256=shared.sha(source), stems=stems, stemSources=stem_sources,
                stemPages=sorted(set(stem_pages + [p['sourcePage'] for p in prerequisites])),
                paper=meta['source_paper'].replace('[[','').replace(']]',''),
                pdf=shared.snapshot(paper,CHAPTER,'papers'), pdfSha256=shared.sha(paper),
                page=meta['source_page'], solutionPages=meta.get('solution_page',[]),
                number=meta['question_number'], marks=meta.get('marks'), verificationStatus='verified', answerSource='official',
                questionMarkdown=printed, independentVerification=checks[qid]['proof'],
                independentVerificationData=checks[qid], scopeVerification=SCOPE[qid], prerequisites=prerequisites,
                **answer_fields(text))
            if qid in REVIEWS:
                record['reviewMarkdown'] = REVIEWS[qid]
            records.append(record)
    # Only questions arrays may change; all classification and response text stays intact.
    for left,right in zip(before_config['topics'],config['topics']):
        assert {k:v for k,v in left.items() if k!='questions'} == {k:v for k,v in right.items() if k!='questions'}
    assert {k:v for k,v in before_config.items() if k!='topics'} == {k:v for k,v in config.items() if k!='topics'}
    write_json(config_file,config)
    write_json(CHAPTER/'practice.json',records)
    audit = CHAPTER/'sources/audit'
    write_json(audit/'l1-13-independent-checks.json',checks)
    write_json(audit/'l1-13-search-index.json',search)
    review_pages = json.loads((OUT/'l1-13-source-check/review-pages.json').read_text())
    for item in review_pages:
        png = OUT/'l1-13-source-check'/item['png']
        item.update(pdfSha256=shared.sha(REPO/item['pdf']), pngSha256=shared.sha(png),
            review='Question wording and complete relevant official answer reviewed visually, including continuation pages.')
    write_json(audit/'l1-13-physical-source-review.json',review_pages)
    lines = ['# L1.13 原题与答案独立核验', '',
        '全部 31+27+34=92 页讲解已 written 后开始选题。保留现有解释原文；本工作没有运行最终网站构建。', '',
        '共 14 道原题，按课程分配为 3 / 3 / 2 / 3 / 0 / 3。每题 Official Answer 和 Supplementary Explanation 均来自原知识库的完整对应段落，仅转换本地引用。无自编题、无改编题、无把同一原题拆开重复计数。', '',
        '已逐页查看 12 个物理题目/答案页；2020 Midterm 第 6 题答案跨 3–4 页，2025 Fall Final 第 6 题答案跨 10–11 页，两处均保留完整来源。选中的题目没有必需原题图，因而不产生占位 figures。', '',
        '| 课程 | 原题数 | 说明 |', '| --- | ---: | --- |']
    for t in config['topics']:
        lines.append(f"| {t['title']} | {len(t['questions'])} | " + ('全库题干/共享题干检索没有直接的字符串哈希、校验码、位交换检测原题，保留 0 题。' if not t['questions'] else '原题、完整官方答案与独立核验均可追溯。') + ' |')
    lines += ['', '## 选题范围与排除理由', '',
        f"检索 knowledge_base/04-Questions 下全部 {search['notesScanned']} 个题目与共享题干 Markdown；完整文件 SHA-256 清单和检索表达式见 l1-13-search-index.json。另逐题审阅 Number Theory/GCDs and Congruences 候选及已完成 27 页解释。", '',
        '- RSA、Fermat、Diffie–Hellman、模幂与重复平方法题留给后续 L1.14；不借用带密码学前提的求逆题凑数。',
        '- 2018 FINAL 9(a) 需要额外容斥计数且官方中间数值有误，未选；因此逆元课保留直接匹配的 2 题。',
        '- 2018 FINAL 3(b) 依赖递归集合与结构归纳，不属于本章给出的先修范围，未选。',
        '- 2025S MID 8(b) 的题库 answer_source 为 derived，印刷答案遗漏题目明确要求的扩展欧几里得步骤，未计入官方答案原题；线性同余课采用其他完整官方答案原题。',
        '- 非互素模数的一般 CRT、含覆盖规则的字符串题、需要归纳/额外计数的 CRT 应用不优先于本课直接范围；已有 3 道直接匹配且验证通过的 CRT 原题。',
        '- 与 L1.12 已指定的基本整除/余数/同余题不重复。2014 FINAL 2(c) 使用原共享判断题说明，但未复制其他小题到练习计数。',
        '- 哈希/校验码课查遍全部原题和共享题干后没有直接匹配，保留 0 题；不以单纯同余运算或一般整除题替代应用题。', '',
        '## 逐题核验', '']
    for r in records:
        lines += [f"### {r['id']} · {r['number']}", '',
            f"- 题目：{r['paper']}，物理 PDF 第 {r['page']} 页；官方答案物理页 {r['solutionPages']}。",
            f"- 题源：[{r['sourceNote'].split('/')[-1]}](../notes/{r['sourceNote'].split('/')[-1]})。",
            f"- Note SHA-256：`{r['sourceNoteSha256']}`。PDF SHA-256：`{r['pdfSha256']}`。",
            f"- Official section SHA-256：`{r['officialSourceSha256']}`。Supplementary section SHA-256：`{r['supplementarySourceSha256']}`。",
            '- Scope: '+r['scopeVerification'], '- Independent verification: '+r['independentVerification'], '']
        if r.get('reviewMarkdown'):
            lines += ['**单列来源勘误，官方原文未修改：**', '', r['reviewMarkdown'], '']
        if r['prerequisites']:
            lines += ['原题引用的前题 (a) 已按原题文字附在 (b) 之前，仅作前提；此处计数为 (b) 一题。', '']
    lines += ['## 可复现与保护', '',
        '运行 `python3 courses/l2-5/tools/number-theory-practice-l1-13.py`。脚本只更新本章练习、config.questions、快照、审核和真实追加事件；不会运行任何 HTML 构建。数值枚举只作为交叉验证，普遍命题另有完整符号证明。', '',
        '机器核验证据：l1-13-independent-checks.json。物理页视觉核对和图像/PDF hash：l1-13-physical-source-review.json。原题、共享题干和 PDF 快照均与原库字节一致。', '',
        '所有92页回答的原 SHA-256在脚本前后保持一致；原知识库题目、共享题干和PDF hash也保持一致。未修改其他章节、共享工具或任何讲解。网页公式、折叠答案、草稿、离线与浏览器交互由主AI最终统一构建后验收。', '']
    (audit/'l1-13-question-review.md').write_text('\n'.join(lines))
    assert all(shared.sha(Path(p)) == h for p,h in baseline.items())
    assert all(shared.sha(Path(p)) == h for p,h in source_hashes.items())
    for r in records:
        assert shared.sha(CHAPTER/r['sourceNote']) == r['sourceNoteSha256']
        assert shared.sha(CHAPTER/r['pdf']) == r['pdfSha256']
        assert r['answerFormatVersion']==2 and r['officialMarkdown'] and r['solutionMarkdown']
        assert '! [[' not in r['questionMarkdown'] and '[[' not in r['questionMarkdown']
    write_json(audit/'l1-13-source-integrity.json',dict(sourceHashes=source_hashes, responseHashes=baseline,
        sourceFilesUnchanged=True, responseFilesUnchanged=True, configOnlyQuestionsChanged=True))
    log('practice_snapshot_completed', agent='review_build_support', questionCount=len(records),
        topicCounts={t['slug']:len(t['questions']) for t in config['topics']}, allNumberTheoryPagesWritten=92,
        independentChecks='sources/audit/l1-13-independent-checks.json', review='sources/audit/l1-13-question-review.md',
        practiceSha256=shared.sha(CHAPTER/'practice.json'), configSha256=shared.sha(config_file))
    report = ['# L1.13 练习快照报告', '',
        '已完成 14 道原题，题量为 3 / 3 / 2 / 3 / 0 / 3；未运行最终网站构建。', '',
        '逆元课保留 2 题；哈希与校验码课完整检索后为 0 题。没有编造或改编题目。', '',
        '14 题均逐题复核物理官方答案、独立计算/证明并检查适用前提。查看了 12 个物理题/答案页，保留两处跨页官方解答；完整两段答案来自现有题库。三处官方笔误保留在官方段落，reviewMarkdown 及审核报告单列正确推导。', '',
        '输出：', '', '- `courses/l2-5/chapters/l1-13/practice.json`。',
        '- 仅更新 `courses/l2-5/chapters/l1-13/course.config.json` 的 questions 数组。',
        '- `sources/notes/` 原题/共享题干快照和 `sources/papers/` 原PDF快照；选中题无必需图示，无占位图片。',
        '- `sources/audit/l1-13-question-review.md`、独立计算JSON、全库检索索引、物理页核对和source-integrity。',
        '- `courses/l2-5/tools/number-theory-practice-l1-13.py` 为可复现入口。', '',
        '验证：全部92页已written且回答hash前后不变；原知识库源文件hash不变；题源快照hash一致；原官方/补充两段答案source hash保存；逐课题ID和practice顺序一致；所有选中题均为官方答案来源。事件按实际执行时间追加，没有倒填。', '',
        '未修改共享工具、其他章节或讲解，未git提交。HTML与浏览器验收留给主AI统一构建。', '']
    (OUT/'l1-13-practice-report.md').write_text('\n'.join(report))
    print('L1.13: 14 verified original exercises; topic counts 3/3/2/3/0/3; sources and all 92 responses unchanged; no HTML build.')


if __name__ == '__main__':
    main()
