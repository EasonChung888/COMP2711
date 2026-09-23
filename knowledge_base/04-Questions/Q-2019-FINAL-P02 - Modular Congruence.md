---
id: "Q-2019-FINAL-P02"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 4
solution_page: [4]
question_number: "2"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Three pairwise coprime moduli require separate partial-product inverses before reducing modulo 630."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 4
---
# Q-2019-FINAL-P02

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=4]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=4]]

## Question

Solve the following system of linear congruences by the Chinese remainder theorem. Show all steps except the extended Euclidean algorithm.

$$\begin{cases}x\equiv4\pmod9\\x\equiv8\pmod{14}\\x\equiv3\pmod5.\end{cases}$$

## 中文解析

先确认三个模数两两互质，再用总乘积除以各模数得到部分乘积。每个部分乘积都需要在对应模数下取逆，构造出仅对该方程贡献指定余数的项，最后相加并约模六百三十。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** $x\equiv148\pmod{630}$.

**Derivation/proof.** The moduli 9,14,5 are pairwise coprime and have product $M=630$. Partial products are $M_1=70,M_2=45,M_3=126$. Their respective inverses are 4,5,1 because $70\cdot4\equiv1\pmod9$, $45\cdot5\equiv1\pmod{14}$, and $126\equiv1\pmod5$. CRT gives $x\equiv4\cdot70\cdot4+8\cdot45\cdot5+3\cdot126=3298\equiv148\pmod{630}$. Check $148=16\cdot9+4=10\cdot14+8=29\cdot5+3$. CRT ensures uniqueness modulo 630.

### 中文解答

**推导。** 模数 $9,14,5$ 两两互素，总模数 $M=9\cdot14\cdot5=630$。部分乘积是 $M_1=70,M_2=45,M_3=126$。分别求逆可取 $b_1=4,b_2=5,b_3=1$，因为 $70\cdot4=280\equiv1\pmod9$、$45\cdot5=225\equiv1\pmod{14}$、$126\equiv1\pmod5$。中国剩余定理给

$$x\equiv4\cdot70\cdot4+8\cdot45\cdot5+3\cdot126\cdot1=3298\equiv148\pmod{630}.$$

回代核对 $148=16\cdot9+4=10\cdot14+8=29\cdot5+3$，三个余数全部正确。全部整数解为 $148+630k$，$k\in\mathbb Z$；两两互素保证模 $630$ 唯一。

## Common Mistakes

- 在总模数下求部分乘积的逆元。
- 把最终解的周期写成三个模数的和。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
