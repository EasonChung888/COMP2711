---
id: "Q-2021-FINAL2-P05-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2021-final-part-2.pdf"
source_page: 3
question_number: "5(c)"
year: 2021
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Graph Connectivity - 图连通性]]"]
methods: ["[[Graph Proof Method - 图论证明法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "A zero indegree blocks every path into v4 from a different vertex."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 2
---
# Q-2021-FINAL2-P05-c

## Source

![[knowledge_base/past_paper/2021-final-part-2.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2021-final-part-2.pdf#page=4]]

## Question

A strongly connected directed graph with 5 vertices, $v_1,v_2,v_3,v_4$ and $v_5$.

- In-degree of $v_1=1$, out-degree of $v_1=3$.
- In-degree of $v_2=2$, out-degree of $v_2=1$.
- In-degree of $v_3=3$, out-degree of $v_3=1$.
- In-degree of $v_4=0$, out-degree of $v_4=2$.
- In-degree of $v_5=2$, out-degree of $v_5=1$.

Shared context: [[STEM-2021-FINAL2-P05 - Shared Problem Prompt]].

## 中文解析

强连通要求任何其他点都能沿方向到达 v4，但任何到达路径最后必须有一条进入 v4 的边。其入度为零，所以不可能到达。出度二只表示可以离开，不能补救反向不可达的问题。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** No such strongly connected graph exists.

**Derivation/proof.** Strong connectivity requires a directed path from every other vertex to v4. Such a path must end with an edge entering v4. Its indegree is prescribed as zero, so no entering edge exists and no such path can exist. The nonzero outdegree only permits leaving v4 and does not resolve the missing reverse reachability.

### 中文解答

**推导。** 不存在这样的强连通有向图。强连通要求任何 $v_i$（$i\ne4$）都有有向路径到 $v_4$，该路径最后一条边必进入 $v_4$。但题给 $v_4$ 入度零，根本没有这样的进入边，所以其他顶点全都不能到达它，与强连通矛盾。$v_4$ 出度二只能保证可能离开它，不能补救所需的进入路径。

## Common Mistakes

- 把弱连通当强连通。
- 因为出度非零就认为能从别人到达它。

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Graph Connectivity - 图连通性]]
- [[Graph Proof Method - 图论证明法]]
