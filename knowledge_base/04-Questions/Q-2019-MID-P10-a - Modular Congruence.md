---
id: "Q-2019-MID-P10-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 12
solution_page: [12]
question_number: "10(a)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Multiplying by the supplied inverse fifteen reduces 465 to the representative 49."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-MID-P10-a

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=12]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=12]]

## Question

(a) $7x\equiv31\pmod{104}$

Shared context: [[STEM-2019-MID-P10 - Shared Problem Prompt]].

## 中文解析

十五是七的逆元，因此同余两边乘十五就能消去系数七。右侧四百六十五再模一百零四化成四十九；最后代回原式验证余数三十一，避免乘法或取余笔误。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 12. The Chinese derivation expands the reasoning.

**Answer.** $x=49$.

**Derivation/proof.** Multiply both sides by the inverse 15: $x\equiv15\cdot31=465\equiv49\pmod{104}$ since $465=4\cdot104+49$. Direct verification gives $7\cdot49=343=3\cdot104+31$. The representative 49 lies in the required range.

### 中文解答

**推导。** 已知 $15\cdot7\equiv1\pmod{104}$，两边乘 $15$ 得 $x\equiv15\cdot31=465\equiv49\pmod{104}$。所给范围内唯一解为 $x=49$。回代 $7\cdot49=343=3\cdot104+31$，确实满足原同余。

## Common Mistakes

- 做普通除法三十一除七。
- 乘了逆元却不把结果约到指定区间。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
