---
id: "Q-2019-FINAL-P04-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 6
solution_page: [6]
question_number: "4(b)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]","[[Proof Method - 证明方法]]"]
question_types: ["construction"]
difficulty: 4
difficulty_basis: "Monotone exponent sequences let two increasing integer-valued functions alternate an unbounded factor advantage."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 4
---
# Q-2019-FINAL-P04-b

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=6]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=6]]

## Question

(b) Give an example of two increasing functions $f(n)$ and $g(n)$ from the set of positive integers to the set of positive integers such that neither $f(n)$ is $O(g(n))$ nor $g(n)$ is $O(f(n))$. Justify your answer.

## 中文解析

要让两函数都递增，却互相没有大 O 关系，可让优势在奇偶下标交替。源解的指数序列各自不减，所以函数仍递增；偶数时 f 比 g 大 n 倍，奇数时反过来，两个方向都无法用固定常数控制。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 6. The Chinese derivation expands the reasoning.

**Answer.** $f(n)=n^{2\lfloor n/2\rfloor+1}$ and $g(n)=n^{2\lceil n/2\rceil}$.

**Derivation/proof.** Both exponent sequences are positive and nondecreasing, and the base n strictly increases, so each function is strictly increasing on positive integers. For even n, the exponents are n+1 and n, so $f(n)/g(n)=n$. For odd n, the exponents are n and n+1, so $g(n)/f(n)=n$. Each ratio is therefore unbounded along an infinite subsequence. Any purported eventual constant big-O bound fails on its corresponding subsequence.

### 中文解答

**推导。** 取 $f(n)=n^{2\lfloor n/2\rfloor+1}$、$g(n)=n^{2\lceil n/2\rceil}$。两函数的指数都是正整数且随 $n$ 不减，底数严格增加，因此函数值都是正整数且严格递增。偶数 $n$ 时指数分别为 $n+1,n$，所以 $f(n)/g(n)=n$；奇数 $n$ 时指数分别为 $n,n+1$，所以 $g(n)/f(n)=n$。两类子序列都含任意大的 $n$，各比值均无最终常数上界，故 $f\ne O(g)$ 且 $g\ne O(f)$。

## Common Mistakes

- 构造交替振荡但并不递增的函数。
- 只证明一个方向的比值无界。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Proof Strategy - 证明策略]]
- [[Asymptotic Bound Method - 渐近界方法]]
- [[Proof Method - 证明方法]]
