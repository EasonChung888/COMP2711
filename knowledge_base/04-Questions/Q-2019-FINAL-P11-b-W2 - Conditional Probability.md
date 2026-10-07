---
id: "Q-2019-FINAL-P11-b-W2"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 13
solution_page: [13,14]
question_number: "11(b)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Conditional Probability - 条件概率]]"]
concepts: ["[[Conditional Probability - 条件概率]]"]
methods: ["[[Conditional-Probability Method - 条件概率方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Prize door two forces opening door three, so its prior mass 0.3 is normalized by 0.55."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2019-FINAL-P11-b-W2

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=13]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=13]] ![[knowledge_base/past_paper/2019-final.pdf#page=14]]

## Question

and $p(W=2\mid M=3)$?

Shared context: [[STEM-2019-FINAL-P11 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=13|physical PDF page 13]]; [[knowledge_base/past_paper/2019-final.pdf#page=14|physical PDF page 14]].

Same as above, but with $p(M=3\mid W=1)=1/2,p(M=3\mid W=2)=1,p(M=3\mid W=3)=0$. Plugging in these numbers, we obtain $p(M=3)=0.55$ and $p(W=1\mid M=3)=5/11,p(W=2\mid M=3)=6/11$. So, we should switch to door 2. This time, the probability that our initial guess is correct has decreased.

## Supplementary Explanation

**Answer.** $6/11$.

**Derivation/proof.** When the prize is behind door 2 and you chose door 1, Monty must open door 3, giving joint probability 0.3. The total opening probability is $0.5(1/2)+0.3(1)+0.2(0)=0.55$. Therefore the posterior is $0.3/0.55=6/11$, complementary to the $5/11$ for door 1.

The joint event is $P(W=2,M=3)=0.3$, and its observation probability is $0.3+0.25=0.55$. Dividing the joint probability by this total gives the posterior for door two.

## Connections

- [[Subtopic - Conditional Probability - 条件概率]]
- [[Conditional Probability - 条件概率]]
- [[Conditional-Probability Method - 条件概率方法]]
