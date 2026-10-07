---
id: "Q-2018-FINAL-P02-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 4
solution_page: [4]
question_number: "2(c)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]","[[Subtopic - Recursion - 递归]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]","[[Recurrence Relations - 递推关系]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]","[[Recurrence-Solving Method - 递推求解法]]","[[Counting Method - 计数方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Three base cases and Fibonacci monotonicity compare the different recurrence offsets."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P02-c

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=4]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=4]]

## Question

(c) Let $F_n$ be the Fibonacci numbers. Prove that $E_n\le F_n$ for all $n\ge1$ using induction. You may use the result of (b).

Shared context: [[STEM-2018-FINAL-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-final.pdf#page=4|physical PDF page 4]].

We prove this statement $P(n)$ using induction on three base cases. Observe that $E_1=F_1$ ($P(1)$), $E_2=F_2$ ($P(2)$), and $E_3=F_3$ ($P(3)$). For the inductive step, suppose that $P(k-1),P(k-2),$ and $P(k-3)$ are true. Then $E_n=E_{n-1}+E_{n-3}\le F_{n-1}+F_{n-3}\le F_{n-1}+F_{n-2}=F_n$. (For the last inequality, we use the fact that the Fibonacci sequence is non-decreasing.) So $P(k)$ is true, thus proving the statement $P(n)$ by induction.

## Supplementary Explanation

**Answer.** $E_n\le F_n$ for every $n\ge1$, with $F_1=F_2=1$.

**Derivation/proof.** The base values are $E_1=1=F_1$, $E_2=1=F_2$, $E_3=2=F_3$. For $n\ge4$, assume the inequality for all smaller positive indices. Then $E_n=E_{n-1}+E_{n-3}\le F_{n-1}+F_{n-3}\le F_{n-1}+F_{n-2}=F_n$. The middle inequality follows because the positive Fibonacci sequence is nondecreasing. Strong induction completes the proof.

The required initial matches are $E_1=F_1=1$, $E_2=F_2=1$, and $E_3=F_3=2$. Since the recurrences also agree, strong induction proves equality for every later index.

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Subtopic - Recursion - 递归]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Mathematical Induction - 数学归纳法]]
- [[Recurrence Relations - 递推关系]]
- [[Counting Principles - 计数原理]]
- [[Induction Proof Method - 归纳证明法]]
- [[Recurrence-Solving Method - 递推求解法]]
- [[Counting Method - 计数方法]]
