---
id: "Q-2025S-FINAL-P04-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 5
question_number: "4(a)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Prime Factorization and LCM - 素因数分解与最小公倍数]]"]
methods: ["[[Prime Exponent Method - 素因数指数方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Choose the maximum exponent of each prime in an LCM."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 1
---
# Q-2025S-FINAL-P04-a

## Source

[[2025 Spring Final]]; printed item 4(a); 1 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=5]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=5]]

## Question

![[STEM-2025S-FINAL-P04 - Shared Problem Prompt#Shared printed wording]]

(a) [1 pt] Assume $x=2^3\cdot5^6$ and $y=2^4\cdot5^3$. What is the least common multiple of $x$ and $y$?

## 中文解析

公共倍数的每个素因数指数必须至少达到两个原数指数中的最大值。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $2^4\cdot5^6$。

**推导。** 要同时被 $x$ 和 $y$ 整除，二的指数至少为 $\max(3,4)=4$，五的指数至少为 $\max(6,3)=6$。取这两个最小允许指数得到 $2^4\cdot5^6$；它除以 $x$ 为二，除以 $y$ 为 $5^3$，因此确是公共倍数。任意别的正公共倍数都含这些指数，故不可能更小。

## Common Mistakes

- 最小公倍数取最大指数，取最小指数得到的是最大公因数。
- 不应把指数相加，那只给出乘积而未保证最小。

## Connections

- [[Topic - Number Theory - 数论]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Prime Factorization and LCM - 素因数分解与最小公倍数]]
- [[Prime Exponent Method - 素因数指数方法]]

Choose the maximum exponent of each prime in an LCM.
