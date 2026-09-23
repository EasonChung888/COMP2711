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

## 中文解析

每位教师后面有医生等价于教师医生子序列的最后一人是医生。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\binom{22}{12}\,12!\,6\,9!$。

**推导。** 仍先选十二个工程师学生的位置并排列，贡献 $\binom{22}{12}12!$。观察剩下十名教师医生的相对顺序：如果最后一位是教师，他后面没有医生，违例；如果最后一位是医生，所有教师都在他之前，条件满足。因此最后一位从六名医生中选，有六种，余下九人任意排列有 $9!$ 种。总数 $\binom{22}{12}12!\cdot6\cdot9!$。这里医生可以散布在教师之间。

## Common Mistakes

- “后面”并非“紧挨着后面”，不能强制每位教师配一个相邻医生。
- 并不要求所有医生都在所有教师之后，只有最后一个教师不能超过最后一个医生。

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]

Require only the last member of the teacher-doctor subsequence to be a doctor.
