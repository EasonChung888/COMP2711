---
id: "Q-2018-MID-P02-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 4
solution_page: [4]
question_number: "2(c)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["counterexample"]
difficulty: 2
difficulty_basis: "A singleton interpretation can falsify the quantified implication by making P true and Q false."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P02-c

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=4]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=4]]

## Question

(c) $(\forall xP(x))\to(\exists x(P(x)\to Q(x)))$

Shared context: [[STEM-2018-MID-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-midterm.pdf#page=4|physical PDF page 4]].

Not a tautology. It is false if $Q(x)$ is always false and $P(x)$ is always true.
$$\begin{aligned}(\forall xP(x))\to(\exists x(P(x)\to Q(x)))&\equiv T\to(\exists x(T\to F))\\&\equiv T\to F\\&\equiv F.\end{aligned}$$

## Supplementary Explanation

**Answer.** Not a tautology. On $D=\{a\}$, let $P(a)=T,Q(a)=F$.

**Derivation/proof.** The universal antecedent is true in this domain. Its only candidate for the existential consequent gives $P(a)\to Q(a)=T\to F=F$, so that consequent is false. Thus the full implication is false, proving failure of logical validity.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]
