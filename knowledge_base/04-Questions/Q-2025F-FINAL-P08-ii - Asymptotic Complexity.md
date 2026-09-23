---
id: "Q-2025F-FINAL-P08-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 13
question_number: "8(ii)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 2
difficulty_basis: "Compare the stated ii asymptotic bounds with explicit ratios or opposing realizations."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [13]
marks: 1
---
# Q-2025F-FINAL-P08-ii

## Source

[[2025 Fall Final]]; printed item 8(ii); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=13]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=13]]

## Question

![[STEM-2025F-FINAL-P08 - Shared Problem Prompt#Shared printed wording]]

(ii) [1 point] $T_A(n)=O(\sum_{i=1}^n n^2)\quad T_B(n)=\Omega(n^{3+\epsilon})\quad(\epsilon>0)$

## 中文解析

A 的三次上界已经低于 B 的三加 epsilon 次下界，已有信息足够。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** A is faster。

**推导。** 先得 $\sum_{i=1}^n n^2=n^3$。由 $O$ 与 $\Omega$ 定义，存在正数 $C,c$，对足够大 $n$ 有 $T_A(n)\le Cn^3$、$T_B(n)\ge cn^{3+\epsilon}$。因此 $T_A/T_B\le(C/c)n^{-\epsilon}\to0$，因为 $\epsilon>0$。即使 A 的具体运行时间低于其上界，仍只会更快；所以已有界足够判断 A 更快。

## Common Mistakes

- 上下界给在有利方向上，不能一见 O 与 Omega 就答无法判断。
- epsilon 必须严格为正；若为零，上下界不能推出严格更快。

## Connections

- [[Topic - Algorithms - 算法]]
- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

Compare the stated ii asymptotic bounds with explicit ratios or opposing realizations.
