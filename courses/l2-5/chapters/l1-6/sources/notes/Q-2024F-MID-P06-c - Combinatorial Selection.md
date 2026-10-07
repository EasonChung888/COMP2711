---
id: "Q-2024F-MID-P06-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 11
question_number: "6(c)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Count six-digit weakly decreasing strings with the specific leading-zero restriction."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [11]
marks: 4
related_questions: ["[[Q-2024F-MID-P06-d - Combinatorial Selection]]"]
---
# Q-2024F-MID-P06-c

## Source

[[2024 Fall Midterm]]; printed item 6(c); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=11]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=11]]

## Question

(c) Are deceasing, but potentially contain repeated digits (e.g., 997770). Briefly explain why.
Hint: Only the number of occurrences of each digit is important.

Shared printed context: ![[STEM-2024F-MID-P06 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=11|physical PDF page 11]].

> (c) We can convert this question to another question so that we count the frequency of each digit. In other words: $x_0+x_1+x_2+\cdots+x_9=6$. this equation has $\binom{15}9$ non-negative integer solutions. However we need to remove 000000 case which gives us $\binom{15}9-1$.

## Supplementary Explanation

**Answer.** $\binom{15}9-1=5004$.

**Derivation/proof.** With repetition, “deceasing” means nonincreasing as illustrated. Let $x_i$ be the frequency of digit $i$, so $x_0+\cdots+x_9=6$ and all $x_i\ge0$. Each frequency vector gives one descending arrangement. Stars and bars gives $\binom{6+10-1}{10-1}=\binom{15}9=5005$ nonnegative solutions. Only $x_0=6$ with all other entries zero is invalid, producing 000000. Any nonzero digit becomes the leading digit. Thus $5005-1=5004$.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]

Count six-digit weakly decreasing strings with the specific leading-zero restriction.

- [[Q-2024F-MID-P06-d - Combinatorial Selection]]: 重复数字用频数计数：非递增仅删除全零，非递减则排除所有包含零的频数向量。
