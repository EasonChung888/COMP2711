---
id: "Q-2019-FINAL-P11-b-W2"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 13
solution_page: [13,14]
question_number: "11(b)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Conditional Probability - 条件概率]]"]
concepts: ["[[Conditional Probability - 条件概率]]"]
methods: ["[[Conditional-Probability Method - 条件概率方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Prize door two forces opening door three, so its prior mass 0.3 is normalized by 0.55."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2019-FINAL-P11-b-W2

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=13]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=13]] ![[knowledge_base/past_paper/2019-final.pdf#page=14]]

## Question

and $p(W=2\mid M=3)$?

Shared context: [[STEM-2019-FINAL-P11 - Shared Problem Prompt]].

## 中文解析

二号门有奖时，三号是唯一可开门，因而联合概率就是二号门的先验零点三。用开三号门的总概率零点五五归一化，得到十一分之六，比一号门的十一分之五略大。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 13, 14. The Chinese derivation expands the reasoning.

**Answer.** $6/11$.

**Derivation/proof.** When the prize is behind door 2 and you chose door 1, Monty must open door 3, giving joint probability 0.3. The total opening probability is $0.5(1/2)+0.3(1)+0.2(0)=0.55$. Therefore the posterior is $0.3/0.55=6/11$, complementary to the $5/11$ for door 1.

### 中文解答

**推导。** 若 $W=2$，因为玩家已选一，主持人只可开三，故 $P(W=2,M=3)=0.3$。$M=3$ 的其他可能分支是 $W=1$ 后主持人随机开三，质量 $0.25$，所以归一化分母为 $0.3+0.25=0.55$。答案 $P(W=2\mid M=3)=0.3/0.55=6/11$；它与门一后验 $5/11$ 互补。

## Common Mistakes

- 把先验零点三直接当条件概率。
- 把二号与三号的先验概率互换。

## Connections

- [[Subtopic - Conditional Probability - 条件概率]]
- [[Conditional Probability - 条件概率]]
- [[Conditional-Probability Method - 条件概率方法]]
