---
id: "Q-2016-MID-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Midterm]]"
source_pdf: "knowledge_base/past_paper/2016-midterm.pdf"
source_page: 3
solution_page: [3]
question_number: "1(b)"
year: 2016
term: "fall"
exam_type: "midterm"
marks: 2
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Prohibiting every repeated character changes the seven choices to a falling factorial."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-MID-P01-b

## Source

![[knowledge_base/past_paper/2016-midterm.pdf#page=3]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-midterm.pdf#page=3]]

## Question

(b) How many possible order id’s are there if no two characters are the same? (E.g., A034NXD is valid and A034NAD is invalid)

Shared context: [[STEM-2016-MID-P01 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2016-midterm.pdf#page=3|PDF physical page 3]].

(b) $36^{\underline7}$ or $7!\binom{36}{7}$

## Supplementary Explanation

**Answer.** $36\cdot35\cdot34\cdot33\cdot32\cdot31\cdot30=7!\binom{36}{7}$.

**Derivation/proof.** After $i$ distinct characters have been used, the next position has $36-i$ options. Multiplying for $i=0,\ldots,6$ gives $36!/29!$, also equal to choosing seven characters and permuting them.

The sequence of available counts is $36,35,34,33,32,31,30$. The repeated A in the source example violates the requirement.

Choosing the seven distinct characters first and ordering them gives $\binom{36}{7}7!$.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]
