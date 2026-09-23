---
id: "Q-2024S-MID-P12-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 18
question_number: "12(a)"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Use gcd divisibility of every integer linear combination and positivity to establish its minimum possible positive size."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [18]
marks: 5
related_questions: ["[[Q-2024S-MID-P12-b - Modular Congruence]]"]
---
# Q-2024S-MID-P12-a

## Source

[[2024 Spring Midterm]]; printed item 12(a); 5 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=18]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=18]]

## Question

(a) Let $a$ and $m$ be positive integers. Prove that no positive integer smaller than $\gcd(a,m)$ can be expressed as an integer linear combination of $a$ and $m$.

## 中文解析

最大公因数整除两个系数，所以也整除任何整数线性组合。正的倍数至少是最大公因数本身；这个下界不依赖两个线性系数的符号。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 正的整数线性组合均至少为 $\gcd(a,m)$。

**推导。** 设 $d=\gcd(a,m)>0$。按公因数定义，存在整数 $u,v$ 使 $a=du,m=dv$。任取整数线性组合 $y=ra+sm$，其中 $r,s\in\mathbb Z$，则 $y=d(ru+sv)$，所以 $d\mid y$。若 $y>0$，整数 $ru+sv$ 必至少为一，故 $y\ge d$。因此不可能得到满足 $0<y<d$ 的整数，这正是待证结论。

## Common Mistakes

- 线性组合允许负系数；证明不能假定所有项均正。
- 结论限制正整数，零确实可以由 $0a+0m$ 表示。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]

- [[Modular Congruence - 同余]]
- [[Proof Method - 证明方法]]

Use gcd divisibility of every integer linear combination and positivity to establish its minimum possible positive size.

- Used by: [[Q-2024S-MID-P12-b - Modular Congruence]]: 此结果在后续小题中的具体用途：Part (a) states that no positive integer smaller than $\gcd(a,m)$ is an integer linear combination of $a$ and $m$.
