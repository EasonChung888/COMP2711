---
id: "Q-2017-MID-P01-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 3
solution_page: [3]
question_number: "1(c)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "The universal antecedent must be true while every existential implication is false."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P01-c

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=3]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=3]]

Source verification: The printed explanation mentions only Q always false; the explicit countermodel also sets P always true.

Source correction (official conclusion retained): PDF page 3 says “It is false if Q(x) is always false.” This is insufficient alone: choose a nonempty domain with every P true as well as every Q false. The official non-tautology conclusion is correct; the exam explicitly requires no counterexample for non-tautologies.

## Question

(c) $(\forall xP(x))\to(\exists x(P(x)\to Q(x)))$

Shared context: [[STEM-2017-MID-P01 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2017-midterm.pdf#page=3|physical PDF page 3]].

Not a tautology. It is false if $Q(x)$ is always false. (No counter example required)
$$\begin{aligned}(\forall xP(x))\to\exists x(P(x)\to Q(x))&\equiv\exists x\neg P(x)\lor\exists x(\neg P(x)\lor Q(x))\\&\equiv\exists x\exists y(\neg P(x)\lor\neg P(y)\lor Q(y)).\end{aligned}$$

## Supplementary Explanation

**Answer.** It is not a tautology.

**Derivation/proof.** Use the one-element domain $D=\{a\}$ with $P(a)=T$ and $Q(a)=F$. Then $\forall xP(x)$ is true, but $P(a)\to Q(a)$ is false, so the existential consequent is false and the outer implication is false. Merely setting every $Q$ false is insufficient unless every $P$ is also true.

The implication fails only with a true antecedent and false consequent: $T\to F=F$. Thus the stated condition on $Q$ alone does not settle the implication; the antecedent must also be checked.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]
