---
id: "Q-2025F-FINAL-P01-c-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 3
question_number: "1(c)(ii)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 3
difficulty_basis: "Express existence of a comp-major maximum without imposing uniqueness or disallowing tied grades."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 2
---
# Q-2025F-FINAL-P01-c-ii

## Source

[[2025 Fall Final]]; printed item 1(c)(ii); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=3]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=4]]

## Question

![[STEM-2025F-FINAL-P01-c - Shared Problem Prompt#Shared printed wording]]

(ii) The highest grade belongs to a comp major student.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=4|physical PDF page 4]].

(ii) $\exists y\big(c(y)\land\forall x(x\ne y\to\neg Compare(x,y))\big)$.

## Supplementary Explanation

**Answer.** $\exists y(c(y)\land\forall x(x\ne y\to\neg Compare(x,y)))$.

**Derivation/proof.** First choose a student $y$ with $\exists y$ and require $c(y)$. For each other student $x$, having a grade higher than $y$ is forbidden. This is $x\ne y\to\neg Compare(x,y)$, under $\forall x$. Conjoin the major requirement and the universal condition inside the scope of $\exists y$. A student scoring above $y$ falsifies the formula; tied students with nobody scoring higher do not. Thus at least one highest-grade holder is a comp major, without requiring a unique highest grade.

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Express existence of a comp-major maximum without imposing uniqueness or disallowing tied grades.
