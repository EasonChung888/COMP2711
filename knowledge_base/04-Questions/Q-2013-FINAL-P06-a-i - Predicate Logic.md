---
id: "Q-2013-FINAL-P06-a-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Final]]"
source_pdf: "knowledge_base/past_paper/2013-final.pdf"
source_page: 9
solution_page: [9]
question_number: "6(a)(i)"
year: 2013
term: "spring"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "Translating the universal English statement requires binding both predicates to the same arbitrary person and negating the job predicate correctly."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-FINAL-P06-a-i

## Source

![[knowledge_base/past_paper/2013-final.pdf#page=9]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-final.pdf#page=9]].

## Question

(a) Write down the logic statements for the three sentences above.

(i) All rich people have famous-brand products and don't have part-time jobs.

Shared context: [[STEM-2013-FINAL-P06 - Shared Problem Prompt]].

## 中文解析

全称句的限制对象放在蕴含左边：只有富人必须满足后面的两个条件。‘并且没有兼职’是合取中的否定谓词。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 9. The Chinese derivation expands the reasoning.

**Answer.** $\forall x\in U\,[R(x)\Rightarrow(F(x)\land\neg J(x))]$.

**Derivation/proof.** The phrase ‘all rich people’ sets a universal implication with antecedent $R(x)$; the two claimed properties are conjoined in the consequent.

### 中文解答

**推导。** “All”表示对全体人 U 作全称量化；“rich people”是限制条件 $R(x)$，作为蕴含前件。结论是同一人同时有名牌产品且没有兼职，写成 $F(x)\land\neg J(x)$。合起来为 $\forall x\in U\,[R(x)\Rightarrow(F(x)\land\neg J(x))]$；非富人不受此句限制。

## Common Mistakes

- 写成 $\forall x(R(x)\land F(x)\land\neg J(x))$。
- 把 ‘all’ 错用为存在量词。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]
