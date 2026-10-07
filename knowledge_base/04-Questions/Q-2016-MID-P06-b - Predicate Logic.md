---
id: "Q-2016-MID-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Midterm]]"
source_pdf: "knowledge_base/past_paper/2016-midterm.pdf"
source_page: 10
solution_page: [10]
question_number: "6(b)"
year: 2016
term: "fall"
exam_type: "midterm"
marks: 4
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["counterexample"]
difficulty: 2
difficulty_basis: "The unrestricted universal conjunction wrongly demands that odd integers be even, yielding a concrete countermodel."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-MID-P06-b

## Source

![[knowledge_base/past_paper/2016-midterm.pdf#page=10]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-midterm.pdf#page=10]]

## Question

(b) (i) $\forall x\in E(p(x))$

(ii) $\forall x\in Z(q(x)\land p(x))$

Shared context: [[STEM-2016-MID-P06 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2016-midterm.pdf#page=10|PDF physical page 10]].

(b) No.

Let $p(x)$ be “x is even”.

“$\forall x\in E(p(x))$” is true but “$\forall x\in Z(q(x)\land p(x))$” is false.

## Supplementary Explanation

**Answer.** Not equivalent; take $p(x)$ to mean “$x$ is even.”

**Derivation/proof.** For this predicate, (i) says all even integers are even and is true. In (ii), set $x=1$: $q(1)$ is false, so $q(1)\land p(1)$ is false. Therefore (ii) is false and the truth values differ.

The concrete counterexample has $q(1)=F$ and $q(1)\land p(1)=F$.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
