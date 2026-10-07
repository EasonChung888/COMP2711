---
id: "Q-2020-FINAL2-P01"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-2.pdf"
source_page: 1
question_number: "1"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Binomial Coefficients - 二项式系数]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Binomial Coefficients - 二项式系数]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]","[[Counting Method - 计数方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Splitting the square weight into an ordered pair count and a single marked choice reduces both sums by binomial identities."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1,2]
marks: 8
---
# Q-2020-FINAL2-P01

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=1]] ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=2]]

Source correction: PDF page1 expands the second sum as Σ_(i=1)^n n!/((i−2)!(n−i)!), introducing undefined(−1)! at i=1; the next expression also uses(n−2)! and so cannot cover n=1. First discard the zero i=1 term and start at i=2 for n≥2, then check n=1 separately. The official split i²=i(i−1)+i and final identity on page2 remain correct.

## Question

Prove that $\binom n1+2^2\binom n2+\ldots+n^2\binom nn=n(n+1)\cdot2^{n-2}$, where $n$ is a positive integer. [Hint: $i^2=i(i-1)+i$.]

## Official Answer

Source: [[knowledge_base/past_paper/2020-final-part-2.pdf#page=1|physical PDF page 1]]; [[knowledge_base/past_paper/2020-final-part-2.pdf#page=2|physical PDF page 2]].

$$\binom n1+2^2\cdot\binom n2+\cdots+n^2\cdot\binom nn=\sum_{i=1}^ni^2\cdot\binom ni=\sum_{i=1}^ni(i-1)\cdot\binom ni+\sum_{i=1}^ni\cdot\binom ni.$$
We have proved $\sum_{i=1}^ni\cdot\binom ni=n\cdot2^{n-1}$ in tutorial 9,
$$\begin{aligned}\sum_{i=1}^ni\cdot\binom ni&=\sum_{i=1}^ni\cdot\frac{n!}{i!(n-i)!}\\&=\sum_{i=1}^n\frac{n!}{(i-1)!(n-i)!}\\&=\sum_{i=1}^nn\cdot\frac{(n-1)!}{(i-1)!((n-1)-(i-1))!}\\&=n\cdot\sum_{i=0}^{n-1}\binom{n-1}i\\&=n\cdot2^{n-1}.\end{aligned}$$
And we use the same method to calculate $\sum_{i=1}^ni(i-1)\cdot\binom ni$,
$$\begin{aligned}\sum_{i=1}^ni(i-1)\cdot\binom ni&=\sum_{i=1}^ni(i-1)\cdot\frac{n!}{i!(n-i)!}\\&=\sum_{i=1}^n\frac{n!}{(i-2)!(n-i)!}\\&=\sum_{i=1}^nn(n-1)\cdot\frac{(n-2)!}{(i-2)!((n-2)-(i-2))!}\\&=n(n-1)\cdot2^{n-2}.\end{aligned}$$
Combine the two terms together, we have,
$$\begin{aligned}\binom n1+2^2\cdot\binom n2+\cdots+n^2\cdot\binom nn&=\sum_{i=1}^ni(i-1)\cdot\binom ni+\sum_{i=1}^ni\cdot\binom ni\\&=n\cdot2^{n-1}+n(n-1)\cdot2^{n-2}\\&=n(n+1)\cdot2^{n-2}.\end{aligned}$$

## Supplementary Explanation

**Answer.** The identity holds for every positive n.

**Derivation/proof.** For n≥2, use $i\binom ni=n\binom{n-1}{i-1}$ and $i(i-1)\binom ni=n(n-1)\binom{n-2}{i-2}$, starting the second sum at i=2. The binomial theorem gives $\sum_{i=1}^n i\binom ni=n2^{n-1}$ and $\sum_{i=2}^n i(i-1)\binom ni=n(n-1)2^{n-2}$. Add them using the hint to obtain $n[2+(n-1)]2^{n-2}=n(n+1)2^{n-2}$. At n=1 both sides equal 1, checked separately so no negative factorial occurs.

## Connections

- [[Subtopic - Binomial Coefficients - 二项式系数]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Binomial Coefficients - 二项式系数]]
- [[Counting Principles - 计数原理]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Counting Method - 计数方法]]
