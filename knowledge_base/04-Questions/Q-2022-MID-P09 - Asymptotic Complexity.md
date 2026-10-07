---
id: "Q-2022-MID-P09"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 4
question_number: "9"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 3
difficulty_basis: "The radical covers 2n while the logarithm of 2 to n reduces to a linear function."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 6
---
# Q-2022-MID-P09

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=4]]

## Question

Arrange the following running times in order of increasing asymptotic complexity. Just give the answer; no explanation is needed.

$2^n,\sqrt{2n},n^2+20,\log(n^3),\log(2^n),n^{1/3}\log n$

Note that you must write function $f(n)$ before function $g(n)$ if $f(n)=O(g(n))$.

## Official Answer

Source: [[knowledge_base/past_paper/2022-midterm.pdf#page=4|physical PDF page 4]].

> $\log(n^3),\ n^{1/3}\log n,\ \sqrt{2n},\ \log(2^n),\ n^2+20,\ 2^n$

## Supplementary Explanation

**Answer.** $\log(n^3),\ n^{1/3}\log n,\ \sqrt{2n},\ \log(2^n),\ n^2+20,\ 2^n$.

**Derivation/proof.** The orders simplify to log n, n^(1/3)log n, n^(1/2), n, n², and 2^n. For the only close comparison, n^(1/3)log n divided by √(2n) equals (log n)/(√2 n^(1/6)), which tends to zero. Other adjacent ratios also tend to zero: log versus positive power, square-root versus linear, linear versus quadratic, and polynomial versus exponential. The printed radical is √(2n), not √(2^n).

The critical ratio is $\frac{n^{1/3}\log n}{\sqrt{2n}}=\frac{\log n}{\sqrt2\,n^{1/6}}\to0$. The other adjacent ratios are $3/n^{1/3}$, a constant times $n^{-1/2}$, a constant times $1/n$, and $(n^2+20)/2^n$, all tending to zero.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
