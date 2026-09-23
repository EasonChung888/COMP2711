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

## 中文解析

可重复的 increasing 表示非递减。若包含任意零，零必排在开头，违反六位数条件，故 $x_0=0$。本题的具体展开与结论如下。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\binom{14}8=3003$。

**推导。** 可重复的 increasing 表示非递减。若包含任意零，零必排在开头，违反六位数条件，故 $x_0=0$。剩余频数满足 $x_1+\cdots+x_9=6$，每项非负，每个向量按升序排列得到唯一合法六位数。九种数字的非负分配数为 $\binom{6+9-1}{9-1}=\binom{14}8=3003$，无须再减全零，因为零已彻底排除。

## Common Mistakes

- 升序时任何零都会成为前导零，应直接只统计一至九的频数。
- 九种数字分配六次，隔板数量是八，不是九或十。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]

Count six-digit weakly increasing strings with the specific leading-zero restriction.

- [[Q-2024F-MID-P06-c - Combinatorial Selection]]: 重复数字用频数计数：非递增仅删除全零，非递减则排除所有包含零的频数向量。
