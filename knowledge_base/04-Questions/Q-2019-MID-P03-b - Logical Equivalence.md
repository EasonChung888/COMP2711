---
id: "Q-2019-MID-P03-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 5
solution_page: [5]
question_number: "3(b)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Distributing q through the implication leaves an antecedent that already contains not p."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 3
---
# Q-2019-MID-P03-b

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=5]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=5]]

## Question

(b) $((p\to\neg q)\land q)\to\neg p$

Shared context: [[STEM-2019-MID-P03 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-midterm.pdf#page=5|physical PDF page 5]].

Yes.
$$\begin{aligned}((p\to\neg q)\land q)\to\neg p&\equiv((\neg p\lor\neg q)\land q)\to\neg p\\&\equiv(\neg p\land q)\to\neg p\\&\equiv\neg(\neg p\land q)\lor\neg p\\&\equiv(p\lor\neg q)\lor\neg p\\&\equiv T.\end{aligned}$$

## Supplementary Explanation

**Answer.** It is a tautology.

**Derivation/proof.** Replace $p\to\neg q$ by $\neg p\lor\neg q$. Its conjunction with $q$ becomes $(\neg p\land q)\lor(\neg q\land q)=\neg p\land q$. Therefore the whole expression is $(\neg p\land q)\to\neg p\equiv\neg(\neg p\land q)\lor\neg p\equiv p\lor\neg q\lor\neg p\equiv T$.

Using commutativity and associativity exposes $(p\lor\neg p)\lor\neg q\equiv T$, so this part of the formula is a tautology by the excluded-middle law.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
