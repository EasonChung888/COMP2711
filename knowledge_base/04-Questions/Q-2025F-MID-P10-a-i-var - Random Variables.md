---
id: "Q-2025F-MID-P10-a-i-var"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 21
question_number: "10(a)(i)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]"]
concepts: ["[[Random Variables - 随机变量]]"]
methods: ["[[Random-Variable Method - 随机变量方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Compute the second moment of a fair die and subtract the square of its mean."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [22]
related_questions: ["[[Q-2025F-MID-P10-a-i-E - Random Variables]]"]
---
# Q-2025F-MID-P10-a-i-var

## Source

[[2025 Fall Midterm]]; printed item 10(a)(i); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=21]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=22]]

Editorial atomic split: variance only; the shared 2 points are not apportioned. Atomic extraction: the original combined request is “What are $E(X_1)$ and $var(X_1)$?”; this note isolates variance. The plural “are” and printed label are retained rather than silently rewritten.

## Question

![[STEM-2025F-MID-P10-a - Shared Problem Prompt#Shared printed wording]]

(i) [2 points] What are $var(X_1)$?

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=22|physical PDF page 22]].

> (a) (i) For a fair die, each outcome $X_1$ is uniformly distributed over $\{1,2,3,4,5,6\}$. The expected value is:
> $$E(X_1)=\frac{1+2+3+4+5+6}{6}=\frac{21}{6}=3.5.$$
> The variance is:
> $$\operatorname{var}(X_1)=E(X_1^2)-[E(X_1)]^2$$
> where $E(X_1^2)=\frac{1^2+2^2+3^2+4^2+5^2+6^2}{6}=\frac{91}{6}$, so:
> $$\operatorname{var}(X_1)=\frac{91}{6}-(3.5)^2=\frac{91}{6}-\frac{12.25}{1}=\frac{91}{6}-\frac{73.5}{6}=\frac{17.5}{6}\approx2.9167.$$

## Supplementary Explanation

**Answer.** $\operatorname{var}(X_1)=35/12$.

**Derivation/proof.** The second moment is $E(X_1^2)=(1^2+2^2+3^2+4^2+5^2+6^2)/6=91/6$, and $E(X_1)=21/6=7/2$. Hence $\operatorname{var}(X_1)=E(X_1^2)-[E(X_1)]^2=91/6-49/4=(182-147)/12=35/12$. This is positive, as expected for six distinct outcomes. The printed value 17.5/6 is exactly the same number.

## Connections

- [[Topic - Probability - 概率]]
- [[Subtopic - Random Variables - 随机变量]]
- [[Random Variables - 随机变量]]
- [[Random-Variable Method - 随机变量方法]]

Compute the second moment of a fair die and subtract the square of its mean.

- Prerequisite / related: [[Q-2025F-MID-P10-a-i-E - Random Variables]]: 同一随机变量的均值与方差对照：方差平方系数并需要控制协方差，均值则按原系数线性组合；本题各自重新计算所需数值。
