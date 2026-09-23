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

## 中文解析

worst case 可以取所有元素互不相同，让 location 始终为零，两个循环不会提前结束。第 i 个元素要与前 i−1 项比较，累加成三角形数；还需说明其他执行不会比这个更多，才能得到紧确界。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** Worst-case 为 $\Theta(n^2)$；全异输入恰作 $n(n-1)/2$ 次相等比较。

**推导。**

1. 取所有 $n$ 个整数两两不同的输入，任何比较都找不到匹配，因此 location 始终为零。外层依次访问 $i=2,\ldots,n$，每次内层都需比较 $a_i$ 与全部 $i-1$ 个更早元素。
2. 相等比较总数为 $\sum_{i=2}^n(i-1)=1+2+\cdots+(n-1)=n(n-1)/2$。这给出一个真实可达到的二次下界，而非仅从“两层循环”猜测。
3. 对任意输入，发现重复只会提前停止，不会作比全异情况更多的比较，所以同一表达式也给出比较数上界。每次比较及更新为常数时间，额外外层开销至多线性，故上下界合为 $\Theta(n^2)$。这与原解答的 $O(n^2)$ 且不可改善的表述一致；$n=0,1$ 时比较数为零也符合公式。

### English solution

**Answer.** Worst-case time is $\Theta(n^2)$, with exactly $n(n-1)/2$ equality comparisons on an all-distinct input.

**Derivation/proof.** Choose an input with all n integers distinct. Then location stays zero, the outer loop visits every $i=2,\ldots,n$, and the inner loop compares $a_i$ with all $i-1$ earlier elements. The equality-comparison count is $\sum_{i=2}^n(i-1)=n(n-1)/2$. For any input, early discovery of a duplicate can only stop comparisons sooner, so this is also an upper bound. Each comparison and update takes constant time, with at most linear extra outer-loop bookkeeping, giving both upper and lower quadratic bounds. The official answer's O(n²) “but no better” is expressed here as the tight Θ(n²).

## Common Mistakes

- 看到两个循环就直接乘 n²，未说明循环边界和最坏输入，不算完整分析。 / Derive the triangular count.
- 有重复时提前退出可能更快，不应拿最好情况代表 worst case。 / Exhibit an input attaining the bound.

## Connections

- [[Subtopic - Algorithms - 算法]]

- [[Asymptotic Complexity - 渐近复杂度]]
- [[Algorithm Correctness - 算法正确性]]
- [[Asymptotic Bound Method - 渐近界方法]]
- [[Algorithm Trace and Invariant Method - 算法跟踪与不变量方法]]

An all-distinct input forces comparison of every later element with every earlier one, giving an exact triangular count and tight quadratic bound.
