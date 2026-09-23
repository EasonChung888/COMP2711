---
id: "Q-2013-FINAL-P07"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Final]]"
source_pdf: "knowledge_base/past_paper/2013-final.pdf"
source_page: 10
solution_page: [10]
question_number: "7"
year: 2013
term: "spring"
exam_type: "final"
marks: 10
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "The induction step must convert powers of five and eleven modulo three while retaining the exact target expression."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-FINAL-P07

## Source

![[knowledge_base/past_paper/2013-final.pdf#page=10]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-final.pdf#page=10]].

## Question

Use induction to prove that, for any integer $n\ge1$, $5^n+2\cdot11^n$ is divisible by 3.

## 中文解析

归纳假设必须真正出现在归纳步中。把新一项拆成旧表达式再加上明显含因子 $3$ 的部分，便可完成整除证明。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 10. The Chinese derivation expands the reasoning.

**Answer.** The expression is divisible by $3$ for all $n\ge1$.

**Derivation/proof.** Base: $5+2\cdot11=27$. Assume $5^{n-1}+2\cdot11^{n-1}=3u$. Then $5^n+2\cdot11^n=5^{n-1}+4\cdot5^{n-1}+2\cdot11^{n-1}+20\cdot11^{n-1}=3u+4(5^{n-1}+5\cdot11^{n-1})=3(u+4( u+11^{n-1}))$, divisible by $3$.

### 中文解答

**推导。** 基础步 $n=1$ 时 $5+2\cdot11=27$ 被三整除。设 $n>1$，归纳假设为 $5^{n-1}+2\cdot11^{n-1}=3u$。把下一项整理为 $5^n+2\cdot11^n=(5^{n-1}+2\cdot11^{n-1})+4(5^{n-1}+5\cdot11^{n-1})$。括号内第二项等于 $3u+3\cdot11^{n-1}$，故总式为 $3u+4(3u+3\cdot11^{n-1})=3(5u+4\cdot11^{n-1})$。归纳步成立，因此所有 $n\ge1$ 均成立。

## Common Mistakes

- 只验证基例便结束。
- 把归纳假设错误地用在指数 $n$ 而非 $n-1$。

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Mathematical Induction - 数学归纳法]]
- [[Induction Proof Method - 归纳证明法]]
