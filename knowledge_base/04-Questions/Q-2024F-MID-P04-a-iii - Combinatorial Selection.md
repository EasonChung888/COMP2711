---
id: "Q-2024F-MID-P04-a-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 8
question_number: "4(a)(iii)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Count grid paths for restriction 4(a)(iii) with six right moves, four up moves and fixed edge C(5,1)→D(5,2)."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [9]
marks: 2
related_questions: ["[[Q-2024F-MID-P04-a-ii - Combinatorial Selection]]"]
---
# Q-2024F-MID-P04-a-iii

## Source

[[2024 Fall Midterm]]; printed item 4(a)(iii); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=8]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=9]]

## Question

(iii) You can not pass from CD edge. No explanation is needed.

Shared printed context: ![[STEM-2024F-MID-P04-a - Shared Problem Prompt#Shared printed wording]]

## 中文解析

图中的所有路径由六次 Right、四次 Up 构成，数量 $\binom{10}4=210$。经过固定边 CD 的路径，先以五右一上到 C，再走 CD，最后以一右二上到 B，共 $\binom61\binom31=18$。本题的具体展开与结论如下。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\binom{10}4-\binom61\binom31=192$。

**推导。** 图中的所有路径由六次 Right、四次 Up 构成，数量 $\binom{10}4=210$。经过固定边 CD 的路径，先以五右一上到 C，再走 CD，最后以一右二上到 B，共 $\binom61\binom31=18$。经过与不经过该边是互斥且穷尽的两类，因此不经过的数量为 $210-18=192$。这里禁止的是边，不是所有到达 C 或 D 的路径。

## Common Mistakes

- 禁止的是边 CD，某条路径可以经过 C 但绕别处上行，仍可能合法。
- 应从全部二百一十条中减去十八条经过边的路径，不能把十八直接当答案。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]

Count grid paths for restriction 4(a)(iii) with six right moves, four up moves and fixed edge C(5,1)→D(5,2).

- [[Q-2024F-MID-P04-a-ii - Combinatorial Selection]]: 固定边 CD 的经过路径与避开路径构成全部单调路径的互补两类，可互相检验计数。
