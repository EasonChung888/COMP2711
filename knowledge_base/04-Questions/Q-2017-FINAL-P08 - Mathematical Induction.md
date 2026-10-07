---
id: "Q-2017-FINAL-P08"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 12
solution_page: [12]
question_number: "8"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Four consecutive base postages allow a strong-induction step adding one four-cent stamp."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 6
---
# Q-2017-FINAL-P08

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=12]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=12]]

## Question

Let $P(n)$ be the statement that a postage of $n$ cents can be formed using just 4-cent and 7-cent stamps. Prove by induction that $P(n)$ is true for $n\ge18$.

## Official Answer

Source: [[knowledge_base/past_paper/2017-final.pdf#page=12|physical PDF page 12]].

By (weak) induction: It is easy to show that $P(18)$ is true. Now suppose that $P(k)$ is true where $k\ge18$. We show that $P(k+1)$ is also true. Consider the postage of $k$ cents (by inductive hypothesis, such postage can be formed). This postage either
(i) contains at least one seven-cent stamp, or
(ii) contains no seven-cent stamp. In this case, it contains at least five 4-cents stamp since $k\ge18$.
In case (i), by simply replace that seven-cent stamp by two 4-cet stamps, we obtain a postage of $k+1$ cents. In case (ii), by replacing that five 4-cent stamps by three 7-cent stamps, we obtain a postage of $k+1$ cents. This completes the inductive step.
By strong induction: It is easy to show that $P(18),P(19),P(20),P(21)$ is true. Now suppose that $P(k-3),P(k-2),P(k-1),P(k)$ is true where $k\ge21$. We show that $P(k+1)$ is true. Since $P(k-3)$ is true, a postage of $k-3$ cents can be formed. Adding one more 4-cent stamp, we obtain a postage of $k+1$ cents.

## Supplementary Explanation

**Answer.** Every integer postage of at least 18 cents is possible.

**Derivation/proof.** Base cases: $18=7+7+4$, $19=7+4+4+4$, $20=5\cdot4$, and $21=3\cdot7$. Suppose all postages from 18 through $k$ are possible, where $k\ge21$. Then $k+1-4=k-3\ge18$, so the induction hypothesis supplies postage $k-3$. Adding one 4-cent stamp makes $k+1$. Strong induction proves the result.

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Mathematical Induction - 数学归纳法]]
- [[Induction Proof Method - 归纳证明法]]
