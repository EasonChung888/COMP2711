---
id: "Q-2023F-FINAL-P07"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Final.pdf"
source_page: 11
question_number: "7"
year: 2023
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Invert each coefficient, then handle compatible noncoprime moduli with lcm 30 rather than the ordinary coprime CRT product 60."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [11]
marks: 11
---
# Q-2023F-FINAL-P07

## Source

[[2023 Fall Final]]; printed item 7; 11 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=11]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=11]]

## Question

Solve this system of linear congruences:
$$3x\equiv1\pmod{10},\qquad5x\equiv3\pmod6.$$
Show all the steps.

(Hint: You might want to get rid of the coefficients somehow first)

## 中文解析

先用三模十的逆元七、五模六的逆元五消去系数。得到两个模数十和六并不互质的条件，它们在模二下兼容；可以代入参数求解，最后周期是 lcm 三十，不能误写为六十。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $x\equiv27\pmod{30}$，即 $x=27+30t,\ t\in\mathbb Z$。

**推导。**

1. 模十分别乘 $3$ 的逆元七、模六乘 $5$ 的逆元五，得到 $x\equiv7\pmod{10}$、$x\equiv15\equiv3\pmod6$。因为模数十和六并不互素，不能直接套用乘积六十为周期的普通 CRT 结论。
2. 令 $x=7+10k$，代入第二个同余式得 $4k\equiv2\pmod6$。整数整除形式为 $6\mid(4k-2)$，等价于 $3\mid(2k-1)$，所以 $2k\equiv1\pmod3$，即 $k\equiv2\pmod3$。
3. 写 $k=2+3t$ 即得 $x=27+30t$。回代有 $3\cdot27\equiv1\pmod{10}$、$5\cdot27\equiv3\pmod6$，周期三十也同时保持两式。每个转化都等价，因此参数式包含全部解而不只是一个特解。

### English solution

**Answer.** $x\equiv27\pmod{30}$.

**Derivation/proof.** Because $3\cdot7\equiv1\pmod{10}$ and $5\cdot5\equiv1\pmod6$, the equations become $x\equiv7\pmod{10}$ and $x\equiv15\equiv3\pmod6$. Set $x=7+10k$. Then $7+10k\equiv3\pmod6$ gives $4k\equiv2\pmod6$, equivalently $2k\equiv1\pmod3$, so $k\equiv2\pmod3$. Thus $x=7+10(2+3t)=27+30t$. Check $3\cdot27\equiv1\pmod{10}$ and $5\cdot27\equiv3\pmod6$. The parameterization captures all integer solutions.

## Common Mistakes

- 模数十和六共享因子二，不能直接用乘积作最小周期。 / Use compatible generalized CRT.
- 消去系数时必须乘逆元，不能普通除法后保留原模数。 / Normalize congruences correctly.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]

- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Invert each coefficient, then handle compatible noncoprime moduli with lcm 30 rather than the ordinary coprime CRT product 60.
