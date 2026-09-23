---
id: "Q-2014-FINAL-P04-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 7
solution_page: [7]
question_number: "4(a)"
year: 2014
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Solving the simultaneous congruences requires checking compatibility modulo the gcd before constructing a residue class."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P04-a

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=7]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=7]].

## Question

(a) $m=15,n=16,a=5,b=2$.

Shared context: [[STEM-2014-FINAL-P04 - Shared Problem Prompt]].

## 中文解析

互素模数的两个同余有唯一模 $240$ 的解。代回检验：$50\bmod15=5$、$50\bmod16=2$。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 7. The Chinese derivation expands the reasoning.

**Answer.** Yes, $x=50$.

**Derivation/proof.** Since $15,16$ are coprime, CRT applies. Inverses are $15^{-1}\equiv15\pmod{16}$ and $16^{-1}\equiv1\pmod{15}$. Thus $x\equiv5\cdot16\cdot1+2\cdot15\cdot15=530\equiv50\pmod{240}$.

### 中文解答

**推导。** 模数 15 与 16 互素，由 CRT 存在唯一模 $240$ 的解。模 15 下 $16^{-1}\equiv1$，模 16 下 $15^{-1}\equiv15$。因此 $x\equiv5\cdot16\cdot1+2\cdot15\cdot15=530\equiv50\pmod{240}$。取 $x=50$ 落在 $0\le x<240$，并且 $50\bmod15=5$、$50\bmod16=2$，检验通过。

## Common Mistakes

- 未把 530 再模 240。
- 把 15 在模 16 下的逆元写成 1。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
