---
id: "Q-2021-FINAL2-P05-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2021-final-part-2.pdf"
source_page: 4
question_number: "5(d)"
year: 2021
term: "spring"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Graph Connectivity - 图连通性]]"]
methods: ["[[Graph Proof Method - 图论证明法]]"]
question_types: ["proof"]
difficulty: 1
difficulty_basis: "Total indegree nine differs from total outdegree eight, violating directed edge counting."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 2
---
# Q-2021-FINAL2-P05-d

## Source

![[knowledge_base/past_paper/2021-final-part-2.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2021-final-part-2.pdf#page=4]]

## Question

A directed graph with 5 vertices, $v_1,v_2,v_3,v_4$ and $v_5$.

- In-degree of $v_1=1$, out-degree of $v_1=3$.
- In-degree of $v_2=2$, out-degree of $v_2=1$.
- In-degree of $v_3=3$, out-degree of $v_3=2$.
- In-degree of $v_4=1$, out-degree of $v_4=1$.
- In-degree of $v_5=2$, out-degree of $v_5=1$.

Shared context: [[STEM-2021-FINAL2-P05 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2021-final-part-2.pdf#page=4|physical PDF page 4]].

> (d) None. The sum of in-degrees is different with the sum of out-degrees.

## Supplementary Explanation

**Answer.** No such directed graph exists.

**Derivation/proof.** Each directed edge contributes exactly one to total outdegree and exactly one to total indegree, including a loop if loops were allowed. Here indegrees sum to 1+2+3+1+2=9, but outdegrees sum to 3+1+2+1+1=8. They would both have to equal the number of edges, so the incompatible totals rule out every graph convention.

The contradiction is that both totals must equal the number of edges.

## Connections

- [[Subtopic - Graphs - 图论基础]]
- [[Graph Connectivity - 图连通性]]
- [[Graph Proof Method - 图论证明法]]
