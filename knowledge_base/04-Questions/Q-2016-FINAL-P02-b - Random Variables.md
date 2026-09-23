---
id: "Q-2016-FINAL-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Final]]"
source_pdf: "knowledge_base/past_paper/2016-final.pdf"
source_page: 5
solution_page: [5]
question_number: "2(b)"
year: 2016
term: "fall"
exam_type: "final"
marks: 3
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]"]
concepts: ["[[Random Variables - 随机变量]]"]
methods: ["[[Random-Variable Method - 随机变量方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "The input is squared before applying f, so only the second moment receives the coefficient a."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-FINAL-P02-b

## Source

![[knowledge_base/past_paper/2016-final.pdf#page=5]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-final.pdf#page=5]]

## Question

(b) Expectation of $f(n^2)$.

Shared context: [[STEM-2016-FINAL-P02 - Shared Problem Prompt]].

## 中文解析

括号内先平方，故函数值是 $an^2+b$，不是 $(an+b)^2$。由方差公式得到二阶矩 $E[n^2]=v+m^2$，再用线性期望代入。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 5. The Chinese derivation expands the reasoning.

**Answer.** $E[f(n^2)]=a(v+m^2)+b$.

**Derivation/proof.** From $v=E[n^2]-(E[n])^2$, obtain $E[n^2]=v+m^2$. Since $f(n^2)=an^2+b$, linearity yields $E[f(n^2)]=aE[n^2]+b=a(v+m^2)+b$.

### 中文解答

**推导。** 括号内先平方，所以 $f(n^2)=an^2+b$。已知方差 $v=E(n^2)-[E(n)]^2=E(n^2)-m^2$，移项得 $E(n^2)=v+m^2$。于是 $E(f(n^2))=aE(n^2)+b=a(v+m^2)+b$。这里没有函数外的平方，不能使用下一问的展开式。

## Common Mistakes

- 把 $f(n^2)$ 与 $f(n)^2$ 混为一谈。
- 错误地使用 $E[n^2]=m^2$，遗漏方差。

## Connections

- [[Subtopic - Random Variables - 随机变量]]
- [[Random Variables - 随机变量]]
- [[Random-Variable Method - 随机变量方法]]
