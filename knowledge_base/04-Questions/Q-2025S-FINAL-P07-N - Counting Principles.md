---
id: "Q-2025S-FINAL-P07-N"
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
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Find the exact pigeonhole threshold and check a worst-case color allocation."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [10]
marks: 4
related_questions: ["[[Q-2025S-FINAL-P07-sufficient - Counting Principles]]","[[Q-2025S-FINAL-P07-minimal - Counting Principles]]"]
---
# Q-2025S-FINAL-P07-N

## Source

[[2025 Spring Final]]; printed item 7; 4 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=10]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=10]]

Page 10 marking scheme explicitly assigns 4 pts to correct n; the two separate proof obligations each receive 1 pt.

## Question

![[STEM-2025S-FINAL-P07 - Shared Problem Prompt#Shared printed wording]]

What is the smallest number of socks that must be selected to guarantee that the selection contains at least 10 pairs?

## 中文解析

四种颜色至多留下四只未配对袜子，奇数总数再把这一上界降到三。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $n=23$。

**推导。** 任意选出的袜子按颜色配对，设留下 $u$ 只孤袜，则每色至多一只，$u\le4$，并且 $u$ 与总数奇偶相同。选二十三只时 $u$ 为奇数，所以 $u\le3$，至少有 $(23-3)/2=10$ 对。二十二只却可能按红、绿、蓝、黑分为 $(5,5,5,7)$，只有 $2+2+2+3=9$ 对，且未超出库存。因此二十三保证达标，二十二不能保证，最小数为二十三。

## Common Mistakes

- 这里的配对不能重复使用同一只袜子，应按每色数量除二取整。
- 仅给二十四这个充分数还不是最小阈值，二十三的奇偶性会改善上界。

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]

Find the exact pigeonhole threshold and check a worst-case color allocation.

- Follow-on / contrast: [[Q-2025S-FINAL-P07-sufficient - Counting Principles]]: 对最小数答案给出任意选择都满足的充分性证明。
- Follow-on / contrast: [[Q-2025S-FINAL-P07-minimal - Counting Principles]]: 用少一只的明确颜色分配证明该阈值不能降低。
