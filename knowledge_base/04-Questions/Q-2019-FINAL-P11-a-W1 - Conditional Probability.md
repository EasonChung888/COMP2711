---
id: "Q-2019-FINAL-P11-a-W1"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 13
solution_page: [13,14]
question_number: "11(a)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Conditional Probability - 条件概率]]"]
concepts: ["[[Conditional Probability - 条件概率]]"]
methods: ["[[Conditional-Probability Method - 条件概率方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Opening door two has likelihood one half under W1, giving joint mass one quarter out of total 0.45."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2019-FINAL-P11-a-W1

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=13]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=13]] ![[knowledge_base/past_paper/2019-final.pdf#page=14]]

## Question

(a) Suppose $M=2$, i.e., Monty opens door 2. What is $p(W=1\mid M=2)$

Shared context: [[STEM-2019-FINAL-P11 - Shared Problem Prompt]].

## 中文解析

开二号门时有两种可能来源：奖品在一号门且主持人随机开二号，或奖品在三号而必须开二号。分母把两种来源加起来，分子只保留第一种，因此一号门后验升为九分之五。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 13, 14. The Chinese derivation expands the reasoning.

**Answer.** $5/9$.

**Derivation/proof.** Monty opens door 2 with probability $1/2$ if $W=1$, zero if $W=2$, and one if $W=3$. Therefore $P(M=2)=0.5(1/2)+0.3(0)+0.2(1)=0.45$. The joint mass for $W=1,M=2$ is $0.25$. Bayes gives $0.25/0.45=5/9$.

### 中文解答

**推导。** 先选门一时，若奖在门一，主持人在门二和门三间等概率选择，所以 $P(M=2\mid W=1)=1/2$；奖在门二时该条件概率为零，奖在门三时为一。全概率给 $P(M=2)=0.5(1/2)+0.3(0)+0.2(1)=0.45$。所求联合质量为 $P(W=1,M=2)=0.25$，贝叶斯公式得到 $P(W=1\mid M=2)=0.25/0.45=5/9$。

## Common Mistakes

- 仍使用一号门先验二分之一。
- 忽略主持人在初选正确时随机开门的二分之一。

## Connections

- [[Subtopic - Conditional Probability - 条件概率]]
- [[Conditional Probability - 条件概率]]
- [[Conditional-Probability Method - 条件概率方法]]
