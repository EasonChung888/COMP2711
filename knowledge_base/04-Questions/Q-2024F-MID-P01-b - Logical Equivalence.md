---
id: "Q-2024F-MID-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 3
question_number: "1(b)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["counterexample"]
difficulty: 2
difficulty_basis: "Evaluate both differently parenthesized implications at the supplied distinguishing assignment F,T,F."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 4
---
# Q-2024F-MID-P01-b

## Source

[[2024 Fall Midterm]]; printed item 1(b); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=3]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=4]]

## Question

(b) Consider these two statements:
$$p\to(q\to r)$$
$$(p\to q)\to r$$
If they are equivalent prove it. Otherwise, provide a counter example.
(You are not allowed to use truth table)

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=4|physical PDF page 4]].

> (b) These two are not equivalent. Consider the following counter example: $p=F,q=T,r=F$.
> The top equation is True however the bottom equation is False.

## Supplementary Explanation

**Answer.** Not equivalent; take $p=F,q=T,r=F$.

**Derivation/proof.** The first expression has inner value $q\to r=T\to F=F$ and outer value $p\to(q\to r)=F\to F=T$. The second has $p\to q=F\to T=T$ and then $(p\to q)\to r=T\to F=F$. The same valid assignment makes the first true and the second false, disproving equivalence. One counterexample suffices without a truth table.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]

- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]

Evaluate both differently parenthesized implications at the supplied distinguishing assignment F,T,F.
