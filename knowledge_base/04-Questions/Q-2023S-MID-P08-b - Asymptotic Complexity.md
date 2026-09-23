---
id: "Q-2023S-MID-P08-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 12
question_number: "8(b)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Subtracting the linear exponents reveals the exponentially vanishing ratio."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [12]
marks: 2
---
# Q-2023S-MID-P08-b

## Source

[[2023 Spring Midterm]]; printed item 8(b); 2 marks.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=12]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=12]]

## Question

(b) $A=2^{2n}$, $B=2^{3n}$;

Shared printed context: ![[STEM-2023S-MID-P08 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

两个式子都是 exponential 并不表示同阶。相除时指数相减得到 2 的负 n 次方，它趋于零；这种差异随 n 增长扩大，无法通过一个固定常数弥补。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 只有 $A=O(B)$ 成立。

**推导。**

1. 同底指数相除时指数相减，得到 $A/B=2^{2n}/2^{3n}=2^{-n}$。当 $n$ 趋于无穷，该比值趋零，且对正的 $n$ 已经不超过一，因此有最终常数上界，证明 $A=O(B)$。
2. 任给想作为 $\Omega$ 下界的常数 $c>0$，都能选足够大的 $n$ 使 $2^{-n}<c$。所以 $A\ge cB$ 不可能从某个位置起一直成立，排除 $\Omega$，也排除要求上下两界的 $\Theta$。二者都是 exponential 并不等于增长同阶；差别来自指数中的系数二与三。

### English solution

**Answer.** $A=O(B)$ only.

**Derivation/proof.** The ratio is $A/B=2^{2n-3n}=2^{-n}$, which tends to zero. It is bounded above for all positive n, establishing $A=O(B)$. For any proposed constant $c>0$, sufficiently large n has $2^{-n}<c$, so $A\ge cB$ cannot hold eventually. Therefore neither the Omega nor the Theta relation is valid.

## Common Mistakes

- 两边都为 exponential 并不意味着 Θ；底数等价为四与八。 / Different exponential rates need not be comparable by constants.
- 2²ⁿ/2³ⁿ 是 2⁻ⁿ，不是 2²⁄³。 / Subtract exponents when dividing powers.

## Connections

- [[Subtopic - Algorithms - 算法]]

- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

Subtracting the linear exponents reveals the exponentially vanishing ratio.
