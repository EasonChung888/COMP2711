---
id: "Q-2025S-MID-P08-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf"
source_page: 12
question_number: "8(b)"
year: 2025
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Reduce a noncoprime linear congruence, back-substitute Euclidean divisions and enumerate the full residue family."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
related_questions: ["[[Q-2025S-MID-P08-a - Modular Congruence]]"]
---
# Q-2025S-MID-P08-b

## Source

[[2025 Spring Midterm]]; printed item 8(b); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=12]]

Printed answer pages contain the defect below; correction/completion is independently derived: ![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=12]]

Source defect: Page 12 asserts the inverse of 14 modulo 23 is 5 but omits all extended Euclidean steps explicitly required by the prompt. The note independently supplies the division chain, back-substitution and full solution family.

Prerequisite context (editorial): [[Q-2025S-MID-P08-a - Modular Congruence]]. For positive d, $ad\equiv bd\pmod{cd}$ iff $a\equiv b\pmod c$. Here d=2 and c=23.

## Question

(b) Solve the following congruence. When finding the inverse, you must use the extended Euclidean algorithm and show the steps.
$$28x\equiv32\pmod{46}$$

## 中文解析

二十八和四十六不互素，先约去共同因数二，再求十四模二十三的逆元。

## Detailed Solution

Provenance: independently derived correction/completion; the printed defect is retained in Source.

### 中文解答

**答案。** $x\equiv11\pmod{23}$，即 $x=11+23t$，$t\in\mathbb Z$。

**推导。** 由 $46\mid28x-32$ 得到等价的 $23\mid14x-16$，故解 $14x\equiv16\pmod{23}$。extended Euclidean algorithm 的除法链为 $23=1\cdot14+9$，$14=1\cdot9+5$，$9=1\cdot5+4$，$5=1\cdot4+1$。回代：$1=5-4=2\cdot5-9=2\cdot14-3\cdot9=5\cdot14-3\cdot23$，所以十四的逆元是五。两边乘五得到 $x\equiv80\equiv11\pmod{23}$。全部整数解 $x=11+23t$ 代回有 $28x-32=276+644t=46(6+14t)$，故都满足原式；模四十六时为十一和三十四两类。

## Common Mistakes

- 二十八在模四十六下没有逆元，不能直接执行逆元消去。
- 最终模数是二十三；若用模四十六表示，必须保留两类解。

## Connections

- [[Topic - Number Theory - 数论]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Reduce a noncoprime linear congruence, back-substitute Euclidean divisions and enumerate the full residue family.

- Prerequisite / related: [[Q-2025S-MID-P08-a - Modular Congruence]]: 约去非互素同余的共同因数，正好应用前一题的双向约分。 For positive d, $ad\equiv bd\pmod{cd}$ iff $a\equiv b\pmod c$. Here d=2 and c=23.
