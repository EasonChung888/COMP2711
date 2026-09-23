---
id: "Q-2025F-FINAL-P06"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 10
question_number: "6"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Remove a redundant modulus and explicitly construct all three CRT basis terms."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [10,11]
marks: 8
---
# Q-2025F-FINAL-P06

## Source

[[2025 Fall Final]]; printed item 6; 8 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=10]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=10]] ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=11]]

## Question

Use Chinese Remainder Theorem to solve the following system of congruences:
$$x\equiv1\pmod2,\quad x\equiv1\pmod3,\quad x\equiv3\pmod4,\quad x\equiv1\pmod5.$$
You must show all the steps. If you just write down your answer, you will get 0 points even if the answer is correct.
Hint: Note that one of the above congruences is redundant and can be omitted.

## 中文解析

模四余三已经保证奇数，删去模二条件后剩下三个两两互素模数。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $x\equiv31\pmod{60}$。

**推导。** $x\equiv3\pmod4$ 蕴含 $x\equiv1\pmod2$，所以模二条件冗余。剩余模数三、四、五两两互素，乘积 $M=60$。CRT 基础因子为 $M_1=20,M_2=15,M_3=12$。其对应逆元分别为二、三、三，因为 $20\cdot2\equiv1\pmod3$、$15\cdot3\equiv1\pmod4$、$12\cdot3\equiv1\pmod5$。于是 $x\equiv1\cdot20\cdot2+3\cdot15\cdot3+1\cdot12\cdot3=211\equiv31\pmod{60}$。回验三十一模二、三、四、五分别为一、一、三、一，全部满足；CRT 给出模六十的唯一类。

## Common Mistakes

- 直接把四个模数相乘得一百二十会忽视二与四不互素。
- 余数三是模四那一项的系数，不能误放到模三的基础项。

## Connections

- [[Topic - Number Theory - 数论]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Remove a redundant modulus and explicitly construct all three CRT basis terms.
