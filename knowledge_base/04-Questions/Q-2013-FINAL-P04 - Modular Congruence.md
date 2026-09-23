---
id: "Q-2013-FINAL-P04"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Final]]"
source_pdf: "knowledge_base/past_paper/2013-final.pdf"
source_page: 7
solution_page: [7]
question_number: "4"
year: 2013
term: "spring"
exam_type: "final"
marks: 10
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "The proof combines Fermat reductions modulo the coprime factors seven and eleven before using CRT uniqueness to return to modulus seventy-seven."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-FINAL-P04

## Source

![[knowledge_base/past_paper/2013-final.pdf#page=7]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-final.pdf#page=7]].

## Question

Prove the following equality without using repeated squaring:
$$46^{120}\bmod77=1.$$
[Hint: Make use of the fact that $77=11\cdot7$ and try to use Fermat's Little Theorem and the Chinese Reminder Theorem.]

## 中文解析

不需要直接算巨大的幂。分别在 $7$ 和 $11$ 下用费马小定理，再以中国剩余定理把两个余数合并。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 7. The Chinese derivation expands the reasoning.

**Answer.** $46^{120}\equiv1\pmod{77}$.

**Derivation/proof.** Let $r=46^{120}\bmod77$. Since $77=7\cdot11$, Fermat gives $46^{120}=(46^6)^{20}\equiv1\pmod7$ and $46^{120}=(46^{10})^{12}\equiv1\pmod{11}$. The residue $1$ has the same two remainders, so CRT uniqueness yields $r=1$ modulo $77$.

### 中文解答

**推导。** 因 $46\equiv4\pmod7$、$46\equiv2\pmod{11}$，底数均不被对应素数整除。费马小定理给 $46^6\equiv1\pmod7$、$46^{10}\equiv1\pmod{11}$。因此 $46^{120}=(46^6)^{20}\equiv1\pmod7$，同时 $(46^{10})^{12}\equiv1\pmod{11}$。数 1 满足这两个同余，由互素模数的 CRT 唯一性，$46^{120}\equiv1\pmod{77}$。

## Common Mistakes

- 把 $46^{120}$ 直接当成 $(46^{77})$。
- 使用费马小定理但没有验证 $46$ 与模数互素。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
