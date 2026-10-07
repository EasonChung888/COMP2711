---
id: "Q-2025S-FINAL-P11"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 15
question_number: "11"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Conditional Probability - 条件概率]]"]
concepts: ["[[Conditional Probability - 条件概率]]"]
methods: ["[[Conditional-Probability Method - 条件概率方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Condition on a yes response by separating truthful-six and lying-nonsix cases."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [15]
marks: 7
---
# Q-2025S-FINAL-P11

## Source

[[2025 Spring Final]]; printed item 11; 7 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=15]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=15]]

## Question

A man is known to tell the truth with probability $\frac34$ (independent of the event outcome) and can only respond with “YES” or “NO”. He rolls a fair six-sided die and is then asked whether the die landed on 6. He responds, “YES”! What is the probability that the die actually landed on 6? Justify your answer.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=15|physical PDF page 15]].

There are two scenarios in which the man responds YES: either he is being truthful, or he is not. Note that his truthfulness is independent of the die's outcome.

Let $S$ be the event of rolling a six, $P(S)=\frac16$.

Let $\overline S$ be the event of not rolling a six, $P(\overline S)=\frac56$.

Let $T$ be the event that the man tells the truth, regardless of the outcome, $P(T)=\frac34$.

Let $\overline T$ be the event that the man does not tell the truth, regardless of the outcome, $P(\overline T)=\frac14$.

Let $M$ be the event that the man responds "YES" when asked if the die landed on 6. We want to find $P(S\mid M)$.

First Solution: Using the Bayes' theorem:
$$P(S\mid M)=\frac{P(M\mid S)P(S)}{P(M\mid S)P(S)+P(M\mid\overline S)P(\overline S)}=\frac{\frac34\cdot\frac16}{\frac34\cdot\frac16+\frac14\cdot\frac56}=\frac38.$$
Second Solution:
$$P(M)=P(S\cap T)+P(\overline S\cap\overline T)=\frac16\cdot\frac34+\frac56\cdot\frac14=\frac8{24}$$
$$P(S\cap M)=\frac34\cdot\frac16=\frac3{24}$$
$$P(S\mid M)=\frac{P(S\cap M)}{P(M)}=\frac{3/24}{8/24}=\frac38$$

## Supplementary Explanation

**Answer.** $3/8$.

**Derivation/proof.** Let S mean a six and M mean YES. Truthfulness is explicitly independent of the outcome, so $P(S)=1/6$, $P(M\mid S)=3/4$, and $P(M\mid\overline S)=1/4$. The disjoint, exhaustive sources of YES give $P(M)=\frac16\frac34+\frac56\frac14=8/24$. Rolling a six and saying YES has probability $P(S\cap M)=3/24$. Thus $P(S\mid M)=(3/24)/(8/24)=3/8$. This is lower than the truthfulness rate because the prior probability of a non-six is much larger.

## Connections

- [[Topic - Probability - 概率]]
- [[Subtopic - Conditional Probability - 条件概率]]
- [[Conditional Probability - 条件概率]]
- [[Conditional-Probability Method - 条件概率方法]]

Condition on a yes response by separating truthful-six and lying-nonsix cases.
