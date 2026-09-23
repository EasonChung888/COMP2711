---
id: "Q-2024F-MID-P04-a-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 8
question_number: "4(a)(ii)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Count grid paths for restriction 4(a)(ii) with six right moves, four up moves and fixed edge C(5,1)→D(5,2)."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [9]
marks: 2
related_questions: ["[[Q-2024F-MID-P04-a-iii - Combinatorial Selection]]"]
---
# Q-2024F-MID-P04-a-ii

## Source

[[2024 Fall Midterm]]; printed item 4(a)(ii); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=8]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=9]]

## Question

(ii) You have to pass from CD edge. No explanation is needed.

Shared printed context: ![[STEM-2024F-MID-P04-a - Shared Problem Prompt#Shared printed wording]]

## 中文解析

以 A 为 $(0,0)$，图中 C 为 $(5,1)$，D 为 $(5,2)$，B 为 $(6,4)$。经过 CD 的路径唯一分为 A 到 C、固定向上边 CD、D 到 B 三段。本题的具体展开与结论如下。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\binom61\binom31=18$。

**推导。** 以 A 为 $(0,0)$，图中 C 为 $(5,1)$，D 为 $(5,2)$，B 为 $(6,4)$。经过 CD 的路径唯一分为 A 到 C、固定向上边 CD、D 到 B 三段。第一段五右一上有 $\binom61=6$ 条，末段一右二上有 $\binom31=3$ 条，固定边仅一种。乘法原理给出 $6\cdot1\cdot3=18$。

## Common Mistakes

- C 到 D 是固定的一条向上边，分段时先到 C、离开 D 才能保证经过该边。
- A 到 C 需五右一上；D 到 B 需一右二上，不能交换 C 与 D。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]

Count grid paths for restriction 4(a)(ii) with six right moves, four up moves and fixed edge C(5,1)→D(5,2).

- [[Q-2024F-MID-P04-a-iii - Combinatorial Selection]]: 固定边 CD 的经过路径与避开路径构成全部单调路径的互补两类，可互相检验计数。
