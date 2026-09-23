---
id: "Q-2018-FINAL-P10-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 14
solution_page: [15]
question_number: "10(d)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]","[[Counting Method - 计数方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 3
difficulty_basis: "Two legal parenthesizations create different intermediate dimensions and costs of 85000 versus 36000."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P10-d

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=14]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=15]]

## Question

d) Assume you are given three matrices $M_1,M_2,M_3$ where $M_1$ is $50\times60$, $M_2$ is $60\times25$, and $M_3$ is $25\times8$. You want to compute the product $M_1\cdot M_2\cdot M_3$. In which order will you do the pairwise matrix multiplications, if you want to minimize the total number of multiplications?

Shared context: [[STEM-2018-FINAL-P10 - Shared Problem Prompt]].

## 中文解析

允许改变的是括号顺序，不是交换矩阵次序。分别算出两个可能中间矩阵的尺寸，再按 nmp 计算每一步标量乘法。先乘后两矩阵得到较小中间结果，总成本三万六千，比八万五千少。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 15. The Chinese derivation expands the reasoning.

**Answer.** Compute $M_2M_3$ first, then $M_1(M_2M_3)$; cost $36000$.

**Derivation/proof.** For $(M_1M_2)M_3$, the first product costs $50\cdot60\cdot25=75000$ and is $50\times25$; the second costs $50\cdot25\cdot8=10000$, totaling 85000. For $M_1(M_2M_3)$, the first costs $60\cdot25\cdot8=12000$ and is $60\times8$; the second costs $50\cdot60\cdot8=24000$, totaling 36000. These are the two parenthesizations preserving matrix order, so the second is minimal.

### 中文解答

**推导。** 只改变括号而不能交换矩阵。先算 $M_1M_2$：成本 $50\cdot60\cdot25=75000$，得到 $50\times25$；再乘 $M_3$ 花 $50\cdot25\cdot8=10000$，共 $85000$。若先算 $M_2M_3$，成本 $60\cdot25\cdot8=12000$，得 $60\times8$；再左乘 $M_1$ 花 $50\cdot60\cdot8=24000$，共 $36000$。三矩阵保持顺序只有这两种二叉括号，比较 $36000<85000$，选 $M_1(M_2M_3)$。

## Common Mistakes

- 只比较第一步成本而不算第二步。
- 擅自交换矩阵次序。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Counting Principles - 计数原理]]
- [[Asymptotic Bound Method - 渐近界方法]]
- [[Counting Method - 计数方法]]
