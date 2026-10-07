---
id: "Q-2017-FINAL-P04-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 6
solution_page: [6,7]
question_number: "4(a)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Cryptography - 密码学]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Inclusion-Exclusion - 容斥原理]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[RSA Cryptosystem - RSA 密码系统]]","[[Modular Congruence - 同余]]","[[Inclusion-Exclusion - 容斥原理]]","[[Counting Principles - 计数原理]]"]
methods: ["[[RSA Calculation Method - RSA 计算方法]]","[[Modular Arithmetic Method - 模运算方法]]","[[Inclusion-Exclusion Method - 容斥方法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Inclusion-exclusion counts 528 rejected residues modulo 720 including zero before the guaranteed successful draw."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 5
---
# Q-2017-FINAL-P04-a

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=6]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=6]] ![[knowledge_base/past_paper/2017-final.pdf#page=7]]

## Question

(a) Suppose that $p=13,q=61$. In the worst case, what is the number of times we will execute step 1 (that is, the number of times we have to pick a random $d$)?

Shared context: [[STEM-2017-FINAL-P04 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2017-final.pdf#page=6|physical PDF page 6]]; [[knowledge_base/past_paper/2017-final.pdf#page=7|physical PDF page 7]].

$p-1=2^2\cdot3,q-1=2^2\cdot3\cdot5$. So this is equivalent to finding the number of integers from $\{0,1,\cdots,(p-1)(q-1)-1=719\}$ that are relatively prime to $2,3,$ and $5$. Using the inclusion exclusion principle, we first find the number of integers that are multiples of $2:360,3:240,5:144,6:120,10:72,15:48,30:24$. The number of integers that are not relatively prime to $2,3,$ and $5$ would then be $360+240+144-120-72-48+24=528$. By the pigeonhole principle, in the worst case it will take $529$ tries to find a proper $d$.

## Supplementary Explanation

**Answer.** $529$ picks.

**Derivation/proof.** Here $T=12\cdot60=720=2^4 3^2 5$. Bad candidates in $\{0,\ldots,719\}$ are multiples of 2, 3 or 5. Their union has size $360+240+144-120-72-48+24=528$ by inclusion-exclusion (zero is included in each set). All 528 may be picked first without replacement; the next pick is then good. This ordering also proves the bound is attainable.

## Connections

- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Inclusion-Exclusion - 容斥原理]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Modular Congruence - 同余]]
- [[Inclusion-Exclusion - 容斥原理]]
- [[Counting Principles - 计数原理]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Inclusion-Exclusion Method - 容斥方法]]
- [[Counting Method - 计数方法]]
