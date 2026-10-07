---
id: "Q-2013-MID-P04-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Midterm]]"
source_pdf: "knowledge_base/past_paper/2013-midterm.pdf"
source_page: 6
solution_page: [6]
question_number: "4(a)"
year: 2013
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]", "[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Pairing eight labelled boys with eight labelled girls is a bijection count obtained by successively assigning distinct female partners."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-MID-P04-a

## Source

![[knowledge_base/past_paper/2013-midterm.pdf#page=6]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-midterm.pdf#page=6]].

## Question

(a) In how many different ways can the boys be paired up with the girls?

Explain how your answers are derived.

Shared context: [[STEM-2013-MID-P04 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2013-midterm.pdf#page=6|PDF physical page 6]].

(a) Let us number of the boys from 1 to 8. Boy number 1 can be paired up with any of the 8 girls; boy number 2 can be paired up any of the remaining 7 girls; and so on. So the answer is: $8!$.

## Supplementary Explanation

**Answer.** $8!$.

**Derivation/proof.** Order the girls assigned to the eight labelled boys: $8$ choices for the first boy, then $7$, down to $1$, giving $8!$.

Each choice sequence determines exactly one complete pairing, giving $8\cdot7\cdots1=8!$.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
