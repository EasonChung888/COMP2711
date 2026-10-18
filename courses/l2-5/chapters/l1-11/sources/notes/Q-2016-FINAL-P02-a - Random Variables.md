---
id: "Q-2016-FINAL-P02-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Final]]"
source_pdf: "knowledge_base/past_paper/2016-final.pdf"
source_page: 5
solution_page: [5]
question_number: "2(a)"
year: 2016
term: "fall"
exam_type: "final"
marks: 3
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]"]
concepts: ["[[Random Variables - 随机变量]]"]
methods: ["[[Random-Variable Method - 随机变量方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Centering the affine random variable removes b and leaves the squared scale factor a squared."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-FINAL-P02-a

## Source

![[knowledge_base/past_paper/2016-final.pdf#page=5]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-final.pdf#page=5]]

## Question

(a) Variance of $f(n)$.

Shared context: [[STEM-2016-FINAL-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2016-final.pdf#page=5|PDF physical page 5]].

Assume that $S$ is the sample space of $n$.

(a) Variance of $f(n)$, first need to find $E(f(n))$. By the linearity of expectation, $E(f(n))=am+b$.
$$\begin{aligned}
Var(f(n))&=\sum_{x:x\in S}p(x)(ax+b-E(f(n))^2\\
&=\sum_{x:x\in S}p(x)(ax+b-am-b)^2\\
&=\sum_{x:x\in S}p(x)a^2(x-m)^2\\
&=a^2\sum_{x:x\in S}p(x)(x-m)^2=a^2v.
\end{aligned}$$

## Supplementary Explanation

**Answer.** $\operatorname{Var}(f(n))=a^2v$.

**Derivation/proof.** Linearity gives $E[f(n)]=am+b$. Therefore $\operatorname{Var}(f(n))=E[(an+b-(am+b))^2]=a^2E[(n-m)^2]=a^2v$. This also covers $a=0$, when $f(n)$ is constant.

The centered variable is $a(n-m)$ because the shift cancels.

## Connections

- [[Subtopic - Random Variables - 随机变量]]
- [[Random Variables - 随机变量]]
- [[Random-Variable Method - 随机变量方法]]
