---
id: "Q-2024S-MID-P10"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 14
question_number: "10"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Apply CRT with moduli 3,5,7, compute three inverse weights and state the full integer residue class."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [14,15]
marks: 10
---
# Q-2024S-MID-P10

## Source

[[2024 Spring Midterm]]; printed item 10; 10 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=14]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=14]] ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=15]]

## Question

Find all the solutions in the set of integers to the following system of equations:
$$x\equiv2\pmod3,\qquad x\equiv4\pmod5,\qquad x\equiv3\pmod7.$$
Show all your calculations. You may use any facts and theorems taught in class.

## 中文解析

三个模数两两互素，所以 CRT 保证模乘积唯一。构造每个模数对应的权重，让它在本模数为一，在另外两个模数为零。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $x=59+105k$，$k\in\mathbb Z$。

**推导。** 总模数 $M=3\cdot5\cdot7=105$，部分乘积为 $M_1=35,M_2=21,M_3=15$。它们在模 $3,5,7$ 下的逆元分别为 $2,1,1$，因为 $35\cdot2\equiv1\pmod3$，$21\equiv1\pmod5$，$15\equiv1\pmod7$。故 $x\equiv2\cdot35\cdot2+4\cdot21+3\cdot15=269\equiv59\pmod{105}$。验算 $59$ 模三余二、模五余四、模七余三。CRT 的唯一性说明所有解且仅有 $59+105k$，允许任意正负整数 $k$。

## Common Mistakes

- 只给 $59$ 会遗漏无限多个整数解，必须写完整剩余类。
- 模运算里的除法必须通过相应逆元完成，不能直接除部分乘积。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]

- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Apply CRT with moduli 3,5,7, compute three inverse weights and state the full integer residue class.
