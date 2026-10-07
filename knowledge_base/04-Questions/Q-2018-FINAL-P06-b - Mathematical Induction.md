---
id: "Q-2018-FINAL-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 8
solution_page: [9]
question_number: "6(b)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]","[[Topic - Graphs - 图论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]","[[Subtopic - Graphs - 图论基础]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]","[[Graph Connectivity - 图连通性]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]","[[Graph Proof Method - 图论证明法]]","[[Proof Method - 证明方法]]"]
question_types: ["classification"]
difficulty: 3
difficulty_basis: "The construction preserves triangles but fails to cover every two-dense graph of the next order."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P06-b

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=8]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=9]]

## Question

(b) Since the statement is wrong, the proof must be wrong as well. Choose one of the following statements to explain why the proof is wrong, and explain it.

1. There is an error in the base case.
2. The proof requires another base case, which has not been proven.
3. In the inductive step, $G'$ is wrongly constructed; sometimes it is not a two-dense graph.
4. In the inductive step, $G'$ may not always have a triangle subgraph.
5. In the inductive step, $G'$ is correct and always has a triangle subgraph, but that does not show $P(k+1)$.

Shared context: [[STEM-2018-FINAL-P06 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-final.pdf#page=9|physical PDF page 9]].

The correct choice is (5). Not all graphs with $k+1$ vertices satisfying $\deg(v)\ge2$ can be constructed using the procedure in the inductive step. However, $P(k+1)$ is a statement on all such graphs. Therefore, $P(k+1)$ being true does not follow from $G'$ containing a triangle.

## Supplementary Explanation

**Answer.** Choice 5.

**Derivation/proof.** The extension really is two-dense and retains the old triangle. However $P(k+1)$ quantifies over every two-dense graph with $k+1$ vertices, not merely the outputs of that extension. For example, $C_4$ cannot arise by adding a vertex and edges to a triangle, because such an operation never deletes the triangle. The induction step covers only a proper subclass and so cannot establish the universal statement.

The base case and the constructed graph are valid, so choices 1, 3, and 4 misidentify the issue. Adding another base case would not make the construction cover every graph either.

Choose $5$, the option identifying the missing universal coverage of the claimed induction extension. The step only constructs a special family; it does not establish the property for all $k+1$-vertex graphs, so it cannot justify the universal claim.

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Subtopic - Graphs - 图论基础]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Mathematical Induction - 数学归纳法]]
- [[Graph Connectivity - 图连通性]]
- [[Proof Strategy - 证明策略]]
- [[Induction Proof Method - 归纳证明法]]
- [[Graph Proof Method - 图论证明法]]
- [[Proof Method - 证明方法]]
