---
id: "Q-2023S-MID-P08-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 12
question_number: "8(a)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Dividing by n cubed exposes two decaying powers despite the coefficient 100."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [12]
marks: 2
---
# Q-2023S-MID-P08-a

## Source

[[2023 Spring Midterm]]; printed item 8(a); 2 marks.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=12]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=12]]

## Question

(a) $A=n^{2.9}+100n^2$, $B=n^3$;

Shared printed context: ![[STEM-2023S-MID-P08 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

比较幂次时应看 n 趋向无穷时的主导项，而不是固定系数一百。把 A 除以 n³ 后两个项都趋于零，因此存在上界但不存在与 B 同阶的正下界。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 只有 $A=O(B)$ 成立，$\Omega$ 与 $\Theta$ 均不成立。

**推导。**

1. 对正的 $n$ 把两式相除：
   $$\frac AB=\frac{n^{2.9}+100n^2}{n^3}=n^{-0.1}+100n^{-1}\longrightarrow0.$$
   两项各自趋零，所以比值最终被某个正常数上界控制，这正给出 Big-O 所需的 $A\le CB$。
2. 若同时有 $A=\Omega(B)$，应存在固定 $c>0$ 使充分大的 $n$ 都满足 $A/B\ge c$；但比值趋零会最终小于任何这样的 $c$，矛盾。没有下界就没有 $\Theta$。系数一百虽影响有限区间，却不能改变这里的渐近结论。

### English solution

**Answer.** $A=O(B)$ only.

**Derivation/proof.** For positive $n$, $A/B=n^{-0.1}+100n^{-1}\to0$. Thus the ratio is eventually bounded above, proving $A=O(B)$. Since it becomes smaller than every positive constant, no eventual positive lower bound exists, so $A\ne\Omega(B)$ and hence $A\ne\Theta(B)$. The large coefficient 100 affects a finite range but not the limiting order.

## Common Mistakes

- 系数一百不能抵消 2.9 与 3 的长期幂次差。 / A fixed coefficient does not change the growth exponent.
- 由 A/B→0 应判 A=O(B)，不能把方向写反。 / A is the slower function.

## Connections

- [[Subtopic - Algorithms - 算法]]

- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

Dividing by n cubed exposes two decaying powers despite the coefficient 100.
