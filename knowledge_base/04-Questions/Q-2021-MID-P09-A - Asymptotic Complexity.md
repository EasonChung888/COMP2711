---
id: "Q-2021-MID-P09-A"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 4
question_number: "9"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 2
difficulty_basis: "Repeated division by two scans every binary position including zeros."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 4
---
# Q-2021-MID-P09-A

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=4]]

## Question

For CountOneA’s running time, select all that apply from the list below, and briefly justify your answer.

Shared context: [[STEM-2021-MID-P09 - Shared Problem Prompt]].

## 中文解析

算法 A 每轮去掉最低一位，即使该位是零也照样执行。因此迭代次数等于二进制位数，与 log n 同阶；常数下界当然也成立，但不可能有常数上界。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** (1), (2), (3), and (5).

**Derivation/proof.** For integer n≥1, repeated floor division by two reaches zero after exactly floor(log2 n)+1 iterations, one per binary digit. Each loop iteration uses a constant number of the source's primitive operations. Thus T(n)=Θ(log n) as n grows, implying O(log n), Ω(log n), and Ω(1). It is unbounded, so O(1) and Θ(1) do not apply.

### 中文解答

**推导。** 每次循环都把 $n$ 变成 $\lfloor n/2\rfloor$，无论最低位是否为一，都会删去一个二进制位。正整数 $n$ 恰有 $\lfloor\log_2n\rfloor+1$ 位，所以恰执行这么多轮；每轮按题目的基本运算模型花常数时间。于是运行时间为 $\Theta(\log n)$，同时属于 $O(\log n)$、$\Omega(\log n)$，也有 $\Omega(1)$。位数无界，故不是 $O(1)$ 或 $\Theta(1)$。答案为(1)、(2)、(3)、(5)。

## Common Mistakes

- 以为只数一的位数就只运行那么多轮。
- 漏选较弱的 Ω(1)。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
