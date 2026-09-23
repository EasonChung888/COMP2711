---
id: "Q-2020-MID-P03-f"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 2
question_number: "3(f)"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]","[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Negating an existential counterexample produces exactly the universal implication."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
---
# Q-2020-MID-P03-f

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=2]]

## Question

$\forall x((x>1)\to(x^2>x))\leftrightarrow\neg\exists x((x>1)\land(x^2\le x))$

Shared context: [[STEM-2020-MID-P03 - Shared Problem Prompt]].

## 中文解析

右边否认存在一个同时满足前提且违背结论的反例。把否定穿过存在量词并应用德摩根律，就得到每个 x 都满足“不是前提，或结论”，这恰好是左边的全称蕴含。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** True.

**Derivation/proof.** Negate the existential: $\neg\exists x((x>1)\land(x^2\le x))\equiv\forall x\neg((x>1)\land(x^2\le x))$. De Morgan gives $\forall x((x\le1)\lor(x^2>x))$, which is $\forall x((x>1)\to(x^2>x))$. Thus both sides are identical by logical laws, regardless of separately verifying the inequality.

### 中文解答

**推导。** 判为真。由量词否定及德摩根律，

$$\neg\exists x((x>1)\land(x^2\le x))\equiv\forall x\neg((x>1)\land(x^2\le x))$$
$$\equiv\forall x((x\le1)\lor(x^2>x))\equiv\forall x((x>1)\to(x^2>x)).$$

最后恰好为左侧，所以双条件连接的是两个逻辑等价句，恒为真。这里合取才正确表达“前件满足、后件失败”的反例，和(e)内层的箭头不同。

## Common Mistakes

- 把非存在误换成存在非。
- 否定 ≤ 时写成 ≥ 而不是 >。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
