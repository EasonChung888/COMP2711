---
id: "Q-2016-FINAL-P07-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Final]]"
source_pdf: "knowledge_base/past_paper/2016-final.pdf"
source_page: 13
solution_page: [13,14]
question_number: "7(c)"
year: 2016
term: "fall"
exam_type: "final"
marks: 3
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]","[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]","[[Recurrence Relations - 递推关系]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]","[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Substituting the n minus one closed form into the recurrence proves the next value after checking the base."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-FINAL-P07-c

## Source

![[knowledge_base/past_paper/2016-final.pdf#page=13]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-final.pdf#page=13]] ![[knowledge_base/past_paper/2016-final.pdf#page=14]]

## Question

(c) Prove that the closed form solution in part (b) is correct by induction.

Shared context: [[STEM-2016-FINAL-P07 - Shared Problem Prompt]].

## 中文解析

这次归纳目标是显式公式。先验证一人时等于一，再假设前一规模是二的幂减一，代入已建立的递推关系，化简常数项即可得到当前规模公式。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 13, 14. The Chinese derivation expands the reasoning.

**Answer.** For every $n\ge1$, $T(n)=2^n-1$.

**Derivation/proof.** Base case: $T(1)=1=2^1-1$. Assume $T(n-1)=2^{n-1}-1$ for $n>1$. Then $T(n)=2T(n-1)+1=2(2^{n-1}-1)+1=2^n-1$. By induction the formula holds for all positive integers.

### 中文解答

**推导。** 基础n=1时 $T(1)=1=2^1-1$。设对n>1的前一项成立，即 $T(n-1)=2^{n-1}-1$。用已建立的递推，$T(n)=2T(n-1)+1=2(2^{n-1}-1)+1=2^n-2+1=2^n-1$。所以从基础逐项推出所有正整数n的公式。此处验证的是闭式，与(a)证明计数递推的归纳目标不同。

## Common Mistakes

- 把待证明的 $T(n)$ 公式直接作为归纳假设。
- 用空委员会也允许的 $2^n$ 作为结论。

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Subtopic - Recursion - 递归]]
- [[Mathematical Induction - 数学归纳法]]
- [[Recurrence Relations - 递推关系]]
- [[Induction Proof Method - 归纳证明法]]
- [[Recurrence-Solving Method - 递推求解法]]
