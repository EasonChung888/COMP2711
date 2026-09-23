---
id: "Q-2025F-MID-P10-a-ii-var"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 21
question_number: "10(a)(ii)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]"]
concepts: ["[[Random Variables - 随机变量]]"]
methods: ["[[Random-Variable Method - 随机变量方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Square all coefficients and use zero covariances from explicitly independent rolls."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [22]
related_questions: ["[[Q-2025F-MID-P10-a-ii-E - Random Variables]]"]
---
# Q-2025F-MID-P10-a-ii-var

## Source

[[2025 Fall Midterm]]; printed item 10(a)(ii); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=21]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=22]]

Printed answer (iii) explicitly computes Y and var(Y)=17.5; answer (ii) belongs to an unasked X=X1−X2. This atom is the variance half of printed 10(a)(ii); no mark apportionment. Atomic extraction: the original combined request is “What are $E(Y)$ and $var(Y)$?”; this note isolates variance. The plural “are” and printed label are retained rather than silently rewritten.

## Question

![[STEM-2025F-MID-P10-a-ii - Shared Problem Prompt#Shared printed wording]]

What are $var(Y)$?

## 中文解析

独立骰子方差相加，但系数负二要平方成为四。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 本原子项求 $var(Y)=35/2$。

**推导。** 各骰子的方差均为 $35/12$。题干明确三次投掷独立，所以协方差项为零。对 $Y=X_1-2X_2+X_3$ 有 $var(Y)=1^2var(X_1)+(-2)^2var(X_2)+1^2var(X_3)=(1+4+1)35/12=210/12=35/2$。结果为十七点五，而不是原答案另一个变量 $X_1-X_2$ 的 $35/6$；必须按题设变量配对答案。

## Common Mistakes

- 负系数不会产生负方差，系数必须先平方。
- 答案页额外的两骰子差值不是本题 Y，不能按答案编号机械配对。

## Connections

- [[Topic - Probability - 概率]]
- [[Subtopic - Random Variables - 随机变量]]
- [[Random Variables - 随机变量]]
- [[Random-Variable Method - 随机变量方法]]

Square all coefficients and use zero covariances from explicitly independent rolls.

- Prerequisite / related: [[Q-2025F-MID-P10-a-ii-E - Random Variables]]: 同一随机变量的均值与方差对照：方差平方系数并需要控制协方差，均值则按原系数线性组合；本题各自重新计算所需数值。
