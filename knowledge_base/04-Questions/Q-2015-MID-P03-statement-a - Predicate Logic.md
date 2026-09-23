---
id: "Q-2015-MID-P03-statement-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 7
solution_page: [8]
question_number: "3(a)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 2
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "Both properties belong in the same universal implication antecedent, with success as the consequent."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P03-statement-a

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=7]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=8]]

## Question

(a) A rich and famous person is a successful person.

Shared context: [[STEM-2015-MID-P03 - Shared Problem Prompt]].

## 中文解析

“一个富有而著名的人”是在说明任意符合两个条件的人，并非只声称存在一个人。故用全称量词，前件同时包含富有和著名，后件才是成功。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 8. The Chinese derivation expands the reasoning.

**Answer.** $\forall x\in U((rich(x)\land famous(x))\to successful(x))$.

**Derivation/proof.** Choose an arbitrary person $x$. The claim applies when both $rich(x)$ and $famous(x)$ hold, and then requires $successful(x)$. Put these conditions into an implication and universally quantify $x$.

### 中文解答

**推导。** 任取域 U 中的人 x。原句不是仅说存在某个人，而是对每个同时富有和著名的人断言成功。因此条件为 $rich(x)\land famous(x)$，结论为 $successful(x)$，写成蕴含并对 x 全称化，得 $\forall x\in U((rich(x)\land famous(x))\to successful(x))$。不满足合取条件的人不受这条成功断言限制。

## Common Mistakes

- 用存在量词代替“任意符合条件的人”。
- 把前件中的“而且”写成“或者”。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]
