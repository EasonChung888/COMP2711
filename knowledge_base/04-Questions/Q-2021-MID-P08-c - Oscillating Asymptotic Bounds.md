---
id: "Q-2021-MID-P08-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 3
question_number: "8(c)"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Oscillating Asymptotic Bounds - 振荡函数渐近界]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "The cosine envelope supplies a lower bound but its zeros prevent a reverse upper bound."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 3
---
# Q-2021-MID-P08-c

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=4]]

## Question

$f(x)=0.5x,g(x)=x|\cos(x)|$.

Shared context: [[STEM-2021-MID-P08 - Shared Problem Prompt]].

## 中文解析

g 被 x 包住，而 f 正好是 x 的一半，所以 f 至少是 g 的一半，满足 Ω。余弦绝对值反复为零，此时 g 为零而 f 为正，任何常数倍 g 都无法作为 f 的上界。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** (iii) only: $f=\Omega(g)$.

**Derivation/proof.** For positive x, |cos x|≤1 gives g(x)≤x=2f(x), so f≥g/2 and Ω holds. At x=π/2+kπ, g(x)=0 but f(x)>0; these arbitrarily large x prevent f≤Cg for any fixed C. Thus O fails and so does Θ.

### 中文解答

**推导。** 在所需的正无穷尾部 $x>0$，$|\cos x|\le1$，所以 $g(x)\le x=2f(x)$，即 $f(x)\ge\tfrac12g(x)$，证明 $\Omega(g)$。但在 $x=\pi/2+k\pi$，$g(x)=0$ 而 $f(x)=x/2>0$，任何固定常数 $C$ 都无法使 $f(x)\le Cg(x)$ 最终成立。故 $O$ 失败，连带 $\Theta$ 失败，只选(iii)。

## Common Mistakes

- 把 g≤2f 读反成 f=O(g)。
- 忽略余弦的无穷多个零点。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Oscillating Asymptotic Bounds - 振荡函数渐近界]]
- [[Asymptotic Bound Method - 渐近界方法]]
