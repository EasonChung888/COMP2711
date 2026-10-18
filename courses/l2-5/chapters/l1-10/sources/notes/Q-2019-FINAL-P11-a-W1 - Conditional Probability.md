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

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=13|physical PDF page 13]]; [[knowledge_base/past_paper/2019-final.pdf#page=14|physical PDF page 14]].

By the Bayes\' theorem,
$$p(W=w\mid M=2)=\frac{p(M=2\mid W=w)p(W=w)}{p(M=2)},$$
where $p(M=2)=\sum_{w=1}^3p(M=2\mid W=w)p(W=w)$. We have $p(W=1)=0.5,p(W=2)=0.3,p(W=3)=0.2,p(M=2\mid W=1)=1/2,p(M=2\mid W=2)=0,p(M=2\mid W=3)=1$. Plugging in these numbers, we obtain $p(M=2)=0.45$ and $p(W=1\mid M=2)=5/9,p(W=3\mid M=2)=4/9$. So, we should not switch. Contrary to our intuition, the probability that our initial guess is correct has increased after door 2 is opened!

## Supplementary Explanation

**Answer.** $5/9$.

**Derivation/proof.** Monty opens door 2 with probability $1/2$ if $W=1$, zero if $W=2$, and one if $W=3$. Therefore $P(M=2)=0.5(1/2)+0.3(0)+0.2(1)=0.45$. The joint mass for $W=1,M=2$ is $0.25$. Bayes gives $0.25/0.45=5/9$.

## Connections

- [[Subtopic - Conditional Probability - 条件概率]]
- [[Conditional Probability - 条件概率]]
- [[Conditional-Probability Method - 条件概率方法]]
