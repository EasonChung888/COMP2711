---
id: "Q-2025F-MID-P10-a-iii-var"
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
difficulty_basis: "Add one hundred equal variances because every alternating coefficient has square one."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [22]
related_questions: ["[[Q-2025F-MID-P10-a-iii-E - Random Variables]]"]
---
# Q-2025F-MID-P10-a-iii-var

## Source

[[2025 Fall Midterm]]; printed item 10(a)(iii); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=21]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=22]]

The actual Z variance is printed under answer (iv) on page 22. No separate mark is given for variance within question (iii). Atomic extraction: the original combined request is “What are $E(Z)$ and $var(Z)$?”; this note isolates variance. The plural “are” and printed label are retained rather than silently rewritten.

## Question

![[STEM-2025F-MID-P10-a-iii - Shared Problem Prompt#Shared printed wording]]

What are $var(Z)$?

## 中文解析

均值抵消不代表方差抵消；独立和的每个系数平方均为一。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 本原子项求 $var(Z)=875/3$。

**推导。** 一百个骰子变量相互独立，每个方差 $35/12$。在 $Z$ 中各系数为 $+1$ 或 $-1$，平方后都为一，交叉协方差又全部为零，故 $var(Z)=100\cdot35/12=3500/12=875/3$。原答案写 $1750/6$，约分同样得到 $875/3$。虽然 $E(Z)=0$，其方差仍随一百项的波动累加而明显为正。

## Common Mistakes

- 不能把方差像均值一样按正负号相减，负号在平方后消失。
- 一百项共有一百个方差贡献，而不是只算五十个正号项。

## Connections

- [[Topic - Probability - 概率]]
- [[Subtopic - Random Variables - 随机变量]]
- [[Random Variables - 随机变量]]
- [[Random-Variable Method - 随机变量方法]]

Add one hundred equal variances because every alternating coefficient has square one.

- Prerequisite / related: [[Q-2025F-MID-P10-a-iii-E - Random Variables]]: 同一随机变量的均值与方差对照：方差平方系数并需要控制协方差，均值则按原系数线性组合；本题各自重新计算所需数值。
