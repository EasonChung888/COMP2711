---
id: "Q-2022-MID-P07-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2022 Midterm]]"
source_pdf: "knowledge_base/past_paper/2022-midterm.pdf"
source_page: 3
question_number: "7(a)"
year: 2022
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Fermat removes five periods of length 108 from exponent 542."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 5
---
# Q-2022-MID-P07-a

## Source

![[knowledge_base/past_paper/2022-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2022-midterm.pdf#page=3]]

## Question

Calculate $2^{542}\bmod109$. Show your steps.

## 中文解析

素数模数一百零九给出指数周期一百零八。五百四十二等于五个一百零八加二，因此只剩二的平方。指数取余与底数取余使用不同模数，不能混淆。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $4$.

**Derivation/proof.** 109 is prime and 2 is coprime to it, so 2^108≡1 mod 109. Divide the exponent: 542=5·108+2. Then 2^542=(2^108)^5·2²≡1·4≡4 mod 109. The representative4 already lies between0 and 108.

### 中文解答

**推导。** 因为 $109$ 是质数且与二互质，费马小定理给 $2^{108}\equiv1\pmod{109}$。指数分解为 $542=5\cdot108+2$，故 $2^{542}=(2^{108})^5\cdot2^2\equiv1^5\cdot4=4\pmod{109}$。答案取标准余数四；指数的周期用 $108$，不是把指数模 $109$。

## Common Mistakes

- 把指数模一百零九。
- 误算五百四十二除一百零八的余数。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
