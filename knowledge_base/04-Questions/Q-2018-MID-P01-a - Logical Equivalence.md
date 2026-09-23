---
id: "Q-2018-MID-P01-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 3
solution_page: [3]
question_number: "1(a)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["modeling"]
difficulty: 3
difficulty_basis: "Each speaker type must be equivalent to the truth value of that speakers full statement."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P01-a

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=3]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=3]]

## Question

(a) Let $p$ be the proposition “Alice is a knight”, and $q$ be the proposition “Bob is a knight”. Write a single compound proposition constructed from $p$ and $q$ which contains all the information given or implied in the question. (Hint: Consider that Alice could be a knight or a knave, and Bob could be a knight or a knave.)

Shared context: [[STEM-2018-MID-P01 - Shared Problem Prompt]].

## 中文解析

要同时表达骑士说真话和骗子说假话，身份必须与所说整句话的真假等价。爱丽丝的话是非 q，鲍勃的话是两人都为骗子；把两人的双条件合取，才包含所有信息。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 3. The Chinese derivation expands the reasoning.

**Answer.** $(p\leftrightarrow\neg q)\land(q\leftrightarrow(\neg p\land\neg q))$.

**Derivation/proof.** Alice's statement has truth value $\neg q$. Being a knight means that statement is true, and being a knave means it is false, giving $p\leftrightarrow\neg q$. Bob's whole statement is $\neg p\land\neg q$, giving $q\leftrightarrow(\neg p\land\neg q)$. Both conversations occurred, so conjoin the constraints. Expanding each biconditional produces the source's two-case expression.

### 中文解答

**推导。** Alice 的陈述“Bob 是骗子”为 $\neg q$。骑士陈述真、骗子陈述假，故她的身份真值恰等于陈述真值，即 $p\leftrightarrow\neg q$。Bob 的整句“我和 Alice 都是骗子”为 $\neg p\land\neg q$，同理有 $q\leftrightarrow(\neg p\land\neg q)$。两人话语同时成立，答案为 $(p\leftrightarrow\neg q)\land(q\leftrightarrow(\neg p\land\neg q))$。把第一个双条件展开成 $(p\land\neg q)\lor(\neg p\land q)$，第二个展开成 $(q\land\neg p\land\neg q)\lor(\neg q\land(p\lor q))$，正是印本的两种身份分类。

## Common Mistakes

- 仅写骑士推出真话而漏掉骗子情况。
- 把鲍勃的两人都为骗子误写成析取。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
