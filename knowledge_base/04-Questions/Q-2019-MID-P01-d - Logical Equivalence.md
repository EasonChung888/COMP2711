---
id: "Q-2019-MID-P01-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 3
solution_page: [3]
question_number: "1(d)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "Only if places the joint windy-and-cold requirement in the consequent."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-MID-P01-d

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=3]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=3]]

## Question

(d) It is rainy only if it is windy and cold.

Shared context: [[STEM-2019-MID-P01 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-midterm.pdf#page=3|physical PDF page 3]].

$r\to(w\land c)$.

## Supplementary Explanation

**Answer.** $r\to(w\land c)$.

**Derivation/proof.** “A only if B” makes B necessary for A. Here B itself consists of two simultaneous requirements, windy and cold. Therefore rain implies both $w$ and $c$, expressed as a conjunction inside the consequent. The claim says nothing requiring rain whenever those two conditions hold.

Equivalently, $(r\to w)\land(r\to c)$. When it is not rainy, the sentence imposes no condition on wind or cold.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
