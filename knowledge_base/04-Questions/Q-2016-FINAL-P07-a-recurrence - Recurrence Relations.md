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

## 中文解析

每个旧的非空委员会可保留原样或加入新成员，产生两份。但是仅包含新成员的单人委员会没有来自旧非空委员会的对应项，须另外加一，并给出一人的初值。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 13. The Chinese derivation expands the reasoning.

**Answer.** $T(1)=1$ and $T(n)=2T(n-1)+1$ for $n>1$.

**Derivation/proof.** With one person there is exactly one allowed committee. For $n>1$, old nonempty committees contribute $T(n-1)$ without person $n$ and another $T(n-1)$ with person $n$ added. The remaining allowed committee is $\{n\}$, giving the recurrence. These cases are disjoint and exhaustive.

### 中文解答

**推导。** 一人时只有包含该人的非空委员会，$T(1)=1$。增加第n人时，不含他且非空的委员会有T(n−1)个；含他且还含旧人的，与旧非空委员会一一对应，又有T(n−1)个。另有只含新人的单人委员会一个。三类互斥穷尽，所以 $T(n)=2T(n-1)+1$，用于n>1。额外加一避免漏掉新人独自成会。

## Common Mistakes

- 漏掉仅包含第 $n$ 人的委员会。
- 写出递推式但没有初始条件。

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Recurrence Relations - 递推关系]]
- [[Combinatorial Selection - 组合选择]]
- [[Recurrence-Solving Method - 递推求解法]]
- [[Combinatorial Case Analysis - 组合分类法]]
