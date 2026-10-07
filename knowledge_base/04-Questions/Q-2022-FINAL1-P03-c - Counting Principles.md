---
id: "Q-2022-FINAL1-P03-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2022-final-part-1.pdf"
source_page: 2
question_number: "3(c)"
year: 2022
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Only the immediately preceding character is forbidden after the initial digit choice."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 3
---
# Q-2022-FINAL1-P03-c

## Source

![[knowledge_base/past_paper/2022-final-part-1.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2022-final-part-1.pdf#page=3]]

## Question

How many possible order IDs are there if the leftmost character must be a digit and no two consecutive characters are the same? (E.g. 3ABA3C6 is valid. C3ARX7B and 3ARRX7B are invalid)

Shared context: [[STEM-2022-FINAL1-P03 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2022-final-part-1.pdf#page=3|physical PDF page 3]].

> (c) $10\cdot35^6$. The leftmost character has 10 choices, then the second leftmost character has 35 choices because it cannot be the same as the previous character, and so on.

## Supplementary Explanation

**Answer.** $10\cdot35^6$.

**Derivation/proof.** Choose the leftmost digit in 10 ways. At every later position only one of the36 symbols is forbidden: the symbol immediately before it. Thus each has 35 choices regardless of earlier repeated symbols. Multiplication over the six remaining positions gives 10·35^6. The valid example's repeated3 shows distant repetition is allowed.

The valid example $3ABA3C6$ repeats 3. The restriction is adjacent inequality, not global nonrepetition.

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
