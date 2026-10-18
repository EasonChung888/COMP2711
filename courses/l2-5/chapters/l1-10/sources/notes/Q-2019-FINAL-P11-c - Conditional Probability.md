---
id: "Q-2019-FINAL-P11-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 13
solution_page: [13,14]
question_number: "11(c)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Conditional Probability - 条件概率]]","[[Subtopic - Introduction to Probability - 概率基础]]"]
concepts: ["[[Conditional Probability - 条件概率]]","[[Probability Events - 概率事件]]"]
methods: ["[[Conditional-Probability Method - 条件概率方法]]","[[Probability Calculation Method - 概率计算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Weighting the keep-on-M2 and switch-on-M3 decisions by their observation probabilities gives 0.55 overall."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 2
---
# Q-2019-FINAL-P11-c

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=13]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=13]] ![[knowledge_base/past_paper/2019-final.pdf#page=14]]

## Question

(c) What’s the winning probability of your strategy above?

Shared context: [[STEM-2019-FINAL-P11 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=13|physical PDF page 13]]; [[knowledge_base/past_paper/2019-final.pdf#page=14|physical PDF page 14]].

Let $E$ denote the event that you win. We have $p(E)=\sum_{m=2}^3p(M=m)p(E\mid M=m)=0.45\cdot5/9+0.55\cdot6/11=0.55$.
Alternatively, $p(E)=p(W=1,M=2)+p(W=2,M=3)=0.5\cdot0.5+0.3\cdot1=0.55$.

## Supplementary Explanation

**Answer.** $0.55=11/20$.

**Derivation/proof.** Keep door 1 when $M=2$, and choose door 2 when $M=3$. These disjoint winning events are $(W=1,M=2)$ with mass $0.5(1/2)=0.25$, and $(W=2,M=3)$ with mass $0.3(1)=0.3$. Thus the overall win probability is $0.25+0.3=0.55$. Equivalently total probability gives $0.45(5/9)+0.55(6/11)=0.55$.

The complete strategy wins in branches of total probability $0.25+0.3=0.55=11/20$. Equivalently, average the conditional optimal outcomes: $0.45\cdot(5/9)+0.55\cdot(6/11)=0.55$.

## Connections

- [[Subtopic - Conditional Probability - 条件概率]]
- [[Subtopic - Introduction to Probability - 概率基础]]
- [[Conditional Probability - 条件概率]]
- [[Probability Events - 概率事件]]
- [[Conditional-Probability Method - 条件概率方法]]
- [[Probability Calculation Method - 概率计算方法]]
