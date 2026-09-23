---
id: "Q-2020-MID-P07"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 4
question_number: "7"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "A Bezout coefficient seven inverts ten before normalizing the negative residue."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 10
---
# Q-2020-MID-P07

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=4]]

Source correction: PDF page4 final back-substitution line prints 1=23·(−1)+10·7, whose right side is47. Expanding the immediately preceding 1=10−(23−10·2)·3 gives 1=23·(−3)+10·7. Correct the coefficient of23 to−3; the official inverse7 and solution x≡18(mod23) are correct.

## Question

Solve $10x+4\equiv0\pmod{23}$.

## 中文解析

先移项再用十的模二十三逆元七消去系数。负二十八需要加两个二十三化成十八；代回整除关系检验结果。求解同余方程应给整个同余类，而不只给一个普通等式。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $x\equiv18\pmod{23}$.

**Derivation/proof.** Move the constant to get $10x\equiv-4$. Since $23=2\cdot10+3$ and $10=3\cdot3+1$, back substitution gives $1=7\cdot10-3\cdot23$. Therefore multiply by 7: $x\equiv-28\equiv18\pmod{23}$. Check $10\cdot18+4=184=8\cdot23$. Every solution is $18+23k$ for integer k.

### 中文解答

**推导。** 先移项 $10x\equiv-4\pmod{23}$。因 $23=2\cdot10+3$、$10=3\cdot3+1$，回代 $1=10-3(23-2\cdot10)=7\cdot10-3\cdot23$，所以 $10$ 的模逆为 $7$。两边乘逆元得到 $x\equiv-28\equiv18\pmod{23}$，即全部解 $x=18+23k$，$k\in\mathbb Z$。代回 $10\cdot18+4=184=8\cdot23$，验证原式。印本回代末行把 $23$ 的系数误印为 $-1$，正确系数为 $-3$；逆元 $7$ 和最终解 $18$ 并未受影响。

## Common Mistakes

- 把十做实数除法。
- 把负二十八化余数时只加一个模数。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
