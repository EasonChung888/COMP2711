---
id: "Q-2022-FINAL1-P04"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2022-final-part-1.pdf"
source_page: 3
question_number: "4"
year: 2022
term: "spring"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]","[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]","[[Modular Congruence - 同余]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Multiply the inductive expression by five and isolate a remainder with factor twelve."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 8
---
# Q-2022-FINAL1-P04

## Source

![[knowledge_base/past_paper/2022-final-part-1.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2022-final-part-1.pdf#page=3]]

## Question

Use induction to prove that, for any integer $n\ge1$, $5^n+2\cdot11^n$ is divisible by 3.

## 中文解析

归纳步骤把下一阶拆成五倍上一阶，再加十二倍十一的 k 次方。前者由归纳假设是三的倍数，后者显然也是，因而新一阶成立。按要求用归纳，不能只给一个未注明方法的同余观察。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $3\mid(5^n+2\cdot11^n)$ for all integers $n\ge1$.

**Derivation/proof.** Base n=1:5+2·11=27, divisible by 3. Assume 5^k+2·11^k=3t for some integer t. Then $5^{k+1}+2\cdot11^{k+1}=5(5^k+2\cdot11^k)+12\cdot11^k=15t+12\cdot11^k=3(5t+4\cdot11^k)$. The final parenthesis is an integer, proving the next instance. Ordinary induction completes the required divisibility proof.

### 中文解答

**推导。** 按题意用归纳法。基础 $n=1$ 时 $5+2\cdot11=27=3\cdot9$，命题成立。归纳假设对某个 $k\ge1$ 有 $5^k+2\cdot11^k=3t$，其中 $t$ 为整数。下一项拆为

$$5^{k+1}+2\cdot11^{k+1}=5(5^k+2\cdot11^k)+12\cdot11^k$$
$$=15t+12\cdot11^k=3(5t+4\cdot11^k).$$

括号内是整数，所以它也被三整除，完成 $k$ 到 $k+1$ 的推导。由数学归纳法，命题对所有整数 $n\ge1$ 成立。此分解明确使用归纳假设，不能只写模三观察代替题目指定的证明方法。

## Common Mistakes

- 只列几个 n 的检验值。
- 把剩余系数错写成六而非十二。

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Mathematical Induction - 数学归纳法]]
- [[Modular Congruence - 同余]]
- [[Induction Proof Method - 归纳证明法]]
- [[Modular Arithmetic Method - 模运算方法]]
