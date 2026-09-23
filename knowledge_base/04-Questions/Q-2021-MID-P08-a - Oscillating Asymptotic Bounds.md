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

## 中文解析

用两组趋向无穷的特殊点分别打破上下界。余弦为零时正弦绝对值为一，不能有 O 上界；正弦为零时余弦平方为一，不能有 Ω 下界，因此三个选项全不成立。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** None.

**Derivation/proof.** At $x=\pi/2+2k\pi$, |f(x)|=1 and g(x)=0, ruling out any eventual constant-factor upper bound |f|≤Cg. At x=kπ, |f(x)|=0 and g(x)=1, ruling out any positive lower bound |f|≥cg. Both sequences grow arbitrarily large. Therefore neither O nor Ω holds, and hence neither does Θ. The same counterexamples settle either signed or absolute-value comparison here.

### 中文解答

**推导。** 三个选项都不成立。先取任意大的 $x=\pi/2+2k\pi$，此时 $|f(x)|=1$ 而 $g(x)=0$，不可能满足 $|f(x)|\le Cg(x)$，故不是 $O(g)$。再取 $x=k\pi$，有 $|f(x)|=0$、$g(x)=1$，不可能满足任意正 $c$ 的 $|f(x)|\ge cg(x)$，故不是 $\Omega(g)$。没有上下界中的任一个，自然也不是 $\Theta(g)$。两组点都可超过任何给定阈值，有限起始区间不能挽救渐近界。

## Common Mistakes

- 只看函数都有限便判 Θ(1) 后互相等阶。
- 只检查一种零点而漏掉另一方向。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Oscillating Asymptotic Bounds - 振荡函数渐近界]]
- [[Asymptotic Bound Method - 渐近界方法]]
