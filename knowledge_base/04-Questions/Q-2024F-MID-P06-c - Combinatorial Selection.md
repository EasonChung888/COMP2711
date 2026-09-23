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

## 中文解析

按例子和可重复限制，deceasing 表示非递增。令 $x_i$ 为数字 i 的出现次数，$x_0+\cdots+x_9=6$ 且每个 $x_i\ge0$。本题的具体展开与结论如下。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\binom{15}9-1=5004$。

**推导。** 按例子和可重复限制，deceasing 表示非递增。令 $x_i$ 为数字 i 的出现次数，$x_0+\cdots+x_9=6$ 且每个 $x_i\ge0$。每个频数向量唯一决定从九到零的排序。Stars and bars 给出 $\binom{6+10-1}{10-1}=\binom{15}9=5005$ 个非负解。唯一不合法的是 $x_0=6$、其他为零，对应 000000；只要有非零数字，降序首位就非零。所以答案为 $5005-1=5004$。

## Common Mistakes

- 允许零出现且只需排除 000000，不能删除所有含零的频数向量。
- 非递增允许相等，原文 deceasing 的例子 997770 明确了重复的含义。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]

Count six-digit weakly decreasing strings with the specific leading-zero restriction.

- [[Q-2024F-MID-P06-d - Combinatorial Selection]]: 重复数字用频数计数：非递增仅删除全零，非递减则排除所有包含零的频数向量。
