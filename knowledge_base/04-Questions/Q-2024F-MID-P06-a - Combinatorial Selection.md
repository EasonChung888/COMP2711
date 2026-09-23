---
id: "Q-2024F-MID-P06-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 11
question_number: "6(a)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Count six-digit strictly decreasing strings with the specific leading-zero restriction."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [11]
marks: 4
related_questions: ["[[Q-2024F-MID-P06-b - Combinatorial Selection]]"]
---
# Q-2024F-MID-P06-a

## Source

[[2024 Fall Midterm]]; printed item 6(a); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=11]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=11]]

## Question

(a) Are strictly decreasing (e.g., 864320). Briefly explain why.
Hint: Any six different digits give you a unique number with strictly decreasing digits.

Shared printed context: ![[STEM-2024F-MID-P06 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

严格递减要求六位数字互不相同。从十个数字零至九选六个，有 $\binom{10}6$ 种；选定后按降序排列得到唯一数字。本题的具体展开与结论如下。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\binom{10}6=210$。

**推导。** 严格递减要求六位数字互不相同。从十个数字零至九选六个，有 $\binom{10}6$ 种；选定后按降序排列得到唯一数字。最大的一位在最左；六个不同数字不可能全部为零，所以首位一定非零。每个严格递减六位数反过来也确定唯一六元数字集合，因此总数为 $\binom{10}6=210$。

## Common Mistakes

- 零可以出现在严格降序数字的末尾，因此候选数字共有十种。
- 选六个互异数字后顺序唯一，不应再乘六的阶乘。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]

Count six-digit strictly decreasing strings with the specific leading-zero restriction.

- [[Q-2024F-MID-P06-b - Combinatorial Selection]]: 严格降序允许零位于尾端；严格升序若选零会出现前导零，所以候选数字分别为十种与九种。
