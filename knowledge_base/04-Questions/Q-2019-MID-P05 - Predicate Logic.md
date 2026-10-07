---
id: "Q-2019-MID-P05"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 7
solution_page: [7]
question_number: "5"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]","[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["translation"]
difficulty: 3
difficulty_basis: "Negation passes three quantifiers and turns an implication into a conjunction with negated consequent."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 6
---
# Q-2019-MID-P05

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=7]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=7]]

## Question

Express the negations of $\forall x(P(x)\land\exists y\forall z(Q(x,y)\to R(y,z)))$ so that all negation symbols immediately precede predicates.

## Official Answer

Source: [[knowledge_base/past_paper/2019-midterm.pdf#page=7|physical PDF page 7]].

$$\begin{aligned}&\neg\forall x(P(x)\land\exists y\forall z(Q(x,y)\to R(y,z)))\\&\equiv\exists x\neg(P(x)\land\exists y\forall z(Q(x,y)\to R(y,z)))\\&\equiv\exists x(\neg P(x)\lor\neg\exists y\forall z(Q(x,y)\to R(y,z)))\\&\equiv\exists x(\neg P(x)\lor\forall y\neg\forall z(Q(x,y)\to R(y,z)))\\&\equiv\exists x(\neg P(x)\lor\forall y\exists z\neg(Q(x,y)\to R(y,z)))\\&\equiv\exists x(\neg P(x)\lor\forall y\exists z(Q(x,y)\land\neg R(y,z))).\end{aligned}$$

## Supplementary Explanation

**Answer.** $\exists x(\neg P(x)\lor\forall y\exists z(Q(x,y)\land\neg R(y,z)))$.

**Derivation/proof.** Move the outer negation through $\forall x$ to get $\exists x\neg(P(x)\land\exists y\forall z(Q\to R))$. De Morgan gives $\exists x(\neg P(x)\lor\neg\exists y\forall z(Q\to R))$. Negating the inner quantifiers gives $\forall y\exists z\neg(Q\to R)$. Finally $\neg(Q\to R)\equiv Q\land\neg R$. Restoring all arguments yields the answer with negations only before $P,R$.

For the contrapositive argument, expand the negation of an implication as $\neg(A\to B)\equiv A\land\neg B$. This identifies the precise case ruled out by the proof instead of replacing an implication by its converse.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
