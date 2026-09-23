---
id: "Q-2021-FINAL1-P06"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2021-final-part-1.pdf"
source_page: 3
question_number: "6"
year: 2021
term: "spring"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Recurrence Relations - 递推关系]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Four parity-preserving digits and two parity-flipping digits give a first-order counting recurrence."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 10
related_questions: ["[[Q-2021-FINAL2-P01 - Recurrence Relations]]"]
---
# Q-2021-FINAL1-P06

## Source

![[knowledge_base/past_paper/2021-final-part-1.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2021-final-part-1.pdf#page=4]]

## Question

How many E-Strings of length $n$ are there? Give a closed-form solution. [Hint: use a recurrence.]

Shared context: [[STEM-2021-FINAL1-P06 - Shared Problem Prompt]].

## 中文解析

六个数字中四个偶数、两个奇数，添加奇数会翻转数位和的奇偶性。把所有前缀减去偶和前缀得到奇和前缀，建立一阶递推。空串提供 E0=1，再代回闭式验证，避免误判偶和与奇和各一半。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $E_n=(6^n+2^n)/2$.

**Derivation/proof.** There are four even digits and two odd digits. With E0=1, append an even digit to an even-sum prefix (4E_(n−1) choices) or an odd digit to an odd-sum prefix (2(6^(n−1)−E_(n−1)) choices). Thus E_n=2E_(n−1)+2·6^(n−1). The proposed closed form equals 1 at n=0. Substitution gives 2[(6^(n−1)+2^(n−1))/2]+2·6^(n−1)=3·6^(n−1)+2^(n−1)=(6^n+2^n)/2. This proves it by recurrence induction; E1=4 also checks the alphabet count.

### 中文解答

**推导。** 六个允许数字中，$0,2,4,8$ 是四个偶数，$7,9$ 是两个奇数。令 $E_n$ 为长度 $n$ 的偶和串数，空串给 $E_0=1$。长度 $n-1$ 的全部串有 $6^{n-1}$ 个，故奇和串为 $6^{n-1}-E_{n-1}$。在偶和前缀后加偶数，或奇和前缀后加奇数，得到

$$E_n=4E_{n-1}+2(6^{n-1}-E_{n-1})=2E_{n-1}+2\cdot6^{n-1}.$$

展开至基础项，$E_n=2^nE_0+\sum_{i=1}^n2^i6^{n-i}=2^n+2^n\sum_{j=0}^{n-1}3^j$。用等比和消去求和，$E_n=2^n+2^n(3^n-1)/2=(6^n+2^n)/2$。闭式在 $n=0$ 给一、$n=1$ 给四，符合空串和允许偶数字；最终答案无求和符号，满足试卷要求。

## Common Mistakes

- 把两种奇偶前缀都当作各占一半。
- 忘记空串属于 E-String。

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Recurrence Relations - 递推关系]]
- [[Counting Principles - 计数原理]]
- [[Recurrence-Solving Method - 递推求解法]]
- [[Counting Method - 计数方法]]

Variant/contrast: [[Q-2021-FINAL2-P01 - Recurrence Relations]] — Both count constrained strings by a recurrence: digit-sum parity versus a forbidden adjacent pair.
