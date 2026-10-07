---
id: "Q-2022-MID-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 1
question_number: "1(b)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["translation"]
difficulty: 3
difficulty_basis: "Both disjunctions become implications and their conjunction requires one more negated implication."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
marks: 3
---
# Q-2022-MID-P01-b

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=1]]

## Question

Given the statement $(a\lor b)\land(\neg b\lor c)$, express its equivalent statement using only NOT ($\neg$) and Implication ($\to$).

## Official Answer

Source: [[knowledge_base/past_paper/2022-midterm.pdf#page=1|physical PDF page 1]].

> (b)
> $$\begin{aligned}
> (a\lor b)\land(\neg b\lor c)&\equiv(\neg a\to b)\land(b\to c)\\
> &\equiv\neg(\neg(\neg a\to b)\lor\neg(b\to c))\\
> &\equiv\neg((\neg a\to b)\to\neg(b\to c)).
> \end{aligned}$$

## Supplementary Explanation

**Answer.** $\neg((\neg a\to b)\to\neg(b\to c))$.

**Derivation/proof.** Set X=(¬a→b), equivalent to a∨b, and Y=(b→c), equivalent to ¬b∨c. Their conjunction satisfies X∧Y≡¬(¬X∨¬Y)≡¬(X→¬Y). Substitute the two subexpressions to obtain the answer. Expanding its outer negated implication recovers X∧Y and then the original two clauses.

The full intermediate identity is $X\land Y\equiv\neg(\neg X\lor\neg Y)\equiv\neg(X\to\neg Y)$.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
