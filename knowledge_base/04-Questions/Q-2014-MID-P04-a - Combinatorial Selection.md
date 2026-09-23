---
id: "Q-2014-MID-P04-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Midterm]]"
source_pdf: "knowledge_base/past_paper/2014-midterm.pdf"
source_page: 6
solution_page: [6]
question_number: "4(a)"
year: 2014
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]", "[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Counting the word's anagrams requires dividing by factorials for repeated letters rather than treating all positions as distinct."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-MID-P04-a

## Source

![[knowledge_base/past_paper/2014-midterm.pdf#page=6]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-midterm.pdf#page=6]].

## Question

(a) How many anagrams does the word “java” have?

Explain your answers.

Shared context: [[STEM-2014-MID-P04 - Shared Problem Prompt]].

## 中文解析

重复字母 a 出现两次，交换两个 a 不产生新排列，因此要除以 $2!$。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 6. The Chinese derivation expands the reasoning.

**Answer.** $4!/2!=12$.

**Derivation/proof.** There are four positions with two indistinguishable a's. Divide the $4!$ permutations of labelled letters by the $2!$ swaps that do not change the word.

### 中文解答

**推导。** java 有四个字母，两个 a 相同，j 与 v 各一个。若先把四个字母都标成不同对象，有 $4!$ 个排列；交换两个 a 不改变单词，使每个实际排列被数 $2!$ 次。因此不同排列数是 $4!/2!=12$。

## Common Mistakes

- 把两个 a 当作不同而答 $24$。
- 误除以所有四个字母的阶乘。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
