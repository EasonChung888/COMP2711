---
id: "Q-2013-FINAL-P05-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Final]]"
source_pdf: "knowledge_base/past_paper/2013-final.pdf"
source_page: 8
solution_page: [8]
question_number: "5(c)"
year: 2013
term: "spring"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["counterexample"]
difficulty: 2
difficulty_basis: "A counterexample must make the two compound propositions differ, which requires a deliberately chosen truth assignment rather than a random row."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-FINAL-P05-c

## Source

![[knowledge_base/past_paper/2013-final.pdf#page=8]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-final.pdf#page=8]].

## Question

(c) $(p\Rightarrow r)\land(q\Rightarrow r)$ and $(p\land q)\Rightarrow r$

Shared context: [[STEM-2013-FINAL-P05 - Shared Problem Prompt]].

## 中文解析

反例必须让两式真假不同。令 $q$ 为假会使右式的前件为假而自动为真，同时 $p\Rightarrow r$ 可以为假。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 8. The Chinese derivation expands the reasoning.

**Answer.** No; take $p=T,q=F,r=F$.

**Derivation/proof.** At $p=T,q=F,r=F$, the first conjunction is $(T\Rightarrow F)\land(F\Rightarrow F)=F$, whereas $(p\land q)\Rightarrow r=F\Rightarrow F=T$. The differing truth values disprove equivalence.

### 中文解答

**推导。** 取反例 $p=T,q=F,r=F$。第一式为 $(T\Rightarrow F)\land(F\Rightarrow F)=F\land T=F$；第二式的前件 $p\land q=F$，所以其值为 $F\Rightarrow F=T$。同一赋值令两式真假不同，故不等价。

## Common Mistakes

- 只选两式都为假的赋值。
- 把一个反例误当成等价的证据。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
