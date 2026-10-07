---
id: "Q-2024F-MID-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 11
question_number: "6(b)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Count six-digit strictly increasing strings with the specific leading-zero restriction."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [11]
marks: 3
related_questions: ["[[Q-2024F-MID-P06-a - Combinatorial Selection]]"]
---
# Q-2024F-MID-P06-b

## Source

[[2024 Fall Midterm]]; printed item 6(b); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=11]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=11]]

## Question

(b) Are strictly increasing (e.g., 136789). Briefly explain why.

Shared printed context: ![[STEM-2024F-MID-P06 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=11|physical PDF page 11]].

> (b) Similar to part (a), but we cant pick 0 because then it has to be the leftmost digit which is impossible. So the answer is $\binom96$.

## Supplementary Explanation

**Answer.** $\binom96=84$.

**Derivation/proof.** Strict increase requires six distinct digits in ascending order. If zero were selected, it would be the smallest digit and therefore the leading digit, which is forbidden. Thus choose six digits from one through nine, in $\binom96=84$ ways. Each chosen set has exactly one increasing arrangement and a nonzero first digit, so no factorial multiplier is needed.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]

Count six-digit strictly increasing strings with the specific leading-zero restriction.

- [[Q-2024F-MID-P06-a - Combinatorial Selection]]: 严格降序允许零位于尾端；严格升序若选零会出现前导零，所以候选数字分别为十种与九种。
