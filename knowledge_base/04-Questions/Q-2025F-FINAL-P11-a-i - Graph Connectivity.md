---
id: "Q-2025F-FINAL-P11-a-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 19
question_number: "11(a)(i)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Bipartite Graphs - 二分图]]"]
methods: ["[[Graph Proof Method - 图论证明法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Use alternation of bipartition classes around a cycle to reject an odd-cycle equivalence."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [19]
marks: 1
---
# Q-2025F-FINAL-P11-a-i

## Source

[[2025 Fall Final]]; printed item 11(a)(i); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=19]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=19]]

## Question

![[STEM-2025F-FINAL-P11-a - Shared Problem Prompt#Shared printed wording]]

(i) A simple graph is bipartite if and only if it contains at least one odd cycle.

## 中文解析

二分图每跨一条边都换到另一侧，闭合回路长度因此只能为偶数。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** False。

**推导。** 若图有 bipartition $V=L\cup R$，每条边连接不同侧。沿闭合 cycle 每一步交替左右，奇数步后位于出发点的另一侧，不能回到原点，所以二分图不可能含 odd cycle。题目却说有至少一个奇环才是二分图，方向条件错误。具体反例是单条边图：它显然二分，却没有任何环，更没有奇环；三角形则有奇环而不二分。

## Common Mistakes

- 正确判据是不含奇环，不能把“没有”误读为“至少一个”。
- 无环图也可能二分，二分图不要求必须存在偶环。

## Connections

- [[Topic - Graphs - 图论]]
- [[Subtopic - Graphs - 图论基础]]
- [[Bipartite Graphs - 二分图]]
- [[Graph Proof Method - 图论证明法]]

Use alternation of bipartition classes around a cycle to reject an odd-cycle equivalence.
