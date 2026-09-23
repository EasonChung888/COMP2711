---
id: "Q-2023S-MID-P01-a-2"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 3
question_number: "1(a)(2)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Propositional Translation Method - 命题翻译方法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "The race is the sufficient condition and the trophy award is its consequent; no converse is asserted."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
related_questions: ["[[Q-2023S-MID-P01-a-proof - Proof Strategy]]"]
---
# Q-2023S-MID-P01-a-2

## Source

[[2023 Spring Midterm]]; printed item 1(a)(2). No separate atomic mark allocation is printed.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=3]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=4]]

## Question

First translate the following hypotheses into propositional logic statements:

2. If the sailing race is held, then the trophy will be awarded.

Shared printed context: ![[STEM-2023S-MID-P01-a - Shared Problem Prompt#Shared printed wording]]

## 中文解析

题目只说举行比赛足以保证颁奖，因此方向从 s 指向 t。它并没有说明颁奖一定来自比赛，也没有说明比赛实际举行；翻译时要保留这个单向条件。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $s\to t$。

**推导。**

1. 根据共享符号定义，sailing race 举行为 $s$，trophy 被颁发为 $t$。句型“If A, then B”把 A 放在前件、B 放在后件，故从比赛指向颁奖，得到 $s\to t$。
2. 用唯一的否定情形核对方向：只有 $s$ 真且 $t$ 假，也就是比赛举行但没有颁奖，才违反本句。颁奖而没有比赛并不被原句禁止，因此不能倒写为 $t\to s$，也不能强化为 $s\leftrightarrow t$；本次翻译没有断言比赛必定举行。

### English solution

**Answer.** $s\to t$.

**Derivation/proof.** By the definitions in the shared context, “the sailing race is held” is $s$ and “the trophy will be awarded” is $t$. The English construction “If A, then B” translates to $A\to B$, so the formula is $s\to t$. Its only falsifying case is a held race together with no trophy award. A trophy without the race is not prohibited by this hypothesis.

## Common Mistakes

- 把方向写成 $t\to s$ 是逆命题而非原句。 / Reversing the arrow changes the sufficient condition.
- 写成 $s\land t$ 会把条件句变成两件事均发生。 / A conditional does not assert either event.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]

- [[Logical Equivalence - 逻辑等价]]
- [[Propositional Translation Method - 命题翻译方法]]

The race is the sufficient condition and the trophy award is its consequent; no converse is asserted.

- Used by: [[Q-2023S-MID-P01-a-proof - Proof Strategy]]: The premise that a race implies prize-giving, combined with no prize-giving, rules out the race. 比赛必有颁奖与没有颁奖合用，先推出没有比赛。
