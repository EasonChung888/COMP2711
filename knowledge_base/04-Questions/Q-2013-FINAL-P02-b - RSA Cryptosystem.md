---
id: "Q-2013-FINAL-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Final]]"
source_pdf: "knowledge_base/past_paper/2013-final.pdf"
source_page: 4
solution_page: [4]
question_number: "2(b)"
year: 2013
term: "spring"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]", "[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Finding the private exponent is a modular-inverse computation, where the extended Euclidean argument must justify the chosen residue."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-FINAL-P02-b

## Source

![[knowledge_base/past_paper/2013-final.pdf#page=4]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-final.pdf#page=4]].

## Question

(b) Calculate the private (secret) key $d$. Show the computational steps.

Shared context: [[STEM-2013-FINAL-P02 - Shared Problem Prompt]].

## 中文解析

私钥是 $e$ 对 $\varphi(n)$ 的乘法逆元。扩展欧几里得回代中的 $-77$ 可以化为同余的正代表元 $103$。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** $d=103$.

**Derivation/proof.** Here $\varphi(n)=(11-1)(19-1)=180$. Euclid gives $180=25\cdot7+5$, $7=1\cdot5+2$, $5=2\cdot2+1$; back substitution gives $1=3\cdot180-77\cdot7$. Thus $7^{-1}\equiv-77\equiv103\pmod{180}$.

### 中文解答

**推导。** 先算 $\varphi(n)=(11-1)(19-1)=180$，要求 $7d\equiv1\pmod{180}$。欧几里得算法给 $180=25\cdot7+5$、$7=5+2$、$5=2\cdot2+1$。回代得 $1=5-2(7-5)=3(180-25\cdot7)-2\cdot7=3\cdot180-77\cdot7$。故 $d\equiv-77\equiv103\pmod{180}$，取 $d=103$；验算 $7\cdot103=721=4\cdot180+1$。

## Common Mistakes

- 在模 $209$ 下求 $7$ 的逆。
- 将 $d$ 写成 $77$ 而忽略负号和取模。

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
