---
id: "Q-2023F-FINAL-P06-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Final.pdf"
source_page: 10
question_number: "6(a)"
year: 2023
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Counting Method - 计数方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Pigeonholes modulo three and parity force separate factors of three and four into the six-difference product."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [10]
marks: 6
---
# Q-2023F-FINAL-P06-a

## Source

[[2023 Fall Final]]; printed item 6(a); 6 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=10]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=10]]

## Question

Let $a,b,c,d$ be integers. Show that the product
$$(a-b)(a-c)(a-d)(b-c)(b-d)(c-d)$$
is divisible by 12.

(Hint: You might want to prove that there exist at least two numbers among $a,b,c,d$ such that they have the same remainder mod 3 and this might help you with the main proof)

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=10|physical PDF page 10]].

> (a) Out of $4$ different numbers, two of them have the same remainder mod $3$ based on pigeonhole principle. So one of those six elements are divisible by $3$. Now out of these four numbers, either we have two odd and two even or there exists at least three numbers with same oddity. In each case we can get two different pair of numbers that their difference is an even number. So it would be dividable by $4$. So the total would be dividable by $12$.

## Supplementary Explanation

**Answer.** $12\mid(a-b)(a-c)(a-d)(b-c)(b-d)(c-d)$.

**Derivation/proof.** Among four integers, two share a residue modulo 3, so their difference is a factor divisible by 3. For parity, either there are two even and two odd numbers, giving one even difference in each pair, or at least three integers have the same parity, giving at least two distinct even differences among those three. Thus two factors supply a factor of 4. Since $\gcd(3,4)=1$, the product is divisible by 12. Repeated integer values cause a zero factor, and 12 divides zero, so distinctness is not required.

There are only three residue classes modulo three, so two inputs share a class. The parity cases provide two even factors, whose product is divisible by four. If two inputs coincide, the product is zero and is still divisible by twelve.

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Subtopic - Basic Counting - 基本计数]]

- [[Modular Congruence - 同余]]
- [[Counting Principles - 计数原理]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Counting Method - 计数方法]]

Pigeonholes modulo three and parity force separate factors of three and four into the six-difference product.
