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

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=6|physical PDF page 6]].

(b) We can see that the for $i=1$, the second loops cost is $n-1$, for $i=2$ the second loop cost is $n-2$ and $\cdots$. So we can conclude that the total cost is $(n-1)+(n-2)+\cdots+0=\frac{n\cdot(n-1)}2$ which is $O(n^2)$.

## Supplementary Explanation

**Answer.** The tightest big-O is $O(n^2)$; the running time is $\Theta(n^2)$.

**Derivation/proof.** For fixed i, the inner loop runs from $i+1$ to n, making $n-i$ comparisons. Their sum is $\sum_{i=1}^{n-1}(n-i)=(n-1)+(n-2)+\cdots+1=n(n-1)/2$. Each comparison and possible increment costs constant time, while initialization and outer-loop overhead are at most linear. The time is bounded above and below by positive multiples of $n^2$. All comparisons must still execute even when the array is already sorted.

## Connections

- [[Topic - Algorithms - 算法]]
- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Algorithm Trace and Invariant Method - 算法跟踪与不变量方法]]

Count all inner-loop iterations of the triangular inversion enumeration.
