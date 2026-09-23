---
id: "Q-2025S-MID-P08-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf"
source_page: 12
question_number: "8(a)"
year: 2025
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Prove both directions of cancellation while reducing the modulus by the same positive factor."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
related_questions: ["[[Q-2025S-MID-P08-b - Modular Congruence]]"]
---
# Q-2025S-MID-P08-a

## Source

[[2025 Spring Midterm]]; printed item 8(a); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=12]]

Printed answer pages contain the defect below; correction/completion is independently derived: ![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=12]]

Source defect: Page 12 gives only the forward direction, dividing d(a-b)=cdk by d. The reverse implication required by “if and only if” is absent; the note independently supplies multiplication by d.

## Question

(a) Show that for any positive integers $a,b,c,d$,
$$ad\equiv bd\pmod{cd}$$
if and only if
$$a\equiv b\pmod c.$$

## 中文解析

把同余转成整数倍等式后，约去正数 $d$；逆方向则把同一等式乘回 $d$。

## Detailed Solution

Provenance: independently derived correction/completion; the printed defect is retained in Source.

### 中文解答

**答案。** 两同余式等价。

**推导。** 正向：$ad\equiv bd\pmod{cd}$ 表示存在整数 $k$ 使 $d(a-b)=cdk$。因为题设 $d>0$，在整数等式中除以 $d$ 得 $a-b=ck$，于是 $a\equiv b\pmod c$。逆向：若 $a\equiv b\pmod c$，则存在整数 $k$ 使 $a-b=ck$；两边乘 $d$ 得 $ad-bd=cdk$，因此 $ad\equiv bd\pmod{cd}$。两个方向都成立，故为 if and only if。原答案只有正向，逆向是这里补全的证明。

## Common Mistakes

- 约去公因数后模数也必须从 $cd$ 改成 $c$，不能保留原模数。
- “if and only if”需要双向证明，只写除法方向并未完成题目。

## Connections

- [[Topic - Number Theory - 数论]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]

Prove both directions of cancellation while reducing the modulus by the same positive factor.

- Follow-on / contrast: [[Q-2025S-MID-P08-b - Modular Congruence]]: 约去非互素同余的共同因数，正好应用前一题的双向约分。
