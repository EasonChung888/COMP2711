---
id: "Q-2013-FINAL-P01-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Final]]"
source_pdf: "knowledge_base/past_paper/2013-final.pdf"
source_page: 3
solution_page: [3]
question_number: "1(a)"
year: 2013
term: "spring"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "The nested-modulus identity needs a quotient-and-remainder proof that tracks divisibility by the smaller modulus."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-FINAL-P01-a

## Source

![[knowledge_base/past_paper/2013-final.pdf#page=3]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-final.pdf#page=3]].

## Question

(a) Let $m$ and $n$ be two positive integers such that $m$ divides $n$, i.e., $n=sm$ for some other integer $s$. Show that, for any integer $x$, $(x\bmod n)\bmod m=x\bmod m$.

## Official Answer

Source: [[knowledge_base/past_paper/2013-final.pdf#page=3|PDF physical page 3]].

(a) Let $x\bmod n=r_1$. Then $x=q_1n+r_1$ for some integer $q_1$. Further let $r_1\bmod m=r_2$. Then $r_1=q_2m+r_2$ for some integer $q_2$. Hence,
$$x=q_1n+q_2m+r_2=q_1sm+q_2m+r_2=(q_1s+q_2)m+r_2,$$
where $0\le r_2<m$. Consequently,
$$x\bmod m=r_2=(x\bmod n)\bmod m.$$

## Supplementary Explanation

**Answer.** The two remainders are equal.

**Derivation/proof.** Let $r_1=x\bmod n$, so $x=q_1n+r_1$. Let $r_2=r_1\bmod m$, so $r_1=q_2m+r_2$ with $0\le r_2<m$. Since $n=sm$, $x=(q_1s+q_2)m+r_2$; uniqueness of the remainder modulo $m$ gives $x\bmod m=r_2$.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
