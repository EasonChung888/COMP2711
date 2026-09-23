---
id: "Q-2025S-FINAL-P05-a-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 6
question_number: "5(a)(i)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 2
difficulty_basis: "Convert a constant raised to a logarithm into a power and compare exact exponents."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
marks: 2
---
# Q-2025S-FINAL-P05-a-i

## Source

[[2025 Spring Final]]; printed item 5(a)(i); 2 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=6]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=6]]

## Question

![[STEM-2025S-FINAL-P05-a - Shared Problem Prompt#Shared printed wording]]

(i) $A=3^{\log_2(n^2)},\quad B=n^4$

## 中文解析

把对数指数换为 $n$ 的幂，就能直接比较四次幂。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 只有 $O$。

**推导。** 用换底恒等式 $3^{\log_2(n^2)}=(n^2)^{\log_2 3}=n^{2\log_2 3}$。因为 $3<4$，所以 $\log_2 3<2$，从而 $2\log_2 3<4$。因此 $A/B=n^{2\log_2 3-4}\to0$。比值最终有上界但没有正的固定下界，故 $A=O(B)$，而 $A\ne\Omega(B)$、$A\ne\Theta(B)$。 这里两函数均为正，比值趋零说明前者严格低阶；任何正的下界常数最终都会被该比值突破。

## Common Mistakes

- 外面的三是指数底数，不能当成乘法常数。
- 只要比值趋零就不可能同时满足要求正下界的 Omega。

## Connections

- [[Topic - Algorithms - 算法]]
- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

Convert a constant raised to a logarithm into a power and compare exact exponents.
