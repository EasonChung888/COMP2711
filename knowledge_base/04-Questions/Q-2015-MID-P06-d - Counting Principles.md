---
id: "Q-2015-MID-P06-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 11
solution_page: [11]
question_number: "6(d)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 5
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "A gap construction enforces both the leading-letter condition and nonadjacency of the two digits."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P06-d

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=11]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=11]]

## Question

(d) The first character must be a letter, and there must be exactly two digits, which cannot be next to each other.

Briefly explain how your answers are derived.

Shared context: [[STEM-2015-MID-P06 - Shared Problem Prompt]].

## 中文解析

先排好六个字母，在相邻字母之间和最后各留一个空位，共六个可用间隙。选择两个不同间隙放数字，保证数字不相邻，同时没有首字母之前的间隙，保证首位是字母。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 11. The Chinese derivation expands the reasoning.

**Answer.** $26^6\cdot10^2\binom62$.

**Derivation/proof.** Choose the ordered sequence of six letters in $26^6$ ways. Its five internal gaps and one trailing gap are eligible; the leading gap is forbidden. Choose two of these six gaps and put one digit in each, in $10^2$ ways. Deleting the digits recovers the letter sequence and chosen gaps uniquely, so no password is double counted. As a check, choosing two nonconsecutive positions from 2–8 gives $\binom72-6=15=\binom62$.

### 中文解答

**推导。** 先选择并排列六个字母，计 $26^6$。六字母之间有五个间隙，末尾再有一个，首字母之前不可用，故有六个可用间隙。选两个不同间隙，各放一个数字，计 $\binom62\cdot10^2$。这样必不相邻，且删去数字可唯一还原六字母与间隙，所以无重计。总数 $26^6\cdot10^2\binom62$；另验后七位选非相邻两位，$\binom72-6=15=\binom62$。

## Common Mistakes

- 把最前面的间隙也计入，导致首位为数字。
- 在同一个间隙放两个数字，违反不相邻条件。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Counting Method - 计数方法]]
