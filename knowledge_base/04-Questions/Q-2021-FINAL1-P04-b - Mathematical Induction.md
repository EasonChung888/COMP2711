---
id: "Q-2021-FINAL1-P04-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2021-final-part-1.pdf"
source_page: 3
question_number: "4(b)"
year: 2021
term: "spring"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Repeated doubling from four yields precisely powers of two with exponent at least two."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 2
---
# Q-2021-FINAL1-P04-b

## Source

![[knowledge_base/past_paper/2021-final-part-1.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2021-final-part-1.pdf#page=3]]

## Question

$P(4)$ is true; for all positive integers $n$, if $P(n)$ is true, then $P(2n)$ is true.

Shared context: [[STEM-2021-FINAL1-P04 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2021-final-part-1.pdf#page=3|physical PDF page 3]].

> (b) For all integers $n$ that is a power of 2 and greater than or equal to 4.

## Supplementary Explanation

**Answer.** $n=2^k$ for integers $k\ge2$.

**Derivation/proof.** Starting from 4, repeated rule applications yield 4,8,16,…, namely 4·2^j for j≥0. Conversely let P hold exactly on this set. Doubling any member stays in the set; at any positive nonmember the implication has false antecedent. This predicate satisfies the assumptions and shows no other integers are forced.

The chain is $n=4\cdot2^j=2^{j+2}$ for integers $j\ge0$. It includes neither $2$, $1$, $0$, nor negative integers.

For the predicate true exactly on the chain, outside the chain the antecedent is false.

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Mathematical Induction - 数学归纳法]]
- [[Induction Proof Method - 归纳证明法]]
