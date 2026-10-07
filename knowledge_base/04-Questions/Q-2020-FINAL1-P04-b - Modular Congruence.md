---
id: "Q-2020-FINAL1-P04-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-1.pdf"
source_page: 3
question_number: "4(b)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "CRT gives residue twenty-three modulo thirty before a bounded progression count."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 4
---
# Q-2020-FINAL1-P04-b

## Source

![[knowledge_base/past_paper/2020-final-part-1.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-1.pdf#page=3]]

## Question

$n\equiv1\pmod2$, $n\equiv2\pmod3$, and $n\equiv3\pmod5$?

Shared context: [[STEM-2020-FINAL1-P04 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2020-final-part-1.pdf#page=3|physical PDF page 3]].

By Chinese remainder theorem, we know that $n\equiv1\pmod2,n\equiv2\pmod3,$ and $n\equiv3\pmod5$ is equivalent to $n=23+30k$ for an integer $k$. Since $0\le n<1000$, we have $0\le k\le32$. Therefore the answer is $33$.

## Supplementary Explanation

**Answer.** $33$.

**Derivation/proof.** The last condition gives residues 3,8,13,18,23,28 modulo 30. Requiring oddness leaves 3,13,23; requiring remainder 2 modulo 3 leaves only 23. As 2,3,5 are pairwise coprime this is the unique CRT class: $n=23+30k$. The range imposes $0\le k\le32$, giving 33 integers (last 983).

The allowed integer parameter runs from zero through thirty-two inclusive. Therefore its count is $32-0+1=33$, retaining both endpoints.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Modular Congruence - 同余]]
- [[Counting Principles - 计数原理]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Counting Method - 计数方法]]
