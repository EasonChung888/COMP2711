---
id: "Q-2020-FINAL1-P05-a-formula"
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
subtopics: ["[[Subtopic - Recursion - 递归]]","[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Recurrence Relations - 递推关系]]","[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]","[[Induction Proof Method - 归纳证明法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Successive applications of the supplied power rule multiply by the next negative integer."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
related_questions: ["[[Q-2020-FINAL1-P05-a-proof - Mathematical Induction]]","[[Q-2020-FINAL1-P05-b - Asymptotic Complexity]]"]
---
# Q-2020-FINAL1-P05-a-formula

## Source

![[knowledge_base/past_paper/2020-final-part-1.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-1.pdf#page=4]]

## Question

Find the general formula of $f_n(x)$.

Shared context: [[STEM-2020-FINAL1-P05 - Shared Problem Prompt]].

## 中文解析

每次应用题目给定的幂函数规则，指数减一，系数乘当前负指数。连续 n 次乘积给出交替符号与 n 的阶乘，指数则变成负 n 减一；原函数在零点未定义，不能忽略。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $f_n(x)=(-1)^n n!x^{-(n+1)}$ for $x\ne0$.

**Derivation/proof.** The first terms are $x^{-1},-x^{-2},2x^{-3},-6x^{-4}$. At differentiation number j the current exponent is -j, so the coefficient is multiplied by -j and the exponent decreases by one. After n applications the coefficient is $(-1)(-2)\cdots(-n)=(-1)^n n!$ and exponent is -(n+1). The x≠0 domain is inherited from f0.

### 中文解答

**推导。** 从 $f_0=x^{-1}$ 开始求导，前四项是 $x^{-1},-x^{-2},2x^{-3},-6x^{-4}$。第 $j$ 次求导时，把系数乘当前指数 $-j$，并使指数降低一。因此 $n$ 次后系数为 $(-1)(-2)\cdots(-n)=(-1)^n n!$，幂指数为 $-(n+1)$，得到 $f_n(x)=(-1)^n n!x^{-(n+1)}$。定义域 $x\ne0$ 直接继承自初函数，不是补加给题目的前提。下一原子用归纳严格核验。

## Common Mistakes

- 把系数写成 n 而不是 n 的阶乘。
- 漏掉随 n 变化的正负号。

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Subtopic - Induction - 数学归纳法]]
- [[Recurrence Relations - 递推关系]]
- [[Mathematical Induction - 数学归纳法]]
- [[Recurrence-Solving Method - 递推求解法]]
- [[Induction Proof Method - 归纳证明法]]

- Used by: [[Q-2020-FINAL1-P05-a-proof - Mathematical Induction]]

- Used by: [[Q-2020-FINAL1-P05-b - Asymptotic Complexity]]
