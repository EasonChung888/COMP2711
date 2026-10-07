---
id: "Q-2013-FINAL-P02-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Final]]"
source_pdf: "knowledge_base/past_paper/2013-final.pdf"
source_page: 4
solution_page: [4]
question_number: "2(c)"
year: 2013
term: "spring"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]", "[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Repeated-squaring encryption requires preserving reductions modulo the RSA modulus through a nontrivial exponent decomposition."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-FINAL-P02-c

## Source

![[knowledge_base/past_paper/2013-final.pdf#page=4]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-final.pdf#page=4]].

## Question

(c) Encrypt the message 100 using repeated squaring. Show the computational steps.

Shared context: [[STEM-2013-FINAL-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2013-final.pdf#page=4|PDF physical page 4]].

(c) 100 is encrypted to $100^7\bmod n$, where $n=11\times19=209$.
$$100^7\bmod209=100^{4+2+1}\bmod209=100\times100^2\times100^4\bmod209.$$
$$\begin{aligned}
100\bmod209&=100.\\
100^2\bmod209&=10000\bmod209=177.\\
100^4\bmod209&=177*177\bmod209=188.
\end{aligned}$$
Thus $100^7\bmod209=(100\times177\times188)\bmod209=111$.

## Supplementary Explanation

**Answer.** $100^7\bmod209=111$.

**Derivation/proof.** $7=4+2+1$. Compute $100^2\equiv177\pmod{209}$ and $100^4\equiv177^2\equiv188\pmod{209}$. Hence $100^7\equiv100\cdot177\cdot188\equiv111\pmod{209}$.

The intermediate multiplication gives $100\cdot177\equiv144\pmod{209}$, then $144\cdot188=27072\equiv111\pmod{209}$.

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
