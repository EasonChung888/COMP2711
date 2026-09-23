---
id: "Q-2015-FINAL-P07-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Final]]"
source_pdf: "knowledge_base/past_paper/2015-final.pdf"
source_page: 13
solution_page: [13]
question_number: "7(b)"
year: 2015
term: "fall"
exam_type: "final"
marks: 4
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "The large power is reduced by applying the established forty-ninth-power identity twice. "
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-FINAL-P07-b

## Source

![[knowledge_base/past_paper/2015-final.pdf#page=13]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-final.pdf#page=13]]

## Question

(b) Use Part (a) to calculate
$$4^{385}\bmod105.$$

## 中文解析

将三百八十五拆成七乘四十九加四十二，先把四的四十九次幂约成四，剩余指数恰好变为四十九，再用一次结论即可。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 13. The Chinese derivation expands the reasoning.

**Answer.** $4$.

**Derivation/proof.** The base 4 satisfies the coprimality condition. Since $385=7\cdot49+42$, $4^{385}=(4^{49})^7\cdot4^{42}\equiv4^7\cdot4^{42}=4^{49}\equiv4\pmod{105}$.

### 中文解答

**推导。** 底数四不被三、五、七整除，故前题给 $4^{49}\equiv4\pmod{105}$。分解 $385=7\cdot49+42$，于是 $4^{385}=(4^{49})^7\cdot4^{42}\equiv4^7\cdot4^{42}=4^{49}\equiv4\pmod{105}$。四已经位于零至104之间，所求余数为四。注意这里使用的是前题的49次幂关系，不是错误地把所有指数直接模49。

## Common Mistakes

- 未经依据直接把指数模 105。
- 拆指数时把乘法 $7\cdot49$ 误写成加法。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
