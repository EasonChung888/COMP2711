---
id: "Q-2025F-FINAL-P01-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 3
question_number: "1(a)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Eliminate an implication and use absorption to cancel its redundant third proposition."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3,4]
marks: 3
---
# Q-2025F-FINAL-P01-a

## Source

[[2025 Fall Final]]; printed item 1(a); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=3]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=3]] ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=4]]

## Question

(a) [3 points] Without using truth table prove that:
$$[(\neg p\lor\neg q)\to(p\land q\land r)]\equiv p\land q$$

## 中文解析

消去蕴含后，两项都含 $p\land q$，吸收律会删去附加的 $r$。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 等价成立。

**推导。** 由 implication law，左式等于 $\neg(\neg p\lor\neg q)\lor(p\land q\land r)$。De Morgan 与双重否定化为 $(p\land q)\lor((p\land q)\land r)$。令 $A=p\land q$，这是 $A\lor(A\land r)\equiv A$ 的 absorption law，所以左式等于 $p\land q$。全过程保持逻辑等价，没有列真值表，也未对 $r$ 的真假作额外假设。

## Common Mistakes

- 蕴含前件为一个析取式，否定它会变成两个正命题的合取。
- r 消失来自吸收律，不是因为题目暗示 r 永真。

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]

Eliminate an implication and use absorption to cancel its redundant third proposition.
