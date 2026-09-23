---
id: "Q-2025F-MID-P03-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 10
question_number: "3(a)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Set Operations - 集合运算]]"]
methods: ["[[Set Identity Method - 集合恒等式方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Prove subset containment by following an arbitrary intersection element."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [11]
marks: 2
---
# Q-2025F-MID-P03-a

## Source

[[2025 Fall Midterm]]; printed item 3(a); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=10]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=11]]

## Question

(a) [2 points] Assume $A\subseteq C$ and $B\subseteq C$. Use direct proof to prove that $A\cap B\subseteq C$.

## 中文解析

直接证明只需从交集的任意元素开始，使用其中一个已知包含关系。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $A\cap B\subseteq C$。

**推导。** 任取 $x\in A\cap B$，由 intersection 定义有 $x\in A$ 且 $x\in B$。因为 $A\subseteq C$，从 $x\in A$ 得 $x\in C$。所以交集中的每个元素都在 $C$ 中，按 subset 定义得到 $A\cap B\subseteq C$。也可使用 $B\subseteq C$ 完成同一推理；两个前提同时给出，但这项结论实际上只需其中一个。空交集时包含关系亦为空真。

## Common Mistakes

- 不能由某一个元素属于 $C$ 就得集合包含，必须任取交集元素。
- 包含关系不要求严格包含，三集合相等也满足题设。

## Connections

- [[Topic - Sets and Functions - 集合与函数]]
- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Set Operations - 集合运算]]
- [[Set Identity Method - 集合恒等式方法]]

Prove subset containment by following an arbitrary intersection element.
