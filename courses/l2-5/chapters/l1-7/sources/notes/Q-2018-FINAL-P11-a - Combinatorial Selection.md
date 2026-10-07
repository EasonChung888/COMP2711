---
id: "Q-2018-FINAL-P11-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 16
solution_page: [16]
question_number: "11(a)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Every monotone path has five right and three up steps, encoded by eight positions."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P11-a

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=16]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=16]]

## Question

a) All lines in the rectangle are possible?

Shared context: [[STEM-2018-FINAL-P11 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-final.pdf#page=16|physical PDF page 16]].

The distance from $A$ to $B$ is $8$ steps, $5$ right, and $3$ up. The answer is $C(8,5)=56$.

## Supplementary Explanation

**Answer.** $\binom85=56$.

**Derivation/proof.** Moving from $A$ to $B$ requires exactly five right steps and three up steps. Any ordering of these eight steps remains inside the rectangle because neither coordinate can exceed its final total before all such steps have been used. Choose the five right-step positions among eight, giving $\binom85=56$.

Recording a path as five right steps and three up steps gives a one-to-one correspondence between paths and words with those fixed multiplicities. Choosing the three up-step positions counts every path once.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Counting Method - 计数方法]]
