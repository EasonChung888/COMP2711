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

## Official Answer

Source: [[knowledge_base/past_paper/2021-final-part-2.pdf#page=4|physical PDF page 4]].

> (c) None. There is no path from $v_i$ to $v_4$ for $i\ne4$, because in-degree of $v_4$ is 0.

## Supplementary Explanation

**Answer.** No such strongly connected graph exists.

**Derivation/proof.** Strong connectivity requires a directed path from every other vertex to v4. Such a path must end with an edge entering v4. Its indegree is prescribed as zero, so no entering edge exists and no such path can exist. The nonzero outdegree only permits leaving v4 and does not resolve the missing reverse reachability.

For $i\ne4$, the last edge must enter $v_4$, but indegree zero forbids such an edge.

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Graph Connectivity - 图连通性]]
- [[Graph Proof Method - 图论证明法]]
