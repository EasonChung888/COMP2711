---
id: "Q-2025F-MID-P10-a-iii-var"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_page: 21
question_number: "10(a)(iii)"
year: 2025
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]"]
concepts: ["[[Random Variables - 随机变量]]"]
methods: ["[[Random-Variable Method - 随机变量方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Add one hundred equal variances because every alternating coefficient has square one."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [22]
related_questions: ["[[Q-2025F-MID-P10-a-iii-E - Random Variables]]"]
---
# Q-2025F-MID-P10-a-iii-var

## Source

[[2025 Fall Midterm]]; printed item 10(a)(iii); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=21]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=22]]

The actual Z variance is printed under answer (iv) on page 22. No separate mark is given for variance within question (iii). Atomic extraction: the original combined request is “What are $E(Z)$ and $var(Z)$?”; this note isolates variance. The plural “are” and printed label are retained rather than silently rewritten.

## Question

![[STEM-2025F-MID-P10-a-iii - Shared Problem Prompt#Shared printed wording]]

What are $var(Z)$?

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf#page=22|physical PDF page 22]].

> (iv) For $Z=X_1-X_2+X_3-\cdots+X_{99}-X_{100}$, there are $50$ positive terms and $50$ negative terms:
> $$E(Z)=\sum_{i=1}^{50}E(X_{2i-1})-\sum_{i=1}^{50}E(X_{2i})=50\cdot3.5-50\cdot3.5=0.$$
> $$\operatorname{var}(Z)=\sum_{i=1}^{50}\operatorname{var}(X_{2i-1})+\sum_{i=1}^{50}\operatorname{var}(X_{2i})=50\cdot\frac{17.5}{6}+50\cdot\frac{17.5}{6}=100\cdot\frac{17.5}{6}=\frac{1750}{6}.$$

## Supplementary Explanation

**Answer.** $\operatorname{var}(Z)=875/3$.

**Derivation/proof.** The hundred die variables are mutually independent and each has variance 35/12. Every coefficient is +1 or −1, so every squared coefficient is one and all cross-covariance terms vanish. Consequently $\operatorname{var}(Z)=100\cdot35/12=3500/12=875/3$. The printed 1750/6 reduces to the same 875/3. Although the mean is zero, all hundred variance contributions accumulate.

## Connections

- [[Topic - Probability - 概率]]
- [[Subtopic - Random Variables - 随机变量]]
- [[Random Variables - 随机变量]]
- [[Random-Variable Method - 随机变量方法]]

Add one hundred equal variances because every alternating coefficient has square one.

- Prerequisite / related: [[Q-2025F-MID-P10-a-iii-E - Random Variables]]: 同一随机变量的均值与方差对照：方差平方系数并需要控制协方差，均值则按原系数线性组合；本题各自重新计算所需数值。
