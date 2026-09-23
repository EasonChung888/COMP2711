---
id: "Q-2025S-FINAL-P02-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 3
question_number: "2(a)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Find a short power congruence modulo a composite before reducing the requested exponent."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 3
related_questions: ["[[Q-2025S-FINAL-P02-b - Modular Congruence]]"]
---
# Q-2025S-FINAL-P02-a

## Source

[[2025 Spring Final]]; printed item 2(a); 3 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=3]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=3]]

## Question

(a) [3 pts] Calculate $2^{62}\pmod{63}$.

## 中文解析

六次幂恰比六十三大一，能够直接建立周期，无需假设模数为素数。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $4$。

**推导。** 直接计算 $2^6=64\equiv1\pmod{63}$。把指数分解为 $62=6\cdot10+2$，则 $2^{62}=(2^6)^{10}2^2\equiv1^{10}\cdot4=4\pmod{63}$。四在零至六十二之间，是约化后的余数。此计算由明确的整数同余得到，完全不依赖六十三的素性。

## Common Mistakes

- 六十三并非素数，不能未经判断便用 Fermat 说六十二次幂余一。
- 指数六十二除以六余二，而不是整除；尾部的二次幂必须保留。

## Connections

- [[Topic - Number Theory - 数论]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Find a short power congruence modulo a composite before reducing the requested exponent.

- Follow-on / contrast: [[Q-2025S-FINAL-P02-b - Modular Congruence]]: 把余数四用于 Fermat 素性必要条件的反证。
