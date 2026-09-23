---
id: "Q-2025S-FINAL-P09"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 12
question_number: "9"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Binomial Coefficients - 二项式系数]]"]
concepts: ["[[Binomial Coefficients - 二项式系数]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 4
difficulty_basis: "Reorder a weighted minimum sum into tails and apply the hockey-stick identity twice."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [12]
marks: 7
---
# Q-2025S-FINAL-P09

## Source

[[2025 Spring Final]]; printed item 9; 7 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=12]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=12]]

## Question

Consider all 1000-element subsets of the set $\{1,2,3,\ldots,2022\}$. From each such subset, choose the least element. Find the sum of all these least elements.
Hint: You can use the Hockey Stick Identity introduced in class without proving it:
$$\binom{n+1}{r+1}=\sum_{j=r}^n\binom jr$$

## 中文解析

把最小值 $m$ 拆成 $m$ 个一，交换求和次序后每一层都是可用 hockey stick 的和。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\binom{2023}{1001}$。

**推导。** 若最小元素为 $m$，其余九百九十九个元素须从 $m+1,\ldots,2022$ 中选，所以有 $\binom{2022-m}{999}$ 个子集，且 $1\le m\le1023$。所求和为 $\sum_{m=1}^{1023}m\binom{2022-m}{999}$。将 $m=\sum_{t=1}^m1$ 代入并交换有限和，得到 $\sum_{t=1}^{1023}\sum_{m=t}^{1023}\binom{2022-m}{999}$。内和用 hockey stick 等于 $\binom{2023-t}{1000}$，外和从上标一千至二〇二二再用一次同一恒等式，得到 $\binom{2023}{1001}$。每个子集确实在前 $m$ 层各贡献一，故没有遗漏权重。

## Common Mistakes

- 子集最小值最大是一千零二十三，而不是二〇二二，否则剩余元素不够。
- 直接把二项式系数相加只数子集数量，必须保留最小元素的权重。

## Connections

- [[Topic - Counting - 计数]]
- [[Subtopic - Binomial Coefficients - 二项式系数]]
- [[Binomial Coefficients - 二项式系数]]
- [[Combinatorial Case Analysis - 组合分类法]]

Reorder a weighted minimum sum into tails and apply the hockey-stick identity twice.
