---
id: "Q-2016-FINAL-P03-e"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Final]]"
source_pdf: "knowledge_base/past_paper/2016-final.pdf"
source_page: 7
question_number: "3(e)"
year: 2016
term: "fall"
exam_type: "final"
marks: 3
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Conditional Probability - 条件概率]]"]
concepts: ["[[Conditional Probability - 条件概率]]"]
methods: ["[[Conditional-Probability Method - 条件概率方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "A coupling-independent lower bound on the intersection exceeds the product of the two fixed marginals."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
related_questions: []
---
# Q-2016-FINAL-P03-e

## Source

![[knowledge_base/past_paper/2016-final.pdf#page=7]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-final.pdf#page=7]]

Source correction (derived proof): PDF page 7 obtains 5/6 (and joint 5/9) by multiplying the two fair-die success probabilities. Conditional independence of the two rolls is not printed. The conclusion of dependence is nevertheless forced by the stated marginal laws; the following general-coupling proof is derived, not a verification of that intended iid calculation.

## Question

(e) Are $A_1$ and $A_2$ independent? Explain your answer.

Shared context: [[STEM-2016-FINAL-P03 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2016-final.pdf#page=7|PDF physical page 7]].

(e) No, $A_1$ and $A_2$ are dependent because $P(A_2\mid A_1)\ne P(A_2)$.

## Supplementary Explanation

**Answer.** No; $A_1$ and $A_2$ are dependent for every joint law compatible with the printed conditions.

**Derivation/proof.** Let $F$ denote selection of the fair die and set $t=P(A_1\cap A_2\mid F)$. Each fair-die marginal is $1/3$, so $0\le t\le1/3$. On the special die both events always occur. With the given equal die priors, $P(A_i)=\tfrac12\cdot\tfrac13+\tfrac12=2/3$ for each $i$. But $P(A_1\cap A_2)=\tfrac12t+\tfrac12\ge1/2>4/9=P(A_1)P(A_2)$, which rules out independence. No exact conditional intersection value or independence of repeated rolls was assumed.

The bound $t\le1/3$ follows because the intersection is contained in either fair-die event. The proof never fixes $t=1/9$ and does not borrow the quarantined exact values $5/6$ or $5/9$.

The general-coupling joint probability is $\frac12t+\frac12$, which is at least one-half for every allowed $t$.

## Connections

- [[Subtopic - Conditional Probability - 条件概率]]
- [[Conditional Probability - 条件概率]]
- [[Conditional-Probability Method - 条件概率方法]]
