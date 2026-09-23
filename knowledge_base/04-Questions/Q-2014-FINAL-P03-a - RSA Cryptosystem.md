---
id: "Q-2014-FINAL-P03-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 5
solution_page: [5]
question_number: "3(a)"
year: 2014
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]", "[[Modular Congruence - 同余]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Extended Euclid must invert the public exponent one hundred thirty-seven modulo two hundred fifty to recover the private exponent."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P03-a

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=5]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=5]].

## Question

(a) Calculate $d$ using the extended GCD algorithm. Show the computational steps.

Shared context: [[STEM-2014-FINAL-P03 - Shared Problem Prompt]].

## 中文解析

由于 $n$ 是素数，私钥在模 $n-1=250$ 下求逆。回代系数 73 验证为 $137\cdot73\equiv1\pmod{250}$。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 5. The Chinese derivation expands the reasoning.

**Answer.** $d=73$.

**Derivation/proof.** Euclid gives $250=137+113$, $137=113+24$, $113=4\cdot24+17$, $24=17+7$, $17=2\cdot7+3$, $7=2\cdot3+1$. Back substitution gives $1=73\cdot137-40\cdot250$, so $137^{-1}\equiv73\pmod{250}$.

### 中文解答

**推导。** 因为模数 251 是素数，需要求 $137d\equiv1\pmod{250}$。除法链为 $250=137+113$、$137=113+24$、$113=4\cdot24+17$、$24=17+7$、$17=2\cdot7+3$、$7=2\cdot3+1$。回代：$1=7-2\cdot3=5\cdot7-2\cdot17=5\cdot24-7\cdot17=33\cdot24-7\cdot113=33\cdot137-40\cdot113=73\cdot137-40\cdot250$。故 $d=73$；$137\cdot73=10001=40\cdot250+1$ 验证所求逆元。

## Common Mistakes

- 在模 251 下求逆。
- 只算到最大公因数为一但没有回代。

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
