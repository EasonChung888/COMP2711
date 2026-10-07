---
id: "Q-2025F-FINAL-P02-a-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 5
question_number: "2(a)(ii)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Use a ternary diagonal string or binary-string injection to prove uncountability."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 1
---
# Q-2025F-FINAL-P02-a-ii

## Source

[[2025 Fall Final]]; printed item 2(a)(ii); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=5]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=5]]

## Question

![[STEM-2025F-FINAL-P02-a - Shared Problem Prompt#Shared printed wording]]

(ii) The set of ternary strings (i.e., they are made of $\{0,1,2\}$) of infinite length.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=5|physical PDF page 5]].

(ii) Uncountable

## Supplementary Explanation

**Answer.** Uncountable.

**Derivation/proof.** Suppose all infinite ternary strings can be listed as $s_1,s_2,\ldots$. Define the $n$th digit of a new string by $d_n=(s_n(n)+1)\bmod3$. Every digit remains in $\{0,1,2\}$, while $d_n\ne s_n(n)$. The new string therefore differs from the $n$th listed string at position $n$, for every $n$. It is absent from the proposed complete list, a contradiction. Hence the set is uncountable.

## Connections

- [[Topic - Sets and Functions - 集合与函数]]
- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Use a ternary diagonal string or binary-string injection to prove uncountability.
