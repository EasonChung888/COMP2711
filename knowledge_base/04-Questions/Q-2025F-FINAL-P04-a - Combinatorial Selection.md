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

## 中文解析

删去工程师和学生后，教师医生子序列必须四名教师在前、六名医生在后。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\binom{22}{12}\,12!\,6!\,4!$。

**推导。** 五名工程师加七名学生是十二个不受相对先后限制的人。先选他们在二十二位中的位置，有 $\binom{22}{12}$ 种，并以 $12!$ 种次序放置。剩下十个位置由教师与医生占据，条件迫使其中最前四位全是教师，最后六位全是医生。教师内部可排 $4!$ 种，医生内部可排 $6!$ 种。因此总数 $\binom{22}{12}12!4!6!$，没有使用求和。

## Common Mistakes

- 教师和医生之间允许夹着其他职业的人，不要求他们各自在原队列中连续。
- 只确定职业次序不够，所有人都不同，仍须计组内阶乘。

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]

Separate unrestricted outsiders from a teacher-doctor subsequence with all teachers first.
