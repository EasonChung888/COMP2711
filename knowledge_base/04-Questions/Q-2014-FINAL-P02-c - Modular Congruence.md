---
id: "Q-2014-FINAL-P02-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 4
solution_page: [4]
question_number: "2(c)"
year: 2014
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "The gcd conclusion requires deciding whether a remainder of one forces coprimality and justifying the conclusion with divisibility."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P02-c

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=4]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=4]].

## Question

(c) If $a\bmod n=1$, then $gcd(a,n)=1$.

Shared context: [[STEM-2014-FINAL-P02 - Shared Problem Prompt]].

## 中文解析

余数为一给出贝祖形式 $a-qn=1$；共同因子必整除该线性组合，所以只能为一。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** True.

**Derivation/proof.** $a\bmod n=1$ means $a=qn+1$. Any common divisor of $a$ and $n$ divides $a-qn=1$, hence it is one.

### 中文解答

**推导。** 已知余数为一，存在整数 q 使 $a=qn+1$。设 d 为 a 与 n 的任一正公因数，则 d 同时整除 a、qn，故整除差 $a-qn=1$。唯一能整除一的正整数是一，因此所有正公因数只能为一，$\gcd(a,n)=1$。

## Common Mistakes

- 由余数为一直接说 $a$ 是素数。
- 漏掉 ‘共同因子整除线性组合’ 的论证。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
