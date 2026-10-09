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

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=12|physical PDF page 12]].

> Answer: Solution 1: This is the number of onto functions from a set of 5 elements to a set of 3 elements: $3^5-\binom312^5+\binom321^5$
> Solution 2:

## Supplementary Explanation

**Answer.** $3^5-\binom312^5+\binom321^5=150$.

**Derivation/proof.** Each of five jobs has three choices, giving $3^5=243$ functions. Let $A_i$ consist of assignments leaving server $i$ empty; then $|A_i|=2^5$. If two specified servers are empty, all jobs go to the remaining server, so the intersection has size $1^5=1$. The triple intersection is empty because five jobs cannot use no server. Inclusion-exclusion gives $243-3\cdot32+3\cdot1=150$. Jobs and servers have identities, so these are labelled assignments, not unordered partitions.

## Connections

- [[Subtopic - Inclusion-Exclusion - 容斥原理]]
- [[Subtopic - Sets and Functions - 集合与函数]]

- [[Inclusion-Exclusion - 容斥原理]]
- [[Functions - 函数]]
- [[Inclusion-Exclusion Method - 容斥方法]]

Count onto job-to-server functions by subtracting assignments with one empty server and restoring double intersections.

- Variant / 变式: [[Q-2017-FINAL-P01 - Inclusion-Exclusion]] — Both count onto assignments of distinct tasks to named recipients by inclusion–exclusion on empty recipients. The 2017 instance has nine reports and four employees; the 2024 instance has five jobs and three servers, so the same formula changes from $\sum_j(-1)^j\binom4j(4-j)^9$ to $\sum_j(-1)^j\binom3j(3-j)^5$. 两题同为带标签任务到带标签接收者的满射计数：把接收者为空作为坏事件，再按空集合大小容斥；只需把九份报告、四名员工替换为五项工作、三台服务器。
