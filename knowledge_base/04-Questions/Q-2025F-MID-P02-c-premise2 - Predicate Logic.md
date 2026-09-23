---
id: "Q-2025F-MID-P02-c-premise2"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 7
question_number: "2(c)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "Bind the same existential witness to being an excuse and being unsatisfactory."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
solution_page: [8]
verification_status: "verified"
related_questions: ["[[Q-2025F-MID-P02-c-proof - Proof Strategy]]"]
---
# Q-2025F-MID-P02-c-premise2

## Source

[[2025 Fall Midterm]]; printed item 2(c); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=7]]

Published official answer with scope clarification: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=8]]

Source correction: Page 8 omits grouping parentheses in ∃xE(x)∧¬S(x). Its very next proof line instantiates E(x₀)∧¬S(x₀), demonstrating intended whole-conjunction scope. The explicit form is ∃x(E(x)∧¬S(x)); under narrow immediate-formula parsing the ungrouped second x would be free. This is a secondary notation clarification, not a different official premise.

Atomic extraction: this note isolates Premise 2 from the combined instruction “First, write each premise as a logical form using quantifiers and the above predicates and then write a formal proof for the following statement: Some excuses are not clear explanations.” The shared 5 points are not apportioned.

## Question

![[STEM-2025F-MID-P02-c - Shared Problem Prompt#Shared printed wording]]

First, write each premise as a logical form using quantifiers and the above predicates

Premise 2: Some excuses are unsatisfactory

## 中文解析

“Some”要求一个对象同时满足借口与不满意两个条件。

## Detailed Solution

Provenance: published official answer, independently checked; the source grouping clarification is retained above.

### 中文解答

**答案。** $\exists x(E(x)\land\neg S(x))$。

**推导。** 取某个对象 $x$，它是借口用 $E(x)$ 表达，它不令人满意用 $\neg S(x)$ 表达。英文将两个性质赋给同一对象，所以先组成 $E(x)\land\neg S(x)$，然后把整项置于同一个存在量词内，得到 $\exists x(E(x)\land\neg S(x))$。这样 $x$ 的每一次出现均被绑定。若只把 $E(x)$ 放在量词范围内，外部的 $S(x)$ 就是自由变量，不能表达这句完整前提。

## Common Mistakes

- 不能分别选一个借口与另一个不满意对象，它们可能不是同一个。
- 存在量词后应把整个合取括起来，避免留下自由变量。

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Bind the same existential witness to being an excuse and being unsatisfactory.

- Follow-on / contrast: [[Q-2025F-MID-P02-c-proof - Proof Strategy]]: 从不满意借口的存在式选取同一个见证。
