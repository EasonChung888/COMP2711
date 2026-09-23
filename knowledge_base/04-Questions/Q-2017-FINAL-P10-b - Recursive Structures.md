---
id: "Q-2017-FINAL-P10-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 14
solution_page: [14]
question_number: "10(b)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]","[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Recursive Structures - 递归结构]]","[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Structural Induction Method - 结构归纳法]]","[[Induction Proof Method - 归纳证明法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "A single invariant survives all three allowed increments to the first coordinate."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 4
---
# Q-2017-FINAL-P10-b

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=14]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=14]]

## Question

(b) Use structural induction to prove that $a\le2b$ whenever $(a,b)\in S$.

Shared context: [[STEM-2017-FINAL-P10 - Shared Problem Prompt]].

## 中文解析

性质应沿所有生成方式保持。基例零零成立后，把三条规则统一写成第一坐标增加 j，其中 j 为零到二；第一坐标最多加二，右边因为第二坐标加一也增加二，所以不等式保持。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 14. The Chinese derivation expands the reasoning.

**Answer.** Every generated pair satisfies $a\le2b$.

**Derivation/proof.** The basis pair satisfies $0\le2\cdot0$. Suppose $(a,b)$ satisfies $a\le2b$. Every constructor produces $(a+j,b+1)$ for $j\in\{0,1,2\}$. Then $a+j\le2b+2=2(b+1)$. Thus every constructor preserves the invariant. Since $S$ contains only pairs finitely generated from the basis, structural induction proves the claim.

### 中文解答

**推导。** 基础 $(0,0)$ 满足 $0\le2\cdot0$。设已生成的 $(a,b)$ 满足 $a\le2b$，三种构造结果统一写为 $(a+j,b+1)$，其中 $j\in\{0,1,2\}$。则 $a+j\le2b+2=2(b+1)$，因此每条规则都保留性质。由于 $S$ 只含从基础有限次应用这些规则产生的元素，结构归纳证明每个 $(a,b)\in S$ 均有 $a\le2b$。

## Common Mistakes

- 只验证增加二的具体数值例子而未给一般归纳。
- 假设所有整数对都来自递归集合。

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Subtopic - Induction - 数学归纳法]]
- [[Recursive Structures - 递归结构]]
- [[Mathematical Induction - 数学归纳法]]
- [[Structural Induction Method - 结构归纳法]]
- [[Induction Proof Method - 归纳证明法]]
