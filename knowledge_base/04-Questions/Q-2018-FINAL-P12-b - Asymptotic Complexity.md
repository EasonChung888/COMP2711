---
id: "Q-2018-FINAL-P12-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 17
solution_page: [17]
question_number: "12(b)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]","[[Proof Method - 证明方法]]"]
question_types: ["counterexample"]
difficulty: 3
difficulty_basis: "A constant factor inside the exponent becomes an unbounded ratio after exponentiation."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
---
# Q-2018-FINAL-P12-b

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=17]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=17]]

Source verification: The false conclusion is preserved. A globally positive counterexample replaces the printed 2x,x example to meet the stated real-domain positive-codomain requirement.

Source correction (derived proof): PDF page17 gives the counterexample f(x)=2x,g(x)=x, but the prompt requires both functions from all real numbers to positive real numbers; these fail that codomain at x≤0. The corrected independent counterexample f(x)=2·2^x,g(x)=2^x is positive on all reals, satisfies f=2g, and has exponential ratio2^(2^x)→∞. The False classification is retained, but the source-invalid witness is replaced and the answer is derived.

## Question

b) Let $f(x),g(x)$ be functions from the set of real numbers to the set of positive real numbers. If $f(x)$ is $O(g(x))$ then $2^{f(x)}$ is $O(2^{g(x)})$.

## 中文解析

大 O 中允许原函数差一个常数倍，但进入指数后，这个倍数会变成不断扩大的比例。选择对所有实数都为正的函数，保证反例满足题设论域和值域，再用指数之差得到无界比值。

## Detailed Solution

Provenance: derived; independently derived correction; discrepant source material is retained in Source. The Chinese derivation expands the reasoning.

**Answer.** False. For example $g(x)=2^x$ and $f(x)=2\cdot2^x$.

**Derivation/proof.** Both functions are positive for all real $x$, and $f=2g$, so $f=O(g)$. But $2^{f(x)}/2^{g(x)}=2^{f(x)-g(x)}=2^{2^x}$, which tends to infinity. No constant can upper-bound this ratio eventually, so the proposed implication fails. The source's $f=2x,g=x$ shows the same growth on positive x but does not satisfy the stated codomain on all reals; the displayed example does.

### 中文解答

**推导。** 命题为假。为满足全部实数上的正值要求，取 $g(x)=2^x$、$f(x)=2\cdot2^x$，两函数处处正，且 $f=2g$，所以 $f=O(g)$。然而指数之比 $\dfrac{2^{f(x)}}{2^{g(x)}}=2^{f(x)-g(x)}=2^{2^x}\to\infty$（$x\to\infty$），不能被任何固定常数最终约束，故不是所声称的大 $O$。印本的 $f=2x,g=x$ 在非正实数上不满足值域；此反例保持同样增长机制但补足了全域合法性。

## Common Mistakes

- 把大 O 当成可以任意代入非线性函数的等号。
- 给反例时忽略函数必须在全部实数上取正值。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Proof Strategy - 证明策略]]
- [[Asymptotic Bound Method - 渐近界方法]]
- [[Proof Method - 证明方法]]
