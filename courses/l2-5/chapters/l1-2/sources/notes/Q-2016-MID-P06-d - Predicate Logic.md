---
id: "Q-2016-MID-P06-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Midterm]]"
source_pdf: "knowledge_base/past_paper/2016-midterm.pdf"
source_page: 10
solution_page: [10]
question_number: "6(d)"
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
difficulty_basis: "The conjunction explicitly requires the existential witness to be even and to satisfy p."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-MID-P06-d

## Source

![[knowledge_base/past_paper/2016-midterm.pdf#page=10]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-midterm.pdf#page=10]]

## Question

(d) (i) $\exists x\in E(p(x))$

(ii) $\exists x\in Z(q(x)\land p(x))$

Shared context: [[STEM-2016-MID-P06 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2016-midterm.pdf#page=10|PDF physical page 10]].

(d) Yes.

## Supplementary Explanation

**Answer.** Equivalent.

**Derivation/proof.** A witness $x\in E$ for (i) is an integer with $q(x)$ and $p(x)$, hence witnesses (ii). Conversely, a witness of $q(x)\land p(x)$ is even by $q(x)$, so belongs to $E$ and witnesses (i).

If (i) has witness $u$, then $q(u)\land p(u)$ witnesses (ii). Conversely, conjunction elimination for witness $v$ yields $q(v)$ and $p(v)$, so $v\in E$ and it witnesses (i).

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
