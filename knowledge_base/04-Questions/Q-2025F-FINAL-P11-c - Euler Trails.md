---
id: "Q-2025F-FINAL-P11-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 19
question_number: "11(c)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Euler Trails - 欧拉通路]]"]
methods: ["[[Euler Degree Method - 欧拉度数方法]]"]
question_types: ["calculation"]
difficulty: 4
difficulty_basis: "Use odd-degree parity to force a duplicated A–F path and prove the minimum by enumerating short candidates."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [20]
marks: 5
---
# Q-2025F-FINAL-P11-c

## Source

[[2025 Fall Final]]; printed item 11(c); 5 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=19]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=20]]

## Question

(c) [5 points] In the following graph, find the length of the shortest tour so that the postman can traverse every edge at least once and return to the starting point.

![[knowledge_base/06-Audit/figures/2025F-FINAL-P11-c-weighted.png]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=20|physical PDF page 20]].

(c) The graph is not Eulerian since two vertices have odd degrees $(A,F)$. To make it Eulerian, we need to add the minimum weight of duplicate edges to pair up the odd-degree vertices. The shortest path between $AF$ is $A\to B\to F$ with costs of 5+5.

The shortest tour is:
$$H\to G\to C\to F\to D\to C\to A\to D\to B\to A\to B\to F\to E\to B\to F\to H$$
Total weight calculation:
$$\text{Total}=7\cdot5+4+2\cdot6+5\cdot7=86.$$
Thus, the shortest tour length is 86.

## Supplementary Explanation

**Answer.** The shortest closed tour has length $86$.

**Derivation/proof.** Read the graph edge by edge: $AB=AC=AD=BD=BF=5$, $BE=DF=6$, $CD=CF=CG=EF=GH=7$ and $FH=4$. The total original edge weight is $5\cdot5+2\cdot6+5\cdot7+4=76$. Vertex degrees are $A:3,B:4,C:4,D:4,E:2,F:5,G:2,H:2$; only $A,F$ are odd. A closed tour enters and leaves each vertex equally often. Consequently its repeated-edge multigraph must have exactly $A,F$ odd. The component containing $A$ must also contain $F$, because each component has an even number of odd-degree vertices. Thus the repeated edges contain an $A$–$F$ path.

There is no direct $AF$ edge. Two-edge paths through $B,C,D$ have lengths $5+5=10$, $5+7=12$ and $5+6=11$. Any path of at least three edges has length at least 12, since every edge weighs at least four. The shortest path is therefore $ABF$, of weight ten. Every closed tour has length at least $76+10=86$.

Duplicate $AB$ and $BF$. Every degree is now even and the graph remains connected, so an Euler circuit exists. The explicit tour $H,G,C,F,D,C,A,D,B,A,B,F,E,B,F,H$ uses every original edge at least once and repeats exactly $AB,BF$. Its weight is 86, attaining the lower bound and proving optimality.

## Connections

- [[Topic - Graphs - 图论]]
- [[Subtopic - Graphs - 图论基础]]
- [[Euler Trails - 欧拉通路]]
- [[Euler Degree Method - 欧拉度数方法]]

Use odd-degree parity to force a duplicated A–F path and prove the minimum by enumerating short candidates.
