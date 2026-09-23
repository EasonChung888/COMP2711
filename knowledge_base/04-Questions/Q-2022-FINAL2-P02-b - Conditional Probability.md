---
id: "Q-2022-FINAL2-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2022-final-part-2.pdf"
source_page: 2
question_number: "2(b)"
year: 2022
term: "spring"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Conditional Probability - 条件概率]]"]
concepts: ["[[Conditional Probability - 条件概率]]"]
methods: ["[[Conditional-Probability Method - 条件概率方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "The proposed opening includes the car door and is forbidden."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
marks: 2
---
# Q-2022-FINAL2-P02-b

## Source

![[knowledge_base/past_paper/2022-final-part-2.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2022-final-part-2.pdf#page=2]]

## Question

What is $P(M=\{2,3\}\mid W=2)$?

Shared context: [[STEM-2022-FINAL2-P02 - Shared Problem Prompt]].

## 中文解析

条件已经说明门二后面是车，而事件要求主持人打开门二。主持人只会开羊门，因此这个事件不在合法样本空间内，概率为零，不需要再计算其他对子数量。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $0$.

**Derivation/proof.** The condition W=2 places the car behind door 2. The event M={2,3} requires Monty to open that car door, contrary to the stated rule that he opens goat doors. Hence no permitted choice realizes this event and its conditional probability is zero, regardless of the number of other eligible pairs.

### 中文解答

**推导。** 条件 $W=2$ 表示门二后面是车，而事件 $M=\{2,3\}$ 要求主持人打开门二。源规则明确只开羊门，所以这件事不可能发生，$P(M=\{2,3\}\mid W=2)=0$。这个零值不依赖初选羊门一是否可开，也不需要先计算其余合法对子有几种；包含车门已经排除了整个事件。

## Common Mistakes

- 忽略条件 W=2。
- 把主持人当成不知道汽车位置的随机开门者。

## Connections

- [[Subtopic - Conditional Probability - 条件概率]]
- [[Conditional Probability - 条件概率]]
- [[Conditional-Probability Method - 条件概率方法]]
