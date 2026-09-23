---
id: "Q-2014-FINAL-P10-closed-form"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 14
solution_page: [14]
question_number: "10"
year: 2014
term: "fall"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Recurrence Relations - 递推关系]]"]
methods: ["[[Recurrence-Solving Method - 递推求解法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "The recurrence solution combines an eight-fold homogeneous term with a ten-power forcing term and must satisfy V1 equals nine."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P10-closed-form

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=14]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=14]].

## Question

Solve the recurrence to get a closed-form formula for $V_n$.

Shared context: [[STEM-2014-FINAL-P10 - Shared Problem Prompt]].

## 中文解析

非齐次项是 $10^{n-1}$，展开后为等比和。化简所得公式在 $n=1$ 给 $9$，可作为初值检查。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 14. The Chinese derivation expands the reasoning.

**Answer.** $V_n=(10^n+8^n)/2$.

**Derivation/proof.** Iterating $V_n=8V_{n-1}+10^{n-1}$ gives $V_n=9\cdot8^{n-1}+10\cdot8^{n-2}\sum_{j=0}^{n-2}(10/8)^j=9\cdot8^{n-1}+(10^n-10\cdot8^{n-1})/2=(10^n+8^n)/2$.

### 中文解答

**推导。** 由 $V_1=9$ 展开 $V_n=8V_{n-1}+10^{n-1}$，对 $n\ge2$ 得 $V_n=9\cdot8^{n-1}+10\cdot8^{n-2}\sum_{j=0}^{n-2}(10/8)^j$。等比求和后，第二项为 $(10^n-10\cdot8^{n-1})/2$，所以 $V_n=(10^n+8^n)/2$。$n=1$ 直接代入给 $(10+8)/2=9$；代入递推也有 $8(10^{n-1}+8^{n-1})/2+10^{n-1}=(10^n+8^n)/2$，验证所有 n。

## Common Mistakes

- 得到 $10^n/2$ 而丢失 $8^n$ 项。
- 将初值 $V_1=9$ 代错成 10。

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Recurrence Relations - 递推关系]]
- [[Recurrence-Solving Method - 递推求解法]]
