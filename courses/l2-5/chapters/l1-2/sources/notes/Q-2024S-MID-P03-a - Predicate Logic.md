---
id: "Q-2024S-MID-P03-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 5
question_number: "3(a)"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["classification"]
difficulty: 1
difficulty_basis: "Check quantified implication 3(a) using a single uniform witness for every y."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 1
---
# Q-2024S-MID-P03-a

## Source

[[2024 Spring Midterm]]; printed item 3(a); 1 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=5]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=5]]

## Question

(a) $\exists x\forall yP(x,y)\to\forall y\exists xP(x,y)$.

Shared printed context: ![[STEM-2024S-MID-P03 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=5|physical PDF page 5]].

> Answer. (a) Tautology

## Supplementary Explanation

**Answer.** Tautology.

**Derivation/proof.** If the antecedent holds, there is a fixed $x_0$ such that $P(x_0,y)$ holds for every $y$. For an arbitrary $y$, the same $x_0$ witnesses $\exists xP(x,y)$, proving the consequent. When the antecedent is false, the implication is true automatically; an empty domain also makes the antecedent false. The implication therefore holds in every interpretation.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]

- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Check quantified implication 3(a) using a single uniform witness for every y.
