---
id: "Q-2019-FINAL-P11-a-W3"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 13
solution_page: [13,14]
question_number: "11(a)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Conditional Probability - 条件概率]]"]
concepts: ["[[Conditional Probability - 条件概率]]"]
methods: ["[[Conditional-Probability Method - 条件概率方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Prize door three forces Monty to open door two, contributing full prior mass 0.2 to the posterior numerator."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2019-FINAL-P11-a-W3

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=13]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=13]] ![[knowledge_base/past_paper/2019-final.pdf#page=14]]

## Question

and $p(W=3\mid M=2)$?

Shared context: [[STEM-2019-FINAL-P11 - Shared Problem Prompt]].

## 中文解析

奖品在三号门时，初选一号不能开，三号有奖不能开，所以二号是唯一可开门，条件开门概率为一。把三号先验零点二除以开二号门总概率零点四五，就得到九分之四。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 13, 14. The Chinese derivation expands the reasoning.

**Answer.** $4/9$.

**Derivation/proof.** If the prize is at door 3, Monty must open door 2, so $P(W=3,M=2)=0.2$. Total probability gives $P(M=2)=0.5(1/2)+0.3(0)+0.2(1)=0.45$. Thus $P(W=3\mid M=2)=0.2/0.45=4/9$. The other closed-door posterior is $5/9$, and they sum to one.

### 中文解答

**推导。** 奖在门三的先验概率为 $0.2$，此时主持人必开门二，所以联合概率 $P(W=3,M=2)=0.2$。开门二总概率还包括奖在门一而以一半概率开二的分支，故 $P(M=2)=0.2+0.5/2=0.45$。条件概率为 $0.2/0.45=4/9$。与门一后验 $5/9$ 相加为一，开着的门二后验为零。

## Common Mistakes

- 把主持人在此情况的开门概率也设成二分之一。
- 对剩下两门简单平均。

## Connections

- [[Subtopic - Conditional Probability - 条件概率]]
- [[Conditional Probability - 条件概率]]
- [[Conditional-Probability Method - 条件概率方法]]
