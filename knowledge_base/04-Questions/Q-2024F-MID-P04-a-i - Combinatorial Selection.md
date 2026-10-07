---
id: "Q-2024F-MID-P04-a-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 8
question_number: "4(a)(i)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Count grid paths for restriction 4(a)(i) with six right moves, four up moves and fixed edge C(5,1)→D(5,2)."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [8]
marks: 2
---
# Q-2024F-MID-P04-a-i

## Source

[[2024 Fall Midterm]]; printed item 4(a)(i); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=8]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=8]]

## Question

(i) There are no restrictions. No explanation is needed.
Hint: Any path from A to B is a combination of Up and Right moves for a total of 10.

Shared printed context: ![[STEM-2024F-MID-P04-a - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=8|physical PDF page 8]].

> Answer: (a) (i) $\binom{10}4$ Alternative explanation: We have to select with repetition 4 Up edges from the 7 columns: $\binom{7+4-1}4=\binom{10}4$.

## Supplementary Explanation

**Answer.** $\binom{10}4=210$.

**Derivation/proof.** The source grid is six columns wide and four rows high. Thus every path from $A$ to $B$ has six Right moves and four Up moves. Choose the four Up positions in a sequence of ten moves; the others are Right, giving $\binom{10}4=210$. Move sequences correspond to paths edge by edge, and distinct sequences differ in at least one edge.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]

Count grid paths for restriction 4(a)(i) with six right moves, four up moves and fixed edge C(5,1)→D(5,2).
