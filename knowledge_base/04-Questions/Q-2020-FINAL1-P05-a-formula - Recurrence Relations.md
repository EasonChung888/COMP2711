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

## Official Answer

Source: [[knowledge_base/past_paper/2020-final-part-1.pdf#page=4|physical PDF page 4]].

$f_n(x)=(-1)^nn!\cdot x^{-(n+1)}$. We can prove this by induction. First $f_0(x)=(-1)^0\cdot0!\cdot x^{-1}=x^{-1}$. Suppose for some $k\ge0$, $f_k(x)=(-1)^kk!\cdot x^{-(k+1)}$, then
$$f_{k+1}(x)=f\prime_k(x)=(-1)^kk!\cdot[-(k+1)]\cdot x^{-(k+2)}=(-1)^{k+1}(k+1)!\cdot x^{-(k+2)}.$$

## Supplementary Explanation

**Answer.** $f_n(x)=(-1)^n n!x^{-(n+1)}$ for $x\ne0$.

**Derivation/proof.** The first terms are $x^{-1},-x^{-2},2x^{-3},-6x^{-4}$. At differentiation number j the current exponent is -j, so the coefficient is multiplied by -j and the exponent decreases by one. After n applications the coefficient is $(-1)(-2)\cdots(-n)=(-1)^n n!$ and exponent is -(n+1). The x≠0 domain is inherited from f0.

The first four functions are $x^{-1},-x^{-2},2x^{-3},-6x^{-4}$. The condition $x\ne0$ comes from the original function.

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Subtopic - Induction - 数学归纳法]]
- [[Recurrence Relations - 递推关系]]
- [[Mathematical Induction - 数学归纳法]]
- [[Recurrence-Solving Method - 递推求解法]]
- [[Induction Proof Method - 归纳证明法]]

- Used by: [[Q-2020-FINAL1-P05-a-proof - Mathematical Induction]]

- Used by: [[Q-2020-FINAL1-P05-b - Asymptotic Complexity]]
