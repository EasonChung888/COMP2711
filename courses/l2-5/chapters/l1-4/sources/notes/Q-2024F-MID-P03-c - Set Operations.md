---
id: "Q-2024F-MID-P03-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 7
question_number: "3(c)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]","[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Set Operations - 集合运算]]","[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Set Identity Method - 集合恒等式方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Use element membership, De Morgan and distributivity to prove the set difference identity without a Venn diagram."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [7]
marks: 4
---
# Q-2024F-MID-P03-c

## Source

[[2024 Fall Midterm]]; printed item 3(c); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=7]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=7]]

## Question

(c) Prove that $A-(B\cap C)=(A-B)\cup(A-C)$. You are Not allowed to use Venn diagram to prove it.

## 中文解析

要证明两个集合相同，取任意元素并逐步转换其属于左侧的条件。交集外意味着不在 B 或不在 C，再把属于 A 的条件分配到两边。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $A-(B\cap C)=(A-B)\cup(A-C)$。

**推导。** 任取元素 x。$x\in A\setminus(B\cap C)$ 当且仅当 $x\in A\land\neg(x\in B\land x\in C)$。由 De Morgan，这等价于 $x\in A\land(x\notin B\lor x\notin C)$；再由分配律等价于 $(x\in A\land x\notin B)\lor(x\in A\land x\notin C)$，也就是 $x\in(A\setminus B)\cup(A\setminus C)$。各步均为双向等价且 x 任意，因此两集合所有元素完全相同，无需 Venn 图。

## Common Mistakes

- 交集的否定变析取，不能继续写不属于 B 且不属于 C。
- 只证一个方向的包含关系不足以推出集合相等，应保证每步双向。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Subtopic - Propositional Logic - 命题逻辑]]

- [[Set Operations - 集合运算]]
- [[Logical Equivalence - 逻辑等价]]
- [[Set Identity Method - 集合恒等式方法]]

Use element membership, De Morgan and distributivity to prove the set difference identity without a Venn diagram.
