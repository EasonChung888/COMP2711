---
id: "Q-2025F-FINAL-P02-a-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 5
question_number: "2(a)(iii)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Prefix an arbitrary infinite ternary string with a fixed required substring to preserve uncountability."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 1
---
# Q-2025F-FINAL-P02-a-iii

## Source

[[2025 Fall Final]]; printed item 2(a)(iii); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=5]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=5]]

## Question

![[STEM-2025F-FINAL-P02-a - Shared Problem Prompt#Shared printed wording]]

(iii) The set of ternary strings of infinite length such that they contain “012”.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=5|physical PDF page 5]].

(iii) Uncountable

## Supplementary Explanation

**Answer.** Uncountable.

**Derivation/proof.** For every infinite ternary string $s$, define $f(s)=012s$ by attaching the fixed prefix 012. This new string contains the required consecutive substring. If $s\ne t$, their tails differ, so $012s\ne012t$; thus $f$ is injective. The set of infinite ternary strings is uncountable, so its injective image is uncountable. That image is contained in the requested set, proving that the requested set is also uncountable. Requiring an occurrence of 012 leaves the infinite tail unrestricted.

## Connections

- [[Topic - Sets and Functions - 集合与函数]]
- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Prefix an arbitrary infinite ternary string with a fixed required substring to preserve uncountability.
