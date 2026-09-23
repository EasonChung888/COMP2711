---
id: "Q-2015-FINAL-P09-theta"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Final]]"
source_pdf: "knowledge_base/past_paper/2015-final.pdf"
source_page: 15
solution_page: [16]
question_number: "9"
year: 2015
term: "fall"
exam_type: "final"
marks: 2
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 2
difficulty_basis: "The exact quadratic expression must be bounded above and below with constants independent of n."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-FINAL-P09-theta

## Source

![[knowledge_base/past_paper/2015-final.pdf#page=15]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-final.pdf#page=16]]

## Question

and simplify the closed-form expression using the big $\Theta$ notation.

Shared context: [[STEM-2015-FINAL-P09 - Shared Problem Prompt]].

## 中文解析

闭式中的二次项决定增长速度。由于合并成本常数非负，运行时间至少包含 $n^2$ 个单位叶子，而闭式又不超过 $(1+c)n^2$，上下界一致。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 16. The Chinese derivation expands the reasoning.

**Answer.** $T(n)=\Theta(n^2)$.

**Derivation/proof.** From $T(n)=n^2+cn(n-1)$ and fixed $c\ge0$, for $n\ge1$ we have $n^2\le T(n)\le(1+c)n^2$. These positive constant bounds prove the tight quadratic order.

### 中文解答

**推导。** 闭式写作 $T(n)=n^2+cn(n-1)$。时间成本常数 c 非负，n≥1 时第二项非负，故 $T(n)\ge n^2$；又 $n(n-1)\le n^2$，得到 $T(n)\le(1+c)n^2$。上下界正系数一与1+c均不随n改变，所以 $T(n)=\Theta(n^2)$。

## Common Mistakes

- 只给大 O 上界而没有紧确下界。
- 将固定合并常数 $c$ 当作随 $n$ 变化的量。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
