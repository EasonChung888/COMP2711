---
id: "Q-2021-FINAL1-P04-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2021-final-part-1.pdf"
source_page: 3
question_number: "4(d)"
year: 2021
term: "spring"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Strong induction grows the interval starting at two without forcing lower or negative integers."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 2
---
# Q-2021-FINAL1-P04-d

## Source

![[knowledge_base/past_paper/2021-final-part-1.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2021-final-part-1.pdf#page=3]]

## Question

$P(2)$ is true; for all positive integers $n$, if $P(k)$ is true for $2\le k\le n$, then $P(n+1)$ is true.

Shared context: [[STEM-2021-FINAL1-P04 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2021-final-part-1.pdf#page=3|physical PDF page 3]].

> (d) For all integers $n\ge2$.

## Supplementary Explanation

**Answer.** All integers $n\ge2$.

**Derivation/proof.** P(2) is the base. If P(2),…,P(n) hold for n≥2, the rule gives P(n+1), so strong induction proves every integer at least 2. No smaller integer is forced: the predicate true exactly for integers ≥2 satisfies the rule. At n=1 the premise interval is empty and the conclusion is P(2), already included; it does not imply P(1).

The induction uses $P(2),\ldots,P(n)$. At $n=1$, the range $2\le k\le1$ is empty, and the vacuous premise only yields $P(2)$.

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Mathematical Induction - 数学归纳法]]
- [[Induction Proof Method - 归纳证明法]]
