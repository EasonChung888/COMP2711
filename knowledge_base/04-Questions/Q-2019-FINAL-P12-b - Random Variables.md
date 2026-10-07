---
id: "Q-2019-FINAL-P12-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 15
solution_page: [15]
question_number: "12(b)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]","[[Subtopic - Introduction to Probability - 概率基础]]"]
concepts: ["[[Random Variables - 随机变量]]","[[Probability Events - 概率事件]]"]
methods: ["[[Random-Variable Method - 随机变量方法]]","[[Probability Calculation Method - 概率计算方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "An hour contributes 3600 visit indicators, each of mean p."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-FINAL-P12-b

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=15]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=15]]

## Question

(b) How many visits is the server expected to get during 1 hour?

Shared context: [[STEM-2019-FINAL-P12 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=15|physical PDF page 15]].

1 hour has $3600$ seconds. There are $3600$ independent Bernoulli trials. So the expected number of visits is $3600p$.

## Supplementary Explanation

**Answer.** $3600p$.

**Derivation/proof.** There are $60\cdot60=3600$ one-second intervals in an hour. Let $I_t$ indicate a visit in second t. The total is $N=\sum_{t=1}^{3600}I_t$, with $E(I_t)=p$. Thus $E(N)=\sum p=3600p$ by linearity. Independence is not needed for this mean calculation.

Even if all seconds share a single Bernoulli variable, the expected total remains $3600p$.

With $I_t$ indicating an event at second $t$, linearity gives $E(N)=\sum_{t=1}^{3600}E(I_t)=3600p$. Thus independence across seconds is not required for the expectation, even if a binomial distribution is not justified.

## Connections

- [[Subtopic - Random Variables - 随机变量]]
- [[Subtopic - Introduction to Probability - 概率基础]]
- [[Random Variables - 随机变量]]
- [[Probability Events - 概率事件]]
- [[Random-Variable Method - 随机变量方法]]
- [[Probability Calculation Method - 概率计算方法]]
