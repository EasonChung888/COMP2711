---
id: "Q-2025S-FINAL-P05-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 6
question_number: "5(b)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Algorithm Trace and Invariant Method - 算法跟踪与不变量方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 2
difficulty_basis: "Count all inner-loop iterations of the triangular inversion enumeration."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [6]
marks: 4
---
# Q-2025S-FINAL-P05-b

## Source

[[2025 Spring Final]]; printed item 5(b); 4 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=6]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=6]]

## Question

(b) [4 pts] Consider an array $A$ with $n$ elements. We call a pair $(i,j)$ an inversion, if $i<j$ and $A[i]>A[j]$. The following algorithm counts the number of inversions for array $A$. What is its time complexity? Write your answer in the tightest big-O notation with respect to $n$.

Algorithm 1 CountInversions(n)

~~~text
inversions = 0
for i = 1 to i = n−1 do
    for j = i+1 to j = n do
        if A[j] < A[i] then
            inversions = inversions+1
        end if
    end for
end for
Return inversions
~~~

## 中文解析

是否发生逆序只影响常数次加法；双层循环对所有下标对都检查一次。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 最紧 big-O 为 $O(n^2)$，实际为 $\Theta(n^2)$。

**推导。** 固定外层 $i$，内层从 $i+1$ 到 $n$ 共执行 $n-i$ 次比较。总比较次数为 $\sum_{i=1}^{n-1}(n-i)=(n-1)+(n-2)+\cdots+1=n(n-1)/2$。每次比较及可能的计数递增都为常数时间，初始化和外层控制开销不超过线性，因此总时间被常数倍 $n^2$ 上下界夹住，为 $\Theta(n^2)$，最紧 big-O 是 $O(n^2)$。即使数组已排序，所有比较仍须执行。

## Common Mistakes

- 运行时间取决于比较次数，不能因为没有逆序就说算法只需常数时间。
- 内循环不是每次都长 $n$，精确总数应为三角和而非 $n^2$ 次。

## Connections

- [[Topic - Algorithms - 算法]]
- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Algorithm Trace and Invariant Method - 算法跟踪与不变量方法]]

Count all inner-loop iterations of the triangular inversion enumeration.
