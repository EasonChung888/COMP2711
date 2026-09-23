---
id: "Q-2023S-MID-P08-e"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 12
question_number: "8(e)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "An iterated logarithm is unbounded even when compared with the enormous fixed constant 10 to the 100."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [12]
marks: 2
---
# Q-2023S-MID-P08-e

## Source

[[2023 Spring Midterm]]; printed item 8(e); 2 marks.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=12]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=12]]

## Question

(e) $A=\log\log n$, $B=10^{100}$;

Shared printed context: ![[STEM-2023S-MID-P08 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

一百次方虽然巨大，却仍是与 n 无关的常数。两层 log 增长极慢但无界，所以最终会超过任何常数倍的 B；不能用日常数值范围代替渐近极限。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 只有 $A=\Omega(B)$ 成立。

**推导。**

1. 当对数底固定且大于一、$n$ 足够大时，$\log n$ 无界增长，所以 $\log\log n$ 也无界增长。分母 $B=10^{100}$ 虽然很大，却是与 $n$ 无关的固定正数，因此 $A/B\to\infty$。
2. 取下界常数一，存在某个位置使之后都有 $A/B\ge1$，故 $A=\Omega(B)$。相反，任何拟定的有限上界常数最终都会被比值超过，所以不可能有 $A=O(B)$，也就没有 $\Theta$。这里只讨论最终行为，不要求在日常可计算的 $n$ 范围里已经超过这个巨大常数。

### English solution

**Answer.** $A=\Omega(B)$ only.

**Derivation/proof.** For a fixed logarithm base greater than 1 and sufficiently large n, $\log\log n$ increases without bound, whereas $B=10^{100}$ is a fixed positive number. Therefore $A/B\to\infty$. The ratio is eventually at least 1, proving $A=\Omega(B)$, but it has no eventual finite upper bound. Hence $A\ne O(B)$ and $A\ne\Theta(B)$.

## Common Mistakes

- 10¹⁰⁰ 再大也是常数，而 log log n 最终无界。 / Large constants do not dominate unbounded growth asymptotically.
- 渐近比较只需充分大的 n，不必在 log log n 未定义的小输入处判断。 / Use the eventual domain.

## Connections

- [[Subtopic - Algorithms - 算法]]

- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

An iterated logarithm is unbounded even when compared with the enormous fixed constant 10 to the 100.
