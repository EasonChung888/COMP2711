---
id: "Q-2022-MID-P04-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 2
question_number: "4(a)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]","[[Set Operations - 集合运算]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]","[[Set Identity Method - 集合恒等式方法]]"]
question_types: ["construction"]
difficulty: 1
difficulty_basis: "A single included endpoint can be the difference of two uncountable intervals."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
---
# Q-2022-MID-P04-a

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=2]]

## Question

Finite

Shared context: [[STEM-2022-MID-P04 - Shared Problem Prompt]].

## 中文解析

用两个只差一个端点的区间，输入集合都含不可数的开区间，差集却只有一个点。检查右端点二在两边都不包括，避免把差集误写成两个端点。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $A=[1,2),B=(1,2)$, so $A-B=\{1\}$.

**Derivation/proof.** Both intervals contain the open interval (1,2), which is uncountable by an affine bijection with (0,1). Their only membership difference is the endpoint 1, included in A and excluded from B; the endpoint 2 is in neither. Hence A−B is exactly the finite singleton {1}.

### 中文解答

**推导。** 取 $A=[1,2)$、$B=(1,2)$。两者都包含不可数开区间 $(1,2)$，所以都是不可数集合。它们只在端点一的成员资格上不同：一属于 $A$ 不属于 $B$；二两边都不属于。于是 $A-B=\{1\}$，是有限单元素集，满足要求。

## Common Mistakes

- 把二也加进差集。
- 选择一个输入为有限集，违反两者不可数。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Set Operations - 集合运算]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]
- [[Set Identity Method - 集合恒等式方法]]
