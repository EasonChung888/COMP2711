---
id: "Q-2022-FINAL2-P02-a-23"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2022-final-part-2.pdf"
source_page: 2
question_number: "2(a)"
year: 2022
term: "spring"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Conditional Probability - 条件概率]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Conditional Probability - 条件概率]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Conditional-Probability Method - 条件概率方法]]","[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "When the original choice contains the car all six goat-door pairs are available."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
---
# Q-2022-FINAL2-P02-a-23

## Source

![[knowledge_base/past_paper/2022-final-part-2.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2022-final-part-2.pdf#page=2]]

## Question

What is $P(M=\{2,3\}\mid W=1)$?

Shared context: [[STEM-2022-FINAL2-P02 - Shared Problem Prompt]].

## 中文解析

汽车在首选门一时，其余四扇全是羊，主持人从中等概率选两扇，有六个无序对子。指定二和三只是其中一对，概率六分之一；不要把打开先后顺序算成不同事件。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $1/6$.

**Derivation/proof.** Given W=1, all four other doors 2,3,4,5 contain goats and remain eligible for Monty's opening. He selects an unordered two-door subset uniformly; there are C(4,2)=6 such pairs. {2,3} is one pair, so its conditional probability is 1/6. The two openings are not ordered outcomes.

### 中文解答

**推导。** 条件 $W=1$ 已把车固定在初选门一，因此其余 $2,3,4,5$ 四门全是羊。无论对初选门能否打开采用哪一种解释，车门都不能开，可选羊门集合在这里相同。主持人等概率选无序两门，共 $\binom42=6$ 对，事件 $\{2,3\}$ 正好是一对，所以 $P(M=\{2,3\}\mid W=1)=1/6$。两扇门的打开先后不是随机变量 $M$ 的一部分，不能重复计算顺序。

## Common Mistakes

- 把无序门对数写成十二。
- 额外乘汽车在门一的先验，混成联合概率。

## Connections

- [[Subtopic - Conditional Probability - 条件概率]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Conditional Probability - 条件概率]]
- [[Combinatorial Selection - 组合选择]]
- [[Conditional-Probability Method - 条件概率方法]]
- [[Combinatorial Case Analysis - 组合分类法]]
