---
id: "Q-2014-FINAL-P02-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 4
solution_page: [4]
question_number: "2(d)"
year: 2014
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["counterexample"]
difficulty: 1
difficulty_basis: "A small coprime pair with remainder two disproves the implication from coprimality to a remainder of one."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P02-d

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=4]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=4]].

## Question

(d) If $gcd(a,n)=1$, then $a\bmod n=1$.

Shared context: [[STEM-2014-FINAL-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2014-final.pdf#page=4|PDF physical page 4]].

(d) This is false. For example, $\gcd(5,3)=1$, but $5\bmod3=2$.

## Supplementary Explanation

**Answer.** False: $\gcd(5,3)=1$ but $5\bmod3=2$.

**Derivation/proof.** Coprimality only guarantees that $a$ is invertible modulo $n$; it does not say that its residue equals one. The displayed pair is a counterexample.

Take the unused parameter $m=2$. All domain restrictions then hold and the implication has a true antecedent and false consequent.

For this counterexample, the actual residue is $2\ne1$.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
