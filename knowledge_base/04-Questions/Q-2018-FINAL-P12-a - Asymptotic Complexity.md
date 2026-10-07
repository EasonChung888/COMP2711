---
id: "Q-2018-FINAL-P12-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 17
solution_page: [17]
question_number: "12(a)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Adding two positive upper and lower comparison inequalities preserves a two-sided asymptotic bound."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P12-a

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=17]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=17]]

## Question

a) Let $f_1(x),f_2(x),g(x)$ be functions from the set of real numbers to the set of positive real numbers. If $f_1(x)$ and $f_2(x)$ are both $\Theta(g(x))$, then $f_1(x)+f_2(x)$ is also $\Theta(g(x))$.

## Official Answer

Source: [[knowledge_base/past_paper/2018-final.pdf#page=17|physical PDF page 17]].

This is true. There exist positive constraints $C_1,C'_1,C_2,C'_2,k_1,k'_1,k_2,k'_2$, such that $f_1(x)\ge C_1g(x)$ for all $x>k_1$, $f_1(x)\le C'_1g(x)$ for all $x>k'_1$, $f_2(x)\ge C_2g(x)$ for all $x>k_2$, and $f_2(x)\le C'_2g(x)$ for all $x>k'_2$.
Adding the first and third inequality, we get that $f_1(x)+f_2(x)\ge(C_1+C_2)g(x)$ for all $x>\max\{k_1,k_2\}$.
Adding the second and fourth inequality, we get that $f_1(x)+f_2(x)\le(C'_1+C'_2)g(x)$ for all $x>\max\{k'_1,k'_2\}$.
Hence $f_1(x)+f_2(x)$ is $\Theta(g(x))$ with constraints $(C_1+C_2),(C'_1+C'_2),\max\{k_1,k_2\},\max\{k'_1,k'_2\}$.

## Supplementary Explanation

**Answer.** True.

**Derivation/proof.** There are positive constants $a_i,b_i$ and thresholds $N_i$ with $a_ig(x)\le f_i(x)\le b_ig(x)$ for $x\ge N_i$, for $i=1,2$. For $x\ge\max(N_1,N_2)$, addition yields $(a_1+a_2)g(x)\le f_1(x)+f_2(x)\le(b_1+b_2)g(x)$. Both new constants are positive and independent of $x$, proving the required $\Theta$ bound.

Choose $N=\max(N_1,N_2)$ so that both asymptotic inequalities hold simultaneously. Beyond that threshold their constants can be combined to prove the asserted bound.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Proof Strategy - 证明策略]]
- [[Asymptotic Bound Method - 渐近界方法]]
- [[Proof Method - 证明方法]]
