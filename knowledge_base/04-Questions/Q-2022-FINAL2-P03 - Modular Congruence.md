---
id: "Q-2022-FINAL2-P03"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2022-final-part-2.pdf"
source_page: 2
question_number: "3"
year: 2022
term: "spring"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Elimination modulo eleven yields an invertible coefficient three and a unique residue pair."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
marks: 6
---
# Q-2022-FINAL2-P03

## Source

![[knowledge_base/past_paper/2022-final-part-2.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2022-final-part-2.pdf#page=2]]

## Question

Solve the following system of congruences:
$$5x+9y\equiv5\pmod{11},\qquad3x-4y\equiv2\pmod{11}.$$

## 中文解析

先把 x 系数统一后相减消元，得到四十七 y 模十一化成三 y。三的逆元为四，求出 y=9，再回代得到 x=9。最后必须检查两个原方程，而不只检查消元后的关系。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $x\equiv9\pmod{11},\ y\equiv9\pmod{11}$.

**Derivation/proof.** Multiply the first equation by 3 and the second by 5: 15x+27y≡15 and 15x−20y≡10. Subtract to obtain47y≡5, or3y≡5 mod 11. Since3·4≡1, y≡20≡9. Substitute in 3x−4y≡2 to get 3x≡38≡5, hence x≡9. Verify5·9+9·9=126≡5 and 3·9−4·9=−9≡2. The invertible coefficients show this residue pair is unique.

### 中文解答

**推导。** 在模十一下，把第一式乘三，第二式乘五，得到 $15x+27y\equiv15$ 和 $15x-20y\equiv10$。两式相减消去 $x$，给 $47y\equiv5$，化简为 $3y\equiv5\pmod{11}$。因 $3\cdot4=12\equiv1$，乘逆元四得 $y\equiv20\equiv9$。代回第二式，$3x\equiv2+4\cdot9=38\equiv5$，同样乘四得 $x\equiv9$。验证原式：$5\cdot9+9\cdot9=126\equiv5$，$3\cdot9-4\cdot9=-9\equiv2$。消元后两个系数三均可逆，因此模十一解对唯一，全部整数解为 $x=9+11s,y=9+11t$，$s,t\in\mathbb Z$。

## Common Mistakes

- 把负系数取余时丢掉符号。
- 只给一个未知数而未解完整系统。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
