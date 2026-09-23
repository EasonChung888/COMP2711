---
id: "Q-2020-MID-P05-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 3
question_number: "5(d)"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]","[[Functions - 函数]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Characteristic functions inject all natural-number subsets into the function space."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
related_questions: ["[[Q-2020-MID-P05-b - Countability]]"]
---
# Q-2020-MID-P05-d

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=3]]

Prerequisite context (editorial): [[Q-2020-MID-P05-b - Countability]]. The characteristic-function construction below uses the uncountability of $P(\mathbb N)$ proved in (b), not merely the infinitude of $\mathbb N$. 本题把每个自然数子集编码成函数，因此需要的是幂集不可数，而不只是底集合无限。

## Question

The set of all functions from $\mathbb N$ to $\mathbb N$

Shared context: [[STEM-2020-MID-P05 - Shared Problem Prompt]].

## 中文解析

每个子集都可编码成一个函数：属于集合时输出一个固定自然数，不属于时输出另一个。不同子集必在某处给出不同函数值，因此函数空间至少包含与不可数幂集一样多的对象。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** Uncountable.

**Derivation/proof.** Choose two distinct naturals a,b. For every subset S define $f_S(i)=a$ when $i\in S$, and b otherwise. Distinct subsets differ at some i and thus yield distinct functions. This injects the uncountable power set of the naturals into the function space, proving that the full function space is uncountable independently of whether zero is considered natural.

### 中文解答

**推导。** 判为不可数。任选两个不同自然数 $a,b$，对每个自然数子集 $S$ 构造函数：$f_S(i)=a$ 若 $i\in S$，否则 $f_S(i)=b$。若 $S\ne T$，存在某个下标只属于其中一个集合，该处两函数分别取 $a,b$，所以 $f_S\ne f_T$。这把不可数的 $P(\mathbb N)$ 单射嵌入全部 $\mathbb N\to\mathbb N$ 函数，故函数集合不可数。选任意两个自然数可避免对自然数是否包括零作额外约定。

## Common Mistakes

- 用定义域的可数性推断所有函数可数。
- 只考虑常值函数而不是全部函数。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Functions - 函数]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

- Prerequisite: [[Q-2020-MID-P05-b - Countability]]
