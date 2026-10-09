---
id: "Q-2016-MID-P04-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Midterm]]"
source_pdf: "knowledge_base/past_paper/2016-midterm.pdf"
source_page: 7
solution_page: [7]
question_number: "4(a)"
year: 2016
term: "fall"
exam_type: "midterm"
marks: 4
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["construction"]
difficulty: 2
difficulty_basis: "The eight-row table must compute XOR before comparing that result with r by biconditional."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-MID-P04-a

## Source

![[knowledge_base/past_paper/2016-midterm.pdf#page=7]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-midterm.pdf#page=7]]

## Question

(a) Construct a truth table for the statement $(p\oplus q)\Leftrightarrow r$.

## Official Answer

Source: [[knowledge_base/past_paper/2016-midterm.pdf#page=7|PDF physical page 7]].

(a) Truth Table:

| $p$ | $q$ | $r$ | $p\oplus q$ | $(p\oplus q)\Leftrightarrow r$ |
| --- | --- | --- | --- | --- |
| T | T | T | F | F |
| T | T | F | F | T |
| T | F | T | T | T |
| T | F | F | T | F |
| F | T | T | T | T |
| F | T | F | T | F |
| F | F | T | F | F |
| F | F | F | F | T |

## Supplementary Explanation

**Answer.** The final column in TTT, TTF, TFT, TFF, FTT, FTF, FFT, FFF order is F, T, T, F, T, F, F, T.

**Derivation/proof.** Evaluate XOR first, then compare that result with $r$ in each row.

| $p$ | $q$ | $r$ | $p\oplus q$ | $(p\oplus q)\leftrightarrow r$ |
| --- | --- | --- | --- | --- |
| T | T | T | F | F |
| T | T | F | F | T |
| T | F | T | T | T |
| T | F | F | T | F |
| F | T | T | T | T |
| F | T | F | T | F |
| F | F | T | F | F |
| F | F | F | F | T |

The XOR column tests whether $p\ne q$; the last column tests whether that Boolean result equals $r$.

The XOR column is F,F,T,T,T,T,F,F, and the final column is F,T,T,F,T,F,F,T. For example, TTF has XOR F equal to $r=F$, so its final entry is T.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
