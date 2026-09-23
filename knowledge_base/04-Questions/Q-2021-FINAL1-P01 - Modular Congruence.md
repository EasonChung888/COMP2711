---
id: "Q-2021-FINAL1-P01"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2021-final-part-1.pdf"
source_page: 1
question_number: "1"
year: 2021
term: "spring"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 4
difficulty_basis: "CRT must encode the final five positions and the overwrite order must be checked afterwards."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
marks: 10
---
# Q-2021-FINAL1-P01

## Source

![[knowledge_base/past_paper/2021-final-part-1.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2021-final-part-1.pdf#page=1]]

## Question

You are constructing a string of $n$ digits by the following procedure.

1. Set all the $n$ digits to 0.
2. For every $x_1$-th digit, replace it by 1.
3. For every $x_2$-th digit, replace it by 2.
4. For every $x_3$-th digit, replace it by 3.

Below is an example with $n=15,x_1=3,x_2=5$ and $x_3=7$.

“001021301201032”

Suppose $x_1=31,x_2=43$ and $x_3=53$. What is the minimum value $n$ so that the string ends with “31020”?

## 中文解析

末尾五位对应 n-4 到 n，不是从零编号直接套余数。三个非零数字给出同余方程，但还要检查后来的替换不会覆盖前面的数字，以及两个零位没有被任何规则命中。最小正 CRT 代表元通过这五位核验后才是答案。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $n=18448$.

**Derivation/proof.** The 3 at n−4 requires n≡4 mod 53; the 1 at n−3 requires n≡3 mod 31; the 2 at n−1 requires n≡1 mod 43. The pairwise-coprime modulus product is 70649. For partial products 2279,1643,1333 the inverses modulo 31,43,53 are respectively 2,24,20: their products have remainder one. CRT gives n≡3·2·2279+1·24·1643+4·20·1333=159746≡18448. Check positions 18444,…,18448: their residues modulo (31,43,53) are (30,40,0),(0,41,1),(1,42,2),(2,0,3),(3,1,4). Thus overwrite precedence produces exactly 31020, including both zeros. Every valid n must be in this CRT class, whose least positive representative is 18448.

### 中文解答

**推导。** 末五位的位置依次为 $n-4,n-3,n-2,n-1,n$。其中三要求 $53\mid n-4$，一要求 $31\mid n-3$，二要求 $43\mid n-1$，因此必要同余为 $n\equiv3\pmod{31}$、$n\equiv1\pmod{43}$、$n\equiv4\pmod{53}$。三个模数两两互素，乘积 $M=70649$，部分乘积为 $M_1=2279,M_2=1643,M_3=1333$。对应逆元 $2,24,20$ 可乘回验证：$4558=147\cdot31+1$，$39432=917\cdot43+1$，$26660=503\cdot53+1$。由中国剩余定理，

$$n\equiv3\cdot2\cdot2279+1\cdot24\cdot1643+4\cdot20\cdot1333=159746\equiv18448\pmod{70649}.$$

还须检查零位与覆盖次序。$18444$ 至 $18448$ 对 $(31,43,53)$ 的余数依次是 $(30,40,0),(0,41,1),(1,42,2),(2,0,3),(3,1,4)$，故依次得到 $3,1,0,2,0$，没有后续替换破坏一或二。所有合格长度都在这个同余类，最小正代表 $18448$ 已满足五位条件，因此它就是最小答案。

## Common Mistakes

- 只解三个同余而不检查两个零位。
- 忽略 3 会覆盖 2 与 1 的执行顺序。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
