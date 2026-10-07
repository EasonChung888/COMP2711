---
id: "Q-2020-FINAL1-P03-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-1.pdf"
source_page: 2
question_number: "3(b)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Subtract the product of the six-step prefix and five-step suffix through the marked vertex."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
marks: 3
related_questions: ["[[Q-2020-FINAL1-P03-a - Combinatorial Selection]]"]
---
# Q-2020-FINAL1-P03-b

## Source

![[knowledge_base/past_paper/2020-final-part-1.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-1.pdf#page=2]]

Prerequisite context (editorial): [[Q-2020-FINAL1-P03-a - Combinatorial Selection]]. The unrestricted A-to-B path count from (a) is $\binom{11}{5}=462$: six right moves and five up moves. This is the total from which paths through C are removed. 本题先承接不限制经过 C 的路径总数，再扣掉经 C 的路径。

## Question

In how many ways you can go to point B without passing through point C?

Shared context: [[STEM-2020-FINAL1-P03 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-final-part-1.pdf#page=2|physical PDF page 2]].

$\binom{11}{5}-\binom63\cdot\binom53$.

## Supplementary Explanation

**Answer.** $\binom{11}{5}-\binom{6}{3}\binom{5}{3}=262$.

**Derivation/proof.** There are $\binom{11}{5}=462$ unrestricted paths. From A to C the figure requires three right and three up moves, giving $\binom63=20$ prefixes. From C to B it requires three right and two up moves, giving $\binom53=10$ suffixes. A path through C uniquely decomposes into one prefix and one suffix, so exactly 200 pass through C. Subtracting leaves 262.

All paths number 462, and the forbidden-point paths number 200 by the unique prefix/suffix split. Their difference is $462-200=262$.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Counting Method - 计数方法]]

- Prerequisite: [[Q-2020-FINAL1-P03-a - Combinatorial Selection]]
