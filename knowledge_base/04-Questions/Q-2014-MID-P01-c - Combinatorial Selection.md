---
id: "Q-2014-MID-P01-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Midterm]]"
source_pdf: "knowledge_base/past_paper/2014-midterm.pdf"
source_page: 3
solution_page: [3]
question_number: "1(c)"
year: 2014
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]", "[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]", "[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Five feasible positive group-count triples satisfy the capacities four, three, and two, and their separate binomial products must be summed."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-MID-P01-c

## Source

![[knowledge_base/past_paper/2014-midterm.pdf#page=3]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-midterm.pdf#page=3]].

## Question

(c) In how many ways can a voter choose 5 candidates such that at least 1 candidate from each group is chosen?

Explain how your answers are derived.

Shared context: [[STEM-2014-MID-P01 - Shared Problem Prompt]].

## 中文解析

先列出每组人数的可行正整数分配，再在每组独立选择。这样既保证每组至少一人，也避免遗漏容量限制。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 3. The Chinese derivation expands the reasoning.

**Answer.** $98$.

**Derivation/proof.** The positive triples $(A,B,C)$ summing to five within capacities $(4,3,2)$ are $(1,2,2),(1,3,1),(2,1,2),(2,2,1),(3,1,1)$. Summing the corresponding products of binomial coefficients gives $12+8+18+36+24=98$.

### 中文解答

**推导。** 设三组选取人数为 (a,b,c)，要求三者均正、和为五，且容量分别为 4、3、2。可行情况只有 $(1,2,2),(1,3,1),(2,1,2),(2,2,1),(3,1,1)$。每类分别按 $\binom4a\binom3b\binom2c$ 计数，得到 $12,8,18,36,24$；互斥相加为 $12+8+18+36+24=98$。

## Common Mistakes

- 把 $(3,2,0)$ 加入。
- 把同一人数三元组的组别顺序任意交换而重复计算。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
- [[Combinatorial Case Analysis - 组合分类法]]
