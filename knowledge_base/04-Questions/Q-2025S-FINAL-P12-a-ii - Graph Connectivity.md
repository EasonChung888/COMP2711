---
id: "Q-2025S-FINAL-P12-a-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 16
question_number: "12(a)(ii)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Graph Connectivity - 图连通性]]"]
methods: ["[[Graph Proof Method - 图论证明法]]"]
question_types: ["proof"]
difficulty: 1
difficulty_basis: "Use the odd degree sum to violate the handshaking identity."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [16]
---
# Q-2025S-FINAL-P12-a-ii

## Source

[[2025 Spring Final]]; printed item 12(a)(ii); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=16]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=16]]

## Question

![[STEM-2025S-FINAL-P12-a - Shared Problem Prompt#Shared printed wording]]

(ii) $4,4,3,2,1,1$

## 中文解析

无向边每条给度数和贡献二，度数和必须为偶数。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 不可能。

**推导。** 把所给六个度数相加，$4+4+3+2+1+1=15$。Handshaking lemma 说明任意有限无向图都有 $\sum_v\deg(v)=2|E|$，右侧为偶数，而十五为奇数，产生矛盾。因此不存在该图。这一论证本身可在三行内写完，也不需要尝试绘图。

## Common Mistakes

- 度数个别为奇数没有问题，关键是奇数度顶点个数及整个度数和的奇偶性。
- 不能把每条无向边只算给一个端点，否则会破坏握手恒等式。

## Connections

- [[Topic - Graphs - 图论]]
- [[Subtopic - Graphs - 图论基础]]
- [[Graph Connectivity - 图连通性]]
- [[Graph Proof Method - 图论证明法]]

Use the odd degree sum to violate the handshaking identity.
