---
id: "Q-2025F-MID-P10-a-ii-var"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 21
question_number: "10(a)(ii)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]"]
concepts: ["[[Random Variables - 随机变量]]"]
methods: ["[[Random-Variable Method - 随机变量方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Square all coefficients and use zero covariances from explicitly independent rolls."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [22]
related_questions: ["[[Q-2025F-MID-P10-a-ii-E - Random Variables]]"]
---
# Q-2025F-MID-P10-a-ii-var

## Source

[[2025 Fall Midterm]]; printed item 10(a)(ii); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=21]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=22]]

Printed answer (iii) explicitly computes Y and var(Y)=17.5; answer (ii) belongs to an unasked X=X1−X2. This atom is the variance half of printed 10(a)(ii); no mark apportionment. Atomic extraction: the original combined request is “What are $E(Y)$ and $var(Y)$?”; this note isolates variance. The plural “are” and printed label are retained rather than silently rewritten.

## Question

![[STEM-2025F-MID-P10-a-ii - Shared Problem Prompt#Shared printed wording]]

What are $var(Y)$?

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=22|physical PDF page 22]].

> (iii) For $Y=X_1-2X_2+X_3$, since $X_1,X_2,X_3$ are independent:
> $$E(Y)=E(X_1)-2E(X_2)+E(X_3)=3.5-2\cdot3.5+3.5=0.$$
> $$\operatorname{var}(Y)=\operatorname{var}(X_1)+(-2)^2\operatorname{var}(X_2)+\operatorname{var}(X_3)=\frac{17.5}{6}+4\cdot\frac{17.5}{6}+\frac{17.5}{6}=\frac{105}{6}=17.5.$$

## Supplementary Explanation

**Answer.** $\operatorname{var}(Y)=35/2$.

**Derivation/proof.** Each die has variance 35/12. Independence makes all covariance terms zero. Thus $\operatorname{var}(Y)=1^2\operatorname{var}(X_1)+(-2)^2\operatorname{var}(X_2)+1^2\operatorname{var}(X_3)=(1+4+1)35/12=210/12=35/2$. This is 17.5, not 35/6, the variance of the extra two-die difference X appearing on the answer page. Match the answer by the defined variable rather than the shifted numbering.

## Connections

- [[Topic - Probability - 概率]]
- [[Subtopic - Random Variables - 随机变量]]
- [[Random Variables - 随机变量]]
- [[Random-Variable Method - 随机变量方法]]

Square all coefficients and use zero covariances from explicitly independent rolls.

- Prerequisite / related: [[Q-2025F-MID-P10-a-ii-E - Random Variables]]: 同一随机变量的均值与方差对照：方差平方系数并需要控制协方差，均值则按原系数线性组合；本题各自重新计算所需数值。
