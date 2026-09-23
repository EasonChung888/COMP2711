---
id: "Q-2023F-MID-P03-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf"
source_page: 7
question_number: "3(c)"
year: 2023
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Countably many finite integer coefficient lists describe the polynomials, each of which contributes finitely many roots."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [7]
marks: 3
---
# Q-2023F-MID-P03-c

## Source

[[2023 Fall Midterm]]; printed item 3(c); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=7]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=7]]

This is the printed 3(c) bonus item, worth 3 marks. The proof uses the at-most-countable union theorem directly; it does not depend on the ambiguous infinite wording quarantined in 3(b)(i).

## Question

An algebraic number is a number that is a root of a non-zero polynomial in one variable with integer coefficients. As an example, $(1+\sqrt5)/2$ is an algebraic number, because it is a root of the polynomial $x^2-x-1$. Or, the complex number $i+1$ is an algebraic number as it is a root of $x^4+4$. Briefly argue why we have countably many algebraic numbers.

Hint: Try to think about how many polynomials exist and how many roots each one has. You may use the result of any of (b) as well.

## 中文解析

按次数分组后，每个多项式由有限个整数系数确定，因而所有多项式可枚举。非零多项式的根只有有限多个，再对这些有限根集合取可数并集就得到所有 algebraic numbers，最后用整数子集说明不是有限集。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** Algebraic numbers 构成 countably infinite 集合。

**推导。**

1. 固定次数 $d$，每个非零整系数多项式由有限元组 $(a_0,\ldots,a_d)\in\mathbb Z^{d+1}$ 且 $a_d\ne0$ 决定。整数可数，有限整数元组也可数；再对 $d=0,1,\ldots$ 取可数并集，得到全部非零整系数多项式仍然可数。
2. 每个 $d$ 次非零多项式至多有 $d$ 个不同复根，所以所有代数数是上述可数多个有限根集合的并集，至多可数。非零条件重要：零多项式会以所有复数为根。
3. 每个整数 $k$ 都是 $x-k$ 的根，因此代数数集合包含无限的整数子集，不可能有限。把“至多可数”与“无限”合起来，才得到所需的无限可数结论。

### English solution

**Answer.** The algebraic numbers form a countably infinite set.

**Derivation/proof.** For every degree d, a polynomial is specified by a tuple $(a_0,\ldots,a_d)\in\mathbb Z^{d+1}$ with $a_d\ne0$, and finite integer tuples form a countable set. Taking the union over nonnegative d leaves countably many nonzero polynomials. Each degree-d polynomial has at most d distinct complex roots. Thus the algebraic numbers are a countable union of finite root sets, hence at most countable. Every integer k is a root of $x-k$, so the set is infinite and therefore countably infinite.

## Common Mistakes

- 零多项式必须排除，否则所有复数都会被它当作根。 / The nonzero condition is essential.
- 只说每个多项式根有限还不够，必须同时说明多项式族可数。 / Control both the number of polynomials and roots.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]

- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Countably many finite integer coefficient lists describe the polynomials, each of which contributes finitely many roots.
