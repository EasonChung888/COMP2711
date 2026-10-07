---
id: "Q-2025F-FINAL-P04-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 8
question_number: "4(a)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Separate unrestricted outsiders from a teacher-doctor subsequence with all teachers first."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [8]
marks: 3
---
# Q-2025F-FINAL-P04-a

## Source

[[2025 Fall Final]]; printed item 4(a); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=8]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=8]]

## Question

![[STEM-2025F-FINAL-P04 - Shared Problem Prompt#Shared printed wording]]

(a) [3 points] Every teacher stands in front of all doctors (i.e., the last teacher is before the first doctor in the queue).

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=8|physical PDF page 8]].

(a) $\binom{22}{12}\times12!\times6!\times4!$

## Supplementary Explanation

**Answer.** $\binom{22}{12}\,12!\,6!\,4!$.

**Derivation/proof.** The five engineers and seven students form 12 people with unrestricted relative positions. Choose their positions among 22 in $\binom{22}{12}$ ways and arrange them in $12!$ ways. The remaining ten positions belong to teachers and doctors. Their earliest four positions must all be teachers, and the final six must all be doctors. The teachers can be ordered in $4!$ ways and the doctors in $6!$ ways. Thus the total is $\binom{22}{12}12!4!6!$, without a summation.

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]

Separate unrestricted outsiders from a teacher-doctor subsequence with all teachers first.
