---
id: "Q-2022-MID-P08-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 3
question_number: "8(a)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]","[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Binary exponent 29 selects powers 16,8,4,1 from the alternating residue cycle."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 5
---
# Q-2022-MID-P08-a

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=3]]

## Question

What is the encrypted message for plaintext $m=12$?

Shared context: [[STEM-2022-MID-P08 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2022-midterm.pdf#page=3|physical PDF page 3]].

> (a) $c=12^e\bmod pq$, which is $12^{29}\bmod133$. This can be solved by repeated squaring. Set $I_i\equiv12^{2^i}\pmod{133}$.
>
> $$\begin{aligned}I_0&=12\\I_1&=I_0\cdot I_0\bmod133=11\\I_2&=I_1\cdot I_1\bmod133=121\\I_3&=I_2\cdot I_2\bmod133=11\\I_4&=I_3\cdot I_3\bmod133=121\end{aligned}$$
>
> Note that $12^{29}=12^{16}\cdot12^8\cdot12^4\cdot12=12^{2^4}\cdot12^{2^3}\cdot12^{2^2}\cdot12^{2^0}$.
>
> Thus, $12^{29}\equiv(I_4I_3I_2I_0)\pmod{133}\equiv(12\cdot11\cdot121^2)\pmod{133}\equiv122\pmod{133}$.
>
> So the encrypted message is 122.

## Supplementary Explanation

**Answer.** $122$.

**Derivation/proof.** The modulus is n=7·19=133 and ciphertext is 12^29 mod 133. Repeated-square residues at exponents1,2,4,8,16 are 12,11,121,11,121: 12²≡11,11²=121,121²≡11. Since29=16+8+4+1, multiply121·11·121·12. Reduce121·11=1331≡1, leaving 121·12=1452≡122 mod 133. This is in the required message residue range.

The products are $1331=10\cdot133+1$ and $1452=10\cdot133+122$. The repeated square $121^2=14641\equiv11\pmod{133}$ explains the alternating residues.

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Modular Arithmetic Method - 模运算方法]]
