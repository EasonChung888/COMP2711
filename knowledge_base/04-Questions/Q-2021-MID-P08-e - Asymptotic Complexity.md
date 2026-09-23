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

## 中文解析

先把“常数的对数次幂”换成 x 的常数次幂。前者指数约零点六三一，后者约零点三六七，因此 f/g 趋向无穷；有下界却没有常数上界，只能选 Ω。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** (iii) only: $f=\Omega(g)$.

**Derivation/proof.** Use $a^{\log_bx}=x^{\log_ba}$. Then f=x^α with α=ln2/ln3≈.631, and g=x^β with β=ln3/ln20≈.367. Since α>β, f/g=x^(α−β)→∞. It is eventually bounded below by a positive constant but not above, establishing Ω and excluding O and Θ. The exponents, not the outer bases alone, determine growth.

### 中文解答

**推导。** 利用 $a^{\log_bx}=x^{\log_ba}$，写成 $f=x^\alpha$、$g=x^\beta$，其中 $\alpha=\ln2/\ln3$、$\beta=\ln3/\ln20$。不用近似也能比较：因 $2^2>3$，有 $\alpha>1/2$；因 $3^2<20$，有 $\beta<1/2$。所以 $\alpha-\beta>0$，$f/g=x^{\alpha-\beta}\to\infty$。该比值最终有正下界，却无常数上界，因此只选(iii)，即 $\Omega(g)$，不选 $O$ 或 $\Theta$。

## Common Mistakes

- 只比较底数二与三。
- 把指数里的对数当成普通乘法。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
