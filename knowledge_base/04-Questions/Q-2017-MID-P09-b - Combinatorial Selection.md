---
id: "Q-2017-MID-P09-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 11
solution_page: [11]
question_number: "9(b)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "At least two women requires four disjoint composition cases from two through five women."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P09-b

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=11]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=11]]

## Question

(b) How many committees are possible if the committee must have at least two women?

Shared context: [[STEM-2017-MID-P09 - Shared Problem Prompt]].

## 中文解析

“至少两位”不等于“恰好两位”。把女性人数分成二、三、四、五这四种情况，男性人数必须补足到五；按人数分类不会重叠，因此四项组合数乘积最后相加。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 11. The Chinese derivation expands the reasoning.

**Answer.** $\binom62\binom93+\binom63\binom92+\binom64\binom91+\binom65\binom90$.

**Derivation/proof.** Classify a committee by its number $k$ of women. The allowed values are $k=2,3,4,5$. For each, choose $k$ of the six women and $5-k$ of the nine men, giving $\binom6k\binom9{5-k}$. The four cases are disjoint and exhaustive, so sum them.

### 中文解答

**推导。** 按女性人数 $k$ 分类，可取 $k=2,3,4,5$；每类须同时选 $5-k$ 名男性，有 $\binom6k\binom9{5-k}$ 种。四类互斥且覆盖“至少两名”，故总数 $\sum_{k=2}^{5}\binom6k\binom9{5-k}=1260+720+135+6=2121$，即印本四项组合数之和。恰好两名只是第一类。

## Common Mistakes

- 漏掉全女性委员会。
- 每项男性人数仍固定写三。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Counting Method - 计数方法]]
