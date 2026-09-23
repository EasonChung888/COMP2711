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

## 中文解析

只准向右或向上意味着每条路都恰好五步右、三步上。不同路径对应八个位置中选择哪五个放右步；任意这样的排列都不会越界，因此可以直接用组合数计数。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 16. The Chinese derivation expands the reasoning.

**Answer.** $\binom85=56$.

**Derivation/proof.** Moving from $A$ to $B$ requires exactly five right steps and three up steps. Any ordering of these eight steps remains inside the rectangle because neither coordinate can exceed its final total before all such steps have been used. Choose the five right-step positions among eight, giving $\binom85=56$.

### 中文解答

**推导。** 由图 $A$ 到 $B$ 的横坐标增加五格、纵坐标增加三格，故每条上/右单调路径恰有五个右步与三个上步，总八步。任意排列这八步都不越界并到达终点；从八个位置选五个放右步，其余为上步，一一对应路径。总数 $\binom85=56$。

## Common Mistakes

- 把网格线数量当作步数。
- 把相同方向的步视为可区分而用八的阶乘。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Counting Method - 计数方法]]
