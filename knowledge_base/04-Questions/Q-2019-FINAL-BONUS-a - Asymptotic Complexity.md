---
id: "Q-2019-FINAL-BONUS-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 17
solution_page: [17]
question_number: "Bonus Problem(a)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]","[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]","[[Subtopic - Induction - 数学归纳法]]","[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]","[[Mathematical Induction - 数学归纳法]]","[[Recurrence Relations - 递推关系]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]","[[Induction Proof Method - 归纳证明法]]","[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["classification"]
difficulty: 4
difficulty_basis: "The hidden linear-bound constant increases when the recurrence is applied, so the induction does not preserve a uniform bound."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 3
---
# Q-2019-FINAL-BONUS-a

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=17]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=17]]

## Question

(a) Identify the mistake in the proof.

Shared context: [[STEM-2019-FINAL-BONUS - Shared Problem Prompt]].

## 中文解析

大 O 需要对所有足够大的 n 使用同一个常数，而源证明每递推一次都把常数放大后再藏回 O 记号。把假设写成明确的 C(n-1)，就会看见下一步无法维持同一个 Cn，上界并未被归纳保持。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 17. The Chinese derivation expands the reasoning.

**Answer.** The induction silently changes the hidden big-$O$ constant instead of preserving one constant for all n.

**Derivation/proof.** An actual claim $f_n\le Cn$ needs one fixed C and a threshold. From the induction hypothesis $f_{n-1}\le C(n-1)$, the recurrence gives only $f_n\le2C(n-1)+n=(2C+1)n-2C$. This is generally not bounded by the same $Cn$, since their difference is $(C+1)n-2C$, positive for large n. Writing O again hides this growth of constants. A statement about the single value f(1) also cannot by itself establish an asymptotic bound.

### 中文解答

**推导。** 大 O 必须由同一个常数对所有充分大的下标控制，不能每次归纳都重新选更大的常数。若试图归纳固定的 $f_{n-1}\le C(n-1)$，递推只给 $f_n\le2C(n-1)+n=(2C+1)n-2C$。要推出同一 $f_n\le Cn$，还需 $(C+1)n\le2C$，这对足够大的 $n$ 不成立。错误证明把这些不同常数都藏入 $O(n)$，掩盖了无法闭合的归纳步骤；单个 $f(1)$ 的值也不是一个渐近命题的有效归纳基例。

## Common Mistakes

- 笼统声称归纳中永远不能出现渐近符号。
- 只检查一两个小 n 的数值而当成渐近证明。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - Induction - 数学归纳法]]
- [[Subtopic - Recursion - 递归]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Mathematical Induction - 数学归纳法]]
- [[Recurrence Relations - 递推关系]]
- [[Asymptotic Bound Method - 渐近界方法]]
- [[Induction Proof Method - 归纳证明法]]
- [[Recurrence-Solving Method - 递推求解法]]
