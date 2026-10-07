---
id: "Q-2022-MID-P05-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 2
question_number: "5(c)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "A diagonal schedule enumerates the countable union using countable pairs of indices."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
---
# Q-2022-MID-P05-c

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=3]]

## Question

The union of countably many countable sets.

Shared context: [[STEM-2022-MID-P05 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2022-midterm.pdf#page=3|physical PDF page 3]].

> (c) Countable

## Supplementary Explanation

**Answer.** Countable.

**Derivation/proof.** List the sets A0,A1,… and choose an enumeration a_(i,0),a_(i,1),… for each nonempty one, repeating values for finite sets if needed. Enumerate index pairs (i,j) by increasing i+j and output the corresponding element, skipping repetitions. Every member occurs at a finite pair and hence a finite stage, so the union is at most countable; it may be finite or empty.

Visit index pairs in increasing order of $i+j$, with finitely many pairs at each stage. Every union member is output at a finite stage. The union may also be finite or empty.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]
