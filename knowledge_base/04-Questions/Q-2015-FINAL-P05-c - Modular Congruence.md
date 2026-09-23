---
id: "Q-2015-FINAL-P05-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Final]]"
source_pdf: "knowledge_base/past_paper/2015-final.pdf"
source_page: 10
solution_page: [10]
question_number: "5(c)"
year: 2015
term: "fall"
exam_type: "final"
marks: 3
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "The paired root follows from negation modulo p, with zero requiring reduction back to its canonical residue."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-FINAL-P05-c

## Source

![[knowledge_base/past_paper/2015-final.pdf#page=10]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-final.pdf#page=10]]

## Question

(c) Show that if $y$ is a square root of $x$ mod $p$, so is $p-y$.

Shared context: [[STEM-2015-FINAL-P05 - Shared Problem Prompt]].

## 中文解析

$p-y$ 与 $-y$ 同余，平方与 $y^2$ 相同，所以仍得到 $x$。如果 $y=0$，表达式 $p-y=p$ 应当在模 $p$ 中重新取代表元零。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 10. The Chinese derivation expands the reasoning.

**Answer.** $(p-y)^2\equiv x\pmod p$.

**Derivation/proof.** Given $y^2\equiv x\pmod p$, $(p-y)^2=p^2-2py+y^2\equiv y^2\equiv x\pmod p$. As a member of $\mathbb Z_p$, the new root is represented by $(p-y)\bmod p$; this includes the $y=0$ case.

### 中文解答

**推导。** 已知 $y^2\equiv x\pmod p$。直接展开 $(p-y)^2=p^2-2py+y^2$，前两项均被 p 整除，所以 $(p-y)^2\equiv y^2\equiv x\pmod p$，仍是平方根。当 y=0 时，p−y=p 与零代表同一个剩余类；在 $\mathbb Z_p$ 中应写 $(p-y)\bmod p$ 作为标准代表元，而不是要求整数 p 属于零至 p−1 的列表。

## Common Mistakes

- 漏掉展开式的交叉项而没有说明它为何在模下消失。
- 声称 $y=0$ 时代表元 $p$ 位于 $\{0,\ldots,p-1\}$。

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
