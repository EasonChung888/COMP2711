---
id: "Q-2014-FINAL-P02-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 4
solution_page: [4]
question_number: "2(c)"
year: 2014
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "The gcd conclusion requires deciding whether a remainder of one forces coprimality and justifying the conclusion with divisibility."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P02-c

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=4]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=4]].

## Question

(c) If $a\bmod n=1$, then $gcd(a,n)=1$.

Shared context: [[STEM-2014-FINAL-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2014-final.pdf#page=4|PDF physical page 4]].

(c) This is true. $a\bmod n=1$ implies that there exist $q$ such that $a=qn+1$, or $a-qn=1$. The latter equation implies that any common divisor of $a$ and $n$ must divide 1, hence must be 1. Therefore, $\gcd(a,n)=1$.

## Supplementary Explanation

**Answer.** True.

**Derivation/proof.** $a\bmod n=1$ means $a=qn+1$. Any common divisor of $a$ and $n$ divides $a-qn=1$, hence it is one.

If $d$ is a positive common divisor, then $d\mid a$ and $d\mid qn$, so $d\mid(a-qn)=1$. The only positive divisor of one is one.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
