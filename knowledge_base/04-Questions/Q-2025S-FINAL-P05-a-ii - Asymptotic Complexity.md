---
id: "Q-2025S-FINAL-P05-a-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 6
question_number: "5(a)(ii)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 3
difficulty_basis: "Bound a logarithmic factorial above and below to establish all three asymptotic relations."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
marks: 2
---
# Q-2025S-FINAL-P05-a-ii

## Source

[[2025 Spring Final]]; printed item 5(a)(ii); 2 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=6]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=6]]

## Question

![[STEM-2025S-FINAL-P05-a - Shared Problem Prompt#Shared printed wording]]

(ii) $A=n\log n,\quad B=\log((n!)^2)$

## 中文解析

阶乘的对数是许多对数相加，用后半段因子即可得到匹配的下界。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $O,\Omega,\Theta$ 全部成立。

**推导。** 把阶乘展开成乘积后取对数，得到逐项相加的形式。上界把每项都放大为最后一项，下界只保留后半段较大的项。有 $\log((n!)^2)=2\sum_{j=1}^n\log j\le2n\log n$。另一方面，至少 $\lfloor n/2\rfloor$ 个因子不小于 $n/2$，故 $\log((n!)^2)\ge2\lfloor n/2\rfloor\log(n/2)$。当 $n\ge4$，$\lfloor n/2\rfloor\ge n/3$ 且 $\log(n/2)\ge(\log n)/2$，得到 $B\ge(n/3)\log n$。所以 $A/3\le B\le2A$，两者有双向常数界，三个关系都成立。

## Common Mistakes

- 不能把 $\log(n!)$ 写成 $n!\log n$，应展开为对数和。
- 证明一个上界只得到 O；列出 Theta 还须有正的下界。

## Connections

- [[Topic - Algorithms - 算法]]
- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

Bound a logarithmic factorial above and below to establish all three asymptotic relations.
