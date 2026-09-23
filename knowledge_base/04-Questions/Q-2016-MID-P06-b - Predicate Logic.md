---
id: "Q-2016-MID-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Midterm]]"
source_pdf: "knowledge_base/past_paper/2016-midterm.pdf"
source_page: 10
solution_page: [10]
question_number: "6(b)"
year: 2016
term: "fall"
exam_type: "midterm"
marks: 4
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["counterexample"]
difficulty: 2
difficulty_basis: "The unrestricted universal conjunction wrongly demands that odd integers be even, yielding a concrete countermodel."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-MID-P06-b

## Source

![[knowledge_base/past_paper/2016-midterm.pdf#page=10]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-midterm.pdf#page=10]]

## Question

(b) (i) $\forall x\in E(p(x))$

(ii) $\forall x\in Z(q(x)\land p(x))$

Shared context: [[STEM-2016-MID-P06 - Shared Problem Prompt]].

## 中文解析

第二句要求所有整数同时是偶数并满足 $p$，奇数使它必假。取 $p(x)$ 也表示偶数，则第一句对所有偶数都真，而第二句在一这个整数上失败。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 10. The Chinese derivation expands the reasoning.

**Answer.** Not equivalent; take $p(x)$ to mean “$x$ is even.”

**Derivation/proof.** For this predicate, (i) says all even integers are even and is true. In (ii), set $x=1$: $q(1)$ is false, so $q(1)\land p(1)$ is false. Therefore (ii) is false and the truth values differ.

### 中文解答

**推导。** 取具体谓词p(x)为“x是偶数”。(i)断言所有偶数都是偶数，为真。(ii)则要求每个整数都同时满足q和p，取x=1就有 $q(1)=F$，故 $q(1)\land p(1)=F$，全称式为假。一组谓词赋值令两式真假不同，足以反驳逻辑等价。

## Common Mistakes

- 只说不等价而没有按要求指定 $p(x)$。
- 拿一个同时让两句为假的谓词，未构成区分真值的反例。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
