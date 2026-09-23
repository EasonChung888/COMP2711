---
id: "Q-2023S-MID-P03-3"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 6
question_number: "3(3)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "A function on two fixed inputs is determined by exactly two natural-number values."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
---
# Q-2023S-MID-P03-3

## Source

[[2023 Spring Midterm]]; printed item 3(3). No separate atomic mark allocation is printed.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=6]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=6]]

Printed prompt uses numerical labels 1–5; the answer switches to (a)–(e). This note retains the prompt label. The parent allocates 10 marks jointly.

## Question

3. The set of all functions from $\{0,1\}$ to $\mathbb N$

Shared printed context: ![[STEM-2023S-MID-P03 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

函数的输入只有两个，所以只需记录 f(0) 和 f(1) 两个自然数就完全确定函数。函数集合与自然数有序对一一对应，不能因为值域无限就直接判断函数集合不可数。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 从 $\{0,1\}$ 到 $\mathbb N$ 的全部函数构成 countably infinite 集合。

**推导。**

1. 定义对应 $f\mapsto(f(0),f(1))$。函数只有两个输入，所以这个有序对记录了全部函数值；两个函数对应相同有序对，就在每个输入处相等，因而是同一个函数。
2. 反过来，任何 $(a,b)\in\mathbb N^2$ 都给出唯一函数 $f(0)=a,f(1)=b$，故对应是 bijection。自然数有序对可按 $a+b$ 的对角线枚举，且有无限多个，所以函数集合无限可数。关键是定义域只有两个元素；值域无限本身并不迫使函数集合不可数。

### English solution

**Answer.** Countable.

**Derivation/proof.** Associate each function $f$ with the ordered pair $(f(0),f(1))$. This assignment is injective because equal pairs mean equal values at every input, and surjective because any pair of naturals defines such a function. The pairs can be enumerated by increasing sum of their coordinates, so this bijection proves the function set is countably infinite.

## Common Mistakes

- 函数由 f(0)、f(1) 两个有序输出决定，不能把它们当无序组合。 / Inputs remain labeled.
- 值域无限不代表这两个输出形成的函数集不可数。 / A finite tuple of naturals is countable.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]

- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

A function on two fixed inputs is determined by exactly two natural-number values.
