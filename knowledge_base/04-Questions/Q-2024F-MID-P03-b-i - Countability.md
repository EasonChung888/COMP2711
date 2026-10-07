---
id: "Q-2024F-MID-P03-b-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 7
question_number: "3(b)(i)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]","[[Set Operations - 集合运算]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["construction"]
difficulty: 1
difficulty_basis: "Construct an infinite B whose complement in the real numbers is countable infinite and verify both required properties."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [7]
marks: 1
related_questions: ["[[Q-2019-MID-P07-b - Countability]]"]
---
# Q-2024F-MID-P03-b-i

## Source

[[2024 Fall Midterm]]; printed item 3(b)(i); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=7]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=7]]

## Question

(i) Let $\mathbb R$ be the set of real numbers. Provide an example for an infinite set $B$ such that $\mathbb R-B$ is countable infinite.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=7|physical PDF page 7]].

> (b) (i) $B=R-N$

## Supplementary Explanation

**Answer.** $B=\mathbb R\setminus\mathbb N$.

**Derivation/proof.** Choose $B=\mathbb R\setminus\mathbb N$. The set $B$ contains every irrational, so it is infinite as required. The difference is $\mathbb R\setminus B=\mathbb R\setminus(\mathbb R\setminus\mathbb N)=\mathbb N$, which is enumerable and infinite. Thus the construction meets both requirements.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]

- [[Countability - 可数性]]
- [[Set Operations - 集合运算]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Construct an infinite B whose complement in the real numbers is countable infinite and verify both required properties.

- Variant / 变式: [[Q-2019-MID-P07-b - Countability]] — Both construct a countably infinite difference by removing a countable set from $\mathbb R$ to form $B$. The 2019 prompt additionally requires both input sets to be uncountable; the 2024 prompt fixes $A=\mathbb R$ and asks only that $B$ be infinite. 两题都先从实数中去掉一个可数无限集形成 $B$，再取补集恢复它；2019 还须验证两个输入集均不可数，2024 则固定全集为实数且只要求 $B$ 无限。
