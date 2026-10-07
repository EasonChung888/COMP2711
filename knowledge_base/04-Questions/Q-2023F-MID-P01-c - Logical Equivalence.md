---
id: "Q-2023F-MID-P01-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf"
source_page: 3
question_number: "1(c)"
year: 2023
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification","counterexample"]
difficulty: 2
difficulty_basis: "A valuation making one inner consequent implication false distinguishes the two nested implication formulas."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3,4]
marks: 3
---
# Q-2023F-MID-P01-c

## Source

[[2023 Fall Midterm]]; printed item 1(c); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=3]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=3]] ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=4]]

## Question

Determine if the two compound propositions $(p\to q)\to(r\to s)$ and $(p\to r)\to(q\to s)$ are logically equivalent. Show a proof if they are, or give a counter-example if they are not.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=3|physical PDF page 3]].

> (c) Not equivalent. Counter-example: $p=F,q=T,r=F,s=F$

## Supplementary Explanation

**Answer.** Not equivalent; use $p=F,q=T,r=F,s=F$.

**Derivation/proof.** For this valuation, $p\to q=T$ and $r\to s=T$, so the first expression is $T\to T=T$. Meanwhile $p\to r=T$ but $q\to s=F$, so the second expression is $T\to F=F$. Because logical equivalence requires equality under every common valuation, this one disagreement suffices to disprove it. The displayed values also independently verify the published counterexample.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]

- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]

A valuation making one inner consequent implication false distinguishes the two nested implication formulas.
