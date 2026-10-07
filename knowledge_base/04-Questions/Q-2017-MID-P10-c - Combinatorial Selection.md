---
id: "Q-2017-MID-P10-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 12
solution_page: [12]
question_number: "10(c)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Reserving five candies in each of four boxes leaves thirty, exposing the printed arithmetic error."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
---
# Q-2017-MID-P10-c

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=12]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=12]]

Source verification: The printed result is $\binom{35+4-1}{3}$. It incorrectly leaves 35 candies. The corrected answer is independently derived from $50-4\cdot5=30$.

## Question

(c) How many ways can you put the candies in the boxes, assuming that the candies are identical and each box must have at least five candies put into it?

Shared context: [[STEM-2017-MID-P10 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2017-midterm.pdf#page=12|physical PDF page 12]].

$\binom{35+4-1}{3}$.

## Supplementary Explanation

**Answer.** $\binom{33}{3}=5456$.

**Derivation/proof.** Write each box count as $x_i=5+y_i$, where $y_i\ge0$. Then $y_1+y_2+y_3+y_4=50-4\cdot5=30$. Stars and bars gives $\binom{30+4-1}{3}=\binom{33}{3}=5456$. Independently, direct enumeration of nonnegative quadruples summing to 30 gives the same 5456; the bijection adds five to each coordinate.

For the independent enumeration, let $y_1=0,\ldots,30$, $y_2=0,\ldots,30-y_1$, and $y_3=0,\ldots,30-y_1-y_2$; $y_4$ is determined by the sum. This counts $5456$ quadruples.

The four required allocations reserve twenty balls in total, leaving $50-20=30$ freely distributed balls. Apply stars and bars to those thirty, rather than to the printed thirty-five.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]
