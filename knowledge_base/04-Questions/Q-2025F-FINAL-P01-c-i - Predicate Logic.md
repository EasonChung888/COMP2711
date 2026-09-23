---
id: "Q-2025F-FINAL-P01-c-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 3
question_number: "1(c)(i)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "Translate a restriction on seniors as a universally quantified inclusive disjunction."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 2
---
# Q-2025F-FINAL-P01-c-i

## Source

[[2025 Fall Final]]; printed item 1(c)(i); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=3]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=4]]

## Question

![[STEM-2025F-FINAL-P01-c - Shared Problem Prompt#Shared printed wording]]

(i) Every senior in the class is majoring either in comp or mathematics.

## 中文解析

只对 senior 提出专业要求；原答案的 either-or 使用逻辑中的包容或。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\forall x(s(x)\to(c(x)\lor m(x)))$。

**推导。** 任取域内学生 $x$。若他是 senior，即 $s(x)$ 成立，则需满足 comp 或 mathematics 至少一个专业条件 $c(x)\lor m(x)$。因此用蕴含 $s(x)\to(c(x)\lor m(x))$ 表达，再加全称量词覆盖所有学生。题目未说不能双专业，原答案也用包容析取，所以同时满足 $c(x),m(x)$ 的 senior 仍符合此句。非 senior 学生不受这一命题限制。

## Common Mistakes

- 把整个式子写成合取会错误要求每个学生都是 senior。
- 没有“但不能同时”条件时，不应擅自加互斥或以排除双专业。

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Translate a restriction on seniors as a universally quantified inclusive disjunction.
