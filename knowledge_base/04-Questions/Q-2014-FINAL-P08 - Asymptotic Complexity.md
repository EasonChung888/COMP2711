---
id: "Q-2014-FINAL-P08"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 12
question_number: "8"
year: 2014
term: "fall"
exam_type: "final"
marks: 10
topics: ["[[Topic - Algorithms - 算法]]","[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]","[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Recurrence Relations - 递推关系]]","[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "The asymptotic proof factors out a to the n and bounds a weighted geometric series above and below by n-independent constants."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
related_questions: ["[[Q-2025F-FINAL-P09-a - Asymptotic Complexity]]"]
---
# Q-2014-FINAL-P08

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=12]]

Printed solution defect: ![[knowledge_base/past_paper/2014-final.pdf#page=12]] substitutes $x=1/a$ but prints the denominator $(1-a)^2$. The literal printed denominator is retained here; the correct substituted denominator is $(1-1/a)^2$. The worked bound below is an independently derived correction, not an unmodified official answer.

## Question

Let $a$ be a real number such that $a>1$. Consider a function $T(n)$ over integers defined as follows
$$T(0)=1,\qquad T(n)=aT(n-1)+n,\quad\text{for }n>0.$$
Prove that $T(n)=\Theta(a^n)$.

You might need the fact that, for any $x\ne1$,
$$\sum_{i=1}^{n}ix^i=\frac{nx^{n+2}-(n+1)x^{n+1}+x}{(1-x)^2}.$$

## 中文解析

将递推展开后提出 $a^n$。因 $a>1$，$1/a<1$，加权等比级数有固定上界，于是剩下的系数不会随 $n$ 发散。

## Detailed Solution

Provenance: derived; independently derived correction; discrepant source material is retained in Source. The Chinese derivation expands the reasoning.

**Answer.** $T(n)=\Theta(a^n)$.

**Derivation/proof.** Iterating yields $T(n)=a^n+\sum_{i=1}^na^{n-i}i=a^n\left(1+\sum_{i=1}^ni(1/a)^i\right)$. Put $x=1/a\in(0,1)$. The supplied finite-sum formula gives $\sum_{i=1}^{n}ix^i=[x-x^{n+1}(n+1-nx)]/(1-x)^2\le x/(1-x)^2$, since $n+1-nx>0$. All its summands are nonnegative, so
$$a^n\le T(n)\le\left(1+\frac{a}{(a-1)^2}\right)a^n.$$
The two multipliers are positive constants independent of $n$, proving the tight bound.

### 中文解答

**推导。** 展开递推得到 $T(n)=a^n+\sum_{i=1}^na^{n-i}i=a^n(1+\sum_{i=1}^ni(1/a)^i)$。令 $x=1/a\in(0,1)$，题给有限和等于 $[x-x^{n+1}(n+1-nx)]/(1-x)^2$。因为 $n+1-nx>0$ 且所有加项非负，得 $0\le\sum ix^i\le x/(1-x)^2=a/(a-1)^2$。所以 $a^n\le T(n)\le[1+a/(a-1)^2]a^n$，两常数与 n 无关，故为 $\Theta(a^n)$。注意代入 x 后分母应是 $(1-1/a)^2$；源页最后一行的 $(1-a)^2$ 不能直接作为等式代入。

## Common Mistakes

- 声称 $\sum i/a^i$ 随 $n$ 线性增长。
- 只证明 $O(a^n)$ 而未给下界。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - Recursion - 递归]]
- [[Recurrence Relations - 递推关系]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Recurrence-Solving Method - 递推求解法]]

- Contrast / 对比: [[Q-2025F-FINAL-P09-a - Asymptotic Complexity]] — Both unroll a linear recurrence and factor out a dominant term to bound or sum a convergent geometric contribution. The 2014 recurrence decreases the argument by one and has an $a^n$ scale with weighted terms; the 2025 recurrence divides the argument by four and sums level costs with ratio $3/16$ to an exact closed form. 两题都先展开再提出主尺度；2014 每次减一，处理以 $a^n$ 为尺度的加权等比和以证紧确界，2025 每次除四，按层累加公比 $3/16$ 的代价以求精确闭式。
