---
id: "Q-2020-FINAL2-P06-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-2.pdf"
source_page: 4
question_number: "6(d)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Two named fixed positions leave an unrestricted permutation of eight other digits."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 1
related_questions: ["[[Q-2020-FINAL2-P06-e - Inclusion-Exclusion]]"]
---
# Q-2020-FINAL2-P06-d

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=5]]

## Question

$A[4]=4,A[5]=5$.

Shared context: [[STEM-2020-FINAL2-P06 - Shared Problem Prompt]].

## 中文解析

第四、第五编号的位置已经放好对应数字，删去它们后其余八位任意排列。这个条件只要求这两个固定点存在，并不限制其他固定点数量，因此不能把余下部分错排。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $8!$.

**Derivation/proof.** Positions 4 and 5 are already occupied by digits 4 and 5. Delete those two positions and digits; any bijection between the eight remaining positions and eight remaining digits extends uniquely to a valid permutation. There are 8! such bijections. Other fixed points are permitted because the condition does not say exactly two.

### 中文解答

**推导。** 把数字四、五分别固定在位置四、五，删除这两个已处理的数字及位置。余下八个不同数字与八个有标签位置之间可任取双射，共 $8!$ 种；每种双射唯一扩展回一个合法十位排列。题目仅要求这两个固定点，并没有要求“恰好两个”，所以其他固定点不受限制。

## Common Mistakes

- 把“指定两个固定点”误解为“恰好两个固定点”。
- 给两个已指定位置再乘选择数。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]

- Used by: [[Q-2020-FINAL2-P06-e - Inclusion-Exclusion]]
