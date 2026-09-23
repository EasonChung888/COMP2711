---
id: "Q-2013-FINAL-P09"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Final]]"
source_pdf: "knowledge_base/past_paper/2013-final.pdf"
source_page: 12
solution_page: [12]
question_number: "9"
year: 2013
term: "spring"
exam_type: "final"
marks: 11
topics: ["[[Topic - Algorithms - 算法]]", "[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]", "[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]", "[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "The advanced-induction step must choose a constant large enough for the negative logarithmic term to absorb both the quadratic and linear additions."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-FINAL-P09

## Source

![[knowledge_base/past_paper/2013-final.pdf#page=12]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-final.pdf#page=12]].

## Question

Consider a function $T(n)$ defined on integers $n$ that are powers of 3. Suppose
$$T(1)=1,\qquad T(n)\le9T\left(\frac n3\right)+4n^2+100n\quad\forall n>1.$$
Use advanced induction to prove that $T(n)=O(n^2\log n)$.

## 中文解析

强归纳假设覆盖所有较小的三的幂，特别包括 $n/3$。关键是展开后会出现负的 $cn^2\log3$，选择足够大的 $c$ 吸收额外代价。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 12. The Chinese derivation expands the reasoning.

**Answer.** $T(n)\le c n^2\log n$ for suitable $c$; thus $T(n)=O(n^2\log n)$.

**Derivation/proof.** For $n=3$, $T(3)\le345$, so take $c\ge115/(3\log3)$. Assume $T(m)\le cm^2\log m$ for smaller powers. Then $T(n)\le9c(n/3)^2\log(n/3)+4n^2+100n=cn^2\log n-cn^2\log3+4n^2+100n\le cn^2\log n$ when $c\ge104/\log3$ (using $100n\le100n^2/3$ for $n\ge3$).

### 中文解答

**推导。** 证明在三的幂且 $n\ge3$ 时 $T(n)\le cn^2\log n$。基础点 $n=3$ 有 $T(3)\le9+36+300=345$，取 $c=104/\log3$ 足够。强归纳假设覆盖小于 n 的三的幂；对 $n\ge9$，可对 $n/3$ 使用它，得 $T(n)\le cn^2\log n-cn^2\log3+4n^2+100n$。所选 c 使负项为 $-104n^2$，而 $4n^2+100n\le104n^2$，故得所需上界。基础点与归纳步共同证明该渐近上界；$n=1$ 不需满足含 $\log1=0$ 的估计。

## Common Mistakes

- 只写主定理结论而没有归纳常数。
- 忽略 $100n$，未说明如何由二次项控制它。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - Induction - 数学归纳法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Mathematical Induction - 数学归纳法]]
- [[Induction Proof Method - 归纳证明法]]
