---
id: "Q-2024S-FINAL-P01-N"
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
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Locate an explicit integer threshold with 2^8>3(8)^2, then connect to the separately imported induction proof."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
marks: 3
related_questions: ["[[Q-2024S-FINAL-P01-proof - Mathematical Induction]]"]
---
# Q-2024S-FINAL-P01-N

## Source

[[2024 Spring Final]]; printed item 1; 3 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=1]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=1]]

Atomic extraction: Problem 1 combines finding N and an induction proof. The page 1 grading strategy explicitly awards 3 points for a correct N. The proof rubric separately awards 3 points for the base case and 4 for the inductive step; no invented single proof-atom mark is assigned.

## Question

Find an integer $N$ such that $2^n>3n^2$ whenever $n$ is greater than $N$.

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

**Answer.** Take $N=7$.

**Derivation/proof.** $2^7=128<147=3\cdot7^2$, whereas $2^8=256>192=3\cdot8^2$, so choosing $N=7$ makes $n=8$ the starting case. For $k\ge8$, $2k^2-(k+1)^2=k^2-2k-1>0$. Thus, if $2^k>3k^2$, then $2^{k+1}>6k^2>3(k+1)^2$. Repeated application from the starting case covers every $n>7$. Any larger integer threshold also works.

## Connections

- [[Subtopic - Induction - 数学归纳法]]

- [[Mathematical Induction - 数学归纳法]]
- [[Induction Proof Method - 归纳证明法]]

Locate an explicit integer threshold with 2^8>3(8)^2, then connect to the separately imported induction proof.

- Used by: [[Q-2024S-FINAL-P01-proof - Mathematical Induction]]: 此结果在后续小题中的具体用途：The selected threshold is $N=7$; therefore the statement to prove is $2^n>3n^2$ for all integers $n\ge8$.
