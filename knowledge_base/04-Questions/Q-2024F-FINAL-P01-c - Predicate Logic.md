---
id: "Q-2024F-FINAL-P01-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 4
question_number: "1(c)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "Negate the exact prime-in-open-interval statement and convert negated strict inequalities into closed complements."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 2
related_questions: ["[[Q-2024F-FINAL-P01-b - Predicate Logic]]"]
---
# Q-2024F-FINAL-P01-c

## Source

[[2024 Fall Final]]; printed item 1(c); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=4]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=4]]

Prerequisite context (editorial): [[Q-2024F-FINAL-P01-b - Predicate Logic]]. Negate $\forall n((n>1)\to\exists p(Prime(p)\land n<p\land p<2n))$ over all integers.

## Question

(c) Negate the statement in (b) so that all negation symbols immediately precede predicates.

Shared printed context: ![[STEM-2024F-FINAL-P01-bc - Shared Problem Prompt#Shared printed wording]]

## 中文解析

否定后要找到一个大于一的整数，使任何候选数都不是素数或不在所需开区间。开区间外包括两个端点，因此边界变为小于等于或大于等于。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\exists n((n>1)\land\forall p(\neg Prime(p)\lor p\le n\lor p\ge2n))$。

**推导。** 否定 $\forall n((n>1)\to\exists p(Prime(p)\land n<p\land p<2n))$，先变成 $\exists n((n>1)\land\neg\exists p(Prime(p)\land n<p\land p<2n))$。将存在取反为全称，再对内部合取使用 De Morgan，得到 $\neg Prime(p)\lor\neg(n<p)\lor\neg(p<2n)$。整数的线性序使后两项等价于 $p\le n$ 与 $p\ge2n$，故得到答案。唯一 $\neg$ 紧邻素数谓词，符合格式要求。

## Common Mistakes

- 不能否定成所有大于一整数都没有区间素数，一个反例 n 已足够。
- 不在严格区间包含等于端点，两处补条件必须包含等号。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]

- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Negate the exact prime-in-open-interval statement and convert negated strict inequalities into closed complements.

- Prerequisite: [[Q-2024F-FINAL-P01-b - Predicate Logic]]: 本题导入此前提/结果以完成当前计算或证明：Negate $\forall n((n>1)\to\exists p(Prime(p)\land n<p\land p<2n))$ over all integers.
