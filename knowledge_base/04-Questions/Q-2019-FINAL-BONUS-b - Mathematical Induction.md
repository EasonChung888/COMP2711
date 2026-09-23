---
id: "Q-2019-FINAL-BONUS-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 17
solution_page: [17]
question_number: "Bonus Problem(b)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]","[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]","[[Subtopic - Algorithms - 算法]]","[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]","[[Asymptotic Complexity - 渐近复杂度]]","[[Recurrence Relations - 递推关系]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]","[[Asymptotic Bound Method - 渐近界方法]]","[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["proof"]
difficulty: 4
difficulty_basis: "Strengthening the exponential bound with a negative linear correction absorbs the added n term in the recurrence."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 7
---
# Q-2019-FINAL-BONUS-b

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=17]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=17]]

## Question

(b) Prove that $f(n)=O(2^n)$ by induction.

Shared context: [[STEM-2019-FINAL-BONUS - Shared Problem Prompt]].

## 中文解析

若只假设不超过 C 乘二的 n 次方，递推额外加 n 会超出目标。加强为减去 $n+2$ 的形式后，负的一次项恰好吸收新增成本；这里甚至可证明精确通项，再用固定常数二得到大 O。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 17. The Chinese derivation expands the reasoning.

**Answer.** $f_n=2^{n+1}-n-2\le2\cdot2^n$, so $f_n=O(2^n)$.

**Derivation/proof.** Prove the stronger exact identity by induction. At n=1, $2^2-1-2=1=f_1$. Assume $f_{n-1}=2^n-(n-1)-2$. Then $f_n=2[2^n-(n-1)-2]+n=2^{n+1}-n-2$. Thus the identity holds for all $n\ge1$, and immediately gives the fixed bound $f_n\le2\cdot2^n$. Equivalently, the source's strengthened inequality $f_n\le2\cdot2^n-n-2$ propagates by the same algebra. Directly iterating the recurrence verifies its first values $1,4,11,26$, matching the formula.

### 中文解答

**推导。** 强化为精确恒等式 $f_n=2^{n+1}-n-2$ 并归纳。基例 $n=1$ 时右边 $4-1-2=1=f_1$。假设 $f_{n-1}=2^n-(n-1)-2$，则

$$f_n=2f_{n-1}+n=2(2^n-(n-1)-2)+n=2^{n+1}-n-2.$$

因此对所有 $n\ge1$ 恒等式成立。递推产生的 $f_n$ 为正，且 $f_n\le2\cdot2^n$，于是用固定常数 $C=2$、阈值 $n_0=1$ 得 $f(n)=O(2^n)$。同样代数也证明印本的强化不等式。前四值 $1,4,11,26$ 同时吻合递推与公式，作额外核对。

## Common Mistakes

- 使用未加强的归纳假设后把多出的 n 丢掉。
- 把常数 C 随着 n 改变而仍称为固定界。

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - Recursion - 递归]]
- [[Mathematical Induction - 数学归纳法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Recurrence Relations - 递推关系]]
- [[Induction Proof Method - 归纳证明法]]
- [[Asymptotic Bound Method - 渐近界方法]]
- [[Recurrence-Solving Method - 递推求解法]]
