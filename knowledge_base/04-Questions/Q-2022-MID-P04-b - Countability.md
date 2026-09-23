---
id: "Q-2022-MID-P04-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 2
question_number: "4(b)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]","[[Set Operations - 集合运算]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]","[[Set Identity Method - 集合恒等式方法]]"]
question_types: ["construction"]
difficulty: 2
difficulty_basis: "Attach a countably infinite disjoint natural-number set to an uncountable negative interval."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
---
# Q-2022-MID-P04-b

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=2]]

## Question

Countable infinite

Shared context: [[STEM-2022-MID-P04 - Shared Problem Prompt]].

## 中文解析

把自然数集加到一个与它不相交的不可数负区间上，再减去整个负区间，就恰好留下自然数。两个输入都不可数，而余下集合既无限又可列举，符合“可数无限”的要求。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $A=(-\infty,-1)\cup\mathbb N,B=(-\infty,-1)$, so $A-B=\mathbb N$.

**Derivation/proof.** The negative interval B is uncountable, and A contains it so is also uncountable. Natural numbers do not lie below −1, so the two parts of A are disjoint. Removing B therefore leaves exactly the naturals, a countably infinite set. This works whether zero belongs to the convention for naturals or not.

### 中文解答

**推导。** 取 $A=(-\infty,-1)\cup\mathbb N$，$B=(-\infty,-1)$。负区间不可数，$A$ 又包含它，所以两者都不可数。自然数不落在这个负区间内，两个部分不相交，减去 $B$ 正好剩 $A-B=\mathbb N$，可数且无限。自然数是否含零不影响不相交性和此结论。

## Common Mistakes

- 留下空集却称为可数无限。
- 让附加集合与被减集合重叠而未检查差集。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Set Operations - 集合运算]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]
- [[Set Identity Method - 集合恒等式方法]]
