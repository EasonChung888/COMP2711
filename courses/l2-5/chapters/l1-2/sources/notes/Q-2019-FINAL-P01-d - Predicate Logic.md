---
id: "Q-2019-FINAL-P01-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 3
solution_page: [3]
question_number: "1(d)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification","proof"]
difficulty: 2
difficulty_basis: "A fixed initial witness x=0 works because the later z can cancel each arbitrary y."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-FINAL-P01-d

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=3]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=3]]

## Question

(d) $\exists x\forall y\exists z(x+y+z=0)$

Shared context: [[STEM-2019-FINAL-P01 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=3|physical PDF page 3]].

True. Set $x=0$. Then for any $y$, setting $z=-y$ makes the proposition true.

## Supplementary Explanation

**Answer.** True.

**Derivation/proof.** Choose the fixed integer $x=0$ before y is given. For each integer y, choose $z=-y$. Then z is an integer and $x+y+z=0+y-y=0$. This respects the quantifier order: x is independent of y, whereas z may depend on y.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]
