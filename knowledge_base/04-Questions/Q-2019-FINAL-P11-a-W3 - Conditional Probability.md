---
id: "Q-2019-FINAL-P11-a-W3"
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
difficulty_basis: "Prize door three forces Monty to open door two, contributing full prior mass 0.2 to the posterior numerator."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2019-FINAL-P11-a-W3

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=13]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=13]] ![[knowledge_base/past_paper/2019-final.pdf#page=14]]

## Question

and $p(W=3\mid M=2)$?

Shared context: [[STEM-2019-FINAL-P11 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=13|physical PDF page 13]]; [[knowledge_base/past_paper/2019-final.pdf#page=14|physical PDF page 14]].

By the Bayes\' theorem,
$$p(W=w\mid M=2)=\frac{p(M=2\mid W=w)p(W=w)}{p(M=2)},$$
where $p(M=2)=\sum_{w=1}^3p(M=2\mid W=w)p(W=w)$. We have $p(W=1)=0.5,p(W=2)=0.3,p(W=3)=0.2,p(M=2\mid W=1)=1/2,p(M=2\mid W=2)=0,p(M=2\mid W=3)=1$. Plugging in these numbers, we obtain $p(M=2)=0.45$ and $p(W=1\mid M=2)=5/9,p(W=3\mid M=2)=4/9$. So, we should not switch. Contrary to our intuition, the probability that our initial guess is correct has increased after door 2 is opened!

## Supplementary Explanation

**Answer.** $4/9$.

**Derivation/proof.** If the prize is at door 3, Monty must open door 2, so $P(W=3,M=2)=0.2$. Total probability gives $P(M=2)=0.5(1/2)+0.3(0)+0.2(1)=0.45$. Thus $P(W=3\mid M=2)=0.2/0.45=4/9$. The other closed-door posterior is $5/9$, and they sum to one.

The two posterior probabilities sum to $5/9+4/9=1$; the open door has probability zero.

Door two is opened with total probability $0.2+0.5/2=0.45$: the prize-at-door-three branch forces that opening, while the prize-at-door-one branch chooses it with probability one half.

## Connections

- [[Subtopic - Conditional Probability - 条件概率]]
- [[Conditional Probability - 条件概率]]
- [[Conditional-Probability Method - 条件概率方法]]
