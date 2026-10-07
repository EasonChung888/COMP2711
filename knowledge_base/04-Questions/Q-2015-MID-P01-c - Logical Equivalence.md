---
id: "Q-2015-MID-P01-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 3
solution_page: [4]
question_number: "1(c)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 4
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 3
difficulty_basis: "The universal pointwise disjunction must be distinguished from claims allowing different existential witnesses."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P01-c

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=3]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=4]]

## Question

(c) Let $U$ be a domain (a.k.a. a universe), and $P(x)$ and $Q(x)$ be two predicates. Which of the following statements is/are equivalent to $\forall x\in U(P(x)\lor Q(x))$?

1. $\exists x\in U(\neg P(x)\land\neg Q(x))$
2. $\forall y\in U(\neg P(y)\to Q(y))$
3. $\neg(\forall x\in U(\neg P(x))\lor\forall x\in U(\neg Q(x)))$
4. $\neg(\exists x\in U(\neg P(x))\land\exists x\in U(\neg Q(x)))$
5. None of above.

Shared context: [[STEM-2015-MID-P01 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2015-midterm.pdf#page=4|PDF physical page 4]].

(c) 2

## Supplementary Explanation

**Answer.** 2.

**Derivation/proof.** For each $y$, $\neg P(y)\to Q(y)\equiv P(y)\lor Q(y)$, proving option 2. Option 1 is the target's negation. Option 3 is $(\exists xP(x))\land(\exists xQ(x))$; with $U=\{a,b\}$ and both predicates true only at $a$, it is true but the target fails at $b$. Option 4 equals $(\forall xP(x))\lor(\forall xQ(x))$; let $P$ hold only at $a$ and $Q$ only at $b$. Then the target is true but option 4 false.

For option 1, a one-element domain where $P$ is true makes the target true and option 1 false.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
