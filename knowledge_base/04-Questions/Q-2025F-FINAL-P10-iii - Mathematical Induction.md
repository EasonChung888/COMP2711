---
id: "Q-2025F-FINAL-P10-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 17
question_number: "10(iii)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Check the zero-day basis and substitute the exponential closed form into the next-day recurrence."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [18]
marks: 4
related_questions: ["[[Q-2025F-FINAL-P10-i - Recurrence Relations]]","[[Q-2025F-FINAL-P10-ii - Recurrence Relations]]"]
---
# Q-2025F-FINAL-P10-iii

## Source

[[2025 Fall Final]]; printed item 10(iii); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=17]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=18]]

Prerequisite context (editorial): [[Q-2025F-FINAL-P10-i - Recurrence Relations]]. $a_0=10$ and $a_{n+1}=2a_n-2$.

Prerequisite context (editorial): [[Q-2025F-FINAL-P10-ii - Recurrence Relations]]. The candidate from (ii) is $a_n=8\cdot2^n+2$.

## Question

![[STEM-2025F-FINAL-P10 - Shared Problem Prompt#Shared printed wording]]

(iii) [4 points] Prove that your closed-form formula is correct using mathematical induction.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=18|physical PDF page 18]].

(iii) Proof by mathematical induction.

**Base case ($n=0$):**
$$8\cdot2^0+2=8\cdot1+2=10=a_0\quad\checkmark$$
**Inductive hypothesis:** Assume that for some integer $k\ge0$, $a_k=8\cdot2^k+2$.

**Inductive step:** Using the recurrence,
$$\begin{aligned}
a_{k+1}&=2a_k-2&&(1)\\
&=2(8\cdot2^k+2)-2&&(2)\\
&=16\cdot2^k+4-2&&(3)\\
&=16\cdot2^k+2&&(4)\\
&=8\cdot2^{k+1}+2.&&(5)
\end{aligned}$$
This is exactly the formula for $n=k+1$.

By mathematical induction, $a_n=8\cdot2^n+2$ holds for all integers $n\ge0$.

## Supplementary Explanation

**Answer.** $a_n=8\cdot2^n+2$ for every integer $n\ge0$.

**Derivation/proof.** Use $a_0=10$ and $a_{n+1}=2a_n-2$. The base case is $8\cdot2^0+2=10=a_0$. Assume $a_k=8\cdot2^k+2$ for some $k\ge0$. By the recurrence,
$$a_{k+1}=2a_k-2=2(8\cdot2^k+2)-2=16\cdot2^k+2=8\cdot2^{k+1}+2.$$
This is precisely the proposed expression for day $k+1$. Mathematical induction therefore establishes the formula for every nonnegative integer day.

## Connections

- [[Topic - Induction and Recursion - 归纳与递归]]
- [[Subtopic - Induction - 数学归纳法]]
- [[Mathematical Induction - 数学归纳法]]
- [[Induction Proof Method - 归纳证明法]]

Check the zero-day basis and substitute the exponential closed form into the next-day recurrence.

- Prerequisite / related: [[Q-2025F-FINAL-P10-i - Recurrence Relations]]: 证明步骤使用按题意构建的每日递推。 $a_0=10$ and $a_{n+1}=2a_n-2$.
- Prerequisite / related: [[Q-2025F-FINAL-P10-ii - Recurrence Relations]]: 对展开所得指数闭式作归纳验证。 The candidate from (ii) is $a_n=8\cdot2^n+2$.
