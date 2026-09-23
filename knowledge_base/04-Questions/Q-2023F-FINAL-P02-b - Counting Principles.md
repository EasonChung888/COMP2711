---
id: "Q-2023F-FINAL-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Final.pdf"
source_page: 4
question_number: "2(b)"
year: 2023
term: "fall"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "A carry from doubling any even digit makes the next doubled digit odd, forcing every original digit into 0,2,4."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4,5]
marks: 3
---
# Q-2023F-FINAL-P02-b

## Source

[[2023 Fall Final]]; printed item 2(b); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=4]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=4]] ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=5]]

## Question

How many 4-digit positive integers $a$ exists such that both $a$ and $2\times a$ have only even digits? For example, 2004 is a valid number, but $a=4282$ is not because $2a=2\cdot4282=8564$ which contains the odd digit “5”. (Notice that the leftmost digit in a 4-digit number cannot be 0)

## 中文解析

a 的每位都必须是偶数，但六或八乘二会向左产生进位。下一位的偶数翻倍后再加一将变成奇数，最高位进位也会产生奇数一，因此合法数字中所有位只能选零、二、四。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $2\cdot3^3=54$ 个四位正整数。

**推导。**

1. $a$ 的每位先须属于 $\{0,2,4,6,8\}$。若某位为六或八，乘二就产生进位一；该进位进入下一位时，“两倍偶数加一”必为奇数，留下奇数数字。若进位越过最高位，会形成奇数首位一，同样不合法。
2. 因而不能出现六或八，每一位只能从 $\{0,2,4\}$ 选择。反过来，这三个数字乘二都不产生进位，结果仍是偶数数字，所以该限制既必要又充分，不只是部分候选。
3. 最高位不能为零，有二、四两种；其余三位各有零、二、四三种独立选择。乘法原理给出 $2\cdot3\cdot3\cdot3=54$。四位性已通过首位限制处理，不能把最高位也算成三种。

### English solution

**Answer.** $2\cdot3^3=54$.

**Derivation/proof.** Each digit of a is in $\{0,2,4,6,8\}$. If any digit is 6 or 8, doubling generates a carry of 1. At the next position, twice an even digit plus this carry is odd; if the carry exits the leading position, it becomes the odd leading digit 1. Hence no carry is allowed, so all four digits must lie in $\{0,2,4\}$. Conversely, these digits generate no carries and double to even digits. The leading digit has two choices, 2 or 4; each remaining digit has three, giving 54.

## Common Mistakes

- 只要求 a 的数字偶数会误计含六和八的数。 / Check the digits of twice a too.
- 首位零会把数变为不足四位。 / Exclude zero only in the leading position.

## Connections

- [[Subtopic - Basic Counting - 基本计数]]

- [[Counting Principles - 计数原理]]
- [[Combinatorial Case Analysis - 组合分类法]]

A carry from doubling any even digit makes the next doubled digit odd, forcing every original digit into 0,2,4.
