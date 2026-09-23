---
id: "Q-2019-FINAL-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 3
solution_page: [3]
question_number: "1(b)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["counterexample"]
difficulty: 1
difficulty_basis: "Equality of the two universally quantified integers makes the square zero."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-FINAL-P01-b

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=3]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=3]]

## Question

(b) $\forall x\forall y((x-y)^2>0)$

Shared context: [[STEM-2019-FINAL-P01 - Shared Problem Prompt]].

## 中文解析

平方确实总是不负，但不一定严格为正。两个变量没有要求不同，因此让它们相等就使差为零，平方也为零。一个这样的整数对已经足以推翻全称断言。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 3. The Chinese derivation expands the reasoning.

**Answer.** False; $x=y=0$ is a counterexample.

**Derivation/proof.** The two universal quantifiers allow equal inputs. At $x=y=0$, $(x-y)^2=0^2=0$, and $0>0$ is false. Although every real square is nonnegative, strict positivity fails whenever its base is zero, so the universally strict claim is false.

### 中文解答

**推导。** 断言为假。全称量词允许两个整数相等，取 $x=y=0$，便有 $(x-y)^2=0$，而 $0>0$ 为假。平方总非负不等于平方总严格正；只需这一组合法输入就足以否定两个全称量词。

## Common Mistakes

- 把大于等于零当作大于零。
- 擅自假设 x 与 y 必须不同。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]
