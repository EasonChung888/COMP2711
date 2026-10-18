---
id: "Q-2019-FINAL-P11-b-W1"
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
difficulty_basis: "Opening door three has total mass 0.55 and leaves door ones joint mass at one quarter."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2019-FINAL-P11-b-W1

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=13]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=13]] ![[knowledge_base/past_paper/2019-final.pdf#page=14]]

## Question

(b) Now suppose $M=3$, i.e., Monty opens door 3. What is $p(W=1\mid M=3)$

Shared context: [[STEM-2019-FINAL-P11 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=13|physical PDF page 13]]; [[knowledge_base/past_paper/2019-final.pdf#page=14|physical PDF page 14]].

Same as above, but with $p(M=3\mid W=1)=1/2,p(M=3\mid W=2)=1,p(M=3\mid W=3)=0$. Plugging in these numbers, we obtain $p(M=3)=0.55$ and $p(W=1\mid M=3)=5/11,p(W=2\mid M=3)=6/11$. So, we should switch to door 2. This time, the probability that our initial guess is correct has decreased.

## Supplementary Explanation

**Answer.** $5/11$.

**Derivation/proof.** Here $P(M=3\mid W=1)=1/2$, $P(M=3\mid W=2)=1$, and $P(M=3\mid W=3)=0$. Hence $P(M=3)=0.5(1/2)+0.3=0.55$. The joint mass $P(W=1,M=3)=0.25$, giving posterior $0.25/0.55=5/11$.

The total probability of the observed opening is $0.5(1/2)+0.3(1)+0.2(0)=0.55$. These terms condition on the three mutually exclusive prize locations.

## Connections

- [[Subtopic - Conditional Probability - 条件概率]]
- [[Conditional Probability - 条件概率]]
- [[Conditional-Probability Method - 条件概率方法]]
