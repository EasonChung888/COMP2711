---
id: "Q-2017-FINAL-P09"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 13
solution_page: [13]
question_number: "9"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Multiplication by positive 1+r preserves the induction inequality and leaves a nonnegative square term."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 6
---
# Q-2017-FINAL-P09

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=13]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=13]]

## Question

Use induction to prove that, for any non-negative integer $n$, $1+rn\le(1+r)^n$, if $r>-1$.

## Official Answer

Source: [[knowledge_base/past_paper/2017-final.pdf#page=13|physical PDF page 13]].

Base case: When $n=0$,
$$\mathrm{LHS}=1+r\cdot0=1,\qquad\mathrm{RHS}=(1+r)^0=1.$$
$\mathrm{LHS}\le\mathrm{RHS}$. So, the statement is true for $n=0$.
Induction hypothesis: Now let $n\ge1$. Assume the statement is true for $n-1$, i.e.,
$$1+r\cdot(n-1)\le(1+r)^{n-1}.$$
Induction step: Consider the case of $n$,
$$\begin{aligned}(1+r)^n&=(1+r)\cdot(1+r)^{n-1}\\&\ge(1+r)\cdot(1+r\cdot(n-1))&&\text{by hypothesis}\\&=1+rn+r^2n-r^2\\&=1+rn+r^2(n-1)\\&\ge1+rn&&\text{since }r^2(n-1)\ge0.\end{aligned}$$
So, the statement is true for the case of $n$. By the principle of Mathematical Induction, we conclude that the statement is true for any non-negative integer $n$.

## Supplementary Explanation

**Answer.** The inequality holds for all $n\ge0$ and $r>-1$.

**Derivation/proof.** At $n=0$, both sides equal 1. Assume $(1+r)^k\ge1+rk$ for some $k\ge0$. Since $1+r>0$, multiply to get $(1+r)^{k+1}\ge(1+r)(1+rk)=1+r(k+1)+kr^2\ge1+r(k+1)$. The last inequality uses $k\ge0,r^2\ge0$. This proves the next case and hence all nonnegative integers.

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Mathematical Induction - 数学归纳法]]
- [[Induction Proof Method - 归纳证明法]]
