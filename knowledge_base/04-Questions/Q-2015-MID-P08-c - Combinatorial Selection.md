---
id: "Q-2015-MID-P08-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 13
solution_page: [13]
question_number: "8(c)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 5
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Distinct colors require choosing six color pairs and then one of the two distinguishable gloves from each pair."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P08-c

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=13]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=13]]

## Question

(c) these 6 gloves have different colors?

Briefly explain how your answers are derived.

Shared context: [[STEM-2015-MID-P08 - Shared Problem Prompt]].

## 中文解析

先选六种颜色，再从每种颜色对应的一对手套中选左手或右手。六次二选一互相独立，故在颜色组合数上乘 $2^6$。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 13. The Chinese derivation expands the reasoning.

**Answer.** $\binom{12}{6}2^6=59136$.

**Derivation/proof.** A valid selection identifies a unique six-color subset, with $\binom{12}{6}$ choices. For each selected color exactly one of its left/right gloves is taken, giving $2^6$ selections per subset. Multiplication yields the result.

### 中文解答

**推导。** 六只颜色各异，先从十二种颜色中选六种，有 $\binom{12}{6}$ 种。每色恰拿一只，而该色有左右手两只可选，六色各自二选一，共 $2^6$。总数为 $\binom{12}{6}2^6=59136$。顺序不计入取出的集合，因此不再乘六的阶乘。

## Common Mistakes

- 只计颜色而漏掉每种颜色的左右手区别。
- 乘 $6!$，把拿到的无序手套集合错误当作抽取顺序。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
