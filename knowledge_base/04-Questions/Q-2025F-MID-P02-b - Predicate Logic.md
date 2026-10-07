---
id: "Q-2025F-MID-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 6
question_number: "2(b)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 3
difficulty_basis: "Push a negation through three nested quantifiers and an implication."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [7,8]
marks: 4
---
# Q-2025F-MID-P02-b

## Source

[[2025 Fall Midterm]]; printed item 2(b); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=6]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=7]] ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=8]]

## Question

(b) [4 points] Express the negations of each of these statements so that all negation symbols immediately precede predicates.
$$\forall x\bigl(p(x)\lor\exists y(p(y)\to\forall z\,q(x,z))\bigr)$$

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=7|physical PDF page 7]], [[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=8|physical PDF page 8]].

> (b)
> $$\neg\forall x(p(x)\lor\exists y(p(y)\to\forall z\,q(x,z)))=\exists x\neg(p(x)\lor\exists y(p(y)\to\forall z\,q(x,z))).$$
> Apply De Morgan’s law to the disjunction:
> $$\neg(p(x)\lor\exists y(p(y)\to\forall z\,q(x,z)))=\neg p(x)\land\neg\exists y(p(y)\to\forall z\,q(x,z)).$$
> Negate the existential quantifier:
> $$\neg\exists y(p(y)\to\forall z\,q(x,z))=\forall y\neg(p(y)\to\forall z\,q(x,z)).$$
> Rewrite the implication $p(y)\to\forall z\,q(x,z)=\neg p(y)\lor\forall z\,q(x,z)$, so:
> $$\neg(p(y)\to\forall z\,q(x,z))=\neg(\neg p(y)\lor\forall z\,q(x,z))=p(y)\land\neg\forall z\,q(x,z).$$
> Negate the universal quantifier:
> $$\neg\forall z\,q(x,z)=\exists z\neg q(x,z).$$
> Thus:
> $$\neg(p(y)\to\forall z\,q(x,z))=p(y)\land\exists z\neg q(x,z).$$
> So:
> $$\neg\exists y(p(y)\to\forall z\,q(x,z))=\forall y(p(y)\land\exists z\neg q(x,z)).$$
> Combine:
> $$\exists x(\neg p(x)\land\forall y(p(y)\land\exists z\neg q(x,z))).$$
> This expression has all negation symbols immediately preceding predicates ($\neg p(x)$ and $\neg q(x,z)$).
> $$\boxed{\exists x(\neg p(x)\land\forall y(p(y)\land\exists z\neg q(x,z)))}.$$

## Supplementary Explanation

**Answer.** $\exists x(\neg p(x)\land\forall y(p(y)\land\exists z\neg q(x,z)))$.

**Derivation/proof.** First negate the outer universal to obtain $\exists x\neg(p(x)\lor\exists y(p(y)\to\forall zq(x,z)))$. De Morgan’s law and quantifier negation give $\exists x(\neg p(x)\land\forall y\neg(p(y)\to\forall zq(x,z)))$. Use $\neg(A\to B)\equiv A\land\neg B$ to get $\exists x(\neg p(x)\land\forall y(p(y)\land\neg\forall zq(x,z)))$. Finally replace the last negated universal by $\exists z\neg q(x,z)$. The witness z may depend on x and y, and every negation now immediately precedes p or q.

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Push a negation through three nested quantifiers and an implication.
