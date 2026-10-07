---
id: "Q-2025F-MID-P03-c-vii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 11
question_number: "3(c)(vii)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Check the precise set condition using the explicit vii encoding or counterexample."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [11]
marks: 1
related_questions: ["[[Q-2022-MID-P05-b - Countability]]"]
---
# Q-2025F-MID-P03-c-vii

## Source

[[2025 Fall Midterm]]; printed item 3(c)(vii); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=11]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=11]]

## Question

![[STEM-2025F-MID-P03-c - Shared Problem Prompt#Shared printed wording]]

(vii) The set of binary strings of infinite length such that it has exactly three “1”'s is countable infinite.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=11|physical PDF page 11]].

> (c) (vii) T

## Supplementary Explanation

**Answer.** True.

**Derivation/proof.** Each string is uniquely determined by the three one-positions $i<j<k$. Enumerate by maximum position $k=3,4,\ldots$; for fixed k there are only $\binom{k-1}2$ choices for the other two positions, a finite layer. A countable union of finite layers is countable. The triples $(1,2,k)$ for $k\ge3$ provide infinitely many distinct strings, so the set is countably infinite.

## Connections

- [[Topic - Sets and Functions - 集合与函数]]
- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Check the precise set condition using the explicit vii encoding or counterexample.

- Contrast / 对比: [[Q-2022-MID-P05-b - Countability]] — Both classify sets encoded by infinite digit strings. Even-digit decimals retain an independent 0-or-2 choice at every position and are uncountable; exactly three 1s in a binary string leave only three position parameters and form a countable set. 两题都涉及无限位数字串；偶数小数位保留无限次独立选择，因而不可数，而二进制串恰有三个一时只需三个位置参数，因而可数。
