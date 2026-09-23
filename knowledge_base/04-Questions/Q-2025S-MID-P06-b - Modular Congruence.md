---
id: "Q-2025S-MID-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf"
source_page: 10
question_number: "6(b)"
year: 2025
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Use two different moduli to reduce a nested exponent with repeated squaring."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [10]
---
# Q-2025S-MID-P06-b

## Source

[[2025 Spring Midterm]]; printed item 6(b); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=10]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=10]]

## Question

(b) Calculate $47^{37^{27}}\bmod11$?

## 中文解析

先把底数模十一化简，再计算指数模十；两个阶段的模数不可混用。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $5$。

**推导。** 十一是素数，三与十一互素，故可用费马小定理；这一步把外层幂的指数周期转成十，再单独计算内层幂的余数。由于 $47\equiv3\pmod{11}$ 且 $3^{10}\equiv1\pmod{11}$，只需知道 $37^{27}\bmod10$。模十下 $37\equiv7$，$7^2\equiv9$、$7^4\equiv1$，所以 $7^{27}=(7^4)^6\cdot7^3\equiv343\equiv3\pmod{10}$。令 $37^{27}=10k+3$，则 $47^{37^{27}}\equiv3^{10k+3}\equiv(3^{10})^k3^3\equiv27\equiv5\pmod{11}$。中间余数三对应指数，最终余数五对应整座幂。

## Common Mistakes

- 指数是 $37^{27}$，不能误排版为 $37\cdot27$ 或 $473727$。
- 模十不能直接对底数七套素数版 Fermat，应计算四步幂周期。

## Connections

- [[Topic - Number Theory - 数论]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Use two different moduli to reduce a nested exponent with repeated squaring.

Syllabus mapping: Fermat's Little Theorem belongs to [[Subtopic - GCDs and Congruences - 最大公因数与同余]] (Rosen 4.3-4.4); the remaining residue reductions use [[Subtopic - Modular Arithmetic - 模运算]] (Rosen 4.1).
