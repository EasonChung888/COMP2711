---
id: "Q-2021-FINAL1-P04-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2021-final-part-1.pdf"
source_page: 3
question_number: "4(c)"
year: 2021
term: "spring"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "A two-consecutive-premise rule cannot fire from only P(1)."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 2
---
# Q-2021-FINAL1-P04-c

## Source

![[knowledge_base/past_paper/2021-final-part-1.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2021-final-part-1.pdf#page=3]]

## Question

$P(1)$ is true; for all positive integers $n$, if $P(n)$ and $P(n+1)$ are true, then $P(n+2)$ is true.

Shared context: [[STEM-2021-FINAL1-P04 - Shared Problem Prompt]].

## 中文解析

递推需要连续两个真命题作启动条件，但这里只给一个 P(1)。缺 P(2) 就无法推 P(3)，更不能继续。让 P 仅在一处为真可验证规则全都空真，因此只有一被保证。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** Only $n=1$.

**Derivation/proof.** To infer P(3), the first possible rule instance requires both P(1) and P(2), but P(2) is absent. No other step has two established consecutive premises either. Define P true only at 1: then every antecedent P(n)∧P(n+1) is false, so all implications hold. This witnesses that every integer except 1 can remain false.

### 中文解答

**推导。** 只有 $n=1$ 必真。第一次可能推出 $P(3)$ 就需要 $P(1)$ 和 $P(2)$ 同时成立，但基础只给了前者；也没有任何其他已知的连续真值来启动规则。令 $P(n)\iff n=1$，则对每个正整数 $n$，$P(n)\land P(n+1)$ 都为假，全部递推蕴含都为真。这个反模型证明除了已给的一以外，没有其他整数被条件强制为真。

## Common Mistakes

- 照斐波那契式递推却漏第二个初值。
- 把前件的 and 错当 or。

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Mathematical Induction - 数学归纳法]]
- [[Induction Proof Method - 归纳证明法]]
