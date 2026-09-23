---
id: "Q-2024F-MID-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 11
question_number: "6(b)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Count six-digit strictly increasing strings with the specific leading-zero restriction."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [11]
marks: 3
related_questions: ["[[Q-2024F-MID-P06-a - Combinatorial Selection]]"]
---
# Q-2024F-MID-P06-b

## Source

[[2024 Fall Midterm]]; printed item 6(b); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=11]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=11]]

## Question

(b) Are strictly increasing (e.g., 136789). Briefly explain why.

Shared printed context: ![[STEM-2024F-MID-P06 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

严格递增要求六个不同数字按升序排列。如果包含零，它作为最小数字一定位于最左，与六位数首位不能零冲突，因此只能使用一至九。本题的具体展开与结论如下。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\binom96=84$。

**推导。** 严格递增要求六个不同数字按升序排列。如果包含零，它作为最小数字一定位于最左，与六位数首位不能零冲突，因此只能使用一至九。从九个非零数字选六个，有 $\binom96=84$ 种。每个选集恰有一种严格升序排列，且全部首位非零，所以无需再乘六的阶乘。

## Common Mistakes

- 只要选零它就被迫成为首位，因此所有选集必须来自一至九。
- 严格递增不允许重复，不能用带重复组合的隔板公式。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]

Count six-digit strictly increasing strings with the specific leading-zero restriction.

- [[Q-2024F-MID-P06-a - Combinatorial Selection]]: 严格降序允许零位于尾端；严格升序若选零会出现前导零，所以候选数字分别为十种与九种。
