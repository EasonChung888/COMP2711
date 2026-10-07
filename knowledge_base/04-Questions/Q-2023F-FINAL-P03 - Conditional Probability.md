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

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=6|physical PDF page 6]].

> First, we determine these events: $A$ is the event that someone has the disease, and $B$ is the event that someone’s test is positive. From the problem we know:
> $$P(A)=\frac1{10000},\qquad P(B\mid A)=0.999,\qquad P(B\mid\sim A)=0.0002.$$
> $$P(B)=P(A)*P(B\mid A)+P(\sim A)*P(B\mid\sim A)=\frac1{10000}\cdot0.999+(1-\frac1{10000})*0.0002=$$
> What is the probability that someone who tests negative does not have the disease? So we want to calculate: $P(\sim A\mid\sim B)=\frac{P(\sim B\mid\sim A)P(\sim A)}{P(\sim B)}$
> in which $P(\sim B\mid\sim A)=1-P(B\mid\sim A)$ and $P(\sim B)=1-P(B)$ and $P(\sim A)=1-P(A)$.

## Supplementary Explanation

**Answer.** $\displaystyle\frac{(1-1/10000)(1-0.0002)}{(1-1/10000)(1-0.0002)+(1/10000)(1-0.999)}=\frac{49\,985\,001}{49\,985\,006}$.

**Derivation/proof.** Let D mean disease and N mean a negative test. The given probabilities imply $P(D)=0.0001$, $P(N\mid D)=0.001$, and $P(N\mid D^c)=0.9998$. Thus $P(N\cap D^c)=0.9999\cdot0.9998=0.99970002$, while $P(N\cap D)=0.0001\cdot0.001=0.0000001$. Total probability gives $P(N)=0.99970012$. Bayes then yields $P(D^c\mid N)=0.99970002/0.99970012=49\,985\,001/49\,985\,006$, a value slightly below 1.

The negative-result probability is $0.99970012$, and the posterior is $49\,985\,001/49\,985\,006$.

## Connections

- [[Subtopic - Conditional Probability - 条件概率]]

- [[Conditional Probability - 条件概率]]
- [[Conditional-Probability Method - 条件概率方法]]

Compute the posterior of being disease-free conditional on a negative test, keeping the tiny false-negative rate distinct from false positives.
