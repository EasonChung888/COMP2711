---
id: "Q-2017-MID-P07"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 9
solution_page: [9]
question_number: "7"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Counting Principles - 计数原理]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]","[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "The generalized pigeonhole bound needs 720 code types including leading zero and a matching lower-bound construction."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 7
---
# Q-2017-MID-P07

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=9]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=9]]

## Question

A computer randomly prints three-digit codes, with no repeated digits in any code (for example, 387, 072, 760). What is the minimum number of codes that must be printed in order to guarantee that at least six of the codes are identical?

## 中文解析

这些是编码而非三位整数，首位零也允许，因此共有七百二十种。每种都出现五次仍没有六个相同编码，一共可容纳三千六百次；再多一次才必然达到要求。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 9. The Chinese derivation expands the reasoning.

**Answer.** $3601$.

**Derivation/proof.** There are $10\cdot9\cdot8=720$ code types because a leading zero is allowed. With at most five copies of each type, at most $5\cdot720=3600$ codes can be printed. Thus the next code forces a sixth copy. Conversely, printing exactly five copies of every type shows 3600 does not suffice.

### 中文解答

**推导。** 示例 $072$ 表明首位可为零，不重复三位编码共 $10\cdot9\cdot8=720$ 种。若每种至多出现五次，总共至多 $5\cdot720=3600$ 个；因此打印 $3601$ 个必有一种至少六次。反过来，每种各打印五次可达 $3600$ 而仍无六个相同者，所以 $3601$ 不仅充分，而且最小。随机性不改变这一最坏情况保证。

## Common Mistakes

- 把首位选项错算为九个。
- 只给上界而未证明最小性。

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Counting Principles - 计数原理]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]
- [[Combinatorial Case Analysis - 组合分类法]]
