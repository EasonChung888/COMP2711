---
id: "Q-2018-FINAL-P08-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 11
solution_page: [11]
question_number: "8(a)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]","[[Subtopic - Introduction to Probability - 概率基础]]"]
concepts: ["[[Random Variables - 随机变量]]","[[Probability Events - 概率事件]]"]
methods: ["[[Random-Variable Method - 随机变量方法]]","[[Probability Calculation Method - 概率计算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Summing ball indicators gives m contributions of one over n without needing independence for expectation."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P08-a

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=11]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=11]]

## Question

a) What is $E(X)$? Show the steps of your calculations.

Shared context: [[STEM-2018-FINAL-P08 - Shared Problem Prompt]].

## 中文解析

把第一盒中的球数写成每颗球是否进入第一盒的指示变量之和。每颗球贡献的期望都是一除以 n，把 m 项相加得到 m 除以 n；这个期望计算本身并不需要独立性。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 11. The Chinese derivation expands the reasoning.

**Answer.** $E(X)=m/n$.

**Derivation/proof.** Let $I_i$ be one if ball $i$ lands in box 1 and zero otherwise. Then $X=\sum_{i=1}^mI_i$ and $E(I_i)=P(I_i=1)=1/n$. Linearity gives $E(X)=\sum_{i=1}^m1/n=m/n$. Equal marginals alone suffice for this particular expectation.

### 中文解答

**推导。** 令 $I_i$ 表示第 $i$ 个球落入第一盒，落入时为一，否则零。题设每个球的边缘概率都是 $1/n$，所以 $E(I_i)=1/n$，且 $X=\sum_{i=1}^m I_i$。期望线性性直接给 $E(X)=\sum_{i=1}^mE(I_i)=m/n$。这个步骤不需球之间独立，因此即使所有球共用一个随机盒子，期望仍相同；不把没有印在题干的二项分布假设加进证明。

## Common Mistakes

- 把盒子数 n 当作试验次数。
- 认为第一盒的期望球数必须为整数。

## Connections

- [[Subtopic - Random Variables - 随机变量]]
- [[Subtopic - Introduction to Probability - 概率基础]]
- [[Random Variables - 随机变量]]
- [[Probability Events - 概率事件]]
- [[Random-Variable Method - 随机变量方法]]
- [[Probability Calculation Method - 概率计算方法]]
