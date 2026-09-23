---
id: "Q-2025S-FINAL-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 9
question_number: "6(b)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]","[[Subtopic - Inclusion-Exclusion - 容斥原理]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]","[[Inclusion-Exclusion - 容斥原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]","[[Inclusion-Exclusion Method - 容斥方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Use a leading-digit substitution and bounded stars-and-bars with disjoint invalid cases."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [9]
marks: 6
---
# Q-2025S-FINAL-P06-b

## Source

[[2025 Spring Final]]; printed item 6(b); 6 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=9]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=9]]

## Question

(b) [6 pts] How many 6-digit natural numbers (from 100000 to 999999) have digits that sum to 11? For example, the number 100019 sums to $1+0+0+0+1+9=11$ and would be counted. Briefly explain why.

## 中文解析

首位至少一先扣掉一，再从无上界的非负整数解中扣除超过数字上限的情况。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\binom{15}5-11=2992$。

**推导。** 设六位数字为 $a_1,\ldots,a_6$，令 $b_1=a_1-1$，则 $b_1+a_2+\cdots+a_6=10$。暂不设上限，stars and bars 给出 $\binom{15}5=3003$ 个解。真实限制是 $b_1\le8$、其余 $a_i\le9$。若 $b_1\ge9$，减去九后剩余总和一，六个位置共有 $\binom65=6$ 种；若某个 $a_i\ge10$，减十后全零，每个 $i=2,\ldots,6$ 各一解，共五种。这些违例不能同时发生，因为总和仅十。故合法数为 $3003-6-5=2992$。

## Common Mistakes

- 首位减一后上界是八而非九，漏掉这个变化会少扣五个解。
- 其他位置可以为零，不能把六个原数字都设为正整数。

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Inclusion-Exclusion - 容斥原理]]
- [[Combinatorial Selection - 组合选择]]
- [[Inclusion-Exclusion - 容斥原理]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Inclusion-Exclusion Method - 容斥方法]]

Use a leading-digit substitution and bounded stars-and-bars with disjoint invalid cases.
