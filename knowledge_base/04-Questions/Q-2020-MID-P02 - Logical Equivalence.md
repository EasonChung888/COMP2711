---
id: "Q-2020-MID-P02"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 1
question_number: "2"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Absorption inside the second antecedent collapses the two implications to the same four-literal disjunction."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
marks: 10
---
# Q-2020-MID-P02

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=2]]

## Question

Determine whether the following two propositions are logically equivalent.

(i) $((\neg p\land q)\to(p\lor s))\lor((\neg(\neg q\land p)\land q)\to(s\lor r))$,

(ii) $q\to(p\lor s\lor r)$.

If they are, prove it by a series of logical equivalences. If they are not, give a counterexample.

## Official Answer

Source: [[knowledge_base/past_paper/2020-midterm.pdf#page=2|physical PDF page 2]].

$$\begin{aligned}&((\neg p\land q)\to(p\lor s))\lor((\neg(\neg q\land p)\land q)\to(s\lor r))\\&\equiv((\neg p\land q)\to(p\lor s))\lor(((q\lor\neg p)\land q)\to(s\lor r))\\&\equiv((\neg p\land q)\to(p\lor s))\lor(q\to(s\lor r))\\&\equiv(\neg(\neg p\land q)\lor(p\lor s))\lor(\neg q\lor(s\lor r))\\&\equiv((p\lor\neg q)\lor(p\lor s))\lor(\neg q\lor(s\lor r))\\&\equiv\neg q\lor p\lor s\lor r\\&\equiv q\to(p\lor s\lor r).\end{aligned}$$

## Supplementary Explanation

**Answer.** They are logically equivalent.

**Derivation/proof.** By De Morgan, $\neg(\neg q\land p)\land q=(q\lor\neg p)\land q\equiv q$ by absorption. The first implication is $\neg(\neg p\land q)\lor p\lor s\equiv p\lor\neg q\lor s$. The second is $\neg q\lor s\lor r$. Their disjunction is $\neg q\lor p\lor s\lor r$ by associativity, commutativity and idempotence, which is exactly $q\to(p\lor s\lor r)$.

All transformations are equivalences, so the expressions agree on all sixteen truth assignments.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
