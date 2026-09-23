---
id: "Q-2019-FINAL-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 8
solution_page: [8]
question_number: "6(b)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]","[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Recursive Structures - 递归结构]]","[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Structural Induction Method - 结构归纳法]]","[[Induction Proof Method - 归纳证明法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Structural induction on the second string uses concatenation associativity to expose its last-bit constructor."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 6
---
# Q-2019-FINAL-P06-b

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=8]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=8]]

## Question

(b) Use structural induction to prove that $ones(st)=ones(s)+ones(t)$.

Shared context: [[STEM-2019-FINAL-P06 - Shared Problem Prompt]].

## 中文解析

固定 s，只对 t 的构造归纳。把 t 写成较短前缀 w 加末位 x，利用拼接结合律让末位规则能直接应用；然后在 sw 上使用归纳假设，再把 w 与末位的计数合回 t。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 8. The Chinese derivation expands the reasoning.

**Answer.** The identity holds for all finite bit strings s,t.

**Derivation/proof.** Fix any s and induct structurally on t. For $t=\lambda$, $s\lambda=s$ and $\operatorname{ones}(\lambda)=0$, proving the base. Assume the identity for a prefix w and append a bit x. Then $\operatorname{ones}(s(wx))=\operatorname{ones}((sw)x)=\operatorname{ones}(sw)+x=\operatorname{ones}(s)+\operatorname{ones}(w)+x=\operatorname{ones}(s)+\operatorname{ones}(wx)$. The middle equality uses the induction hypothesis for w; the other count equalities use the recursive definition. Thus the constructor preserves the identity.

### 中文解答

**推导。** 固定任意位串 $s$，对 $t$ 的递归结构归纳。基例 $t=\lambda$：$\operatorname{ones}(s\lambda)=\operatorname{ones}(s)=\operatorname{ones}(s)+\operatorname{ones}(\lambda)$。归纳假设是对前缀 $w$ 有 $\operatorname{ones}(sw)=\operatorname{ones}(s)+\operatorname{ones}(w)$。对任一末位 $x\in\{0,1\}$，

$$\operatorname{ones}(s(wx))=\operatorname{ones}((sw)x)=\operatorname{ones}(sw)+x$$
$$=\operatorname{ones}(s)+\operatorname{ones}(w)+x=\operatorname{ones}(s)+\operatorname{ones}(wx).$$

第一步用串连接结合律，第二及最后一步用递归定义，中间一步用关于 $w$ 的归纳假设。因此两个构造器追加 $0$、追加 $1$ 都保留命题，所有有限位串均满足结论。

## Common Mistakes

- 同时随意改变两个字符串而未说明归纳对象。
- 对完整 t 使用待证结论造成循环。

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Subtopic - Induction - 数学归纳法]]
- [[Recursive Structures - 递归结构]]
- [[Mathematical Induction - 数学归纳法]]
- [[Structural Induction Method - 结构归纳法]]
- [[Induction Proof Method - 归纳证明法]]
