---
id: "Q-2019-FINAL-P11-b-decision"
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
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Opening door three makes the unchosen door two more likely than the original door."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2019-FINAL-P11-b-decision

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=13]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=13]] ![[knowledge_base/past_paper/2019-final.pdf#page=14]]

## Question

In this case, should you switch to door 2?

Shared context: [[STEM-2019-FINAL-P11 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=13|physical PDF page 13]]; [[knowledge_base/past_paper/2019-final.pdf#page=14|physical PDF page 14]].

Same as above, but with $p(M=3\mid W=1)=1/2,p(M=3\mid W=2)=1,p(M=3\mid W=3)=0$. Plugging in these numbers, we obtain $p(M=3)=0.55$ and $p(W=1\mid M=3)=5/11,p(W=2\mid M=3)=6/11$. So, we should switch to door 2. This time, the probability that our initial guess is correct has decreased.

## Supplementary Explanation

**Answer.** Yes; switch to door 2.

**Derivation/proof.** For the observation $M=3$, the posterior probabilities are $P(W=1\mid M=3)=0.25/0.55=5/11$ and $P(W=2\mid M=3)=0.3/0.55=6/11$. Switching therefore raises the conditional win probability from $5/11$ to $6/11$. The optimal response differs from the response when door 2 is opened.

Keeping the initial door wins with probability $(0.5/2)/0.55=5/11$. Since $6/11>5/11$, switching to door two is better after this opening.

## Connections

- [[Subtopic - Conditional Probability - 条件概率]]
- [[Conditional Probability - 条件概率]]
- [[Conditional-Probability Method - 条件概率方法]]
