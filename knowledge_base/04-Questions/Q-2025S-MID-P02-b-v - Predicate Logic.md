---
id: "Q-2025S-MID-P02-b-v"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf"
source_page: 4
question_number: "2(b)(v)"
year: 2025
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 3
difficulty_basis: "Translate prime-field inverses with explicit nonzero representative bounds."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
---
# Q-2025S-MID-P02-b-v

## Source

[[2025 Spring Midterm]]; printed item 2(b)(v); no separately printed atomic marks.

![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=4]]

Printed answer pages contain the defect below; correction/completion is independently derived: ![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=4]]

Source defect: Page 4 prints $\forall p(prime(p)\to\forall x(x<p\to\exists y(y<p\land xy\equiv1\pmod p)))$, omitting non-zero. At p=2,x=0 it demands an impossible inverse. Add the required 0<x bound from the printed English statement.

## Question

![[STEM-2025S-MID-P02-b - Shared Problem Prompt#Shared printed wording]]

(v) For any prime number $p$, every non-zero element in $\mathbb Z_p$ has a multiplicative inverse.

## 中文解析

以零至 $p-1$ 的自然数代表剩余类，非零必须额外写出 $0<x$。

## Detailed Solution

Provenance: independently derived correction/completion; the printed defect is retained in Source.

### 中文解答

**答案。** $\forall p(prime(p)\to\forall x((0<x\land x<p)\to\exists y(y<p\land xy\equiv1\pmod p)))$。

**推导。** 首先用 $\forall p(prime(p)\to\cdots)$ 限制素数模数。其剩余类代表满足 $0\le x<p$，而自然数域已保证非负，所以非零代表的条件是 $0<x\land x<p$。对每个这样的 $x$，逆元存在表示 $\exists y(y<p\land xy\equiv1\pmod p)$；乘积余一自动排除 $y=0$，无需另加谓词。于是得到答案的嵌套量词。原答案仅写 $x<p$，代入 $p=2,x=0$ 就要求 $0y\equiv1\pmod2$，这是不可能的，说明非零限制不可省略。

## Common Mistakes

- 全称 $x$ 不能覆盖零剩余类，否则会要求零拥有乘法逆元。
- 量词顺序必须允许逆元 $y$ 随 $x$ 改变，不能先选一个统一逆元。

## Connections

- [[Topic - Logic - 逻辑]]
- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Translate prime-field inverses with explicit nonzero representative bounds.
