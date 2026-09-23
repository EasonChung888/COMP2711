---
id: "Q-2025F-MID-P10-a-i-E"
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
difficulty: 1
difficulty_basis: "Average the six equally likely outcomes of a fair die."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [22]
related_questions: ["[[Q-2025F-MID-P10-a-i-var - Random Variables]]"]
---
# Q-2025F-MID-P10-a-i-E

## Source

[[2025 Fall Midterm]]; printed item 10(a)(i); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=21]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=22]]

Editorial atomic split: expectation only. The printed 2 points cover expectation and variance together; no separate mark is assigned. Atomic extraction: the original combined request is “What are $E(X_1)$ and $var(X_1)$?”; this note isolates expectation. The plural “are” and printed label are retained rather than silently rewritten.

## Question

![[STEM-2025F-MID-P10-a - Shared Problem Prompt#Shared printed wording]]

(i) [2 points] What are $E(X_1)$?

## 中文解析

此项把同一句中可独立求出的期望与方差分开；这里先求期望。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 本原子项求 $E(X_1)=7/2$。

**推导。** 由公平骰子的定义，$X_1$ 的每个取值 $j=1,\ldots,6$ 的概率都是 $1/6$。按离散期望定义，$E(X_1)=\sum_{j=1}^6j/6=(1+2+3+4+5+6)/6=21/6=7/2$。也可以配对一与六、二与五、三与四，每对和七，因此平均数为三点五。一个骰子的均值不需要用到不同投掷之间的独立性。

## Common Mistakes

- 期望可以不是实际可能掷出的整数，三点五并不表示骰子有这个面。
- 六个面概率都为六分之一，不能再用一百次投掷总数作分母。

## Connections

- [[Topic - Probability - 概率]]
- [[Subtopic - Random Variables - 随机变量]]
- [[Random Variables - 随机变量]]
- [[Random-Variable Method - 随机变量方法]]

Average the six equally likely outcomes of a fair die.

- Follow-on / contrast: [[Q-2025F-MID-P10-a-i-var - Random Variables]]: 同一随机变量的均值与方差对照：方差平方系数并需要控制协方差，均值则按原系数线性组合；本题各自重新计算所需数值。
