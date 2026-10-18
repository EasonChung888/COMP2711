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

## Official Answer

Source: [[knowledge_base/past_paper/2017-final.pdf#page=10|physical PDF page 10]].

For any given row, the chance it is homogeneous is $(1/2)^8\cdot2=(1/2)^7$ (all heads or all tails). The chance that it is not homogeneous is $(1-(1/2)^7)$. Overall, seven rows must not be homogeneous and one row must be homogeneous, so $p(X=1)=8(1/2)^7(1-(1/2)^7)^7$.

## Supplementary Explanation

**Answer.** $8(1/128)(127/128)^7$.

**Derivation/proof.** A given row is homogeneous in two of its $2^8$ equally likely configurations, so its probability is $q=2/2^8=1/128$. Distinct rows use disjoint independent coins. Choose which of the eight rows succeeds, multiply by $q$ for it and $(1-q)^7$ for the failures. The eight choices are disjoint, giving $8q(1-q)^7$.

Randomly arranging the coins without observing their faces preserves the independent fair distribution at all sixty-four positions.

A row is homogeneous with probability $q=2(1/2)^8=1/128$, since either all eight coins are heads or all are tails. The independent eight rows then give $P(X=1)=8(1/128)(127/128)^7$ by selecting its unique homogeneous row.

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
