---
id: "Q-2020-FINAL2-P06-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-2.pdf"
source_page: 4
question_number: "6(a)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Inclusion-Exclusion - 容斥原理]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Derangements - 错排]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Inclusion-Exclusion Method - 容斥方法]]","[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Choose the sole fixed point then derange all nine remaining positions."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4,5]
marks: 2
related_questions: ["[[Q-2020-FINAL2-P06-e - Inclusion-Exclusion]]"]
---
# Q-2020-FINAL2-P06-a

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=4]] ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=5]]

## Question

There is exactly one $i$ such that $A[i]=i$.

Shared context: [[STEM-2020-FINAL2-P06 - Shared Problem Prompt]].

## 中文解析

恰有一个固定点，先选这个点有十种。剩下九位必须全部错排，不能随意排列，否则会产生额外固定点。每个符合条件的排列唯一确定那个固定点，因此乘法计数不重复。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $10D_9$.

**Derivation/proof.** Choose the unique fixed index in 10 ways and put that digit there. The remaining nine digits must avoid their own nine positions, otherwise there would be more than one fixed point. They form a derangement counted by D9. Each permutation has one unique chosen fixed point, so the product 10D9 has no duplication.

### 中文解答

**推导。** 先选唯一固定点的位置 $i$，有十种选择，并放入同值数字 $A[i]=i$。剩余九个数字与九个对应位置必须全部错位，否则会产生第二固定点，所以有 $D_9$ 种。每个满足题意的排列决定唯一的固定点，故乘法计数无重复，答案 $10D_9$。题目允许用错排数作最终表达，不需留下求和号。

## Common Mistakes

- 用 9! 代替 D9。
- 忘记选择唯一固定点的位置。

## Connections

- [[Subtopic - Inclusion-Exclusion - 容斥原理]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Derangements - 错排]]
- [[Combinatorial Selection - 组合选择]]
- [[Inclusion-Exclusion Method - 容斥方法]]
- [[Combinatorial Case Analysis - 组合分类法]]

- Used by: [[Q-2020-FINAL2-P06-e - Inclusion-Exclusion]]
