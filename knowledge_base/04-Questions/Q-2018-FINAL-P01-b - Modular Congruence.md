---
id: "Q-2018-FINAL-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 3
solution_page: [3]
question_number: "1(b)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification","proof"]
difficulty: 2
difficulty_basis: "Every nonzero residue modulo a prime has an inverse supplying a witness for z."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P01-b

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=3]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=3]]

## Question

(b) (Prime number $p$; $x,y,z$ in $\mathbb Z_p$; $y\ne0$) $\forall x\forall y\exists z(x+yz\equiv0\pmod p)$

Shared context: [[STEM-2018-FINAL-P01 - Shared Problem Prompt]].

## 中文解析

素数模数下，非零 y 与 p 必互质，因此存在逆元。把方程移项后乘逆元，便为任意 x 和 y 构造出 z。存在量词在后面，允许这个 z 依赖前面的两个输入。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 3. The Chinese derivation expands the reasoning.

**Answer.** True; choose $z\equiv-y^{-1}x\pmod p$.

**Derivation/proof.** Because $p$ is prime and $y\not\equiv0\pmod p$, $\gcd(y,p)=1$, so a multiplicative inverse $y^{-1}$ exists. Choose the representative of $-y^{-1}x$ in $\mathbb Z_p$. Then $x+yz\equiv x-yy^{-1}x\equiv x-x\equiv0$. The witness may depend on both universally chosen values.

### 中文解答

**推导。** 任给 $x$ 及非零 $y\in\mathbb Z_p$。由于 $p$ 质，$\gcd(y,p)=1$，故 $y$ 有模 $p$ 的逆元。取 $z\equiv-y^{-1}x\pmod p$ 的代表元，即 $x+yz\equiv x-y y^{-1}x\equiv x-x=0$。对每一对 $x,y$ 均能这样给出允许依赖它们的 $z$，故全称、存在量词的要求均满足，命题为真。

## Common Mistakes

- 忽略 y 非零条件。
- 要求同一个 z 同时服务所有 x。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Modular Congruence - 同余]]
- [[Predicate Logic - 谓词逻辑]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Logic-Law Method - 逻辑律方法]]
