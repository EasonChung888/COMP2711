---
id: "Q-2016-MID-P03-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Midterm]]"
source_pdf: "knowledge_base/past_paper/2016-midterm.pdf"
source_page: 5
solution_page: [5]
question_number: "3(a)"
year: 2016
term: "fall"
exam_type: "midterm"
marks: 9
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Binomial Coefficients - 二项式系数]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Double counting a committee with a distinguished member avoids interpreting a fractional n-over-k factor directly."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-MID-P03-a

## Source

![[knowledge_base/past_paper/2016-midterm.pdf#page=5]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-midterm.pdf#page=5]]

## Question

(a) Prove the identity above by means of a combinatorial proof.

Shared context: [[STEM-2016-MID-P03 - Shared Problem Prompt]].

## 中文解析

先将等式乘上 $k$，把它解释成“选出 $k$ 人并指定其中一人为代表”的计数。可以先选委员会再选代表，也可以先选代表再选剩余成员，两种方法计同一对象。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 5. The Chinese derivation expands the reasoning.

**Answer.** $k\binom nk=n\binom{n-1}{k-1}$, hence the required identity.

**Derivation/proof.** Count pairs $(S,s)$ with $S\subseteq\{1,\ldots,n\}$, $|S|=k$, and $s\in S$. Choosing $S$ then $s$ gives $\binom nk k$. Choosing $s$ first gives $n$ choices and then $\binom{n-1}{k-1}$ choices for the other members. Equate the counts and divide by the positive integer $k$.

### 中文解答

**推导。** 计数二元组 (S,s)：从 n 个不同对象选大小 k 的集合 S，并指定一个成员 s。先选S再选s，计 $\binom nk k$；先选s，有n种，再从剩下n−1个对象选k−1个补齐S，计 $n\binom{n-1}{k-1}$。两种步骤与同一对象一一对应，所以两数相等。题给k>0，可以除以k，得到 $\binom nk=(n/k)\binom{n-1}{k-1}$。这与源解的三个桶（1个、k−1个、n−k个）计数完全对应。

## Common Mistakes

- 用阶乘化简取代本问的组合证明。
- 先选代表后仍从全部 $n$ 人选其他成员，可能重选代表。

## Connections

- [[Subtopic - Binomial Coefficients - 二项式系数]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]
