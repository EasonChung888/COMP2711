---
id: "Q-2024F-MID-P04-b-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 8
question_number: "4(b)(i)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Use forced middle-row columns and three binary branch choices in the diagonal-strip diagram."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [9]
marks: 3
related_questions: ["[[Q-2024F-MID-P04-b-ii - Counting Principles]]"]
---
# Q-2024F-MID-P04-b-i

## Source

[[2024 Fall Midterm]]; printed item 4(b)(i); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=8]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=9]]

## Question

(i) There are no restrictions. Briefly explain why. Simply counting all possible ways will not give you full credits.
Hint: Note that in order to get from A to B you have to pass from some certain points like X.

Shared printed context: ![[STEM-2024F-MID-P04-b - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=9|physical PDF page 9]].

> (b) (i) $2^3$. Note that the path has to pass from the middle point on even columns. So for columns with odd index (from 3) we have two options to either go up or down. Thus the answer is $2^3$.

## Supplementary Explanation

**Answer.** $2^3=8$.

**Derivation/proof.** Number the nine columns from left to right. Both $A$ and $B$ lie on the bottom row. Every move advances one column and changes height by one, so columns two, four, six and eight must lie on the middle row. The initial move from $A$ to $X$ and the last move down to $B$ are forced. Columns three, five and seven may each be upper or lower, followed by a forced return to the middle. These three choices are independent, so $2\cdot2\cdot2=8$. Every choice triple gives one legal path.

## Connections

- [[Subtopic - Basic Counting - 基本计数]]

- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]

Use forced middle-row columns and three binary branch choices in the diagonal-strip diagram.

- [[Q-2024F-MID-P04-b-ii - Counting Principles]]: 经过 C 恰好固定三个独立上下分支中的中间分支，因此路径数量由八减为四。
