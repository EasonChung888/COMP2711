---
id: "Q-2024F-MID-P01-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 3
question_number: "1(c)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Combine q→r with p→(q and not-r), then derive not-p, not-s, and not-t with corrected citations."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
solution_page: [4]
verification_status: "verified"
marks: 6
---
# Q-2024F-MID-P01-c

## Source

[[2024 Fall Midterm]]; printed item 1(c); 6 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=3]]

Page 4 prints step 8 “¬p from 7,2”. Step 7 needs the antecedent proved in step 6, so the correct justification is from 7,6. Every formula and the final conclusion are correct; only this line reference is corrected, so the conclusion remains official.

Printed discrepant/incomplete material: [[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=4]].

## Question

(c) Let $p,q,r,s,t$ denote five propositions. You are given the following set of premises:
1. $s\lor\neg t$
2. $p\to(q\land\neg r)$
3. $s\to p$
4. $q\to r$

Using rules of inference for propositional logic, show that the truth of the above premises implies that the conclusion $(\neg p\land\neg t)$ is true.
Hint: Start by combining premises 4 and 2.

## 中文解析

若 p 成立会同时得到 q 与非 r，但第四条使 q 推出 r。排除 p 后，通过第三条排除 s，再从第一析取式得到非 t。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below; the secondary line-reference correction is documented in Source.

### 中文解答

**答案。** $\neg p\land\neg t$。

**推导。** 5. 由 4 消去蕴含，得 $\neg q\lor r$。6. 由 5 用 De Morgan 得 $\neg(q\land\neg r)$。7. 由 2 取逆否，得 $\neg(q\land\neg r)\to\neg p$。8. 由 6、7 用 modus ponens，得 $\neg p$。9. 由 3 取逆否，得 $\neg p\to\neg s$。10. 由 8、9 得 $\neg s$。11. 由 1、10 析取三段论得 $\neg t$。12. 由 8、11 合取引入，得 $\neg p\land\neg t$。修正后的每个引用都只使用已证的对应前件。

## Common Mistakes

- 原答案第八步引用 7,2 并不提供第七步所需前件，应引用 6,7。
- 从 $s\to p$ 和 $\neg p$ 可推出 $\neg s$，不能反用成肯定后件。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Subtopic - Inference and Proofs - 推理与证明]]

- [[Logical Equivalence - 逻辑等价]]
- [[Proof Strategy - 证明策略]]
- [[Logic-Law Method - 逻辑律方法]]

Combine q→r with p→(q and not-r), then derive not-p, not-s, and not-t with corrected citations.
