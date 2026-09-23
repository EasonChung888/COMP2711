---
id: "Q-2022-MID-P10-b-best"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 4
question_number: "10(b)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 1
difficulty_basis: "Matching the first list element immediately returns after one test."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
---
# Q-2022-MID-P10-b-best

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=5]]

## Question

Determine the best-case running time using the $\Theta$ notation.

Shared context: [[STEM-2022-MID-P10-b - Shared Problem Prompt]].

## 中文解析

最好情况下目标就是第一项，一次比较后 return 直接结束整个程序。不是仅结束当前 if，因此后面的列表都不用读，时间为常数；非空输入至少要做这一次检查。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $\Theta(1)$.

**Derivation/proof.** Choose an input with x=a1. The first comparison succeeds and the return exits the entire procedure, so no later list element is inspected. A constant number of initialization, comparison and return operations suffice. At least one comparison is required in the displayed nonempty-input procedure, giving a matching constant lower bound.

### 中文解答

**推导。** 取目标 $x=a_1$，第一次比较即相等，执行 return 后整个查找结束，后续元素都不读取。初始化、一次比较和返回只需常数操作；非空输入也至少要作一次比较，因而上下界均为常数，最好时间 $\Theta(1)$。这里 return 不是只退出 if，而是退出程序。

## Common Mistakes

- 把 return 看成只跳过本轮。
- 仍强行遍历剩余元素。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
