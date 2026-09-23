---
id: "Q-2023F-FINAL-P01-a-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Final.pdf"
source_page: 3
question_number: "1(a)(ii)"
year: 2023
term: "fall"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]","[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]","[[Modular Congruence - 同余]]"]
methods: ["[[Proof Method - 证明方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["classification"]
difficulty: 3
difficulty_basis: "The prime hypothesis allows a Bezout argument to force divisibility of the other factor when the first is coprime."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 1
related_questions: ["[[Q-2023F-FINAL-P01-a-i - Predicate Logic]]","[[Q-2023F-FINAL-P01-a-iii - Predicate Logic]]"]
---
# Q-2023F-FINAL-P01-a-ii

## Source

[[2023 Fall Final]]; printed item 1(a)(ii); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=3]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=3]]

## Question

(ii) $\forall x\forall a\forall b:\ P(x)\to(x\mid ab\to(x\mid a\lor x\mid b))$

Shared printed context: ![[STEM-2023F-FINAL-P01 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

现在前件明确限定 x 为 prime。若 x 已整除 a，结论直接成立；否则 x 与 a 互质，可以借助 Bézout 等式把 x 整除 ab 转换成 x 整除 b，这解释了 prime 条件的作用。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** True。

**推导。**

1. 任取整数 $x,a,b$。若 $P(x)$ 为假，外层 implication 因前件假自动为真；若 $x$ 是素数但 $x\nmid ab$，内层 implication 也自动为真。所以只需考虑 $x$ 素且 $x\mid ab$ 的情形。
2. 若 $x\mid a$，后件的析取已成立。否则素数 $x$ 与 $a$ 的 gcd 必为一，Bézout 给出整数 $u,v$ 满足 $ux+va=1$。两侧乘 $b$，得 $uxb+vab=b$。
3. 左侧第一项显然被 $x$ 整除，第二项因 $x\mid ab$ 也被 $x$ 整除，故 $x\mid b$。于是剩余情形仍满足析取；全部情形都已覆盖，证明原全称式为真，而非只验证若干例子。

### English solution

**Answer.** True.

**Derivation/proof.** If $P(x)$ is false, the outer implication is true. Suppose x is prime and $x\mid ab$. If $x\mid a$, the desired disjunction holds. Otherwise $\gcd(x,a)=1$, so integers u,v satisfy $ux+va=1$. Multiply by b to get $uxb+vab=b$. Both terms on the left are divisible by x, since $x\mid ab$; therefore $x\mid b$. This proves the assertion for all integer a and b.

## Common Mistakes

- 不能把 prime 条件省掉，否则上一小题的反例适用。 / Keep the hypothesis.
- 当 x 不整除 a 时仍需解释 gcd(x,a)=1。 / Primality establishes coprimality.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]

- [[Predicate Logic - 谓词逻辑]]
- [[Modular Congruence - 同余]]
- [[Proof Method - 证明方法]]
- [[Modular Arithmetic Method - 模运算方法]]

The prime hypothesis allows a Bezout argument to force divisibility of the other factor when the first is coprime.

- [[Q-2023F-FINAL-P01-a-i - Predicate Logic]]: Contrast: adding the prime hypothesis turns the false general divisibility claim into Euclid’s lemma. 增加素数前提后结论成立。
- [[Q-2023F-FINAL-P01-a-iii - Predicate Logic]]: Converse contrast: a sufficient prime condition does not make the printed reverse implication valid for all integers. 充分条件不保证逆命题成立。
