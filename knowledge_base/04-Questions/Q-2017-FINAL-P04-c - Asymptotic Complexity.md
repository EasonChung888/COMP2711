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

## 中文解析

不合格的素数必须整除 T。若有 r 个不同坏素数，它们乘积至少是二的 r 次方，又因为乘积整除 T 而不超过 T，所以 r 至多对数大小。再加一个首次成功的候选，便得到所需循环界。

## Detailed Solution

Provenance: derived; independently derived correction; discrepant source material is retained in Source. The Chinese derivation expands the reasoning.

**Answer.** At most $\lfloor\log_2T\rfloor+1=O(\log n)$ prime candidates are tested.

**Derivation/proof.** A prime candidate fails precisely when it divides $T$. If $r$ distinct primes fail, their product divides $T$ and is at least $2^r$. Therefore $2^r\le T$, giving $r\le\log_2T$. The next tested prime succeeds, so there are at most $r+1$ tests. Since $T=(p-1)(q-1)<pq=n$, this is $O(\log n)$. This counts candidate tests, not prime generation time.

### 中文解答

**推导。** 一个质数候选失败当且仅当它整除 $T=(p-1)(q-1)$，不是整除 $n=pq$。若已有 $r$ 个不同质数失败，它们互素，乘积整除 $T$；每个至少为 $2$，所以 $2^r\le\prod_{i=1}^r\ell_i\le T<n$。因此失败数 $r\le\lfloor\log_2T\rfloor$，加上下一个成功候选，测试数至多 $\lfloor\log_2T\rfloor+1=O(\log n)$。印本误数 $n$ 的质因子，现以失败条件所对应的 $T$ 完成独立证明；这里仅计测试循环，不计生成质数的时间。

## Common Mistakes

- 声称小于 n 的素数总数只有对数个。
- 照抄来源把应整除 T 的素数写成整除 n。

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
