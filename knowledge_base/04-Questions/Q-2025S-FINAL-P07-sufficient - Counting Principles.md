---
id: "Q-2025S-FINAL-P07-sufficient"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 10
question_number: "7"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Use parity of unmatched socks to certify the imported threshold of twenty-three."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [10]
marks: 1
related_questions: ["[[Q-2025S-FINAL-P07-N - Counting Principles]]"]
---
# Q-2025S-FINAL-P07-sufficient

## Source

[[2025 Spring Final]]; printed item 7; 1 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=10]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=10]]

Prerequisite context (editorial): [[Q-2025S-FINAL-P07-N - Counting Principles]]. The threshold from the numerical atom is n=23.

## Question

![[STEM-2025S-FINAL-P07 - Shared Problem Prompt#Shared printed wording]]

You need to argue that $n$ socks guarantee at least 10 pairs,

## 中文解析

导入求得的阈值二十三，证明所有颜色分配都必须形成十对。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 23 只袜子必有至少 10 对。

**推导。** 导入 $n=23$。设各颜色只数为 $r,g,b,k$，总和二十三。各颜色配对后留下的数为各自除二的余数，因此总孤袜数 $u=(r\bmod2)+(g\bmod2)+(b\bmod2)+(k\bmod2)\le4$。又二十三减去 $u$ 必为偶数，故 $u$ 为奇数，最大只能三。于是配对数 $\sum\lfloor\text{该色只数}/2\rfloor=(23-u)/2\ge10$，对任意合法颜色分配均成立，充分性得证。

## Common Mistakes

- 从四种颜色推得至多四只孤袜后，还要利用二十三为奇数。
- 只展示一种有十对的分配不能证明“保证”，必须覆盖所有分配。

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]

Use parity of unmatched socks to certify the imported threshold of twenty-three.

- Prerequisite / related: [[Q-2025S-FINAL-P07-N - Counting Principles]]: 对最小数答案给出任意选择都满足的充分性证明。 The threshold from the numerical atom is n=23.
