---
id: "Q-2015-FINAL-P02-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Final]]"
source_pdf: "knowledge_base/past_paper/2015-final.pdf"
source_page: 5
solution_page: [5]
question_number: "2(c)"
year: 2015
term: "fall"
exam_type: "final"
marks: 2
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]"]
concepts: ["[[Random Variables - 随机变量]]"]
methods: ["[[Random-Variable Method - 随机变量方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Linearity adds the sixty one-minute sale indicators, each with expectation pq."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-FINAL-P02-c

## Source

![[knowledge_base/past_paper/2015-final.pdf#page=5]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-final.pdf#page=5]]

## Question

(c) What is the expectation $E(X)$ of $X$?

There is no need to justify your answers in this problem.

Shared context: [[STEM-2015-FINAL-P02 - Shared Problem Prompt]].

## 中文解析

将总销量写成六十个指示变量之和，每个变量在该分钟售出时为一。每个指示变量的期望就是售出概率 $pq$，利用线性性相加。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 5. The Chinese derivation expands the reasoning.

**Answer.** $E(X)=60pq$.

**Derivation/proof.** Let $I_t$ indicate a sale in minute $t$. Then $X=\sum_{t=1}^{60}I_t$ and $E(I_t)=P(I_t=1)=pq$. Linearity gives $E(X)=\sum_{t=1}^{60}pq=60pq$.

### 中文解答

**推导。** 令 $I_t$ 表示第 t 分钟是否售出一袋。顾客到达概率为 p，到达后购买的条件概率为 q，因此乘法公式给 $P(I_t=1)=pq$，不需把到达与购买误作独立事件。总销量 $X=\sum_{t=1}^{60}I_t$，每项期望 $E(I_t)=pq$。期望线性性给 $E(X)=\sum_{t=1}^{60}pq=60pq$，即使不同分钟相关也成立。源卷在其他问的独立试验模型不能作为未打印在题干中的额外假设；此结论本身不依赖它。

## Common Mistakes

- 把六十次成功概率相乘，用于期望而非全成功事件。
- 把顾客到达次数的期望 $60p$ 当成销量。

## Connections

- [[Subtopic - Random Variables - 随机变量]]
- [[Random Variables - 随机变量]]
- [[Random-Variable Method - 随机变量方法]]
