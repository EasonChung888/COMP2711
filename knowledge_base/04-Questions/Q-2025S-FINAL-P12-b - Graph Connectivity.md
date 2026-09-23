---
id: "Q-2025S-FINAL-P12-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 16
question_number: "12(b)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Graph Connectivity - 图连通性]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Graph Proof Method - 图论证明法]]","[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Separate edges incident to one labeled vertex from unrestricted edges on the other six."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [16,17]
marks: 4
---
# Q-2025S-FINAL-P12-b

## Source

[[2025 Spring Final]]; printed item 12(b); 4 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=16]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=16]] ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=17]]

## Question

(b) [4 pts] How many distinct simple undirected graphs exist on 7 labeled vertices $\{a,b,c,d,e,f,g\}$ such that $\deg(a)\ge4$?

## 中文解析

先选择 $a$ 的邻居，其他六顶点间的边都可独立决定是否出现。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\bigl(\binom64+\binom65+\binom66\bigr)2^{15}=720896$。

**推导。** 若 $\deg(a)=d$，其中 $d=4,5,6$，从其余六顶点选择邻居有 $\binom6d$ 种。这六条可能的关联边便已确定。其余六顶点之间共有 $\binom62=15$ 条可能边，每条可有可无，所以每组邻居对应 $2^{15}$ 张图。三种度数情形互斥，故总数为 $(15+6+1)2^{15}=22\cdot32768=720896$。顶点有标签，因此不同邻居集合确实是不同图，不需除以同构对称。

## Common Mistakes

- 仅选择邻居会漏掉其他六顶点之间的十五条可选边。
- 有标签图按边集区分，不能再除以七的阶乘。

## Connections

- [[Topic - Graphs - 图论]]
- [[Topic - Counting - 计数]]
- [[Subtopic - Graphs - 图论基础]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Graph Connectivity - 图连通性]]
- [[Combinatorial Selection - 组合选择]]
- [[Graph Proof Method - 图论证明法]]
- [[Combinatorial Case Analysis - 组合分类法]]

Separate edges incident to one labeled vertex from unrestricted edges on the other six.
