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

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=5|physical PDF page 5]].

(b) Both $a$ and $b$ are divisors of $2^35^711^{13}$, and so $a=2^x5^y11^z$ and $b=2^s5^t11^u$ for some nonnegative integers $x,y,z,s,t,u$. Because $2^35^711^{13}$ is the least common multiple, $\max(x,s)=3$, $\max(y,t)=7$, and $\max(z,u)=13$. Hence $(x,s)$ can be equal to $(0,3),(1,3),(2,3),(3,3),(3,2),(3,1)$, or $(3,0)$, so there are 7 choices for $(x,s)$. Similarly, there are 15 and 27 choices for $(y,t)$ and $(z,u)$, respectively. By the product rule, there are $7\times15\times27=2835$ ordered pairs of positive integers $(a,b)$ having $2^35^711^{13}$ as their least common multiple.

## Supplementary Explanation

**Answer.** $2835$.

**Derivation/proof.** Since both numbers divide the target, write $a=2^u5^v11^w$ and $b=2^s5^t11^z$ with nonnegative exponents. Require $\max(u,s)=3$, $\max(v,t)=7$ and $\max(w,z)=13$. For target exponent e, there are $(e+1)^2$ candidate pairs; subtract the $e^2$ pairs with both exponents smaller than e. This leaves $(e+1)^2-e^2=2e+1$. The three primes therefore contribute seven, fifteen and twenty-seven ordered choices, giving $7\cdot15\cdot27=2835$. No other prime may appear, since that would change the LCM.

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
