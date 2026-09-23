---
id: "Q-2025F-MID-P02-c-premise1"
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
difficulty: 1
difficulty_basis: "Translate universal containment from clear explanations into satisfactory objects."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [8]
related_questions: ["[[Q-2025F-MID-P02-c-proof - Proof Strategy]]"]
---
# Q-2025F-MID-P02-c-premise1

## Source

[[2025 Fall Midterm]]; printed item 2(c); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=7]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=8]]

Atomic extraction: this note isolates Premise 1 from the combined instruction “First, write each premise as a logical form using quantifiers and the above predicates and then write a formal proof for the following statement: Some excuses are not clear explanations.” The shared 5 points are not apportioned.

## Question

![[STEM-2025F-MID-P02-c - Shared Problem Prompt#Shared printed wording]]

First, write each premise as a logical form using quantifiers and the above predicates

Premise 1: All clear explanations are satisfactory

## 中文解析

“All”要求对域内每个对象检查，只有它是清楚解释时才要求令人满意。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\forall x(C(x)\to S(x))$。

**推导。** 固定任意对象 $x$。若 $C(x)$ 为真，英文前提要求 $S(x)$ 也为真，因此对应 $C(x)\to S(x)$；若 $C(x)$ 为假，英文没有施加额外要求，蕴含式的空真恰好表达这一点。对所有 $x$ 加上全称量词便得 $\forall x(C(x)\to S(x))$。此公式不反过来要求每个令人满意的对象都是清楚解释。

## Common Mistakes

- 把蕴含换成合取会强迫域内所有对象都是清楚解释。
- 前提只有一个方向，不能擅自写成双条件。

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Translate universal containment from clear explanations into satisfactory objects.

- Follow-on / contrast: [[Q-2025F-MID-P02-c-proof - Proof Strategy]]: 把全称满意条件应用到存在见证。
