---
id: "Q-2014-FINAL-P09-closed-form"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 13
solution_page: [13]
question_number: "9"
year: 2014
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Recursion-Tree Method - 递归树方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 3
difficulty_basis: "The recurrence expansion requires summing a geometric progression whose branching factor and subproblem size produce different exponents."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P09-closed-form

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=13]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=13]].

## Question

Iterate the recurrence or use a recursion tree to find a closed-form expression for $T(n)$.

Shared context: [[STEM-2014-FINAL-P09 - Shared Problem Prompt]].

## 中文解析

把 $n=2^i$ 后每层的合并项形成公比 $5/4$ 的等比和。最后使用 $5^i=n^{\log_25}$。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 13. The Chinese derivation expands the reasoning.

**Answer.** $T(n)=5n^{\log_25}-4n^2$.

**Derivation/proof.** Put $n=2^i$. Expansion gives $T(2^i)=5^i+4^i\sum_{j=0}^{i-1}(5/4)^j=5^i+4^i[(5/4)^i-1]/(1/4)=5\cdot5^i-4\cdot4^i$.

### 中文解答

**推导。** 设 $n=2^i$。第 j 层非递归工作是 $5^j(n/2^j)^2=n^2(5/4)^j$，共有 i 层，叶子贡献 $5^iT(1)=5^i$。因此 $T(n)=5^i+4^i\sum_{j=0}^{i-1}(5/4)^j=5^i+4\cdot4^i[(5/4)^i-1]=5\cdot5^i-4\cdot4^i$。代回得到 $5n^{\log_2 5}-4n^2$；$n=1$ 时也给一。

## Common Mistakes

- 把公比倒写成 $4/5$。
- 遗漏递归叶子的 $5^iT(1)$。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Recursion-Tree Method - 递归树方法]]
