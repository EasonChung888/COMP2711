---
id: "Q-2013-MID-P03"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Midterm]]"
source_pdf: "knowledge_base/past_paper/2013-midterm.pdf"
source_page: 5
solution_page: [5]
question_number: "3"
year: 2013
term: "spring"
exam_type: "midterm"
marks: 10
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]", "[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]", "[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "A combinatorial proof must partition the same two-person selection by whether both, one, or neither selected person lies in the first group."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-MID-P03

## Source

![[knowledge_base/past_paper/2013-midterm.pdf#page=5]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-midterm.pdf#page=5]].

## Question

Let $n$ be a positive integer. Give a combinatorial proof of the following equation:
$$\binom{2n}{2}=2\binom n2+n^2.$$
Note: An algebraic proof will not be accepted as a correct solution.

## 中文解析

组合恒等式要说明两边在数同一个集合。本题的关键是按一对元素落在左右两半的位置分类，而不是展开阶乘作代数化简。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 5. The Chinese derivation expands the reasoning.

**Answer.** Both sides count 2-element selections from two labelled groups of $n$ objects.

**Derivation/proof.** Partition $2n$ objects into left and right groups of size $n$. A pair lies wholly left ($\binom n2$ choices), wholly right ($\binom n2$ choices), or has one object in each group ($n^2$ choices). These cases are exhaustive and disjoint, proving the identity.

### 中文解答

**推导。** 取两个互不相交的 n 元素组 L 与 R，从总共 2n 个对象中选两个，直接计数为 $\binom{2n}{2}$。按所选对象的位置分三类：都在 L 有 $\binom n2$ 种，都在 R 也有 $\binom n2$ 种，两组各一个有 $n^2$ 种。三类互斥且覆盖全部二元素子集，所以相加得 $\binom{2n}{2}=2\binom n2+n^2$，这证明两边数的是同一集合。

## Common Mistakes

- 把跨两组的对数误写成 $2n$。
- 仅列举三种情况却没有说明互斥且完备。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
- [[Combinatorial Case Analysis - 组合分类法]]
