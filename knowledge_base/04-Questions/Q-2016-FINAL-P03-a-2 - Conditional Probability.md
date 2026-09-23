---
id: "Q-2016-FINAL-P03-a-2"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Final]]"
source_pdf: "knowledge_base/past_paper/2016-final.pdf"
source_page: 7
solution_page: [7]
question_number: "3(a)"
year: 2016
term: "fall"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Introduction to Probability - 概率基础]]","[[Subtopic - Conditional Probability - 条件概率]]"]
concepts: ["[[Probability Events - 概率事件]]","[[Conditional Probability - 条件概率]]"]
methods: ["[[Probability Calculation Method - 概率计算方法]]","[[Conditional-Probability Method - 条件概率方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "The second roll has the same mixture marginal because no first-roll outcome has been conditioned on."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-FINAL-P03-a-2

## Source

![[knowledge_base/past_paper/2016-final.pdf#page=7]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-final.pdf#page=7]]

## Question

(a) What is $P(A_1)$ and $P(A_2)$?

Atomic focus [editorial]: $P(A_2)$; the first requested marginal is a separate atom.

Shared context: [[STEM-2016-FINAL-P03 - Shared Problem Prompt]].

## 中文解析

虽然两次使用同一骰子会导致事件相关，但第二次的边缘分布与第一次相同。没有给定第一掷信息时，选中特殊骰的概率仍是一半，不能使用更新后的条件权重。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 7. The Chinese derivation expands the reasoning.

**Answer.** $P(A_2)=2/3$.

**Derivation/proof.** The choice of die is unchanged and unobserved. Conditional on the fair die, the second roll has probability $1/3$ of showing at most two; conditional on the special die that probability is 1. Thus $P(A_2)=\frac12\frac13+\frac12=\frac23$. Equality of the marginals does not establish independence of the events.

### 中文解答

**推导。** 第二次仍用所抽到的同一骰子，但此问未条件于第一掷信息。抽到F或S的边缘权重仍各1/2。给定F，第二掷≤2概率1/3；给定S概率一。故 $P(A_2)=(1/2)(1/3)+(1/2)(1)=2/3$。两个边缘概率相同并不意味着两事件独立；共享骰子类别会引入关联。

## Common Mistakes

- 误把 $P(A_2)$ 当成给定第一掷成功后的概率。
- 由两个边缘概率相等就断言两事件独立。

## Connections

- [[Subtopic - Introduction to Probability - 概率基础]]
- [[Subtopic - Conditional Probability - 条件概率]]
- [[Probability Events - 概率事件]]
- [[Conditional Probability - 条件概率]]
- [[Probability Calculation Method - 概率计算方法]]
- [[Conditional-Probability Method - 条件概率方法]]
