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

## Official Answer

Source: [[knowledge_base/past_paper/2014-final.pdf#page=5|PDF physical page 5]].

(a) Repeatedly using Euclid's Division Theorem, we get
$$\begin{aligned}
250&=1\cdot137+113\\137&=1\cdot113+24\\113&=4\cdot24+17\\24&=1\cdot17+7\\17&=2\cdot7+3\\7&=2\cdot3+1
\end{aligned}$$
Rolling back, we get
$$\begin{aligned}
1&=7-2\cdot3\\
&=7-2\cdot(17-2\cdot7)=5\cdot7-2\cdot17\\
&=5\cdot(24-17)-2\cdot17=5\cdot24-7\cdot17\\
&=5\cdot24-7\cdot(113-4\cdot24)=33\cdot24-7\cdot113\\
&=33\cdot(137-113)-7\cdot113=33\cdot137-40\cdot113\\
&=33\cdot137-40\cdot(250-137)=73\cdot137-40\cdot250.
\end{aligned}$$
Therefore, $d=73$.

## Supplementary Explanation

**Answer.** $d=73$.

**Derivation/proof.** Euclid gives $250=137+113$, $137=113+24$, $113=4\cdot24+17$, $24=17+7$, $17=2\cdot7+3$, $7=2\cdot3+1$. Back substitution gives $1=73\cdot137-40\cdot250$, so $137^{-1}\equiv73\pmod{250}$.

Check: $137\cdot73=10001=40\cdot250+1$.

The intermediate back-substitution stage is $1=33\cdot24-7\cdot113$, before replacing 24 and 113.

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[RSA Calculation Method - RSA 计算方法]]
