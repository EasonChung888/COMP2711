---
id: "Q-2014-FINAL-P03-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 5
solution_page: [6]
question_number: "3(c)"
year: 2014
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]", "[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "A public prime modulus immediately reveals its totient, allowing the private exponent to be computed by a modular inverse without factoring."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P03-c

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=5]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=6]].

## Question

(c) Is the system secure? Explain why or why not.

Shared context: [[STEM-2014-FINAL-P03 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2014-final.pdf#page=6|PDF physical page 6]].

(c) The system is not secure because the adversary can easily compute the private key $d$ from the public key $(n,e)$.

## Supplementary Explanation

**Answer.** No; it is insecure because $n=251$ is public and prime, so $n-1=250$ is public and $d=e^{-1}\pmod{250}$ is easy to compute.

**Derivation/proof.** The public key exposes enough information to reproduce the private-key calculation directly. Real RSA relies on factoring a composite modulus being hard; that protection is absent here.

The attacker knows $\varphi(n)=n-1=250$ without factorization, and can run extended Euclid on the public $e=137$ to recover $d=73$.

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
