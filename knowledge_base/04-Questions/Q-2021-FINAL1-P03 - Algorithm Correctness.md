---
id: "Q-2021-FINAL1-P03"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2021-final-part-1.pdf"
source_page: 2
question_number: "3"
year: 2021
term: "spring"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]","[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]","[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Algorithm Correctness - 算法正确性]]","[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Algorithm Trace and Invariant Method - 算法跟踪与不变量方法]]","[[Induction Proof Method - 归纳证明法]]"]
question_types: ["construction","proof"]
difficulty: 4
difficulty_basis: "One comparison eliminates a candidate, and two final checks per other worker certify the survivor."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2,3]
marks: 10
---
# Q-2021-FINAL1-P03

## Source

![[knowledge_base/past_paper/2021-final-part-1.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2021-final-part-1.pdf#page=2]] ![[knowledge_base/past_paper/2021-final-part-1.pdf#page=3]]

## Question

Consider a company with $n>0$ workers. A worker is a famous-solo-worker if she or he is known by every other worker, but knows none of them. You are the boss and you want to check if there is a famous-solo-worker in your company. You are only allowed to ask the following question to a worker: “Do you know worker $j$?” The workers will answer your questions truthfully. Show that you can find the famous-solo-worker, or declare that such a worker doesn’t exist, with at most $3(n-1)$ questions.

Note that there can be at most one famous-solo-worker.

## Official Answer

Source: [[knowledge_base/past_paper/2021-final-part-1.pdf#page=2|physical PDF page 2]], [[knowledge_base/past_paper/2021-final-part-1.pdf#page=3|physical PDF page 3]].

> We prove this by induction.
>
> **Basis step:**
> When $n=1$, the only worker must be a famous-solo-worker, and no questions are needed, which equals to $3(1-1)=0$.
>
> **Inductive step:**
> The inductive hypothesis is that if there are $k\ge1$ workers, then we can determine whether there is a famous-solo-worker with at most $3(k-1)$ questions.
>
> Suppose there are $k+1$ workers. Let $i$ and $j$ be any two workers among them. We ask whether $i$ knows $j$, this takes one question. If $i$ knows $j$, then $i$ is not a famous-solo-worker. If $i$ doesn't know $j$, then $j$ is not a famous-solo-worker. Without loss of generality, assume that $i$ is not a famous-solo-worker. Excluding $i$ from the $k+1$ workers, there are $k$ workers (including $j$) remaining. By the inductive hypothesis, we can use $3(k-1)$ questions for our checking.
>
> If there is no famous-solo-worker among these $k$ workers, then we know that there is no famous-solo-worker, and the number of questions used is $1+3(k-1)=3k-2\le3k$.
>
> If there is a famous-solo-worker $s$ among these $k$ workers, then we ask whether $s$ knows $i$ and whether $i$ knows $s$. This takes two more questions. If $i$ knows $s$ and $s$ doesn't know $i$, then $s$ is still a famous-solo-worker, otherwise $s$ is not a famous-solo-worker (thus no famous-solo-worker). In this case, we used a total of $1+3(k-1)+2=3k$ questions.

## Supplementary Explanation

**Answer.** Eliminate candidates with $n-1$ questions, then verify the survivor using at most $2(n-1)$ more.

**Derivation/proof.** Start with any candidate c. For each other worker j ask whether c knows j. If yes, c is disqualified and replace c by j; if no, j is disqualified because c does not know j. An induction over comparisons shows any genuine famous-solo-worker remains among the candidates, so n−1 questions leave only c possible. Ask c whether they know each other worker and ask each other worker whether they know c, using at most 2(n−1) questions. Accept c iff all first answers are no and all second answers yes; otherwise nobody qualifies, since all others were already disqualified. For n=1 both conditions are vacuous and zero questions suffice.

The iterative proof below uses at most $(n-1)+2(n-1)=3(n-1)$ questions. Each eliminated person has a concrete disqualifying answer, so failure of final verification establishes nonexistence rather than merely failure of the candidate.

Elimination never eliminates a genuine famous-solo-worker. Accept the final candidate exactly when all first-direction answers are no and all reverse-direction answers are yes.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - Induction - 数学归纳法]]
- [[Algorithm Correctness - 算法正确性]]
- [[Mathematical Induction - 数学归纳法]]
- [[Algorithm Trace and Invariant Method - 算法跟踪与不变量方法]]
- [[Induction Proof Method - 归纳证明法]]
