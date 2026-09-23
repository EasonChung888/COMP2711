---
id: "Q-2022-FINAL1-P03-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2022-final-part-1.pdf"
source_page: 2
question_number: "3(d)"
year: 2022
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "The two alternating type patterns have four positions of the starting type and three of the other."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 3
---
# Q-2022-FINAL1-P03-d

## Source

![[knowledge_base/past_paper/2022-final-part-1.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2022-final-part-1.pdf#page=3]]

## Question

How many possible order IDs are there if characters must alternative between a letter and a digit? (E.g. A3R4B7Q and 4V7X3V7 are valid, B7XB4Q3 is invalid)

Shared context: [[STEM-2022-FINAL1-P03 - Shared Problem Prompt]].

## 中文解析

长度七是奇数，开头类型会占四位，另一类型占三位。分别按字母开头和数字开头两种互斥情况计算再相加；位置模式固定后无需再乘组合数选择位置。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $26^4\cdot10^3+10^4\cdot26^3$.

**Derivation/proof.** If the ID starts with a letter, its type pattern is L-D-L-D-L-D-L, with four letter slots and three digit slots, giving 26^4·10^3. If it starts with a digit, the complementary pattern gives 10^4·26^3. These two cases cannot overlap and include every alternating ID. Repetition within one type is allowed by the displayed examples.

### 中文解答

**推导。** 分成两个互斥的起始类型。若字母开头，类型模式只能是 L-D-L-D-L-D-L，四个字母位各二十六种、三个数字位各十种，计 $26^4\cdot10^3$。若数字开头，模式只能是 D-L-D-L-D-L-D，计 $10^4\cdot26^3$。两类相加得 $26^4\cdot10^3+10^4\cdot26^3$。同类型位置可重复，原例 $4V7X3V7$ 已有重复；位置模式也已固定，无需再乘选择位置的组合数。

## Common Mistakes

- 只计算一种开头。
- 额外乘选择位置的组合数而破坏交替限制。

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
