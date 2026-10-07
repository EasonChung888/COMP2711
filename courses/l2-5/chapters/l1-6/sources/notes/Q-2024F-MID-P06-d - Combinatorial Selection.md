---
id: "Q-2024F-MID-P06-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 11
question_number: "6(d)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Count six-digit weakly increasing strings with the specific leading-zero restriction."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [11]
marks: 3
related_questions: ["[[Q-2024F-MID-P06-c - Combinatorial Selection]]"]
---
# Q-2024F-MID-P06-d

## Source

[[2024 Fall Midterm]]; printed item 6(d); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=11]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=11]]

## Question

(d) Are increasing, but potentially contain repeated digits (e.g., 111144). Briefly explain why.

Shared printed context: ![[STEM-2024F-MID-P06 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=11|physical PDF page 11]].

> (d) Similar to part (c). However we should not pick any 0. This means $x_1+x_2+\cdots+x_9=6$ which has $\binom{14}8$ different non-negative integer solutions.

## Supplementary Explanation

**Answer.** $\binom{14}8=3003$.

**Derivation/proof.** Allowing repetitions makes “increasing” mean nondecreasing. Any zero would appear first, so $x_0=0$. The remaining frequencies satisfy $x_1+\cdots+x_9=6$ with all entries nonnegative. Every vector gives one valid ascending six-digit number. Stars and bars yields $\binom{6+9-1}{9-1}=\binom{14}8=3003$. No all-zero case needs subtracting because zero was excluded altogether.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]

Count six-digit weakly increasing strings with the specific leading-zero restriction.

- [[Q-2024F-MID-P06-c - Combinatorial Selection]]: 重复数字用频数计数：非递增仅删除全零，非递减则排除所有包含零的频数向量。
