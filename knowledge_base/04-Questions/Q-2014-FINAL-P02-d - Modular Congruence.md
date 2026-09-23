---
id: "Q-2014-FINAL-P02-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 4
solution_page: [4]
question_number: "2(d)"
year: 2014
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["counterexample"]
difficulty: 1
difficulty_basis: "A small coprime pair with remainder two disproves the implication from coprimality to a remainder of one."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P02-d

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=4]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=4]].

## Question

(d) If $gcd(a,n)=1$, then $a\bmod n=1$.

Shared context: [[STEM-2014-FINAL-P02 - Shared Problem Prompt]].

## 中文解析

互素与同余于 1 是不同条件。所有与模数互素的剩余类可逆，但不必都是 1。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** False: $\gcd(5,3)=1$ but $5\bmod3=2$.

**Derivation/proof.** Coprimality only guarantees that $a$ is invertible modulo $n$; it does not say that its residue equals one. The displayed pair is a counterexample.

### 中文解答

**推导。** 取 $a=5,n=3$（其余未用参数 m 可取二），满足全部正整数限制。欧几里得算法给 $\gcd(5,3)=1$，但 $5\bmod3=2\ne1$，故蕴含前件真而后件假。互素只保证余数可逆，不保证余数是一。

## Common Mistakes

- 把有逆元误当成余数为一。
- 选取 $a=1$ 作为不能反驳命题的例子。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
