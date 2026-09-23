---
id: "Q-2016-FINAL-P04-b-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Final]]"
source_pdf: "knowledge_base/past_paper/2016-final.pdf"
source_page: 8
solution_page: [9]
question_number: "4(b)(ii)"
year: 2016
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Fermat gives residue one modulo seventy-one, whereas divisibility by three rules out that residue modulo seventy-two."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-FINAL-P04-b-ii

## Source

![[knowledge_base/past_paper/2016-final.pdf#page=8]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-final.pdf#page=9]]

## Question

(ii) Is “$(21^{70}\bmod71)=(21^{71}\bmod72)$”?

Shared context: [[STEM-2016-FINAL-P04-b - Shared Problem Prompt]].

## 中文解析

图像上底数是二十一，指数分别为七十和七十一。左边由费马小定理等于一；右边的被除数和模数都被三整除，所以余数也被三整除，不可能等于一。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 9. The Chinese derivation expands the reasoning.

**Answer.** False. $21^{70}\bmod71=1$, while $21^{71}\bmod72$ is divisible by 3 (in fact, it is 45).

**Derivation/proof.** The prime 71 does not divide 21, so Fermat's theorem gives $21^{70}\equiv1\pmod{71}$. Write $21^{71}=72q+r$ with $0\le r<72$. Then $r=3(7\cdot21^{70}-24q)$, a multiple of 3, and hence $r\ne1$. A numerical check uses $21^2\equiv9$, $21^3\equiv45$, and $45\cdot9\equiv45\pmod{72}$; thus every odd power from the third onward, including the 71st, has remainder 45.

### 中文解答

**推导。** 71是素数且不整除21，费马小定理给左边 $21^{70}\bmod71=1$。右边设 $21^{71}=72q+r$，则 $r=3(7\cdot21^{70}-24q)$，是三的倍数，不可能等于一，故等式假。独立数值检查 $21^2\equiv9$、$21^3\equiv45$、$45\cdot9\equiv45\pmod{72}$，所以71次这个奇数次幂余数45。

## Common Mistakes

- 把底数二十一的个位一误并入指数，抄成 $2^{170}$。
- 把七十二误当素数或对不互素的底数使用费马小定理。

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
