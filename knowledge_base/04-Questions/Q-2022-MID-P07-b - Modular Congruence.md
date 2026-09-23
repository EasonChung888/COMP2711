---
id: "Q-2022-MID-P07-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 3
question_number: "7(b)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "The outer power needs the inner exponent modulo four, obtained from even parity of 2022."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 5
---
# Q-2022-MID-P07-b

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=3]]

Source correction: Rendered PDF page3 Problem7(b) correctly asks for 3^2022 mod4, then the next intermediate statement prints 3^3022≡1(mod4). That occurrence of3022 should be2022. Since2022 is even, 3^2022≡1(mod4), and the official final value3 for 3^(3^2022) mod10 remains correct.

## Question

Calculate $3^{3^{2022}}\bmod10$. Show your steps.

## 中文解析

外层三的幂模十周期为四，所以只需算内层指数模四。三模四为负一，偶数二零二二次幂为一，因此外层指数形如四 t 加一，结果为三。十不是素数，不能直接套费马小定理。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $3$.

**Derivation/proof.** Modulo10, 3^4=81≡1, so the outer exponent only needs its residue modulo 4. Since 3≡−1 mod 4 and 2022 is even, 3^2022≡(−1)^2022=1 mod 4. Thus the exponent is 4t+1 and 3^(3^2022)≡(3^4)^t·3≡3 mod 10. The exponent is a power tower, not 3·2022 or 3^2022 as the entire expression.

### 中文解答

**推导。** 模十不是质数模，不能直接套费马小定理，但可直接算 $3^4=81\equiv1\pmod{10}$。因此外层指数只需知道模四余数。因 $3\equiv-1\pmod4$ 且 $2022$ 为偶数，$3^{2022}\equiv(-1)^{2022}=1\pmod4$，写成 $3^{2022}=4t+1$。于是 $3^{3^{2022}}=(3^4)^t\cdot3\equiv3\pmod{10}$。印本中途的 $3^{3022}$ 应为 $3^{2022}$；这里保留题目正确指数完成计算，最终余数三不变。

## Common Mistakes

- 把幂塔读成两个指数相乘。
- 对合数模十使用素数版费马定理。

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
