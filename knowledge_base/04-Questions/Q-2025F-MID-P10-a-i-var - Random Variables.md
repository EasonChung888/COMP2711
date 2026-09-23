---
id: "Q-2025F-MID-P10-a-i-var"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 21
question_number: "10(a)(i)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]"]
concepts: ["[[Random Variables - 随机变量]]"]
methods: ["[[Random-Variable Method - 随机变量方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Compute the second moment of a fair die and subtract the square of its mean."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [22]
related_questions: ["[[Q-2025F-MID-P10-a-i-E - Random Variables]]"]
---
# Q-2025F-MID-P10-a-i-var

## Source

[[2025 Fall Midterm]]; printed item 10(a)(i); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=21]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=22]]

Editorial atomic split: variance only; the shared 2 points are not apportioned. Atomic extraction: the original combined request is “What are $E(X_1)$ and $var(X_1)$?”; this note isolates variance. The plural “are” and printed label are retained rather than silently rewritten.

## Question

![[STEM-2025F-MID-P10-a - Shared Problem Prompt#Shared printed wording]]

(i) [2 points] What are $var(X_1)$?

## 中文解析

方差来自二阶矩减去均值平方，两个操作的先后不能颠倒。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 本原子项求 $var(X_1)=35/12$。

**推导。** 公平骰子的二阶矩为 $E(X_1^2)=(1^2+2^2+3^2+4^2+5^2+6^2)/6=91/6$，期望为 $E(X_1)=21/6=7/2$。于是 $var(X_1)=E(X_1^2)-[E(X_1)]^2=91/6-49/4=(182-147)/12=35/12$。结果严格正，符合六种不同点数的非退化分布；原答案的 $17.5/6$ 与此完全相同。

## Common Mistakes

- $E(X_1^2)$ 不等于 $[E(X_1)]^2$，二者之差正是方差。
- 原答案的十七点五除六不是十七点五，必须保留分母。

## Connections

- [[Topic - Probability - 概率]]
- [[Subtopic - Random Variables - 随机变量]]
- [[Random Variables - 随机变量]]
- [[Random-Variable Method - 随机变量方法]]

Compute the second moment of a fair die and subtract the square of its mean.

- Prerequisite / related: [[Q-2025F-MID-P10-a-i-E - Random Variables]]: 同一随机变量的均值与方差对照：方差平方系数并需要控制协方差，均值则按原系数线性组合；本题各自重新计算所需数值。
