---
id: "Q-2025S-FINAL-P01-a-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 2
question_number: "1(a)(iii)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Functions - 函数]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 3
difficulty_basis: "Construct an explicit bijection by shifting a countable sequence inside two real intervals."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
marks: 1
---
# Q-2025S-FINAL-P01-a-iii

## Source

[[2025 Spring Final]]; printed item 1(a)(iii); 1 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=2]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=2]]

## Question

![[STEM-2025S-FINAL-P01-a - Shared Problem Prompt#Shared printed wording]]

(iii) There is a bijection between all the real numbers of $[0,1]$ and all the real numbers of $[0,1)$.

## 中文解析

删除一个端点不会改变无限区间的基数；可把一列分数整体后移腾出端点。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** True。

**推导。** 定义 $f(1/n)=1/(n+1)$，其中 $n=1,2,\ldots$；对 $[0,1]$ 中其余 $x$ 定义 $f(x)=x$。特别地一被送到二分之一，零保持零，故所有像都落在 $[0,1)$。序列中的像互异且仍是该序列的非首项，其余点不在这个序列上，因此不会碰撞，$f$ 单射。任取目标 $y$：若 $y=1/m$ 且 $m\ge2$，其原像为 $1/(m-1)$；否则原像为 $y$ 本身。故 $f$ 满射，是所需 bijection。

## Common Mistakes

- 把一直接送到零而其他点不动会让零有两个原像。
- 不能只证明两个区间都不可数，就宣称任意两不可数集合都有双射。

## Connections

- [[Topic - Sets and Functions - 集合与函数]]
- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Functions - 函数]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Construct an explicit bijection by shifting a countable sequence inside two real intervals.
