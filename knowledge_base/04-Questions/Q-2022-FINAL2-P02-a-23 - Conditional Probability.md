---
id: "Q-2022-FINAL2-P02-a-23"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2022-final-part-2.pdf"
source_page: 2
question_number: "2(a)"
year: 2022
term: "spring"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Conditional Probability - 条件概率]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Conditional Probability - 条件概率]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Conditional-Probability Method - 条件概率方法]]","[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "When the original choice contains the car all six goat-door pairs are available."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
---
# Q-2022-FINAL2-P02-a-23

## Source

![[knowledge_base/past_paper/2022-final-part-2.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2022-final-part-2.pdf#page=2]]

## Question

What is $P(M=\{2,3\}\mid W=1)$?

Shared context: [[STEM-2022-FINAL2-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2022-final-part-2.pdf#page=2|physical PDF page 2]].

> (a) $P(M=\{2,3\}\mid W=1)=P(M=\{3,5\}\mid W=1)=1/\binom42=1/6$.

## Supplementary Explanation

**Answer.** $1/6$.

**Derivation/proof.** Given W=1, all four other doors 2,3,4,5 contain goats and remain eligible for Monty's opening. He selects an unordered two-door subset uniformly; there are C(4,2)=6 such pairs. {2,3} is one pair, so its conditional probability is 1/6. The two openings are not ordered outcomes.

There are $\binom42=6$ pairs and $P(M=\{2,3\}\mid W=1)=1/6$. The eligible goat-door set is the same under either interpretation of whether the initially chosen door may be opened, because that door contains the car.

## Connections

- [[Subtopic - Conditional Probability - 条件概率]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Conditional Probability - 条件概率]]
- [[Combinatorial Selection - 组合选择]]
- [[Conditional-Probability Method - 条件概率方法]]
- [[Combinatorial Case Analysis - 组合分类法]]
