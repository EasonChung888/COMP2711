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

## 中文解析

每层最多称两次，并且只在含异常币的三分之一组里继续，不会递归三个组。n 是三的幂，所以缩小到一恰好经过 log₃n 层；每层两次给出上界。还需说明比较结果为何能正确定位那个组。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** At most $2\log_3n$ weighings.

**Derivation/proof.** At a nontrivial call, at most two balance comparisons determine the unique group containing the odd coin. Equal A,B means C contains it; unequal A,B and equal B,C means A; if both comparisons differ, B contains it. Only that group, of size |S|/3, is recursed into. For n=3^k there are exactly k nontrivial size levels before size one, whose case uses no weighing. Hence total comparisons ≤2k=2log3 n. This also establishes why only one branch is followed.

### 中文解答

**推导。** 在含唯一异常币的当前集合中，三个等大小组若 $A,B$ 平衡，异常币必在 $C$；否则若 $B,C$ 平衡，它必在 $A$；若两次比较都不平衡，则它只能在两次都参与的 $B$，因为异常在 $A$ 会令 $B,C$ 平衡，异常在 $C$ 会令 $A,B$ 平衡。这不需预知异常币偏重还是偏轻。每个非终止调用至多称两次，然后只递归一个大小为原来三分之一的组。写 $n=3^k$，大小依次为 $3^k,3^{k-1},\ldots,3,1$，恰有 $k$ 个非终止层；单币层不称重。所以总次数至多 $2k=2\log_3n$，而不是因三分组就递归三个分支。

## Common Mistakes

- 把三组都递归导致错误乘三。
- 把终止的单币层也加两次称量。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - Recursion - 递归]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Recurrence Relations - 递推关系]]
- [[Asymptotic Bound Method - 渐近界方法]]
- [[Recurrence-Solving Method - 递推求解法]]
