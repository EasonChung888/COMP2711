---
id: "Q-2016-FINAL-P03-e"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Final]]"
source_pdf: "knowledge_base/past_paper/2016-final.pdf"
source_page: 7
question_number: "3(e)"
year: 2016
term: "fall"
exam_type: "final"
marks: 3
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Conditional Probability - 条件概率]]"]
concepts: ["[[Conditional Probability - 条件概率]]"]
methods: ["[[Conditional-Probability Method - 条件概率方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "A coupling-independent lower bound on the intersection exceeds the product of the two fixed marginals."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
related_questions: []
---
# Q-2016-FINAL-P03-e

## Source

![[knowledge_base/past_paper/2016-final.pdf#page=7]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-final.pdf#page=7]]

Source correction (derived proof): PDF page 7 obtains 5/6 (and joint 5/9) by multiplying the two fair-die success probabilities. Conditional independence of the two rolls is not printed. The conclusion of dependence is nevertheless forced by the stated marginal laws; the following general-coupling proof is derived, not a verification of that intended iid calculation.

## Question

(e) Are $A_1$ and $A_2$ independent? Explain your answer.

Shared context: [[STEM-2016-FINAL-P03 - Shared Problem Prompt]].

## 中文解析

不能用未给出的两次掷骰独立性算出六分之五。把“选中公平骰且两次都小于等于二”的条件交集概率记成未知量 t，只用其非负性，就能证明总体交集至少为二分之一；它严格超过两边际概率的乘积四分之九，所以所有允许的耦合都不独立。

## Detailed Solution

Provenance: derived; a general-coupling proof corrects the source model gap on PDF page 7.

**Answer.** No; $A_1$ and $A_2$ are dependent for every joint law compatible with the printed conditions.

**Derivation/proof.** Let $F$ denote selection of the fair die and set $t=P(A_1\cap A_2\mid F)$. Each fair-die marginal is $1/3$, so $0\le t\le1/3$. On the special die both events always occur. With the given equal die priors, $P(A_i)=\tfrac12\cdot\tfrac13+\tfrac12=2/3$ for each $i$. But $P(A_1\cap A_2)=\tfrac12t+\tfrac12\ge1/2>4/9=P(A_1)P(A_2)$, which rules out independence. No exact conditional intersection value or independence of repeated rolls was assumed.

### 中文解答

**推导。** 令 $F$ 表示抽到公平骰，$t=P(A_1\cap A_2\mid F)$。公平骰每次落在一或二的边际概率均为 $1/3$；交集包含在单个事件内，所以 $0\le t\le1/3$，题目没有把 t 固定为 $1/9$。

特殊骰六个面都不超过二，因此给定特殊骰时，两事件的交集必然发生，概率为一。又两种骰子被选中的概率明确各为 $1/2$，全概率公式给每个边际 $P(A_i)=\frac12\frac13+\frac12\cdot1=2/3$。

对交集同样按骰子种类划分，得到 $P(A_1\cap A_2)=\frac12t+\frac12\ge\frac12$。若独立，交集必须等于边际乘积 $(2/3)^2=4/9$；但 $1/2>4/9$，矛盾。因此无论公平骰两次结果如何耦合，$A_1,A_2$ 都不独立。这个证明只用题面给出的先验和边际，没有借用已隔离小问中的 $5/6$ 或 $5/9$。

## Common Mistakes

- 误以为题面给出了“给定骰子种类后两掷独立”；这里连这种条件独立性也没有印出。
- 认为两个骰子只选一次就意味着两次掷骰结果必然相同。

## Connections

- [[Subtopic - Conditional Probability - 条件概率]]
- [[Conditional Probability - 条件概率]]
- [[Conditional-Probability Method - 条件概率方法]]
