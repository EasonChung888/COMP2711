---
id: "Q-2017-FINAL-P01"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 3
solution_page: [3]
question_number: "1"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]","[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Inclusion-Exclusion - 容斥原理]]","[[Subtopic - Basic Counting - 基本计数]]","[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Inclusion-Exclusion - 容斥原理]]","[[Counting Principles - 计数原理]]","[[Functions - 函数]]"]
methods: ["[[Inclusion-Exclusion Method - 容斥方法]]","[[Counting Method - 计数方法]]","[[Function Counting Method - 函数计数方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Surjective assignment of nine distinct reports to four employees needs all four levels of inclusion-exclusion."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 4
related_questions: ["[[Q-2024F-MID-P07 - Inclusion-Exclusion]]"]
---
# Q-2017-FINAL-P01

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=3]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=3]]

## Question

An office manager has four employees and nine reports to be done. In how many ways can the reports be assigned to the employees so that each employee has at least one report to do?

## Official Answer

Source: [[knowledge_base/past_paper/2017-final.pdf#page=3|physical PDF page 3]].

$4^9-\binom413^9+\binom422^9-\binom431^9$.

## Supplementary Explanation

**Answer.** $4^9-\binom413^9+\binom422^9-\binom431^9=186480$.

**Derivation/proof.** There are $4^9$ unrestricted assignments. For each employee, define the bad event that they receive no report. If a specified set of $j$ employees is omitted, each report has $4-j$ choices, giving $(4-j)^9$ assignments. Inclusion-exclusion gives $\sum_{j=0}^4(-1)^j\binom4j(4-j)^9$, whose last term is zero. Evaluating yields 186480.

Evaluation gives $262144-78732+3072-4=186480$. Each nonempty assignment survives inclusion-exclusion exactly once.

## Connections

- [[Subtopic - Inclusion-Exclusion - 容斥原理]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Inclusion-Exclusion - 容斥原理]]
- [[Counting Principles - 计数原理]]
- [[Functions - 函数]]
- [[Inclusion-Exclusion Method - 容斥方法]]
- [[Counting Method - 计数方法]]
- [[Function Counting Method - 函数计数方法]]

- Variant / 变式: [[Q-2024F-MID-P07 - Inclusion-Exclusion]] — Both count onto assignments of distinct tasks to named recipients by inclusion–exclusion on empty recipients. The 2017 instance has nine reports and four employees; the 2024 instance has five jobs and three servers, so the same formula changes from $\sum_j(-1)^j\binom4j(4-j)^9$ to $\sum_j(-1)^j\binom3j(3-j)^5$. 两题同为带标签任务到带标签接收者的满射计数：把接收者为空作为坏事件，再按空集合大小容斥；只需把九份报告、四名员工替换为五项工作、三台服务器。
