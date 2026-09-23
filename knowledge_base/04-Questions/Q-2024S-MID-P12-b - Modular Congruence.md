---
id: "Q-2024S-MID-P12-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 18
question_number: "12(b)"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Turn an assumed modular inverse into a representation of 1 contradicting the gcd lower bound from 12(a)."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [18]
marks: 5
related_questions: ["[[Q-2024S-MID-P12-a - Modular Congruence]]"]
---
# Q-2024S-MID-P12-b

## Source

[[2024 Spring Midterm]]; printed item 12(b); 5 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=18]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=18]]

Prerequisite context (editorial): [[Q-2024S-MID-P12-a - Modular Congruence]]. Part (a) states that no positive integer smaller than $\gcd(a,m)$ is an integer linear combination of $a$ and $m$.

## Question

(b) Let $a$ and $m$ be positive integers. Use the fact given in part (a) to prove that if $\gcd(a,m)>1$, then $a$ does not have a multiplicative inverse modulo $m$.

## 中文解析

逆元的定义把一写成 a 与 m 的整数线性组合。当最大公因数大于一时，这正落在上一小题禁止的正整数范围中。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 若 $\gcd(a,m)>1$，则 $a$ 模 $m$ 无乘法逆元。

**推导。** 令 $d=\gcd(a,m)>1$，反设存在整数 $b$ 为逆元，即 $ab\equiv1\pmod m$。同余定义意味着某个整数 $t$ 满足 $ab-1=tm$，即 $1=ba-tm$。这是 $a,m$ 的整数线性组合，系数分别是 $b,-t$。由导入的 (a)，任何正的此类组合不能小于 $d$，但 $0<1<d$，矛盾。所以这样的 $b$ 不存在，$a$ 模 $m$ 没有乘法逆元。

## Common Mistakes

- 不能把 $ab\equiv1\pmod m$ 当成普通等式 $ab=1$。
- 需要用 $d>1$ 比较一与最大公因数，互素时该矛盾并不存在。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]

- [[Modular Congruence - 同余]]
- [[Proof Method - 证明方法]]

Turn an assumed modular inverse into a representation of 1 contradicting the gcd lower bound from 12(a).

- Prerequisite: [[Q-2024S-MID-P12-a - Modular Congruence]]: 本题导入此前提/结果以完成当前计算或证明：Part (a) states that no positive integer smaller than $\gcd(a,m)$ is an integer linear combination of $a$ and $m$.
