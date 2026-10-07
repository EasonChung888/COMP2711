---
id: "Q-2014-FINAL-P03-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 5
solution_page: [6]
question_number: "3(b)"
year: 2014
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]", "[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Encrypting two hundred requires splitting exponent one hundred thirty-seven into powers of two and reducing every square modulo two hundred fifty-one."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P03-b

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=5]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=6]].

## Question

(b) Suppose $m=200$. Calculate $c=m^e\bmod n$ using repeated squaring. Show the computational steps.

Shared context: [[STEM-2014-FINAL-P03 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2014-final.pdf#page=6|PDF physical page 6]].

(b) Observe that $137=2^7+2^3+2^0$. Using repeated squaring, we get
$$\begin{aligned}
I_0&=200\\I_1&=200\cdot200\bmod251=91\\I_2&=91\cdot91\bmod251=249\\I_3&=249\cdot249\bmod251=4\\I_4&=4\cdot4\bmod251=16\\I_5&=16\cdot16\bmod251=5\\I_6&=5\cdot5\bmod251=25\\I_7&=25\cdot25\bmod251=123
\end{aligned}$$
So,
$$c=I_7\cdot I_3\cdot I_0\bmod251=123\cdot4\cdot200\bmod251=8.$$

## Supplementary Explanation

**Answer.** $c=8$.

**Derivation/proof.** $137=128+8+1$. Repeated squares modulo 251 give $200^2\equiv91$, $200^4\equiv249$, $200^8\equiv4$, $200^{16}\equiv16$, $200^{32}\equiv5$, $200^{64}\equiv25$, $200^{128}\equiv123$. Hence $200^{137}\equiv123\cdot4\cdot200\equiv8$.

The final product is $123\cdot4\cdot200=98400\equiv8\pmod{251}$.

In exponent order $2,4,8,16,32,64,128$, the residues are $91,249,4,16,5,25,123$.

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
