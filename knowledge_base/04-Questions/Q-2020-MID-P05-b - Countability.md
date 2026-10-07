---
id: "Q-2020-MID-P05-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 3
question_number: "5(b)"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Cantor diagonalization constructs a subset missing from every proposed enumeration."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
related_questions: ["[[Q-2020-MID-P05-c - Countability]]","[[Q-2020-MID-P05-d - Countability]]","[[Q-2021-MID-P04-b - Countability]]"]
---
# Q-2020-MID-P05-b

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=3]]

## Question

$P(\mathbb N)$

Shared context: [[STEM-2020-MID-P05 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-midterm.pdf#page=3|physical PDF page 3]].

Uncountable.

## Supplementary Explanation

**Answer.** Uncountable.

**Derivation/proof.** Suppose all subsets can be listed $S_0,S_1,\ldots$ using an enumeration of the naturals. Define $D=\{i:i\notin S_i\}$. For every i, membership of i in D differs from membership in $S_i$, so $D\ne S_i$. Yet D is a subset of the naturals, contradicting completeness of the list.

Index the enumeration from whichever natural-number starting convention is adopted; the diagonal contradiction is unchanged.

More explicitly, set $D=\{i\in\mathbb N:i\notin S_i\}$. If the purported exhaustive list had $D=S_j$, then $j\in D\iff j\notin S_j$ would contradict that equality. Thus the diagonal subset is missing from every countable list.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

- Used by: [[Q-2020-MID-P05-c - Countability]]

- Used by: [[Q-2020-MID-P05-d - Countability]]

Variant/contrast: [[Q-2021-MID-P04-b - Countability]] — Power-set uncountability versus the subfamily remaining after removing finite subsets.
