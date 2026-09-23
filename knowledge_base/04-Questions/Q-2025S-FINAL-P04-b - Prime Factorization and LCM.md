---
id: "Q-2025S-FINAL-P04-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 5
question_number: "4(b)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Prime Factorization and LCM - 素因数分解与最小公倍数]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Prime Exponent Method - 素因数指数方法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Count ordered prime-exponent pairs with a fixed maximum and multiply over three primes."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 5
---
# Q-2025S-FINAL-P04-b

## Source

[[2025 Spring Final]]; printed item 4(b); 5 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=5]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=5]]

## Question

![[STEM-2025S-FINAL-P04 - Shared Problem Prompt#Shared printed wording]]

(b) [5 pts] Determine the number of ordered pairs of positive integers $(a,b)$ such that the least common multiple of $a$ and $b$ is $2^3\cdot5^7\cdot11^{13}$. Briefly explain your answer.

## 中文解析

每个素因数单独满足“两个指数的最大值等于目标指数”，不同素因数独立选择。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $2835$。

**推导。** 因为 $a,b$ 都整除目标公倍数，可写 $a=2^u5^v11^w$、$b=2^s5^t11^z$，指数均非负。要求 $\max(u,s)=3$、$\max(v,t)=7$、$\max(w,z)=13$。对于目标指数 $e$，指数对共有 $(e+1)^2$ 个候选，扣除两指数都小于 $e$ 的 $e^2$ 个，剩 $(e+1)^2-e^2=2e+1$。因此三种素因数分别有七、十五、二十七种有序指数对，product rule 给出 $7\cdot15\cdot27=2835$。没有其他素因数可出现，否则 LCM 会超出目标。

## Common Mistakes

- 有序数对不能把 $(a,b)$ 和 $(b,a)$ 合并或再除以二。
- 每个素数的最高次幂至少在一个数中达到，不能只要求指数不超过上限。

## Connections

- [[Topic - Number Theory - 数论]]
- [[Topic - Counting - 计数]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Prime Factorization and LCM - 素因数分解与最小公倍数]]
- [[Counting Principles - 计数原理]]
- [[Prime Exponent Method - 素因数指数方法]]
- [[Counting Method - 计数方法]]

Count ordered prime-exponent pairs with a fixed maximum and multiply over three primes.
