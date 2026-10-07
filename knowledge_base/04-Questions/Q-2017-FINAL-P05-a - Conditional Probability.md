---
id: "Q-2017-FINAL-P05-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 8
solution_page: [8,9]
question_number: "5(a)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Conditional Probability - 条件概率]]","[[Subtopic - Introduction to Probability - 概率基础]]"]
concepts: ["[[Conditional Probability - 条件概率]]","[[Probability Events - 概率事件]]"]
methods: ["[[Conditional-Probability Method - 条件概率方法]]","[[Probability Calculation Method - 概率计算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Bayes weighting compares heads likelihood 0.8 against 0.5 under equal prior coin selection."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 4
---
# Q-2017-FINAL-P05-a

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=8]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=8]] ![[knowledge_base/past_paper/2017-final.pdf#page=9]]

## Question

(a) Given that your friend’s first coin flip returns heads, what is the probability that your friend got the fake coin, to your disadvantage?

Shared context: [[STEM-2017-FINAL-P05 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2017-final.pdf#page=8|physical PDF page 8]]; [[knowledge_base/past_paper/2017-final.pdf#page=9|physical PDF page 9]].

Define the following events: $E_1$: Your friend got the fake coin. $E_2$: Your friend got the real coin. $H$: Your friend's coin flip returns heads. $T$: Your friend's coin flip returns tails.
We want to know $p(E_1\mid H)$.
We know that $p(H)+p(T)=1,p(E_1)+p(E_2)=1$.
Then we have:
$$p(E_1\mid H)\cdot p(H)=p(H\mid E_1)\cdot p(E_1)$$
$$p(E_1\mid H)=0.8\cdot0.5/p(H)=0.4/(0.5\cdot0.8+0.5\cdot0.5)=0.4/0.65=8/13.$$

## Supplementary Explanation

**Answer.** $8/13$.

**Derivation/proof.** Let $F$ mean the friend holds the fake coin and $H$ mean the observed head. Then $P(F)=1/2$, $P(H\mid F)=4/5$, and $P(H\mid F^c)=1/2$. Total probability gives $P(H)=(1/2)(4/5)+(1/2)(1/2)=13/20$. Bayes gives $P(F\mid H)=(2/5)/(13/20)=8/13$.

The joint probability is $P(F\cap H)=2/5$. Only the observed first toss enters this calculation; no assumption about later tosses is needed.

## Connections

- [[Subtopic - Conditional Probability - 条件概率]]
- [[Subtopic - Introduction to Probability - 概率基础]]
- [[Conditional Probability - 条件概率]]
- [[Probability Events - 概率事件]]
- [[Conditional-Probability Method - 条件概率方法]]
- [[Probability Calculation Method - 概率计算方法]]
