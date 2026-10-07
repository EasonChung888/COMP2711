---
id: "Q-2019-FINAL-P11-d-strategy"
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
subtopics: ["[[Subtopic - Conditional Probability - 条件概率]]","[[Subtopic - Introduction to Probability - 概率基础]]"]
concepts: ["[[Conditional Probability - 条件概率]]","[[Probability Events - 概率事件]]"]
methods: ["[[Conditional-Probability Method - 条件概率方法]]","[[Probability Calculation Method - 概率计算方法]]"]
question_types: ["construction"]
difficulty: 3
difficulty_basis: "Starting with the least likely prize door makes always switching succeed whenever the initial choice is wrong."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2019-FINAL-P11-d-strategy

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=13]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=14]]

## Question

(d) Can you design a better strategy?

[Hint: What is “obvious” is not obvious.]

Shared context: [[STEM-2019-FINAL-P11 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=14|physical PDF page 14]].

We pick door 3 first, then always switch. The winning probability is $p(E)=p(W=1,M=2)+p(W=2,M=1)=0.5\cdot1+0.3\cdot1=0.8$.

## Supplementary Explanation

**Answer.** Initially choose door 3 and always switch to the remaining unopened door.

**Derivation/proof.** Door 3 initially has the prize with probability 0.2. If that initial choice is wrong, Monty must reveal the other losing unchosen door, leaving the prize behind the remaining unopened door. Switching then wins. If the initial choice is right, switching loses. Thus this strategy wins exactly when $W\ne3$, an event of probability $0.5+0.3=0.8$, which exceeds the previous 0.55 and proves it is better.

Since $0.8>0.55$, the strategy is strictly better as requested; no separate claim of global optimality is needed.

To maximize the probability of success by always switching, initially choose the door with the smallest prior probability of containing the prize. Switching succeeds exactly when the initial choice was wrong.

## Connections

- [[Subtopic - Conditional Probability - 条件概率]]
- [[Subtopic - Introduction to Probability - 概率基础]]
- [[Conditional Probability - 条件概率]]
- [[Probability Events - 概率事件]]
- [[Conditional-Probability Method - 条件概率方法]]
- [[Probability Calculation Method - 概率计算方法]]
