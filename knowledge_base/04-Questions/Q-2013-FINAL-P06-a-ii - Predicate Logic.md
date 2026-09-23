---
id: "Q-2013-FINAL-P06-a-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Final]]"
source_pdf: "knowledge_base/past_paper/2013-final.pdf"
source_page: 9
solution_page: [9]
question_number: "6(a)(ii)"
year: 2013
term: "spring"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "The existential translation must keep the part-time-job and product predicates under one shared witness."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-FINAL-P06-a-ii

## Source

![[knowledge_base/past_paper/2013-final.pdf#page=9]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-final.pdf#page=9]].

## Question

(a) Write down the logic statements for the three sentences above.

(ii) Some students with part-time jobs have famous-brand products.

Shared context: [[STEM-2013-FINAL-P06 - Shared Problem Prompt]].

## 中文解析

存在量词表示至少有一个人同时具有三项性质，因此三个谓词应用于同一个 $x$ 并以合取连接。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 9. The Chinese derivation expands the reasoning.

**Answer.** $\exists x\in U\,[S(x)\land J(x)\land F(x)]$.

**Derivation/proof.** ‘Some’ requires an existential witness, and that same witness must be a student, have a part-time job, and have the products.

### 中文解答

**推导。** “Some”要求至少一个见证，使用 $\exists x\in U$。这个同一人必须是学生、有兼职、拥有名牌产品，三项条件都要成立，所以用合取而非蕴含：$\exists x\in U\,[S(x)\land J(x)\land F(x)]$。量词绑定三个谓词中的同一个 x，避免把三种性质分配给不同的人。

## Common Mistakes

- 把三个存在量词分开，允许不同的人。
- 把 ‘some’ 翻成全称量词。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]
