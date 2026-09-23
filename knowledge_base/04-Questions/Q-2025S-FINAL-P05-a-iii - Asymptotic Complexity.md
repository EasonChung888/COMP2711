---
id: "Q-2025S-FINAL-P05-a-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 6
question_number: "5(a)(iii)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 3
difficulty_basis: "Compare a polynomial-logarithmic expression with an exponential in the square root."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
marks: 2
---
# Q-2025S-FINAL-P05-a-iii

## Source

[[2025 Spring Final]]; printed item 5(a)(iii); 2 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=6]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=6]]

## Question

![[STEM-2025S-FINAL-P05-a - Shared Problem Prompt#Shared printed wording]]

(iii) $A=n^3+n^2(\log n)^4,\quad B=2^{\sqrt n}$

## 中文解析

用 $t=\sqrt n$ 改写，分母就成为二的 $t$ 次幂。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 只有 $O$。

**推导。** 先有 $(\log n)^4=o(n)$，所以 $A=\Theta(n^3)$。令 $t=\sqrt n$，则 $n=t^2$，$n^3=t^6$。于是 $A/B=\Theta(t^6/2^t)\to0$，因为指数函数快于任意固定次幂。故 $A=O(B)$，但不能用正的常数倍 $B$ 从下方约束 $A$，所以没有 $\Omega$，也没有 $\Theta$。

## Common Mistakes

- $2^{\sqrt n}$ 的根号位于指数内，不能读成 $2\sqrt n$。
- 对数四次方乘 $n^2$ 最终低于 $n^3$，不能凭有限数值判断主导项。

## Connections

- [[Topic - Algorithms - 算法]]
- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

Compare a polynomial-logarithmic expression with an exponential in the square root.
