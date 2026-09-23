---
id: "Q-2025F-MID-P01-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 3
question_number: "1(a)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Expand NAND and compare two distributive forms without using a truth table."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 3
---
# Q-2025F-MID-P01-a

## Source

[[2025 Fall Midterm]]; printed item 1(a); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=3]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=4]]

Source correction: Page 4 temporarily drops the NAND bars in the redundant equality substituting q→r by ¬q∨r. The defining line, following De Morgan line and final statement retain NAND correctly. The unbarred substitution equality is itself true for ordinary AND, but should use NAND to remain the same expression in this derivation. The correct official conclusion and complete proof are unchanged.

## Question

![[STEM-2025F-MID-P01 - Shared Problem Prompt#Shared printed wording]]

(a) [3 points] Use propositional laws to prove that
$$p\mathbin{\overline\land}(q\to r)\equiv(p\to q)\land(p\to\neg r)$$
(you are NOT allowed to use truth table)

## 中文解析

左式的带横线合取是 NAND；消去它后应用 De Morgan 即可。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 等价成立。

**推导。** 由 NAND 定义，左式为 $\neg(p\land(q\to r))$。消去蕴含得 $\neg(p\land(\neg q\lor r))$，再用 De Morgan 化为 $\neg p\lor(q\land\neg r)$。右式分别消去两蕴含得到 $(\neg p\lor q)\land(\neg p\lor\neg r)$，由 distributive law 也等于 $\neg p\lor(q\land\neg r)$。因此左右相等，各步只用逻辑等价律，没有使用真值表。

## Common Mistakes

- 运算符上横线必须保留，普通合取不会得到同一结论。
- 否定 $q\to r$ 得 $q\land\neg r$，不是 $\neg q\lor r$。

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]

Expand NAND and compare two distributive forms without using a truth table.
