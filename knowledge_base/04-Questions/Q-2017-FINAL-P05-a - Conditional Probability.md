---
id: "Q-2017-FINAL-P05-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 8
solution_page: [8,9]
question_number: "5(a)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Conditional Probability - 条件概率]]","[[Subtopic - Introduction to Probability - 概率基础]]"]
concepts: ["[[Conditional Probability - 条件概率]]","[[Probability Events - 概率事件]]"]
methods: ["[[Conditional-Probability Method - 条件概率方法]]","[[Probability Calculation Method - 概率计算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Bayes weighting compares heads likelihood 0.8 against 0.5 under equal prior coin selection."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 4
---
# Q-2017-FINAL-P05-a

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=8]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=8]] ![[knowledge_base/past_paper/2017-final.pdf#page=9]]

## Question

(a) Given that your friend’s first coin flip returns heads, what is the probability that your friend got the fake coin, to your disadvantage?

Shared context: [[STEM-2017-FINAL-P05 - Shared Problem Prompt]].

## 中文解析

先验两枚币各占一半，但观察到正面后，偏向正面的假币更有可能被朋友拿到。把“拿到假币且出现正面”的联合概率除以出现正面的总概率，得到十三分之八。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 8, 9. The Chinese derivation expands the reasoning.

**Answer.** $8/13$.

**Derivation/proof.** Let $F$ mean the friend holds the fake coin and $H$ mean the observed head. Then $P(F)=1/2$, $P(H\mid F)=4/5$, and $P(H\mid F^c)=1/2$. Total probability gives $P(H)=(1/2)(4/5)+(1/2)(1/2)=13/20$. Bayes gives $P(F\mid H)=(2/5)/(13/20)=8/13$.

### 中文解答

**推导。** 令 $F$ 为朋友拿到假币、$H$ 为朋友首掷正面。等概率取币给 $P(F)=P(F^c)=1/2$，且 $P(H\mid F)=4/5$、$P(H\mid F^c)=1/2$。全概率得 $P(H)=(1/2)(4/5)+(1/2)(1/2)=13/20$，而 $P(F\cap H)=2/5$。由贝叶斯公式 $P(F\mid H)=(2/5)/(13/20)=8/13$，即十三分之八。这里只观察一次，不需要给后续掷币添加独立性。

## Common Mistakes

- 观察正面后仍用一半作为后验。
- 把 P(H|F) 直接当 P(F|H)。

## Connections

- [[Subtopic - Conditional Probability - 条件概率]]
- [[Subtopic - Introduction to Probability - 概率基础]]
- [[Conditional Probability - 条件概率]]
- [[Probability Events - 概率事件]]
- [[Conditional-Probability Method - 条件概率方法]]
- [[Probability Calculation Method - 概率计算方法]]
