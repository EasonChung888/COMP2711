---
id: "Q-2025F-FINAL-P08-v"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 13
question_number: "8(v)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 2
difficulty_basis: "Compare the stated v asymptotic bounds with explicit ratios or opposing realizations."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [13]
marks: 1
---
# Q-2025F-FINAL-P08-v

## Source

[[2025 Fall Final]]; printed item 8(v); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=13]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=13]]

## Question

![[STEM-2025F-FINAL-P08 - Shared Problem Prompt#Shared printed wording]]

(v) [1 point] $T_A(n)=\Theta(n^3)\quad T_B(n)=\Theta(n^2\log(n!))$

## 中文解析

展开阶乘的对数得到 n log n，使 B 比 A 多出一个无界对数因子。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** A is faster。

**推导。** 有 $\log(n!)=\Theta(n\log n)$：上界由每个 $\log j\le\log n$ 得到；下界由后半段至少 $\lfloor n/2\rfloor$ 项各不小于 $\log(n/2)$ 得到。于是 $T_B=\Theta(n^3\log n)$，而 $T_A=\Theta(n^3)$，比值 $T_A/T_B=\Theta(1/\log n)\to0$。多出的无界对数因子使 B 增长更快，故算法 A 更快。

## Common Mistakes

- log(n!) 不应当成 log n，阶乘内有 n 个因子的对数贡献。
- Theta 忽略常数但不忽略无界的 log n 因子。

## Connections

- [[Topic - Algorithms - 算法]]
- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

Compare the stated v asymptotic bounds with explicit ratios or opposing realizations.
