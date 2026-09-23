---
id: "Q-2024S-MID-P02-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 4
question_number: "2(c)"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 1
difficulty_basis: "Classify 2(c) by the distributive equivalence; no truth-table output is required."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 1
---
# Q-2024S-MID-P02-c

## Source

[[2024 Spring Midterm]]; printed item 2(c); 1 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=4]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=4]]

## Question

(c) $((p\lor q)\land r)\leftrightarrow((p\land r)\lor(q\land r))$

Shared printed context: ![[STEM-2024S-MID-P02 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

合取对析取的 distributive law 给出 $(p\lor q)\land r\equiv(p\land r)\lor(q\land r)$。左侧真恰好表示 $r$ 真且 $p,q$ 至少一个真，右侧也准确描述同一条件。本题的具体展开与结论如下。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** T

**推导。** 合取对析取的 distributive law 给出 $(p\lor q)\land r\equiv(p\land r)\lor(q\land r)$。左侧真恰好表示 $r$ 真且 $p,q$ 至少一个真，右侧也准确描述同一条件。左右同真同假，所以两者之间的 biconditional 对每个赋值都真，答案是 $T$。

## Common Mistakes

- 分配后的两项都必须包含 r，少抄一次 r 会破坏等价。
- 双条件在两侧同时假时仍为真，不能只看两侧能否分别为假。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]

- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]

Classify 2(c) by the distributive equivalence; no truth-table output is required.
