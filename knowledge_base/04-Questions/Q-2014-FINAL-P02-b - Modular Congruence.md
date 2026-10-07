---
id: "Q-2014-FINAL-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 4
solution_page: [4]
question_number: "2(b)"
year: 2014
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["counterexample"]
difficulty: 1
difficulty_basis: "A valid counterexample has to make the two nested remainders differ, so the choice of a, m, and n must be verified explicitly."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P02-b

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=4]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=4]].

## Question

(b) $(a\bmod mn)\bmod n=a\bmod m$.

Shared context: [[STEM-2014-FINAL-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2014-final.pdf#page=4|PDF physical page 4]].

(b) This is false. Let $a=8,m=2$ and $n=3$. We have
$$(a\bmod mn)\bmod n=(8\bmod6)\bmod3=2,$$
$$a\bmod m=8\bmod2=0.$$

## Supplementary Explanation

**Answer.** False: $a=8,m=2,n=3$ gives $2\ne0$.

**Derivation/proof.** Here $(8\bmod6)\bmod3=2\bmod3=2$, but $8\bmod2=0$. One concrete allowed triple disproves the universal claim.

All three selected parameters are positive integers larger than one, as required.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
