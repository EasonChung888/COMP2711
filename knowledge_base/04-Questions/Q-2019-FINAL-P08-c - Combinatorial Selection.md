---
id: "Q-2019-FINAL-P08-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 10
solution_page: [10]
question_number: "8(c)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "The ordered adjacent block ab has five placements and leaves four distinct choices from the other 24 letters."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-FINAL-P08-c

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=10]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=10]]

## Question

(c) the letters a and b in consecutive positions with a preceding b, with all the letters distinct?

Shared context: [[STEM-2019-FINAL-P08 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=10|physical PDF page 10]].

First choose the position for the $a$; this can be done in $5$ ways, since the $b$ must follow it. There are four remaining positions, and these can be filled in $P(24,4)$ ways, since there are $24$ letters left (no repetitions being allowed this time). Therefore the answer is $5P(24,4)=1275120$.

## Supplementary Explanation

**Answer.** $5P(24,4)=1275120$.

**Derivation/proof.** The a in the forced block ab may start at positions 1 through 5, giving five choices. Its two positions are fixed and ordered. Fill the remaining four labeled positions with four distinct letters from the other 24 in $P(24,4)=24\cdot23\cdot22\cdot21=255024$ ways. Multiply to obtain 1275120.

$P(24,4)=24\cdot23\cdot22\cdot21=255024$, and each valid string has one unique $ab$ starting position.

The forced block $ab$ can start at positions $1,2,3,4,5$ in a six-letter string. Its starting position is unique because repeated letters are prohibited, so the five choices may be multiplied by the arrangements of the other four letters.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Counting Method - 计数方法]]
