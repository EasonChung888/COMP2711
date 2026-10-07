---
id: "Q-2021-FINAL1-P02"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2021-final-part-1.pdf"
source_page: 1
question_number: "2"
year: 2021
term: "spring"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]","[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]","[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]","[[Recurrence Relations - 递推关系]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]","[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["proof","algorithm-analysis"]
difficulty: 3
difficulty_basis: "One recursive child shrinks the coin set by three after at most two weighings."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
marks: 10
---
# Q-2021-FINAL1-P02

## Source

![[knowledge_base/past_paper/2021-final-part-1.pdf#page=1]]

Published solution material: ![[knowledge_base/past_paper/2021-final-part-1.pdf#page=2]]

## Question

Show that the number of weightings is at most $2\log_3n$.

Shared context: [[STEM-2021-FINAL1-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2021-final-part-1.pdf#page=2|physical PDF page 2]].

> In each recursive call, it takes at most 2 comparisons and the input size are reduced to one-third of the parent. So, the number of comparisons is at most $2\log_3n=O(\log n)$.

## Supplementary Explanation

**Answer.** At most $2\log_3n$ weighings.

**Derivation/proof.** At a nontrivial call, at most two balance comparisons determine the unique group containing the odd coin. Equal A,B means C contains it; unequal A,B and equal B,C means A; if both comparisons differ, B contains it. Only that group, of size |S|/3, is recursed into. For n=3^k there are exactly k nontrivial size levels before size one, whose case uses no weighing. Hence total comparisons ≤2k=2log3 n. This also establishes why only one branch is followed.

If both comparisons differ, the odd coin is in $B$: an odd coin in $A$ would leave $B,C$ balanced, and an odd coin in $C$ would leave $A,B$ balanced. This reasoning does not require knowing whether the coin is heavier or lighter. The successive sizes are $3^k,3^{k-1},\ldots,3,1$.

Thus the weighing bound is $2k=2\log_3n$.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - Recursion - 递归]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Recurrence Relations - 递推关系]]
- [[Asymptotic Bound Method - 渐近界方法]]
- [[Recurrence-Solving Method - 递推求解法]]
