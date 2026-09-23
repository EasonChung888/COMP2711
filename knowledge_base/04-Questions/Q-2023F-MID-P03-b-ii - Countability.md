---
id: "Q-2023F-MID-P03-b-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf"
source_page: 7
question_number: "3(b)(ii)"
year: 2023
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "The two fixed inputs encode each function as one ordered pair of naturals, establishing both enumerability and infinitude."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
solution_page: [7]
verification_status: "verified"
marks: 1
related_questions: ["[[Q-2023F-MID-P03-b-iii - Countability]]"]
---
# Q-2023F-MID-P03-b-ii

## Source

[[2023 Fall Midterm]]; printed item 3(b)(ii); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=7]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=7]]

The complete printed key for 3(b) is `C, C, U`, visually rechecked at scale-to3200 on PDF page 7. The ii classification C is an official answer. The complete proof below independently verifies that conclusion.

## Question

Without the need for providing any explanation, determine if the following sets are infinitely countable (C) or infinitely uncountable (U):

(ii) The set of all functions from $\{1,2\}\to\mathbb N$

## 中文解析

先看 domain 只有两个元素，函数因此完全由两个输出决定。将两个输出按自然数有序对枚举即可列出所有函数，并且固定其中一个输出仍可得到无限多不同函数。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** C，infinitely countable，与第 7 页对应的官方分类一致。

**推导。**

1. 定义 $f\mapsto(f(1),f(2))$。因为定义域恰有两个输入，同一输出对决定同一个函数；反过来每个自然数对 $(a,b)$ 又定义唯一函数 $f(1)=a,f(2)=b$。因此函数集合与 $\mathbb N^2$ 存在 bijection。
2. 按 $a+b$ 从小到大列出自然数对，每条 diagonal 有限，所有对最终都会出现，所以至多可数。固定第二输出、让第一输出取所有自然数可得无限多个不同函数，故是无限可数，分类为 C。原卷 3(b) 的整行 key 为 C, C, U，此项 C 与有限定义域的枚举结论一致。

### English solution

**Answer.** C: infinitely countable.

**Derivation/proof.** The map $f\mapsto(f(1),f(2))$ is a bijection from the function set to $\mathbb N^2$: every ordered pair defines exactly one function on the two-element domain. Listing pairs along finite diagonals of increasing coordinate sum enumerates all functions. There are infinitely many choices for $f(1)$ even when $f(2)$ is fixed, so the set is infinite as well as countable.

## Common Mistakes

- 值域是无限集合并不自动导致函数集不可数。 / Finite domain size matters.
- 无序二元素集合不能表示这两个带标签的输出。 / The output pair is ordered.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]

- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

The two fixed inputs encode each function as one ordered pair of naturals, establishing both enumerability and infinitude.

- [[Q-2023F-MID-P03-b-iii - Countability]]: Contrast: reversing the finite and infinite domain/codomain turns pair enumeration into diagonal uncountability. 交换定义域和值域后，有限有序对变成无限序列。
