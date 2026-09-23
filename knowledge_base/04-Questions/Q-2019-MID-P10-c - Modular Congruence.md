---
id: "Q-2019-MID-P10-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 12
solution_page: [12]
question_number: "10(c)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Since 49 is seven squared, the supplied inverse must be applied twice."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 3
---
# Q-2019-MID-P10-c

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=12]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=12]]

## Question

(c) $49x\equiv11\pmod{104}$

Shared context: [[STEM-2019-MID-P10 - Shared Problem Prompt]].

## 中文解析

四十九是七的平方，所以只乘一次十五仍剩一个七，要连续使用两次逆元。每次先取余能使数值较小；最后得到八十三，再代入原来的四十九系数方程验证。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 12. The Chinese derivation expands the reasoning.

**Answer.** $x=83$.

**Derivation/proof.** Write $49=7^2$. Multiplying once by 15 gives $7x\equiv165\equiv61\pmod{104}$. Multiplying again gives $x\equiv15\cdot61=915\equiv83\pmod{104}$. Check $49\cdot83=4067=39\cdot104+11$, confirming the result.

### 中文解答

**推导。** 因 $49=7^2$，可以连续两次乘逆元 $15$。第一次得 $7x\equiv165\equiv61\pmod{104}$；第二次得 $x\equiv15\cdot61=915\equiv83\pmod{104}$。于是 $x=83$。代回 $49\cdot83=4067=39\cdot104+11$，验证无误；每一步乘的是可逆元素，所以没有遗失或增加解。

## Common Mistakes

- 把十五直接当作四十九的逆元。
- 做第二次乘法时用错第一次余数。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
