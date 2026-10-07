---
id: "Q-2021-FINAL1-P06"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2021-final-part-1.pdf"
source_page: 3
question_number: "6"
year: 2021
term: "spring"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Recurrence Relations - 递推关系]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Four parity-preserving digits and two parity-flipping digits give a first-order counting recurrence."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 10
related_questions: ["[[Q-2021-FINAL2-P01 - Recurrence Relations]]"]
---
# Q-2021-FINAL1-P06

## Source

![[knowledge_base/past_paper/2021-final-part-1.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2021-final-part-1.pdf#page=4]]

## Question

How many E-Strings of length $n$ are there? Give a closed-form solution. [Hint: use a recurrence.]

Shared context: [[STEM-2021-FINAL1-P06 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2021-final-part-1.pdf#page=4|physical PDF page 4]].

> Let $E(n)$ denote the number of E-Strings of length $n$.
>
> **Base case:** $E(0)=1$
>
> **Recursive case:** For $n>0$, $E(n)=2\cdot(6^{n-1}-E(n-1))+4\cdot E(n-1)=2\cdot6^{n-1}+2\cdot E(n-1)$.
>
> $$\begin{aligned}
> E(n)&=2\cdot6^{n-1}+2\cdot E(n-1)\\
> &=2\cdot6^{n-1}+2\cdot(2\cdot6^{n-2}+2\cdot E(n-2))\\
> &=2\cdot6^{n-1}+2^2\cdot6^{n-2}+2^2\cdot E(n-2)\\
> &\quad\vdots\\
> &=\sum_{i=1}^n2^i\cdot6^{n-i}+2^n\cdot E(0)\\
> &=\sum_{i=1}^n2^n\cdot3^{n-i}+2^n\\
> &=2^n\sum_{i=0}^{n-1}3^i+2^n\\
> &=2^n\frac{3^n-1}{3-1}+2^n\\
> &=2^{n-1}(3^n-1)+2^n.
> \end{aligned}$$

## Supplementary Explanation

**Answer.** $E_n=(6^n+2^n)/2$.

**Derivation/proof.** There are four even digits and two odd digits. With E0=1, append an even digit to an even-sum prefix (4E_(n−1) choices) or an odd digit to an odd-sum prefix (2(6^(n−1)−E_(n−1)) choices). Thus E_n=2E_(n−1)+2·6^(n−1). The proposed closed form equals 1 at n=0. Substitution gives 2[(6^(n−1)+2^(n−1))/2]+2·6^(n−1)=3·6^(n−1)+2^(n−1)=(6^n+2^n)/2. This proves it by recurrence induction; E1=4 also checks the alphabet count.

The even digits are $0,2,4,8$ and the odd digits are $7,9$. Explicitly, $$E_n=4E_{n-1}+2(6^{n-1}-E_{n-1})=2E_{n-1}+2\cdot6^{n-1}.$$ Unrolling gives $$E_n=2^nE_0+\sum_{i=1}^n2^i6^{n-i}=2^n+2^n\sum_{j=0}^{n-1}3^j=2^n+2^n(3^n-1)/2=(6^n+2^n)/2.$$ The final answer contains no summation, as required by the paper.

As required, the final answer contains no summation.

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Recurrence Relations - 递推关系]]
- [[Counting Principles - 计数原理]]
- [[Recurrence-Solving Method - 递推求解法]]
- [[Counting Method - 计数方法]]

Variant/contrast: [[Q-2021-FINAL2-P01 - Recurrence Relations]] — Both count constrained strings by a recurrence: digit-sum parity versus a forbidden adjacent pair.
