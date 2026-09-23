---
id: "Q-2023F-MID-P09-d-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf"
source_page: 19
question_number: "9(d)(i)"
year: 2023
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Probability - 概率]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Random Variables - 随机变量]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Probability Calculation Method - 概率计算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "A sum of an even number of ±1 moves has even parity and cannot equal the stopping position +1."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [20]
marks: 1
---
# Q-2023F-MID-P09-d-i

## Source

[[2023 Fall Midterm]]; printed item 9(d)(i); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=19]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=20]]

Source discrepancy: the printed sentence says values from ℕ, but it explicitly describes leftward negative moves and assigns probability 1/3 to −1. The PMF and all supplied calculations unambiguously use support {−1,1}; that explicit PMF is retained. Independence between different moves is not stated.

## Question

(i) When $k$ is a positive integer, calculate $P(T=2k)$.

Shared printed context: ![[STEM-2023F-MID-P09 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

是否独立并不影响这项 parity 结论。机器人每步的位置奇偶都会翻转，从零出发走偶数步后只能在偶数位置；首次到达的一必然是奇数位置，所以停止时间不可能为偶数。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 对每个正整数 $k$，$P(T=2k)=0$。

**推导。**

1. 每一步位移只能是 $+1$ 或 $-1$，而这两个数模二都同余于一。从零出发，走 $t$ 步后的总位移是 $t$ 个这样的数相加，所以位置模二等于 $t$ 模二。
2. 要到达正一，位置必须为奇数，因此任何到达时刻都必须为奇数，更不用说首次到达。偶数时刻 $2k$ 不可能首次到达一，事件 $\{T=2k\}$ 为空，其概率只能为零。
3. 这是对每条可能轨迹成立的 parity 事实，不使用不同步之间 independent，也不要求一定最终到达。即使有永不到达的轨迹，也不会为偶数停止时刻增加概率，因此此项不受相邻隔离题的联合分布缺失影响。

### English solution

**Answer.** $P(T=2k)=0$ for every positive integer $k$.

**Derivation/proof.** After t moves, the position is the sum of t numbers each equal to +1 or −1. Both possible increments are congruent to 1 modulo 2, so the position is congruent to t modulo 2. Reaching +1 therefore requires odd t. In particular, no trajectory can first reach +1 at time 2k, and the event is empty. Its probability is zero under any dependence structure of the successive moves.

## Common Mistakes

- 只因为左右概率不一样就认为偶数停止时间可能出现，是把概率与可行性混淆。 / An impossible parity event remains impossible.
- 无需使用其他小题的 Catalan 公式即可判断偶数情形。 / Parity alone proves zero.

## Connections

- [[Subtopic - Random Variables - 随机变量]]
- [[Subtopic - Basic Counting - 基本计数]]

- [[Random Variables - 随机变量]]
- [[Counting Principles - 计数原理]]
- [[Probability Calculation Method - 概率计算方法]]

A sum of an even number of ±1 moves has even parity and cannot equal the stopping position +1.
