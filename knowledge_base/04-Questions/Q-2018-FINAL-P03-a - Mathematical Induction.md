---
id: "Q-2018-FINAL-P03-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 5
solution_page: [5]
question_number: "3(a)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]","[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]","[[Recursive Structures - 递归结构]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]","[[Structural Induction Method - 结构归纳法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Closure under differences first gives zero and negatives, then induction builds positive and negative multiples."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P03-a

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=5]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=5]]

Source verification: The printed induction step mixes a and n, writing $-(a+1)n$; the required expressions are $-a(k+1)$ and $a(k+1)$.

Source correction: PDF page5 switches k/n in the induction step and prints −an−a=−(a+1)n and an−(−a)=(a+1)n. The correct equalities are −an−a=−a(n+1) and an−(−a)=a(n+1), or the consistent k versions. The official closure-under-integer-multiples conclusion and difference-closure induction are unchanged.

## Question

(a) Let $P(n)$ be the statement “for any integer $a$, if $a\in S$ then $an\in S$ and $-an\in S$.” Prove $P(n)$ is true for all positive integers $n$ by induction.

Shared context: [[STEM-2018-FINAL-P03 - Shared Problem Prompt]].

## 中文解析

先用同一个元素相减得到零，再得到相反数，这样递归规则便能模拟加法。归纳时同时保留正倍数与负倍数，下一步可分别用差构造两者。这里 an 表示乘积，不是指数。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 5. The Chinese derivation expands the reasoning.

**Answer.** Every positive and negative integer multiple of an element of $S$ lies in $S$.

**Derivation/proof.** For any $a\in S$, closure gives $0=a-a\in S$ and $-a=0-a\in S$, proving $P(1)$. Assume $ak,-ak\in S$. Then $a(k+1)=ak-(-a)\in S$ and $-a(k+1)=(-ak)-a\in S$. These are exactly the two assertions for $k+1$, so induction proves $P(n)$. Zero multiples were separately obtained at the start.

### 中文解答

**推导。** 任取 $a\in S$，先用差闭包得 $0=a-a\in S$，再得 $-a=0-a\in S$，于是 $n=1$ 的正负倍数都成立。设 $ak,-ak\in S$ 且 $k\ge1$。由 $-a\in S$，有 $a(k+1)=ak-(-a)\in S$；同时 $-a(k+1)=(-ak)-a\in S$。这恰给出 $P(k+1)$，所以归纳保证全部正整数倍及负倍属于 $S$。印本步进中把乘数位置写成 $(a+1)n$，正确要增加的是倍数指标，得到 $a(n+1)$。

## Common Mistakes

- 把 an 误读成 a 的 n 次方。
- 沿用源解把 a(k+1) 写成 (a+1)k 的笔误。

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Subtopic - Recursion - 递归]]
- [[Mathematical Induction - 数学归纳法]]
- [[Recursive Structures - 递归结构]]
- [[Induction Proof Method - 归纳证明法]]
- [[Structural Induction Method - 结构归纳法]]
