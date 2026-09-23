---
id: "Q-2014-FINAL-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 4
solution_page: [4]
question_number: "2(b)"
year: 2014
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["counterexample"]
difficulty: 1
difficulty_basis: "A valid counterexample has to make the two nested remainders differ, so the choice of a, m, and n must be verified explicitly."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P02-b

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=4]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=4]].

## Question

(b) $(a\bmod mn)\bmod n=a\bmod m$.

Shared context: [[STEM-2014-FINAL-P02 - Shared Problem Prompt]].

## 中文解析

反驳全称命题只需一个合法反例。选择 $m,n$ 不同可使两侧显然落在不同的余数范围。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** False: $a=8,m=2,n=3$ gives $2\ne0$.

**Derivation/proof.** Here $(8\bmod6)\bmod3=2\bmod3=2$, but $8\bmod2=0$. One concrete allowed triple disproves the universal claim.

### 中文解答

**推导。** 取 $a=8,m=2,n=3$，三者都是大于一的正整数，满足源题定义域。左侧 $(8\bmod6)\bmod3=2\bmod3=2$，右侧 $8\bmod2=0$。同一合法输入给 $2\ne0$，所以这个全称等式为假。

## Common Mistakes

- 仅说 ‘不一定’ 而没有数值反例。
- 将 $8\bmod6$ 算为 0。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
