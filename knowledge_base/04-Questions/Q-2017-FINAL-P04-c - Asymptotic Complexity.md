---
id: "Q-2017-FINAL-P04-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 6
solution_page: [7]
question_number: "4(c)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]","[[Topic - Number Theory - 数论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Cryptography - 密码学]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]","[[Modular Congruence - 同余]]","[[RSA Cryptosystem - RSA 密码系统]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]","[[Modular Arithmetic Method - 模运算方法]]","[[RSA Calculation Method - RSA 计算方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Distinct rejected primes multiply to a divisor of T, so their count is bounded by log2 T below log2 n."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
marks: 3
---
# Q-2017-FINAL-P04-c

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=6]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=7]]

Source verification: The published proof incorrectly counts prime divisors of n. Rejected candidates divide T; applying the product bound to T<n repairs the proof and preserves its O(log n) conclusion.

Source correction (derived proof): PDF page7 bounds prime factors of n, but failed candidate primes divide T=(p−1)(q−1), not n=pq. Correct argument: the product of r distinct failed primes divides T and is at least2^r, so2^r≤T<n; therefore at most floor(log2 T)+1=O(log n) tests. This independently completes the proof without counting factors of the wrong integer or treating log2 n as an integer.

## Question

(c) Bob says: “Instead of picking a random $d$, I will iterate over the primes from smallest to largest: I will test $d=2,d=3,d=5,d=7,\ldots$ until I get a valid $d$.” Prove that in the worst case, this algorithm will terminate in $O(\log n)$ number of loops.

Shared context: [[STEM-2017-FINAL-P04 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2017-final.pdf#page=7|physical PDF page 7]].

Suppose $P_{\log_2n}$ consists of the first $\log_2n$ primes. Then $\prod_{x\in P_{\log_2n}}x>\prod_{x\in P_{\log_2n}}2>n$. So using the fundamental theorem of arithmetic, there cannot be more than $\log_2n$ primes which are factors of $n$. This means that Bob will have to try at most $\log_2n+1=O(\log n)$ primes.

## Supplementary Explanation

**Answer.** At most $\lfloor\log_2T\rfloor+1=O(\log n)$ prime candidates are tested.

**Derivation/proof.** A prime candidate fails precisely when it divides $T$. If $r$ distinct primes fail, their product divides $T$ and is at least $2^r$. Therefore $2^r\le T$, giving $r\le\log_2T$. The next tested prime succeeds, so there are at most $r+1$ tests. Since $T=(p-1)(q-1)<pq=n$, this is $O(\log n)$. This counts candidate tests, not prime generation time.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Cryptography - 密码学]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Modular Congruence - 同余]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Proof Strategy - 证明策略]]
- [[Asymptotic Bound Method - 渐近界方法]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[RSA Calculation Method - RSA 计算方法]]
- [[Proof Method - 证明方法]]
