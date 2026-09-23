---
id: "Q-2022-FINAL1-P03-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2022-final-part-1.pdf"
source_page: 2
question_number: "3(c)"
year: 2022
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Only the immediately preceding character is forbidden after the initial digit choice."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 3
---
# Q-2022-FINAL1-P03-c

## Source

![[knowledge_base/past_paper/2022-final-part-1.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2022-final-part-1.pdf#page=3]]

## Question

How many possible order IDs are there if the leftmost character must be a digit and no two consecutive characters are the same? (E.g. 3ABA3C6 is valid. C3ARX7B and 3ARRX7B are invalid)

Shared context: [[STEM-2022-FINAL1-P03 - Shared Problem Prompt]].

## 中文解析

首位限定数字，只有十种。之后每位只禁前一位的那个字符，仍有三十五种选择，远处重复不受限制；不能把全局无重复的递减排列公式套过来。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $10\cdot35^6$.

**Derivation/proof.** Choose the leftmost digit in 10 ways. At every later position only one of the36 symbols is forbidden: the symbol immediately before it. Thus each has 35 choices regardless of earlier repeated symbols. Multiplication over the six remaining positions gives 10·35^6. The valid example's repeated3 shows distant repetition is allowed.

### 中文解答

**推导。** 首位必须是数字，有十种选择。随后每一位只禁止紧邻前一位的那个字符，三十六种中去掉一种，永远留下三十五种，不必排除更早出现的字符。由乘法原理，七位编号总数为 $10\cdot35^6$。例如题给的 $3ABA3C6$ 中数字三重复仍合法，证实限制是相邻不等而非全局不重复。

## Common Mistakes

- 把所有之前字符都禁止。
- 首位仍给三十六种选择。

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
