---
id: "Q-2023S-MID-P05"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 8
question_number: "5"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Normalize the two coefficients other than 1 with their modular inverses, then combine three pairwise coprime congruences."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [8]
marks: 13
---
# Q-2023S-MID-P05

## Source

[[2023 Spring Midterm]]; printed item 5; 13 marks.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=8]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=8]]

## Question

Solve this system of linear congruences:
$$x\equiv1\pmod3,\qquad4x\equiv1\pmod7,\qquad3x\equiv1\pmod{11}.$$

## 中文解析

三个模数两两互质，但应用 CRT 前要先处理四和三的系数。分别求模逆后得到 x 的余数，再构造各自只在一个模数下起作用的项，最终应写整个同余类而非一个数。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $x\equiv37\pmod{231}$，即 $x=37+231k,\ k\in\mathbb Z$。

**推导。**

1. 因 $4\cdot2\equiv1\pmod7$、$3\cdot4\equiv1\pmod{11}$，原系统等价于 $x\equiv1,2,4$ 分别模 $3,7,11$。模数两两互质，乘积 $M=231$，所以 CRT 给出模 $231$ 的唯一同余类。
2. 三个辅助数为 $77,33,21$；它们在对应模数下的逆元分别是 $2,3,10$。因此
   $$x\equiv1\cdot77\cdot2+2\cdot33\cdot3+4\cdot21\cdot10=1192\equiv37\pmod{231}.$$
3. 回代原式：$37\equiv1\pmod3$，$4\cdot37=148\equiv1\pmod7$，$3\cdot37=111\equiv1\pmod{11}$。检验使用原来的带系数系统，且最终保留全部整数代表，而非只报一个解。

### English solution

**Answer.** $x\equiv37\pmod{231}$, or $x=37+231k$ for $k\in\mathbb Z$.

**Derivation/proof.** Because $4\cdot2\equiv1\pmod7$ and $3\cdot4\equiv1\pmod{11}$, the system is $x\equiv1,2,4$ modulo $3,7,11$, respectively. Let $M=231$ and use $M_i=77,33,21$ with inverses $2,3,10$ in the corresponding moduli. CRT gives $x\equiv77\cdot2+2\cdot33\cdot3+4\cdot21\cdot10=1192\equiv37\pmod{231}$. Check: $37\equiv1\pmod3$, $4\cdot37\equiv1\pmod7$, and $3\cdot37\equiv1\pmod{11}$.

## Common Mistakes

- 把 4x≡1 直接读成 x≡1 会改变原系统。 / Normalize coefficients with their inverses.
- 只写 x=37 会漏掉所有相差 231 的解。 / State the full congruence class.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]

- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Normalize the two coefficients other than 1 with their modular inverses, then combine three pairwise coprime congruences.
