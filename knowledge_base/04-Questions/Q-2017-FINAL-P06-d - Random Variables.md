---
id: "Q-2017-FINAL-P06-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 10
solution_page: [10]
question_number: "6(d)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]","[[Subtopic - Introduction to Probability - 概率基础]]"]
concepts: ["[[Random Variables - 随机变量]]","[[Probability Events - 概率事件]]"]
methods: ["[[Random-Variable Method - 随机变量方法]]","[[Probability Calculation Method - 概率计算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Variance addition is valid because disjoint rows give independent indicators with Bernoulli variance q(1-q)."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2017-FINAL-P06-d

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=10]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=10]]

## Question

(d) Calculate $V(X)$.

Shared context: [[STEM-2017-FINAL-P06 - Shared Problem Prompt]].

## 中文解析

方差相加与期望相加不同，需要检查协方差。这里各行用到互不相交的独立硬币，所以行指示变量相互独立，协方差为零；每一行的方差是一百二十八分之一乘其失败概率。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 10. The Chinese derivation expands the reasoning.

**Answer.** $V(X)=8\frac1{128}\frac{127}{128}=\frac{127}{2048}$.

**Derivation/proof.** For row indicator $I_i$, $I_i^2=I_i$, so $V(I_i)=E(I_i)-E(I_i)^2=q(1-q)$ with $q=1/128$. Disjoint row coin sets are independent, making all cross covariances zero. Therefore $V(X)=\sum_{i=1}^8V(I_i)=8q(1-q)=127/2048$.

### 中文解答

**推导。** 每个行指标 $I_i$ 服从参数 $q=1/128$ 的伯努利分布，且 $I_i^2=I_i$，故 $V(I_i)=q-q^2=q(1-q)$。不相交行使用独立的硬币，故所有 $\operatorname{Cov}(I_i,I_j)=0$（$i\ne j$）。因此 $V(X)=\sum_{i=1}^8V(I_i)=8\cdot\frac1{128}\cdot\frac{127}{128}=\frac{127}{2048}$；若没有独立性，方差不能这样直接相加。

## Common Mistakes

- 直接把方差写成期望。
- 不检查独立性就套方差可加。

## Connections

- [[Subtopic - Random Variables - 随机变量]]
- [[Subtopic - Introduction to Probability - 概率基础]]
- [[Random Variables - 随机变量]]
- [[Probability Events - 概率事件]]
- [[Random-Variable Method - 随机变量方法]]
- [[Probability Calculation Method - 概率计算方法]]
