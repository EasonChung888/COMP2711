---
id: "Q-2022-FINAL1-P02"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2022-final-part-1.pdf"
source_page: 2
question_number: "2"
year: 2022
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Handshakes comprise all cross-group pairs plus pairs within the ten strangers."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
marks: 8
---
# Q-2022-FINAL1-P02

## Source

![[knowledge_base/past_paper/2022-final-part-1.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2022-final-part-1.pdf#page=2]]

## Question

At a gathering of 30 people, there are 20 people who all know each other, while the other 10 people don’t know anyone. People who know each other hug, and people who do not know each other shake hands. How many handshakes occur within the group?

## 中文解析

握手分成陌生人与熟人组之间的二百对，以及十名陌生人内部的四十五对。熟人组内部全拥抱不用计入；也可用所有三十人配对减去熟人二十人内部配对验证。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $245$.

**Derivation/proof.** Each of the ten strangers shakes hands with each of the twenty mutually acquainted people, giving 10·20=200 cross-group handshakes. Within the ten strangers every unordered pair also shakes, contributing C(10,2)=45. The twenty-person group contributes none because they hug. These cases are disjoint and exhaustive, so total 245. Check by complement: C(30,2)−C(20,2)=435−190=245.

### 中文解答

**推导。** 把握手分成互斥两类。十名不认识任何人的成员与二十人熟人组之间，每对都握手，计 $10\cdot20=200$ 次。十名成员内部也两两不认识，无序对数为 $\binom{10}{2}=45$ 次。二十人组内部都拥抱，不计握手。因此总数 $200+45=245$。独立核对：全部三十人有 $\binom{30}{2}=435$ 对，减掉二十人内部的 $\binom{20}{2}=190$ 对，仍得 $435-190=245$；每对只计一次，没有把两端人数重复相加。

## Common Mistakes

- 把陌生人内部握手计算两次。
- 只计十人与二十人的跨组握手。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Counting Method - 计数方法]]
