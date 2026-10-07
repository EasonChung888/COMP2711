---
id: "Q-2025S-FINAL-P01-a-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 2
question_number: "1(a)(i)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Apply Cantor diagonalization to a countably infinite set and its power set."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
marks: 1
---
# Q-2025S-FINAL-P01-a-i

## Source

[[2025 Spring Final]]; printed item 1(a)(i); 1 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=2]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=2]]

## Question

![[STEM-2025S-FINAL-P01-a - Shared Problem Prompt#Shared printed wording]]

(i) There exists a countably infinite set $X$ with $\mathcal P(X)$ uncountable.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=2|physical PDF page 2]].

(a) i) T

## Supplementary Explanation

**Answer.** True.

**Derivation/proof.** Take $X=\mathbb N$, a countably infinite set. If its power set were listed as $A_0,A_1,\ldots$, construct $D=\{n:n\notin A_n\}$. For every $j$, $j\in D$ exactly when $j\notin A_j$, so $D\ne A_j$. But $D$ is itself a subset of the natural numbers, contradicting completeness of the list. Thus this X has an uncountable power set and witnesses the existential statement.

## Connections

- [[Topic - Sets and Functions - 集合与函数]]
- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Apply Cantor diagonalization to a countably infinite set and its power set.
