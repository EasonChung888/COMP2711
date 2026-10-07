---
id: "Q-2025F-MID-P01-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 3
question_number: "1(a)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Expand NAND and compare two distributive forms without using a truth table."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 3
---
# Q-2025F-MID-P01-a

## Source

[[2025 Fall Midterm]]; printed item 1(a); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=3]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=4]]

Source correction: Page 4 temporarily drops the NAND bars in the redundant equality substituting q→r by ¬q∨r. The defining line, following De Morgan line and final statement retain NAND correctly. The unbarred substitution equality is itself true for ordinary AND, but should use NAND to remain the same expression in this derivation. The correct official conclusion and complete proof are unchanged.

## Question

![[STEM-2025F-MID-P01 - Shared Problem Prompt#Shared printed wording]]

(a) [3 points] Use propositional laws to prove that
$$p\mathbin{\overline\land}(q\to r)\equiv(p\to q)\land(p\to\neg r)$$
(you are NOT allowed to use truth table)

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=4|physical PDF page 4]].

> (a) Start with the left-hand side:
> $$p\mathbin{\overline\land}(q\to r)=\neg(p\land(q\to r)).$$
> Since $q\to r\equiv\neg q\lor r$:
> $$p\land(q\to r)=p\land(\neg q\lor r).$$
> Apply De Morgan’s law to the NAND:
> $$\neg(p\land(\neg q\lor r))=\neg p\lor\neg(\neg q\lor r)=\neg p\lor(q\land\neg r).$$
> Now consider the right-hand side:
> $$(p\to q)\land(p\to\neg r)=(\neg p\lor q)\land(\neg p\lor\neg r).$$
> Apply the distributive law:
> $$(\neg p\lor q)\land(\neg p\lor\neg r)=\neg p\lor(q\land\neg r).$$
> Both sides are equal:
> $$\neg p\lor(q\land\neg r)\equiv\neg p\lor(q\land\neg r).$$
> Thus, $p\mathbin{\overline\land}(q\to r)\equiv(p\to q)\land(p\to\neg r)$.

## Supplementary Explanation

**Answer.** The equivalence holds.

**Derivation/proof.** By definition, the left side is $\neg(p\land(q\to r))$. Eliminate implication to obtain $\neg(p\land(\neg q\lor r))$, and use De Morgan’s laws to obtain $\neg p\lor(q\land\neg r)$. On the right, eliminating both implications gives $(\neg p\lor q)\land(\neg p\lor\neg r)$, which equals the same expression by distribution. Every step uses equivalence laws, without a truth table.

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]

Expand NAND and compare two distributive forms without using a truth table.
