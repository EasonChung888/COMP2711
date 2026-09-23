---
id: "Q-2024S-MID-P05"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf"
source_page: 7
question_number: "5"
year: 2024
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Derive not-t and not-s from premises, obtain not-r by modus tollens, then recover p through De Morgan."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [7]
marks: 5
---
# Q-2024S-MID-P05

## Source

[[2024 Spring Midterm]]; printed item 5; 5 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=7]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Midterm.pdf#page=7]]

Printed wording says “five propositions” but lists six symbols p,q,r,s,t,u; retained exactly.

## Question

Let $p,q,r,s,t,u$ denote five propositions. You are given the following set of premises:
1. $(\neg p\lor q)\to r$
2. $r\to(s\lor t)$
3. $\neg s\land\neg u$
4. $\neg u\to\neg t$

Using rules of inference for propositional logic, show that the truth of the above premises implies that the conclusion $p$ is true. You do not need to write the names of the rules you are using; instead, you can just number each statement and write down from which statement(s) a new statement is derived.

## 中文解析

沿结论的反方向看，若能排除 r，就能排除第一前件。第三、四条可先排除 s 与 t，再用第二条获得所需的否定。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 前提推出 $p$。

**推导。** 5. 由 3 的合取消去得 $\neg s$。6. 同理由 3 得 $\neg u$。7. 由 4、6 用 modus ponens 得 $\neg t$。8. 由 5、7 得 $\neg s\land\neg t$，即 $\neg(s\lor t)$。9. 由 2、8 用 modus tollens 得 $\neg r$。10. 由 1、9 再用 modus tollens 得 $\neg(\neg p\lor q)$。11. 用 De Morgan 和双重否定得 $p\land\neg q$。12. 合取消去得到 $p$。每一步都引用已知前提或先前推得的式子，所以结论成立。

## Common Mistakes

- 不能由 $r\to(s\lor t)$ 和 $\neg s$ 单独推出 $\neg r$，还需要 $\neg t$。
- 源文写 five 却列六个字母是笔误，不应删除参与前提的 $u$。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Subtopic - Inference and Proofs - 推理与证明]]

- [[Logical Equivalence - 逻辑等价]]
- [[Proof Strategy - 证明策略]]
- [[Logic-Law Method - 逻辑律方法]]

Derive not-t and not-s from premises, obtain not-r by modus tollens, then recover p through De Morgan.
