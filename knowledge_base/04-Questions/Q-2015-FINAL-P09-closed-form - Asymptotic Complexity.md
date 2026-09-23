---
id: "Q-2015-FINAL-P09-closed-form"
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
marks: 5
topics: ["[[Topic - Algorithms - 算法]]","[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]","[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]","[[Recurrence Relations - 递推关系]]"]
methods: ["[[Recursion-Tree Method - 递归树方法]]","[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["algorithm-analysis"]
difficulty: 3
difficulty_basis: "Expansion has a level-cost ratio of two and a leaf term of n squared, both of which must survive simplification."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-FINAL-P09-closed-form

## Source

![[knowledge_base/past_paper/2015-final.pdf#page=15]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-final.pdf#page=16]]

## Question

find a closed-form expression for it,

Shared context: [[STEM-2015-FINAL-P09 - Shared Problem Prompt]].

## 中文解析

令 $n=2^j$。第 $i$ 层共有 $4^i$ 个子问题，每个合并成本为 $cn/2^i$，所以层成本为 $cn2^i$。将所有内部层与 $n^2$ 个单位叶子合计。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 16. The Chinese derivation expands the reasoning.

**Answer.** $T(n)=(1+c)n^2-cn$.

**Derivation/proof.** For $j=\log_2n$, iteration gives $T(n)=4^jT(1)+cn\sum_{i=0}^{j-1}2^i=n^2+cn(n-1)=(1+c)n^2-cn$. Substitution into $4T(n/2)+cn$ reproduces the expression, and at $n=1$ it equals 1.

### 中文解答

**推导。** 令 $j=\log_2n$。第 i 层有 $4^i$ 个问题，每个非递归成本 $cn/2^i$，故层总成本 $cn2^i$。内部层 i=0 至 j−1，叶子共有 $4^j=n^2$ 个，每个成本一。相加 $T(n)=n^2+cn\sum_{i=0}^{j-1}2^i=n^2+cn(n-1)=(1+c)n^2-cn$。n=1 时等于一，代回原递推也吻合。

## Common Mistakes

- 遗漏递归叶子总成本 $4^j$。
- 误把每层成本当成相同的 $cn$ 而得到对数项。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - Recursion - 递归]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Recurrence Relations - 递推关系]]
- [[Recursion-Tree Method - 递归树方法]]
- [[Recurrence-Solving Method - 递推求解法]]
