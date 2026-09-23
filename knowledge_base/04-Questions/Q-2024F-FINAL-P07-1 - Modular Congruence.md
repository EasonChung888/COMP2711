---
id: "Q-2024F-FINAL-P07-1"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 19
question_number: "7(1)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Invert coefficient 3 modulo 5 and 7 to normalize three congruences for the separate CRT step."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [19]
related_questions: ["[[Q-2024F-FINAL-P07-2 - Modular Congruence]]"]
---
# Q-2024F-FINAL-P07-1

## Source

[[2024 Fall Final]]; printed item 7(1). No separate atomic mark allocation is printed.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=19]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=19]]

Atomic extraction of printed step 1. Problem 7 carries 10 aggregate points with no per-step marks. Page 19 supplies this normalization.

## Question

1. Remove the coefficients of $x$.

Shared printed context: ![[STEM-2024F-FINAL-P07 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

CRT 要先得到 x 的单位系数剩余类。两个三分别处于不同模数，要各自求逆；它们并不是普通实数除法中的三分之一。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $x\equiv3\pmod5,\quad x\equiv2\pmod4,\quad x\equiv2\pmod7$。

**推导。** 模五下 $3\cdot2=6\equiv1$，故第一式两边乘二：$x\equiv8\equiv3\pmod5$。第二式系数已为一，保留 $x\equiv2\pmod4$。模七下 $3\cdot5=15\equiv1$，故第三式两边乘五：$x\equiv30\equiv2\pmod7$。两个乘法均可逆，因为三分别与五和七互素，所以规范化系统与原系统完全等价，并未增删任何整数解。

## Common Mistakes

- 同一系数三在模五和模七的逆元不同，不能都乘二。
- 无分开的原子分值，整题十分不能任意分给两个步骤。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]

- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Invert coefficient 3 modulo 5 and 7 to normalize three congruences for the separate CRT step.

- Used by: [[Q-2024F-FINAL-P07-2 - Modular Congruence]]: 此结果在后续小题中的具体用途：Step 1 supplies the equivalent system $x\equiv3\pmod5$, $x\equiv2\pmod4$, $x\equiv2\pmod7$.
