---
id: "Q-2015-FINAL-P08-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Final]]"
source_pdf: "knowledge_base/past_paper/2015-final.pdf"
source_page: 14
question_number: "8(b)"
year: 2015
term: "fall"
exam_type: "final"
marks: 6
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]","[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]","[[Recurrence Relations - 递推关系]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]","[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "The induction starts at zero and the successor step must include n equals one as well as larger indices."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
related_questions: []
---
# Q-2015-FINAL-P08-b

## Source

![[knowledge_base/past_paper/2015-final.pdf#page=14]]

Printed incomplete proof: ![[knowledge_base/past_paper/2015-final.pdf#page=14]]. PDF page14 establishes n=0 but prints “Now consider n>1” in the inductive step. This omits the 0→1 transition. The corrected proof uses every n≥1 and independently verifies T(1)=33. The complete solution is an independently derived proof completion.

## Question

(b) Prove the correctness of your solution by induction.

Shared context: [[STEM-2015-FINAL-P08 - Shared Problem Prompt]].

## 中文解析

先检验零这一初始项；再假设前一项公式成立，代入递推式，常数部分从负十四加十二变成负二。归纳步骤适用于所有 $n\ge1$，不能跳过第一步。

## Detailed Solution

Provenance: derived; independently derived correction; discrepant source material is retained in Source. The Chinese derivation expands the reasoning.

**Answer.** $T(n)=5\cdot7^n-2$ for every integer $n\ge0$.

**Derivation/proof.** Base: $T(0)=3=5\cdot7^0-2$. Let $n\ge1$ and assume $T(n-1)=5\cdot7^{n-1}-2$. Then $T(n)=7(5\cdot7^{n-1}-2)+12=5\cdot7^n-2$. Induction proves the formula. The printed proof says $n>1$ in the step; using $n\ge1$ includes the otherwise omitted transition from 0 to 1.

### 中文解答

**推导。** 归纳命题为 $T(n)=5\cdot7^n-2$。基础 n=0 时右侧 $5\cdot1-2=3=T(0)$。对任意 $n\ge1$，假设前一项 $T(n-1)=5\cdot7^{n-1}-2$，代入递推得 $T(n)=7(5\cdot7^{n-1}-2)+12=5\cdot7^n-14+12=5\cdot7^n-2$。所以对所有非负整数成立。源页写 n>1，无法覆盖零到一；这里明确改成 n≥1，补齐缺失的首个归纳过渡。

## Common Mistakes

- 只检验一两项而没有归纳步骤。
- 将归纳步骤限制为 $n>1$，却没有另验 $n=1$。

## Connections

- [[Subtopic - Induction - 数学归纳法]]
- [[Subtopic - Recursion - 递归]]
- [[Mathematical Induction - 数学归纳法]]
- [[Recurrence Relations - 递推关系]]
- [[Induction Proof Method - 归纳证明法]]
- [[Recurrence-Solving Method - 递推求解法]]
