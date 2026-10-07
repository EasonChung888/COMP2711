---
id: "Q-2024F-FINAL-P09-b-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 24
question_number: "9(b)(iii)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]","[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]","[[Recurrence Relations - 递推关系]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Verify the triangular closed form with n=1 base and substitute T(k)=k(k+1)/2 into the row-addition recurrence."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [24]
marks: 2
related_questions: ["[[Q-2024F-FINAL-P09-b-i - Recurrence Relations]]","[[Q-2024F-FINAL-P09-b-ii - Recurrence Relations]]"]
---
# Q-2024F-FINAL-P09-b-iii

## Source

[[2024 Fall Final]]; printed item 9(b)(iii); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=24]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=24]]

Prerequisite context (editorial): [[Q-2024F-FINAL-P09-b-i - Recurrence Relations]]. Use $T(1)=1$ and $T(n)=T(n-1)+n$ for $n\ge2$.

Prerequisite context (editorial): [[Q-2024F-FINAL-P09-b-ii - Recurrence Relations]]. The candidate closed formula to prove is $T(n)=n(n+1)/2$.

## Question

(iii) Prove the closed formula for $T(n)$ using induction.

Shared printed context: ![[STEM-2024F-FINAL-P09-b - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=24|physical PDF page 24]].

> (iii) Base Case: $n=1:1=\frac{1\cdot2}2$.
> Induction hypothesis: $n=k$ then $T_k=\frac{k\cdot(k+1)}2$.
> For $n=k+1$ we need to prove $T_{k+1}=\frac{(k+1)\cdot(k+2)}2$.
> $$T_{k+1}=T(k)+(k+1)=\frac{k\cdot(k+1)}2+\frac{2(k+1)}2=\frac{(k+1)(k+2)}2.$$

## Supplementary Explanation

**Answer.** For all positive integers $n$, $T(n)=n(n+1)/2$.

**Derivation/proof.** Base case: $n=1$ gives $T(1)=1=1\cdot2/2$. The inductive hypothesis is $T(k)=k(k+1)/2$ for some $k\ge1$. Using the established recurrence, $T(k+1)=T(k)+(k+1)=k(k+1)/2+2(k+1)/2=(k+1)(k+2)/2$. This is precisely the formula with $n=k+1$. The step and base case therefore establish the result for all positive integers $n$.

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Subtopic - Recursion - 递归]]

- [[Mathematical Induction - 数学归纳法]]
- [[Recurrence Relations - 递推关系]]
- [[Induction Proof Method - 归纳证明法]]

Verify the triangular closed form with n=1 base and substitute T(k)=k(k+1)/2 into the row-addition recurrence.

- Prerequisite: [[Q-2024F-FINAL-P09-b-i - Recurrence Relations]]: 本题导入此前提/结果以完成当前计算或证明：Use $T(1)=1$ and $T(n)=T(n-1)+n$ for $n\ge2$.
- Prerequisite: [[Q-2024F-FINAL-P09-b-ii - Recurrence Relations]]: 本题导入此前提/结果以完成当前计算或证明：The candidate closed formula to prove is $T(n)=n(n+1)/2$.
