---
id: "Q-2016-MID-P03-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Midterm]]"
source_pdf: "knowledge_base/past_paper/2016-midterm.pdf"
source_page: 5
solution_page: [6]
question_number: "3(b)"
year: 2016
term: "fall"
exam_type: "midterm"
marks: 6
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Binomial Coefficients - 二项式系数]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "The algebraic proof converts the binomial coefficient to factorials and cancels the n and k factors."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-MID-P03-b

## Source

![[knowledge_base/past_paper/2016-midterm.pdf#page=5]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-midterm.pdf#page=6]]

## Question

(b) Prove the identity above by means of an algebraic proof.

Shared context: [[STEM-2016-MID-P03 - Shared Problem Prompt]].

## 中文解析

从右边展开组合数，注意 $(n-1)-(k-1)=n-k$。将 $n(n-1)!$ 合并为 $n!$，并把 $k(k-1)!$ 合并为 $k!$，就回到左边定义。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 6. The Chinese derivation expands the reasoning.

**Answer.** $\frac nk\binom{n-1}{k-1}=\binom nk$.

**Derivation/proof.** $\displaystyle\frac nk\binom{n-1}{k-1}=\frac{n(n-1)!}{k(k-1)!((n-1)-(k-1))!}=\frac{n!}{k!(n-k)!}=\binom nk$. The specified $0<k\le n$ ensures division by $k$ and all factorials are valid.

### 中文解答

**推导。** 从右边展开组合数定义：$\frac nk\binom{n-1}{k-1}=\frac{n(n-1)!}{k(k-1)!((n-1)-(k-1))!}$。因 $(n-1)-(k-1)=n-k$，且 $n(n-1)!=n!$、$k(k-1)!=k!$，化为 $n!/[k!(n-k)!]=\binom nk$，恰为左边。源题 $0<k\le n$ 保证除数k非零且所有阶乘自变量非负。

## Common Mistakes

- 将分母的 $(n-k)!$ 错写成 $(n-k-1)!$。
- 不检查 $k>0$ 就进行除法。

## Connections

- [[Subtopic - Binomial Coefficients - 二项式系数]]
- [[Combinatorial Selection - 组合选择]]
- [[Proof Method - 证明方法]]
