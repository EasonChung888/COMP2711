---
id: "Q-2015-FINAL-P06-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Final]]"
source_pdf: "knowledge_base/past_paper/2015-final.pdf"
source_page: 11
solution_page: [12]
question_number: "6(c)"
year: 2015
term: "fall"
exam_type: "final"
marks: 6
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]","[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Decrypting exponent three hundred forty-three needs nine successive squares and the six factors selected by its binary expansion."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-FINAL-P06-c

## Source

![[knowledge_base/past_paper/2015-final.pdf#page=11]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-final.pdf#page=12]]

## Question

(c) Suppose the ciphertext is 2. Decrypt it to find the plaintext. Show all steps of your calculations.

You may find the following equalities helpful: $171^2\bmod527=256$, $256^2\bmod527=188$, $35\times171\bmod527=188$, and $188^2\bmod527=35$.

Shared context: [[STEM-2015-FINAL-P06 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2015-final.pdf#page=12|PDF physical page 12]].

(c) To decrypt the ciphertext 2, we need to do the following:
$$2^{343}\bmod(17\times31)$$
$$2^{343}\bmod527$$
Since $343=101010111_{(2)}$ (i.e., $343=2^8+2^6+2^4+2^2+2+1$), we need to get $I_0,I_1,I_2,I_4,I_6$ and $I_8$:

| | |
| --- | --- |
| $I_0$ | $2\bmod527=2$ |
| $I_1$ | $I_0\times I_0\bmod527=4$ |
| $I_2$ | $I_1\times I_1\bmod527=16$ |
| $I_3$ | $I_2\times I_2\bmod527=256$ |
| $I_4$ | $I_3\times I_3\bmod527=188$ (given) |
| $I_5$ | $I_4\times I_4\bmod527=35$ (given) |
| $I_6$ | $I_5\times I_5\bmod527=171$ |
| $I_7$ | $I_6\times I_6\bmod527=256$ (given) |
| $I_8$ | $I_7\times I_7\bmod527=188$ (given) |

Now we have:
$$\begin{aligned}
2^{343}\bmod527&=(I_8\times I_6\times I_4\times I_2\times I_1\times I_0)\bmod527)\\
&=(188\times171\times188\times16\times4\times2)\bmod527\\
&=((188^2\bmod527)\times171\times16\times4\times2)\bmod527\\
&=((35\times171\bmod527)\times16\times4\times2)\bmod527\quad\text{(given)}\\
&=(188\times16\times4\times2)\bmod527\quad\text{(given)}\\
&=24064\bmod527\\&=349
\end{aligned}$$
Therefore the plaintext is 349.

## Supplementary Explanation

**Answer.** The plaintext is $349$.

**Derivation/proof.** Write $343=256+64+16+4+2+1$. The residues of $2^{2^j}$ for $j=0,\ldots,8$ are $2,4,16,256,188,35,171,256,188$. Hence $2^{343}\equiv188\cdot171\cdot188\cdot16\cdot4\cdot2$. Use $188^2\equiv35$ and $35\cdot171\equiv188$ to reduce this to $188\cdot16\cdot4\cdot2=24064\equiv349\pmod{527}$. Re-encryption gives $349^7\bmod527=2$, independently checking the plaintext.

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Modular Arithmetic Method - 模运算方法]]
