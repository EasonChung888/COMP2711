---
id: "Q-2015-FINAL-P05-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Final]]"
source_pdf: "knowledge_base/past_paper/2015-final.pdf"
source_page: 10
solution_page: [10]
question_number: "5(b)"
year: 2015
term: "fall"
exam_type: "final"
marks: 3
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 1
difficulty_basis: "Reducing p minus one to minus one makes its square equal to one modulo p."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-FINAL-P05-b

## Source

![[knowledge_base/past_paper/2015-final.pdf#page=10]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-final.pdf#page=10]]

## Question

(b) Show that $p-1$ is a square root of 1 mod $p$.

Shared context: [[STEM-2015-FINAL-P05 - Shared Problem Prompt]].

## 中文解析

模 $p$ 下，$p-1$ 与负一同余；平方后就是一。也可直接展开平方，含有 $p$ 因子的两项都消失。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 10. The Chinese derivation expands the reasoning.

**Answer.** $(p-1)^2\equiv1\pmod p$.

**Derivation/proof.** Expand $(p-1)^2=p^2-2p+1=p(p-2)+1$. The first term is divisible by $p$, leaving residue 1; therefore $p-1$ satisfies the definition of a square root of 1.

### 中文解答

**推导。** 由定义需检验平方的余数。展开 $(p-1)^2=p^2-2p+1=p(p-2)+1$，前项可被 p 整除，故 $(p-1)^2\equiv1\pmod p$。因为素数 p≥2，$p-1$ 在零至 p−1 的合法代表元范围内，所以它确为一的模 p 平方根。

## Common Mistakes

- 把 $p-1$ 的平方误写成 $p^2-1$。
- 认为模意义下平方根只能选整数正平方根 1。

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
