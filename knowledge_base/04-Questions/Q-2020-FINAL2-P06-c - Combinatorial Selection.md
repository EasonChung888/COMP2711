---
id: "Q-2020-FINAL2-P06-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-2.pdf"
source_page: 4
question_number: "6(c)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "The forced swap removes two digits and positions while leaving eight unrestricted."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 1
related_questions: ["[[Q-2020-FINAL2-P06-e - Inclusion-Exclusion]]"]
---
# Q-2020-FINAL2-P06-c

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=5]]

## Question

$A[0]=1,A[1]=0$.

Shared context: [[STEM-2020-FINAL2-P06 - Shared Problem Prompt]].

## 中文解析

零和一的交换已经固定两位，其余八个数字可以任意放入剩余八个位置。这里没有要求其他位置错排，也没有给交换块内部额外选择，所以只需八阶乘。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $8!$.

**Derivation/proof.** The conditions place digit 1 at position 0 and digit 0 at position 1. The other eight positions receive digits 2 through 9 bijectively with no remaining restriction, giving 8! assignments. They are allowed to be fixed or not; a derangement restriction is not present in this part.

### 中文解答

**推导。** 两个指定位置先放好：位置零放一，位置一放零。这同时用掉数字零、一，余下八个位置可以任意排列数字 $2,3,\ldots,9$，有 $8!$ 种。没有要求其余位置错位，所以可有任意数量的其他固定点，不能误用 $D_8$。

## Common Mistakes

- 再乘两种零一排列方式。
- 对其余八位强加错排条件。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]

- Used by: [[Q-2020-FINAL2-P06-e - Inclusion-Exclusion]]
