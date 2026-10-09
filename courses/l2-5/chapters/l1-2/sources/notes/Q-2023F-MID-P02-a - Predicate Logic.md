---
id: "Q-2023F-MID-P02-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf"
source_page: 5
question_number: "2(a)"
year: 2023
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]","[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["translation"]
difficulty: 3
difficulty_basis: "Negation passes through an existential, two implications, and an inner universal before reaching individual predicates."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5,6]
marks: 4
---
# Q-2023F-MID-P02-a

## Source

[[2023 Fall Midterm]]; printed item 2(a); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=5]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=5]] ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=6]]

## Question

Express the negation of the following statement so that all negation operators immediately precede the predicates:
$$\exists x(P(x)\to\forall y(Q(y)\to(R(y)\lor S(y)))).$$

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=5|physical PDF page 5]].

> (a)
> $$\begin{aligned}
> &\neg\exists x(P(x)\to\forall y(Q(y)\to(R(y)\lor S(y))))\\
> &\equiv\forall x\neg(\neg P(x)\lor\forall y(\neg Q(y)\lor(R(y)\lor S(y))))\\
> &\equiv\forall x(P(x)\land\neg\forall y(\neg Q(y)\lor R(y)\lor S(y)))\\
> &\equiv\forall x(P(x)\land\exists y\neg(\neg Q(y)\lor R(y)\lor S(y)))\\
> &\equiv\forall x(P(x)\land\exists y(Q(y)\land\neg R(y)\land\neg S(y)))\\
> &\equiv\forall xP(x)\land\exists y(Q(y)\land\neg R(y)\land\neg S(y)).
> \end{aligned}$$

## Supplementary Explanation

**Answer.** $\forall x\bigl(P(x)\land\exists y(Q(y)\land\neg R(y)\land\neg S(y))\bigr)$.

**Derivation/proof.** Negate the whole statement, rather than merely its final disjunction:
$$\begin{aligned}
\neg\exists x(P(x)\to\forall y(Q(y)\to(R(y)\lor S(y))))
&\equiv\forall x(P(x)\land\neg\forall y(Q(y)\to(R(y)\lor S(y))))\\
&\equiv\forall x(P(x)\land\exists y(Q(y)\land\neg(R(y)\lor S(y))))\\
&\equiv\forall x(P(x)\land\exists y(Q(y)\land\neg R(y)\land\neg S(y))).
\end{aligned}$$
All remaining negations are immediately before R or S. Keeping the quantifier scopes explicit also avoids any unnecessary domain-dependent extraction of a quantifier.

The quantifier-negation step is $\neg\forall y F(y)\equiv\exists y\neg F(y)$. Keeping the final existential inside its original scope avoids relying on an unstated nonempty-domain convention when extracting it.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Propositional Logic - 命题逻辑]]

- [[Predicate Logic - 谓词逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]

Negation passes through an existential, two implications, and an inner universal before reaching individual predicates.
