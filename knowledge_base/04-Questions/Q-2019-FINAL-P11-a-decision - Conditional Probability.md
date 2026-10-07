---
id: "Q-2019-FINAL-P11-a-decision"
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
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Comparing the two posterior probabilities favors keeping door one after door two is opened."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2019-FINAL-P11-a-decision

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=13]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=13]] ![[knowledge_base/past_paper/2019-final.pdf#page=14]]

## Question

Based on your calculation, should you switch to door 3?

Shared context: [[STEM-2019-FINAL-P11 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=13|physical PDF page 13]]; [[knowledge_base/past_paper/2019-final.pdf#page=14|physical PDF page 14]].

By the Bayes\' theorem,
$$p(W=w\mid M=2)=\frac{p(M=2\mid W=w)p(W=w)}{p(M=2)},$$
where $p(M=2)=\sum_{w=1}^3p(M=2\mid W=w)p(W=w)$. We have $p(W=1)=0.5,p(W=2)=0.3,p(W=3)=0.2,p(M=2\mid W=1)=1/2,p(M=2\mid W=2)=0,p(M=2\mid W=3)=1$. Plugging in these numbers, we obtain $p(M=2)=0.45$ and $p(W=1\mid M=2)=5/9,p(W=3\mid M=2)=4/9$. So, we should not switch. Contrary to our intuition, the probability that our initial guess is correct has increased after door 2 is opened!

## Supplementary Explanation

**Answer.** No; keep door 1.

**Derivation/proof.** The joint masses compatible with opening door 2 are 0.25 for prize door 1 and 0.2 for prize door 3, summing to 0.45. Their posterior probabilities are $5/9$ and $4/9$. Keeping wins with $5/9$, while switching wins with $4/9$, so keeping is strictly better under this observation.

The two posterior winning probabilities satisfy $5/9>4/9$, so keep door one after this observation.

## Connections

- [[Subtopic - Conditional Probability - 条件概率]]
- [[Conditional Probability - 条件概率]]
- [[Conditional-Probability Method - 条件概率方法]]
