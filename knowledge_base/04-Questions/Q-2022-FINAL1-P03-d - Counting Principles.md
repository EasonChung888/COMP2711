---
id: "Q-2022-FINAL1-P03-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2022-final-part-1.pdf"
source_page: 2
question_number: "3(d)"
year: 2022
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "The two alternating type patterns have four positions of the starting type and three of the other."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 3
---
# Q-2022-FINAL1-P03-d

## Source

![[knowledge_base/past_paper/2022-final-part-1.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2022-final-part-1.pdf#page=3]]

## Question

How many possible order IDs are there if characters must alternative between a letter and a digit? (E.g. A3R4B7Q and 4V7X3V7 are valid, B7XB4Q3 is invalid)

Shared context: [[STEM-2022-FINAL1-P03 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2022-final-part-1.pdf#page=3|physical PDF page 3]].

> (d) $10^4\cdot26^3+10^3\cdot26^4$. It can either be four digits and three letters, or three digits and four letters. The positions of digits and alphabets are fixed in either case.

## Supplementary Explanation

**Answer.** $26^4\cdot10^3+10^4\cdot26^3$.

**Derivation/proof.** If the ID starts with a letter, its type pattern is L-D-L-D-L-D-L, with four letter slots and three digit slots, giving 26^4·10^3. If it starts with a digit, the complementary pattern gives 10^4·26^3. These two cases cannot overlap and include every alternating ID. Repetition within one type is allowed by the displayed examples.

The digit-first pattern is D-L-D-L-D-L-D. The sample $4V7X3V7$ confirms that same-type positions may repeat.

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
