---
id: "Q-2013-FINAL-P06-a-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Final]]"
source_pdf: "knowledge_base/past_paper/2013-final.pdf"
source_page: 9
solution_page: [9]
question_number: "6(a)(iii)"
year: 2013
term: "spring"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "The statement's universal implication is sensitive to the scope of the negation, so a formula with an existential negation would change its meaning."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-FINAL-P06-a-iii

## Source

![[knowledge_base/past_paper/2013-final.pdf#page=9]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-final.pdf#page=9]].

## Question

(a) Write down the logic statements for the three sentences above.

(iii) All students with part-time jobs are not rich.

Shared context: [[STEM-2013-FINAL-P06 - Shared Problem Prompt]].

## 中文解析

量词的范围仍是全体人，‘学生且有兼职’是蕴含前件，结论为 $\neg R(x)$。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 9. The Chinese derivation expands the reasoning.

**Answer.** $\forall x\in U\,[(S(x)\land J(x))\Rightarrow\neg R(x)]$.

**Derivation/proof.** The restricted class is people who are both students and have part-time jobs; the asserted property is not-rich.

### 中文解答

**推导。** 对任意 $x\in U$，只有满足“学生且有兼职”即 $S(x)\land J(x)$ 的人，才必须满足“不富有”即 $\neg R(x)$。因此翻译为 $\forall x\in U\,[(S(x)\land J(x))\Rightarrow\neg R(x)]$。前件以合取限制对象，否定只作用于富有谓词。

## Common Mistakes

- 把结论写成 $R(x)$。
- 只用 $S(x)$ 而漏掉兼职条件。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]
