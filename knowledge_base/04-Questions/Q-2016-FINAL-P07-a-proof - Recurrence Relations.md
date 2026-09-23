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

## 中文解析

归纳命题应是递推值等于实际非空委员会数，而不只是代数等式。基例一人成立；假设旧规模计数正确后，把新委员会分为不含新人、含新人且含旧人、只含新人三类。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 13. The Chinese derivation expands the reasoning.

**Answer.** The recurrence $T(1)=1$, $T(n)=2T(n-1)+1$ counts all allowed committees for every $n\ge1$.

**Derivation/proof.** Base case: for one person, $\{1\}$ is the only nonempty committee, so $T(1)=1$. Inductive hypothesis: $T(n-1)$ correctly counts nonempty committees on the first $n-1$ people. At size $n$, committees excluding $n$ are counted by $T(n-1)$. Those containing $n$ and at least one old member correspond bijectively to a nonempty old committee and give another $T(n-1)$. The sole remaining committee is $\{n\}$. The disjoint cases exhaust all possibilities, so $2T(n-1)+1$ is correct. Induction completes the proof.

### 中文解答

**推导。** 归纳命题是递推值确实等于n人的非空委员会数。基例n=1只有集合{1}，与T(1)=1相合。设前n−1人的数目T(n−1)正确。n人时按是否含新人分：不含新人为T(n−1)；含新人且至少一个旧成员，删掉新人形成旧非空委员会，故也是T(n−1)；只含新人为一。三类互不相交且涵盖每个非空委员会，故总数 $2T(n-1)+1$，与递推吻合，归纳成立。

## Common Mistakes

- 只验证前两个数值而当成归纳证明。
- 在含新人的类别中漏掉单人委员会或重复计它。

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
