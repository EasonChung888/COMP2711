---
id: "Q-2021-MID-P02-translation-gcd"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 1
question_number: "2"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "The gcd-skill clause asserts g of Sarah without quantifying the integers embedded in its meaning."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [1]
related_questions: ["[[Q-2021-MID-P02-proof - Predicate Logic]]"]
---
# Q-2021-MID-P02-translation-gcd

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=1]]

## Question

knows how to compute the gcd of two integers.

Shared context: [[STEM-2021-MID-P02 - Shared Problem Prompt]].

## 中文解析

这句的主语仍是 Sarah，g 的定义已经包含会算两个整数最大公因数的意思，因此直接写 g(Sarah)。不用把“两个整数”重新展开成额外量词，也不能推广成所有学生都有这个能力。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $g(\mathrm{Sarah})$.

**Derivation/proof.** The grammatical subject remains Sarah. Predicate g already means knowing how to compute the gcd of two integers, so apply g to that named person. The integers mentioned are internal to the given predicate meaning; the translation does not need new number quantifiers or assert that every student has the skill.

### 中文解答

**推导。** 本句的主语承接 Sarah，而谓词 $g(x)$ 已完整表示“知道如何计算两个整数的 gcd”。把 Sarah 代入便得到 $g(\mathrm{Sarah})$。两个整数属于给定谓词的意义，不是本题人物论域里要额外量化的对象；答案也没有声称所有学生都有这种能力。

## Common Mistakes

- 把命名事实擅自全称推广。
- 混淆课程谓词 c 与能力谓词 g。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

- Used by: [[Q-2021-MID-P02-proof - Predicate Logic]]
