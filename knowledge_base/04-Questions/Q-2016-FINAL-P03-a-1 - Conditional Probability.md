---
id: "Q-2016-FINAL-P03-a-1"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Final]]"
source_pdf: "knowledge_base/past_paper/2016-final.pdf"
source_page: 7
solution_page: [7]
question_number: "3(a)"
year: 2016
term: "fall"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Introduction to Probability - 概率基础]]","[[Subtopic - Conditional Probability - 条件概率]]"]
concepts: ["[[Probability Events - 概率事件]]","[[Conditional Probability - 条件概率]]"]
methods: ["[[Probability Calculation Method - 概率计算方法]]","[[Conditional-Probability Method - 条件概率方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Conditioning on the equally likely selected die combines success probabilities one third and one."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-FINAL-P03-a-1

## Source

![[knowledge_base/past_paper/2016-final.pdf#page=7]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-final.pdf#page=7]]

## Question

(a) What is $P(A_1)$ and $P(A_2)$?

Atomic focus [editorial]: $P(A_1)$; the second requested marginal is a separate atom.

Shared context: [[STEM-2016-FINAL-P03 - Shared Problem Prompt]].

## 中文解析

先按选中的骰子分类。普通骰有两个合格面，概率三分之一；特殊骰六个面都不超过二，概率一。两类骰子各以一半概率被选，按权重相加即可。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 7. The Chinese derivation expands the reasoning.

**Answer.** $P(A_1)=2/3$.

**Derivation/proof.** Let $F$ and $S$ denote selecting the fair and special dice. They partition the experiment and each has probability $1/2$. Total probability gives $P(A_1)=P(A_1\mid F)P(F)+P(A_1\mid S)P(S)=\frac13\frac12+1\frac12=\frac23$.

### 中文解答

**推导。** 以F、S分别表示抽到普通或特殊骰，两事件互斥穷尽，各概率1/2。普通骰有两个≤2的面，故 $P(A_1\mid F)=1/3$；特殊骰六面都≤2，故条件概率一。全概率公式给 $P(A_1)=(1/2)(1/3)+(1/2)(1)=2/3$。权重来自抽骰的公平选择，不是六个数值的混合均匀假设。

## Common Mistakes

- 只按普通骰子的两个面计算。
- 把两个骰子的点数种类看成等概率结果。

## Connections

- [[Subtopic - Introduction to Probability - 概率基础]]
- [[Subtopic - Conditional Probability - 条件概率]]
- [[Probability Events - 概率事件]]
- [[Conditional Probability - 条件概率]]
- [[Probability Calculation Method - 概率计算方法]]
- [[Conditional-Probability Method - 条件概率方法]]
