---
id: "Q-2019-FINAL-P11-a-decision"
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
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Comparing the two posterior probabilities favors keeping door one after door two is opened."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2019-FINAL-P11-a-decision

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=13]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=13]] ![[knowledge_base/past_paper/2019-final.pdf#page=14]]

## Question

Based on your calculation, should you switch to door 3?

Shared context: [[STEM-2019-FINAL-P11 - Shared Problem Prompt]].

## 中文解析

决策要比较观察开门后的概率，而不是套普通三门问题永远换门的结论。开二号门之后，一号门后验九分之五大于三号门九分之四，因此保持原选择才具有更高胜率。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 13, 14. The Chinese derivation expands the reasoning.

**Answer.** No; keep door 1.

**Derivation/proof.** The joint masses compatible with opening door 2 are 0.25 for prize door 1 and 0.2 for prize door 3, summing to 0.45. Their posterior probabilities are $5/9$ and $4/9$. Keeping wins with $5/9$, while switching wins with $4/9$, so keeping is strictly better under this observation.

### 中文解答

**推导。** 在观察到 $M=2$ 后，奖在门一的联合质量为 $0.5\cdot(1/2)=0.25$，门三为 $0.2$；除以共同归一化常数 $0.45$，得留门一胜率 $5/9$，换门三胜率 $4/9$。因 $5/9>4/9$，不应换门，应保留门一。比较的是观察后的条件概率，不是最初的 $0.5$ 与 $0.2$。

## Common Mistakes

- 无论先验如何都坚持换门。
- 把未开门剩两扇当作各占一半。

## Connections

- [[Subtopic - Conditional Probability - 条件概率]]
- [[Conditional Probability - 条件概率]]
- [[Conditional-Probability Method - 条件概率方法]]
