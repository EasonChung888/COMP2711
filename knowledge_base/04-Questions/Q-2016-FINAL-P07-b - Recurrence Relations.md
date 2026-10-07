---
id: "Q-2016-FINAL-P07-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Final]]"
source_pdf: "knowledge_base/past_paper/2016-final.pdf"
source_page: 13
solution_page: [13]
question_number: "7(b)"
year: 2016
term: "fall"
exam_type: "final"
marks: 3
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Recurrence Relations - 递推关系]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Iterating the affine recurrence produces a geometric sum with n minus one expansion steps."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-FINAL-P07-b

## Source

![[knowledge_base/past_paper/2016-final.pdf#page=13]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-final.pdf#page=13]]

## Question

(b) Iterate the recurrence equation $T(n)$ in part (a) to obtain a closed form solution.

Shared context: [[STEM-2016-FINAL-P07 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2016-final.pdf#page=13|PDF physical page 13]].

(b)
$$\begin{aligned}
T(n)&=2T(n-1)+1\\&=2^2T(n-2)+2+1\\&=2^3T(n-3)+2^2+2+1\\&\quad\vdots\\&=2^{n-1}T(1)+2^{n-2}+\cdots+2^1+2^0\\&=2^{n-1}+2^{n-2}+\cdots+2^1+2^0\\&=2^n-1
\end{aligned}$$

## Supplementary Explanation

**Answer.** $T(n)=2^n-1$.

**Derivation/proof.** Starting with $T(n)=2T(n-1)+1$, after $j$ expansions, $T(n)=2^jT(n-j)+\sum_{i=0}^{j-1}2^i$. Set $j=n-1$: $T(n)=2^{n-1}T(1)+\sum_{i=0}^{n-2}2^i=2^{n-1}+(2^{n-1}-1)=2^n-1$. For $n=1$, the sum is empty and the same formula gives 1.

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Recurrence Relations - 递推关系]]
- [[Recurrence-Solving Method - 递推求解法]]
