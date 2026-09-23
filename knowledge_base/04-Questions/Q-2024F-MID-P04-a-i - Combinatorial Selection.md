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

## 中文解析

源图是六列宽、四行高的方格，故任何从 A 到 B 的单调路径都有六次 Right 和四次 Up。把路径编码成十个动作的序列，只需选出四个 Up 的位置，其余位置均为 Right，因此有 $\binom{10}4=210$ 条。本题的具体展开与结论如下。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\binom{10}4=210$。

**推导。** 源图是六列宽、四行高的方格，故任何从 A 到 B 的单调路径都有六次 Right 和四次 Up。把路径编码成十个动作的序列，只需选出四个 Up 的位置，其余位置均为 Right，因此有 $\binom{10}4=210$ 条。动作序列与路径逐边一一对应，不同序列必有至少一条不同边。

## Common Mistakes

- 六次 Right 与四次 Up 共十步，选择的是 Up 的四个位置。
- 格点列有七条竖线但只有六段宽度，不能把线数当步数。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]

Count grid paths for restriction 4(a)(i) with six right moves, four up moves and fixed edge C(5,1)→D(5,2).
