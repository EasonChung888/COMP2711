---
id: "STEM-2018-FINAL-P06"
note_type: "stem"
schema_version: 1
course: "COMP2711"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 8
---
# STEM-2018-FINAL-P06 - Shared Problem Prompt

## Shared printed wording

In this question, we consider simple graphs $G=(V,E)$ with $|V|\ge3$ where all vertices satisfy $deg(v)\ge2$. Let us call them two-dense graphs.

Consider the following statement:

All two-dense graphs have a triangle subgraph (a cycle of length 3).

Here is an inductive proof of the statement.

Proof. Let the proposition $P(n)$ be the above statement for $|V|=n$. We will prove $P(n)$ is true for $n\ge3$.

Base case ($P(3)$): For the two-dense graph $G$ with three vertices, each vertex has a degree of 2, so $G$ is simply a triangle and has itself as a subgraph.

Inductive step: Suppose $P(k)$ is true, i.e. any two-dense graph with $k$ vertices has a triangle subgraph. Extend any such graph $G$ to obtain $G'=(V',E')$ by adding one vertex and at least two new edges from the new vertex to any different vertices in $|V|$. $G'$ is a simple graph with $k+1$ vertices and all vertices satisfy $deg(v)\ge2$, so $G'$ is two-dense. $G'$ contains $G$ as a subgraph, so using the inductive assumption, $G'$ also has a triangle subgraph. Therefore, $P(k+1)$ is true.

![[knowledge_base/past_paper/2018-final.pdf#page=8]]
