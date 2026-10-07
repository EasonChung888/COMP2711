---
id: "Q-2024F-FINAL-P09-b-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 24
question_number: "9(b)(ii)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Recurrence Relations - 递推关系]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Unroll the triangular-number recurrence into 1+...+n and pair forward/reverse sums for the exact formula."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [24]
marks: 2
related_questions: ["[[Q-2024F-FINAL-P09-b-i - Recurrence Relations]]","[[Q-2024F-FINAL-P09-b-iii - Mathematical Induction]]"]
---
# Q-2024F-FINAL-P09-b-ii

## Source

[[2024 Fall Final]]; printed item 9(b)(ii); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=24]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=24]]

Prerequisite context (editorial): [[Q-2024F-FINAL-P09-b-i - Recurrence Relations]]. The imported recurrence is $T(1)=1$ and $T(n)=T(n-1)+n$ for $n\ge2$.

## Question

(ii) Calculate the closed form formula for $T(n)$

Shared printed context: ![[STEM-2024F-FINAL-P09-b - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=24|physical PDF page 24]].

> (ii) $T(n)=n+T(n-1)=n+(n-1)+T(n-2)=\cdots=n+(n-1)+(n-2)+\cdots+1=\frac{n\cdot(n+1)}2$.

## Supplementary Explanation

**Answer.** $T(n)=n(n+1)/2$.

**Derivation/proof.** Use $T(1)=1,T(n)=T(n-1)+n$. Repeated substitution gives $T(n)=n+(n-1)+T(n-2)=\cdots=n+(n-1)+\cdots+1$. Call this sum $S$ and also write $S=1+2+\cdots+n$. Adding term by term gives $n$ copies of $n+1$, so $2S=n(n+1)$ and $S=n(n+1)/2$. This is the desired closed form; at $n=1$ it gives one, agreeing with the initial value.

## Connections

- [[Subtopic - Recursion - 递归]]

- [[Recurrence Relations - 递推关系]]
- [[Recurrence-Solving Method - 递推求解法]]

Unroll the triangular-number recurrence into 1+...+n and pair forward/reverse sums for the exact formula.

- Prerequisite: [[Q-2024F-FINAL-P09-b-i - Recurrence Relations]]: 本题导入此前提/结果以完成当前计算或证明：The imported recurrence is $T(1)=1$ and $T(n)=T(n-1)+n$ for $n\ge2$.
- Used by: [[Q-2024F-FINAL-P09-b-iii - Mathematical Induction]]: 此结果在后续小题中的具体用途：The candidate closed formula to prove is $T(n)=n(n+1)/2$.
