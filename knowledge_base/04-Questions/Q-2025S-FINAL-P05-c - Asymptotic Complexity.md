---
id: "Q-2025S-FINAL-P05-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 6
question_number: "5(c)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["algorithm-analysis"]
difficulty: 4
difficulty_basis: "Unroll a square-root recurrence to a logarithmic-logarithmic depth and retain the leaf coefficient."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
solution_page: [7]
verification_status: "verified"
marks: 5
---
# Q-2025S-FINAL-P05-c

## Source

[[2025 Spring Final]]; printed item 5(c); 5 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=6]]

Official answer and the secondary intermediate correction: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=7]]

Source correction: Page 7 replaces the finite exponent sum by its infinite limit and writes $T(n)=n+n\log\log n$. The exact leaf coefficient is n/2, not n; n=4 gives 6 rather than 8. The printed requested O(n log log n) conclusion remains correct, since n is a valid upper bound for n/2. This secondary equality slip is disclosed while retaining official provenance and the complete finite-sum derivation.

## Question

(c) [5 pts] Derive the tightest possible asymptotic upper bound for the following recurrence $T(n)$, assuming $n$ is a power of a power of 2. Do not use the master theorem. Show all your steps to receive full credit.
$$T(2)=1,\qquad T(n)=\sqrt nT(\sqrt n)+n\quad\text{for }n>2.$$

## 中文解析

每一展开层贡献相同的 $n$，停止层数由连续开平方降到二决定。

## Detailed Solution

Provenance: published official asymptotic answer, independently checked; the secondary exact-coefficient slip is retained in Source.

### 中文解答

**答案。** $T(n)=n/2+n\log_2\log_2 n$，故最紧上界为 $O(n\log\log n)$。

**推导。** 展开 $j$ 层得 $T(n)=n^{1/2+1/4+\cdots+1/2^j}T(n^{1/2^j})+jn$。这一式中每层新增项为 $n^{1-1/2^j}n^{1/2^j}=n$。令 $n=2^{2^k}$，则 $n^{1/2^k}=2$，所以 $k=\log_2\log_2 n$。指数和为 $1-1/2^k$，叶项系数为 $n^{1-1/2^k}=n/2$，乘 $T(2)=1$ 后得到 $T(n)=n/2+kn$。当 $k\to\infty$，这为 $\Theta(n\log\log n)$。例如 $n=4$ 时原递推给 $T(4)=2\cdot1+4=6$，修正式也给六；原答案的 $n+n\log\log n$ 则给八，揭示其常数项错误。

## Common Mistakes

- 每次规模开平方，深度是 log log n，不能当成普通二分递归的 log n。
- 叶项为 $n/2$，不能把几何级数有限和误当成无限和后得到 $n$。

## Connections

- [[Topic - Algorithms - 算法]]
- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Recurrence-Solving Method - 递推求解法]]

Unroll a square-root recurrence to a logarithmic-logarithmic depth and retain the leaf coefficient.
