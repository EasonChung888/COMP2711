---
id: "Q-2024S-MID-P03-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 5
question_number: "3(c)"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Check quantified implication 3(c) using a fully specified two-element predicate countermodel."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 1
---
# Q-2024S-MID-P03-c

## Source

[[2024 Spring Midterm]]; printed item 3(c); 1 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=5]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=5]]

## Question

(c) $\exists x\forall yP(x,y)\to\forall x\exists yP(x,y)$.

Shared printed context: ![[STEM-2024S-MID-P03 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=5|physical PDF page 5]].

> Answer. (c) Not a tautology

## Supplementary Explanation

**Answer.** Not a tautology.

**Derivation/proof.** Use domain $\{0,1\}$ and let $P(x,y)$ mean $x=0$. Choosing $x=0$ makes it true for every $y$, so the antecedent is true. For $x=1$, however, $P(1,y)$ is false for every $y$, making the consequent $\forall x\exists yP(x,y)$ false. Thus this interpretation falsifies the implication.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]

- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Check quantified implication 3(c) using a fully specified two-element predicate countermodel.
