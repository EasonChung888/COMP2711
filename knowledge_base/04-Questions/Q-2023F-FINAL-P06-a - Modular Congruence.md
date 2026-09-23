---
id: "Q-2023F-FINAL-P06-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Final.pdf"
source_page: 10
question_number: "6(a)"
year: 2023
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Counting Method - 计数方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Pigeonholes modulo three and parity force separate factors of three and four into the six-difference product."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [10]
marks: 6
---
# Q-2023F-FINAL-P06-a

## Source

[[2023 Fall Final]]; printed item 6(a); 6 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=10]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=10]]

## Question

Let $a,b,c,d$ be integers. Show that the product
$$(a-b)(a-c)(a-d)(b-c)(b-d)(c-d)$$
is divisible by 12.

(Hint: You might want to prove that there exist at least two numbers among $a,b,c,d$ such that they have the same remainder mod 3 and this might help you with the main proof)

## 中文解析

要得到十二，应分别证明被三和四整除。四个整数放入三个模三余数类，至少一对差含因子三；奇偶分类又保证至少两个不同差为偶数，提供两个因子二，最后用互质性合并。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 六个差的乘积可被十二整除。

**推导。**

1. 四个整数模三只有三个余数类，由 pigeonhole principle 必有两数同余，它们之差是六个因子之一且被三整除，因此整个乘积有因子三。
2. 再证明有因子四。若四数是两偶两奇，偶数对之差与奇数对之差分别提供一个偶因子；若不是这种分布，就至少三数同奇偶，它们之间至少有两个不同的偶数差因子。因此任何情形都有两个偶因子，乘积被四整除。
3. 三与四互素，合起来得到十二整除整个乘积。如果存在重复整数，其中某个差为零，乘积为零仍被十二整除；题目并未要求四数互异，所以这一边界也必须包括。这里需要两个偶因子，单有一个偶因子只能保证因子二而不足以得到四。

### English solution

**Answer.** $12\mid(a-b)(a-c)(a-d)(b-c)(b-d)(c-d)$.

**Derivation/proof.** Among four integers, two share a residue modulo 3, so their difference is a factor divisible by 3. For parity, either there are two even and two odd numbers, giving one even difference in each pair, or at least three integers have the same parity, giving at least two distinct even differences among those three. Thus two factors supply a factor of 4. Since $\gcd(3,4)=1$, the product is divisible by 12. Repeated integer values cause a zero factor, and 12 divides zero, so distinctness is not required.

## Common Mistakes

- 只有一个偶数差只能保证因子二，未必有因子四。 / Exhibit two even factors.
- 题目没有要求四个整数互异，重复值也必须覆盖。 / Zero products satisfy divisibility.

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Subtopic - Basic Counting - 基本计数]]

- [[Modular Congruence - 同余]]
- [[Counting Principles - 计数原理]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Counting Method - 计数方法]]

Pigeonholes modulo three and parity force separate factors of three and four into the six-difference product.
