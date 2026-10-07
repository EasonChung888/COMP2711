---
id: "Q-2024S-MID-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 4
question_number: "2(b)"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 1
difficulty_basis: "Classify 2(b) by incompatible conjuncts; no truth-table output is required."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 1
---
# Q-2024S-MID-P02-b

## Source

[[2024 Spring Midterm]]; printed item 2(b); 1 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=4]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=4]]

## Question

(b) $(p\lor\neg q)\land(\neg p\land q)$

Shared printed context: ![[STEM-2024S-MID-P02 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=4|physical PDF page 4]].

> Answer. (b) F

## Supplementary Explanation

**Answer.** F.

**Derivation/proof.** If the whole conjunction were true, its right side would force $p=F,q=T$. Then $p\lor\neg q=F\lor F=F$, a contradiction. Thus there is no true assignment, so the formula is a contradiction, classified $F$. Equivalently, distributing gives $(p\land\neg p\land q)\lor(\neg q\land\neg p\land q)=F$.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]

- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]

Classify 2(b) by incompatible conjuncts; no truth-table output is required.
