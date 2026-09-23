---
id: "Q-2016-FINAL-P02-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Final]]"
source_pdf: "knowledge_base/past_paper/2016-final.pdf"
source_page: 5
solution_page: [5]
question_number: "2(a)"
year: 2016
term: "fall"
exam_type: "final"
marks: 3
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]"]
concepts: ["[[Random Variables - 随机变量]]"]
methods: ["[[Random-Variable Method - 随机变量方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Centering the affine random variable removes b and leaves the squared scale factor a squared."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-FINAL-P02-a

## Source

![[knowledge_base/past_paper/2016-final.pdf#page=5]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-final.pdf#page=5]]

## Question

(a) Variance of $f(n)$.

Shared context: [[STEM-2016-FINAL-P02 - Shared Problem Prompt]].

## 中文解析

先减去均值 $am+b$，常数项完全抵消，偏差只剩 $a(n-m)$。方差是偏差平方的期望，因此缩放系数要平方，平移则不影响方差。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 5. The Chinese derivation expands the reasoning.

**Answer.** $\operatorname{Var}(f(n))=a^2v$.

**Derivation/proof.** Linearity gives $E[f(n)]=am+b$. Therefore $\operatorname{Var}(f(n))=E[(an+b-(am+b))^2]=a^2E[(n-m)^2]=a^2v$. This also covers $a=0$, when $f(n)$ is constant.

### 中文解答

**推导。** 先用线性性得 $E(f(n))=am+b$。按方差定义减均值，$f(n)-E(f(n))=an+b-am-b=a(n-m)$，平移项b抵消。平方并取期望，$\operatorname{Var}(f(n))=E[a^2(n-m)^2]=a^2E[(n-m)^2]=a^2v$。a=0时函数恒定、方差零，也包含在公式内。

## Common Mistakes

- 在方差中保留加法常数 $b$。
- 写成 $av$ 而没有把比例系数平方。

## Connections

- [[Subtopic - Random Variables - 随机变量]]
- [[Random Variables - 随机变量]]
- [[Random-Variable Method - 随机变量方法]]
