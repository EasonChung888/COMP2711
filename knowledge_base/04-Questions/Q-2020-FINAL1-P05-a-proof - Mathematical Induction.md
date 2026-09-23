---
id: "Q-2020-FINAL1-P05-a-proof"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-1.pdf"
source_page: 3
question_number: "5(a)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]","[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]","[[Recurrence Relations - 递推关系]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]","[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "The induction step must preserve both factorial coefficient and negative exponent."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
related_questions: ["[[Q-2020-FINAL1-P05-a-formula - Recurrence Relations]]","[[Q-2020-FINAL1-P05-b - Asymptotic Complexity]]"]
---
# Q-2020-FINAL1-P05-a-proof

## Source

![[knowledge_base/past_paper/2020-final-part-1.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-1.pdf#page=4]]

Prerequisite context (editorial): [[Q-2020-FINAL1-P05-a-formula - Recurrence Relations]]. “Its” refers to the separately requested formula $f_n(x)=(-1)^n n!x^{-(n+1)}$ for $x\ne0$ and $n\ge0$. This note proves that formula from $f_0(x)=x^{-1}$ and the given differentiation recurrence. “其正确性”指这一通项，而不是证明题设已经给出的幂函数求导规则。

## Question

Use induction to prove its correctness.

Shared context: [[STEM-2020-FINAL1-P05 - Shared Problem Prompt]].

## 中文解析

归纳起点是 n=0，需要使用零阶乘等于一。归纳步骤分别跟踪符号、阶乘和指数，负的 k+1 同时翻转符号并把 k! 扩展成 (k+1)!；每部分都与下一阶公式吻合才算完成证明。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** The formula $f_n(x)=(-1)^n n!x^{-(n+1)}$ holds for every $n\ge0$ and $x\ne0$.

**Derivation/proof.** At n=0 the expression is $(-1)^0 0!x^{-1}=x^{-1}=f_0(x)$. Assume the formula holds at k. By the given recurrence and power rule, $f_{k+1}(x)=[(-1)^k k!x^{-(k+1)}]'=(-1)^k k![-(k+1)]x^{-(k+2)}=(-1)^{k+1}(k+1)!x^{-(k+2)}$. This is exactly the asserted formula at k+1. Induction proves it on the inherited nonzero domain.

### 中文解答

**推导。** 证明对每个 $n\ge0$、原定义域 $x\ne0$ 有 $f_n(x)=(-1)^nn!x^{-(n+1)}$。基例 $n=0$：$(-1)^00!x^{-1}=x^{-1}=f_0(x)$。若在 $n=k$ 成立，用递推与给定幂函数求导法则得

$$f_{k+1}(x)=f_k'(x)=(-1)^kk![-(k+1)]x^{-(k+2)}$$
$$=(-1)^{k+1}(k+1)!x^{-(k+2)}.$$

这恰是下标 $k+1$ 的公式，故归纳成立。符号翻转、阶乘多乘 $k+1$、指数降一都由同一个导数步骤同时产生。

## Common Mistakes

- 从 n=1 起证而忘记源递推的 n=0。
- 求导后指数或符号少变一次。

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Subtopic - Recursion - 递归]]
- [[Mathematical Induction - 数学归纳法]]
- [[Recurrence Relations - 递推关系]]
- [[Induction Proof Method - 归纳证明法]]
- [[Recurrence-Solving Method - 递推求解法]]

- Prerequisite: [[Q-2020-FINAL1-P05-a-formula - Recurrence Relations]]

- Used by: [[Q-2020-FINAL1-P05-b - Asymptotic Complexity]]
