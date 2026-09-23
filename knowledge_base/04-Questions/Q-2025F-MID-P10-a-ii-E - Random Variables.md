---
id: "Q-2025F-MID-P10-a-ii-E"
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
difficulty_basis: "Use linearity of expectation with coefficients one, negative two and one."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [22]
related_questions: ["[[Q-2025F-MID-P10-a-ii-var - Random Variables]]"]
---
# Q-2025F-MID-P10-a-ii-E

## Source

[[2025 Fall Midterm]]; printed item 10(a)(ii); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=21]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=22]]

The named Y answer is printed under answer label (iii) on page 22; an extraneous X=X1−X2 answer is labeled (ii). Match by the actual variable definition. Expectation/variance share 2 points; this atom has no allocated mark. Atomic extraction: the original combined request is “What are $E(Y)$ and $var(Y)$?”; this note isolates expectation. The plural “are” and printed label are retained rather than silently rewritten.

## Question

![[STEM-2025F-MID-P10-a-ii - Shared Problem Prompt#Shared printed wording]]

What are $E(Y)$?

## 中文解析

均值按系数直接相加，负二会抵消另外两项的平均值。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 本原子项求 $E(Y)=0$。

**推导。** 每个 $X_i$ 都是公平骰子点数，因此 $E(X_i)=7/2$。由 linearity of expectation，$E(Y)=E(X_1)-2E(X_2)+E(X_3)=7/2-2(7/2)+7/2=0$。系数和 $1-2+1=0$，解释了为何均值完全抵消。这个步骤即使变量相关也成立；本题给出的独立性留给方差计算使用。

## Common Mistakes

- 期望中的系数不平方，负二必须保持为负二。
- 均值为零不表示 $Y$ 恒等于零，三次点数仍会波动。

## Connections

- [[Topic - Probability - 概率]]
- [[Subtopic - Random Variables - 随机变量]]
- [[Random Variables - 随机变量]]
- [[Random-Variable Method - 随机变量方法]]

Use linearity of expectation with coefficients one, negative two and one.

- Follow-on / contrast: [[Q-2025F-MID-P10-a-ii-var - Random Variables]]: 同一随机变量的均值与方差对照：方差平方系数并需要控制协方差，均值则按原系数线性组合；本题各自重新计算所需数值。
