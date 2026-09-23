---
id: "Q-2020-MID-P02"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Midterm]]"
source_pdf: "knowledge_base/past_paper/2020-midterm.pdf"
source_page: 1
question_number: "2"
year: 2020
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Absorption inside the second antecedent collapses the two implications to the same four-literal disjunction."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
marks: 10
---
# Q-2020-MID-P02

## Source

![[knowledge_base/past_paper/2020-midterm.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2020-midterm.pdf#page=2]]

## Question

Determine whether the following two propositions are logically equivalent.

(i) $((\neg p\land q)\to(p\lor s))\lor((\neg(\neg q\land p)\land q)\to(s\lor r))$,

(ii) $q\to(p\lor s\lor r)$.

If they are, prove it by a series of logical equivalences. If they are not, give a counterexample.

## 中文解析

第二个蕴含前件先用德摩根律，再由吸收律化成 q。两条蕴含分别消去箭头，合并重复的文字后只剩非 q、p、s、r 的析取，恰好就是第二式消去箭头的结果。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** They are logically equivalent.

**Derivation/proof.** By De Morgan, $\neg(\neg q\land p)\land q=(q\lor\neg p)\land q\equiv q$ by absorption. The first implication is $\neg(\neg p\land q)\lor p\lor s\equiv p\lor\neg q\lor s$. The second is $\neg q\lor s\lor r$. Their disjunction is $\neg q\lor p\lor s\lor r$ by associativity, commutativity and idempotence, which is exactly $q\to(p\lor s\lor r)$.

### 中文解答

**推导。** 两式等价。先化简第二个蕴含的前件：$\neg(\neg q\land p)\land q\equiv(q\lor\neg p)\land q\equiv q$，依次使用德摩根律与吸收律。再对两个蕴含分别去箭头：第一个为 $\neg(\neg p\land q)\lor(p\lor s)\equiv p\lor\neg q\lor s$，第二个为 $\neg q\lor s\lor r$。两者析取后由交换、结合及幂等律得 $\neg q\lor p\lor s\lor r$，最后恢复蕴含，正是 $q\to(p\lor s\lor r)$。全部步骤都是双向逻辑等价，因此对十六种赋值同真同假。

## Common Mistakes

- 把蕴含改成合取。
- 漏掉第二个前件中的 q，无法使用吸收律。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
