---
id: "Q-2023S-MID-P04"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 7
question_number: "4"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Parity first forces y odd, after which the modulo-eight residues of twice a square exclude the required residue four."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [7]
marks: 13
---
# Q-2023S-MID-P04

## Source

[[2023 Spring Midterm]]; printed item 4; 13 marks.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=7]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=7]]

## Question

Find all integer pairs $(x,y)$ such that $2x^2-5y^2=7$, or prove that such integer pairs do not exist. [Hint: Consider mod 8.]

## 中文解析

先模二可知 y 必须是奇数，故 y² 模八等于一。代回原式后要求 2x² 模八等于四，但按 x 的奇偶只能得到零或二，因此不需要穷举整数就能排除所有解。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 不存在满足 $2x^2-5y^2=7$ 的整数对。

**推导。**

1. 原式模二给出 $y^2\equiv1\pmod2$，所以 $y=2k+1$ 为奇数。展开 $y^2=4k(k+1)+1$，由于相邻整数乘积 $k(k+1)$ 为偶数，有 $y^2\equiv1\pmod8$。
2. 代入原方程的模八形式，必须有 $2x^2\equiv7+5\equiv4\pmod8$。若 $x$ 偶，则 $x=2h$，$2x^2=8h^2\equiv0$；若 $x$ 奇，则平方模八为一，$2x^2\equiv2$。两种情况穷尽所有整数，却都不可能余四，矛盾。因此不是尚未找到解，而是所有整数解均被排除。

### English solution

**Answer.** There are no integer pairs $(x,y)$.

**Derivation/proof.** Reducing the equation modulo 2 yields $y^2\equiv1\pmod2$, so $y=2k+1$ is odd. Since $k(k+1)$ is even, $y^2=4k(k+1)+1\equiv1\pmod8$. The equation then forces $2x^2\equiv7+5\equiv4\pmod8$. If $x$ is even, $2x^2\equiv0\pmod8$; if $x$ is odd, $x^2\equiv1\pmod8$ and $2x^2\equiv2\pmod8$. Neither is 4, a contradiction.

## Common Mistakes

- 在模八下直接把 2 消去仍用模八不合法。 / Dividing a congruence changes the modulus.
- 仅测试小范围整数不能证明没有整数解。 / The residue contradiction covers all integers.

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]

- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Parity first forces y odd, after which the modulo-eight residues of twice a square exclude the required residue four.
