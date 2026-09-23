---
id: "Q-2020-FINAL1-P04-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-1.pdf"
source_page: 3
question_number: "4(b)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "CRT gives residue twenty-three modulo thirty before a bounded progression count."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 4
---
# Q-2020-FINAL1-P04-b

## Source

![[knowledge_base/past_paper/2020-final-part-1.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-1.pdf#page=3]]

## Question

$n\equiv1\pmod2$, $n\equiv2\pmod3$, and $n\equiv3\pmod5$?

Shared context: [[STEM-2020-FINAL1-P04 - Shared Problem Prompt]].

## 中文解析

先把三个同余合并成模三十的一类，再数范围内的等差数列。符合条件的代表元是二十三，最后一个是九百八十三，对应 k 从零到三十二；端点个数应多加一。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $33$.

**Derivation/proof.** The last condition gives residues 3,8,13,18,23,28 modulo 30. Requiring oddness leaves 3,13,23; requiring remainder 2 modulo 3 leaves only 23. As 2,3,5 are pairwise coprime this is the unique CRT class: $n=23+30k$. The range imposes $0\le k\le32$, giving 33 integers (last 983).

### 中文解答

**推导。** 满足模五余三的模三十代表为 $3,8,13,18,23,28$；再满足模二余一，只剩 $3,13,23$；这三者中模三余二的只有 $23$。因为 $2,3,5$ 两两互素，CRT保证全部解为唯一类 $n=23+30k$。范围 $0\le n<1000$ 强迫整数 $0\le k\le32$，共 $32-0+1=33$ 个，最后一个为 $23+30\cdot32=983$。

## Common Mistakes

- 认为三个余数可直接相加。
- 把 k 的最大值三十二当成数量。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Modular Congruence - 同余]]
- [[Counting Principles - 计数原理]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Counting Method - 计数方法]]
