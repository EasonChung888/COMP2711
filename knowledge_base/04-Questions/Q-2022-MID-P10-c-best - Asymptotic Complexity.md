---
id: "Q-2022-MID-P10-c-best"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 4
question_number: "10(c)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 1
difficulty_basis: "The first quartile probe can equal the target and terminate immediately."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
---
# Q-2022-MID-P10-c-best

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=5]]

## Question

Determine the best-case running time using the $\Theta$ notation.

Shared context: [[STEM-2022-MID-P10-c - Shared Problem Prompt]].

## 中文解析

把目标设成第一次四分位探测的位置，立即匹配并返回，所需操作数与 n 无关。探测点不是中位数只影响持续搜索时的缩小比例，不影响一次就命中的最好情况。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $\Theta(1)$.

**Derivation/proof.** The first probe is m=floor(3/4+n/4) with i=1,j=n. Choose x=a_m. The equality branch returns at that first iteration, after only constant initialization and arithmetic. The position being a quartile rather than the median does not prevent an immediate successful match, so the best case is constant.

### 中文解答

**推导。** 初始 $i=1,j=n$，第一次探测下标为 $m=\lfloor3/4+n/4\rfloor$。在有序列表中选目标 $x=a_m$，相等判断立即返回，只执行常数次初始化、下标运算和比较。因此最好时间为 $\Theta(1)$。四分位而非中位数的选择影响后续递归比例，不影响这次立即命中的合法最好输入。

## Common Mistakes

- 把四分位探测误判为至少四次比较。
- 忽略相等分支的立即返回。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
