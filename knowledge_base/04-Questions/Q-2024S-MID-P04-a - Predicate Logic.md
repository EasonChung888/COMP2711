---
id: "Q-2024S-MID-P04-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 6
question_number: "4(a)"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "Translate multiples of four and two existential square witnesses over the explicitly integer domain."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
related_questions: ["[[Q-2024S-MID-P04-b - Predicate Logic]]"]
---
# Q-2024S-MID-P04-a

## Source

[[2024 Spring Midterm]]; printed item 4(a). No separate atomic mark allocation is printed.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=6]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=6]]

## Question

(a) Consider the domain to be the set of all integers. Express the following statement using quantifiers:
“Every integer multiple of 4 can be expressed as the difference of two perfect squares.”
You are only allowed to use $\forall,\exists,\land,\lor,\neg,\to,\leftrightarrow$, equality ($=$), power (e.g. ($a^b$)), addition (+,-), multiplication($\times$) and divisibility ($\mid$).

## 中文解析

先选任意整数，再以整除作为前件限定为四的倍数。两个平方的底数由该整数决定，所以两个存在量词要位于全称量词内部。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\forall x(4\mid x\to\exists a\exists b(x=a^2-b^2))$。

**推导。** 论域已规定为整数，故不需另写整数谓词。$4\mid x$ 表示被描述的对象是四的倍数；$x=a^2-b^2$ 则断言它由两个整数平方之差表示。用 $\exists a\exists b$ 为每个符合前件的 $x$ 选底数，用 $\forall x$ 覆盖所有整数。得到 $\forall x(4\mid x\to\exists a\exists b(x=a^2-b^2))$。另一官方形式 $\forall x\exists a\exists b(4x=a^2-b^2)$ 直接用 $4x$ 枚举所有倍数，两者等价。

## Common Mistakes

- 不要用合取代替前件蕴含，否则要求所有整数都被四整除。
- 平方底数的存在量词应在全称量词内；不要求所有倍数共用同一对底数。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]

- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Translate multiples of four and two existential square witnesses over the explicitly integer domain.

- Used by: [[Q-2024S-MID-P04-b - Predicate Logic]]: 此结果在后续小题中的具体用途：Use the selected representation $\forall x(4\mid x\to\exists a\exists b(x=a^2-b^2))$ over the integers; this is the statement being negated.
