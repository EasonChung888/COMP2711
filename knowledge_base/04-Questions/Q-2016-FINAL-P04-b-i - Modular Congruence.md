---
id: "Q-2016-FINAL-P04-b-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Final]]"
source_pdf: "knowledge_base/past_paper/2016-final.pdf"
source_page: 8
solution_page: [8,9]
question_number: "4(b)(i)"
year: 2016
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["classification"]
difficulty: 3
difficulty_basis: "The left base is divisible by its prime modulus while Fermat reduction makes the right residue one."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-FINAL-P04-b-i

## Source

![[knowledge_base/past_paper/2016-final.pdf#page=8]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-final.pdf#page=8]] ![[knowledge_base/past_paper/2016-final.pdf#page=9]]

## Question

(i) Is “$(178^{88}\bmod89)=[(401^{3,243,554}+1,197,491)\bmod97]$”?

Shared context: [[STEM-2016-FINAL-P04-b - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2016-final.pdf#page=8|PDF physical page 8]]; [[knowledge_base/past_paper/2016-final.pdf#page=9|PDF physical page 9]].

(b) (i) No.

Consider LHS.
$$\begin{aligned}178^{88}\bmod89&=(178\bmod89)^{88}\bmod89\\&=0^{88}\bmod89\\&=0\end{aligned}$$
Consider RHS.
$$\begin{aligned}
&(401^{3,243,554}+1,197,491)\bmod97\\
&=[((401\bmod97)^{3,243,554}\bmod97)+(1,197,491\bmod97)]\bmod97\\
&=[(13^{3,243,554}\bmod97)+26]\bmod97\\
&=[(13^{3,243,554\bmod(97-1)}\bmod97)+26]\bmod97\\
&\qquad\text{(By Fermat's Little Theorem)}\\
&=[(13^2\bmod97)+26]\bmod97\\
&=(72+26)\bmod97\\&=1
\end{aligned}$$
Thus, LHS is not equal to RHS.

## Supplementary Explanation

**Answer.** False: the left side is $0$ and the right side is $1$.

**Derivation/proof.** Because $178\equiv0\pmod{89}$, the left side is 0. For the right side, $401\equiv13$, $1,197,491\equiv26\pmod{97}$, and $3,243,554\equiv2\pmod{96}$. As 97 is prime and $13\not\equiv0$, Fermat gives $13^{3,243,554}\equiv13^2\equiv72\pmod{97}$. The right residue is $(72+26)\bmod97=1$, which differs from 0.

The final right-side reduction is $72+26\equiv1\pmod{97}$.

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
