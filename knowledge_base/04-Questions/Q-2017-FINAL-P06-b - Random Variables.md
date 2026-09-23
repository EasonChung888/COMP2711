---
id: "Q-2017-FINAL-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 10
solution_page: [10]
question_number: "6(b)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]","[[Subtopic - Introduction to Probability - 概率基础]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Random Variables - 随机变量]]","[[Probability Events - 概率事件]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Random-Variable Method - 随机变量方法]]","[[Probability Calculation Method - 概率计算方法]]","[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "One homogeneous row is selected among eight independent Bernoulli row events of probability 1/128."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2017-FINAL-P06-b

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=10]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=10]]

## Question

(b) Calculate $p(X=1)$.

Shared context: [[STEM-2017-FINAL-P06 - Shared Problem Prompt]].

## 中文解析

一行同面有全正和全反两种情况，因此成功概率是一百二十八分之一。不同的行由不同硬币组成而相互独立。恰好一行成功时，要先选择是哪一行，再让其余七行失败。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 10. The Chinese derivation expands the reasoning.

**Answer.** $8(1/128)(127/128)^7$.

**Derivation/proof.** A given row is homogeneous in two of its $2^8$ equally likely configurations, so its probability is $q=2/2^8=1/128$. Distinct rows use disjoint independent coins. Choose which of the eight rows succeeds, multiply by $q$ for it and $(1-q)^7$ for the failures. The eight choices are disjoint, giving $8q(1-q)^7$.

### 中文解答

**推导。** 由题设独立公平掷币，一行全正面或全反面为互斥事件，故齐同行概率 $q=2(1/2)^8=1/128$。不同的行使用不相交的独立币集合，行指标相互独立。恰好一行成功有八种互斥位置，每种概率 $q(1-q)^7$，所以 $P(X=1)=8(1/128)(127/128)^7$。随机且不看结果的摆放不改变六十四个位置的独立公平分布。

## Common Mistakes

- 只算全正而漏掉全反。
- 没有乘选择成功行的八种方式。

## Connections

- [[Subtopic - Random Variables - 随机变量]]
- [[Subtopic - Introduction to Probability - 概率基础]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Random Variables - 随机变量]]
- [[Probability Events - 概率事件]]
- [[Combinatorial Selection - 组合选择]]
- [[Random-Variable Method - 随机变量方法]]
- [[Probability Calculation Method - 概率计算方法]]
- [[Combinatorial Case Analysis - 组合分类法]]
