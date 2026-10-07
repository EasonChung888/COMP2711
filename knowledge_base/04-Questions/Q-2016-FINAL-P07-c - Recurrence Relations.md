---
id: "Q-2016-FINAL-P07-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Final]]"
source_pdf: "knowledge_base/past_paper/2016-final.pdf"
source_page: 13
solution_page: [13,14]
question_number: "7(c)"
year: 2016
term: "fall"
exam_type: "final"
marks: 3
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]","[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]","[[Recurrence Relations - 递推关系]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]","[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Substituting the n minus one closed form into the recurrence proves the next value after checking the base."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-FINAL-P07-c

## Source

![[knowledge_base/past_paper/2016-final.pdf#page=13]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-final.pdf#page=13]] ![[knowledge_base/past_paper/2016-final.pdf#page=14]]

## Question

(c) Prove that the closed form solution in part (b) is correct by induction.

Shared context: [[STEM-2016-FINAL-P07 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2016-final.pdf#page=13|PDF physical page 13]]; [[knowledge_base/past_paper/2016-final.pdf#page=14|PDF physical page 14]].

(c) Base case $(n=1)$: $T(1)=1=2^1-1$, so the base case is true.

Assume that $T(n-1)=2^{n-1}-1$ is true for $n>1$,
$$\begin{aligned}T(n)&=2T(n-1)+1\\&=2(2^{n-1}-1)+1\\&=2^n-2+1=2^n-1\end{aligned}$$
By the principle of mathematical induction, we have proved that $T(n)=2^n-1$ is true for $n\ge1$.

## Supplementary Explanation

**Answer.** For every $n\ge1$, $T(n)=2^n-1$.

**Derivation/proof.** Base case: $T(1)=1=2^1-1$. Assume $T(n-1)=2^{n-1}-1$ for $n>1$. Then $T(n)=2T(n-1)+1=2(2^{n-1}-1)+1=2^n-1$. By induction the formula holds for all positive integers.

The constant simplification is $2^n-2+1=2^n-1$. This induction verifies the closed form, whereas part (a) justified the combinatorial recurrence.

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Subtopic - Recursion - 递归]]
- [[Mathematical Induction - 数学归纳法]]
- [[Recurrence Relations - 递推关系]]
- [[Induction Proof Method - 归纳证明法]]
- [[Recurrence-Solving Method - 递推求解法]]
