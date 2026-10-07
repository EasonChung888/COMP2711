---
id: "Q-2016-FINAL-P04-b-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Final]]"
source_pdf: "knowledge_base/past_paper/2016-final.pdf"
source_page: 8
solution_page: [9]
question_number: "4(b)(ii)"
year: 2016
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Fermat gives residue one modulo seventy-one, whereas divisibility by three rules out that residue modulo seventy-two."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-FINAL-P04-b-ii

## Source

![[knowledge_base/past_paper/2016-final.pdf#page=8]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-final.pdf#page=9]]

## Question

(ii) Is “$(21^{70}\bmod71)=(21^{71}\bmod72)$”?

Shared context: [[STEM-2016-FINAL-P04-b - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2016-final.pdf#page=9|PDF physical page 9]].

(ii) No.

Consider LHS. We have
$$21^{70}\bmod71=1$$
Consider RHS $=21^{71}\bmod72$.

By Euclid's Division Theorem, the above expression could be written as follows.
$$21^{71}=72q+r$$
where $q$ and $r$ are two unique integers.

Note that $r=21^{71}\bmod72$. Thus,
$$21^{71}=72q+(21^{71}\bmod72)$$
$$\begin{aligned}21^{71}\bmod72&=21^{71}-72q\\&=3(7\cdot21^{70}-24q)\end{aligned}$$
which is divisible by 3. Thus, RHS is divisible by 3.

Note that LHS is equal to 1 which is not divisible by 3.

Thus, LHS is not equal to RHS.

## Supplementary Explanation

**Answer.** False. $21^{70}\bmod71=1$, while $21^{71}\bmod72$ is divisible by 3 (in fact, it is 45).

**Derivation/proof.** The prime 71 does not divide 21, so Fermat's theorem gives $21^{70}\equiv1\pmod{71}$. Write $21^{71}=72q+r$ with $0\le r<72$. Then $r=3(7\cdot21^{70}-24q)$, a multiple of 3, and hence $r\ne1$. A numerical check uses $21^2\equiv9$, $21^3\equiv45$, and $45\cdot9\equiv45\pmod{72}$; thus every odd power from the third onward, including the 71st, has remainder 45.

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
