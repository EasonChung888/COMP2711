---
id: "Q-2019-FINAL-P08-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 10
solution_page: [10]
question_number: "8(c)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "The ordered adjacent block ab has five placements and leaves four distinct choices from the other 24 letters."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-FINAL-P08-c

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=10]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=10]]

## Question

(c) the letters a and b in consecutive positions with a preceding b, with all the letters distinct?

Shared context: [[STEM-2019-FINAL-P08 - Shared Problem Prompt]].

## 中文解析

先选择紧邻的 ab 块从哪一位开始，六位串共有五个合法起点。剩余四位不能再使用 a 或 b，也不能重复，所以要从二十四个字母中作有序无重复选择，而不是四次独立任选。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 10. The Chinese derivation expands the reasoning.

**Answer.** $5P(24,4)=1275120$.

**Derivation/proof.** The a in the forced block ab may start at positions 1 through 5, giving five choices. Its two positions are fixed and ordered. Fill the remaining four labeled positions with four distinct letters from the other 24 in $P(24,4)=24\cdot23\cdot22\cdot21=255024$ ways. Multiply to obtain 1275120.

### 中文解答

**推导。** 相邻块必须是 $ab$，它可从六个位置中的第 $1,2,3,4,5$ 位起，共五种起点。块内次序已固定，不能再乘二。其他四个位置必须从排除 $a,b$ 的二十四字母中作无重复有序选择，数量 $P(24,4)=24\cdot23\cdot22\cdot21=255024$。总数为 $5P(24,4)=1275120$；每个合法串有唯一的 $ab$ 块起点，所以没有重数问题。

## Common Mistakes

- 把 ab 与 ba 都计入。
- 其余位置仍允许重复而使用 24 的四次方。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Counting Method - 计数方法]]
