---
id: "Q-2019-MID-P06-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 8
solution_page: [8]
question_number: "6(a)"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Multiplying two independent divisibility witnesses directly exhibits c squared as a multiple of ab."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 3
---
# Q-2019-MID-P06-a

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=8]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=8]]

## Question

(a) For all integers $a,b,c$, if $a\mid c$ and $b\mid c$, then $ab\mid c^2$.

## 中文解析

从两个整除条件分别写出 c 等于 a 的整数倍，以及 c 等于 b 的整数倍，再把两个等式相乘。这样自然得到 c 的平方是 ab 的整数倍，不需要错误地先声称 ab 整除 c。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 8. The Chinese derivation expands the reasoning.

**Answer.** True.

**Derivation/proof.** The premises give integers $k,l$ with $c=ak$ and $c=bl$. Multiplying these equalities produces $c^2=(ak)(bl)=ab(kl)$. Since $kl$ is an integer, this is exactly the divisibility witness for $ab\mid c^2$. No coprimality assumption is required.

### 中文解答

**推导。** 结论真。按整除定义，有整数 $k,l$ 使 $c=ak$、$c=bl$。把两个等式相乘，$c^2=(ak)(bl)=ab(kl)$。因为 $kl$ 仍为整数，这个等式正是 $ab\mid c^2$ 的见证。不需要 $a,b$ 互素，也没有除以可能为零的数；在允许 $0\mid0$ 的整除定义下零值情况同样由此等式覆盖。

## Common Mistakes

- 把结论改成 ab 整除 c。
- 无端添加 a 与 b 互质的条件。

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Modular Congruence - 同余]]
- [[Proof Strategy - 证明策略]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Proof Method - 证明方法]]
