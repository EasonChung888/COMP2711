---
id: "Q-2016-MID-P06-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Midterm]]"
source_pdf: "knowledge_base/past_paper/2016-midterm.pdf"
source_page: 10
solution_page: [10]
question_number: "6(d)"
year: 2016
term: "fall"
exam_type: "midterm"
marks: 3
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "The conjunction explicitly requires the existential witness to be even and to satisfy p."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-MID-P06-d

## Source

![[knowledge_base/past_paper/2016-midterm.pdf#page=10]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-midterm.pdf#page=10]]

## Question

(d) (i) $\exists x\in E(p(x))$

(ii) $\exists x\in Z(q(x)\land p(x))$

Shared context: [[STEM-2016-MID-P06 - Shared Problem Prompt]].

## 中文解析

第二句要求找到同一个整数，同时满足偶数条件与 $p$。这正是从偶数集合中找到满足 $p$ 的元素，因此两个存在见证可以直接互相使用。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 10. The Chinese derivation expands the reasoning.

**Answer.** Equivalent.

**Derivation/proof.** A witness $x\in E$ for (i) is an integer with $q(x)$ and $p(x)$, hence witnesses (ii). Conversely, a witness of $q(x)\land p(x)$ is even by $q(x)$, so belongs to $E$ and witnesses (i).

### 中文解答

**推导。** 若(i)有见证u，则u偶且p(u)真；作为整数u又满足q(u)，所以 $q(u)\land p(u)$ 真，可直接用u作(ii)见证。反之若(ii)有见证v，合取消去给q(v)与p(v)，q(v)说明v偶，即v∈E，因此v也作(i)见证。见证双向转用，故两式等价。

## Common Mistakes

- 用两个不同整数分别满足偶数与 $p$，违反同一见证要求。
- 把合取改成蕴含，重新引入奇数的空真见证。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
