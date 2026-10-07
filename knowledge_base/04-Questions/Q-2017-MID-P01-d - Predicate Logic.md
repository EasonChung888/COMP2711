---
id: "Q-2017-MID-P01-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 3
solution_page: [3]
question_number: "1(d)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification","proof"]
difficulty: 2
difficulty_basis: "A real square-root witness makes the first disjunct true independently of the outer variable."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P01-d

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=3]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=3]]

## Question

(d) For the domain of real numbers, $\exists y(\exists x(x^2=2)\lor\exists x(x>2\land x^2+y^2=2))$

Shared context: [[STEM-2017-MID-P01 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2017-midterm.pdf#page=3|physical PDF page 3]].

Tautology.
$$\begin{aligned}\exists y(\exists x(x^2=2)\lor\exists x(x>2\land x^2+y^2=2))&\equiv\exists y(T\lor\exists x(x>2\land x^2+y^2=2))\\&\equiv\exists y(T\lor F)\\&\equiv T.\end{aligned}$$

## Supplementary Explanation

**Answer.** It is true over the stated real domain.

**Derivation/proof.** Choose $y=0$ and choose $x=\sqrt2$ for the first existential statement. Then $x^2=2$, so the first disjunct is true and therefore the disjunction and outer existential are true. The second disjunct is actually impossible because $x>2$ implies $x^2+y^2>4$.

For the second disjunct, $x>2$ gives $x^2>4$ and $y^2\ge0$, hence $x^2+y^2>4>2$. Thus that disjunct has no witness, while the first disjunct still makes the full statement true.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]
