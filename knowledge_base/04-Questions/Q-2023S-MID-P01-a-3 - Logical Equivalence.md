---
id: "Q-2023S-MID-P01-a-3"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 3
question_number: "1(a)(3)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Propositional Translation Method - 命题翻译方法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "This hypothesis denies the trophy proposition outright rather than linking it conditionally to weather or the race."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
related_questions: ["[[Q-2023S-MID-P01-a-proof - Proof Strategy]]"]
---
# Q-2023S-MID-P01-a-3

## Source

[[2023 Spring Midterm]]; printed item 1(a)(3). No separate atomic mark allocation is printed.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=3]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=4]]

## Question

First translate the following hypotheses into propositional logic statements:

3. The trophy was not awarded.

Shared printed context: ![[STEM-2023S-MID-P01-a - Shared Problem Prompt#Shared printed wording]]

## 中文解析

t 的定义就是奖杯被颁发，句子中的 not 直接否定这个命题。这里只需要一个否定符号，不应因为其他前提出现比赛和天气，就把这些额外条件加入本句。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\neg t$。

**推导。**

1. Stem 已把命题 $t$ 定义为“trophy 被颁发”。当前句子与这个命题相比，只增加了“not”，所以对整个命题取一次 negation，得到 $\neg t$，即 $t$ 的真值为假。
2. 本句没有出现比赛、下雨、起雾或救生示范，因此翻译中不应加入 $s,r,f,l$。在后续证明中可以把 $\neg t$ 与 $s\to t$ 合用得到 $\neg s$，但那是额外的推理步骤，不是这条事实本身的逻辑表达式。

### English solution

**Answer.** $\neg t$.

**Derivation/proof.** The shared definition assigns $t$ to the trophy being awarded. The third hypothesis explicitly says this event did not occur, so its translation is $\neg t$. This premise fixes the value of $t$ to false and does not itself fix $r$, $f$, $s$, or $l$. Combined with $s\to t$ it can later support modus tollens, but that later inference is not part of this translation.

## Common Mistakes

- 加入 $s\to\neg t$ 会把无条件事实改成条件句。 / The denial is unconditional.
- 把 not awarded 当成新的未定义字母，会丢失与 t 的逻辑关系。 / Use the negation of the defined proposition.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]

- [[Logical Equivalence - 逻辑等价]]
- [[Propositional Translation Method - 命题翻译方法]]

This hypothesis denies the trophy proposition outright rather than linking it conditionally to weather or the race.

- Used by: [[Q-2023S-MID-P01-a-proof - Proof Strategy]]: The no-prize-giving premise starts the inference chain and rules out the race by modus tollens. 没有颁奖是证明的事实起点，不能换成所求的下雨结论。
