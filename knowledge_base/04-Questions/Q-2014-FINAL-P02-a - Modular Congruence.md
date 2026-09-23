---
id: "Q-2014-FINAL-P02-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 4
solution_page: [4]
question_number: "2(a)"
year: 2014
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "The modular identity needs a universal proof or a counterexample, and the two inner and outer moduli must be kept distinct."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P02-a

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=4]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=4]].

## Question

(a) $(a\bmod mn)\bmod n=a\bmod n$.

Shared context: [[STEM-2014-FINAL-P02 - Shared Problem Prompt]].

## 中文解析

带余除法的两层表示可直接合并；第一层的 $mn$ 项当然也被 $n$ 整除。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** True.

**Derivation/proof.** Write $a=q_1mn+r_1$ with $r_1=a\bmod mn$, then $r_1=q_2n+r_2$ with $r_2=r_1\bmod n$. Thus $a=(q_1m+q_2)n+r_2$ and $0\le r_2<n$, so $r_2=a\bmod n$.

### 中文解答

**推导。** 由带余除法，令 $a=q_1mn+r_1$，再令 $r_1=q_2n+r_2$，其中 $0\le r_2<n$。代入得 $a=(q_1m+q_2)n+r_2$。此式中 r₂ 已落在合法余数区间，因此 $a\bmod n=r_2=(a\bmod mn)\bmod n$，原命题为真。

## Common Mistakes

- 认为需 $m,n$ 互素。
- 不检查第二个余数范围。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
