---
id: "Q-2015-MID-P08-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 13
solution_page: [13]
question_number: "8(b)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 5
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Exactly four colors among six gloves requires the multiplicity pattern two, two, one, one and distinct choices for the two roles."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P08-b

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=13]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=13]]

## Question

(b) the number of colors of these 6 gloves is 4?

Briefly explain how your answers are derived.

Shared context: [[STEM-2015-MID-P08 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2015-midterm.pdf#page=13|PDF physical page 13]].

(b) The number of colors of these 6 gloves is 4 means firstly you pick 2 pairs of gloves out of 12 so there are $\binom{12}{2}$ possibilities. Then the remaining 2 gloves are from 2 different pairs out of the remaining 10 pairs. You choose only one glove from each pair. So there are $\binom{10}{2}\cdot2\cdot2$ possibilities. Overall there are $\binom{12}{2}\binom{10}{2}\cdot2\cdot2$ cases.

## Supplementary Explanation

**Answer.** $\binom{12}{2}\binom{10}{2}2^2=11880$.

**Derivation/proof.** Let $d$ be the number of doubled colors and $s$ singleton colors. Then $d+s=4$ and $2d+s=6$, so $d=s=2$. Choose doubled colors in $\binom{12}{2}$ ways, singleton colors from the rest in $\binom{10}{2}$ ways, then each singleton glove in two ways. This decomposition is unique.

Subtracting $d+s=4$ from $2d+s=6$ gives $d=2,s=2$.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]
