---
id: "Q-2015-FINAL-P10"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Final]]"
source_pdf: "knowledge_base/past_paper/2015-final.pdf"
source_page: 17
question_number: "10"
year: 2015
term: "fall"
exam_type: "final"
marks: 10
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]","[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]","[[Modular Congruence - 同余]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Induction must handle both the old modulus range and the new modulus n introduced at each successor step."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
related_questions: []
---
# Q-2015-FINAL-P10

## Source

![[knowledge_base/past_paper/2015-final.pdf#page=17]]

Printed incomplete proof: ![[knowledge_base/past_paper/2015-final.pdf#page=17]]. PDF page17 applies the hypothesis P(n−1) without restricting m≤n−1, then concludes for all m≤n. The new modulus m=n is not covered by that hypothesis. The completed induction treats it separately using n!=n(n−1)!, hence n divides n!. The complete solution is an independently derived proof completion.

## Question

Prove the following statement by induction
$$\bigl(n(n-1)\cdots(2)(1)+1\bigr)\bmod m=1$$
for all integer $n>1$ and for any $m\in\{2,3,\cdots,n\}$.

Note: No marks will be awarded if you do not use the principle of induction.

## 中文解析

归纳命题必须同时覆盖当前所有模数。由 $n-1$ 推到 $n$ 时，原来的模数可用归纳假设再乘 $n$；新增加的模数 $m=n$ 则直接利用 $n\mid n!$。这一新模数不能误用尚未覆盖它的归纳假设。

## Detailed Solution

Provenance: derived; independently derived correction; discrepant source material is retained in Source. The Chinese derivation expands the reasoning.

**Answer.** $(n!+1)\bmod m=1$ for all the specified $n,m$.

**Derivation/proof.** Let $P(n)$ assert the statement for all $2\le m\le n$. Base $n=2$: $3\bmod2=1$. Assume $P(n-1)$ for $n>2$. If $2\le m\le n-1$, the hypothesis implies $(n-1)!\equiv0\pmod m$, hence $n!\equiv0\pmod m$. For the newly allowed $m=n$, $n!=n(n-1)!$ is directly divisible by $n$. In both cases $n!+1\equiv1\pmod m$, and $m\ge2$ makes 1 the actual remainder. This fills the new-modulus case left implicit in the printed proof.

### 中文解答

**推导。** 令 P(n) 同时断言所有 $2\le m\le n$ 的模数结论。基础 n=2 时只有m=2，$(2!+1)\bmod2=1$。对 n>2 假设 P(n−1)。当 $2\le m\le n-1$ 时，假设给 $(n-1)!\equiv0\pmod m$，乘 n 得 $n!\equiv0\pmod m$。新加入的模数 m=n 不在假设范围，必须单独用 $n!=n(n-1)!$ 得 n 整除 n!。两类都推出 $n!+1\equiv1\pmod m$，而 m≥2 保证一是合法余数，归纳完成。源证明未分开新模数，不能直接在 m=n 上使用 P(n−1)。

## Common Mistakes

- 对 $m=n$ 套用仅适用于 $m\le n-1$ 的归纳假设。
- 只用“阶乘含有所有因子”的直接证明，未遵守题目要求的归纳形式。

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Mathematical Induction - 数学归纳法]]
- [[Modular Congruence - 同余]]
- [[Induction Proof Method - 归纳证明法]]
- [[Modular Arithmetic Method - 模运算方法]]
