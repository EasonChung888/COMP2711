---
id: "Q-2023S-MID-P02-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 5
question_number: "2(c)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]","[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["proof","classification"]
difficulty: 2
difficulty_basis: "Negating the existential changes it to a universal and De Morgan converts the strict positive condition into a nonpositive alternative."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 3
---
# Q-2023S-MID-P02-c

## Source

[[2023 Spring Midterm]]; printed item 2(c); 3 marks.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=5]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=5]]

## Question

(c) $\neg(\exists x(x>0\land P(x)))$ and $\forall x(x\le0\lor\neg P(x))$

Shared printed context: ![[STEM-2023S-MID-P02 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

先把否定推过存在量词，再对 conjunction 使用 De Morgan。实数条件 x>0 的否定是 x≤0，必须保留边界零；P 的否定则仍是一个独立谓词条件。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 两式 equivalent。

**推导。**

1. 先使用 quantifier negation，把“不存在”变为“每个都不满足”：
   $$\neg\exists x(x>0\land P(x))\equiv\forall x\neg(x>0\land P(x)).$$
   这一步只移动最外层否定，并未改变 $x$ 的实数定义域。
2. 对括号用 De Morgan，得到 $\forall x(\neg(x>0)\lor\neg P(x))$。实数中 $\neg(x>0)$ 恰是 $x\le0$，包含零点，故结果为 $\forall x(x\le0\lor\neg P(x))$，正是第二式。每一步都是双向等价，对任意谓词 $P$ 都有效；未出现的 $Q$ 不影响结论。

### English solution

**Answer.** Equivalent.

**Derivation/proof.** Apply quantifier negation and De Morgan in order:
$$\neg\exists x(x>0\land P(x))\equiv\forall x\neg(x>0\land P(x))\equiv\forall x(\neg(x>0)\lor\neg P(x))\equiv\forall x(x\le0\lor\neg P(x)).$$
These are equivalences for every real $x$ and every interpretation of $P$. The predicate $Q$ mentioned in the general instructions is not used by either formula, so its interpretation is immaterial.

## Common Mistakes

- 否定存在量词后仍保留存在会错误改变含义。 / Negating ∃ produces ∀.
- 将 x>0 的否定写为 x<0 漏掉零。 / The correct complement is x≤0.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Propositional Logic - 命题逻辑]]

- [[Logical Equivalence - 逻辑等价]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]

Negating the existential changes it to a universal and De Morgan converts the strict positive condition into a nonpositive alternative.
