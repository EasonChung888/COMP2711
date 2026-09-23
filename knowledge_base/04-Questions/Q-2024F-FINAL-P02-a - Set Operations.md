---
id: "Q-2024F-FINAL-P02-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 5
question_number: "2(a)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Set Operations - 集合运算]]"]
methods: ["[[Set Identity Method - 集合恒等式方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Prove both containments by sending any member of either set through the union-into-intersection premise."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
marks: 2
---
# Q-2024F-FINAL-P02-a

## Source

[[2024 Fall Final]]; printed item 2(a); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=5]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=6]]

## Question

(a) Prove or disprove that if $(A\cup B)\subseteq(A\cap B)$, then $A=B$.
Note that one approach can be showing that $A\subseteq B$ and $B\subseteq A$, which means that they have to be equal.

## 中文解析

通常交集包含于并集，题设给了反向包含。任意一侧元素先进入并集，再被迫进入交集，从而也属于另一侧，两个方向完全对称。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 命题为真，$A=B$。

**推导。** 任取 $x\in A$，则按并集定义 $x\in A\cup B$。由题设包含关系，$x\in A\cap B$，所以按交集定义 $x\in B$；因此 $A\subseteq B$。再任取 $x\in B$，同理先有 $x\in A\cup B$，再有 $x\in A\cap B$，故 $x\in A$，于是 $B\subseteq A$。双向包含推出 $A=B$，包含空集情形在内。

## Common Mistakes

- 题设包含方向比通常关系更强，不能仅复述交集包含于并集。
- 只证 $A\subseteq B$ 不足够，需补对称方向。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]

- [[Set Operations - 集合运算]]
- [[Set Identity Method - 集合恒等式方法]]

Prove both containments by sending any member of either set through the union-into-intersection premise.
