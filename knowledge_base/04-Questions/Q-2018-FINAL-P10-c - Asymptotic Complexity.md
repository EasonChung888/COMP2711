---
id: "Q-2018-FINAL-P10-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 14
solution_page: [15]
question_number: "10(c)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]","[[Counting Method - 计数方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 2
difficulty_basis: "One scalar multiplication occurs for each independent row-column-inner-index triple."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P10-c

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=14]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=15]]

## Question

c) Express the total number of multiplications that the algorithm does, expressed as a function of $n,m,p$.

Shared context: [[STEM-2018-FINAL-P10 - Shared Problem Prompt]].

## 中文解析

精确计数要区分运算种类。每个 i、j、k 三元组恰好对应一次标量乘法，选择三元组的数量是 nmp。加法、赋值及循环控制虽然也消耗时间，但题目只问乘法次数。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 15. The Chinese derivation expands the reasoning.

**Answer.** $nmp$.

**Derivation/proof.** For each of $n$ rows and $m$ columns, the algorithm runs the inner loop $p$ times. Every inner iteration contains exactly one scalar multiplication $A[i,k]B[k,j]$. Hence the exact multiplication count is $n\cdot m\cdot p$. Initializing to zero and adding do not contribute to the requested multiplication count.

### 中文解答

**推导。** 外层遍历 $n$ 行，中层遍历 $m$ 列，所以共 $nm$ 个输出元素。每个输出的内层执行 $p$ 次，每次恰乘一次 $A[i,k]\cdot B[k,j]$。因此精确乘法数 $nm\cdot p=nmp$。清零和加法不计入所问乘法次数，所以没有额外常数项。

## Common Mistakes

- 把加法一起计入乘法数量。
- 把维度 p 与输出列数 m 混淆。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Counting Principles - 计数原理]]
- [[Asymptotic Bound Method - 渐近界方法]]
- [[Counting Method - 计数方法]]
