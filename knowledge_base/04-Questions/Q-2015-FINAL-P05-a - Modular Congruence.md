---
id: "Q-2015-FINAL-P05-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Final]]"
source_pdf: "knowledge_base/past_paper/2015-final.pdf"
source_page: 10
solution_page: [10]
question_number: "5(a)"
year: 2015
term: "fall"
exam_type: "final"
marks: 4
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Enumerating squares modulo eleven must remove repeated residues while retaining zero."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-FINAL-P05-a

## Source

![[knowledge_base/past_paper/2015-final.pdf#page=10]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-final.pdf#page=10]]

## Question

(a) Find all integers in $\mathbb Z_{11}$ that are quadratic residues mod 11.

Shared context: [[STEM-2015-FINAL-P05 - Shared Problem Prompt]].

## 中文解析

对零至十逐个平方取模，注意正负互为相反数的两个根会产生相同余数。答案应列出不同的余数，而不是把所有根都当作不同答案。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 10. The Chinese derivation expands the reasoning.

**Answer.** $\{0,1,3,4,5,9\}$.

**Derivation/proof.** Squaring $y=0,1,2,3,4,5$ gives residues $0,1,4,9,5,3$. The remaining roots $6,7,8,9,10$ are congruent to $-5,-4,-3,-2,-1$ and repeat the same squares. This covers every residue class.

### 中文解答

**推导。** 先平方代表元零至五，所得余数依次 $0^2,1^2,2^2,3^2,4^2,5^2\bmod11=0,1,4,9,5,3$。其余六至十分别与 −5 至 −1 同余，平方重复刚才的非零余数。因此全部不同二次剩余为 $\{0,1,3,4,5,9\}$。源题的定义允许根零，所以答案包括零。

## Common Mistakes

- 遗漏 $y=0$ 对应的二次剩余 0。
- 把 6 至 10 的根当作新增二次剩余。

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
