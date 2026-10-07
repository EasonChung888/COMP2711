---
id: "Q-2023F-FINAL-P04-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Final.pdf"
source_page: 7
question_number: "4(d)"
year: 2023
term: "fall"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Probabilistic Existence - 概率存在性]]","[[Random Variables - 随机变量]]"]
methods: ["[[Expectation Existence Method - 期望存在性方法]]"]
question_types: ["proof"]
difficulty: 4
difficulty_basis: "Construct an independent fair switch experiment, pair opposite bulb states, sum expectations, and apply the lower-witness result to minus Y."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [7]
marks: 4
---
# Q-2023F-FINAL-P04-d

## Source

[[2023 Fall Final]]; printed item 4(d); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=7]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=7]]

Unlike the underdetermined expectation questions 4(a)–(b), this existence claim lets the proof choose its own distribution. Independent fair choices are introduced as a proof construction, not attributed to the printed prompt. The supplied conclusion is verified without relying on either quarantined answer.

Finite-average context (editorial): The arbitrary-variable claim in part (c) is quarantined because a finite mean is not stated. Here Y is bounded between 0 and n on the finite switch-configuration space. If every configuration had Y<n/2, the finite uniform average would also be less than n/2, contradicting the computed average. No answer from (c) is assumed.

## Question

Recall the CSE Department with its light bulbs and switches again. Prove that it is possible to have at least half of the light bulbs being turned ON.

(Hint: You might want to use some facts from the previous parts. You are also allowed to use the fact in part (c) even if you could not prove it)

Shared printed context: ![[STEM-2023F-FINAL-P04 - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=7|physical PDF page 7]].

> (d) If we flip every switch with $50\%$ probability, then on expectation half of the light bulbs will be on. So based on (c) there exists a way for switches such that at least half of the light bulbs are on.

## Supplementary Explanation

**Answer.** There exists a switch configuration with at least $n/2$ bulbs ON (equivalently at least $\lceil n/2\rceil$).

**Derivation/proof.** Choose independently for each of the m switches whether to flip it, with probability 1/2. This is a deliberately constructed uniform distribution on all $2^m$ configurations. For bulb i, select one incident switch; toggling just that choice pairs each configuration with another in which bulb i has the opposite final state. Thus $E(X_i)=1/2$ regardless of its initial state. Since $Y=\sum_iX_i$, linearity gives $E(Y)=n/2$, even though the bulb indicators may depend on one another. If every configuration had $Y<n/2$, their finite uniform average would be strictly below $n/2$, contradicting $E(Y)=n/2$. Therefore some configuration has $Y\ge n/2$. Equivalently, apply the finite-average lower-witness argument to $K=-Y$; that argument is proved locally, without importing the quarantined claim (c).

The $2^m$ equally likely switch configurations admit a one-to-one pairing by toggling any chosen switch incident to a fixed bulb. Exactly one member of each pair leaves that bulb on. Linearity of expectation holds even when the bulb indicators are dependent. Apply part (c) to $K=-Y$ to obtain $Y\ge n/2$, hence at least $\lceil n/2\rceil$ lit bulbs.

## Connections

- [[Subtopic - Random Variables - 随机变量]]
- [[Subtopic - Inference and Proofs - 推理与证明]]

- [[Probabilistic Existence - 概率存在性]]
- [[Random Variables - 随机变量]]
- [[Expectation Existence Method - 期望存在性方法]]

Construct an independent fair switch experiment, pair opposite bulb states, sum expectations, and apply the lower-witness result to minus Y.
