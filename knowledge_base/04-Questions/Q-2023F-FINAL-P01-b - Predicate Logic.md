---
id: "Q-2023F-FINAL-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Final.pdf"
source_page: 3
question_number: "1(b)"
year: 2023
term: "fall"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]","[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]","[[Modular Congruence - 同余]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 3
difficulty_basis: "Translate the prime and nondivisibility hypotheses using P and Q before encoding the modular conclusion with E."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 2
---
# Q-2023F-FINAL-P01-b

## Source

[[2023 Fall Final]]; printed item 1(b); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=3]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=3]]

## Question

Write down Fermat's little theorem using quantifiers and the predicates given above. You are also allowed to use power. As an example $E(x^2,y,z)$ is acceptable.

(Fermat's little theorem: If $p$ is prime and $a$ is any integer not divisible by $p$, then $a^{p-1}\equiv1\pmod p$.)

Shared printed context: ![[STEM-2023F-FINAL-P01 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

当 p 为 prime 时，a 不被 p 整除与二者 co-prime 等价，所以可以用给定 Q 谓词。把任意整数 p 和 a 都全称量化，再用 conjunction 集合两个假设，最后让 E 表示所需的同余式。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\forall p\forall a\bigl((P(p)\land Q(a,p))\to E(a^{p-1},1,p)\bigr)$。

**推导。**

1. 定义域是整数，原定理对每个 prime $p$ 和每个合格整数 $a$ 成立，故先写 $\forall p\forall a$。谓词 $P(p)$ 表示 $p$ 是素数；在此条件下，$p\nmid a$ 等价于 $\gcd(a,p)=1$，所以可用题设的 $Q(a,p)$ 表示第二个前提。
2. 把两个必要假设以 conjunction 合并。结论 $a^{p-1}\equiv1\pmod p$ 按 $E$ 的三参数定义写成 $E(a^{p-1},1,p)$，再用 implication 从假设指向结论即得答案。这里是将题目已给的 Fermat's little theorem 翻译成允许的谓词，并没有在缺少素数条件时声称互素与不整除仍等价。

### English solution

**Answer.** $\forall p\forall a\bigl((P(p)\land Q(a,p))\to E(a^{p-1},1,p)\bigr)$.

**Derivation/proof.** The quantified variables p and a range over integers. $P(p)$ expresses that p is prime. Under this hypothesis, $p\nmid a$ is equivalent to $\gcd(a,p)=1$, namely $Q(a,p)$, since a prime has only the positive divisors 1 and p. The predicate $E(a^{p-1},1,p)$ encodes exactly the congruence in Fermat's theorem. Connecting the two hypotheses to that conclusion with implication yields the stated quantified translation.

## Common Mistakes

- 只使用 P(p) 会错误地包含 p 整除 a 的情况。 / Include coprimality.
- E 的第三个参数是模数 p，不是指数 p−1。 / Preserve the predicate argument order.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]

- [[Predicate Logic - 谓词逻辑]]
- [[Modular Congruence - 同余]]
- [[Predicate Translation Method - 谓词翻译方法]]

Translate the prime and nondivisibility hypotheses using P and Q before encoding the modular conclusion with E.
