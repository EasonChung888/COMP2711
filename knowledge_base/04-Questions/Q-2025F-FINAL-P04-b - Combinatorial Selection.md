---
id: "Q-2025F-FINAL-P04-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 8
question_number: "4(b)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Require only the last member of the teacher-doctor subsequence to be a doctor."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [8]
marks: 3
---
# Q-2025F-FINAL-P04-b

## Source

[[2025 Fall Final]]; printed item 4(b); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=8]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=8]]

## Question

![[STEM-2025F-FINAL-P04 - Shared Problem Prompt#Shared printed wording]]

(b) [3 points] Every teacher has at least one doctor behind (i.e., no teacher is after the last doctor). Note that behind does not necessarily mean the previous person.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=8|physical PDF page 8]].

(b) $\binom{22}{12}\times12!\times6\times9!$

## Supplementary Explanation

**Answer.** $\binom{22}{12}\,12!\,6\,9!$.

**Derivation/proof.** Choose positions for the 12 engineers and students, and arrange them, contributing $\binom{22}{12}12!$. Consider the relative order of the remaining ten teachers and doctors. If the last one is a teacher, that teacher has no doctor behind. If the last one is a doctor, every teacher has that doctor behind. Choose the last person from the six doctors; the remaining nine people can be arranged arbitrarily in $9!$ ways. The result is $\binom{22}{12}12!\cdot6\cdot9!$. Doctors may also appear between teachers.

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]

Require only the last member of the teacher-doctor subsequence to be a doctor.
