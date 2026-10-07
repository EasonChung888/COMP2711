---
id: "Q-2016-FINAL-P03-a-2"
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
difficulty_basis: "The second roll has the same mixture marginal because no first-roll outcome has been conditioned on."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-FINAL-P03-a-2

## Source

![[knowledge_base/past_paper/2016-final.pdf#page=7]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-final.pdf#page=7]]

## Question

(a) What is $P(A_1)$ and $P(A_2)$?

Atomic focus [editorial]: $P(A_2)$; the first requested marginal is a separate atom.

Shared context: [[STEM-2016-FINAL-P03 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2016-final.pdf#page=7|PDF physical page 7]].

(a) If a fair dice is picked, the probability that we get one or two dots on top is $\frac13$. If a special dice is picked, the probability that we get one or two dots on top is 1. Therefore, $P(A_1)=\frac12\cdot\frac13+\frac12\cdot1=\frac23$. By the same argument, $P(A_2)=\frac23$.

## Supplementary Explanation

**Answer.** $P(A_2)=2/3$.

**Derivation/proof.** The choice of die is unchanged and unobserved. Conditional on the fair die, the second roll has probability $1/3$ of showing at most two; conditional on the special die that probability is 1. Thus $P(A_2)=\frac12\frac13+\frac12=\frac23$. Equality of the marginals does not establish independence of the events.

This question is not conditioned on the first roll. Thus $P(A_2)=(1/2)(1/3)+(1/2)(1)=2/3$ still uses the original die weights.

## Connections

- [[Subtopic - Introduction to Probability - 概率基础]]
- [[Subtopic - Conditional Probability - 条件概率]]
- [[Probability Events - 概率事件]]
- [[Conditional Probability - 条件概率]]
- [[Probability Calculation Method - 概率计算方法]]
- [[Conditional-Probability Method - 条件概率方法]]
