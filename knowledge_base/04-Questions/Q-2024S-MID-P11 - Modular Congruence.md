---
id: "Q-2024S-MID-P11"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 16
question_number: "11"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Express a repunit geometrically, apply Fermat to 10 and justify cancellation of the factor 9 modulo p."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [16,17]
marks: 15
---
# Q-2024S-MID-P11

## Source

[[2024 Spring Midterm]]; printed item 11; 15 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=16]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=16]] ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=17]]

## Question

Let $p\ge7$ be a prime. Prove that the number with decimal representation
$$\underbrace{1111\cdots1}_{\text{p-1 times}}$$
is divisible by $p$.
Note: For example, in the special case $p=7$, note that 111111 is divisible by 7, since $111111=7\times15873$.
Hint 1: Express the number as the sum of powers of 10.
Hint 2: You may find Fermat’s Little Theorem helpful.

## 中文解析

重复一组成的数乘九可化为十的幂减一。费马小定理作用于十，但最后仍需说明九在模素数下可以消去，不能省略互素条件。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $p\mid\underbrace{111\cdots1}_{p-1\text{ digits}}$。

**推导。** 令 $S=1+10+\cdots+10^{p-2}$，共有 $p-1$ 项。等比求和给出 $9S=10^{p-1}-1$。因为 $p\ge7$ 是素数，$p\nmid10$，Fermat's Little Theorem 给出 $10^{p-1}\equiv1\pmod p$，所以 $9S\equiv0\pmod p$。又 $p\nmid9$，由素数整除乘积性质，$p\mid9S$ 必推出 $p\mid S$。这里两个排除分别保证费马定理可用与九可消去，故目标成立。

## Common Mistakes

- 数字位数为 $p-1$，最高次幂为 $p-2$，不要多算一位。
- 从 $9S\equiv0$ 到 $S\equiv0$ 必须说明 $p$ 不整除九。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]

- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Express a repunit geometrically, apply Fermat to 10 and justify cancellation of the factor 9 modulo p.
