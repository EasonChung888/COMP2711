---
id: "Q-2019-MID-P10-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 12
solution_page: [12]
question_number: "10(b)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Moving the constant first and using seven as inverse of fifteen produces a negative residue to normalize."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 3
---
# Q-2019-MID-P10-b

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=12]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=12]]

## Question

(b) $15x+41\equiv18\pmod{104}$

Shared context: [[STEM-2019-MID-P10 - Shared Problem Prompt]].

## 中文解析

先把四十一移到右边，得到负二十三，再乘十五的逆元七。结果负一百六十一需要加两个模数，变成四十七。逆元关系是对称的，但不能在移项前遗漏常数。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 12. The Chinese derivation expands the reasoning.

**Answer.** $x=47$.

**Derivation/proof.** Subtract 41 to get $15x\equiv-23\pmod{104}$. Since 7 is inverse to 15, $x\equiv7(-23)=-161\equiv47\pmod{104}$. Check $15\cdot47+41=746=7\cdot104+18$. Thus 47 is the allowed representative.

### 中文解答

**推导。** 先移项 $15x\equiv-23\pmod{104}$。由于 $7$ 是 $15$ 的模逆，乘 $7$ 得 $x\equiv-161\equiv47\pmod{104}$，故范围内解为 $47$。核对 $15\cdot47+41=746=7\cdot104+18$，余数正好是题目的 $18$。

## Common Mistakes

- 把七与十五的逆元关系只当单向。
- 返回负一百六十一而不规范化。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
