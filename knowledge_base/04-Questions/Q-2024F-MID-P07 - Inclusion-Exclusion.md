---
id: "Q-2024F-MID-P07"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 12
question_number: "7"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]","[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Inclusion-Exclusion - 容斥原理]]","[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Inclusion-Exclusion - 容斥原理]]","[[Functions - 函数]]"]
methods: ["[[Inclusion-Exclusion Method - 容斥方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Count onto job-to-server functions by subtracting assignments with one empty server and restoring double intersections."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [12]
marks: 5
related_questions: ["[[Q-2017-FINAL-P01 - Inclusion-Exclusion]]"]
---
# Q-2024F-MID-P07

## Source

[[2024 Fall Midterm]]; printed item 7; 5 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=12]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=12]]

Page 12 contains a complete Solution 1 and an empty “Solution 2” heading; only the complete supplied expression is used.

## Question

Assume that there are 5 processing jobs that must be assigned to 3 servers.
Use Inclusion-Exclusion to calculate how many assignments exist such that each server is assigned to at least one job? Briefly explain why.

## 中文解析

每个工作选一个服务器，总分配是函数；要求每台至少收到一项工作即满射。定义空服务器事件后使用容斥，避免重复删去只用一台的分配。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $3^5-\binom312^5+\binom321^5=150$。

**推导。** 五个工作各有三台服务器选择，共 $3^5=243$ 个函数。令 $A_i$ 为服务器 i 为空的分配集，则 $|A_i|=2^5$；指定两台为空时全部工作进入剩下的一台，交集大小为 $1^5=1$。三台都空不可能分配五个工作，交集为零。容斥得到满射数 $243-3\cdot32+3\cdot1=150$。每个工作与服务器都有自己的身份，所以这里数的是带标签分配而非无序分组。

## Common Mistakes

- 服务器有身份，不能把答案再除以三的阶乘。
- 单独减去三个空服务器事件会重复删去双空情况，要加回来。

## Connections

- [[Subtopic - Inclusion-Exclusion - 容斥原理]]
- [[Subtopic - Sets and Functions - 集合与函数]]

- [[Inclusion-Exclusion - 容斥原理]]
- [[Functions - 函数]]
- [[Inclusion-Exclusion Method - 容斥方法]]

Count onto job-to-server functions by subtracting assignments with one empty server and restoring double intersections.

- Variant / 变式: [[Q-2017-FINAL-P01 - Inclusion-Exclusion]] — Both count onto assignments of distinct tasks to named recipients by inclusion–exclusion on empty recipients. The 2017 instance has nine reports and four employees; the 2024 instance has five jobs and three servers, so the same formula changes from $\sum_j(-1)^j\binom4j(4-j)^9$ to $\sum_j(-1)^j\binom3j(3-j)^5$. 两题同为带标签任务到带标签接收者的满射计数：把接收者为空作为坏事件，再按空集合大小容斥；只需把九份报告、四名员工替换为五项工作、三台服务器。
