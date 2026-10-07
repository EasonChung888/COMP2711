---
id: "Q-2024S-FINAL-P01-proof"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Final.pdf"
source_page: 1
question_number: "1"
year: 2024
term: "spring"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Prove the n=8 base case and inductive inequality 2k^2>(k+1)^2 under k≥8 for the selected threshold."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
related_questions: ["[[Q-2024S-FINAL-P01-N - Mathematical Induction]]"]
---
# Q-2024S-FINAL-P01-proof

## Source

[[2024 Spring Final]]; printed item 1. No separate atomic mark allocation is printed.

![[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=1]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=1]]

Atomic extraction of the proof request from the combined Problem 1; no separate atomic marks are assigned.

Prerequisite context (editorial): [[Q-2024S-FINAL-P01-N - Mathematical Induction]]. The selected threshold is $N=7$; therefore the statement to prove is $2^n>3n^2$ for all integers $n\ge8$.

## Question

Prove that your result is correct using mathematical induction.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=1|physical PDF page 1]].

> Answer: We want to find an integer $N$ such that $2^n>3n^2$ for all $n>N$. We choose $N=7$. We will use induction to prove that $2^n>3n^2$ whenever $n\ge8$.
> Base case: For $n=8$, we have $2^8>3(8)^2$, because $2^8=256$ and $3(8)^2=3\cdot64=192$.
> Induction step: For the inductive hypothesis, suppose that $2^k>3k^2$ holds for some integer $k\ge8$. We want to show that $2^{k+1}>3(k+1)^2$.
> Applying the inductive hypothesis, we get $2^{k+1}=2\cdot2^k>2\cdot3k^2$. Thus
> $$2^{k+1}>2(3k^2)=3(2k^2)=3(k^2+k^2)\ge3(k^2+3k),$$
> where in the last step we have used the fact that $k\ge3$ (recall that $k\ge8$). Thus
> $$2^{k+1}\ge3(k^2+3k)=3(k^2+2k+k)\ge3(k^2+2k+1),$$
> since $k\ge1$ (recall that $k\ge8$). Thus $2^{k+1}>3(k+1)^2$, which completes the inductive step. Therefore, we have shown that $N=7$ satisfies the condition that $2^n>3n^2$ for all $n>N$.

## Supplementary Explanation

**Answer.** $2^n>3n^2$ for every integer $n\ge8$.

**Derivation/proof.** Use the preceding choice $N=7$. Base case: at $n=8$, $2^8=256>192=3\cdot8^2$. Inductive hypothesis: suppose $2^k>3k^2$ for some $k\ge8$. Then $2^{k+1}=2\cdot2^k>6k^2$. Since $k\ge8$, $2k^2-(k+1)^2=(k-1)^2-2\ge49-2>0$, so $6k^2>3(k+1)^2$. Combining these strict inequalities proves the next case. Mathematical induction gives the result for all $n\ge8$, equivalently $n>N$.

## Connections

- [[Subtopic - Induction - 数学归纳法]]

- [[Mathematical Induction - 数学归纳法]]
- [[Induction Proof Method - 归纳证明法]]

Prove the n=8 base case and inductive inequality 2k^2>(k+1)^2 under k≥8 for the selected threshold.

- Prerequisite: [[Q-2024S-FINAL-P01-N - Mathematical Induction]]: 本题导入此前提/结果以完成当前计算或证明：The selected threshold is $N=7$; therefore the statement to prove is $2^n>3n^2$ for all integers $n\ge8$.
