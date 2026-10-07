---
id: "Q-2021-MID-P08-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 3
question_number: "8(a)"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Oscillating Asymptotic Bounds - 振荡函数渐近界]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 3
difficulty_basis: "Alternating zeros of sine and cosine independently disprove both asymptotic directions."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 3
---
# Q-2021-MID-P08-a

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=4]]

## Question

$f(x)=\sin(x),g(x)=(\cos(x))^2$.

Shared context: [[STEM-2021-MID-P08 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2021-midterm.pdf#page=4|physical PDF page 4]].

> (a) None. When $x$ keeps increasing, $(\cos(x))^2$ periodically reaches zero. When $(\cos(x))^2$ is zero, $\sin(x)$ could be $-1$ or $1$. So, no constant $c$ that makes $f(x)\le c\cdot g(x)$ or $f(x)\ge c\cdot g(x)$.

## Supplementary Explanation

**Answer.** None.

**Derivation/proof.** At $x=\pi/2+2k\pi$, |f(x)|=1 and g(x)=0, ruling out any eventual constant-factor upper bound |f|≤Cg. At x=kπ, |f(x)|=0 and g(x)=1, ruling out any positive lower bound |f|≥cg. Both sequences grow arbitrarily large. Therefore neither O nor Ω holds, and hence neither does Θ. The same counterexamples settle either signed or absolute-value comparison here.

At $x=k\pi$, $|f(x)|=0$ while $g(x)=1$.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Oscillating Asymptotic Bounds - 振荡函数渐近界]]
- [[Asymptotic Bound Method - 渐近界方法]]
