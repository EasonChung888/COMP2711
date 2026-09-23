---
id: "Q-2025S-MID-P07"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf"
source_page: 11
question_number: "7"
year: 2025
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Factor an odd square minus one and exhibit a further factor of two in consecutive integers."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [11]
marks: 8
---
# Q-2025S-MID-P07

## Source

[[2025 Spring Midterm]]; printed item 7; 8 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=11]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=11]]

## Question

Prove that for any odd natural number $a$, $8\mid a^2-1$.

## 中文解析

奇数左右相邻的两个偶数提供四的因数，剩余的连续整数再提供一个二。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $8\mid a^2-1$。

**推导。** 任取奇自然数 $a$，可写 $a=2k+1$。于是 $a^2-1=(a-1)(a+1)=2k(2k+2)=4k(k+1)$。连续整数 $k,k+1$ 必有一个偶数，所以存在整数 $t$ 使 $k(k+1)=2t$。代回得 $a^2-1=8t$，这正是八整除该差的定义。$a=1$ 时 $k=0$，结果为零而八也整除零，边界没有例外。

## Common Mistakes

- 两个偶数的乘积只立即保证四整除，还须说明其中有额外的二因数。
- 整除零是合法的，不能排除最小奇数一。

## Connections

- [[Topic - Number Theory - 数论]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Factor an odd square minus one and exhibit a further factor of two in consecutive integers.
