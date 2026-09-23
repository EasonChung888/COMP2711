---
id: "Q-2025F-FINAL-P08-iv"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 13
question_number: "8(iv)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 3
difficulty_basis: "Compare the stated iv asymptotic bounds with explicit ratios or opposing realizations."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [13]
marks: 1
---
# Q-2025F-FINAL-P08-iv

## Source

[[2025 Fall Final]]; printed item 8(iv); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=13]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=13]]

## Question

![[STEM-2025F-FINAL-P08 - Shared Problem Prompt#Shared printed wording]]

(iv) [1 point] $T_A(n)=\Omega(n^2)\quad T_B(n)=\Omega(n\log^2 n)$

## 中文解析

两个条件都只有下界，构造两组相反增长关系即可证明信息不足。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** undetermined。

**推导。** 两项都只给下界。取 $T_A=n^2,T_B=n^3$，满足原界且 A 更快，因为 $n^2/n^3\to0$。另一组取 $T_A=n^3,T_B=n^2$，也满足原界，其中 $n^2=\Omega(n\log^2 n)$，但这次 B 更快。既有两种合法实现产生相反比较结果，就不能从给定下界判定谁更快。

## Common Mistakes

- 两个下界之间的大小不等于两个实际时间之间的大小。
- Omega 没有限制函数增长得多快，它可以远高于写出的下界。

## Connections

- [[Topic - Algorithms - 算法]]
- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

Compare the stated iv asymptotic bounds with explicit ratios or opposing realizations.
