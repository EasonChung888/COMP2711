---
id: "Q-2022-FINAL1-P03-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2022-final-part-1.pdf"
source_page: 2
question_number: "3(a)"
year: 2022
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Seven unrestricted positions each admit all thirty-six symbols."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
marks: 2
---
# Q-2022-FINAL1-P03-a

## Source

![[knowledge_base/past_paper/2022-final-part-1.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2022-final-part-1.pdf#page=2]]

## Question

How many possible order IDs are there?

Shared context: [[STEM-2022-FINAL1-P03 - Shared Problem Prompt]].

## 中文解析

订单编号是字符序列，首位零也合法。字母二十六种加数字十种，总计三十六种，每个位置都可重复使用，因此七个位置按乘法原理相乘。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $36^7$.

**Derivation/proof.** The available alphabet has 26+10=36 distinct characters. With no repetition restriction each of the seven positions independently has 36 choices. The product rule therefore gives 36·36·36·36·36·36·36=36^7. A leading zero is a valid character because these are IDs, not seven-digit integers.

### 中文解答

**推导。** 可用字符由二十六个大写字母和十个数字组成，共 $26+10=36$ 种。题目这小问没有限制重复，所以七个有序位置各有三十六种选择，由乘法原理得到 $36\cdot36\cdot36\cdot36\cdot36\cdot36\cdot36=36^7$。这是编号字符串，不是七位十进制整数，首位为零也合法，不能从首位选项中扣掉零。

## Common Mistakes

- 误用排列数而禁止重复。
- 把首位零排除。

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
