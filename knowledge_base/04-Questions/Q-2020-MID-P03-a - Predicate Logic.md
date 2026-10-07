---
id: "Q-2020-MID-P03-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 2
question_number: "3(a)"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 1
difficulty_basis: "A negative test value makes absolute value times x more negative than x."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
---
# Q-2020-MID-P03-a

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=2]]

## Question

$\forall x(|x|\cdot x\ge x)$

Shared context: [[STEM-2020-MID-P03 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-midterm.pdf#page=2|physical PDF page 2]].

False. When $x=-2$, we have $2\cdot(-2)=-4<-2$.

## Supplementary Explanation

**Answer.** False.

**Derivation/proof.** Take the real value $x=-2$. Then $|x|x=2(-2)=-4$, which is less than $-2$. Hence this one member of the quantified domain violates the inequality and refutes the universal statement. Absolute value does not make the product nonnegative because the second factor remains negative.

The counterexample calculation is $2\cdot(-2)=-4<-2=x$. Although the absolute-value factor is positive, its multiplication by the negative second factor refutes the proposed inequality.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]
