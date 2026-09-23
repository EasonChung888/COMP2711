---
id: "Q-2023F-FINAL-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Final.pdf"
source_page: 10
question_number: "6(b)"
year: 2023
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Reduce 17 to 3 modulo 14 and use the short cycle 3 cubed equals minus one to handle exponent 2023."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [10]
marks: 3
---
# Q-2023F-FINAL-P06-b

## Source

[[2023 Fall Final]]; printed item 6(b); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=10]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=10]]

## Question

What is the remainder of $17^{2023}\bmod14$?

## 中文解析

先将底数十七约化成三，再观察三次方模十四等于负一。指数 2023 分成三乘 674 再加一，其中 674 是偶数，因此这一大块的余数为一，只留下一个三。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 余数为三。

**推导。**

1. 先化简底数 $17\equiv3\pmod{14}$，并观察短周期 $3^3=27\equiv-1\pmod{14}$。将指数分解为 $2023=3\cdot674+1$，可以直接使用这个立方余数。
2. 因此
   $$17^{2023}\equiv(3^3)^{674}\cdot3\equiv(-1)^{674}\cdot3=3\pmod{14}.$$
   这里 $674$ 是偶数，故负一的幂为正一。结果三已在零到十三的标准余数范围内；另由 $3^6\equiv1$ 且 $2023\equiv1\pmod6$ 也得到相同结果，不必展开大整数。

### English solution

**Answer.** $3$.

**Derivation/proof.** Since $17\equiv3\pmod{14}$ and $3^3=27\equiv-1\pmod{14}$, write $2023=3\cdot674+1$. Then
$$17^{2023}\equiv3^{2023}=(3^3)^{674}\cdot3\equiv(-1)^{674}\cdot3=3\pmod{14}.$$
The residue 3 is already between 0 and 13, so it is the requested remainder. Equivalently, $3^6\equiv1$ and $2023\equiv1\pmod6$, confirming the same cycle calculation.

## Common Mistakes

- 费马小定理不能把合数模十四当作素数模数。 / Use the explicit cycle.
- 计算 2023 除三的余数时要保留末尾的一个三。 / The leftover exponent is one.

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]

- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Reduce 17 to 3 modulo 14 and use the short cycle 3 cubed equals minus one to handle exponent 2023.
