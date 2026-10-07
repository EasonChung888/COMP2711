---
id: "Q-2024S-MID-P01"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 3
question_number: "1"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Order eight explicit logarithmic, polynomial, exponential and factorial functions using growth comparisons."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 5
---
# Q-2024S-MID-P01

## Source

[[2024 Spring Midterm]]; printed item 1; 5 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=3]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=3]]

## Question

Arrange the following functions in order of increasing asymptotic complexity. Note that you must write function $f(n)$ before function $g(n)$ if $f(n)=O(g(n))$. No explanation is needed.
$$n,\ n\log n,\ 3^n,\ n!,\ n^2,\ 2^n,\ n^{3/2},\ \log n$$

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=3|physical PDF page 3]].

> Answer. $\log n,n,n\log n,n^{3/2},n^2,2^n,3^n,n!$

## Supplementary Explanation

**Answer.** $\log n,n,n\log n,n^{3/2},n^2,2^n,3^n,n!$.

**Derivation/proof.** Since $\log n=o(n)$ and $\log n=o(n^{1/2})$, the eventual growth order is $\log n<n<n\log n<n^{3/2}<n^2$. Fixed-degree polynomials satisfy $n^2=o(2^n)$, and $2^n/3^n=(2/3)^n\to0$. The last half of the factors of $n!$ are each at least $n/2$, giving $n!\ge(n/2)^{n/2}$ for all sufficiently large $n$. Its ratio to $3^n$ is at least $(\sqrt{n/2}/3)^n\to\infty$. Thus the factorial comes last and all eight functions appear once.

## Connections

- [[Subtopic - Algorithms - 算法]]

- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

Order eight explicit logarithmic, polynomial, exponential and factorial functions using growth comparisons.
