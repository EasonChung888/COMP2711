---
id: "Q-2022-MID-P10-c-worst"
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
difficulty: 3
difficulty_basis: "The larger remaining interval shrinks by a constant fraction, and repeated right branches attain logarithmic depth."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
---
# Q-2022-MID-P10-c-worst

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=5]]

## Question

Determine the worst-case running time using the $\Theta$ notation.

Shared context: [[STEM-2022-MID-P10-c - Shared Problem Prompt]].

## 中文解析

每次最坏保留约四分之三的区间，仍是固定比例缩小，所以层数是对数级。取比所有元素都大的目标可持续走较大右区间，证明对数下界；取整误差只影响常数，不改变阶。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $\Theta(\log n)$.

**Derivation/proof.** For interval length L=j−i+1, m=i+floor((L−1)/4). The larger right remainder has length L−1−floor((L−1)/4), at most3L/4, so O(log n) iterations suffice. A target larger than every entry always takes this larger side, whose length is at least3(L−1)/4. Thus reaching constant size requires Ω(log n) iterations. Constant work per probe yields Θ(log n); the logarithm base4/3 affects only a constant.

### 中文解答

**推导。** 令当前区间长度 $L=j-i+1$，则探测点 $m=i+\lfloor(L-1)/4\rfloor$。左侧剩 $\lfloor(L-1)/4\rfloor$ 项，右侧剩 $L-1-\lfloor(L-1)/4\rfloor$ 项；后者较大且不超过 $3L/4$。每次未命中都以固定比例缩小，所以总轮数为 $O(\log n)$。为给匹配下界，取大于列表全部元素的目标，每次都走右侧，而右侧长度至少 $3(L-1)/4$。由 $L_{t+1}+3\ge\tfrac34(L_t+3)$，归纳得 $L_t+3\ge(3/4)^t(n+3)$；终止时 $L_t=0$，因此 $t\ge\log_{4/3}((n+3)/3)=\Omega(\log n)$。每轮工作为常数，故最坏时间 $\Theta(\log n)$。取整只改变常数边界，不能把它说成每次都精确删四分之一。

## Common Mistakes

- 认为只有一半分割才是对数时间。
- 把保留四分之三误读为只减少固定四分之一个元素。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
