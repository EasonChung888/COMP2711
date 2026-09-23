---
id: "Q-2015-MID-P04-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 9
solution_page: [9]
question_number: "4(a)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 4
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Proof Strategy - 证明策略]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "A direct rational-product proof must exhibit an integer numerator and a nonzero integer denominator."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P04-a

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=9]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=9]]

## Question

(a) Show, by direct proof, that if $x$ and $y$ are rational, then the product $xy$ is also rational.

Shared context: [[STEM-2015-MID-P04 - Shared Problem Prompt]].

## 中文解析

将两个有理数分别写成整数之比。相乘后分子、分母仍为整数，且两个非零分母的乘积不为零，恰好满足有理数定义。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 9. The Chinese derivation expands the reasoning.

**Answer.** $xy$ is rational.

**Derivation/proof.** Write $x=a/b$ and $y=c/d$ with integers $a,b,c,d$ and $b,d\ne0$. Then $xy=ac/(bd)$. Closure of integers under multiplication gives integer $ac,bd$, and $bd\ne0$. This is a rational representation of $xy$.

### 中文解答

**推导。** 由有理数定义写 $x=a/b,y=c/d$，其中 a、b、c、d 为整数，$b,d\ne0$。相乘得 $xy=ac/(bd)$。整数乘法封闭使 ac、bd 都是整数，且两个非零实数之积非零，所以 $bd\ne0$。这给出 xy 的合法整数比表示，直接证明它有理。

## Common Mistakes

- 未说明分母乘积非零。
- 把证明目标本身“有理数乘法封闭”直接当作未经说明的前提。

## Connections

- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]
