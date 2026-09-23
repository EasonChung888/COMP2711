---
id: "Q-2025F-MID-P06"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 15
question_number: "6"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Inclusion-Exclusion - 容斥原理]]"]
concepts: ["[[Inclusion-Exclusion - 容斥原理]]"]
methods: ["[[Inclusion-Exclusion Method - 容斥方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Apply inclusion-exclusion to three forbidden missing-digit events with a separate leading-digit count."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [15]
marks: 9
---
# Q-2025F-MID-P06

## Source

[[2025 Fall Midterm]]; printed item 6; 9 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=15]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=15]]

## Question

Use inclusion-exclusion principle to solve the following problem. No other methods are allowed. You do not need to calculate the final value.
In how many 6-digit numbers do all three digits 1, 2, and 3 appear at least once? Note that the leftmost digit can not be equal to 0.

## 中文解析

令坏事件为缺少某个指定数字，首位始终另数非零可选数字。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $9\cdot10^5-3\cdot8\cdot9^5+3\cdot7\cdot8^5-6\cdot7^5$。

**推导。** 全集是六位数，$|S|=9\cdot10^5$。令 $A_i$ 为缺少数字 $i$ 的数，其中 $i=1,2,3$。缺少一个指定非零数字时，首位八种、余位各九种，故 $|A_i|=8\cdot9^5$。缺少两个时首位七种、余位各八种，每个两两交集为 $7\cdot8^5$。三个都缺少时首位六种、余位各七种，三重交集为 $6\cdot7^5$。由 inclusion-exclusion，所求补集大小为 $9\cdot10^5-3(8\cdot9^5)+3(7\cdot8^5)-6\cdot7^5$，每个系数分别对应三个单事件、三个双事件及一个三事件。

## Common Mistakes

- 首位不能为零，缺数字后的首位选择数始终比其他位置少一。
- 最终算补集会使容斥符号变为减单项、加双项、减三项。

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Inclusion-Exclusion - 容斥原理]]
- [[Inclusion-Exclusion - 容斥原理]]
- [[Inclusion-Exclusion Method - 容斥方法]]

Apply inclusion-exclusion to three forbidden missing-digit events with a separate leading-digit count.
