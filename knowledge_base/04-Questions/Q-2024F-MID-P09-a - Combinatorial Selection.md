---
id: "Q-2024F-MID-P09-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 14
question_number: "9(a)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Pair subsets of an odd-sized ground set with complements, proving exactly one member lies below half size."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [14]
marks: 7
related_questions: ["[[Q-2024F-MID-P09-b - Binomial Coefficients]]"]
---
# Q-2024F-MID-P09-a

## Source

[[2024 Fall Midterm]]; printed item 9(a); 7 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=14]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=14]]

## Question

(a) Consider the set $\{1,2,\ldots,2n-1\}$. Show that the number of subsets with at most $n-1$ elements is equal to $\frac{2^{2n-1}}2$.
Hint: Think about the size of any random subset and the size of its complement.

## 中文解析

母集合元素数为奇数，子集与补集大小和为奇数，无法同时等于一半。补集映射把小子集与大子集配成等量的两类。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 数量为 $2^{2n-1}/2=2^{2n-2}$。

**推导。** 设母集 U 有 $2n-1$ 个元素。每个子集 A 与补集 $U\setminus A$ 配对，两者大小和为 $2n-1$。若 $|A|\le n-1$，则补集至少 n 个；反之若 $|A|\ge n$，则补集至多 $n-1$ 个。补集映射做两次回到 A，而且 U 非空时没有子集等于其补集，所以所有 $2^{2n-1}$ 个子集分成不重复的二元对。每对恰一个小子集，故所需数量恰为一半。

## Common Mistakes

- 母集为奇数大小至关重要，偶数大小会有中间层需单独处理。
- 配对的两成员是互补子集，不是任意两个同大小子集。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]

- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]

Pair subsets of an odd-sized ground set with complements, proving exactly one member lies below half size.

- Used by: [[Q-2024F-MID-P09-b - Binomial Coefficients]]: 此结果在后续小题中的具体用途：Part (a) gives exactly $2^{2n-1}/2=2^{2n-2}$ subsets of $\{1,\ldots,2n-1\}$ with at most $n-1$ elements.
