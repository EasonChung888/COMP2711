---
id: "Q-2021-MID-P08-e"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 3
question_number: "8(e)"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 3
difficulty_basis: "Rewriting the exponential-log expressions as powers reveals distinct positive exponents."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 3
---
# Q-2021-MID-P08-e

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=4]]

## Question

$f(x)=2^{\log_3x},g(x)=3^{\log_{20}x}$.

Shared context: [[STEM-2021-MID-P08 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2021-midterm.pdf#page=4|physical PDF page 4]].

> (e) (iii), $f(x)=\Omega(g(x))$. $f(x)=2^{\log_3 x}=x^{\log_3 2}$. $g(x)=3^{\log_{20}x}=x^{\log_{20}3}$. The answer is then obvious.

## Supplementary Explanation

**Answer.** (iii) only: $f=\Omega(g)$.

**Derivation/proof.** Use $a^{\log_bx}=x^{\log_ba}$. Then f=x^α with α=ln2/ln3≈.631, and g=x^β with β=ln3/ln20≈.367. Since α>β, f/g=x^(α−β)→∞. It is eventually bounded below by a positive constant but not above, establishing Ω and excluding O and Θ. The exponents, not the outer bases alone, determine growth.

The comparison can be made exactly: $2^2>3$ implies $\alpha>1/2$, whereas $3^2<20$ implies $\beta<1/2$. Thus $\alpha-\beta>0$ without relying on rounded decimal values.

Thus $f/g=x^{\alpha-\beta}\to\infty$.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
