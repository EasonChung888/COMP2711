---
id: "Q-2017-MID-P10-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 12
solution_page: [12]
question_number: "10(a)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Each of fifty distinct candies independently chooses one of four labeled boxes."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P10-a

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=12]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=12]]

## Question

(a) How many ways can you put the candies in the boxes, assuming that the candies are all different?

Shared context: [[STEM-2017-MID-P10 - Shared Problem Prompt]].

## 中文解析

糖果互不相同，意味着需要分别决定每颗糖果去哪一个盒子。四个盒子带标签，选 A 与选 B 是不同结果；题目没有要求盒子非空，每颗糖都有四种选择。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 12. The Chinese derivation expands the reasoning.

**Answer.** $4^{50}$.

**Derivation/proof.** A distribution is a function from the set of fifty candies to the four labeled boxes. Each candy has four possible images, without any capacity or nonempty-box condition. The product rule therefore gives fifty factors of four.

### 中文解答

**推导。** 给每颗有身份的糖果指定一个目标盒子，选择为 $A,B,C,D$ 共四种。五十颗分别作选择后唯一确定一种分配，也允许空盒，所以乘法原理给出 $\underbrace{4\cdot4\cdots4}_{50\text{ 个}}=4^{50}$。无需把盒内糖果排序，因为记录的是归属而非排列。

## Common Mistakes

- 用相同糖果的隔板法。
- 额外要求每个盒子必须有糖。

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
