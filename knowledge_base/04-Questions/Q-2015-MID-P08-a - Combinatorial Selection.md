---
id: "Q-2015-MID-P08-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 13
solution_page: [13]
question_number: "8(a)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 5
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Six gloves in exactly three colors force both gloves from each selected color, leaving only a color-subset choice."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P08-a

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=13]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=13]]

## Question

(a) the number of colors of these 6 gloves is 3?

Briefly explain how your answers are derived.

Shared context: [[STEM-2015-MID-P08 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2015-midterm.pdf#page=13|PDF physical page 13]].

(a) The number of colors of these 6 gloves is 3 means you have picked 3 pairs of gloves out of 12. So there are $\binom{12}{3}$ possible cases.

## Supplementary Explanation

**Answer.** $\binom{12}{3}=220$.

**Derivation/proof.** If the three selected colors contribute $g_1,g_2,g_3\le2$ gloves each and sum to six, all $g_i=2$. Choose those three colors from twelve; their gloves are then fixed.

The constraints $g_1+g_2+g_3=6$ and $g_i\le2$ force all three values to be two.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]
