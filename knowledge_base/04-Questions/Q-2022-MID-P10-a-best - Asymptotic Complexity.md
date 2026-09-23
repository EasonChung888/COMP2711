---
id: "Q-2022-MID-P10-a-best"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 4
question_number: "10(a)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 1
difficulty_basis: "Even an initial maximum cannot bypass the remaining comparisons."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
---
# Q-2022-MID-P10-a-best

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=5]]

## Question

Determine the best-case running time using the $\Theta$ notation.

Shared context: [[STEM-2022-MID-P10-a - Shared Problem Prompt]].

## 中文解析

即使第一个数已是最大值，后面 n-1 次比较也全部照常执行，只是赋值分支不走。因此最好情况仍为线性；省去若干常数代价赋值不会改变渐近阶。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $\Theta(n)$.

**Derivation/proof.** If the first element is already maximal, no update is executed, but the for-loop still compares max with each of the remaining n−1 elements. Each comparison and loop step takes constant time, so even the fastest input costs Θ(n). The algorithm contains no early return based on discovering the maximum.

### 中文解答

**推导。** 即使首项 $a_1$ 已经是最大值，循环仍对 $i=2,\ldots,n$ 全部执行比较，恰有 $n-1$ 次。最好输入只是让更新赋值都不发生，并没有提前返回分支。每轮比较和循环控制为常数时间，故至少线性时间；全程也至多常数乘 $n$，所以最好时间为 $\Theta(n)$。

## Common Mistakes

- 把没有更新当成没有循环。
- 认为最大值在第一位就可提前返回。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
