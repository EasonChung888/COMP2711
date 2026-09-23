---
id: "Q-2013-FINAL-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Final]]"
source_pdf: "knowledge_base/past_paper/2013-final.pdf"
source_page: 3
solution_page: [3]
question_number: "1(b)"
year: 2013
term: "spring"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Classifying invertible residues modulo eight requires applying the gcd criterion separately to every residue class."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-FINAL-P01-b

## Source

![[knowledge_base/past_paper/2013-final.pdf#page=3]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-final.pdf#page=3]].

## Question

(b) For each number in $Z_8$, state if it has a multiplicative inverse mod 8, and if it has, state its inverse. There is no need to explain your answer.

## 中文解析

模 $8$ 中可逆当且仅当与 $8$ 互素。所有奇数剩余类可逆，而且此处每个可逆元恰好都是自己的逆元。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 3. The Chinese derivation expands the reasoning.

**Answer.** $1^{-1}=1$, $3^{-1}=3$, $5^{-1}=5$, $7^{-1}=7$; $0,2,4,6$ have none.

**Derivation/proof.** A residue has an inverse modulo $8$ exactly when it is coprime to $8$. The odd residues are coprime; direct products $1^2,3^2,5^2,7^2$ are all $1\pmod8$.

### 中文解答

**推导。** 可逆的充要条件是与 8 互素。偶数 $0,2,4,6$ 与 8 的最大公因数大于一，故无逆元。奇数 $1,3,5,7$ 的平方分别为 $1,9,25,49$，模八均余一，故四者的逆元依次是 $1,3,5,7$，每个都是自身。

## Common Mistakes

- 把 $0$ 说成自己的逆元。
- 只检查乘积等于 1 而没有取模。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
