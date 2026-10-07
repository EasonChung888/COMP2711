---
id: "Q-2016-MID-P06-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Midterm]]"
source_pdf: "knowledge_base/past_paper/2016-midterm.pdf"
source_page: 10
solution_page: [10]
question_number: "6(a)"
year: 2016
term: "fall"
exam_type: "midterm"
marks: 3
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Universal restriction to even integers is equivalent to guarding the predicate by an implication over all integers."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-MID-P06-a

## Source

![[knowledge_base/past_paper/2016-midterm.pdf#page=10]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-midterm.pdf#page=10]]

## Question

(a) (i) $\forall x\in E(p(x))$

(ii) $\forall x\in Z(q(x)\Rightarrow p(x))$

Shared context: [[STEM-2016-MID-P06 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2016-midterm.pdf#page=10|PDF physical page 10]].

(a) Yes.

## Supplementary Explanation

**Answer.** Equivalent.

**Derivation/proof.** If (i) holds, every even integer satisfies $p$, and every odd integer satisfies $q\to p$ vacuously, proving (ii). Conversely, apply (ii) to an arbitrary even integer: $q$ is true, so modus ponens yields $p$, proving (i).

For odd $x$, $q(x)$ is false, making the implication true. Conversely, assume (ii); an even integer has true antecedent, and modus ponens gives $p(x)$.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
