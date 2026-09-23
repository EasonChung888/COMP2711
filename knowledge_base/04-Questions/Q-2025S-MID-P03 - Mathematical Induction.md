---
id: "Q-2025S-MID-P03"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf"
source_page: 5
question_number: "3"
year: 2025
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]"]
question_types: ["proof"]
difficulty: 4
difficulty_basis: "Induct on one variable while quantifying over the other and derive predecessor coverage using induction."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 12
---
# Q-2025S-MID-P03

## Source

[[2025 Spring Midterm]]; printed item 3; 12 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=5]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=5]]

## Question

Take the natural numbers $\mathbb N$ as the domain. Recall that in Peano's axiomatic system, addition is defined as follows: (i) $x+0=x$; (ii) $x+S(y)=S(x+y)$. We can further define the predicate $x\le y$ as $\exists k(x+k=y)$. Prove that for any $x,y\in\mathbb N$, either $x\le y$ or $y\le x$ is true. You are only allowed to use Peano's axioms (including induction), definitions, and the commutative law of addition.

## 中文解析

归纳命题必须对所有 $y$ 同时成立，才能在后继步把 $y$ 换成其前驱。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\forall x\forall y(x\le y\lor y\le x)$。

**推导。** 先以 induction 得到每个自然数不是零就是某个后继：零满足该析取，任意 $S(z)$ 自己就是后继，因此归纳完成。再对 $x$ 归纳。基础步 $x=0$：任取 $y$，由交换律及加法定义 $0+y=y+0=y$，取 $k=y$ 得 $0\le y$。

归纳假设：对每个 $y$ 都有 $x\le y$ 或 $y\le x$。考察 $S(x)$ 与任意 $y$。若 $y=0$，取 $k=S(x)$ 得 $0\le S(x)$。否则写 $y=S(y')$，将归纳假设用于 $y'$。若 $x+k=y'$，则 $S(x)+k=k+S(x)=S(k+x)=S(x+k)=S(y')=y$，故 $S(x)\le y$。若 $y'+k=x$，同理 $S(y')+k=S(y'+k)=S(x)$，故 $y\le S(x)$。所有 $y$ 情形均覆盖，数学归纳得到结论，未引用事先成立的全序律。

## Common Mistakes

- 若归纳假设只对固定 $y$ 成立，就不能改用它处理 $y′$。
- 不能直接引用自然数的三歧性，它包含本题正在证明的可比较性。

## Connections

- [[Topic - Induction and Recursion - 归纳与递归]]
- [[Subtopic - Induction - 数学归纳法]]
- [[Mathematical Induction - 数学归纳法]]
- [[Induction Proof Method - 归纳证明法]]

Induct on one variable while quantifying over the other and derive predecessor coverage using induction.
