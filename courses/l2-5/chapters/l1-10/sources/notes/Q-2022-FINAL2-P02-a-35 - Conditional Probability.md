---
id: "Q-2022-FINAL2-P02-a-35"
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
difficulty_basis: "The different specified pair has the same conditional eligibility among four goat doors."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
---
# Q-2022-FINAL2-P02-a-35

## Source

![[knowledge_base/past_paper/2022-final-part-2.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2022-final-part-2.pdf#page=2]]

## Question

What is $P(M=\{3,5\}\mid W=1)$?

Shared context: [[STEM-2022-FINAL2-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2022-final-part-2.pdf#page=2|physical PDF page 2]].

> (a) $P(M=\{2,3\}\mid W=1)=P(M=\{3,5\}\mid W=1)=1/\binom42=1/6$.

## Supplementary Explanation

**Answer.** $1/6$.

**Derivation/proof.** With the car fixed behind door 1, Monty can choose any pair from goat doors 2,3,4,5. Uniformity assigns equal weight1/C(4,2) to each of the six pairs, including {3,5}. This is a fresh pair selection event under the same condition, not a sequential probability after already opening {2,3}.

The pairs are $\{2,3\},\{2,4\},\{2,5\},\{3,4\},\{3,5\},\{4,5\}$. The target occupies one of six pairs. Both interpretations of the initially chosen door give the same set when the car is at one.

## Connections

- [[Subtopic - Conditional Probability - 条件概率]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Conditional Probability - 条件概率]]
- [[Combinatorial Selection - 组合选择]]
- [[Conditional-Probability Method - 条件概率方法]]
- [[Combinatorial Case Analysis - 组合分类法]]
