---
id: "Q-2023F-MID-P06"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf"
source_page: 13
question_number: "6"
year: 2023
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Inclusion-Exclusion - 容斥原理]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Inclusion-Exclusion - 容斥原理]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Inclusion-Exclusion Method - 容斥方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Translate three upper-bound violations into shifted stars-and-bars counts, adding pairwise intersections back and ruling out the triple intersection."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [13,14]
marks: 12
---
# Q-2023F-MID-P06

## Source

[[2023 Fall Midterm]]; printed item 6; 12 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=13]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=13]] ![[knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf#page=14]]

## Question

How many solutions are there for the equation $a+b+c=13$, where $a,b,c$ are nonnegative integers and $a\le4$, $b\le5$, $c\le6$. Use the inclusion-exclusion principle to calculate the result instead of enumerating the values of possible solutions.

## 中文解析

先不限制上界，用 stars and bars 得到全集。坏事件从 a≥5、b≥6、c≥7 开始，平移变量后计算单个和交集的大小；三重违例最少需要十八，已经超过十三，所以该交集为空。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 共有六个解。

**推导。**

1. 不限制上界时，stars and bars 给出非负解全集大小 $\binom{15}2=105$。记坏事件 $A:a\ge5$、$B:b\ge6$、$C:c\ge7$；分别减去下限后，总和变为八、七、六，所以大小分别为 $\binom{10}2=45$、$\binom92=36$、$\binom82=28$。
2. 双重违例分别减去 $5+6,5+7,6+7$，剩余总和为二、一、零，故交集大小分别是 $\binom42=6$、$\binom32=3$、$\binom22=1$。三重违例至少要求总和十八，超过十三，三重交集为空。
3. 用 inclusion-exclusion 从全集扣除坏事件并加回重叠：
   $$105-45-36-28+6+3+1-0=6.$$
   阈值从上界的下一整数开始，因此没有误排除 $a=4,b=5,c=6$ 这些合法边界；计算也没有枚举解来代替指定方法。

### English solution

**Answer.** $6$.

**Derivation/proof.** Let U be all nonnegative solutions and A, B, C the violations $a\ge5$, $b\ge6$, $c\ge7$. Stars and bars gives $|U|=\binom{15}2$. Shifting the violating variables gives $|A|=\binom{10}2$, $|B|=\binom92$, $|C|=\binom82$. The double shifts give $|A\cap B|=\binom42$, $|A\cap C|=\binom32$, and $|B\cap C|=\binom22$. The triple shift would leave total $13-5-6-7<0$, so its count is zero. Inclusion-exclusion therefore gives $105-45-36-28+6+3+1=6$, with all forbidden overlaps accounted for.

## Common Mistakes

- 用 a≥4 当作违例会把允许的边界值扣掉。 / Violations begin one beyond the upper bounds.
- 只列出六个三元组不满足题目要求的方法。 / Use the requested inclusion-exclusion calculation.

## Connections

- [[Subtopic - Inclusion-Exclusion - 容斥原理]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Inclusion-Exclusion - 容斥原理]]
- [[Combinatorial Selection - 组合选择]]
- [[Inclusion-Exclusion Method - 容斥方法]]

Translate three upper-bound violations into shifted stars-and-bars counts, adding pairwise intersections back and ruling out the triple intersection.
