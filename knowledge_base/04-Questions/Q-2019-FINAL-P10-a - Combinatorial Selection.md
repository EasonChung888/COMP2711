---
id: "Q-2019-FINAL-P10-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 12
solution_page: [12]
question_number: "10(a)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Twenty identical units and two separators encode three nonnegative coordinates."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-FINAL-P10-a

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=12]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=12]]

## Question

(a) How many solutions are there?

Shared context: [[STEM-2019-FINAL-P10 - Shared Problem Prompt]].

## 中文解析

非负整数允许某些变量为零，因此用二十颗星与两个隔板表示三项数值，隔板可以相邻或在两端。选二十二个位置中的两个作为隔板，并算出具体数值二百三十一，满足题目要求。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 12. The Chinese derivation expands the reasoning.

**Answer.** $231$.

**Derivation/proof.** By stars and bars, solutions of $x_1+x_2+x_3=20$ correspond to twenty stars and two separators. Choose the separator positions among 22: $\binom{22}{2}=22\cdot21/2=231$. Adjacent separators and endpoint separators account for zero coordinates.

### 中文解答

**推导。** 三个变量非负，相当于把二十颗相同星分入三个有标签组，用两条隔板表示分界。星板序列长 $20+2=22$，选两处放隔板，得 $\binom{22}{2}=22\cdot21/2=231$。隔板可相邻或在两端，正对应允许某个变量为零。

## Common Mistakes

- 错误地要求三个变量都正。
- 只给组合表达式而未给精确数值。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]
