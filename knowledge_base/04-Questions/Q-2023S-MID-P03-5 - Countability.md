---
id: "Q-2023S-MID-P03-5"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 6
question_number: "3(5)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 3
difficulty_basis: "An uncountable two-valued sequence family embeds into the natural-valued function family."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
---
# Q-2023S-MID-P03-5

## Source

[[2023 Spring Midterm]]; printed item 3(5). No separate atomic mark allocation is printed.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=6]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=6]]

Printed prompt uses numerical labels 1–5; the answer switches to (a)–(e). This note retains the prompt label. The parent allocates 10 marks jointly.

## Question

5. The set of all functions from $\mathbb N$ to $\mathbb N$

Shared printed context: ![[STEM-2023S-MID-P03 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

不必先计算无限基数，只要在这个集合内部找一个已知不可数的子集即可。把值域限制在两个不同自然数上，就得到所有二值序列，已经足以排除整体可数的可能。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 从 $\mathbb N$ 到 $\mathbb N$ 的全部函数构成 uncountable 集合。

**推导。**

1. 只考虑输出落在两个不同自然数组成的集合 $\{1,2\}$ 中的函数。这些当然也是从 $\mathbb N$ 到 $\mathbb N$ 的函数，所以组成所求集合的一个子集；采用 $1,2$ 不依赖自然数是否包括零。
2. 该子集不可数：若列成 $f_1,f_2,\ldots$，令 $g(n)=3-f_n(n)$，便仍输出 $1$ 或 $2$，并在第 $n$ 个输入与 $f_n$ 相反。任意列表都会漏掉 $g$。若更大的函数集合可数，则它的每个子集都至多可数，与这个不可数子集矛盾，故原集合不可数。

### English solution

**Answer.** Uncountable.

**Derivation/proof.** Choose two distinct natural numbers, for example 1 and 2. All functions from $\mathbb N$ to $\{1,2\}$ are also functions from $\mathbb N$ to $\mathbb N$. The two-valued function set is uncountable by diagonalization: reverse the nth output of the nth listed function. If the larger function set were countable, every subset would be at most countable, contradicting this embedded uncountable subset.

## Common Mistakes

- 直接套有限函数公式 nᵐ 不能证明无限函数族的基数。 / Use an uncountable subfamily.
- 若自然数从一开始，仍可使用 {1,2} 的二值函数，不能依赖零属于自然数。 / Choose two definitely allowed values.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]

- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

An uncountable two-valued sequence family embeds into the natural-valued function family.
