---
id: "Q-2025S-FINAL-P07-minimal"
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
difficulty_basis: "Produce a legal twenty-two-sock counterexample with exactly nine disjoint pairs."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [10]
marks: 1
related_questions: ["[[Q-2025S-FINAL-P07-N - Counting Principles]]"]
---
# Q-2025S-FINAL-P07-minimal

## Source

[[2025 Spring Final]]; printed item 7; 1 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=10]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=10]]

Prerequisite context (editorial): [[Q-2025S-FINAL-P07-N - Counting Principles]]. The threshold from the numerical atom is n=23, so n−1=22.

## Question

![[STEM-2025S-FINAL-P07 - Shared Problem Prompt#Shared printed wording]]

while $n-1$ socks are not enough.

## 中文解析

必要性只需构造一个库存允许、总数二十二但不足十对的分配。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 22 只不能保证 10 对。

**推导。** 导入 $n=23$，所以检查 $n-1=22$。选择五只红袜、五只绿袜、五只蓝袜和七只黑袜，总数 $5+5+5+7=22$，每色都低于给定库存。各色最多形成 $\lfloor5/2\rfloor=2$、二、二以及 $\lfloor7/2\rfloor=3$ 对，总共九对；四只孤袜颜色不同，不能再组成同色对。因此存在合法的二十二只选择未达十对，这便证明二十二不充分。

## Common Mistakes

- 反例必须遵守各色库存，不能虚构不存在的颜色或过量袜子。
- 四只剩余袜子互不同色，不能随意把它们再凑成两对。

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]

Produce a legal twenty-two-sock counterexample with exactly nine disjoint pairs.

- Prerequisite / related: [[Q-2025S-FINAL-P07-N - Counting Principles]]: 用少一只的明确颜色分配证明该阈值不能降低。 The threshold from the numerical atom is n=23, so n−1=22.
