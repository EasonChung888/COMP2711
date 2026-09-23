---
id: "Q-2019-FINAL-P11-b-W1"
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
difficulty_basis: "Opening door three has total mass 0.55 and leaves door ones joint mass at one quarter."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2019-FINAL-P11-b-W1

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=13]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=13]] ![[knowledge_base/past_paper/2019-final.pdf#page=14]]

## Question

(b) Now suppose $M=3$, i.e., Monty opens door 3. What is $p(W=1\mid M=3)$

Shared context: [[STEM-2019-FINAL-P11 - Shared Problem Prompt]].

## 中文解析

开三号门的总概率与开二号门不同，因为二号门的先验奖品概率更高。初选一号正确时仍只有一半机会开三号，所以分子仍是零点二五，但分母变为零点五五，后验下降。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 13, 14. The Chinese derivation expands the reasoning.

**Answer.** $5/11$.

**Derivation/proof.** Here $P(M=3\mid W=1)=1/2$, $P(M=3\mid W=2)=1$, and $P(M=3\mid W=3)=0$. Hence $P(M=3)=0.5(1/2)+0.3=0.55$. The joint mass $P(W=1,M=3)=0.25$, giving posterior $0.25/0.55=5/11$.

### 中文解答

**推导。** 奖在门一时主持人以 $1/2$ 概率开三，奖在门二时必开三，奖在门三时不能开三。故 $P(M=3)=0.5(1/2)+0.3(1)+0.2(0)=0.55$。奖在一且开三的联合质量为 $0.25$，因此 $P(W=1\mid M=3)=0.25/0.55=5/11$。这个观测使原选择的胜率从 $1/2$ 降至 $5/11$。

## Common Mistakes

- 把上一问零点四五的分母直接沿用。
- 认为一号门概率不受打开哪一门影响。

## Connections

- [[Subtopic - Conditional Probability - 条件概率]]
- [[Conditional Probability - 条件概率]]
- [[Conditional-Probability Method - 条件概率方法]]
