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

## Official Answer

Source: [[knowledge_base/past_paper/2018-final.pdf#page=3|physical PDF page 3]].

True. The inverse of $y$ must exist in $\mathbb Z_p$, so we can set $z\equiv-y^{-1}x\pmod p$ to satisfy the equation for any $x$ and $y$.

## Supplementary Explanation

**Answer.** True; choose $z\equiv-y^{-1}x\pmod p$.

**Derivation/proof.** Because $p$ is prime and $y\not\equiv0\pmod p$, $\gcd(y,p)=1$, so a multiplicative inverse $y^{-1}$ exists. Choose the representative of $-y^{-1}x$ in $\mathbb Z_p$. Then $x+yz\equiv x-yy^{-1}x\equiv x-x\equiv0$. The witness may depend on both universally chosen values.

Choosing the second variable equal to the first makes the difference $x-x=0$, independent of the value of $x$. This supplies the existential witness for every universal choice.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Modular Congruence - 同余]]
- [[Predicate Logic - 谓词逻辑]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Logic-Law Method - 逻辑律方法]]
