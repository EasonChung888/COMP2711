---
id: "Q-2025F-FINAL-P11-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 19
question_number: "11(b)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Graphs - 图论]]"]
subtopics: ["[[Subtopic - Graphs - 图论基础]]"]
concepts: ["[[Graph Connectivity - 图连通性]]"]
methods: ["[[Graph Proof Method - 图论证明法]]"]
question_types: ["construction"]
difficulty: 3
difficulty_basis: "Construct a labeled simple graph and independently count every vertex degree."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [20]
marks: 4
---
# Q-2025F-FINAL-P11-b

## Source

[[2025 Fall Final]]; printed item 11(b); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=19]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=20]]

## Question

(b) [4 points] Draw the simple graph $G$ with 5 vertices and the following degrees $\{3,3,2,1,1\}$.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=19|physical PDF page 19]], [[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=20|physical PDF page 20]].

(b) Here is a simple graph with the following degrees.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=20]]

## Supplementary Explanation

**Answer.** One suitable edge set is $\{AB,AC,BC,AD,BE\}$.

**Derivation/proof.** Form the triangle on $A,B,C$ with edges $AB,AC,BC$, giving all three vertices degree two. Add a new vertex $D$ adjacent only to $A$, and a new vertex $E$ adjacent only to $B$. Then $\deg(A)=3,\deg(B)=3,\deg(C)=2$, while $\deg(D)=1$ and $\deg(E)=1$. This is the requested degree multiset. Every edge joins distinct vertices and no edge is repeated, so the graph is simple. The construction matches the official triangle with two leaves.

~~~mermaid
graph TD
 A --- B
 A --- C
 B --- C
 A --- D
 B --- E
~~~

## Connections

- [[Topic - Graphs - 图论]]
- [[Subtopic - Graphs - 图论基础]]
- [[Graph Connectivity - 图连通性]]
- [[Graph Proof Method - 图论证明法]]

Construct a labeled simple graph and independently count every vertex degree.
