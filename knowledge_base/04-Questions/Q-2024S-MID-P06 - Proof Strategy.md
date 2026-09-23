---
id: "Q-2024S-MID-P06"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 8
question_number: "6"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Proof Strategy - 证明策略]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Square the proposed rational sum and reduce irrationality of sqrt(6) to parity in a reduced fraction."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [8]
marks: 10
---
# Q-2024S-MID-P06

## Source

[[2024 Spring Midterm]]; printed item 6; 10 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=8]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=8]]

## Question

Prove that $\sqrt2+\sqrt3$ is irrational.

## 中文解析

平方根之和不能仅靠两个加数分别无理来判断。把和假设为有理后平方，可隔离根号六，再用最简分数的奇偶矛盾证明。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\sqrt2+\sqrt3$ 是无理数。

**推导。** 反设 $\sqrt2+\sqrt3=a/b$，其中 $a,b$ 为整数且 $b\ne0$。平方得到 $5+2\sqrt6=a^2/b^2$，所以 $\sqrt6=(a^2-5b^2)/(2b^2)$ 为有理数。将其写为最简分数 $p/q$，$q\ne0,\gcd(p,q)=1$，则 $p^2=6q^2$。右侧偶数，故 $p$ 偶，写成 $p=2k$；代入得到 $2k^2=3q^2$。左侧偶而三为奇数，所以 $q^2$ 偶，$q$ 也偶。这与最简分数的互素条件矛盾，故原和不可能有理。

## Common Mistakes

- 两个无理数之和未必无理，例如 $\sqrt2-\sqrt2=0$。
- 必须先约分到互素的 $p,q$，同时为偶数才能产生矛盾。

## Connections

- [[Subtopic - Inference and Proofs - 推理与证明]]

- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]

Square the proposed rational sum and reduce irrationality of sqrt(6) to parity in a reduced fraction.
