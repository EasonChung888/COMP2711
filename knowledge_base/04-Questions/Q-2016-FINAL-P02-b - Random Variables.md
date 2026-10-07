---
id: "Q-2016-FINAL-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Final]]"
source_pdf: "knowledge_base/past_paper/2016-final.pdf"
source_page: 5
solution_page: [5]
question_number: "2(b)"
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
difficulty_basis: "The input is squared before applying f, so only the second moment receives the coefficient a."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-FINAL-P02-b

## Source

![[knowledge_base/past_paper/2016-final.pdf#page=5]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-final.pdf#page=5]]

## Question

(b) Expectation of $f(n^2)$.

Shared context: [[STEM-2016-FINAL-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2016-final.pdf#page=5|PDF physical page 5]].

Assume that $S$ is the sample space of $n$.

(b) Expectation of $f(n^2)$:
$$\begin{aligned}
E(f(n^2))&=\sum_{x:x\in S}p(x)(ax^2+b)\\
&=a\sum_{x:x\in S}p(x)\cdot x^2+\sum_{x:x\in S}p(x)\cdot b\\
&=a\sum_{x:x\in S}p(x)\cdot x^2+b
\end{aligned}$$
$$v=Var(n)=\left(\sum_{x:x\in S}p(x)x^2\right)-m^2$$
$$E(f(n^2))=a(v+m^2)+b$$

## Supplementary Explanation

**Answer.** $E[f(n^2)]=a(v+m^2)+b$.

**Derivation/proof.** From $v=E[n^2]-(E[n])^2$, obtain $E[n^2]=v+m^2$. Since $f(n^2)=an^2+b$, linearity yields $E[f(n^2)]=aE[n^2]+b=a(v+m^2)+b$.

## Connections

- [[Subtopic - Random Variables - 随机变量]]
- [[Random Variables - 随机变量]]
- [[Random-Variable Method - 随机变量方法]]
