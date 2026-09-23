---
id: "Q-2019-FINAL-P09-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 11
solution_page: [11]
question_number: "9(b)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Every unlabeled partition into four nonempty disjoint ten-issue groups has exactly 4! labelings."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-FINAL-P09-b

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=11]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=11]]

## Question

(b) the boxes are identical, so that they cannot be distinguished?

Shared context: [[STEM-2019-FINAL-P09 - Shared Problem Prompt]].

## 中文解析

这次盒子无标签，要把四组的所有重新编号视为同一个分配。每组非空且包含不同杂志集合，所以恰好有四的阶乘种编号方式，没有对称导致的固定情况，因此可以统一除以四的阶乘。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 11. The Chinese derivation expands the reasoning.

**Answer.** $\frac{40!}{(10!)^4\cdot4!}$.

**Derivation/proof.** For labeled boxes, the count is $40!/(10!)^4$. Each unlabeled distribution consists of four distinct, nonempty sets of ten distinguishable issues. Assigning box labels to those sets can be done in exactly $4!$ ways, and no nontrivial label permutation fixes the distribution because the disjoint nonempty sets differ. Divide by $4!$ to count each unlabeled partition once.

### 中文解答

**推导。** 先用(a)的有标签计数 $40!/(10!)^4$。任一无标签分配包含四个不相交、非空的十期集合，它们必彼此不同。给这四个集合编号，恰有 $4!$ 种不同有标签分配，没有交换后不变的例外。因此每个无标签分配被算了相同的 $4!$ 次，答案为 $\frac{40!}{(10!)^4\,4!}$。若容许空箱就必须另审查这种除法，但本题每箱十期保证无空箱。

## Common Mistakes

- 只因盒子相同就把杂志也当相同。
- 没有说明为何每种结果都恰好被重复计四的阶乘次。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Counting Method - 计数方法]]
