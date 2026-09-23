---
id: "Q-2024S-FINAL-P09-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Final.pdf"
source_page: 11
question_number: "9(a)"
year: 2024
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]","[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Binomial Coefficients - 二项式系数]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Binomial Coefficients - 二项式系数]]","[[Modular Congruence - 同余]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Use integrality of the binomial coefficient and prime divisibility with a denominator coprime to p."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [11,12]
marks: 5
related_questions: ["[[Q-2024S-FINAL-P09-b - Mathematical Induction]]"]
---
# Q-2024S-FINAL-P09-a

## Source

[[2024 Spring Final]]; printed item 9(a); 5 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=11]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=11]] ![[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=12]]

## Question

(a) Let $p$ be a prime number and $k$ be an integer such that $1\le k\le p-1$. Prove that the binomial coefficient $\binom pk$ is divisible by $p$.

## 中文解析

阶乘公式的分子包含素数 p，分母的所有因子却都严格小于 p。利用组合数为整数和素数整除性质，证明分子中的 p 无法约掉。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $p\mid\binom pk$ 对 $1\le k\le p-1$ 成立。

**推导。** 令 $C=\binom pk\in\mathbb Z$，则 $C\,k!(p-k)!=p!$。右侧被 p 整除。由于 $k,p-k<p$，分母中的所有正因子均介于一与 $p-1$，没有任何一个被 p 整除；素数整除乘积性质遂给出 $p\nmid k!(p-k)!$。再应用同一性质于 $C\,k!(p-k)!$，得 $p\mid C$。边界 $k=0,p$ 时组合数为一，说明题目排除这两值不可省略。

## Common Mistakes

- 分母中没有单个因子 p 的理由依赖 p 为素数，合数时不能直接照搬。
- $\binom p0$ 与 $\binom pp$ 不被 p 整除，不能扩大下标范围。

## Connections

- [[Subtopic - Binomial Coefficients - 二项式系数]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]

- [[Binomial Coefficients - 二项式系数]]
- [[Modular Congruence - 同余]]
- [[Proof Method - 证明方法]]

Use integrality of the binomial coefficient and prime divisibility with a denominator coprime to p.

- Used by: [[Q-2024S-FINAL-P09-b - Mathematical Induction]]: 此结果在后续小题中的具体用途：For a prime $p$ and $1\le i\le p-1$, the imported part (a) states $p\mid\binom pi$. The printed hint expressly permits using it.
