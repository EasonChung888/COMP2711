---
id: "Q-2017-FINAL-P04-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 6
solution_page: [6,7]
question_number: "4(a)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Inclusion-Exclusion - 容斥原理]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]","[[Modular Congruence - 同余]]","[[Inclusion-Exclusion - 容斥原理]]","[[Counting Principles - 计数原理]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]","[[Modular Arithmetic Method - 模运算方法]]","[[Inclusion-Exclusion Method - 容斥方法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Inclusion-exclusion counts 528 rejected residues modulo 720 including zero before the guaranteed successful draw."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 5
---
# Q-2017-FINAL-P04-a

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=6]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=6]] ![[knowledge_base/past_paper/2017-final.pdf#page=7]]

## Question

(a) Suppose that $p=13,q=61$. In the worst case, what is the number of times we will execute step 1 (that is, the number of times we have to pick a random $d$)?

Shared context: [[STEM-2017-FINAL-P04 - Shared Problem Prompt]].

## 中文解析

先算不合格候选数，再加一次成功抽取。模七百二十中的零也不互质，必须包括在倍数计数中。因为抽取不重复，最坏情况可以先抽完所有五百二十八个坏值，第五百二十九次才成功。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 6, 7. The Chinese derivation expands the reasoning.

**Answer.** $529$ picks.

**Derivation/proof.** Here $T=12\cdot60=720=2^4 3^2 5$. Bad candidates in $\{0,\ldots,719\}$ are multiples of 2, 3 or 5. Their union has size $360+240+144-120-72-48+24=528$ by inclusion-exclusion (zero is included in each set). All 528 may be picked first without replacement; the next pick is then good. This ordering also proves the bound is attainable.

### 中文解答

**推导。** 先得 $T=12\cdot60=720=2^4\cdot3^2\cdot5$。候选 $0,\ldots,719$ 中，与 $720$ 不互素者恰为 $2,3,5$ 的倍数。容斥计数 $360+240+144-120-72-48+24=528$，其中零包含在各倍数集中并被容斥正确计一次。不重复抽取时，最坏可先抽完全部 $528$ 个坏数，第 $529$ 次必互素；这样的排序可实现，故精确最坏次数为 $529$。

## Common Mistakes

- 只回答互质元素的个数。
- 忘记最后成功的一次或漏算零。

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Inclusion-Exclusion - 容斥原理]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[Inclusion-Exclusion - 容斥原理]]
- [[Counting Principles - 计数原理]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Inclusion-Exclusion Method - 容斥方法]]
- [[Counting Method - 计数方法]]
