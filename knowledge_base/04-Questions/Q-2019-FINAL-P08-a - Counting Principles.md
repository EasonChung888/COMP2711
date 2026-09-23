---
id: "Q-2019-FINAL-P08-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 10
solution_page: [10]
question_number: "8(a)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Complement counting removes all strings using the other 25 letters."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-FINAL-P08-a

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=10]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=10]]

## Question

(a) the letter a?

Shared context: [[STEM-2019-FINAL-P08 - Shared Problem Prompt]].

## 中文解析

含有 a 是至少一次，不是恰好一次。总字符串数减去完全不含 a 的字符串就能一次覆盖所有重复次数，不需要按 a 的出现位置重复选取，从而避免多个 a 的字符串被多计。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 10. The Chinese derivation expands the reasoning.

**Answer.** $26^6-25^6$.

**Derivation/proof.** There are $26^6$ unrestricted length-six strings. A string with no a has 25 choices independently at each position, giving $25^6$. The complement of no a is at least one a, so subtracting counts every desired string exactly once, including those with several occurrences of a.

### 中文解答

**推导。** 全部长度六的小写字符串共有 $26^6$ 个。其补集是不含 $a$ 的串，每一位置只能从另二十五字母选择，故有 $25^6$ 个。所求至少出现一次 $a$，正是从全集扣除这一补集，答案 $26^6-25^6$。重复出现多个 $a$ 的串也被恰计一次。

## Common Mistakes

- 用六乘二十五的五次方只算恰好一个 a。
- 按指定 a 的位置选择而重复计多 a 字符串。

## Connections

- [[Subtopic - Basic Counting - 基本计数]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
