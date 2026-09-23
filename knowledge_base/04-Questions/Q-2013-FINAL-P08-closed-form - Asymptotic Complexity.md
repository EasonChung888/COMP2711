---
id: "Q-2013-FINAL-P08-closed-form"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Final]]"
source_pdf: "knowledge_base/past_paper/2013-final.pdf"
source_page: 11
solution_page: [11]
question_number: "8"
year: 2013
term: "spring"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Recursion-Tree Method - 递归树方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 3
difficulty_basis: "Solving the divide-by-two recurrence requires summing the level costs with ratio three quarters and converting the depth back to n."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-FINAL-P08-closed-form

## Source

![[knowledge_base/past_paper/2013-final.pdf#page=11]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-final.pdf#page=11]].

## Question

Iterate the recurrence or use a recursion tree to find a closed-form expression for $T(n)$.

Shared context: [[STEM-2013-FINAL-P08 - Shared Problem Prompt]].

## 中文解析

令 $n=2^j$ 可使递归深度清楚。每层合并代价形成公比 $3/4$ 的有限等比和，最后再代回 $j=\log_2n$。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 11. The Chinese derivation expands the reasoning.

**Answer.** $T(n)=4n^2-3n^{\log_2 3}$.

**Derivation/proof.** Write $n=2^j$. Expansion gives $T(2^j)=3^j+2^{2j}\sum_{i=0}^{j-1}(3/4)^i=3^j+4\cdot2^{2j}-4\cdot3^j=4n^2-3n^{\log_2 3}$.

### 中文解答

**推导。** 设 $n=2^j$，展开到基础点 $T(1)=1$。第 i 层共有 $3^i$ 个规模 $n/2^i$ 的子问题，故该层代价是 $n^2(3/4)^i$，叶子贡献 $3^j$。所以 $T(n)=3^j+n^2\sum_{i=0}^{j-1}(3/4)^i=3^j+4n^2[1-(3/4)^j]$。由 $n^2(3/4)^j=3^j$ 得 $T(n)=4n^2-3\cdot3^j=4n^2-3n^{\log_2 3}$。$j=0$ 时有限和为空，公式给一，与基础值一致。

## Common Mistakes

- 把等比和的首项或项数写错。
- 将 $3^j$ 错换为 $n^3$。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Recursion-Tree Method - 递归树方法]]
