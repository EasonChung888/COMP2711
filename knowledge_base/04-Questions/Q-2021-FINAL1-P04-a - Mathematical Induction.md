---
id: "Q-2021-FINAL1-P04-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2021-final-part-1.pdf"
source_page: 3
question_number: "4(a)"
year: 2021
term: "spring"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "The rule is restricted to positive premises and cannot be applied at the only seed zero."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 2
---
# Q-2021-FINAL1-P04-a

## Source

![[knowledge_base/past_paper/2021-final-part-1.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2021-final-part-1.pdf#page=3]]

## Question

$P(0)$ is true; for all positive integers $n$, if $P(n)$ is true, then $P(n+2)$ is true.

Shared context: [[STEM-2021-FINAL1-P04 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2021-final-part-1.pdf#page=3|physical PDF page 3]].

> (a) 0 only.

## Supplementary Explanation

**Answer.** Only $n=0$.

**Derivation/proof.** The only supplied true instance is P(0), but the rule only permits positive n. Therefore it cannot start at zero. To prove no other integer is forced, define P to be true only at zero. Every implication with positive n then has a false antecedent and is true, so this predicate satisfies all assumptions while every other instance is false.

The explicit countermodel is $P(n)\iff n=0$: zero is not an allowed starting value for the rule, and every other integer can be false.

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Mathematical Induction - 数学归纳法]]
- [[Induction Proof Method - 归纳证明法]]
