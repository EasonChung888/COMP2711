---
id: "Q-2016-FINAL-P05-a-raymond"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Final]]"
source_pdf: "knowledge_base/past_paper/2016-final.pdf"
source_page: 10
solution_page: [10]
question_number: "5(a)"
year: 2016
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]","[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Factoring 247 into thirteen and nineteen yields totient 216, whose inverse of seven is directly checked."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-FINAL-P05-a-raymond

## Source

![[knowledge_base/past_paper/2016-final.pdf#page=10]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-final.pdf#page=10]]

## Question

(a) Is it possible to find the secret key of Raymond and the secret key of Kenneth? If yes, please find the two secret keys. If no, please explain the reason.

Atomic focus [editorial]: Raymond’s secret key; Kenneth’s is a separate atom.

Shared context: [[STEM-2016-FINAL-P05 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2016-final.pdf#page=10|PDF physical page 10]].

(a) Yes.

Consider Raymond's case.

Note that $13\times19=247$.

Thus, $p=13$ and $q=19$.

So, $T=(13-1)(19-1)=12\times18=216$

Secret key of Raymond = the multiplicative inverse of 7 in $Z_{216}=31$

## Supplementary Explanation

**Answer.** Yes. Raymond's secret exponent is $d_R=31$ (private key $(31,247)$).

**Derivation/proof.** Factor $247=13\cdot19$, so $\varphi(247)=12\cdot18=216$. The Euclidean identity $216=30\cdot7+6$ and $7=6+1$ gives $1=31\cdot7-216$. Therefore $7\cdot31\equiv1\pmod{216}$ and the RSA secret exponent is 31.

Check: $7\cdot31=217=216+1$.

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Modular Arithmetic Method - 模运算方法]]
