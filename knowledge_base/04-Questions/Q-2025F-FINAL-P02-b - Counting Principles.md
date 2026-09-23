---
id: "Q-2025F-FINAL-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 5
question_number: "2(b)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Pair all subsets with their disjoint complements and apply the pigeonhole principle."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 5
---
# Q-2025F-FINAL-P02-b

## Source

[[2025 Fall Final]]; printed item 2(b); 5 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=5]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=5]]

## Question

(b) [5 points] Consider $A=\{1,2,3,4,5\}$. Imagine picking 17 different subsets from $A$ at random. Prove that at least two of them are disjoint.

## 中文解析

把三十二个子集按互补关系分成十六对，选十七个必同时命中一对。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 十七个不同子集中必有两个不相交。

**推导。** $A$ 的幂集有 $2^5=32$ 个子集。每个 $S\subseteq A$ 与唯一补集 $A\setminus S$ 配成一对，两者交集为空，且不可能相同：否则元素一既属于又不属于同一集合。取补两次返回原集合，所以三十二个子集恰分为十六个互不重叠的二元组。选十七个不同子集，pigeonhole principle 保证某组中两个都被选中，它们互补，因而不相交。随机选择的分布不影响这个确定性结论。

## Common Mistakes

- 补集配对不能把 S 与其补集又各算一次，否则会错误地得到三十二对。
- 选择必须是不同子集，重复抽到同一个子集不能用此鸽巢论证。

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]

Pair all subsets with their disjoint complements and apply the pigeonhole principle.
