---
id: "Q-2024F-FINAL-P05-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 15
question_number: "5(b)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Expand an odd square as 4k(k+1)+1 and prove k(k+1) even, obtaining the unique square residue 1 modulo eight."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [15]
marks: 3
related_questions: ["[[Q-2024F-FINAL-P05-c - Modular Congruence]]"]
---
# Q-2024F-FINAL-P05-b

## Source

[[2024 Fall Final]]; printed item 5(b); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=15]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=15]]

## Question

(b) Assume $a$ to be an odd integer. What are the possible values for $a^2\pmod8$?

## 中文解析

本题只讨论奇数。写成 $a=2k+1$ 后，将平方整理为 $4k(k+1)+1$，利用相邻整数乘积为偶数，证明模八余数唯一为一。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 只有 $1$。

**推导。** 任意奇数写成 $a=2k+1$，其中 k 是整数。平方为 $a^2=4k^2+4k+1=4k(k+1)+1$。相邻整数 k 与 k+1 必有一个偶数，因此 $k(k+1)$ 被二整除，$4k(k+1)$ 被八整除，故 $a^2\equiv1\pmod8$。取 $a=1$ 实现此余数，所以唯一可能值是 一，负奇数也包含在同一表达式中。

## Common Mistakes

- 从 $a^2=4k(k+1)+1$ 不能只停在模四余一；要用 $k(k+1)$ 为偶数才能得到模八余一。
- 不能把奇数可能的余数 $1,3,5,7$ 原样当作平方余数；平方后四类都约化为 $1$。

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]

- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Expand an odd square as 4k(k+1)+1 and prove k(k+1) even, obtaining the unique square residue 1 modulo eight.

- Used by: [[Q-2024F-FINAL-P05-c - Modular Congruence]]: 此结果在后续小题中的具体用途：Part (b): if an integer is odd, its square is congruent to $1$ modulo $8$.
