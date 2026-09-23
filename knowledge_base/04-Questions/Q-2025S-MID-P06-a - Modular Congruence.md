---
id: "Q-2025S-MID-P06-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf"
source_page: 10
question_number: "6(a)"
year: 2025
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Reduce a power tower exponent modulo sixteen before applying Fermat modulo seventeen."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [10]
---
# Q-2025S-MID-P06-a

## Source

[[2025 Spring Midterm]]; printed item 6(a); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=10]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=10]]

## Question

(a) Define $2\uparrow n$ by $2\uparrow0=1$ and $2\uparrow n=2^{2\uparrow(n-1)}$. In other words,
$$2\uparrow n=\underbrace{2^{2^{\cdot^{\cdot^2}}}}_{n}$$
where there are $n$ 2's in the tower.
Compute $2\uparrow100\pmod{17}$.
Hint: Use Fermat's Little Theorem.

## 中文解析

塔顶的指数本身极大，但计算模十七只需知道它模十六的余数。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $1$。

**推导。** 十七是素数且与二互素，Fermat's Little Theorem 给出 $2^{16}\equiv1\pmod{17}$。有 $2\uparrow2=4$、$2\uparrow3=16$，并且对所有 $t\ge3$，$2\uparrow t=2^{2\uparrow(t-1)}$ 的指数至少为四，因此 $16\mid2\uparrow t$。特别地，写 $2\uparrow99=16k$，则 $2\uparrow100=2^{16k}\equiv(2^{16})^k\equiv1\pmod{17}$。这只约化最外层指数，没有把塔高度误作普通幂指数。

## Common Mistakes

- 不能把 $2\uparrow100$ 当成 $2^{100}$，递归定义的运算完全不同。
- Fermat 约化指数用十六而非十七，底数的模数才是十七。

## Connections

- [[Topic - Number Theory - 数论]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Reduce a power tower exponent modulo sixteen before applying Fermat modulo seventeen.

Syllabus mapping: Fermat's Little Theorem belongs to [[Subtopic - GCDs and Congruences - 最大公因数与同余]] (Rosen 4.3-4.4); the remaining residue reductions use [[Subtopic - Modular Arithmetic - 模运算]] (Rosen 4.1).
