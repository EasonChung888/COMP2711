---
id: "Q-2025S-FINAL-P07-sufficient"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 10
question_number: "7"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Use parity of unmatched socks to certify the imported threshold of twenty-three."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [10]
marks: 1
related_questions: ["[[Q-2025S-FINAL-P07-N - Counting Principles]]"]
---
# Q-2025S-FINAL-P07-sufficient

## Source

[[2025 Spring Final]]; printed item 7; 1 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=10]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=10]]

Prerequisite context (editorial): [[Q-2025S-FINAL-P07-N - Counting Principles]]. The threshold from the numerical atom is n=23.

## Question

![[STEM-2025S-FINAL-P07 - Shared Problem Prompt#Shared printed wording]]

You need to argue that $n$ socks guarantee at least 10 pairs,

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=10|physical PDF page 10]].

For any selection, at most one sock of each color will be left unpaired, and this happens if and only if an odd number of socks of that color is selected. Thus 24 socks suffice: at most 4 will be unpaired, leaving at least 20 in pairs. However, 23 will do! Since 23 is not the sum of four odd numbers, at most 3 socks out of 23 will be unpaired.

## Supplementary Explanation

**Answer.** Twenty-three socks always contain at least ten pairs.

**Derivation/proof.** Use $n=23$. Let the color counts be r,g,b,k. After pairing within colors, the number left over is $u=(r\bmod2)+(g\bmod2)+(b\bmod2)+(k\bmod2)\le4$. Since $23-u$ is even, u is odd, hence at most three. The number of disjoint same-color pairs is $\sum\lfloor\text{color count}/2\rfloor=(23-u)/2\ge10$. This holds for every permitted distribution, establishing sufficiency.

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]

Use parity of unmatched socks to certify the imported threshold of twenty-three.

- Prerequisite / related: [[Q-2025S-FINAL-P07-N - Counting Principles]]: 对最小数答案给出任意选择都满足的充分性证明。 The threshold from the numerical atom is n=23.
