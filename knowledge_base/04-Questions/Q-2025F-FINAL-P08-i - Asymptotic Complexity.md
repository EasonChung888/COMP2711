---
id: "Q-2025F-FINAL-P08-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 13
question_number: "8(i)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 2
difficulty_basis: "Compare the stated i asymptotic bounds with explicit ratios or opposing realizations."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [13]
marks: 1
---
# Q-2025F-FINAL-P08-i

## Source

[[2025 Fall Final]]; printed item 8(i); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=13]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=13]]

## Question

![[STEM-2025F-FINAL-P08 - Shared Problem Prompt#Shared printed wording]]

(i) [1 point] $T_A(n)=\Theta(\sum_{i=1}^n n^2)\quad T_B(n)=\Theta(n^4)$

## 中文解析

求和有 n 项，每项是 n²，先化为三次量级后与四次量级比较。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** A is faster。

**推导。** 求和变量是 $i$，但每项都是 $n^2$，所以 $\sum_{i=1}^n n^2=n\cdot n^2=n^3$。因此 $T_A=\Theta(n^3)$、$T_B=\Theta(n^4)$，两者之比在常数因子范围内为 $1/n\to0$。A 的增长率严格更低，故渐近更快。

## Common Mistakes

- 求和项印的是 n² 而非 i²，转录不能替换，尽管两者同阶。
- 增长率较小对应更快的算法，不能把比较方向倒转。

## Connections

- [[Topic - Algorithms - 算法]]
- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

Compare the stated i asymptotic bounds with explicit ratios or opposing realizations.
