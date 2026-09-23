---
id: "Q-2023F-FINAL-P01-a-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Final.pdf"
source_page: 3
question_number: "1(a)(iii)"
year: 2023
term: "fall"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]","[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]","[[Modular Congruence - 同余]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "The unit divisor one satisfies the product-divisibility implication but is not prime, refuting the converse."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 1
related_questions: ["[[Q-2023F-FINAL-P01-a-ii - Predicate Logic]]"]
---
# Q-2023F-FINAL-P01-a-iii

## Source

[[2023 Fall Final]]; printed item 1(a)(iii); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=3]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=3]]

## Question

(iii) $\forall x\forall a\forall b:\ (x\mid ab\to(x\mid a\lor x\mid b))\to P(x)$

Shared printed context: ![[STEM-2023F-FINAL-P01 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

这是把上一条性质反过来声称能够推出 prime，但一也整除每个整数而不是 prime。取 x=1 后内层蕴含恒为真，外层的 prime 结论为假，因此给出一个非常直接的反例。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** False。

**推导。**

1. 取 $x=1,a=b=1$。一整除 $ab=1$，也整除 $a$ 与 $b$，因此括号中的 $x\mid ab\to(x\mid a\lor x\mid b)$ 是 $T\to T$，其真值为真。
2. 但一不是 prime，所以 $P(1)=F$。整个外层 implication 便是 $T\to F=F$，这个共同赋值使全称命题失败。检验遵从原题把 $\forall a\forall b$ 放在整个蕴含式外的作用域；不能在读题时擅自把它们移入前件，更不能因为前一题的一个方向成立就默认此逆方向成立。

### English solution

**Answer.** False.

**Derivation/proof.** Let $x=1$, and for concreteness take $a=b=1$. Both $1\mid ab$ and $1\mid a\lor1\mid b$ are true, so their implication is true. But $P(1)$ is false because 1 is not prime. The outer implication is therefore $T\to F=F$, falsifying the universal formula. This respects the actual printed placement of the a,b quantifiers outside the whole implication.

## Common Mistakes

- 一不是 prime，不能把它排除出整数论域。 / The domain contains the unit 1.
- 不要将原式擅自改为先全称 a,b 再单独对 x 判断。 / Preserve the printed quantifier scope.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]

- [[Predicate Logic - 谓词逻辑]]
- [[Modular Congruence - 同余]]
- [[Proof Method - 证明方法]]

The unit divisor one satisfies the product-divisibility implication but is not prime, refuting the converse.

- [[Q-2023F-FINAL-P01-a-ii - Predicate Logic]]: Converse contrast: a sufficient prime condition does not make the printed reverse implication valid for all integers. 充分条件不保证逆命题成立。
