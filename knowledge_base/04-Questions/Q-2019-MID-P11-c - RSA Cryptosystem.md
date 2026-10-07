---
id: "Q-2019-MID-P11-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 13
solution_page: [13]
question_number: "11(c)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]"]
question_types: ["modeling"]
difficulty: 1
difficulty_basis: "RSA encryption uses the public exponent 53 and message modulus 989 without requiring numerical evaluation."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 3
---
# Q-2019-MID-P11-c

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=13]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=13]]

## Question

(c) Suppose Bob’s public key is $(989,53)$ and Alice wants to send a message $m=720$ to Bob. Write down the modular expression that computes the encrypted message $c$. It is not necessary to evaluate the expression.

Shared context: [[STEM-2019-MID-P11 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-midterm.pdf#page=13|physical PDF page 13]].

The encrypted message $c=720^{53}\bmod989$.

## Supplementary Explanation

**Answer.** $c=720^{53}\bmod989$.

**Derivation/proof.** RSA encryption maps a message representative $m$ to $m^e\bmod n$, using the recipient's public key. Substitute $m=720,e=53,n=989$. The message is already in $\mathbb Z_{989}$, so the expression is valid without first reducing it. The private exponent is not used for this encryption request.

The private decryption exponent $401$ must not replace the public exponent $53$.

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[RSA Calculation Method - RSA 计算方法]]
