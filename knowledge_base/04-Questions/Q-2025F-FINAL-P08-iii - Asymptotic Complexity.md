---
id: "Q-2025F-FINAL-P08-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 13
question_number: "8(iii)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 2
difficulty_basis: "Compare the stated iii asymptotic bounds with explicit ratios or opposing realizations."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [13]
marks: 1
---
# Q-2025F-FINAL-P08-iii

## Source

[[2025 Fall Final]]; printed item 8(iii); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=13]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=13]]

## Question

![[STEM-2025F-FINAL-P08 - Shared Problem Prompt#Shared printed wording]]

(iii) [1 point] $T_A(n)=\Omega(\sqrt n)\quad T_B(n)=O(\log n)$

## 中文解析

B 的对数上界低于 A 的平方根下界，所以能确定 B 更快。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** B is faster。

**推导。** 存在正数 $c,C$，使足够大 $n$ 时 $T_A(n)\ge c\sqrt n$、$T_B(n)\le C\log n$。所以 $T_B/T_A\le(C/c)(\log n)/\sqrt n\to0$。B 的上界已经远小于 A 的下界，实际运行时间也保持这个分离，故 B 渐近更快。

## Common Mistakes

- 应比较 B/A 来证明 B 更快，分母和结论方向要一致。
- 平方根虽然小于 n，仍最终快于对数增长。

## Connections

- [[Topic - Algorithms - 算法]]
- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

Compare the stated iii asymptotic bounds with explicit ratios or opposing realizations.
