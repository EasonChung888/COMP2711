---
id: "Q-2016-MID-P06-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Midterm]]"
source_pdf: "knowledge_base/past_paper/2016-midterm.pdf"
source_page: 10
solution_page: [10]
question_number: "6(c)"
year: 2016
term: "fall"
exam_type: "midterm"
marks: 5
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["counterexample"]
difficulty: 3
difficulty_basis: "An existential implication can be satisfied by an odd integer without supplying any even witness for p."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-MID-P06-c

## Source

![[knowledge_base/past_paper/2016-midterm.pdf#page=10]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-midterm.pdf#page=10]]

## Question

(c) (i) $\exists x\in E(p(x))$

(ii) $\exists x\in Z(q(x)\Rightarrow p(x))$

Shared context: [[STEM-2016-MID-P06 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2016-midterm.pdf#page=10|PDF physical page 10]].

(c) No.

Let $p(x)$ be “x is odd”.

“$\exists x\in E(p(x))$” is false but “$\exists x\in Z(q(x)\Rightarrow p(x))$” is true (because when $x=1$ (where $x\in Z$), $q(x)$ is false and $p(x)$ is true (which means that “$q(x)\Rightarrow p(x)$” is true)).

## Supplementary Explanation

**Answer.** Not equivalent; take $p(x)$ to mean “$x$ is odd.”

**Derivation/proof.** No even integer is odd, so (i) is false. With witness $x=1$, $q(1)$ is false and $p(1)$ true, making $q(1)\to p(1)$ true. Thus (ii) is true, disproving equivalence.

At $x=1$, the implication is $F\to T=T$.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
