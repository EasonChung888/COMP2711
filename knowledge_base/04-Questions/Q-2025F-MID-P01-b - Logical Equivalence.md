---
id: "Q-2025F-MID-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 3
question_number: "1(b)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["counterexample"]
difficulty: 2
difficulty_basis: "Evaluate the two associations of NAND at one separating assignment."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 2
---
# Q-2025F-MID-P01-b

## Source

[[2025 Fall Midterm]]; printed item 1(b); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=3]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=4]]

## Question

![[STEM-2025F-MID-P01 - Shared Problem Prompt#Shared printed wording]]

(b) [2 points] Argue whether the following two expressions are equivalent or not. If they are, prove it without using a truth table. If they are not, provide a counterexample.

Expression A: $p\mathbin{\overline\land}(p\mathbin{\overline\land}q)$

Expression B: $(p\mathbin{\overline\land}p)\mathbin{\overline\land}q$

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=4|physical PDF page 4]].

> (b) Consider a counterexample: let $p=\text{true},q=\text{false}$. - Expression A: False. - Expression B: True. Since the expressions differ, they are not equivalent.

## Supplementary Explanation

**Answer.** Not equivalent: at $p=T,q=F$, $A=F$ and $B=T$.

**Derivation/proof.** For A, the inner NAND is $\neg(T\land F)=T$, so the outer NAND is $\neg(T\land T)=F$. For B, the inner NAND is $\neg(T\land T)=F$, so the outer NAND is $\neg(F\land F)=T$. One assignment giving opposite values disproves equivalence. Changing the parentheses changes which conjunction is negated first; ordinary AND’s associativity cannot be transferred to NAND.

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]

Evaluate the two associations of NAND at one separating assignment.
