---
id: "Q-2017-FINAL-P04-b-time"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 6
solution_page: [6,7]
question_number: "4(b)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]","[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Cryptography - 密码学]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]","[[Modular Congruence - 同余]]","[[RSA Cryptosystem - RSA 密码系统]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]","[[Modular Arithmetic Method - 模运算方法]]","[[RSA Calculation Method - RSA 计算方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 3
difficulty_basis: "Euclidean remainders at least halve every two steps, with Fibonacci inputs realizing logarithmic iterations."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-FINAL-P04-b-time

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=6]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=6]] ![[knowledge_base/past_paper/2017-final.pdf#page=7]]

## Question

What is the worst case running time of your algorithm in terms of $T$ for a single $d$? Express your time in big-$O$ notation.

Shared context: [[STEM-2017-FINAL-P04 - Shared Problem Prompt]].

## 中文解析

相隔两轮的余数至少缩小一半，因此从 T 降到一需要对数数量的轮次。斐波那契相邻项是慢例子，说明这一数量级不能一般改成常数。这里按试卷的每次整数运算常数成本来计。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 6, 7. The Chinese derivation expands the reasoning.

**Answer.** $O(\log T)$ arithmetic operations under the exam's unit-cost model.

**Derivation/proof.** For successive positive remainders $a>b>r$, write $a=qb+r$ with $q\ge1$ and $r<b$. Hence $a\ge b+r>2r$: after two remainder steps the value more than halves. Starting below or at $T$ gives at most $2\log_2T+O(1)$ steps. Consecutive Fibonacci numbers make the quotient repeatedly one and require logarithmically many steps, so this is the worst-case order.

### 中文解答

**推导。** 考虑连续的正余数 $a>b>r$，其中 $a=qb+r,q\ge1$。因为 $b>r$，有 $a\ge b+r>2r$，所以跨两次余数更新后规模至少减半。初始数不大于 $T$，故最多 $2\log_2T+O(1)$ 次更新，每次按算术操作模型计常数，得到 $O(\log T)$。连续斐波那契数使商反复为一并给出对数次数，说明这一最坏阶确实可达；此处不把大整数位运算冒充同一成本模型。

## Common Mistakes

- 把循环次数误写成 T。
- 把位运算成本与题目采用的算术操作模型混淆。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Cryptography - 密码学]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Modular Congruence - 同余]]
- [[RSA Cryptosystem - RSA 密码系统]]
- [[Asymptotic Bound Method - 渐近界方法]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[RSA Calculation Method - RSA 计算方法]]
