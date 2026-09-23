---
id: "Q-2024S-MID-P04-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 6
question_number: "4(b)"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "Negate the exact quantified square-difference representation, reversing three quantifiers and eliminating implication."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
related_questions: ["[[Q-2024S-MID-P04-a - Predicate Logic]]"]
---
# Q-2024S-MID-P04-b

## Source

[[2024 Spring Midterm]]; printed item 4(b). No separate atomic mark allocation is printed.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=6]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=6]]

Prerequisite context (editorial): [[Q-2024S-MID-P04-a - Predicate Logic]]. Use the selected representation $\forall x(4\mid x\to\exists a\exists b(x=a^2-b^2))$ over the integers; this is the statement being negated.

## Question

(b) Express the negation of your statement in (a), such that the symbol $\neg$ does not appear in your statement. (As an example if you want to say $\neg(a=b)$ you must use $a\ne b$, and if you want to say $\neg(a\mid b)$ you must use $a\nmid b$)

## 中文解析

否定“每个倍数存在一种表示”得到“存在一个倍数，无论怎样选两个底数都不能表示”。整除条件保留为肯定，等式改为不等式。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\exists x(4\mid x\land\forall a\forall b(x\ne a^2-b^2))$。

**推导。** 从 (a) 导入的公式开始：$\neg\forall x(4\mid x\to\exists a\exists b(x=a^2-b^2))$。全称取反变存在，再用 $\neg(A\to B)\equiv A\land\neg B$，得 $\exists x(4\mid x\land\neg\exists a\exists b(x=a^2-b^2))$。将两个存在量词取反，得到两个全称，最后把 $\neg(x=a^2-b^2)$ 写成 $x\ne a^2-b^2$。结果为上式，其中不再出现 $\neg$，完全符合题目限制。

## Common Mistakes

- 否定蕴含不是把整除关系取反；应保留 $4\mid x$。
- 不能只改等号不改量词，原来的存在底数必须变为所有底数。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]

- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Negate the exact quantified square-difference representation, reversing three quantifiers and eliminating implication.

- Prerequisite: [[Q-2024S-MID-P04-a - Predicate Logic]]: 本题导入此前提/结果以完成当前计算或证明：Use the selected representation $\forall x(4\mid x\to\exists a\exists b(x=a^2-b^2))$ over the integers; this is the statement being negated.
