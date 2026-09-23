---
id: "Q-2024F-FINAL-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 17
question_number: "6(b)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 4
difficulty_basis: "Raise a^2≡−b^2 to the odd power (p−1)/2 and apply Fermat to both nonzero residues for contradiction."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [17]
marks: 8
related_questions: ["[[Q-2024F-FINAL-P06-a - Modular Congruence]]"]
---
# Q-2024F-FINAL-P06-b

## Source

[[2024 Fall Final]]; printed item 6(b); 8 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=17]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=17]]

Prerequisite context (editorial): [[Q-2024F-FINAL-P06-a - Modular Congruence]]. Under $p\mid a^2+b^2$ and prime $p$, part (a) supplies $p\mid a\Rightarrow p\mid b$ for the final conclusion.

## Question

(b) Prove that if $p\nmid a$ then there will be contradictions. (In other words, if $p\mid a^2+b^2$ we can conclude that $p\mid a$ and $p\mid b$).
Hint: You might find little Fermat theorem useful here. You can also use part (a) even if you could not prove it.

Shared printed context: ![[STEM-2024F-FINAL-P06 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

平方和使两个平方互为负数。若两者都非零，提升到费马定理的指数时负号保留，因为 p 模四余三；这样得到一等于负一的矛盾。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 必有 $p\mid a$ 且 $p\mid b$。

**推导。** 反设 $p\nmid a$。如果 $p\mid b$，则对共享平方和作减法得到 $p\mid a^2$，素数性质将推出 $p\mid a$，矛盾，故 $p\nmid b$。现在 $a^2\equiv-b^2\pmod p$。因 $p=4k+3$，指数 $(p-1)/2=2k+1$ 为奇数，两边乘幂得到 $a^{p-1}\equiv-b^{p-1}\pmod p$。费马小定理对两个不被 p 整除的底数都适用，故 $1\equiv-1\pmod p$，即 $p\mid2$。但 p 是至少三的奇素数，不可能整除二，矛盾。于是 $p\mid a$，再由 (a) 得 $p\mid b$。

## Common Mistakes

- 提升幂后保留负号依赖指数为奇数，对 $p\equiv1\pmod4$ 不能照用。
- 费马定理前必须先证明 a 与 b 均不被 p 整除。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]

- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Raise a^2≡−b^2 to the odd power (p−1)/2 and apply Fermat to both nonzero residues for contradiction.

- Prerequisite: [[Q-2024F-FINAL-P06-a - Modular Congruence]]: 本题导入此前提/结果以完成当前计算或证明：Under $p\mid a^2+b^2$ and prime $p$, part (a) supplies $p\mid a\Rightarrow p\mid b$ for the final conclusion.
