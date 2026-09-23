---
id: "Q-2016-MID-P06-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Midterm]]"
source_pdf: "knowledge_base/past_paper/2016-midterm.pdf"
source_page: 10
solution_page: [10]
question_number: "6(c)"
year: 2016
term: "fall"
exam_type: "midterm"
marks: 5
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["counterexample"]
difficulty: 3
difficulty_basis: "An existential implication can be satisfied by an odd integer without supplying any even witness for p."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-MID-P06-c

## Source

![[knowledge_base/past_paper/2016-midterm.pdf#page=10]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-midterm.pdf#page=10]]

## Question

(c) (i) $\exists x\in E(p(x))$

(ii) $\exists x\in Z(q(x)\Rightarrow p(x))$

Shared context: [[STEM-2016-MID-P06 - Shared Problem Prompt]].

## 中文解析

存在量词里的蕴含可以靠假前件成立，因而奇数也能作第二句的见证。让 $p(x)$ 表示奇数，则不存在满足它的偶数，但取 $x=1$ 就能使第二句为真。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 10. The Chinese derivation expands the reasoning.

**Answer.** Not equivalent; take $p(x)$ to mean “$x$ is odd.”

**Derivation/proof.** No even integer is odd, so (i) is false. With witness $x=1$, $q(1)$ is false and $p(1)$ true, making $q(1)\to p(1)$ true. Thus (ii) is true, disproving equivalence.

### 中文解答

**推导。** 取p(x)为“x是奇数”。偶数中没有奇数，所以(i)为假。在(ii)中取见证x=1，q(1)假而p(1)真，故 $q(1)\to p(1)=F\to T=T$，存在式真。两式真假相反，因此不等价；存在量词下的蕴含能由假前件成立，不等于限定见证在偶数域。

## Common Mistakes

- 误以为存在蕴含的见证必须使前件为真。
- 将第二句中全整数域的见证限制到偶数域。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
