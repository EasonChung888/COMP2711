---
id: "Q-2023F-FINAL-P10"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Final.pdf"
source_page: 16
question_number: "10"
year: 2023
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]","[[Algorithm Correctness - 算法正确性]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]","[[Algorithm Trace and Invariant Method - 算法跟踪与不变量方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 3
difficulty_basis: "An all-distinct input forces comparison of every later element with every earlier one, giving an exact triangular count and tight quadratic bound."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [16]
marks: 6
---
# Q-2023F-FINAL-P10

## Source

[[2023 Fall Final]]; printed item 10; 6 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=16]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=16]]

## Question

Analyze the worst-case time complexity of the following algorithm for finding the first term of a sequence of integers equal to some previous term.

~~~text
procedure find duplicate(a₁, a₂, ..., aₙ: integers)
    location := 0 {no match found yet}
    i := 2
    while i ≤ n and location = 0
        j := 1
        while j < i and location = 0
            if aᵢ = aⱼ then location := i
            else j := j + 1
        i := i + 1
    return location
{location is the subscript of the first value that repeats a
previous value in the sequence and is 0 if there is no such
value}
~~~

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=16|physical PDF page 16]].

> The worst case is that in which we do not find any term equal to some previous term. In that case, we need to go through all the terms $a_2$ through $a_n$, and for each of those, we need to go through all the terms occurring prior to that term. Thus the inner loop of our algorithm is executed once for $i=2$ (namely for $j=1$), twice for $i=3$ (namely for $j=1$ and $j=2$), three times for $i=4$, and so on, up to $n-1$ times for $i=n$. Thus the number of comparisons that need to be made in the inner loop is $1+2+3+\cdots+(n-1)$. This sum is $(n-1)(n-1+1)/2$, which is clearly $O(n^2)$ but no better. Bookkeeping details do not increase this estimate.

## Supplementary Explanation

**Answer.** Worst-case time is $\Theta(n^2)$, with exactly $n(n-1)/2$ equality comparisons on an all-distinct input.

**Derivation/proof.** Choose an input with all n integers distinct. Then location stays zero, the outer loop visits every $i=2,\ldots,n$, and the inner loop compares $a_i$ with all $i-1$ earlier elements. The equality-comparison count is $\sum_{i=2}^n(i-1)=n(n-1)/2$. For any input, early discovery of a duplicate can only stop comparisons sooner, so this is also an upper bound. Each comparison and update takes constant time, with at most linear extra outer-loop bookkeeping, giving both upper and lower quadratic bounds. The official answer's O(n²) “but no better” is expressed here as the tight Θ(n²).

The exact comparison count is $\sum_{i=2}^n(i-1)=n(n-1)/2$. All-distinct inputs give an attainable quadratic lower bound, and the same expression bounds the comparisons above for every input. Thus the worst-case running time is $\Theta(n^2)$. For $n=0$ or $n=1$, no equality comparison occurs.

## Connections

- [[Subtopic - Algorithms - 算法]]

- [[Asymptotic Complexity - 渐近复杂度]]
- [[Algorithm Correctness - 算法正确性]]
- [[Asymptotic Bound Method - 渐近界方法]]
- [[Algorithm Trace and Invariant Method - 算法跟踪与不变量方法]]

An all-distinct input forces comparison of every later element with every earlier one, giving an exact triangular count and tight quadratic bound.
