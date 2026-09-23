---
id: "Q-2021-FINAL1-P03"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2021-final-part-1.pdf"
source_page: 2
question_number: "3"
year: 2021
term: "spring"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]","[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]","[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Algorithm Correctness - 算法正确性]]","[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Algorithm Trace and Invariant Method - 算法跟踪与不变量方法]]","[[Induction Proof Method - 归纳证明法]]"]
question_types: ["construction","proof"]
difficulty: 4
difficulty_basis: "One comparison eliminates a candidate, and two final checks per other worker certify the survivor."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2,3]
marks: 10
---
# Q-2021-FINAL1-P03

## Source

![[knowledge_base/past_paper/2021-final-part-1.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2021-final-part-1.pdf#page=2]] ![[knowledge_base/past_paper/2021-final-part-1.pdf#page=3]]

## Question

Consider a company with $n>0$ workers. A worker is a famous-solo-worker if she or he is known by every other worker, but knows none of them. You are the boss and you want to check if there is a famous-solo-worker in your company. You are only allowed to ask the following question to a worker: “Do you know worker $j$?” The workers will answer your questions truthfully. Show that you can find the famous-solo-worker, or declare that such a worker doesn’t exist, with at most $3(n-1)$ questions.

Note that there can be at most one famous-solo-worker.

## 中文解析

每问一次至少排除一名候选：若 c 认识 j，则 c 不合格；若不认识，则 j 不被所有人认识。这样 n-1 次留下唯一可能者，再逐人核实两个方向的认识关系。验证失败也能宣布不存在，因为其他人已有明确排除证据。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** Eliminate candidates with $n-1$ questions, then verify the survivor using at most $2(n-1)$ more.

**Derivation/proof.** Start with any candidate c. For each other worker j ask whether c knows j. If yes, c is disqualified and replace c by j; if no, j is disqualified because c does not know j. An induction over comparisons shows any genuine famous-solo-worker remains among the candidates, so n−1 questions leave only c possible. Ask c whether they know each other worker and ask each other worker whether they know c, using at most 2(n−1) questions. Accept c iff all first answers are no and all second answers yes; otherwise nobody qualifies, since all others were already disqualified. For n=1 both conditions are vacuous and zero questions suffice.

### 中文解答

**推导。** 先任取候选 $c$，逐个与尚未处理的员工 $j$ 比较，只问 $c$ 是否认识 $j$。若认识，则 $c$ 不符合“不认识别人”，排除 $c$ 并改选 $j$；若不认识，则 $j$ 不符合“人人认识他”，排除 $j$。每次都排除一个确实不合格的人，绝不会排除真正的 famous-solo-worker。经过 $n-1$ 问，只剩 $c$ 可能合格。再对每个其他员工 $j$ 问两个方向：$c$ 是否认识 $j$，以及 $j$ 是否认识 $c$，至多 $2(n-1)$ 问。仅当第一方向全否、第二方向全是才接受 $c$；否则 $c$ 也不合格，而其余人已有排除证据，所以宣布不存在。总数至多 $(n-1)+2(n-1)=3(n-1)$。$n=1$ 时两个要求都空真，不问就返回唯一员工，仍符合零次上界。

## Common Mistakes

- 只筛选候选却不做最后验证。
- 把认识关系误当对称关系。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - Induction - 数学归纳法]]
- [[Algorithm Correctness - 算法正确性]]
- [[Mathematical Induction - 数学归纳法]]
- [[Algorithm Trace and Invariant Method - 算法跟踪与不变量方法]]
- [[Induction Proof Method - 归纳证明法]]
