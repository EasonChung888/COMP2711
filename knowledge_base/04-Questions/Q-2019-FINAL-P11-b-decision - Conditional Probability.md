---
id: "Q-2019-FINAL-P11-b-decision"
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
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Opening door three makes the unchosen door two more likely than the original door."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2019-FINAL-P11-b-decision

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=13]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=13]] ![[knowledge_base/past_paper/2019-final.pdf#page=14]]

## Question

In this case, should you switch to door 2?

Shared context: [[STEM-2019-FINAL-P11 - Shared Problem Prompt]].

## 中文解析

开三号门后，二号门的后验胜率比原来选的一号门高，因此应换到二号。这个结果与开二号门时保持选择并不矛盾：主持人打开哪扇门携带不同信息，策略可以依观察结果变化。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 13, 14. The Chinese derivation expands the reasoning.

**Answer.** Yes; switch to door 2.

**Derivation/proof.** For the observation $M=3$, the posterior probabilities are $P(W=1\mid M=3)=0.25/0.55=5/11$ and $P(W=2\mid M=3)=0.3/0.55=6/11$. Switching therefore raises the conditional win probability from $5/11$ to $6/11$. The optimal response differs from the response when door 2 is opened.

### 中文解答

**推导。** 给定开三，留在门一的胜率是 $(0.5/2)/0.55=5/11$，换到门二的胜率是 $0.3/0.55=6/11$。因 $6/11>5/11$，应换到门二。这次最优动作与开二时相反，因为主持人所开门的概率取决于奖门位置。

## Common Mistakes

- 为了让策略形式一致而忽略两种观察的不同概率。
- 把条件胜率和整体胜率混淆。

## Connections

- [[Subtopic - Conditional Probability - 条件概率]]
- [[Conditional Probability - 条件概率]]
- [[Conditional-Probability Method - 条件概率方法]]
