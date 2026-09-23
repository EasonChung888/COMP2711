---
id: "Q-2023S-MID-P06"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 9
question_number: "6"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Apply Euclid to the exponents only after proving that powers of two can be removed as coprime factors."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [9]
marks: 12
---
# Q-2023S-MID-P06

## Source

[[2023 Spring Midterm]]; printed item 6; 12 marks.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=9]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=9]]

## Question

Calculate $\gcd(2^{100}-1,2^{65}-1)$.

## 中文解析

直接展开两个巨大整数没有必要。用 Euclidean algorithm 把较大指数减去较小指数，关键是解释 2ⁿ 与 2ⁿ−1 互质，所以可以从公因数计算中消去该幂次因子。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\gcd(2^{100}-1,2^{65}-1)=31$。

**推导。**

1. 对 $m>n$，两个数相减得 $(2^m-1)-(2^n-1)=2^n(2^{m-n}-1)$。由 Euclidean algorithm 可用这个差替换第一数；又因 $\gcd(2^n,2^n-1)=1$，幂次因子不会贡献公因子，故
   $$\gcd(2^m-1,2^n-1)=\gcd(2^{m-n}-1,2^n-1).$$
2. 对指数重复这种减法并交换大小，相当于计算 $\gcd(100,65)$：$(100,65)\to(65,35)\to(35,30)\to(30,5)\to(5,0)$。于是原 gcd 化成 $\gcd(2^5-1,0)=31$。两个原指数也都被五整除，故 $2^5-1$ 确实整除两数，与结果一致。

### English solution

**Answer.** $31$.

**Derivation/proof.** For $m>n$, subtracting $2^n-1$ from $2^m-1$ gives $2^n(2^{m-n}-1)$. Since $\gcd(2^n,2^n-1)=1$, this proves
$$\gcd(2^m-1,2^n-1)=\gcd(2^{m-n}-1,2^n-1).$$
The Euclidean reductions of exponents are $(100,65)\to(65,35)\to(35,30)\to(30,5)\to(5,0)$. Hence the gcd is $2^5-1=31$. Both original exponents are multiples of 5, consistent with divisibility by 31.

## Common Mistakes

- 未经证明就把 gcd 移入指数只是在引用结论。 / Justify the exponent reduction.
- 将 gcd(100,65) 错算为 35 会把一次余数当最终 gcd。 / Continue Euclid to 5.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]

- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Apply Euclid to the exponents only after proving that powers of two can be removed as coprime factors.
