---
id: "Q-2017-MID-P05-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 7
solution_page: [7]
question_number: "5(a)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Five successive remainder equations reduce 221 and 15 to the last nonzero remainder one."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P05-a

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=7]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=7]]

## Question

Use the Euclidean algorithm to find $\gcd(15,221)$. Show the steps.

## 中文解析

每次把较大的数除以较小的数，再用余数替换较大的数，这不会改变公因数。沿着十一、四、三、一的余数链继续，直到余数为零；最后非零余数一就是最大公因数。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 7. The Chinese derivation expands the reasoning.

**Answer.** $\gcd(15,221)=1$.

**Derivation/proof.** The divisions are $221=14\cdot15+11$, $15=11+4$, $11=2\cdot4+3$, $4=3+1$, and $3=3\cdot1+0$. The last nonzero remainder is $1$, so the gcd is $1$. Each step preserves common divisors by replacing the larger number by its remainder.

### 中文解答

**推导。** 辗转相除依次为 $221=15\cdot14+11$，$15=11\cdot1+4$，$11=4\cdot2+3$，$4=3\cdot1+1$，$3=1\cdot3+0$。在每一步 $u=qv+r$ 中，整除 $u,v$ 等价于整除 $v,r$，故最大公因数沿余数链不变。最后非零余数为 $1$，所以 $\gcd(15,221)=1$。

## Common Mistakes

- 把最后余数零当作最大公因数。
- 只写结果而未满足列步骤要求。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
