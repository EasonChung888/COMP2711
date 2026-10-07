---
id: "Q-2019-FINAL-P08-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 10
solution_page: [10]
question_number: "8(a)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Complement counting removes all strings using the other 25 letters."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-FINAL-P08-a

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=10]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=10]]

## Question

(a) the letter a?

Shared context: [[STEM-2019-FINAL-P08 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=10|physical PDF page 10]].

The only reasonable way to do this is by subtracting from the number of strings with no restrictions the number of strings that do not contain the letter $a$. The answer is $26^6-25^6$.

## Supplementary Explanation

**Answer.** $26^6-25^6$.

**Derivation/proof.** There are $26^6$ unrestricted length-six strings. A string with no a has 25 choices independently at each position, giving $25^6$. The complement of no a is at least one a, so subtracting counts every desired string exactly once, including those with several occurrences of a.

The requested letter needs at least one occurrence; subtracting strings with none avoids having to split into every possible number of occurrences.

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
