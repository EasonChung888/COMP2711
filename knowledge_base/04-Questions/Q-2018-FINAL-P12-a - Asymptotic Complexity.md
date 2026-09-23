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

## 中文解析

Theta 同时要求上下界。分别写出两函数与 g 的上下夹逼，在两个阈值都满足之后把对应不等式相加，便得到新的正数上下界常数；这里函数为正，避免了相互抵消。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 17. The Chinese derivation expands the reasoning.

**Answer.** True.

**Derivation/proof.** There are positive constants $a_i,b_i$ and thresholds $N_i$ with $a_ig(x)\le f_i(x)\le b_ig(x)$ for $x\ge N_i$, for $i=1,2$. For $x\ge\max(N_1,N_2)$, addition yields $(a_1+a_2)g(x)\le f_1(x)+f_2(x)\le(b_1+b_2)g(x)$. Both new constants are positive and independent of $x$, proving the required $\Theta$ bound.

### 中文解答

**推导。** 命题为真。由两项分别为 $\Theta(g)$，存在正数 $a_i,b_i$ 及阈值 $N_i$，使 $x\ge N_i$ 时 $a_i g(x)\le f_i(x)\le b_i g(x)$（$i=1,2$）。取共同阈值 $N=\max(N_1,N_2)$ 后同时相加，得 $(a_1+a_2)g(x)\le f_1(x)+f_2(x)\le(b_1+b_2)g(x)$。两个新常数皆正且不依赖 $x$，所以符合 $\Theta$ 的上下界定义。正值条件也排除了正负相消问题。

## Common Mistakes

- 只给大 O 上界却声称已证 Theta。
- 用依赖 x 的量作常数。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Proof Strategy - 证明策略]]
- [[Asymptotic Bound Method - 渐近界方法]]
- [[Proof Method - 证明方法]]
