---
id: "Q-2016-FINAL-P03-a-1"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Final]]"
source_pdf: "knowledge_base/past_paper/2016-final.pdf"
source_page: 7
solution_page: [7]
question_number: "3(a)"
year: 2016
term: "fall"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Introduction to Probability - 概率基础]]","[[Subtopic - Conditional Probability - 条件概率]]"]
concepts: ["[[Probability Events - 概率事件]]","[[Conditional Probability - 条件概率]]"]
methods: ["[[Probability Calculation Method - 概率计算方法]]","[[Conditional-Probability Method - 条件概率方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Conditioning on the equally likely selected die combines success probabilities one third and one."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-FINAL-P03-a-1

## Source

![[knowledge_base/past_paper/2016-final.pdf#page=7]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-final.pdf#page=7]]

## Question

(a) What is $P(A_1)$ and $P(A_2)$?

Atomic focus [editorial]: $P(A_1)$; the second requested marginal is a separate atom.

Shared context: [[STEM-2016-FINAL-P03 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2016-final.pdf#page=7|PDF physical page 7]].

(a) If a fair dice is picked, the probability that we get one or two dots on top is $\frac13$. If a special dice is picked, the probability that we get one or two dots on top is 1. Therefore, $P(A_1)=\frac12\cdot\frac13+\frac12\cdot1=\frac23$. By the same argument, $P(A_2)=\frac23$.

## Supplementary Explanation

**Answer.** $P(A_1)=2/3$.

**Derivation/proof.** Let $F$ and $S$ denote selecting the fair and special dice. They partition the experiment and each has probability $1/2$. Total probability gives $P(A_1)=P(A_1\mid F)P(F)+P(A_1\mid S)P(S)=\frac13\frac12+1\frac12=\frac23$.

The equal weights come from the random selection of the die, not from a uniform distribution over the resulting numerical values.

Explicitly, $P(A_1\mid F)=1/3$ and the weighted sum is $(1/2)(1/3)+(1/2)(1)=2/3$.

## Connections

- [[Subtopic - Introduction to Probability - 概率基础]]
- [[Subtopic - Conditional Probability - 条件概率]]
- [[Probability Events - 概率事件]]
- [[Conditional Probability - 条件概率]]
- [[Probability Calculation Method - 概率计算方法]]
- [[Conditional-Probability Method - 条件概率方法]]
