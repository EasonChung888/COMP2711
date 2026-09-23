---
id: "Q-2023S-MID-P03-1"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 6
question_number: "3(1)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Diagonal enumeration reaches every ordered natural-number pair at a finite stage."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
---
# Q-2023S-MID-P03-1

## Source

[[2023 Spring Midterm]]; printed item 3(1). No separate atomic mark allocation is printed.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=6]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=6]]

Printed prompt uses numerical labels 1–5; the answer switches to (a)–(e). This note retains the prompt label. The parent allocates 10 marks jointly.

## Question

1. $\mathbb N^2$

Shared printed context: ![[STEM-2023S-MID-P03 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

每个有序对可以按两坐标和的大小排列，固定坐标和时只有有限多项。这样所有有序对最终都会出现，说明二维自然数格点仍然可以被一条序列完整枚举。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\mathbb N^2$ 是 countably infinite，故选择 countable。

**推导。**

1. 按两坐标和 $s=a+b$ 从小到大排列自然数有序对 $(a,b)$。对每个固定的 $s$，满足条件的对只有有限多个，可以按第一坐标从小到大全部列出，再进入下一条 diagonal。
2. 每个有序对的坐标和都是某个有限自然数，所以这份按对角线扫描的序列最终必定列到它，没有遗漏；由此集合至多可数。固定一个合法第二坐标，让第一坐标依次取所有自然数，又得到无限多个不同有序对，所以集合无限可数。自然数是否包括零只改变最先几条对角线，不改变论证。

### English solution

**Answer.** Countable.

**Derivation/proof.** For each possible sum $s$, list all pairs $(a,b)\in\mathbb N^2$ with $a+b=s$. Each diagonal is finite; scanning the diagonals in increasing $s$ reaches every pair because each pair has a finite sum. This constructs an enumeration. There are infinitely many distinct pairs with one coordinate fixed, so the set is countably infinite. The argument works with either convention for whether 0 belongs to $\mathbb N$.

## Common Mistakes

- 认为二维自然数格点比一维自然数多就不可数，忽略了 diagonal enumeration。 / Diagonal enumeration reaches all pairs.
- 在每个固定第一坐标下先列完无限多第二坐标，会永远到不了下一行。 / Use finite diagonals rather than infinite rows.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]

- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Diagonal enumeration reaches every ordered natural-number pair at a finite stage.
