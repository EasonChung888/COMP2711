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

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=3|physical PDF page 3]].

> (b) $\forall x\forall y:(P(x)\land Q(y,x))\implies E(y^{x-1},1,x).

## Supplementary Explanation

**Answer.** $\forall p\forall a\bigl((P(p)\land Q(a,p))\to E(a^{p-1},1,p)\bigr)$.

**Derivation/proof.** The quantified variables p and a range over integers. $P(p)$ expresses that p is prime. Under this hypothesis, $p\nmid a$ is equivalent to $\gcd(a,p)=1$, namely $Q(a,p)$, since a prime has only the positive divisors 1 and p. The predicate $E(a^{p-1},1,p)$ encodes exactly the congruence in Fermat's theorem. Connecting the two hypotheses to that conclusion with implication yields the stated quantified translation.

Using $p,a$ instead of $x,y$, the two necessary hypotheses are $P(p)$ and $Q(a,p)$; the conclusion is $E(a^{p-1},1,p)$. For prime $p$, coprimality is equivalent to $p\nmid a$.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]

- [[Predicate Logic - 谓词逻辑]]
- [[Modular Congruence - 同余]]
- [[Predicate Translation Method - 谓词翻译方法]]

Translate the prime and nondivisibility hypotheses using P and Q before encoding the modular conclusion with E.
