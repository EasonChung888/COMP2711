---
id: "Q-2024F-FINAL-P05-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 15
question_number: "5(a)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Expand the two even residue classes a=4k and a=4k+2 to prove the complete square-residue set {0,4} modulo eight."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [15]
marks: 3
related_questions: ["[[Q-2024F-FINAL-P05-c - Modular Congruence]]"]
---
# Q-2024F-FINAL-P05-a

## Source

[[2024 Fall Final]]; printed item 5(a); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=15]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=15]]

## Question

(a) Assume $a$ to be an even integer. What are the possible values for $a^2\pmod8$?
Hint: Assume $a=4k$ or $a=4k+2$.

## 中文解析

本题只讨论偶数。按提示将偶数分为模四余零、余二两类，平方后分别模八约化，再给出实现两个余数的例子，确认没有遗漏。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\{0,4\}$。

**推导。** 任意偶数模四只能余零或二。若 $a=4k$，则 $a^2=16k^2\equiv0\pmod8$；若 $a=4k+2$，则 $a^2=16k^2+16k+4\equiv4\pmod8$。两类覆盖所有正负偶数；取 $a=0$ 与 $a=2$ 分别实现零和四，所以可能余数恰为 $\{0,4\}$，而非只给一个包含它们的上界。

## Common Mistakes

- 偶数平方不一定被八整除，例如 $2^2=4$；必须分别处理 $a=4k$ 与 $a=4k+2$。
- 只证明余数属于 $\{0,4\}$ 还需说明两者均可实现，取 $a=0$ 与 $a=2$ 即可。

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]

- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Expand the two even residue classes a=4k and a=4k+2 to prove the complete square-residue set {0,4} modulo eight.

- Used by: [[Q-2024F-FINAL-P05-c - Modular Congruence]]: 此结果在后续小题中的具体用途：Part (a): if an integer is even, its square is congruent to $0$ or $4$ modulo $8$.
