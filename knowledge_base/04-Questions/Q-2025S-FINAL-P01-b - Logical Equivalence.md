---
id: "Q-2025S-FINAL-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 2
question_number: "1(b)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Factor the common disjunct and recognize two implications as a biconditional."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
marks: 2
---
# Q-2025S-FINAL-P01-b

## Source

[[2025 Spring Final]]; printed item 1(b); 2 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=2]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=2]]

## Question

(b) [2 pts] Prove or disprove the following statement. In order to prove, you must use propositional laws. In order to disprove, you need to come up with values that this statement is false.
$$ (x\lor y\lor\neg z)\land(\neg x\lor y\lor z)\equiv\neg y\to(x\leftrightarrow z) $$

## 中文解析

两边都可以化为 $y\lor(x\leftrightarrow z)$，关键是先提出公共的 $y$。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 等价成立。

**推导。** 利用交换律与分配律，左式化为 $y\lor((x\lor\neg z)\land(\neg x\lor z))$。其中 $x\lor\neg z\equiv z\to x$，$\neg x\lor z\equiv x\to z$，两蕴含合取即 $x\leftrightarrow z$，故左式为 $y\lor(x\leftrightarrow z)$。右式用 implication law 为 $\neg(\neg y)\lor(x\leftrightarrow z)=y\lor(x\leftrightarrow z)$。两式经逻辑律变成相同式子，因此等价。

## Common Mistakes

- 不能把双条件当作单向蕴含，否则会遗漏其中一个限制。
- 右边前件已经是否定 $y$，消去蕴含后得到正的 $y$。

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]

Factor the common disjunct and recognize two implications as a biconditional.
