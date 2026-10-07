---
id: "Q-2024F-MID-P04-b-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 8
question_number: "4(b)(ii)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Use forced middle-row columns and the fixed top-row fifth-column C choice in the diagonal-strip diagram."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [9]
marks: 3
related_questions: ["[[Q-2024F-MID-P04-b-i - Counting Principles]]"]
---
# Q-2024F-MID-P04-b-ii

## Source

[[2024 Fall Midterm]]; printed item 4(b)(ii); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=8]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=9]]

## Question

(ii) You want to pass from C. Briefly explain why. Simply counting all possible ways will not give you full credits.

Shared printed context: ![[STEM-2024F-MID-P04-b - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=9|physical PDF page 9]].

> (ii) We can simply see that for the fifth column we have to move up. So the total possible ways is $2^2$.

## Supplementary Explanation

**Answer.** $2^2=4$.

**Derivation/proof.** The source places $C$ on the top row of the fifth column. As before, columns two, four, six and eight are middle-row positions, and columns three, five and seven select the branches. Passing through $C$ forces the fifth-column choice upward. Columns three and seven remain independent upper-or-lower choices. Each pair gives one path through $C$, so $2\cdot1\cdot2=4$.

## Connections

- [[Subtopic - Basic Counting - 基本计数]]

- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]

Use forced middle-row columns and the fixed top-row fifth-column C choice in the diagonal-strip diagram.

- [[Q-2024F-MID-P04-b-i - Counting Principles]]: 经过 C 恰好固定三个独立上下分支中的中间分支，因此路径数量由八减为四。
