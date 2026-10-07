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

## Official Answer

Source: [[knowledge_base/past_paper/2018-final.pdf#page=17|physical PDF page 17]].

This is false. Consider $f(x)=2x$ and $g(x)=x$. Clearly $f(x)$ is $O(g(x))$. Then $2^{f(x)}=2^{2x}=4^x$, whereas $2^{g(x)}=2^x$. So $2^{f(x)}/2^{g(x)}=2^x$, i.e., the ratio of the two functions is not bound by any constant $C$, therefore $2^{f(x)}$ is not $O(2^{g(x)})$.

## Supplementary Explanation

**Answer.** False. For example $g(x)=2^x$ and $f(x)=2\cdot2^x$.

**Derivation/proof.** Both functions are positive for all real $x$, and $f=2g$, so $f=O(g)$. But $2^{f(x)}/2^{g(x)}=2^{f(x)-g(x)}=2^{2^x}$, which tends to infinity. No constant can upper-bound this ratio eventually, so the proposed implication fails. The source's $f=2x,g=x$ shows the same growth on positive x but does not satisfy the stated codomain on all reals; the displayed example does.

The counterexample must be positive everywhere on the stated real domain. Exponentials $f(x)=2\cdot2^x$ and $g(x)=2^x$ meet this condition while keeping the ratio and the desired contradiction fixed.

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Proof Strategy - 证明策略]]
- [[Asymptotic Bound Method - 渐近界方法]]
- [[Proof Method - 证明方法]]
