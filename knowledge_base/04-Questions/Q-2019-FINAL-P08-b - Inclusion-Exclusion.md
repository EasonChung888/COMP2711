---
id: "Q-2019-FINAL-P08-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 10
solution_page: [10]
question_number: "8(b)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Inclusion-Exclusion - 容斥原理]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Inclusion-Exclusion - 容斥原理]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Inclusion-Exclusion Method - 容斥方法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Two forbidden-letter events overlap in the strings using only 24 letters."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 3
---
# Q-2019-FINAL-P08-b

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=10]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=10]]

## Question

(b) the letters a and b?

Shared context: [[STEM-2019-FINAL-P08 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=10|physical PDF page 10]].

We use $W_a$ to denote the set of words containing $a$, and similarly $W_b,W_{a\land b},W_{a\lor b}$. By the inclusion-exclusion rule, we have $\lvert W_{a\lor b}\rvert=\lvert W_a\rvert+\lvert W_b\rvert-\lvert W_{a\land b}\rvert$.
From (a), we know $\lvert W_a\rvert=\lvert W_b\rvert=26^6-25^6$. Similarly, $\lvert W_{a\lor b}\rvert=26^6-24^6$. So
$$\lvert W_{a\land b}\rvert=\lvert W_a\rvert+\lvert W_b\rvert-\lvert W_{a\lor b}\rvert=2(26^6-25^6)-(26^6-24^6)=26^6-2\cdot25^6+24^6.$$

## Supplementary Explanation

**Answer.** $26^6-2\cdot25^6+24^6$.

**Derivation/proof.** Let A be strings missing a and B strings missing b. Their sizes are $25^6$ each, and their intersection misses both, with $24^6$ strings. The strings containing both are outside $A\cup B$. Inclusion-exclusion gives $26^6-(25^6+25^6-24^6)$, which simplifies to the answer.

The intersection omits both named letters, leaving twenty-four choices at each position, so $|A\cap B|=24^6$. Inclusion-exclusion adds this intersection back after the two subtractions.

## Connections

- [[Subtopic - Inclusion-Exclusion - 容斥原理]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Inclusion-Exclusion - 容斥原理]]
- [[Counting Principles - 计数原理]]
- [[Inclusion-Exclusion Method - 容斥方法]]
- [[Counting Method - 计数方法]]
