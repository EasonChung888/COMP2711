---
id: "Q-2023F-MID-P03-b-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf"
source_page: 7
question_number: "3(b)(ii)"
year: 2023
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "The two fixed inputs encode each function as one ordered pair of naturals, establishing both enumerability and infinitude."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
solution_page: [7]
verification_status: "verified"
marks: 1
related_questions: ["[[Q-2023F-MID-P03-b-iii - Countability]]"]
---
# Q-2023F-MID-P03-b-ii

## Source

[[2023 Fall Midterm]]; printed item 3(b)(ii); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=7]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=7]]

The complete printed key for 3(b) is `C, C, U`, visually rechecked at scale-to3200 on PDF page 7. The ii classification C is an official answer. The complete proof below independently verifies that conclusion.

## Question

Without the need for providing any explanation, determine if the following sets are infinitely countable (C) or infinitely uncountable (U):

(ii) The set of all functions from $\{1,2\}\to\mathbb N$

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=7|physical PDF page 7]].

> (b) C, C, U

## Supplementary Explanation

**Answer.** C: infinitely countable.

**Derivation/proof.** The map $f\mapsto(f(1),f(2))$ is a bijection from the function set to $\mathbb N^2$: every ordered pair defines exactly one function on the two-element domain. Listing pairs along finite diagonals of increasing coordinate sum enumerates all functions. There are infinitely many choices for $f(1)$ even when $f(2)$ is fixed, so the set is infinite as well as countable.

The second entry of the printed key agrees with the official classification for this atomic item: it is infinitely countable. Thus the set is infinitely countable.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]

- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

The two fixed inputs encode each function as one ordered pair of naturals, establishing both enumerability and infinitude.

- [[Q-2023F-MID-P03-b-iii - Countability]]: Contrast: reversing the finite and infinite domain/codomain turns pair enumeration into diagonal uncountability. 交换定义域和值域后，有限有序对变成无限序列。
