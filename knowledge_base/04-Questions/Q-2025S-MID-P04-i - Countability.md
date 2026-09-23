---
id: "Q-2025S-MID-P04-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf"
source_page: 6
question_number: "4(i)"
year: 2025
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Enumerate every finite integer coefficient tuple and use an infinite constant-polynomial subset."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
---
# Q-2025S-MID-P04-i

## Source

[[2025 Spring Midterm]]; printed item 4(i); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=6]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=6]]

## Question

![[STEM-2025S-MID-P04 - Shared Problem Prompt#Shared printed wording]]

(i) The set of all polynomials with integer coefficients, i.e., polynomials of the form $a_0+a_1x+\cdots+a_{k-1}x^{k-1}+a_kx^k$ for some $k\in\mathbb N$, where $a_i\in\mathbb Z$ for $i=0,\ldots,k$.

## 中文解析

每个有限次数可编码为一个整数系数元组，再把所有次数作可数并。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** Countably infinite。

**推导。** 对固定 $k$，系数元组属于 $\mathbb Z^{k+1}$，有限次可数集合的笛卡尔积仍可数，可按元组各坐标绝对值之和逐层枚举。所有有限次数的多项式属于 $\bigcup_{k\ge0}\mathbb Z^{k+1}$ 的像，可数并仍可数。不同整数常数给出无限多个不同多项式，所以该集合不是有限集，而是可数无限。

## Common Mistakes

- 不同次数仍属于可数个层级，不能把次数无上界误判为不可数。
- 常数多项式已经无限多个，不能因为每个多项式只有有限系数便判为有限。

## Connections

- [[Topic - Sets and Functions - 集合与函数]]
- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Enumerate every finite integer coefficient tuple and use an infinite constant-polynomial subset.
