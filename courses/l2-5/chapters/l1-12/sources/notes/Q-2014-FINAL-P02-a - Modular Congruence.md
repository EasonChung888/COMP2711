---
id: "Q-2014-FINAL-P02-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 4
solution_page: [4]
question_number: "2(a)"
year: 2014
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "The modular identity needs a universal proof or a counterexample, and the two inner and outer moduli must be kept distinct."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P02-a

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=4]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=4]].

## Question

(a) $(a\bmod mn)\bmod n=a\bmod n$.

Shared context: [[STEM-2014-FINAL-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2014-final.pdf#page=4|PDF physical page 4]].

(a) This is true. According to Euclid's Division Theorem, there exist $q_1$ and $r_1$ such that
$$a=q_1mn+r_1,\quad0\le r_1<mn,$$
where $r_1=(a\bmod mn)$. Similarly, there exist $q_2$ and $r_2$ such that
$$r_1=q_2n+r_2,\quad0\le r_2<n,$$
where $r_2=r_1\bmod n=(a\bmod mn)\bmod n$. Combining the two equations, we get
$$a=(q_1m+q_2)n+r_2,\quad0\le r_2<n.$$
Hence, $a\bmod n=r_2$. Consequently,
$$(a\bmod mn)\bmod n=r_2=a\bmod n.$$

## Supplementary Explanation

**Answer.** True.

**Derivation/proof.** Write $a=q_1mn+r_1$ with $r_1=a\bmod mn$, then $r_1=q_2n+r_2$ with $r_2=r_1\bmod n$. Thus $a=(q_1m+q_2)n+r_2$ and $0\le r_2<n$, so $r_2=a\bmod n$.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
