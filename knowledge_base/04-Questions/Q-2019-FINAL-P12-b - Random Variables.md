---
id: "Q-2019-FINAL-P12-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 15
solution_page: [15]
question_number: "12(b)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]","[[Subtopic - Introduction to Probability - 概率基础]]"]
concepts: ["[[Random Variables - 随机变量]]","[[Probability Events - 概率事件]]"]
methods: ["[[Random-Variable Method - 随机变量方法]]","[[Probability Calculation Method - 概率计算方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "An hour contributes 3600 visit indicators, each of mean p."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-FINAL-P12-b

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=15]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=15]]

## Question

(b) How many visits is the server expected to get during 1 hour?

Shared context: [[STEM-2019-FINAL-P12 - Shared Problem Prompt]].

## 中文解析

一小时先换成三千六百个一秒区间。每秒最多一次访问，对应期望 p 的指示变量，把三千六百项相加即可得到平均访问数；这与等待一百次所需时间是不同随机变量。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 15. The Chinese derivation expands the reasoning.

**Answer.** $3600p$.

**Derivation/proof.** There are $60\cdot60=3600$ one-second intervals in an hour. Let $I_t$ indicate a visit in second t. The total is $N=\sum_{t=1}^{3600}I_t$, with $E(I_t)=p$. Thus $E(N)=\sum p=3600p$ by linearity. Independence is not needed for this mean calculation.

### 中文解答

**推导。** 一小时有 $60\cdot60=3600$ 个一秒区间。设 $I_t$ 表示第 $t$ 秒是否有访问，则 $I_t\in\{0,1\}$ 且每个 $E(I_t)=p$。总访问数 $N=\sum_{t=1}^{3600}I_t$，由期望线性性 $E(N)=\sum_{t=1}^{3600}E(I_t)=3600p$。此计算不要求不同秒独立；即使所有秒共同取同一个伯努利变量，期望仍为 $3600p$。印本解答多说了“independent”，但这一均值结论不靠该未印前提。

## Common Mistakes

- 把一小时只算作六十个试验。
- 把期望访问数写成等待时间的倒数形式。

## Connections

- [[Subtopic - Random Variables - 随机变量]]
- [[Subtopic - Introduction to Probability - 概率基础]]
- [[Random Variables - 随机变量]]
- [[Probability Events - 概率事件]]
- [[Random-Variable Method - 随机变量方法]]
- [[Probability Calculation Method - 概率计算方法]]
