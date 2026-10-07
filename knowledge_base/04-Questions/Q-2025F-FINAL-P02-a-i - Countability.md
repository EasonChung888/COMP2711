---
id: "Q-2025F-FINAL-P02-a-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 5
question_number: "2(a)(i)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Recognize that an infinite alternating binary string is completely determined by its first bit."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 1
---
# Q-2025F-FINAL-P02-a-i

## Source

[[2025 Fall Final]]; printed item 2(a)(i); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=5]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=5]]

Page 5 explicitly states that the correct answer under the definition is Finite (two strings), while also accepting Countably Infinite for an alternative arbitrary-length interpretation. This note preserves the correct official finite branch and documents the grading concession without adopting it as a second mathematical result.

## Question

![[STEM-2025F-FINAL-P02-a - Shared Problem Prompt#Shared printed wording]]

(i) The set of binary strings of infinite length with no two identical consecutive bits (i.e., no “00” and no “11” anywhere in the sequence).

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=5|physical PDF page 5]].

(a) (i) Countable infinite and Finite are both accepted here. based on the definition, the correct answer is finite, because there are only 2 such strings. However if the phrasing of the question was set of arbitrary length strings ... then the answer was countable infinite. As it was not discussed clearly, we accept both Countable Infinite and Finite answers.

## Supplementary Explanation

**Answer.** Finite; exactly two strings.

**Derivation/proof.** If the first bit is zero, avoiding “00” forces the next bit to be one. Avoiding “11” then forces the following bit to be zero. Continuing gives the unique string $010101\ldots$. Starting with one similarly forces $101010\ldots$. There are only two first-bit choices, and both distinct strings satisfy the restrictions; the cardinality is exactly two. The marking note also accepts “countably infinite” for an alternative interpretation involving arbitrary finite lengths. The literal question specifies infinite length, for which the mathematical classification is finite.

## Connections

- [[Topic - Sets and Functions - 集合与函数]]
- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Recognize that an infinite alternating binary string is completely determined by its first bit.
