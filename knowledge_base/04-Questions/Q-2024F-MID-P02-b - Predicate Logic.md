---
id: "Q-2024F-MID-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 5
question_number: "2(b)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "Negate the Goldbach-form statement by swapping quantifiers and applying De Morgan to the prime sum conjunction."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
marks: 4
related_questions: ["[[Q-2024F-MID-P02-a - Predicate Logic]]"]
---
# Q-2024F-MID-P02-b

## Source

[[2024 Fall Midterm]]; printed item 2(b); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=5]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=6]]

Prerequisite context (editorial): [[Q-2024F-MID-P02-a - Predicate Logic]]. Negate the displayed formula $\forall x((Even(x)\land x>2)\to\exists y\exists z(Prime(y)\land Prime(z)\land(y+z=x)))$ over natural numbers, as preserved in the shared Stem.

## Question

(b) Negate the statement in (a) so that all negation symbols immediately precede predicates.

Shared printed context: ![[STEM-2024F-MID-P02-ab - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=6|physical PDF page 6]].

> (b) The statement in part (a) can be also written like this:
> $$\forall x(\neg(Even(x)\land x>2)\lor\exists y\exists z(Prime(y)\land Prime(z)\land y+z=x)).$$
> Here is the negation of this statement:
> $$\exists x((Even(x)\land x>2)\land\forall y\forall z\neg(Prime(y)\land Prime(z)\land y+z=x)).$$
> Which also can be written as:
> $$\exists x((Even(x)\land x>2)\land\forall y\forall z(\neg Prime(y)\lor\neg Prime(z)\lor y+z\ne x)).$$

## Supplementary Explanation

**Answer.** $\exists x((Even(x)\land x>2)\land\forall y\forall z(\neg Prime(y)\lor\neg Prime(z)\lor y+z\ne x))$.

**Derivation/proof.** Write the original as $\forall x(A(x)\to\exists y\exists zB(x,y,z))$. Its negation is $\exists x(A(x)\land\forall y\forall z\neg B(x,y,z))$. Substitute $A=Even(x)\land x>2$. Applying De Morgan to $B=Prime(y)\land Prime(z)\land(y+z=x)$ gives $\neg Prime(y)\lor\neg Prime(z)\lor(y+z\ne x)$. This yields the displayed answer: negation signs immediately precede the $Prime$ predicates, and $\ne$ expresses the negated equality.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]

- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Negate the Goldbach-form statement by swapping quantifiers and applying De Morgan to the prime sum conjunction.

- Prerequisite: [[Q-2024F-MID-P02-a - Predicate Logic]]: 本题导入此前提/结果以完成当前计算或证明：Negate the displayed formula $\forall x((Even(x)\land x>2)\to\exists y\exists z(Prime(y)\land Prime(z)\land(y+z=x)))$ over natural numbers, as preserved in the shared Stem.
