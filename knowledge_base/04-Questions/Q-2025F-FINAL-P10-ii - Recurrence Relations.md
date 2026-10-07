---
id: "Q-2025F-FINAL-P10-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 17
question_number: "10(ii)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Recurrence Relations - 递推关系]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Unroll an affine recurrence and combine the accumulated losses as a finite geometric series."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [17]
marks: 4
related_questions: ["[[Q-2025F-FINAL-P10-i - Recurrence Relations]]","[[Q-2025F-FINAL-P10-iii - Mathematical Induction]]"]
---
# Q-2025F-FINAL-P10-ii

## Source

[[2025 Fall Final]]; printed item 10(ii); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=17]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=17]]

Prerequisite context (editorial): [[Q-2025F-FINAL-P10-i - Recurrence Relations]]. $a_0=10$ and $a_n=2a_{n-1}-2$ for n≥1.

## Question

![[STEM-2025F-FINAL-P10 - Shared Problem Prompt#Shared printed wording]]

(ii) [4 points] Find the closed-form formula for $a_n$ using the expansion method.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=17|physical PDF page 17]].

(ii) We use the recurrence $a_n=2a_{n-1}-2$ and substitute repeatedly:
$$\begin{aligned}
a_n&=2a_{n-1}-2\\
&=2(2a_{n-2}-2)-2=2^2a_{n-2}-2\cdot2-2\\
&=2^2(2a_{n-3}-2)-2\cdot2-2=2^3a_{n-3}-2\cdot2^2-2\cdot2-2\\
&\quad\vdots\\
&=2^na_0-2(2^{n-1}+2^{n-2}+\cdots+2+1).
\end{aligned}$$
The sum in parentheses is a geometric series:
$$2^{n-1}+2^{n-2}+\cdots+2+1=2^n-1.$$
Thus,
$$a_n=2^na_0-2(2^n-1)=2^n\cdot10-2\cdot2^n+2=10\cdot2^n-2^{n+1}+2.$$
Simplifying:
$$a_n=10\cdot2^n-2^{n+1}+2=(10-2)\cdot2^n+2=8\cdot2^n+2.$$
Therefore the explicit formula is
$$a_n=8\cdot2^n+2\quad\text{for all }n\ge0.$$

## Supplementary Explanation

**Answer.** $a_n=8\cdot2^n+2$.

**Derivation/proof.** Start with $a_n=2a_{n-1}-2$ and $a_0=10$. Expanding twice gives $a_n=2^2a_{n-2}-2(2+1)$; three expansions give $2^3a_{n-3}-2(2^2+2+1)$. Continue to day zero:
$$a_n=2^na_0-2\sum_{j=0}^{n-1}2^j.$$
The finite geometric sum equals $2^n-1$, so
$$a_n=10\cdot2^n-2(2^n-1)=8\cdot2^n+2.$$
For $n=0$, the empty sum is zero and the formula gives ten. For $n=1$ it gives 18, consistent with the first day's update.

## Connections

- [[Topic - Induction and Recursion - 归纳与递归]]
- [[Subtopic - Recursion - 递归]]
- [[Recurrence Relations - 递推关系]]
- [[Recurrence-Solving Method - 递推求解法]]

Unroll an affine recurrence and combine the accumulated losses as a finite geometric series.

- Prerequisite / related: [[Q-2025F-FINAL-P10-i - Recurrence Relations]]: 展开每日更新得到显式表达。 $a_0=10$ and $a_n=2a_{n-1}-2$ for n≥1.
- Follow-on / contrast: [[Q-2025F-FINAL-P10-iii - Mathematical Induction]]: 对展开所得指数闭式作归纳验证。
