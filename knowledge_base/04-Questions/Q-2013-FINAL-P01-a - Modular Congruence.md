---
id: "Q-2013-FINAL-P01-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Final]]"
source_pdf: "knowledge_base/past_paper/2013-final.pdf"
source_page: 3
solution_page: [3]
question_number: "1(a)"
year: 2013
term: "spring"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "The nested-modulus identity needs a quotient-and-remainder proof that tracks divisibility by the smaller modulus."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-FINAL-P01-a

## Source

![[knowledge_base/past_paper/2013-final.pdf#page=3]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-final.pdf#page=3]].

## Question

(a) Let $m$ and $n$ be two positive integers such that $m$ divides $n$, i.e., $n=sm$ for some other integer $s$. Show that, for any integer $x$, $(x\bmod n)\bmod m=x\bmod m$.

## 中文解析

先把两次取模都写成带余除法。$m\mid n$ 使第一步的商项仍是 $m$ 的倍数，从而第二次余数就是 $x$ 模 $m$ 的余数。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 3. The Chinese derivation expands the reasoning.

**Answer.** The two remainders are equal.

**Derivation/proof.** Let $r_1=x\bmod n$, so $x=q_1n+r_1$. Let $r_2=r_1\bmod m$, so $r_1=q_2m+r_2$ with $0\le r_2<m$. Since $n=sm$, $x=(q_1s+q_2)m+r_2$; uniqueness of the remainder modulo $m$ gives $x\bmod m=r_2$.

### 中文解答

**推导。** 令 $r_1=x\bmod n$、$r_2=r_1\bmod m$。由带余除法，$x=q_1n+r_1$、$r_1=q_2m+r_2$，且 $0\le r_2<m$。代入 $n=sm$ 得 $x=(q_1s+q_2)m+r_2$。因此 $r_2$ 是 x 除以 m 的合法余数；余数唯一性给出 $x\bmod m=r_2=(x\bmod n)\bmod m$。

## Common Mistakes

- 把 $m\mid n$ 错换为 $n\mid m$。
- 没有验证 $r_2$ 落在 $[0,m)$。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
