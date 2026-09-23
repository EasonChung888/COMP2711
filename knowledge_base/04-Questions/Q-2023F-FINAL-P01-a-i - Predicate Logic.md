---
id: "Q-2023F-FINAL-P01-a-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Final.pdf"
source_page: 3
question_number: "1(a)(i)"
year: 2023
term: "fall"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]","[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]","[[Modular Congruence - 同余]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "A composite divisor can divide a product without dividing either factor, refuting the universal quantified claim."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 1
related_questions: ["[[Q-2023F-FINAL-P01-a-ii - Predicate Logic]]"]
---
# Q-2023F-FINAL-P01-a-i

## Source

[[2023 Fall Final]]; printed item 1(a)(i); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=3]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=3]]

## Question

(i) $\forall x\forall a\forall b:\ x\mid ab\to(x\mid a\lor x\mid b)$

Shared printed context: ![[STEM-2023F-FINAL-P01 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

命题允许 x 是任意整数，不能自动使用只对 prime 成立的性质。选择一个复合数并把它的不同素因子分配给 a 与 b，可以让它整除乘积，却不整除任一单独因子。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** False。

**推导。**

1. 取整数 $x=6,a=2,b=3$。因为 $ab=6$，前件 $x\mid ab$ 成立；但六既不整除二，也不整除三，故后件 $x\mid a\lor x\mid b$ 的两个部分均假，整个析取为假。
2. 这个赋值使内部 implication 为 $T\to F$，所以是假。外层要求所有整数三元组都成立，单个合法反例已经足以推翻它。这里 $x$ 没有被限制为 prime；合数六的因子二与三可以分散在两个乘数中，正是原式失败的原因，不能直接套用只针对素数的 Euclid's lemma。

### English solution

**Answer.** False.

**Derivation/proof.** Take $x=6$, $a=2$, and $b=3$. Then $ab=6$, so $6\mid ab$ is true. But $6\nmid2$ and $6\nmid3$, making the disjunction false. Thus the implication is false for this one integer triple, which falsifies the universally quantified expression. The counterexample also shows precisely why a primality assumption would matter.

## Common Mistakes

- 把 Euclid's lemma 用在任意复合除数上是不合法的。 / The prime hypothesis is missing.
- 反例要让前件为真且后件为假。 / A false antecedent cannot refute implication.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]

- [[Predicate Logic - 谓词逻辑]]
- [[Modular Congruence - 同余]]
- [[Proof Method - 证明方法]]

A composite divisor can divide a product without dividing either factor, refuting the universal quantified claim.

- [[Q-2023F-FINAL-P01-a-ii - Predicate Logic]]: Contrast: adding the prime hypothesis turns the false general divisibility claim into Euclid’s lemma. 增加素数前提后结论成立。
