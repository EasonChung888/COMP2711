---
id: "Q-2016-FINAL-P07-a-proof"
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
subtopics: ["[[Subtopic - Recursion - 递归]]","[[Subtopic - Permutations and Combinations - 排列与组合]]","[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Recurrence Relations - 递推关系]]","[[Combinatorial Selection - 组合选择]]","[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]","[[Combinatorial Case Analysis - 组合分类法]]","[[Induction Proof Method - 归纳证明法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Induction validates that the recurrence counts every nonempty committee once through three disjoint membership cases."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-FINAL-P07-a-proof

## Source

![[knowledge_base/past_paper/2016-final.pdf#page=13]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-final.pdf#page=13]]

## Question

(a) Define $T(n)$ as a recurrence equation, and prove that your recurrence equation is correct by induction.

Atomic focus [editorial]: prove the recurrence counts committees; defining it is a separate atom.

Shared context: [[STEM-2016-FINAL-P07 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2016-final.pdf#page=13|PDF physical page 13]].

(a) $T(1)=1$, and $T(n)=2T(n-1)+1$ for $n>1$.

The base case $T(1)$ is obviously true.

Assume that $T(n-1)$ counts the number of committees that are formed from $n-1$ people correctly for $n>1$.

When there are $n$ people, the number of possible committees that are formed without the $n$-th person is counted by $T(n-1)$. On the other hand, each committee without the $n$-th person union with the $n$-th person forms another possible committee. So, we have $2T(n-1)$ possible committees. There is only one case is missed, which is the committee that contains only the $n$-th person. Therefore, when there are $n$ people, $T(n)=2T(n-1)+1$ counts all possible committees with at least one member from $n$ people. By the principle of induction, we have proved that the recurrence equation is correct.

## Supplementary Explanation

**Answer.** The recurrence $T(1)=1$, $T(n)=2T(n-1)+1$ counts all allowed committees for every $n\ge1$.

**Derivation/proof.** Base case: for one person, $\{1\}$ is the only nonempty committee, so $T(1)=1$. Inductive hypothesis: $T(n-1)$ correctly counts nonempty committees on the first $n-1$ people. At size $n$, committees excluding $n$ are counted by $T(n-1)$. Those containing $n$ and at least one old member correspond bijectively to a nonempty old committee and give another $T(n-1)$. The sole remaining committee is $\{n\}$. The disjoint cases exhaust all possibilities, so $2T(n-1)+1$ is correct. Induction completes the proof.

Removing the new person gives an old nonempty committee whenever the original committee also contains an old member; adding that person back is the inverse map.

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Subtopic - Induction - 数学归纳法]]
- [[Recurrence Relations - 递推关系]]
- [[Combinatorial Selection - 组合选择]]
- [[Mathematical Induction - 数学归纳法]]
- [[Recurrence-Solving Method - 递推求解法]]
- [[Combinatorial Case Analysis - 组合分类法]]
- [[Induction Proof Method - 归纳证明法]]
