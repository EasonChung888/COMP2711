---
id: "Q-2020-MID-P03-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 2
question_number: "3(a)"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 1
difficulty_basis: "A negative test value makes absolute value times x more negative than x."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
---
# Q-2020-MID-P03-a

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=2]]

## Question

$\forall x(|x|\cdot x\ge x)$

Shared context: [[STEM-2020-MID-P03 - Shared Problem Prompt]].

## 中文解析

绝对值只作用在第一个因子上，第二个 x 仍可为负。取负二时乘积为负四，比负二更小；一个合法的实数反例就足以否定全称命题，不需要对所有负数分类。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** False.

**Derivation/proof.** Take the real value $x=-2$. Then $|x|x=2(-2)=-4$, which is less than $-2$. Hence this one member of the quantified domain violates the inequality and refutes the universal statement. Absolute value does not make the product nonnegative because the second factor remains negative.

### 中文解答

**推导。** 判为假。取实数 $x=-2$，则 $|x|\cdot x=2\cdot(-2)=-4<-2=x$，违反要求的 $\ge$。一个反例足够否定全称量词。绝对值只把第一个因子变正，并没有把另一个负因子也变正，故不能把整个乘积误认作 $x^2$。

## Common Mistakes

- 把绝对值误作用到整个乘积。
- 只检查正整数而忽略负实数。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]
