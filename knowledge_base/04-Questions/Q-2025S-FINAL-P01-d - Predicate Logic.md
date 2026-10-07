---
id: "Q-2025S-FINAL-P01-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 2
question_number: "1(d)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "Negate universal disjointness and push both negations onto atomic membership predicates."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
marks: 2
related_questions: ["[[Q-2025S-FINAL-P01-c - Predicate Logic]]"]
---
# Q-2025S-FINAL-P01-d

## Source

[[2025 Spring Final]]; printed item 1(d); 2 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=2]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=2]]

Prerequisite context (editorial): [[Q-2025S-FINAL-P01-c - Predicate Logic]]. Part (c) is $\forall x(x\notin A\lor x\notin B)$, for A,B⊆N.

## Question

(d) [2 pts] Express the negation of the statement in (c) so that all negation symbols, if any, must immediately precede predicates.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=2|physical PDF page 2]].

(d) $\exists x(x\in A\land x\in B)$

## Supplementary Explanation

**Answer.** $\exists x(x\in A\land x\in B)$.

**Derivation/proof.** Negate the statement $\forall x(x\notin A\lor x\notin B)$ from part (c). Quantifier negation gives $\exists x\neg(x\notin A\lor x\notin B)$. De Morgan's law gives $\exists x(\neg(x\notin A)\land\neg(x\notin B))$. Removing double negations yields $\exists x(x\in A\land x\in B)$. The same witness x belongs to both sets, and no negation remains before a compound expression.

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Negate universal disjointness and push both negations onto atomic membership predicates.

- Prerequisite / related: [[Q-2025S-FINAL-P01-c - Predicate Logic]]: 本题将上一项的互不相交公式逐层否定。 Part (c) is $\forall x(x\notin A\lor x\notin B)$, for A,B⊆N.
