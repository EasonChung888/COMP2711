---
id: "Q-2015-FINAL-P07-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Final]]"
source_pdf: "knowledge_base/past_paper/2015-final.pdf"
source_page: 13
solution_page: [13]
question_number: "7(b)"
year: 2015
term: "fall"
exam_type: "final"
marks: 4
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "The large power is reduced by applying the established forty-ninth-power identity twice. "
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-FINAL-P07-b

## Source

![[knowledge_base/past_paper/2015-final.pdf#page=13]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-final.pdf#page=13]]

## Question

(b) Use Part (a) to calculate
$$4^{385}\bmod105.$$

## Official Answer

Source: [[knowledge_base/past_paper/2015-final.pdf#page=13|PDF physical page 13]].

(b) By the result of (a)
$$\begin{aligned}
4^{385}\bmod105&=4^{(7*49)+42}\bmod105\\
&=((4^{7*49}\bmod105)\times4^{42})\bmod105\\
&=((4^7\times4^{42})\bmod105\\
&=4^{49}\bmod105=4\bmod105=4.
\end{aligned}$$

## Supplementary Explanation

**Answer.** $4$.

**Derivation/proof.** The base 4 satisfies the coprimality condition. Since $385=7\cdot49+42$, $4^{385}=(4^{49})^7\cdot4^{42}\equiv4^7\cdot4^{42}=4^{49}\equiv4\pmod{105}$.

The base four is divisible by none of $3,5,7$. The final four is already the standard remainder; this argument does not reduce arbitrary exponents modulo 49.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
