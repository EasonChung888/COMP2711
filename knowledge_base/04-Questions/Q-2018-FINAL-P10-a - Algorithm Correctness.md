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

## 中文解析

本题可直接跟踪已给循环，不需要额外线性代数定理。每个输出元素都先清零，然后累加两次 A 与 B 对应元素的乘积。第一行包含负一，尤其要检查第二、三列的加法符号。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 15. The Chinese derivation expands the reasoning.

**Answer.** $C=\begin{pmatrix}-3&0&2\\15&5&10\end{pmatrix}$.

**Derivation/proof.** The inner loop runs over $k=1,2$. Row 1 gives $C[1,1]=(-1)3+1\cdot0=-3$, $C[1,2]=(-1)1+1\cdot1=0$, $C[1,3]=(-1)2+1\cdot4=2$. Row 2 gives $C[2,1]=5\cdot3+0\cdot0=15$, $C[2,2]=5\cdot1+0\cdot1=5$, $C[2,3]=5\cdot2+0\cdot4=10$. These six loop traces form the returned array.

### 中文解答

**推导。** 按内层循环逐项累计两个乘积。第一行：$C_{11}=(-1)3+1\cdot0=-3$，$C_{12}=(-1)1+1\cdot1=0$，$C_{13}=(-1)2+1\cdot4=2$。第二行：$C_{21}=5\cdot3+0\cdot0=15$，$C_{22}=5\cdot1+0\cdot1=5$，$C_{23}=5\cdot2+0\cdot4=10$。六个结果按行列放回，返回 $C=\begin{pmatrix}-3&0&2\\15&5&10\end{pmatrix}$，维度为 $2\times3$。

## Common Mistakes

- 逐元素相乘而不跟踪 k 循环。
- 忘记每个新输出位置先清零。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Algorithm Correctness - 算法正确性]]
- [[Algorithm Trace and Invariant Method - 算法跟踪与不变量方法]]
