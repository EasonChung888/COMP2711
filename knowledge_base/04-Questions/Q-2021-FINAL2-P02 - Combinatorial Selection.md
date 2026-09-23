---
id: "Q-2021-FINAL2-P02"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2021-final-part-2.pdf"
source_page: 1
question_number: "2"
year: 2021
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]","[[Subtopic - Inclusion-Exclusion - 容斥原理]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]","[[Inclusion-Exclusion - 容斥原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]","[[Inclusion-Exclusion Method - 容斥方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Eight leading-zero-padded digits form a bounded stars-and-bars count with at most one upper-bound violation."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1,2]
marks: 10
---
# Q-2021-FINAL2-P02

## Source

![[knowledge_base/past_paper/2021-final-part-2.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2021-final-part-2.pdf#page=1]] ![[knowledge_base/past_paper/2021-final-part-2.pdf#page=2]]

## Question

How many positive integers less than 100,000,000 have the sum of their digits equal to 19?

## 中文解析

用前导零统一成八位后，先按隔板法数非负解。每位最多九，若一位超过九就减去十，剩余总和九；因为两位同时超界至少二十，交集不可能出现，所以只需减去八个单项。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $\binom{26}{7}-8\binom{16}{7}=566280$.

**Derivation/proof.** Pad every allowed integer to eight digits; digit sum 19 excludes the all-zero integer automatically. Ignoring the digit upper bound, nonnegative solutions of d1+…+d8=19 number C(26,7). If a specified digit is at least10, subtract10 from it, leaving sum9 and C(16,7) solutions. Two digits cannot both be at least10 because their sum would exceed19. The eight bad sets are therefore disjoint, so subtract 8C(16,7) and obtain 566280.

### 中文解答

**推导。** 把每个小于 $10^8$ 的正整数补前导零到八位，得到唯一数字向量 $d_1,\ldots,d_8$。数字和十九自动排除零。先忽略每位至多九的限制，隔板法给非负解数 $\binom{19+8-1}{8-1}=\binom{26}{7}$。指定某位至少十，减掉十后剩余和九，所以该超界集合有 $\binom{9+8-1}{8-1}=\binom{16}{7}$ 个。八个超界集合两两不交，因为两位同时至少十会使总和至少二十，大于十九。因此只需减去八个单项，结果为 $\binom{26}{7}-8\binom{16}{7}=657800-8\cdot11440=566280$。前导零没有多算，因为每个整数恰有一个补到八位的表示。

## Common Mistakes

- 禁止前导零而漏掉短整数。
- 对不可能的双重超界仍添加容斥项。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Inclusion-Exclusion - 容斥原理]]
- [[Combinatorial Selection - 组合选择]]
- [[Inclusion-Exclusion - 容斥原理]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Inclusion-Exclusion Method - 容斥方法]]
