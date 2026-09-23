---
id: "Q-2014-MID-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Midterm]]"
source_pdf: "knowledge_base/past_paper/2014-midterm.pdf"
source_page: 3
solution_page: [3]
question_number: "1(b)"
year: 2014
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]", "[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]", "[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "The group restriction is handled by choosing feasible group-count splits, not by multiplying one global combination blindly."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-MID-P01-b

## Source

![[knowledge_base/past_paper/2014-midterm.pdf#page=3]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-midterm.pdf#page=3]].

## Question

(b) In how many ways can a voter choose 5 candidates such that at least 3 candidates from Group A are chosen?

Explain how your answers are derived.

Shared context: [[STEM-2014-MID-P01 - Shared Problem Prompt]].

## 中文解析

‘至少三名 A’受 A 组只有四人的限制，只分成选三名或选四名两种情况。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 3. The Chinese derivation expands the reasoning.

**Answer.** $\binom43\binom52+\binom44\binom51=45$.

**Derivation/proof.** The possible Group-A counts are three or four. Select the A candidates and fill the remaining places from the five candidates not in A; the cases are disjoint.

### 中文解答

**推导。** A 组只有四人，至少选三人只可能选三名或四名。选三名 A 后从其余五人选两名，共 $\binom43\binom52=40$；选四名 A 后从其余五人选一名，共 $\binom44\binom51=5$。两类互斥，所以总数 $40+5=45$。

## Common Mistakes

- 遗漏选四名 A 的情况。
- 剩余席位仍从九人而非非 A 的五人中选。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
- [[Combinatorial Case Analysis - 组合分类法]]
