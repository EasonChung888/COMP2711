---
id: "Q-2023S-MID-P03-4"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 6
question_number: "3(4)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 3
difficulty_basis: "Binary-valued sequences correspond bijectively to all subsets of the naturals."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
---
# Q-2023S-MID-P03-4

## Source

[[2023 Spring Midterm]]; printed item 3(4). No separate atomic mark allocation is printed.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=6]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=6]]

Printed prompt uses numerical labels 1–5; the answer switches to (a)–(e). This note retains the prompt label. The parent allocates 10 marks jointly.

## Question

4. The set of all functions from $\mathbb N$ to $\{0,1\}$

Shared printed context: ![[STEM-2023S-MID-P03 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

每个函数等价于一个无限二进制序列，也等价于取值为一的输入所组成的自然数子集。输入无限使得 diagonal construction 可以逐位反转，从任何列表中构造一个未被列出的函数。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 从 $\mathbb N$ 到 $\{0,1\}$ 的全部函数构成 uncountable 集合。

**推导。**

1. 每个函数 $f$ 都对应子集 $A_f=\{n:f(n)=1\}$。任意自然数子集的 indicator function 在集合内取一、外面取零，恰好给出逆对应，因此函数集合与不可数的 $P(\mathbb N)$ 等势。
2. 也可直接验证：假设列出了全部函数 $f_1,f_2,\ldots$，定义 $g(n)=1-f_n(n)$。其值仍在 $\{0,1\}$ 中，但在输入 $n$ 处与第 $n$ 个函数不同，所以 $g$ 不等于列表中的任何一项。这与完整枚举矛盾，直接证明不可数，而不是只凭“有无限多个输入”猜测。

### English solution

**Answer.** Uncountable.

**Derivation/proof.** Map $f$ to $A_f=\{n:f(n)=1\}$. Every subset of naturals determines exactly one such indicator function, and distinct subsets produce distinct functions. Thus this is a bijection with $P(\mathbb N)$. Alternatively, from any list $f_1,f_2,\ldots$ define $g(n)=1-f_n(n)$; then $g$ differs from every listed function. Hence the set is uncountable.

## Common Mistakes

- 将函数方向反过来会变成只有两个输入的可数问题。 / Keep the infinite domain.
- 构造新函数时必须在 {0,1} 内翻转，不能产生输出二。 / Use g(n)=1−fₙ(n).

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]

- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Binary-valued sequences correspond bijectively to all subsets of the naturals.
