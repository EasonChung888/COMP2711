---
id: "Q-2025S-MID-P04-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf"
source_page: 6
question_number: "4(ii)"
year: 2025
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Encode each degree-at-most-five polynomial by six integer coefficients and prove infinitude."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
---
# Q-2025S-MID-P04-ii

## Source

[[2025 Spring Midterm]]; printed item 4(ii); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=6]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=6]]

## Question

![[STEM-2025S-MID-P04 - Shared Problem Prompt#Shared printed wording]]

(ii) The set of all polynomials with integer coefficients and the degree is at most 5.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=6|physical PDF page 6]].

(ii) Countably infinite.

## Supplementary Explanation

**Answer.** Countably infinite.

**Derivation/proof.** Write each polynomial uniquely as $a_0+a_1x+\cdots+a_5x^5$, filling unused coefficients with zero. It corresponds to a tuple in $\mathbb Z^6$. Enumerate the tuples by the sum of the absolute values of their coordinates; each layer is finite, hence the collection is countable. Constants $f(x)=j$ for integer $j$ give an infinite subset, so it is countably infinite.

## Connections

- [[Topic - Sets and Functions - 集合与函数]]
- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Encode each degree-at-most-five polynomial by six integer coefficients and prove infinitude.
