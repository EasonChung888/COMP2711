---
id: "Q-2020-FINAL1-P04-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-1.pdf"
source_page: 3
question_number: "4(c)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Any two digits determine exactly one allowed third digit modulo nine."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 7
---
# Q-2020-FINAL1-P04-c

## Source

![[knowledge_base/past_paper/2020-final-part-1.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-1.pdf#page=3]]

Source correction: PDF page3 first solution writes n=100x_1+10x_2+x_3, but immediately indexes its digit restriction by i=0,1,2. The intended digit indices are i=1,2,3, as correctly printed in the alternative solution on the same page. Correct only this index list; both official counts1+52+28 and9×9 equal81.

## Question

$n$ is divisible by 9 but it has no digit 9?

Shared context: [[STEM-2020-FINAL1-P04 - Shared Problem Prompt]].

## 中文解析

补前导零把所有小于一千的数统一成三位，不会违反“不含九”。模九时整数与数位和同余；前两位任选九个合法数字后，第三位有唯一的模九代表元，因此是九乘九。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $81$.

**Derivation/proof.** Represent each integer uniquely as a three-digit string $abc$ with leading zeros allowed. This does not introduce any digit 9. Each digit lies in {0,…,8}. Since $100\equiv10\equiv1\pmod9$, divisibility is $a+b+c\equiv0$. For each of the 9² choices of a,b there is exactly one c in {0,…,8} satisfying this congruence. Therefore 81 strings, including 000, qualify.

### 中文解答

**推导。** 把区间内整数唯一补成三位十进制串 $x_1x_2x_3$，允许前导零。没有数字九就是每位在 $\{0,1,\ldots,8\}$，而 $100\equiv10\equiv1\pmod9$，所以九整除该数等价于 $x_1+x_2+x_3\equiv0\pmod9$。前两位有 $9\cdot9$ 种选择；每选定一对，第三位须满足 $x_3\equiv-x_1-x_2\pmod9$，在 $0$ 至 $8$ 中恰有唯一解。因此共有 $9^2=81$ 个，包括 $000$ 对应的零。补前导零不引入数字九，所以没有改变原条件。

## Common Mistakes

- 排除前导零或零本身。
- 误认为第三位还有九个独立选择。

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Modular Congruence - 同余]]
- [[Counting Principles - 计数原理]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Counting Method - 计数方法]]
