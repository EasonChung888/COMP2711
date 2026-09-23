---
id: "Q-2018-FINAL-P04-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 6
solution_page: [6]
question_number: "4(a)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]","[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Recursive Structures - 递归结构]]","[[Modular Congruence - 同余]]"]
methods: ["[[Recursive Construction Method - 递归构造法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["construction"]
difficulty: 2
difficulty_basis: "Three initial residues are necessary because adding three never changes the residue modulo three."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P04-a

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=6]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=6]]

Source correction: PDF page6 prints the filled basis as {1,2,3}∈X. For X a set of positive integers the intended three basis elements are1,2,3∈X, equivalently {1,2,3}⊆X; a set-valued element is not intended. The three official basis values and generation rule are retained.

## Question

(a) Fill in the following recursive definition so that $X$ is the set of all positive integers.

Basis: $\underline{\qquad}\in X$.

Recursive step: If $a\in X$, then $a+3\in X$.

For this question, no proof is required.

## 中文解析

加三不会改变模三余数，所以必须分别启动三个余数类的生成链。选一、二、三既覆盖全部正整数，也不会生成零或负数。来源把三个基例放在花括号里，应理解为三者分别属于 X。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 6. The Chinese derivation expands the reasoning.

**Answer.** Use basis elements $1,2,3\in X$.

**Derivation/proof.** These three elements generate $1+3k,2+3k,3+3k$ for all integers $k\ge0$, covering every positive integer by its remainder modulo three. The rule never produces a nonpositive value. At least one basis representative from each of the three residue classes is necessary; the source's braces mean three elements, not one set-valued element.

### 中文解答

**推导。** 基础填入三个整数 $1,2,3$，即分别声明它们属于 $X$。加三规则从它们生成 $1+3k,2+3k,3+3k$（$k\ge0$），覆盖全部正整数的三个余数类，并不会产生零或负数。任意正整数的最小同余代表恰为三者之一，因此没有遗漏。印本把花括号与 $\in$ 一起写，严格集合记号应为 $1,2,3\in X$ 或 $\{1,2,3\}\subseteq X$，不是把一个集合当整数元素。

## Common Mistakes

- 只给基例一而只生成一种余数。
- 写成集合 {1,2,3} 是 X 的一个元素。

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Recursive Structures - 递归结构]]
- [[Modular Congruence - 同余]]
- [[Recursive Construction Method - 递归构造法]]
- [[Modular Arithmetic Method - 模运算方法]]
