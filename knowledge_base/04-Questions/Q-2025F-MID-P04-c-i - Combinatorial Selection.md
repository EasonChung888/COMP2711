---
id: "Q-2025F-MID-P04-c-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 13
question_number: "4(c)(i)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Count an injection matching every A element to a different B element."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [13]
marks: 2
---
# Q-2025F-MID-P04-c-i

## Source

[[2025 Fall Midterm]]; printed item 4(c)(i); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=13]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=13]]

## Question

![[STEM-2025F-MID-P04-c - Shared Problem Prompt#Shared printed wording]]

(i) In how many ways we can have 7 unordered pairs (e.g., $(a_1,b_1)$ is the same as $(b_1,a_1)$) such that each pair contains an element from $A$ and an element from $B$ while the elements can not be reused?

## 中文解析

七对必须用尽七个 $A$ 元素；按固定 $a_i$ 次序分配不同的 $B$ 伙伴。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $P(10,7)=10!/3!$。

**推导。** 因为每对恰用一个 $A$ 元素，七对会用尽 $a_1,\ldots,a_7$。给 $a_1$ 选伙伴有十种，给 $a_2$ 剩九种，依次到 $a_7$ 剩四种，所以有 $10\cdot9\cdots4=P(10,7)$ 种。按 $A$ 标签固定处理顺序只是编码配对集合，不是给七对另加顺序。每对虽无内部方向，但其 $A$、$B$ 成员可区分来源，因此不需要除以 $2^7$ 或 $7!$。

## Common Mistakes

- 无序的是每一对的内部排列，不会让不同 $a_i$ 的伙伴关系被合并。
- 不能让两个 $A$ 元素共享同一个 $B$ 元素，题目禁止复用。

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]

Count an injection matching every A element to a different B element.
