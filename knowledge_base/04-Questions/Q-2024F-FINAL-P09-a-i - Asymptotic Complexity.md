---
id: "Q-2024F-FINAL-P09-a-i"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 23
question_number: "9(a)(i)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Compare A/B for 9(a)(i) with A=\\log n, B=2n; list every valid asymptotic relation."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
marks: 1
---
# Q-2024F-FINAL-P09-a-i

## Source

[[2024 Fall Final]]; printed item 9(a)(i); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=23]]

Page 24 printed answer for this label: “(i) O, Ω and Θ”. The answer line has only four entries for five printed items. This note preserves the literal label-specific source claim and independently derives the result without shifting answers to different questions.

Printed discrepant/incomplete material: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=24]].

## Question

(i) $A=\log n\qquad B=2n$

Shared printed context: ![[STEM-2024F-FINAL-P09-a - Shared Problem Prompt#Shared printed wording]]

## 中文解析

$A/B=\log n/(2n)\to0$，因为任意固定底数大于一的对数都比一次幂慢。通过该比值识别本题所有成立的渐近关系，并逐一排除不成立的标签。

## Detailed Solution

Provenance: independently derived; any supplied answer discrepancy is documented in Source.

### 中文解答

**答案。** $O$ only.

**推导。** $A/B=\log n/(2n)\to0$，因为任意固定底数大于一的对数都比一次幂慢。因此存在常数上界使 A 最终不超过 B 的倍数，故 $A=O(B)$；但比值趋零，不可能有正的最终下界，所以 $A\ne\Omega(B)$，也就不是 $\Theta(B)$。源文 B 是 $2n$，二不是指数底数。

## Common Mistakes

- 本题比值没有正的有限极限，不能同时给出 O、Omega、Theta 三个标签。
- B=2n 是线性项而非二的 n 次幂，转录时必须保留这一差别。

## Connections

- [[Subtopic - Algorithms - 算法]]

- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

Compare A/B for 9(a)(i) with A=\log n, B=2n; list every valid asymptotic relation.
