---
id: "Q-2023F-MID-P08"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf"
source_page: 17
question_number: "8"
year: 2023
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Conditional Probability - 条件概率]]"]
concepts: ["[[Conditional Probability - 条件概率]]"]
methods: ["[[Conditional-Probability Method - 条件概率方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Bayes combines the 0.7 prior and 0.9 correct-zero likelihood with both ways to receive a zero."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [17,18]
marks: 8
---
# Q-2023F-MID-P08

## Source

[[2023 Fall Midterm]]; printed item 8; 8 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=17]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=17]] ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=18]]

## Question

Two computers, a sender and a receiver, are communicating with each other. The sender transmits bit 1 with a probability of 30% and bit 0 with a probability of 70%. The communication channel is noisy, and we know the following information about the transition of data:

1. If the sent bit is 0, there is a 90% probability that the receiver will receive bit 0 and a 10% probability that it will receive bit 1.
2. If the sent bit is 1, there is an 80% probability that the receiver will receive bit 1 and a 20% probability that it will receive bit 0.

Given that the receiver computer received bit 0, determine the probability that the bit being sent was also 0.

## 中文解析

观测到零之后，需要计算发送零的 posterior，而不是直接引用传输正确率百分之九十。接收到零有两个来源：发送零且未出错、发送一但出错，所以分母必须把它们的联合概率相加。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\displaystyle P(S=0\mid R=0)=\frac{21}{23}\approx0.91304$。

**推导。**

1. 用 $S,R$ 分别表示发送和接收的 bit。发送零且收到零的联合概率是 $P(S=0,R=0)=0.7\cdot0.9=0.63$。收到零还可能由发送一时发生错误产生，其联合概率是 $0.3\cdot0.2=0.06$。
2. 两个发送事件互斥且穷尽，total probability 给出 $P(R=0)=0.63+0.06=0.69$。于是按 conditional probability 定义，
   $$P(S=0\mid R=0)=\frac{0.63}{0.69}=\frac{21}{23}.$$
3. 另一种发送值的 posterior 是 $0.06/0.69=2/23$，与答案相加为一。题目条件在接收端，故不能直接使用方向相反的 $P(R=0\mid S=0)=0.9$。

### English solution

**Answer.** $\displaystyle P(S=0\mid R=0)=\frac{21}{23}\approx0.91304$.

**Derivation/proof.** Let S be the sent bit and R the received bit. The joint probability of a sent zero and received zero is $P(S=0,R=0)=0.7\cdot0.9=0.63$. Total probability gives $P(R=0)=0.7\cdot0.9+0.3\cdot0.2=0.69$. Dividing the joint event by the conditioning event yields $P(S=0\mid R=0)=0.63/0.69=21/23$. The alternative posterior is $0.06/0.69=2/23$, so the two possible sent-bit posteriors sum to 1.

## Common Mistakes

- $P(R=0\mid S=0)$ 不等于 $P(S=0\mid R=0)$，反转条件必须用 Bayes。 / Do not reverse conditioning without Bayes.
- 分母漏掉由一翻转成零的情况会错误得到概率一。 / Include both routes to the observation.

## Connections

- [[Subtopic - Conditional Probability - 条件概率]]

- [[Conditional Probability - 条件概率]]
- [[Conditional-Probability Method - 条件概率方法]]

Bayes combines the 0.7 prior and 0.9 correct-zero likelihood with both ways to receive a zero.
