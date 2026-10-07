---
id: "Q-2016-FINAL-P02-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Final]]"
source_pdf: "knowledge_base/past_paper/2016-final.pdf"
source_page: 5
solution_page: [6]
question_number: "2(d)"
year: 2016
term: "fall"
exam_type: "final"
marks: 3
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]","[[Subtopic - Conditional Probability - 条件概率]]"]
concepts: ["[[Random Variables - 随机变量]]","[[Conditional Probability - 条件概率]]"]
methods: ["[[Random-Variable Method - 随机变量方法]]","[[Conditional-Probability Method - 条件概率方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Independence permits factoring the product expectation while identical distributions equate the two affine means."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-FINAL-P02-d

## Source

![[knowledge_base/past_paper/2016-final.pdf#page=5]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-final.pdf#page=6]]

## Question

(d) Expectation of $f(n)f(p)$, if $p$ is another random variable that is independent of $n$ and has the same distribution as $n$.

Shared context: [[STEM-2016-FINAL-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2016-final.pdf#page=6|PDF physical page 6]].

(d) By expected product of independent random variables, mean of $f(n)f(p)=E(f(n))E(f(p))$. Thus,
$$\begin{aligned}
E(f(n)f(p))&=E(f(n))E(f(p))\\&=E(f(n))E(f(n))\\&=(am+b)^2
\end{aligned}$$

## Supplementary Explanation

**Answer.** $E[f(n)f(p)]=(am+b)^2$.

**Derivation/proof.** Independence implies $E[np]=E[n]E[p]=m^2$. Expand $(an+b)(ap+b)=a^2np+abn+abp+b^2$ and take expectations: $a^2m^2+2abm+b^2=(am+b)^2$. Equivalently, $f(n)$ and $f(p)$ are independent and each has expectation $am+b$.

Independence and equal means give $E(np)=m^2$, so the expanded expectation is $a^2m^2+abm+abm+b^2=(am+b)^2$.

## Connections

- [[Subtopic - Random Variables - 随机变量]]
- [[Subtopic - Conditional Probability - 条件概率]]
- [[Random Variables - 随机变量]]
- [[Conditional Probability - 条件概率]]
- [[Random-Variable Method - 随机变量方法]]
- [[Conditional-Probability Method - 条件概率方法]]
