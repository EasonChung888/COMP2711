---
id: "Q-2016-MID-P04-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Midterm]]"
source_pdf: "knowledge_base/past_paper/2016-midterm.pdf"
source_page: 7
solution_page: [7]
question_number: "4(a)"
year: 2016
term: "fall"
exam_type: "midterm"
marks: 4
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["construction"]
difficulty: 2
difficulty_basis: "The eight-row table must compute XOR before comparing that result with r by biconditional."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-MID-P04-a

## Source

![[knowledge_base/past_paper/2016-midterm.pdf#page=7]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-midterm.pdf#page=7]]

## Question

(a) Construct a truth table for the statement $(p\oplus q)\Leftrightarrow r$.

## 中文解析

异或在 $p,q$ 恰有一个为真时为真。再把这个中间结果与 $r$ 比较，相同则双条件为真，不同则为假，八个赋值都必须列出。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 7. The Chinese derivation expands the reasoning.

**Answer.** The final column in TTT, TTF, TFT, TFF, FTT, FTF, FFT, FFF order is F, T, T, F, T, F, F, T.

**Derivation/proof.** Evaluate XOR first, then compare that result with $r$ in each row.

| $p$ | $q$ | $r$ | $p\oplus q$ | $(p\oplus q)\leftrightarrow r$ |
| --- | --- | --- | --- | --- |
| T | T | T | F | F |
| T | T | F | F | T |
| T | F | T | T | T |
| T | F | F | T | F |
| F | T | T | T | T |
| F | T | F | T | F |
| F | F | T | F | F |
| F | F | F | F | T |

The XOR column tests whether $p\ne q$; the last column tests whether that Boolean result equals $r$.

### 中文解答

**推导。** 按 TTT、TTF、TFT、TFF、FTT、FTF、FFT、FFF 排列八个赋值。异或 $p\oplus q$ 仅在前两值不同时真，故中间列依次为 F,F,T,T,T,T,F,F。再与第三值r比较，相同则双条件真，得到最终列 F,T,T,F,T,F,F,T。上方完整表逐行列出两列；例如TTF时异或为F，与r=F相同，所以最后为T，而TTT最后为F。八个赋值全部覆盖。

## Common Mistakes

- 把异或当作普通析取，使同真行错误。
- 用蕴含规则而非双条件规则处理最后一列。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
