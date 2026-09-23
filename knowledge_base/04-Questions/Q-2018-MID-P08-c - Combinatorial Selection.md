---
id: "Q-2018-MID-P08-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 10
solution_page: [10]
question_number: "8(c)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Ignoring order identifies settings by a ten-category multiplicity vector totaling five."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P08-c

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=10]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=10]]

## Question

(c) Assume that the lock has a weird flaw: The exact order in which you put the digits does not matter. In this case how many different solutions are there?
(Note that all permuted versions of a given combination still counts as one solution. For example, if the correct solution is 12345, then 34125,51243,23145,etc., all count as the same solution.)

Shared context: [[STEM-2018-MID-P08 - Shared Problem Prompt]].

## 中文解析

顺序被忽略以后，关键是每个数字出现几次，而不是拨轮的位置。十种数字的次数之和为五，用五颗星和九个隔板表示。不能直接把十的五次方除以五的阶乘，因为有重复数字的排列次数不同。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 10. The Chinese derivation expands the reasoning.

**Answer.** $\binom{14}{5}=2002$.

**Derivation/proof.** For each digit $d=0,\ldots,9$, let $x_d$ be its multiplicity. An unordered setting is uniquely described by $x_0+\cdots+x_9=5$ with each $x_d\ge0$. Five stars and nine bars encode these ten counts. Thus there are $\binom{14}{9}=\binom{14}{5}=2002$ settings. Part (b)'s adjacency restriction is not carried into this separate part.

### 中文解答

**推导。** 顺序不重要但数字可重复，因此每个不同设置由十种数字各自的出现次数 $x_0,\ldots,x_9$ 唯一描述，其中 $x_d\ge0$ 且 $x_0+\cdots+x_9=5$。将五颗星分进十个有标签的组，需九条隔板，星板串一共十四个位置；选五个星的位置给 $\binom{14}{5}=2002$。不同重数的排列数不恒为 $5!$，所以不能把 $10^5$ 简单除以 $5!$；本小题未承接(b)的邻盘限制。

## Common Mistakes

- 把上一部分的不相邻限制带入本部分。
- 统一除以五的阶乘而忽略重复数字。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]
