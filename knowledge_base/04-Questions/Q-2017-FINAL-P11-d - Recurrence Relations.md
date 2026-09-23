---
id: "Q-2017-FINAL-P11-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 15
solution_page: [15]
question_number: "11(d)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]","[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Recurrence Relations - 递推关系]]","[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]","[[Induction Proof Method - 归纳证明法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Shifting T by two turns the nonhomogeneous recurrence into a doubling sequence."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 3
---
# Q-2017-FINAL-P11-d

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=15]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=15]]

## Question

(d) Find a closed-form solution for the recurrence.

Shared context: [[STEM-2017-FINAL-P11 - Shared Problem Prompt]].

## 中文解析

递推每次除了翻倍还加二，可以把每项先整体加二，使新数列恰好翻倍。新数列第一项是四，求出等比通项后再减二；最后检查初值与代入递推，避免指数偏一。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 15. The Chinese derivation expands the reasoning.

**Answer.** $T(n)=2^{n+1}-2$.

**Derivation/proof.** From $T(n)=2T(n-1)+2$, set $U(n)=T(n)+2$. Then $U(n)=2U(n-1)$ and $U(1)=4$, hence $U(n)=4\cdot2^{n-1}=2^{n+1}$. Subtract two. Independently, $n=1$ gives 2, and substitution gives $2(2^n-2)+2=2^{n+1}-2$, verifying the initial value and recurrence for all $n\ge2$.

### 中文解答

**推导。** 递推为 $T(n)=2T(n-1)+2$。令 $U(n)=T(n)+2$，则 $U(n)=2U(n-1)$ 且 $U(1)=4$，从而 $U(n)=4\cdot2^{n-1}=2^{n+1}$，故 $T(n)=2^{n+1}-2$。独立代回：$n=1$ 给 $2$；$2(2^n-2)+2=2^{n+1}-2$，满足每一步递推。基础与递推唯一决定序列，因此闭式成立。

## Common Mistakes

- 忘记把平移的二减回去。
- 把起点 n 为一当作 n 为零。

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Subtopic - Induction - 数学归纳法]]
- [[Recurrence Relations - 递推关系]]
- [[Mathematical Induction - 数学归纳法]]
- [[Recurrence-Solving Method - 递推求解法]]
- [[Induction Proof Method - 归纳证明法]]
