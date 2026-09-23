---
id: "Q-2020-MID-P09"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 4
question_number: "9"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Fermat reduces a sufficient exponent condition modulo twenty-two, then five is inverted."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 10
---
# Q-2020-MID-P09

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=5]]

## Question

Solve $3^{5x-2}\equiv9\pmod{23}$. The solution is not unique, any solution is acceptable. [Hint: Use Fermat’s Little Theorem.]

## 中文解析

费马小定理给出周期二十二，只需让指数与二同余即可保证结果为九。把这个要求变成模二十二的线性同余，求出 x=14，再直接代指数验证。题目允许任一解，不必把充分条件误称为完整解集。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** One solution is $x=14$; indeed every $x=14+22k$ with $k\ge0$ works.

**Derivation/proof.** Because 23 is prime and coprime to 3, $3^{22}\equiv1\pmod{23}$. It suffices to make $5x-2\equiv2\pmod{22}$, or $5x\equiv4\pmod{22}$. The inverse of 5 modulo 22 is 9, since $5\cdot9=45\equiv1$. Hence $x\equiv36\equiv14$. At x=14 the exponent is 68=3·22+2, so $3^{68}\equiv3^2=9$. This constructs acceptable solutions without claiming that Fermat's period is minimal.

### 中文解答

**推导。** 因 $23$ 为质数且 $\gcd(3,23)=1$，费马小定理给 $3^{22}\equiv1\pmod{23}$。要使 $3^{5x-2}\equiv3^2$，只需令 $5x-2\equiv2\pmod{22}$，即 $5x\equiv4\pmod{22}$。$5\cdot9=45\equiv1\pmod{22}$，故 $x\equiv36\equiv14\pmod{22}$。取 $x=14$，指数 $68=3\cdot22+2$，所以 $3^{68}\equiv(3^{22})^3\cdot3^2\equiv9\pmod{23}$。题目任一解即可，这已足够；$14+22k$ 也给一族合法解，但不声称 $22$ 是 $3$ 的最小周期。

## Common Mistakes

- 把指数模数用成二十三。
- 未经阶的计算就声称周期二十二是最小周期。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
