---
id: "Q-2018-FINAL-P02-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 4
solution_page: [4]
question_number: "2(c)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]","[[Subtopic - Recursion - 递归]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]","[[Recurrence Relations - 递推关系]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]","[[Recurrence-Solving Method - 递推求解法]]","[[Counting Method - 计数方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Three base cases and Fibonacci monotonicity compare the different recurrence offsets."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P02-c

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=4]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=4]]

## Question

(c) Let $F_n$ be the Fibonacci numbers. Prove that $E_n\le F_n$ for all $n\ge1$ using induction. You may use the result of (b).

Shared context: [[STEM-2018-FINAL-P02 - Shared Problem Prompt]].

## 中文解析

铺法递推使用前一项和前三项，而斐波那契使用前一项和前两项。归纳假设先把铺法数换成斐波那契数，再利用其单调不减把前三项换成前两项；三个基例保证所有调用合法。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** $E_n\le F_n$ for every $n\ge1$, with $F_1=F_2=1$.

**Derivation/proof.** The base values are $E_1=1=F_1$, $E_2=1=F_2$, $E_3=2=F_3$. For $n\ge4$, assume the inequality for all smaller positive indices. Then $E_n=E_{n-1}+E_{n-3}\le F_{n-1}+F_{n-3}\le F_{n-1}+F_{n-2}=F_n$. The middle inequality follows because the positive Fibonacci sequence is nondecreasing. Strong induction completes the proof.

### 中文解答

**推导。** 采用 $F_1=F_2=1$、$F_n=F_{n-1}+F_{n-2}$ 的斐波那契数。基础为 $E_1=F_1=1$，$E_2=F_2=1$，$E_3=F_3=2$。设 $n\ge4$ 且所有较小正指标已满足不等式，由(b)得 $E_n=E_{n-1}+E_{n-3}\le F_{n-1}+F_{n-3}\le F_{n-1}+F_{n-2}=F_n$。中间一步成立，因为正斐波那契数非递减（后一项等于前两正项之和）。三项基础及强归纳步完成全体正整数证明。

## Common Mistakes

- 只检查两个基例却调用第三个下标。
- 直接声称两个不同递推相同。

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Subtopic - Recursion - 递归]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Mathematical Induction - 数学归纳法]]
- [[Recurrence Relations - 递推关系]]
- [[Counting Principles - 计数原理]]
- [[Induction Proof Method - 归纳证明法]]
- [[Recurrence-Solving Method - 递推求解法]]
- [[Counting Method - 计数方法]]
