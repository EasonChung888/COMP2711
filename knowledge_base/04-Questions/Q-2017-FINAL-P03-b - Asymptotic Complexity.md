---
id: "Q-2017-FINAL-P03-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 5
solution_page: [5]
question_number: "3(b)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]","[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["algorithm-analysis"]
difficulty: 1
difficulty_basis: "The output count is the binomial number of unordered pairs from n elements."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-FINAL-P03-b

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=5]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=5]]

## Question

(b) An algorithm that prints all subsets of size two of the set $\{1,2,3,\ldots,n\}$.

Shared context: [[STEM-2017-FINAL-P03 - Shared Problem Prompt]].

## 中文解析

每个输出对应两个不同元素构成的无序对子。用 i 小于 j 的双重枚举，既不重复也不遗漏，输出总数为 n 乘 n 减一再除二，主导项是二次项。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 5. The Chinese derivation expands the reasoning.

**Answer.** $O(n^2)$ (in fact $\Theta(n^2)$).

**Derivation/proof.** Each output is an unordered pair $\{i,j\}$ with $1\le i<j\le n$. There are $\binom n2=n(n-1)/2$ such pairs. A nested enumeration over $i<j$ prints each once, with constant cost per output, so the total is $\Theta(n^2)$.

### 中文解答

**推导。** 每个输出为无序对 $\{i,j\}$，只枚举 $1\le i<j\le n$ 即可避免重复。个数为 $\binom n2=n(n-1)/2$，枚举的两层循环每次输出一个对子，按题设每次打印为常数。故总工作量 $\Theta(n(n-1)/2)=\Theta(n^2)$，最佳选项为 $O(n^2)$。

## Common Mistakes

- 误认为要输出所有大小的子集。
- 把同一个对子两个方向重复计数后未解释。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Combinatorial Selection - 组合选择]]
- [[Asymptotic Bound Method - 渐近界方法]]
- [[Combinatorial Case Analysis - 组合分类法]]
