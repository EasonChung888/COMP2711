---
id: "Q-2018-FINAL-P10-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 14
solution_page: [15]
question_number: "10(b)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 1
difficulty_basis: "Square dimensions make all three independent loop ranges equal n."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P10-b

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=14]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=15]]

## Question

b) What is the $O(\cdot)$ asymptotic complexity of the algorithm when given two matrices both of which are of size $n\times n$?

Shared context: [[STEM-2018-FINAL-P10 - Shared Problem Prompt]].

## 中文解析

两输入都是 n 阶方阵时，三层循环的次数都是 n。最内层每次进行一次固定规模的乘加，总共 n 的三次方次；每个输出清零的二次项不会改变主导数量级。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 15. The Chinese derivation expands the reasoning.

**Answer.** $O(n^3)$, tightly $\Theta(n^3)$.

**Derivation/proof.** There are $n$ choices of row, $n$ choices of column, and $n$ inner iterations per output entry. Thus the innermost constant-cost multiply-and-add executes $n^3$ times. The $n^2$ initializations and loop overhead are no larger in order, so the total is $\Theta(n^3)$.

### 中文解答

**推导。** 方阵情况下，最外层行索引 $i$ 有 $n$ 次，中层列索引 $j$ 每行又 $n$ 次，内层 $k$ 每个输出格也执行 $n$ 次。最内的常数次乘加共 $n\cdot n\cdot n=n^3$ 次，另有 $n^2$ 次清零和同阶以内的循环控制。故总时间 $\Theta(n^3)$，要求的大 $O$ 写为 $O(n^3)$。这里分析的是题给三重循环，不是其他矩阵乘法算法。

## Common Mistakes

- 只数输出格数得到平方复杂度。
- 把嵌套循环次数相加而非相乘。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
