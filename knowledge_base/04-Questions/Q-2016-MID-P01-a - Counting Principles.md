---
id: "Q-2016-MID-P01-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Midterm]]"
source_pdf: "knowledge_base/past_paper/2016-midterm.pdf"
source_page: 3
solution_page: [3]
question_number: "1(a)"
year: 2016
term: "fall"
exam_type: "midterm"
marks: 2
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Seven ordered positions each have thirty-six independent character choices with repetition allowed."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-MID-P01-a

## Source

![[knowledge_base/past_paper/2016-midterm.pdf#page=3]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-midterm.pdf#page=3]]

## Question

(a) How many possible order id’s are there?

Shared context: [[STEM-2016-MID-P01 - Shared Problem Prompt]].

## 中文解析

每一位都能独立选择字母或数字，共三十六种。题目没有禁止重复，因此七位的选择数相乘，而不是逐位减少选项。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 3. The Chinese derivation expands the reasoning.

**Answer.** $36^7$.

**Derivation/proof.** There are $26+10=36$ choices for each of seven positions. Applying the product rule gives $\prod_{i=1}^7 36=36^7$.

### 中文解答

**推导。** 每个字符可选二十六个大写字母或十个数字，合计 $26+10=36$。七个有顺序的位置均没有禁止重复的限制，所以每个位置始终有36种选择。乘法原理给 $36\cdot36\cdot36\cdot36\cdot36\cdot36\cdot36=36^7$。

## Common Mistakes

- 把字符类别字母和数字当成只有两种实际字符。
- 擅自加入不重复限制。

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
