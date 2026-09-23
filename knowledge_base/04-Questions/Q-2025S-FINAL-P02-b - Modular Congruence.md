---
id: "Q-2025S-FINAL-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 3
question_number: "2(b)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Use a Fermat witness to disprove primality while avoiding factorization as the requested method."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 3
related_questions: ["[[Q-2025S-FINAL-P02-a - Modular Congruence]]"]
---
# Q-2025S-FINAL-P02-b

## Source

[[2025 Spring Final]]; printed item 2(b); 3 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=3]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=3]]

Prerequisite context (editorial): [[Q-2025S-FINAL-P02-a - Modular Congruence]]. Part (a) establishes $2^{62}\equiv4\pmod{63}$.

## Question

(b) [3 pts] Use Fermat's Little Theorem to prove that 63 is not a prime number. Note that simply factorizing 63, e.g., as $3\times21$, is not a valid solution here. You must apply Fermat's Little Theorem explicitly.
Hint: You might find part (a) useful here.

## 中文解析

把 Fermat's Little Theorem 的必要条件与已算出的余数四相矛盾。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 63 不是素数。

**推导。** 由 (a) 导入 $2^{62}\equiv4\pmod{63}$。反设六十三是素数；由于 $63\nmid2$，Fermat's Little Theorem 强制 $2^{63-1}\equiv1\pmod{63}$。但一与四模六十三不同余，因为 $63\nmid(4-1)=3$。这与导入的计算矛盾，所以六十三不是素数。证明只用 Fermat 的必要条件及模运算，没有用因数分解替代指定方法。

## Common Mistakes

- 通过某个底数的 Fermat 检查不保证素数；本题用的是失败见证。
- 必须检查底数不是模数的倍数，才能引用素数情形的定理。

## Connections

- [[Topic - Number Theory - 数论]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Use a Fermat witness to disprove primality while avoiding factorization as the requested method.

- Prerequisite / related: [[Q-2025S-FINAL-P02-a - Modular Congruence]]: 把余数四用于 Fermat 素性必要条件的反证。 Part (a) establishes $2^{62}\equiv4\pmod{63}$.
