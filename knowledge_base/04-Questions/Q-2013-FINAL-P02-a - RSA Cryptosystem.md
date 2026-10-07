---
id: "Q-2013-FINAL-P02-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Final]]"
source_pdf: "knowledge_base/past_paper/2013-final.pdf"
source_page: 4
solution_page: [4]
question_number: "2(a)"
year: 2013
term: "spring"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]", "[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Constructing the public key only requires multiplying eleven by nineteen and pairing the resulting modulus with the given exponent seven."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-FINAL-P02-a

## Source

![[knowledge_base/past_paper/2013-final.pdf#page=4]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-final.pdf#page=4]].

## Question

(a) What is the public key $(e,n)$?

Shared context: [[STEM-2013-FINAL-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2013-final.pdf#page=4|PDF physical page 4]].

(a) The public key is the pair: $(e,n)$ where $e=7$ and $n=p*q=209$.

## Supplementary Explanation

**Answer.** $(7,209)$.

**Derivation/proof.** RSA modulus $n=pq=11\cdot19=209$; the specified public exponent is $e=7$.

The second component is the product of the two primes, not the totient $180$. The question specifies the order $(e,n)$, so the exponent comes first.

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
