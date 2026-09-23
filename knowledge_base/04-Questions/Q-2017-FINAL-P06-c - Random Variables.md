---
id: "Q-2017-FINAL-P06-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 10
solution_page: [10]
question_number: "6(c)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]","[[Subtopic - Introduction to Probability - 概率基础]]"]
concepts: ["[[Random Variables - 随机变量]]","[[Probability Events - 概率事件]]"]
methods: ["[[Random-Variable Method - 随机变量方法]]","[[Probability Calculation Method - 概率计算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Linearity adds eight row indicators whose success probability includes both heads and tails."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2017-FINAL-P06-c

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=10]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=10]]

## Question

(c) Calculate $E(X)$.

Shared context: [[STEM-2017-FINAL-P06 - Shared Problem Prompt]].

## 中文解析

把 X 写成八个行指示变量之和，每个指示变量的期望等于该行同面的概率。线性期望直接把八个相同概率相加，不需要求出 X 的全部分布，也不需要用独立性来支持期望相加。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 10. The Chinese derivation expands the reasoning.

**Answer.** $E(X)=8/128=1/16$.

**Derivation/proof.** Let $I_i$ indicate that row $i$ is homogeneous. Then $X=\sum_{i=1}^8I_i$ and $E(I_i)=P(I_i=1)=2(1/2)^8=1/128$. By linearity, $E(X)=\sum E(I_i)=8/128=1/16$. Independence is not needed for this expectation step.

### 中文解答

**推导。** 令 $I_i$ 为第 $i$ 行齐同的指标，有 $X=I_1+\cdots+I_8$。一行八枚独立公平币全正或全反的概率为 $2(1/2)^8=1/128$，因此 $E(I_i)=1/128$。期望线性性给 $E(X)=\sum_{i=1}^8E(I_i)=8/128=1/16$。线性相加本身无需行之间独立，但计算行内全同概率用到了已打印的独立性。

## Common Mistakes

- 把指示变量成功概率误作二分之一。
- 认为期望相加必须独立。

## Connections

- [[Subtopic - Random Variables - 随机变量]]
- [[Subtopic - Introduction to Probability - 概率基础]]
- [[Random Variables - 随机变量]]
- [[Probability Events - 概率事件]]
- [[Random-Variable Method - 随机变量方法]]
- [[Probability Calculation Method - 概率计算方法]]
