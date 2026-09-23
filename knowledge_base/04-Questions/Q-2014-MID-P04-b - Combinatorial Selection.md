---
id: "Q-2014-MID-P04-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Midterm]]"
source_pdf: "knowledge_base/past_paper/2014-midterm.pdf"
source_page: 6
solution_page: [6]
question_number: "4(b)"
year: 2014
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]", "[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "The twelve-letter word has four l letters and three each of a and o, requiring three repeated-letter factorial divisors."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-MID-P04-b

## Source

![[knowledge_base/past_paper/2014-midterm.pdf#page=6]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-midterm.pdf#page=6]].

## Question

(b) How many anagrams does the word “lollapalooza” have?

Explain your answers.

Shared context: [[STEM-2014-MID-P04 - Shared Problem Prompt]].

## 中文解析

先核对字母重数：l 有四个、a 和 o 各三个。多重集合排列的分母只包括重复字母的阶乘。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 6. The Chinese derivation expands the reasoning.

**Answer.** $12!/(4!3!3!)=554400$.

**Derivation/proof.** The twelve letters have multiplicities $l:4$, $a:3$, $o:3$, $p:1$, $z:1$. Divide $12!$ by factorials of repeated-letter multiplicities.

### 中文解答

**推导。** 逐字核对 lollapalooza：l 有四个，a 有三个，o 有三个，p 与 z 各一个，共十二个字母。给重复字母临时编号会产生 $12!$ 种排列；去掉编号时，每种实际单词被重复计数 $4!3!3!$ 次。因此不同排列数为 $12!/(4!3!3!)=554400$。

## Common Mistakes

- 把 l 误数为三个。
- 遗漏 o 的 $3!$ 分母。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
