---
id: "Q-2016-FINAL-P04-b-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Final]]"
source_pdf: "knowledge_base/past_paper/2016-final.pdf"
source_page: 8
solution_page: [8,9]
question_number: "4(b)(i)"
year: 2016
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["classification"]
difficulty: 3
difficulty_basis: "The left base is divisible by its prime modulus while Fermat reduction makes the right residue one."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-FINAL-P04-b-i

## Source

![[knowledge_base/past_paper/2016-final.pdf#page=8]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-final.pdf#page=8]] ![[knowledge_base/past_paper/2016-final.pdf#page=9]]

## Question

(i) Is “$(178^{88}\bmod89)=[(401^{3,243,554}+1,197,491)\bmod97]$”?

Shared context: [[STEM-2016-FINAL-P04-b - Shared Problem Prompt]].

## 中文解析

左边底数正好是八十九的两倍，余数为零，不能套用要求互素的费马结论。右边先把底数及加数取模，再对非零底数按九十六约化指数，得到余数一。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 8, 9. The Chinese derivation expands the reasoning.

**Answer.** False: the left side is $0$ and the right side is $1$.

**Derivation/proof.** Because $178\equiv0\pmod{89}$, the left side is 0. For the right side, $401\equiv13$, $1,197,491\equiv26\pmod{97}$, and $3,243,554\equiv2\pmod{96}$. As 97 is prime and $13\not\equiv0$, Fermat gives $13^{3,243,554}\equiv13^2\equiv72\pmod{97}$. The right residue is $(72+26)\bmod97=1$, which differs from 0.

### 中文解答

**推导。** 左边178为89的两倍，所以 $178^{88}\bmod89=0$，不能用非零底数的费马结论。右边先约化 $401\equiv13$、$1,197,491\equiv26\pmod{97}$；97素且13非零，指数可模96，$3,243,554\bmod96=2$。故右余数 $13^2+26\equiv72+26\equiv1\pmod{97}$。左零右一，不相等，命题为假。

## Common Mistakes

- 忽略互素前提，把左边也判为一。
- 将指数对九十七而不是九十六约化。

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
