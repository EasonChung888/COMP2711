---
id: "Q-2023F-MID-P03-b-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf"
source_page: 7
question_number: "3(b)(iii)"
year: 2023
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 3
difficulty_basis: "An infinite domain permits a diagonal output flip that escapes any purported sequence of two-valued functions."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
solution_page: [7]
verification_status: "verified"
marks: 1
related_questions: ["[[Q-2023F-MID-P03-b-ii - Countability]]"]
---
# Q-2023F-MID-P03-b-iii

## Source

[[2023 Fall Midterm]]; printed item 3(b)(iii); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=7]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=7]]

The complete printed key for 3(b) is `C, C, U`, visually rechecked at scale-to3200 on PDF page 7. The iii classification U is an official answer. The complete proof below independently verifies that conclusion.

## Question

Without the need for providing any explanation, determine if the following sets are infinitely countable (C) or infinitely uncountable (U):

(iii) The set of all functions from $\mathbb N\to\{1,2\}$

## 中文解析

这次 domain 是无限的，不能把上一小题的两个输出枚举直接套用。对假想列表中第 n 个函数，在第 n 个输入处改成另一个值，就得到一个不属于列表的新函数。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** U，infinitely uncountable，与第 7 页对应的官方分类一致。

**推导。**

1. 假设这些函数可完整枚举为 $f_1,f_2,\ldots$；若自然数从零开始，先作无害的重新编号。定义 $g(n)=3-f_n(n)$。由于每个 $f_n(n)$ 只为一或二，$g(n)$ 也只为二或一，所以 $g$ 确实属于题目要求的函数集合。
2. 对每个编号 $n$，都有 $g(n)\ne f_n(n)$，于是 $g$ 与第 $n$ 个函数至少在输入 $n$ 处不同。故 $g$ 不在所列任何一项中，与完整枚举矛盾，证明不可数。原卷整行 C, C, U 的最后一个 U 与此 diagonal proof 一致。

### English solution

**Answer.** U: infinitely uncountable.

**Derivation/proof.** Suppose these functions had a complete list $f_1,f_2,\ldots$. Define $g(n)=3-f_n(n)$, with a harmless reindexing if naturals start at 0. Because $f_n(n)$ is either 1 or 2, g also maps into $\{1,2\}$. However, $g(n)\ne f_n(n)$ for every n, so g differs from each listed function. This contradicts completeness of the list and proves uncountability.

## Common Mistakes

- 把无限 domain 当成两个输入会错误得到可数结论。 / The arrow direction is essential.
- diagonal 函数仍必须取值在 {1,2} 中。 / Flip the value within the allowed codomain.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]

- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

An infinite domain permits a diagonal output flip that escapes any purported sequence of two-valued functions.

- [[Q-2023F-MID-P03-b-ii - Countability]]: Contrast: reversing the finite and infinite domain/codomain turns pair enumeration into diagonal uncountability. 交换定义域和值域后，有限有序对变成无限序列。
