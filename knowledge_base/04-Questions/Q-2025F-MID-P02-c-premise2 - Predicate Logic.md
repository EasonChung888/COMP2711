---
id: "Q-2025F-MID-P02-c-premise2"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 7
question_number: "2(c)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "Bind the same existential witness to being an excuse and being unsatisfactory."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
solution_page: [8]
verification_status: "verified"
related_questions: ["[[Q-2025F-MID-P02-c-proof - Proof Strategy]]"]
---
# Q-2025F-MID-P02-c-premise2

## Source

[[2025 Fall Midterm]]; printed item 2(c); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=7]]

Published official answer with scope clarification: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=8]]

Source correction: Page 8 omits grouping parentheses in ∃xE(x)∧¬S(x). Its very next proof line instantiates E(x₀)∧¬S(x₀), demonstrating intended whole-conjunction scope. The explicit form is ∃x(E(x)∧¬S(x)); under narrow immediate-formula parsing the ungrouped second x would be free. This is a secondary notation clarification, not a different official premise.

Atomic extraction: this note isolates Premise 2 from the combined instruction “First, write each premise as a logical form using quantifiers and the above predicates and then write a formal proof for the following statement: Some excuses are not clear explanations.” The shared 5 points are not apportioned.

## Question

![[STEM-2025F-MID-P02-c - Shared Problem Prompt#Shared printed wording]]

First, write each premise as a logical form using quantifiers and the above predicates

Premise 2: Some excuses are unsatisfactory

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=8|physical PDF page 8]].

> $\exists x\,E(x)\land\neg S(x)$.

## Supplementary Explanation

**Answer.** $\exists x(E(x)\land\neg S(x))$.

**Derivation/proof.** E(x) says the object is an excuse, and $\neg S(x)$ says it is unsatisfactory. Both describe the same object, so first form $E(x)\land\neg S(x)$ and place the entire conjunction in the scope of one existential quantifier. Every occurrence is bound. If only E(x) were within the quantifier’s scope, the external occurrence in S(x) would be free and would not express a complete premise.

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Bind the same existential witness to being an excuse and being unsatisfactory.

- Follow-on / contrast: [[Q-2025F-MID-P02-c-proof - Proof Strategy]]: 从不满意借口的存在式选取同一个见证。
