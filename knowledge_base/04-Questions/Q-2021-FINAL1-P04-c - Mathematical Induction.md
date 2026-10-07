---
id: "Q-2021-FINAL1-P04-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2021-final-part-1.pdf"
source_page: 3
question_number: "4(c)"
year: 2021
term: "spring"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "A two-consecutive-premise rule cannot fire from only P(1)."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 2
---
# Q-2021-FINAL1-P04-c

## Source

![[knowledge_base/past_paper/2021-final-part-1.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2021-final-part-1.pdf#page=3]]

## Question

$P(1)$ is true; for all positive integers $n$, if $P(n)$ and $P(n+1)$ are true, then $P(n+2)$ is true.

Shared context: [[STEM-2021-FINAL1-P04 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2021-final-part-1.pdf#page=3|physical PDF page 3]].

> (c) 1 only.

## Supplementary Explanation

**Answer.** Only $n=1$.

**Derivation/proof.** To infer P(3), the first possible rule instance requires both P(1) and P(2), but P(2) is absent. No other step has two established consecutive premises either. Define P true only at 1: then every antecedent P(n)∧P(n+1) is false, so all implications hold. This witnesses that every integer except 1 can remain false.

Take $P(n)\iff n=1$. Then every $P(n)\land P(n+1)$ is false, so no other integer is forced.

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Mathematical Induction - 数学归纳法]]
- [[Induction Proof Method - 归纳证明法]]
