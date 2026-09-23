---
id: "Q-2019-FINAL-P11-d-strategy"
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
subtopics: ["[[Subtopic - Conditional Probability - 条件概率]]","[[Subtopic - Introduction to Probability - 概率基础]]"]
concepts: ["[[Conditional Probability - 条件概率]]","[[Probability Events - 概率事件]]"]
methods: ["[[Conditional-Probability Method - 条件概率方法]]","[[Probability Calculation Method - 概率计算方法]]"]
question_types: ["construction"]
difficulty: 3
difficulty_basis: "Starting with the least likely prize door makes always switching succeed whenever the initial choice is wrong."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2019-FINAL-P11-d-strategy

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=13]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=14]]

## Question

(d) Can you design a better strategy?

[Hint: What is “obvious” is not obvious.]

Shared context: [[STEM-2019-FINAL-P11 - Shared Problem Prompt]].

## 中文解析

初选概率最低的门反而有利于随后总是换门。只要初选错了，主持人排除另一个错误门后，剩下的未开门就必有奖；因此让初选尽量容易错，便能提高固定换门策略的胜率。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 14. The Chinese derivation expands the reasoning.

**Answer.** Initially choose door 3 and always switch to the remaining unopened door.

**Derivation/proof.** Door 3 initially has the prize with probability 0.2. If that initial choice is wrong, Monty must reveal the other losing unchosen door, leaving the prize behind the remaining unopened door. Switching then wins. If the initial choice is right, switching loses. Thus this strategy wins exactly when $W\ne3$, an event of probability $0.5+0.3=0.8$, which exceeds the previous 0.55 and proves it is better.

### 中文解答

**推导。** 可先选先验概率最小的门三，然后无论主持人开哪扇门都换到另一扇未开门。若奖在门一或门二，最初选择错了，主持人必须排除另一空门，换门便必胜；若奖在三，换门必输。因此获胜事件恰为 $W\ne3$，概率 $0.5+0.3=0.8$。由于 $0.8>0.55$，这个策略严格优于(c)，足以回答“更好”，无需另外声称所有策略的最优性。

## Common Mistakes

- 坚持初选最高先验门而认为无法改进。
- 把“初选错误”当作策略已经失败。

## Connections

- [[Subtopic - Conditional Probability - 条件概率]]
- [[Subtopic - Introduction to Probability - 概率基础]]
- [[Conditional Probability - 条件概率]]
- [[Probability Events - 概率事件]]
- [[Conditional-Probability Method - 条件概率方法]]
- [[Probability Calculation Method - 概率计算方法]]
