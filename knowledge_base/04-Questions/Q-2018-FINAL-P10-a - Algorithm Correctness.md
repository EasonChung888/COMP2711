---
id: "Q-2018-FINAL-P10-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 14
solution_page: [15]
question_number: "10(a)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Algorithm Correctness - 算法正确性]]"]
methods: ["[[Algorithm Trace and Invariant Method - 算法跟踪与不变量方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Tracing the supplied two-term inner loop computes each of six output entries without extra matrix theory."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P10-a

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=14]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=15]]

## Question

a) Compute the output of the algorithm for input: $A=\begin{pmatrix}-1&1\\5&0\end{pmatrix}$, $B=\begin{pmatrix}3&1&2\\0&1&4\end{pmatrix}$.

Shared context: [[STEM-2018-FINAL-P10 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-final.pdf#page=15|physical PDF page 15]].

$$C=\begin{pmatrix}-3&0&2\\15&5&10\end{pmatrix}.$$

## Supplementary Explanation

**Answer.** $C=\begin{pmatrix}-3&0&2\\15&5&10\end{pmatrix}$.

**Derivation/proof.** The inner loop runs over $k=1,2$. Row 1 gives $C[1,1]=(-1)3+1\cdot0=-3$, $C[1,2]=(-1)1+1\cdot1=0$, $C[1,3]=(-1)2+1\cdot4=2$. Row 2 gives $C[2,1]=5\cdot3+0\cdot0=15$, $C[2,2]=5\cdot1+0\cdot1=5$, $C[2,3]=5\cdot2+0\cdot4=10$. These six loop traces form the returned array.

The result has dimensions $2\times3$.

For example, the first matrix entry starts with $C_{11}=(-1)3+1\cdot0=-3$, and the final entry is $C_{23}=5\cdot2+0\cdot4=10$. Each row-column dot product uses matching inner indices.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Algorithm Correctness - 算法正确性]]
- [[Algorithm Trace and Invariant Method - 算法跟踪与不变量方法]]
