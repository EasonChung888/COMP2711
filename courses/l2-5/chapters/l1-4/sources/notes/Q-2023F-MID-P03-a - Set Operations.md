---
id: "Q-2023F-MID-P03-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf"
source_page: 7
question_number: "3(a)"
year: 2023
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Set Operations - 集合运算]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Set Identity Method - 集合恒等式方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "An assumed element of S lies in T by the union equality, contradicting the stipulated empty intersection."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [7]
marks: 4
---
# Q-2023F-MID-P03-a

## Source

[[2023 Fall Midterm]]; printed item 3(a); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=7]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=7]]

## Question

Let $S$ and $T$ denote two sets. Prove the following by contradiction:

If $S\cap T=\varnothing$ and $S\cup T=T$ then $S=\varnothing$.

## 中文解析

contradiction proof 应先假设结论不成立，即 S 有元素。并集等于 T 迫使这个元素也在 T 中，于是它落在原本为空的交集中；矛盾来自同时使用两个已知集合条件。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $S=\varnothing$。

**推导。**

1. 保留两条前提 $S\cap T=\varnothing$、$S\cup T=T$，为 proof by contradiction 假设结论相反，即 $S\ne\varnothing$。于是能选出某个元素 $x\in S$，并由并集定义得到 $x\in S\cup T$。
2. 用第二条前提把并集替换为 $T$，可得 $x\in T$。同一元素既在 $S$ 又在 $T$，于是 $x\in S\cap T$，与第一条前提的空交集矛盾。因此非空假设不能成立，必须 $S=\varnothing$。两个集合条件都在证明中实际使用，不能仅凭空交集就断言其中一个集合为空。

### English solution

**Answer.** $S=\varnothing$.

**Derivation/proof.** Assume $S\cap T=\varnothing$ and $S\cup T=T$, but suppose $S\ne\varnothing$. Then there is an element $x\in S$. It follows that $x\in S\cup T$, and the union equality implies $x\in T$. Hence $x\in S\cap T$, contradicting the premise that this intersection is empty. The assumption $S\ne\varnothing$ must therefore be false, proving the conclusion by contradiction.

## Common Mistakes

- 只用 S∩T=∅ 无法推出 S 为空。 / Disjointness alone is insufficient.
- 不能假设待证的 S=∅ 来开始反证。 / Assume its negation and derive a contradiction.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Subtopic - Inference and Proofs - 推理与证明]]

- [[Set Operations - 集合运算]]
- [[Proof Strategy - 证明策略]]
- [[Set Identity Method - 集合恒等式方法]]
- [[Proof Method - 证明方法]]

An assumed element of S lies in T by the union equality, contradicting the stipulated empty intersection.
