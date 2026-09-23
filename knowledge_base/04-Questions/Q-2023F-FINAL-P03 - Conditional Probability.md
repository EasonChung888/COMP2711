---
id: "Q-2023F-FINAL-P03"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Final.pdf"
source_page: 6
question_number: "3"
year: 2023
term: "fall"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Conditional Probability - 条件概率]]"]
concepts: ["[[Conditional Probability - 条件概率]]"]
methods: ["[[Conditional-Probability Method - 条件概率方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Compute the posterior of being disease-free conditional on a negative test, keeping the tiny false-negative rate distinct from false positives."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
marks: 7
---
# Q-2023F-FINAL-P03

## Source

[[2023 Fall Final]]; printed item 3; 7 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=6]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=6]]

Source correction: PDF page 6 prints 0.02% in the question, equal to 0.0002, but writes 0.00002 twice in the intermediate official calculation. Its final symbolic Bayes quotient and target event are correct. The note keeps official provenance for that structure and independently evaluates the stated rates as 49985001/49985006.

## Question

Suppose that one person in 10,000 people has a rare genetic disease. There is an excellent test for the disease; 99.9% of people with the disease test positive and only 0.02% who do not have the disease test positive. What is the probability that someone who tests negative does not have the disease? You have to show all the steps. But you do not have to calculate the final numerical values in each step.

## 中文解析

条件是 test negative，因此要把题中两类 positive 概率分别取补。无病且阴性的联合概率放在分子，分母则加上有病但漏检的情况；患病率万分之一不能忽略，也不能把百分之零点零二写成零点零二。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\displaystyle P(D^c\mid N)=\frac{49\,985\,001}{49\,985\,006}$。

**推导。**

1. 令 $D$ 表示患病，$N$ 表示检测阴性。先把百分数及补事件转换正确：$P(D)=0.0001$，$P(N\mid D)=1-0.999=0.001$，$P(N\mid D^c)=1-0.0002=0.9998$，且 $P(D^c)=0.9999$。
2. 阴性且健康的联合概率是 $0.9999\cdot0.9998=0.99970002$；阴性且患病则是 $0.0001\cdot0.001=0.0000001$。两类互斥穷尽全部阴性，故 $P(N)=0.99970012$。
3. 条件概率为 $P(D^c\mid N)=0.99970002/0.99970012=49\,985\,001/49\,985\,006$。它非常接近但小于一，保留了假阴性的微小可能；不能直接把健康者测阴性的概率当成测阴性者健康的概率。

### English solution

**Answer.** $\displaystyle\frac{(1-1/10000)(1-0.0002)}{(1-1/10000)(1-0.0002)+(1/10000)(1-0.999)}=\frac{49\,985\,001}{49\,985\,006}$.

**Derivation/proof.** Let D mean disease and N mean a negative test. The given probabilities imply $P(D)=0.0001$, $P(N\mid D)=0.001$, and $P(N\mid D^c)=0.9998$. Thus $P(N\cap D^c)=0.9999\cdot0.9998=0.99970002$, while $P(N\cap D)=0.0001\cdot0.001=0.0000001$. Total probability gives $P(N)=0.99970012$. Bayes then yields $P(D^c\mid N)=0.99970002/0.99970012=49\,985\,001/49\,985\,006$, a value slightly below 1.

## Common Mistakes

- 题目问阴性后无病，不是阳性后有病。 / Track both the conditioning event and target event.
- 0.02% 对应 0.0002，不是 0.02；错误换算会放大一百倍。 / Convert percentages correctly.

## Connections

- [[Subtopic - Conditional Probability - 条件概率]]

- [[Conditional Probability - 条件概率]]
- [[Conditional-Probability Method - 条件概率方法]]

Compute the posterior of being disease-free conditional on a negative test, keeping the tiny false-negative rate distinct from false positives.
