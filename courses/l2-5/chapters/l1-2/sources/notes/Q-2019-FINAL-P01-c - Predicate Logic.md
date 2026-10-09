---
id: "Q-2019-FINAL-P01-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 3
solution_page: [3]
question_number: "1(c)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification","proof"]
difficulty: 1
difficulty_basis: "The existential y can depend on x and choosing twice x makes the left side zero."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-FINAL-P01-c

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=3]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=3]]

## Question

(c) $\forall x\exists y(2x-y\le1)$

Shared context: [[STEM-2019-FINAL-P01 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=3|physical PDF page 3]].

True. For any $x$, setting $y=2x$ makes the proposition true.

## Supplementary Explanation

**Answer.** True.

**Derivation/proof.** Let $x$ be an arbitrary integer and choose $y=2x$, which is also an integer. Then $2x-y=0\le1$. This constructs a valid witness for every allowed x, proving the quantified statement. The witness is selected after x, as required by the quantifier order.

For the order $\forall x\exists y$, the witness may depend on $x$. Taking $y=2x$ yields $2x-2x=0\le1$, which validates that quantifier order directly.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]
