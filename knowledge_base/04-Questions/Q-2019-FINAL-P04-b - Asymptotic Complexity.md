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

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=6|physical PDF page 6]].

We want the functions to play leap-frog, with first one much bigger than the other. Something like this will do the trick: Let $f(n)=n^{2\lfloor n/2\rfloor+1}$ and $g(n)=n^{2\lceil n/2\rceil}$. Thus, $\{f(1)=1^1,g(1)=1^2\},\{f(2)=2^3,g(2)=2^2\},\{f(3)=3^3,g(3)=3^4\},\{f(4)=4^5,g(4)=4^4\}$, and so on. Then for even $n$ we have $f(n)/g(n)=n$, and for odd $n$ we have $g(n)/f(n)=n$. Because both ratios are unbounded, neither function is big-O of the other.

## Supplementary Explanation

**Answer.** $f(n)=n^{2\lfloor n/2\rfloor+1}$ and $g(n)=n^{2\lceil n/2\rceil}$.

**Derivation/proof.** Both exponent sequences are positive and nondecreasing, and the base n strictly increases, so each function is strictly increasing on positive integers. For even n, the exponents are n+1 and n, so $f(n)/g(n)=n$. For odd n, the exponents are n and n+1, so $g(n)/f(n)=n$. Each ratio is therefore unbounded along an infinite subsequence. Any purported eventual constant big-O bound fails on its corresponding subsequence.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Proof Strategy - 证明策略]]
- [[Asymptotic Bound Method - 渐近界方法]]
- [[Proof Method - 证明方法]]
