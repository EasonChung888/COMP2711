---
id: "Q-2020-MID-P06"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 3
question_number: "6"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Five Euclidean divisions and back substitution give the inverse coefficient seventeen."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3,4]
marks: 10
---
# Q-2020-MID-P06

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=3]] ![[knowledge_base/past_paper/2020-midterm.pdf#page=4]]

## Question

Use the extended Euclid algorithm to find the inverse of $53\pmod{180}$. Show the steps of the algorithm.

## 中文解析

欧几里得算法先确认最大公因数为一，再回代把一写成五十三与一百八十的线性组合。五十三的系数十七就是模逆元，最后乘积余一可独立检验回代符号。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $53^{-1}\equiv17\pmod{180}$.

**Derivation/proof.** Euclidean divisions: $180=3\cdot53+21$, $53=2\cdot21+11$, $21=11+10$, $11=10+1$, $10=10\cdot1$. Back substitution gives $1=11-10=2\cdot11-21=2\cdot53-5\cdot21=17\cdot53-5\cdot180$. Thus the coefficient of 53 is the inverse. Check $53\cdot17=901=5\cdot180+1$.

### 中文解答

**推导。** 欧几里得除法依次为 $180=3\cdot53+21$，$53=2\cdot21+11$，$21=11+10$，$11=10+1$，$10=10\cdot1+0$，故最大公因数为 $1$。回代：

$$1=11-10=11-(21-11)=2\cdot11-21$$
$$=2(53-2\cdot21)-21=2\cdot53-5\cdot21$$
$$=2\cdot53-5(180-3\cdot53)=17\cdot53-5\cdot180.$$

所以 $53^{-1}\equiv17\pmod{180}$。乘回核对 $53\cdot17=901=5\cdot180+1$，正确余一。原题要求的除法和回代各步均已展示。

## Common Mistakes

- 读取一百八十的系数负五作为答案。
- 只算 gcd 而没有回代求逆元。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
