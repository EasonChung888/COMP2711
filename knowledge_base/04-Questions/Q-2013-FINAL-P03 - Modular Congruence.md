---
id: "Q-2013-FINAL-P03"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Final]]"
source_pdf: "knowledge_base/past_paper/2013-final.pdf"
source_page: 6
solution_page: [6]
question_number: "3"
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
difficulty_basis: "Uniqueness needs divisibility by both coprime primes and the strict bound on the difference of two representatives modulo their product."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-FINAL-P03

## Source

![[knowledge_base/past_paper/2013-final.pdf#page=6]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-final.pdf#page=6]].

## Question

Let $p$ and $q$ be two different prime numbers. Let $a\in Z_p$ and $b\in Z_q$. Consider the following two modular equations:
$$x\bmod p=a,\qquad x\bmod q=b.$$
We have learned in class that there exists $x\in Z_{pq}$ that satisfies the two equations. Give a contrapositive proof for the following statement:

There is only one $x\in Z_{pq}$ that satisfies the two equations.

Note that this is the uniqueness part of the Chinese Reminder Theorem.

## 中文解析

逆否命题从‘有两个不同解’出发。相减后同时被两个不同素数整除，因互素而被积 $pq$ 整除，这与代表元差的范围冲突。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 6. The Chinese derivation expands the reasoning.

**Answer.** Two distinct solutions cannot exist.

**Derivation/proof.** Assume distinct $x_1,x_2\in\{0,\ldots,pq-1\}$ both satisfy both congruences. Then $p\mid(x_1-x_2)$ and $q\mid(x_1-x_2)$. Coprimality implies $pq\mid(x_1-x_2)$, but $0<|x_1-x_2|<pq$, a contradiction.

### 中文解答

**推导。** 题目已给出解存在，故只需证明不能有两个不同解。假设不同的 $x_1,x_2\in\{0,\ldots,pq-1\}$ 都满足两式。相减得 $p\mid(x_1-x_2)$ 且 $q\mid(x_1-x_2)$。两素数不同而互素，所以 $pq\mid(x_1-x_2)$；但代表元范围给 $0<|x_1-x_2|<pq$，非零的 pq 倍数不可能落在此范围，矛盾。结合已知存在性，解恰有一个。

## Common Mistakes

- 仅从 $p$、$q$ 各自整除就断言差为零，未说明互素。
- 允许 $x_1,x_2$ 不在同一组模 $pq$ 代表元中。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
