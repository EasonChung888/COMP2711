---
id: "Q-2023F-MID-P03-b-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf"
source_page: 7
question_number: "3(b)(iii)"
year: 2023
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 3
difficulty_basis: "An infinite domain permits a diagonal output flip that escapes any purported sequence of two-valued functions."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
solution_page: [7]
verification_status: "verified"
marks: 1
related_questions: ["[[Q-2023F-MID-P03-b-ii - Countability]]"]
---
# Q-2023F-MID-P03-b-iii

## Source

[[2023 Fall Midterm]]; printed item 3(b)(iii); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=7]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=7]]

The complete printed key for 3(b) is `C, C, U`, visually rechecked at scale-to3200 on PDF page 7. The iii classification U is an official answer. The complete proof below independently verifies that conclusion.

## Question

Without the need for providing any explanation, determine if the following sets are infinitely countable (C) or infinitely uncountable (U):

(iii) The set of all functions from $\mathbb N\to\{1,2\}$

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=7|physical PDF page 7]].

> (b) C, C, U

## Supplementary Explanation

**Answer.** U: infinitely uncountable.

**Derivation/proof.** Suppose these functions had a complete list $f_1,f_2,\ldots$. Define $g(n)=3-f_n(n)$, with a harmless reindexing if naturals start at 0. Because $f_n(n)$ is either 1 or 2, g also maps into $\{1,2\}$. However, $g(n)\ne f_n(n)$ for every n, so g differs from each listed function. This contradicts completeness of the list and proves uncountability.

This agrees with the official classification, the third entry U. It contradicts a complete enumeration.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]

- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

An infinite domain permits a diagonal output flip that escapes any purported sequence of two-valued functions.

- [[Q-2023F-MID-P03-b-ii - Countability]]: Contrast: reversing the finite and infinite domain/codomain turns pair enumeration into diagonal uncountability. 交换定义域和值域后，有限有序对变成无限序列。
