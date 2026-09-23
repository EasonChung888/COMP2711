---
id: "Q-2017-MID-P01-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 3
solution_page: [3]
question_number: "1(a)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification","proof"]
difficulty: 2
difficulty_basis: "Factoring the two q terms exposes q or not q and removes every remaining variable."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P01-a

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=3]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=3]]

## Question

(a) $(p\land q)\lor(q\land\neg p)\lor\neg q\lor(p\land T)$

Shared context: [[STEM-2017-MID-P01 - Shared Problem Prompt]].

## 中文解析

两个含有 q 的合取项可以先提取 q，括号里是 p 与非 p 的析取，恒为真。剩下 q 或非 q 已覆盖全部情况，最后的 p 无论真假都不影响结果。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 3. The Chinese derivation expands the reasoning.

**Answer.** It is a tautology.

**Derivation/proof.** By distributivity, $(p\land q)\lor(q\land\neg p)=q\land(p\lor\neg p)=q$. Also $p\land T=p$. Hence the whole expression is $q\lor\neg q\lor p=T\lor p=T$, independently of the values of $p,q$.

### 中文解答

**推导。** 先对前两项使用分配律，得 $(p\land q)\lor(q\land\neg p)=q\land(p\lor\neg p)=q\land T=q$；另有 $p\land T=p$。因此原式 $=q\lor\neg q\lor p=T\lor p=T$。化简不依赖 $p,q$ 的取值，所以是恒真式。

## Common Mistakes

- 只凭出现否定符号就声称恒真。
- 把分配律错误地用成合取两个余项。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
