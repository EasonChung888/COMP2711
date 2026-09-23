---
id: "Q-2015-MID-P06-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 11
solution_page: [11]
question_number: "6(a)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 2
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "The first character has twenty-six choices and each of the seven remaining ordered positions has thirty-six."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P06-a

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=11]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=11]]

## Question

(a) The first character must be a letter.

Briefly explain how your answers are derived.

Shared context: [[STEM-2015-MID-P06 - Shared Problem Prompt]].

## 中文解析

首位只能选二十六个小写字母。后面七个位置都可以选字母或数字，共三十六种，并且允许重复，逐位置相乘即可。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 11. The Chinese derivation expands the reasoning.

**Answer.** $26\cdot36^7$.

**Derivation/proof.** Choose the first letter in 26 ways. Each remaining position independently has $26+10=36$ choices, so the product rule gives $26\cdot36^7$.

### 中文解答

**推导。** 第一位必须是小写字母，有 26 种。其余七个位置各可放十个数字或二十六个字母，均有 $10+26=36$ 种；题目未禁重复，选择无需扣除已用字符。逐位置乘法原理得到 $26\cdot36^7$ 个不同八字符密码。

## Common Mistakes

- 误把首位也计作三十六种。
- 用排列下降阶乘，擅自禁止字符重复。

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
