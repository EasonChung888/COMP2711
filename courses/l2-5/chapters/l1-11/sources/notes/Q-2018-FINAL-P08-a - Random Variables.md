---
id: "Q-2018-FINAL-P08-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 11
solution_page: [11]
question_number: "8(a)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]","[[Subtopic - Introduction to Probability - 概率基础]]"]
concepts: ["[[Random Variables - 随机变量]]","[[Probability Events - 概率事件]]"]
methods: ["[[Random-Variable Method - 随机变量方法]]","[[Probability Calculation Method - 概率计算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Summing ball indicators gives m contributions of one over n without needing independence for expectation."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P08-a

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=11]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=11]]

## Question

a) What is $E(X)$? Show the steps of your calculations.

Shared context: [[STEM-2018-FINAL-P08 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-final.pdf#page=11|physical PDF page 11]].

$E(X)$: Each ball assignment is a Bernoulli trial with probability $1/n$ of success, and there are $m$ trials. Therefore, $X$ follows the Binomial distribution for which we know $E(X)=m(1/n)=m/n$.
Alternative solution:
Let $X_i$ be the indicator random variable such that $X_i=1$ if the $i$-th ball is in the first box, $X_i=0$ otherwise. Obviously, $X=\sum_{i=1}^mX_i$. For $1\le i\le m$, $E(X_i)=P(\text{ball }i\text{ in the first box})=1/n$.
Therefore,
$$E(X)=E\left(\sum_{i=1}^mX_i\right)=\sum_{i=1}^mE(X_i)=\sum_{i=1}^m\frac1n=\frac mn.$$

## Supplementary Explanation

**Answer.** $E(X)=m/n$.

**Derivation/proof.** Let $I_i$ be one if ball $i$ lands in box 1 and zero otherwise. Then $X=\sum_{i=1}^mI_i$ and $E(I_i)=P(I_i=1)=1/n$. Linearity gives $E(X)=\sum_{i=1}^m1/n=m/n$. Equal marginals alone suffice for this particular expectation.

Even if every ball shares one uniformly selected box, the same expectation holds. This illustrates why independence must not be added to this proof.

Let $I_i$ indicate that ball $i$ enters the specified box. Then $X=\sum_{i=1}^m I_i$ and $E(I_i)=1/n$, so linearity gives $E(X)=m/n$; independence between balls is not required for this expectation.

## Connections

- [[Subtopic - Random Variables - 随机变量]]
- [[Subtopic - Introduction to Probability - 概率基础]]
- [[Random Variables - 随机变量]]
- [[Probability Events - 概率事件]]
- [[Random-Variable Method - 随机变量方法]]
- [[Probability Calculation Method - 概率计算方法]]
