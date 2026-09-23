---
id: "Q-2025F-MID-P10-a-iii-E"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 21
question_number: "10(a)(iii)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]"]
concepts: ["[[Random Variables - 随机变量]]"]
methods: ["[[Random-Variable Method - 随机变量方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Cancel fifty positive and fifty negative means in an alternating sum."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [22]
related_questions: ["[[Q-2025F-MID-P10-a-iii-var - Random Variables]]"]
---
# Q-2025F-MID-P10-a-iii-E

## Source

[[2025 Fall Midterm]]; printed item 10(a)(iii); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=21]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=22]]

The named Z calculation appears under answer label (iv), although the question is (iii). This split keeps the printed 2 points unallocated. Atomic extraction: the original combined request is “What are $E(Z)$ and $var(Z)$?”; this note isolates expectation. The plural “are” and printed label are retained rather than silently rewritten.

## Question

![[STEM-2025F-MID-P10-a-iii - Shared Problem Prompt#Shared printed wording]]

What are $E(Z)$?

## 中文解析

把一百项按正负各五十项分组，均值彼此抵消。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 本原子项求 $E(Z)=0$。

**推导。** 线性性给出 $E(Z)=E(X_1)-E(X_2)+\cdots+E(X_{99})-E(X_{100})$。每次公平骰子期望都是 $7/2$，奇数下标有五十个、偶数下标也有五十个，故 $E(Z)=50(7/2)-50(7/2)=0$。这也等于五十个相邻差 $E(X_{2j-1}-X_{2j})$ 的和，每个差的均值为零。

## Common Mistakes

- 最后一项是一百项且为负，正负项数相等，不能错数为五十一与四十九。
- 一百次投掷的期望不是一百再除六，应先求每次均值再线性组合。

## Connections

- [[Topic - Probability - 概率]]
- [[Subtopic - Random Variables - 随机变量]]
- [[Random Variables - 随机变量]]
- [[Random-Variable Method - 随机变量方法]]

Cancel fifty positive and fifty negative means in an alternating sum.

- Follow-on / contrast: [[Q-2025F-MID-P10-a-iii-var - Random Variables]]: 同一随机变量的均值与方差对照：方差平方系数并需要控制协方差，均值则按原系数线性组合；本题各自重新计算所需数值。
