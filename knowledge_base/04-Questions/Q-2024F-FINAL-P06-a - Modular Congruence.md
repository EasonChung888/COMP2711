---
id: "Q-2024F-FINAL-P06-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 17
question_number: "6(a)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Subtract a divisible square and apply prime divisibility to conclude that p divides b."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [17]
marks: 4
related_questions: ["[[Q-2024F-FINAL-P06-b - Modular Congruence]]"]
---
# Q-2024F-FINAL-P06-a

## Source

[[2024 Fall Final]]; printed item 6(a); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=17]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=17]]

## Question

(a) Prove that if $p\mid a$ then $p\mid b$.

Shared printed context: ![[STEM-2024F-FINAL-P06 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

已知平方和被素数整除，再加上 a 被整除，可推出 b 的平方被整除。素数性质把对平方的整除转换成对底数的整除。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $p\mid a\Rightarrow p\mid b$。

**推导。** 由 $p\mid a$，写 $a=pt$，于是 $p\mid a^2$。共享前提又有 $p\mid a^2+b^2$，整除关系对差封闭，所以 $p\mid[(a^2+b^2)-a^2]=b^2$。由于 p 为素数，Euclid's lemma 应用于 $b^2=b\cdot b$，得 $p\mid b$。本小题仅用素数性质，不需要额外使用 $p\equiv3\pmod4$，该条件将在下一题发挥作用。

## Common Mistakes

- 对一般合数，整除平方未必整除底数，必须使用 p 是素数。
- 不能只从平方和被整除直接断言两平方分别被整除，还需要前提 $p\mid a$。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]

- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Subtract a divisible square and apply prime divisibility to conclude that p divides b.

- Used by: [[Q-2024F-FINAL-P06-b - Modular Congruence]]: 此结果在后续小题中的具体用途：Under $p\mid a^2+b^2$ and prime $p$, part (a) supplies $p\mid a\Rightarrow p\mid b$ for the final conclusion.
