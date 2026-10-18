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

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=17|physical PDF page 17]].

> Denote the bit sent by the sender to be $S$ and the bit received by the receiver to be $R$.
> We know that:
> $$p(S=1)=0.3,\ p(S=0)=0.7$$
> $$p(R=1\mid S=1)=0.8,\ p(R=0\mid S=1)=0.2$$
> $$p(R=1\mid S=0)=0.1,\ p(R=0\mid S=0)=0.9$$
> By the Bayes’ theorem,
> $$\begin{aligned}p(S=0\mid R=0)&=\frac{p(R=0\mid S=0)p(S=0)}{p(R=0)}\\&=\frac{p(R=0\mid S=0)p(S=0)}{p(R=0\mid S=1)p(S=1)+p(R=0\mid S=0)p(S=0)}\\&=\frac{0.9\times0.7}{0.2\times0.3+0.9\times0.7}\\&=\frac{21}{23}\\&=0.913.\end{aligned}$$

## Supplementary Explanation

**Answer.** $\displaystyle P(S=0\mid R=0)=\frac{21}{23}\approx0.91304$.

**Derivation/proof.** Let S be the sent bit and R the received bit. The joint probability of a sent zero and received zero is $P(S=0,R=0)=0.7\cdot0.9=0.63$. Total probability gives $P(R=0)=0.7\cdot0.9+0.3\cdot0.2=0.69$. Dividing the joint event by the conditioning event yields $P(S=0\mid R=0)=0.63/0.69=21/23$. The alternative posterior is $0.06/0.69=2/23$, so the two possible sent-bit posteriors sum to 1.

The second joint probability is $0.3\cdot0.2=0.06$. The source’s final decimal is rounded; the exact value is $21/23$.

## Connections

- [[Subtopic - Conditional Probability - 条件概率]]

- [[Conditional Probability - 条件概率]]
- [[Conditional-Probability Method - 条件概率方法]]

Bayes combines the 0.7 prior and 0.9 correct-zero likelihood with both ways to receive a zero.
