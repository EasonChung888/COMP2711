---
id: "Q-2019-FINAL-P11-d-probability"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 13
solution_page: [14]
question_number: "11(d)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Introduction to Probability - 概率基础]]","[[Subtopic - Conditional Probability - 条件概率]]"]
concepts: ["[[Probability Events - 概率事件]]","[[Conditional Probability - 条件概率]]"]
methods: ["[[Probability Calculation Method - 概率计算方法]]","[[Conditional-Probability Method - 条件概率方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "The new strategy wins on prize doors one and two, whose prior probabilities sum to four fifths."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2019-FINAL-P11-d-probability

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=13]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=14]]

## Question

What’s its winning probability?

Shared context: [[STEM-2019-FINAL-P11 - Shared Problem Prompt]].

## 中文解析

直接按奖品位置三种情况核对策略：在一号或二号时，主持人只能打开另一扇空门，换门必胜；在三号时换门必败。用先验概率加权得到零点八，不需要再对随机开门重复乘二分之一。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 14. The Chinese derivation expands the reasoning.

**Answer.** $0.8=4/5$ for initially choosing door 3 and always switching.

**Derivation/proof.** Under the proposed strategy, if $W=1$, Monty opens door 2 and switching reaches door 1. If $W=2$, he opens door 1 and switching reaches door 2. If $W=3$, switching leaves the prize and loses regardless of his random choice. The three prize-location cases partition the experiment, so the win probability is $0.5\cdot1+0.3\cdot1+0.2\cdot0=0.8$.

### 中文解答

**推导。** 对“先选三、总是换”的策略按奖门分三类：$W=1$ 时主持人开二，换到一获胜；$W=2$ 时主持人开一，换到二获胜；$W=3$ 时换离奖门，主持人开哪扇都失败。三类先验概率依次为 $0.5,0.3,0.2$，所以总胜率 $0.5\cdot1+0.3\cdot1+0.2\cdot0=0.8=4/5$。这里不需要知道最初选三且奖在三时主持人的具体随机分配，因为两种选择都输。

## Common Mistakes

- 给前两种被迫开门的情况再乘二分之一。
- 用初选第三门后仍套初选第一门的后验表。

## Connections

- [[Subtopic - Introduction to Probability - 概率基础]]
- [[Subtopic - Conditional Probability - 条件概率]]
- [[Probability Events - 概率事件]]
- [[Conditional Probability - 条件概率]]
- [[Probability Calculation Method - 概率计算方法]]
- [[Conditional-Probability Method - 条件概率方法]]
