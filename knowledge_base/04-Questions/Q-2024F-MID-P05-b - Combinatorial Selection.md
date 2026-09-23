---
id: "Q-2024F-MID-P05-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 10
question_number: "5(b)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Use the same-parity endpoints to uniquely determine the middle of a three-element arithmetic progression."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [10]
marks: 6
---
# Q-2024F-MID-P05-b

## Source

[[2024 Fall Midterm]]; printed item 5(b); 6 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=10]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=10]]

## Question

(b) In how many ways we can pick 3 different numbers from $\{1,2,3,\ldots,2n\}$ such that they form arithmetic sequence? Explain your solution. (Arithmetic sequence is a sequence of numbers such that the difference from any succeeding term to its preceding term remains constant throughout the sequence, For example 1, 4, 7 is an arithmetic sequence but 1, 5, 10 is not)
Hint: Consider your sorted sequence to be $a,b,c$. What can you say about the oddity of $a$ and $c$?

## 中文解析

选出的三个数按大小排序后，中项是两端的平均数。两端同奇偶恰保证平均值为整数，并且自动严格落在两端之间，所以只需选择端点。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $2\binom n2=n(n-1)$。

**推导。** 令 $a<b<c$。等差条件 $b-a=c-b$ 等价于 $b=(a+c)/2$，因此 a 与 c 必须同奇偶。集合中有 n 个奇数和 n 个偶数：选两个不同奇端点有 $\binom n2$ 种，选两个不同偶端点也有 $\binom n2$ 种。每对端点确定唯一整数中点 b，且 $a<b<c$ 保证三个不同、仍位于一至 $2n$。反过来每个合法三元子集恢复唯一端点对，故总数为 $2\binom n2$，不需乘排列数。

## Common Mistakes

- 题目 pick 三个数按排序解释，不应再乘 $3!$。
- 端点必须同奇偶；中点虽可能与端点奇偶不同，仍是合法整数。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]

Use the same-parity endpoints to uniquely determine the middle of a three-element arithmetic progression.
