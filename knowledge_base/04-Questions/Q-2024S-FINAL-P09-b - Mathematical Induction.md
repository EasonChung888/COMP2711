---
id: "Q-2024S-FINAL-P09-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2024_Final.pdf"
source_page: 11
question_number: "9(b)"
year: 2024
term: "spring"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]","[[Topic - Counting - 计数]]","[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]","[[Subtopic - Binomial Coefficients - 二项式系数]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]","[[Binomial Coefficients - 二项式系数]]","[[Modular Congruence - 同余]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Induct on a rather than p and isolate the two binomial endpoint terms while invoking 9(a) only internally."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [11,12]
marks: 10
related_questions: ["[[Q-2024S-FINAL-P09-a - Binomial Coefficients]]"]
---
# Q-2024S-FINAL-P09-b

## Source

[[2024 Spring Final]]; printed item 9(b); 10 marks.

![[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=11]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=11]] ![[knowledge_base/past_paper/COMP2711_S2024_Final.pdf#page=12]]

Prerequisite context (editorial): [[Q-2024S-FINAL-P09-a - Binomial Coefficients]]. For a prime $p$ and $1\le i\le p-1$, the imported part (a) states $p\mid\binom pi$. The printed hint expressly permits using it.

## Question

(b) Let $p$ be a prime number. Use mathematical induction to prove that for any positive integer $a$, the number $a^p-a$ is divisible by $p$. In other words, you need to prove Fermat’s Little Theorem using induction on the integer $a$.
Note: If you give the number-theoretic proof of Fermat’s Little Theorem presented in class, you will receive 0 marks.
Hint: In your proof of part (b), you may find the claim given in part (a) useful. Note that in part (b), you are permitted to use this claim from part (a), even if you were unable to prove it.

## 中文解析

固定素数，对底数 a 归纳。二项式展开中间项的系数全部被 p 整除，而两个端点需要显式相消并留下归纳假设对应的差。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 对任意正整数 $a$，$p\mid a^p-a$。

**推导。** 固定素数 p。基础步 $a=1$ 时 $1^p-1=0$，显然被 p 整除。假设 $p\mid a^p-a$。二项式定理给出 $(a+1)^p-(a+1)=(a^p-a)+\sum_{i=1}^{p-1}\binom pi a^i$：展开中的常数一与减去的一相消，$a^p$ 与减去的 a 组成第一项。由 (a)，中间下标 $1\le i\le p-1$ 的每个系数被 p 整除，故求和全部被 p 整除；第一项由归纳假设被 p 整除。因此 $p\mid(a+1)^p-(a+1)$。归纳完成，整个证明没有预先使用待证的费马定理。

## Common Mistakes

- 不能直接引用费马小定理证明本题，因为这正是要用归纳建立的结论。
- 归纳变量是 a 而非素数 p；端点组合数必须单独处理。

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Subtopic - Binomial Coefficients - 二项式系数]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]

- [[Mathematical Induction - 数学归纳法]]
- [[Binomial Coefficients - 二项式系数]]
- [[Modular Congruence - 同余]]
- [[Induction Proof Method - 归纳证明法]]

Induct on a rather than p and isolate the two binomial endpoint terms while invoking 9(a) only internally.

- Prerequisite: [[Q-2024S-FINAL-P09-a - Binomial Coefficients]]: 本题导入此前提/结果以完成当前计算或证明：For a prime $p$ and $1\le i\le p-1$, the imported part (a) states $p\mid\binom pi$. The printed hint expressly permits using it.
