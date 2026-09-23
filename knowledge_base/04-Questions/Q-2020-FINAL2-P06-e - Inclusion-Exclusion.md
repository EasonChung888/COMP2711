---
id: "Q-2020-FINAL2-P06-e"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-2.pdf"
source_page: 4
question_number: "6(e)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Inclusion-Exclusion - 容斥原理]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Inclusion-Exclusion - 容斥原理]]","[[Derangements - 错排]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Inclusion-Exclusion Method - 容斥方法]]","[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 4
difficulty_basis: "The union has two nonempty pairwise intersections and the nine-fixed-point event is empty."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 5
related_questions: ["[[Q-2020-FINAL2-P06-a - Derangements]]","[[Q-2020-FINAL2-P06-b - Combinatorial Selection]]","[[Q-2020-FINAL2-P06-c - Combinatorial Selection]]","[[Q-2020-FINAL2-P06-d - Combinatorial Selection]]"]
---
# Q-2020-FINAL2-P06-e

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=5]]

Prerequisite context (editorial): [[Q-2020-FINAL2-P06-a - Derangements]]; [[Q-2020-FINAL2-P06-b - Combinatorial Selection]]; [[Q-2020-FINAL2-P06-c - Combinatorial Selection]]; [[Q-2020-FINAL2-P06-d - Combinatorial Selection]]. The four referenced events are: (a) exactly one fixed point, count $10D_9$; (b) exactly nine fixed points, impossible; (c) $A[0]=1,A[1]=0$, count $8!$; (d) $A[4]=4,A[5]=5$, count $8!$. This item asks for their union, not their intersection. “以上任意条件”要求四个事件的并集，需承接各自计数并进一步处理交集。

## Question

Satisfying any of the above conditions.

Shared context: [[STEM-2020-FINAL2-P06 - Shared Problem Prompt]].

## 中文解析

先删去不可能的九固定点事件。其他三组做容斥：恰一固定点与零一交换的交集为八种选择再错排七位，两个指定条件的交集固定四位为六阶乘；恰一固定点不可能同时满足两个指定固定点。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $10D_9+2\cdot8!-8D_7-6!$.

**Derivation/proof.** Call the four condition sets A,B,C,D. B is empty because nine fixed points force ten. The single counts are |A|=10D9, |C|=|D|=8!. In A∩C, the first two digits are swapped; choose one fixed point among the other eight and derange the remaining seven, giving 8D7. C∩D fixes four named positions, giving 6!. A∩D and the triple intersection are empty because D forces at least two fixed points. Inclusion-exclusion now gives the displayed expression.

### 中文解答

**推导。** 以 $S_1,S_2,S_3,S_4$ 表示(a)–(d)四种条件的排列集。$S_2$ 为空，$|S_1|=10D_9$，$|S_3|=|S_4|=8!$。交集 $S_1\cap S_3$ 已交换零、一，两者均非固定点；从其他八位置选唯一固定点，再把余下七个错排，给 $8D_7$。$S_3\cap S_4$ 固定四个指定映射，余下六个任排，给 $6!$。$S_1\cap S_4$ 为空，因为四、五已是两个固定点，因此三重交集也为空。对三个非空候选集容斥，所求并集为

$$10D_9+2\cdot8!-8D_7-6!.$$

这包含任意一个条件成立的排列，并扣除了全部重复计数，符合最终答案不留求和的要求。

## Common Mistakes

- 把交集 A∩D 当非空。
- 把 A∩C 的错排写成 D8，遗漏唯一固定点。

## Connections

- [[Subtopic - Inclusion-Exclusion - 容斥原理]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Inclusion-Exclusion - 容斥原理]]
- [[Derangements - 错排]]
- [[Combinatorial Selection - 组合选择]]
- [[Inclusion-Exclusion Method - 容斥方法]]
- [[Combinatorial Case Analysis - 组合分类法]]

- Prerequisite: [[Q-2020-FINAL2-P06-a - Derangements]]
- Prerequisite: [[Q-2020-FINAL2-P06-b - Combinatorial Selection]]
- Prerequisite: [[Q-2020-FINAL2-P06-c - Combinatorial Selection]]
- Prerequisite: [[Q-2020-FINAL2-P06-d - Combinatorial Selection]]
