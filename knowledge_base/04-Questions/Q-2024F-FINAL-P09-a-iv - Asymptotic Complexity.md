---
id: "Q-2024F-FINAL-P09-a-iv"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 23
question_number: "9(a)(iv)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Compare A/B for 9(a)(iv) with A=n^2\\log n, B=n\\log^6 n; list every valid asymptotic relation."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
marks: 1
---
# Q-2024F-FINAL-P09-a-iv

## Source

[[2024 Fall Final]]; printed item 9(a)(iv); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=23]]

Page 24 printed answer for this label: “(iv) A = O(B)”. The answer line has only four entries for five printed items. This note preserves the literal label-specific source claim and independently derives the result without shifting answers to different questions.

Printed discrepant/incomplete material: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=24]].

## Question

(iv) $A=n^2\log n\qquad B=n\log^6 n$

Shared printed context: ![[STEM-2024F-FINAL-P09-a - Shared Problem Prompt#Shared printed wording]]

## 中文解析

约去共同因子 $n\log n$ 得 $A/B=n/(\log n)^5$。通过该比值识别本题所有成立的渐近关系，并逐一排除不成立的标签。

## Detailed Solution

Provenance: independently derived; any supplied answer discrepancy is documented in Source.

### 中文解答

**答案。** $\Omega$ only.

**推导。** 约去共同因子 $n\log n$ 得 $A/B=n/(\log n)^5$。固定次对数幂比任何正幂 n 慢，因此该比值趋无穷，A 最终至少为 B 的常数倍，$A=\Omega(B)$；但不能被 B 的固定常数倍压住，所以不属于 $O(B)$，也不属于 $\Theta(B)$。

## Common Mistakes

- 本题比值没有正的有限极限，不能同时给出 O、Omega、Theta 三个标签。
- log 的六次幂位于分母比较中，不能因此忽略 A 多出的一次 n。

## Connections

- [[Subtopic - Algorithms - 算法]]

- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

Compare A/B for 9(a)(iv) with A=n^2\log n, B=n\log^6 n; list every valid asymptotic relation.
