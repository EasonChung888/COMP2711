---
id: "Q-2016-FINAL-P07-a-recurrence"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Final]]"
source_pdf: "knowledge_base/past_paper/2016-final.pdf"
source_page: 13
solution_page: [13]
question_number: "7(a)"
year: 2016
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]","[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Recurrence Relations - 递推关系]]","[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]","[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["construction"]
difficulty: 2
difficulty_basis: "Adding the nth person doubles the old nonempty committees and adds the singleton missed by that doubling."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-FINAL-P07-a-recurrence

## Source

![[knowledge_base/past_paper/2016-final.pdf#page=13]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-final.pdf#page=13]]

## Question

(a) Define $T(n)$ as a recurrence equation, and prove that your recurrence equation is correct by induction.

Atomic focus [editorial]: define the recurrence; its induction proof is a separate atom.

Shared context: [[STEM-2016-FINAL-P07 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2016-final.pdf#page=13|PDF physical page 13]].

(a) $T(1)=1$, and $T(n)=2T(n-1)+1$ for $n>1$.

The base case $T(1)$ is obviously true.

Assume that $T(n-1)$ counts the number of committees that are formed from $n-1$ people correctly for $n>1$.

When there are $n$ people, the number of possible committees that are formed without the $n$-th person is counted by $T(n-1)$. On the other hand, each committee without the $n$-th person union with the $n$-th person forms another possible committee. So, we have $2T(n-1)$ possible committees. There is only one case is missed, which is the committee that contains only the $n$-th person. Therefore, when there are $n$ people, $T(n)=2T(n-1)+1$ counts all possible committees with at least one member from $n$ people. By the principle of induction, we have proved that the recurrence equation is correct.

## Supplementary Explanation

**Answer.** $T(1)=1$ and $T(n)=2T(n-1)+1$ for $n>1$.

**Derivation/proof.** With one person there is exactly one allowed committee. For $n>1$, old nonempty committees contribute $T(n-1)$ without person $n$ and another $T(n-1)$ with person $n$ added. The remaining allowed committee is $\{n\}$, giving the recurrence. These cases are disjoint and exhaustive.

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Recurrence Relations - 递推关系]]
- [[Combinatorial Selection - 组合选择]]
- [[Recurrence-Solving Method - 递推求解法]]
- [[Combinatorial Case Analysis - 组合分类法]]
