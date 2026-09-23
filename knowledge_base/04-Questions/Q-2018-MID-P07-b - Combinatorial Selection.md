---
id: "Q-2018-MID-P07-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 9
solution_page: [9]
question_number: "7(b)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Subtracting the disjoint all-male and all-female committees enforces representation of both genders."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P07-b

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=9]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=9]]

## Question

(b) How many ways are there to form the committee if at least one woman and one man must be in it?

Shared context: [[STEM-2018-MID-P07 - Shared Problem Prompt]].

## 中文解析

至少一男一女的反面是全男或全女。因为委员会有五个人，全男与全女不可能同时发生，所以这两个坏情况互斥；从全部委员会中分别减去即可，不需要额外加回交集。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 9. The Chinese derivation expands the reasoning.

**Answer.** $\binom{20}{5}-\binom{11}{5}-\binom95=14916$.

**Derivation/proof.** Among all 15504 committees, the forbidden ones are all male, counted by $\binom{11}{5}=462$, or all female, counted by $\binom95=126$. No nonempty committee belongs to both forbidden cases. Therefore subtract each once: $15504-462-126=14916$.

### 中文解答

**推导。** 从所有 $\binom{20}{5}=15504$ 个委员会中减去全男性与全女性。全男性有 $\binom{11}{5}=462$，全女性有 $\binom95=126$；五人委员会非空，不能同时属于两类，所以二者互斥。所求为 $15504-462-126=14916$，即 $\binom{20}{5}-\binom{11}{5}-\binom95$。余下恰好每种性别至少一人。

## Common Mistakes

- 只减全男而漏掉全女。
- 先指定一男一女造成同一委员会重复计数。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Counting Method - 计数方法]]
