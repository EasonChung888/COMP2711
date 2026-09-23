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

## 中文解析

仍在汽车固定门一的条件下重新考虑三与五这对门，全部六个可开门对等概率，所以也是六分之一。各小问不是连续发生的过程，不能认为上一小问已开过门。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $1/6$.

**Derivation/proof.** With the car fixed behind door 1, Monty can choose any pair from goat doors 2,3,4,5. Uniformity assigns equal weight1/C(4,2) to each of the six pairs, including {3,5}. This is a fresh pair selection event under the same condition, not a sequential probability after already opening {2,3}.

### 中文解答

**推导。** 在 $W=1$ 条件下，可打开的四个羊门是 $2,3,4,5$，所有无序对子 $\{2,3\},\{2,4\},\{2,5\},\{3,4\},\{3,5\},\{4,5\}$ 等可能。所求 $\{3,5\}$ 占六对之一，所以条件概率 $1/6$。本小问是相同条件下另一个事件，不是在上一小问已经开门后的追加操作；两种初选门规则在车位一时也没有差别。

## Common Mistakes

- 把多小问当顺序开门。
- 因为门编号较大而改变均匀概率。

## Connections

- [[Subtopic - Conditional Probability - 条件概率]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Conditional Probability - 条件概率]]
- [[Combinatorial Selection - 组合选择]]
- [[Conditional-Probability Method - 条件概率方法]]
- [[Combinatorial Case Analysis - 组合分类法]]
