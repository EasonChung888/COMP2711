---
id: "Q-2016-FINAL-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Final]]"
source_pdf: "knowledge_base/past_paper/2016-final.pdf"
source_page: 11
solution_page: [11,12]
question_number: "6(b)"
year: 2016
term: "fall"
exam_type: "final"
marks: 7
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Coprime moduli ensure an integer congruence class but its smallest nonnegative representative exceeds the requested range."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-FINAL-P06-b

## Source

![[knowledge_base/past_paper/2016-final.pdf#page=11]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-final.pdf#page=11]] ![[knowledge_base/past_paper/2016-final.pdf#page=12]]

## Question

(b) Consider the following two modular equations.
$$x\bmod991=752$$
$$x\bmod997=40$$
Does there exist a solution for $x\in Z_{3000}$ such that $x$ satisfies the above two modular equations? If yes, please give all possible solutions in $Z_{3000}$ and show your steps. If no, please explain why there is no solution in $Z_{3000}$.

Shared context: [[STEM-2016-FINAL-P06 - Shared Problem Prompt]].

## 中文解析

互素只保证模两数乘积存在唯一剩余类，不保证在更短区间中有解。先求得代表元四十四万七千六百九十三，再与三千上界比较；也可枚举第一式在区间内的三个候选直接核验。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 11, 12. The Chinese derivation expands the reasoning.

**Answer.** There is no solution in $\mathbb Z_{3000}$.

**Derivation/proof.** Put $x=752+991t$. Modulo 997 this requires $-6t\equiv-712$, or $6t\equiv712$. Since $6\cdot166\equiv-1\pmod{997}$, an inverse of 6 is 831, giving $t\equiv712\cdot831\equiv451\pmod{997}$. Thus $x=447693+988027k$. Its least nonnegative representative exceeds 2999. Independently, the only first-congruence candidates in the requested range are $752,1743,2734$; their remainders modulo 997 are $752,746,740$, none equal to 40.

### 中文解答

**推导。** 第一式写 $x=752+991t$。在模997下991≡−6，故第二式要求 $6t\equiv712\pmod{997}$。由 $6\cdot831\equiv1$，得t≡451，从而 $x=447693+988027k$，最小非负解447693已超2999，所以指定范围无解。独立穷举复核第一式在范围内只有752、1743、2734，其模997余数分别752、746、740，都非40。CRT保证模乘积类唯一，不保证小区间必有解。

## Common Mistakes

- 由中国剩余定理直接声称三千范围内有解。
- 只看到代表元大于三千，却忘记说明其他代表元相差九十八万八千零二十七。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
