---
id: "Q-2021-MID-P08-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 3
question_number: "8(b)"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Oscillating Asymptotic Bounds - 振荡函数渐近界]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "The comparison function stays above one half while sine remains bounded and repeatedly zero."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 3
---
# Q-2021-MID-P08-b

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=4]]

## Question

$f(x)=2\sin(x),g(x)=|\cos(x)|+0.5$.

Shared context: [[STEM-2021-MID-P08 - Shared Problem Prompt]].

## 中文解析

g 始终至少二分之一，而 f 的绝对值最多二，所以四倍 g 能覆盖 f，给出 O 上界。可是 f 在任意大的整倍数 π 处为零，g 仍为正，因而没有正的渐近下界。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** (ii) only: $f=O(g)$.

**Derivation/proof.** For all real x, |f(x)|≤2 and g(x)≥1/2, so |f(x)|≤4g(x), proving O under magnitude-based bounds. At x=kπ, f(x)=0 while g(x)=3/2. These arbitrarily large zeros forbid a positive lower bound, hence Ω and Θ fail. The published selected option is also consistent with signed bounds.

### 中文解答

**推导。** 对所有实数 $x$，有 $|2\sin x|\le2$ 及 $|\cos x|+0.5\ge0.5$，因此 $|f(x)|\le4g(x)$，给出 $O(g)$ 上界。另一方面，在任意大的 $x=k\pi$，$f(x)=0$ 但 $g(x)=1.5$，所以不存在正的统一下界常数，$\Omega(g)$ 不成立，$\Theta(g)$ 也不成立。故只选(ii)。这不是仅凭有界就断言同阶：$g$ 有严格正下界而 $f$ 反复为零。

## Common Mistakes

- 因振荡就认为没有任何渐近上界。
- 把绝对值遗漏导致最大幅度估错。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Oscillating Asymptotic Bounds - 振荡函数渐近界]]
- [[Asymptotic Bound Method - 渐近界方法]]
