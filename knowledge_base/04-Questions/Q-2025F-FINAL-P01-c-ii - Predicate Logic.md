---
id: "Q-2025F-FINAL-P01-c-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Final.pdf"
source_page: 3
question_number: "1(c)(ii)"
year: 2025
term: "fall"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 3
difficulty_basis: "Express existence of a comp-major maximum without imposing uniqueness or disallowing tied grades."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 2
---
# Q-2025F-FINAL-P01-c-ii

## Source

[[2025 Fall Final]]; printed item 1(c)(ii); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=3]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Final.pdf#page=4]]

## Question

![[STEM-2025F-FINAL-P01-c - Shared Problem Prompt#Shared printed wording]]

(ii) The highest grade belongs to a comp major student.

## 中文解析

选出一位 comp 学生，使所有其他学生都没有比他更高的成绩；允许并列最高。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\exists y(c(y)\land\forall x(x\ne y\to\neg Compare(x,y)))$。

**推导。** 先用 $\exists y$ 指定一位拥有最高成绩的学生，并以 $c(y)$ 要求其专业为 comp。对任意其他学生 $x$，不能有比 $y$ 更高的成绩，所以写 $x\ne y\to\neg Compare(x,y)$ 并用 $\forall x$ 量化。两项合取后置于 $\exists y$ 范围内，即答案。若某人比 $y$ 更高，公式在那个人处为假；若只有同分者而无人更高，公式仍真。这正表达至少一位最高分持有者为 comp，而未额外要求唯一最高分。

## Common Mistakes

- 把条件写成 Compare(y,x) 会要求严格胜过所有人，错误排除并列最高。
- Compare(x,y) 的方向是 x 比 y 高，不能把变量次序交换。

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Express existence of a comp-major maximum without imposing uniqueness or disallowing tied grades.
