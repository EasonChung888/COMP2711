---
id: "Q-2025F-MID-P03-c-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 11
question_number: "3(c)(ii)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Check the precise set condition using the explicit ii encoding or counterexample."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [11]
marks: 1
related_questions: ["[[Q-2020-MID-P05-e - Countability]]"]
---
# Q-2025F-MID-P03-c-ii

## Source

[[2025 Fall Midterm]]; printed item 3(c)(ii); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=11]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=11]]

## Question

![[STEM-2025F-MID-P03-c - Shared Problem Prompt#Shared printed wording]]

(ii) The set of functions from $\mathbb N\to\mathbb N$ is uncountable infinite.

## 中文解析

假设函数可以逐个列出，在对角输入上把输出加一制造遗漏函数。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** True。

**推导。** 反设所有函数可列为 $f_0,f_1,\ldots$，构造 $g(n)=f_n(n)+1$。由于自然数对后继封闭，$g$ 仍是自然数到自然数的函数；但对每个 $n$，有 $g(n)\ne f_n(n)$，故 $g\ne f_n$。它遗漏在声称完整的列表之外，产生矛盾。因此该函数集合不可数无限。

## Common Mistakes

- 定义域和值域各自可数不表示函数集合可数，函数需无限多个取值。
- 对角函数的每个输出必须仍在自然数域内，使用加一保证这一点。

## Connections

- [[Topic - Sets and Functions - 集合与函数]]
- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Check the precise set condition using the explicit ii encoding or counterexample.

- Contrast / 对比: [[Q-2020-MID-P05-e - Countability]] — Both ask for the cardinality of functions into $\mathbb N$, but the domain changes from two points to all of $\mathbb N$: a pair of outputs is enumerable, whereas infinitely many independent outputs permit diagonalization. 两题的值域同为自然数；定义域由两个点变成全体自然数后，有限有序对的枚举不再适用，可用对角构造证明不可数。
