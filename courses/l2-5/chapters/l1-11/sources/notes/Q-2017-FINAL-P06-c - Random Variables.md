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

## Official Answer

Source: [[knowledge_base/past_paper/2017-final.pdf#page=10|physical PDF page 10]].

Consider the homogeneity of each row as its own indicator variable $X_i$, all $X_i$ are mutually independent. So $E(X)=8E(X_1)=8(1/2)^7$.

## Supplementary Explanation

**Answer.** $E(X)=8/128=1/16$.

**Derivation/proof.** Let $I_i$ indicate that row $i$ is homogeneous. Then $X=\sum_{i=1}^8I_i$ and $E(I_i)=P(I_i=1)=2(1/2)^8=1/128$. By linearity, $E(X)=\sum E(I_i)=8/128=1/16$. Independence is not needed for this expectation step.

The row probability uses the explicitly stated independence of the individual coin flips, even though linearity of expectation itself does not need row independence.

## Connections

- [[Subtopic - Random Variables - 随机变量]]
- [[Subtopic - Introduction to Probability - 概率基础]]
- [[Random Variables - 随机变量]]
- [[Probability Events - 概率事件]]
- [[Random-Variable Method - 随机变量方法]]
- [[Probability Calculation Method - 概率计算方法]]
