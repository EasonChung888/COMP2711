---
id: "Q-2024S-MID-P03-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 5
question_number: "3(b)"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Check quantified implication 3(b) using a fully specified two-element predicate countermodel."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 1
---
# Q-2024S-MID-P03-b

## Source

[[2024 Spring Midterm]]; printed item 3(b); 1 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=5]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=5]]

## Question

(b) $\forall y\exists xP(x,y)\to\exists x\forall yP(x,y)$.

Shared printed context: ![[STEM-2024S-MID-P03 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=5|physical PDF page 5]].

> Answer. (b) Not a tautology

## Supplementary Explanation

**Answer.** Not a tautology.

**Derivation/proof.** Use domain $\{0,1\}$ and let $P(x,y)$ mean $x=y$. For each $y$ choose $x=y$, so the antecedent holds. But $x=0$ fails for $y=1$, and $x=1$ fails for $y=0$, so no fixed $x$ works for every $y$. The consequent is false and the implication is false in this countermodel.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]

- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Check quantified implication 3(b) using a fully specified two-element predicate countermodel.
