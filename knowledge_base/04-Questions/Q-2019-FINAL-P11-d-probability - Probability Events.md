---
id: "Q-2019-FINAL-P11-d-probability"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 13
solution_page: [14]
question_number: "11(d)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Introduction to Probability - 概率基础]]","[[Subtopic - Conditional Probability - 条件概率]]"]
concepts: ["[[Probability Events - 概率事件]]","[[Conditional Probability - 条件概率]]"]
methods: ["[[Probability Calculation Method - 概率计算方法]]","[[Conditional-Probability Method - 条件概率方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "The new strategy wins on prize doors one and two, whose prior probabilities sum to four fifths."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2019-FINAL-P11-d-probability

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=13]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=14]]

## Question

What’s its winning probability?

Shared context: [[STEM-2019-FINAL-P11 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=14|physical PDF page 14]].

We pick door 3 first, then always switch. The winning probability is $p(E)=p(W=1,M=2)+p(W=2,M=1)=0.5\cdot1+0.3\cdot1=0.8$.

## Supplementary Explanation

**Answer.** $0.8=4/5$ for initially choosing door 3 and always switching.

**Derivation/proof.** Under the proposed strategy, if $W=1$, Monty opens door 2 and switching reaches door 1. If $W=2$, he opens door 1 and switching reaches door 2. If $W=3$, switching leaves the prize and loses regardless of his random choice. The three prize-location cases partition the experiment, so the win probability is $0.5\cdot1+0.3\cdot1+0.2\cdot0=0.8$.

When the prize is behind the initially selected third door, both possible host choices lead to a loss after switching, so the detailed randomization on that branch is irrelevant.

For the lowest-prior initial door, the win probability is $0.5\cdot1+0.3\cdot1+0.2\cdot0=0.8=4/5$. If the initial door actually contains the prize, both choices lose among the other two doors, explaining the final zero term.

## Connections

- [[Subtopic - Introduction to Probability - 概率基础]]
- [[Subtopic - Conditional Probability - 条件概率]]
- [[Probability Events - 概率事件]]
- [[Conditional Probability - 条件概率]]
- [[Probability Calculation Method - 概率计算方法]]
- [[Conditional-Probability Method - 条件概率方法]]
