---
id: "Q-2017-MID-P01-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 3
solution_page: [3]
question_number: "1(a)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification","proof"]
difficulty: 2
difficulty_basis: "Factoring the two q terms exposes q or not q and removes every remaining variable."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P01-a

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=3]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=3]]

## Question

(a) $(p\land q)\lor(q\land\neg p)\lor\neg q\lor(p\land T)$

Shared context: [[STEM-2017-MID-P01 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2017-midterm.pdf#page=3|physical PDF page 3]].

Tautology.
$$\begin{aligned}(p\land q)\lor(q\land\neg p)\lor\neg q\lor(p\land T)&\equiv(q\land(p\lor\neg p))\lor\neg q\lor p\\&\equiv(q\land T)\lor\neg q\lor p\\&\equiv(q\lor\neg q)\lor p\\&\equiv T\lor p\\&\equiv T.\end{aligned}$$

## Supplementary Explanation

**Answer.** It is a tautology.

**Derivation/proof.** By distributivity, $(p\land q)\lor(q\land\neg p)=q\land(p\lor\neg p)=q$. Also $p\land T=p$. Hence the whole expression is $q\lor\neg q\lor p=T\lor p=T$, independently of the values of $p,q$.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
