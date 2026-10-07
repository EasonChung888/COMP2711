---
id: "Q-2017-FINAL-P04-b-time"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 6
solution_page: [6,7]
question_number: "4(b)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]","[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Cryptography - 密码学]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]","[[Modular Congruence - 同余]]","[[RSA Cryptosystem - RSA 密码系统]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]","[[Modular Arithmetic Method - 模运算方法]]","[[RSA Calculation Method - RSA 计算方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 3
difficulty_basis: "Euclidean remainders at least halve every two steps, with Fibonacci inputs realizing logarithmic iterations."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-FINAL-P04-b-time

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=6]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=6]] ![[knowledge_base/past_paper/2017-final.pdf#page=7]]

## Question

What is the worst case running time of your algorithm in terms of $T$ for a single $d$? Express your time in big-$O$ notation.

Shared context: [[STEM-2017-FINAL-P04 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2017-final.pdf#page=6|physical PDF page 6]]; [[knowledge_base/past_paper/2017-final.pdf#page=7|physical PDF page 7]].

It is the Euclidean algorithm to find gcd: start with $\gcd(T,d)$, and the recursive step is to change $\gcd(a,b)$ into $\gcd(b,a\bmod b)$. It was shown in class that this takes $O(\log T)$ steps for the worst case of the Fibonacci numbers.

## Supplementary Explanation

**Answer.** $O(\log T)$ arithmetic operations under the exam's unit-cost model.

**Derivation/proof.** For successive positive remainders $a>b>r$, write $a=qb+r$ with $q\ge1$ and $r<b$. Hence $a\ge b+r>2r$: after two remainder steps the value more than halves. Starting below or at $T$ gives at most $2\log_2T+O(1)$ steps. Consecutive Fibonacci numbers make the quotient repeatedly one and require logarithmically many steps, so this is the worst-case order.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Cryptography - 密码学]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Modular Congruence - 同余]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Asymptotic Bound Method - 渐近界方法]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[RSA Calculation Method - RSA 计算方法]]
