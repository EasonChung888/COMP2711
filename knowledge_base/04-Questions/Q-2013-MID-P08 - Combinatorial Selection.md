---
id: "Q-2013-MID-P08"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Midterm]]"
source_pdf: "knowledge_base/past_paper/2013-midterm.pdf"
source_page: 13
solution_page: [13]
question_number: "8"
year: 2013
term: "spring"
exam_type: "midterm"
marks: 12
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]", "[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["construction"]
difficulty: 3
difficulty_basis: "A bijection turns three nonnegative summands totaling one hundred into one hundred stars and two separators, including empty blocks."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-MID-P08

## Source

![[knowledge_base/past_paper/2013-midterm.pdf#page=13]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-midterm.pdf#page=13]].

## Question

In how many different ways can we write 100 as the sum of three non-negative integers? In other words, how many lists $x_1x_2x_3$ of three non-negative integers $x_1$, $x_2$ and $x_3$ are there such that $x_1+x_2+x_3=100$?

You might need to use the Bijection principle for this question. Clearly state the two sets involved, and the function between the two sets.

## 中文解析

把三个非负整数看成三段星号的长度。隔板可以相邻，正好允许某个 $x_i=0$；这是星与杠的一一对应。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 13. The Chinese derivation expands the reasoning.

**Answer.** $\binom{102}{2}=5151$.

**Derivation/proof.** Map a triple to 100 stars separated into blocks of sizes $x_1,x_2,x_3$ by two bars, allowing adjacent bars and end bars. This is a bijection with placements of two bars among 102 positions, hence $\binom{102}{2}$.

### 中文解答

**推导。** 令 S 为所有非负整数有序三元组 $(x_1,x_2,x_3)$，满足 $x_1+x_2+x_3=100$；令 T 为一百个相同星号与两根相同隔板组成的长度 102 的串。把三元组映为依次含 $x_1,x_2,x_3$ 个星号、由两板分隔的串。反向按三段星号数恢复三元组，因此此映射是双射；隔板可相邻或在端点，正好表示零。T 的串由两个隔板位置唯一确定，故 $|S|=|T|=\binom{102}{2}=5151$。

## Common Mistakes

- 用 $\binom{100}{2}$，没有给隔板端点位置。
- 把三元组当成无序分拆。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
