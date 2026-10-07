---
id: "Q-2016-FINAL-P02-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Final]]"
source_pdf: "knowledge_base/past_paper/2016-final.pdf"
source_page: 5
solution_page: [6]
question_number: "2(c)"
year: 2016
term: "fall"
exam_type: "final"
marks: 3
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]"]
concepts: ["[[Random Variables - 随机变量]]"]
methods: ["[[Random-Variable Method - 随机变量方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Squaring the entire affine expression introduces the cross term 2ab times the first moment."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-FINAL-P02-c

## Source

![[knowledge_base/past_paper/2016-final.pdf#page=5]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-final.pdf#page=6]]

## Question

(c) Expectation of $f(n)^2$.

Shared context: [[STEM-2016-FINAL-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2016-final.pdf#page=6|PDF physical page 6]].

(c) Expectation of $f(n)^2$:
$$\begin{aligned}
E(f(n)^2)&=\sum_{x:x\in S}p(x)(ax+b)^2\\
&=\sum_{x:x\in S}p(x)(a^2x^2+2abx+b^2)\\
&=a^2(v+m^2)+2abm+b^2
\end{aligned}$$

## Supplementary Explanation

**Answer.** $E[f(n)^2]=a^2(v+m^2)+2abm+b^2$.

**Derivation/proof.** Expand $f(n)^2=a^2n^2+2abn+b^2$. Taking expectations and using $E[n]=m$, $E[n^2]=v+m^2$ gives the result. As a check, subtract $(am+b)^2$ to recover $a^2v$, the variance from part (a).

## Connections

- [[Subtopic - Random Variables - 随机变量]]
- [[Random Variables - 随机变量]]
- [[Random-Variable Method - 随机变量方法]]
