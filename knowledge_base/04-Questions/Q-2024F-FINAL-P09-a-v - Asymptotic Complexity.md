---
id: "Q-2024F-FINAL-P09-a-v"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 23
question_number: "9(a)(v)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Compare A/B for 9(a)(v) with A=n^3(\\log n)^5, B=n^{3.1}; list every valid asymptotic relation."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
marks: 1
---
# Q-2024F-FINAL-P09-a-v

## Source

[[2024 Fall Final]]; printed item 9(a)(v); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=23]]

Editorial observation: No (v) answer is printed on page 24. The answer line has only four entries for five printed items. This observation describes an omission; it is not a quotation from the PDF. The result below is independently derived without shifting answers to different questions.

Printed discrepant/incomplete material: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=24]].

## Question

(v) $A=n^3(\log n)^5\qquad B=n^{3.1}$

Shared printed context: ![[STEM-2024F-FINAL-P09-a - Shared Problem Prompt#Shared printed wording]]

## 中文解析

比值为 $A/B=(\log n)^5/n^{0.1}$。通过该比值识别本题所有成立的渐近关系，并逐一排除不成立的标签。

## Detailed Solution

Provenance: independently derived; any supplied answer discrepancy is documented in Source.

### 中文解答

**答案。** $O$ only.

**推导。** 比值为 $A/B=(\log n)^5/n^{0.1}$。任意固定次数的对数都被任意固定正幂支配，即使该幂只有零点一，此比值也趋零。因此 $A=O(B)$，而 $\Omega$ 的正下界不存在，所以不为 $\Omega$ 或 $\Theta$。结论比较 n 趋无穷的情况，不依赖较小 n 的数值交叉。

## Common Mistakes

- 本题比值没有正的有限极限，不能同时给出 O、Omega、Theta 三个标签。
- 零点一次幂最终仍胜过固定五次对数幂，短区间的数值不能决定渐近阶。

## Connections

- [[Subtopic - Algorithms - 算法]]

- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

Compare A/B for 9(a)(v) with A=n^3(\log n)^5, B=n^{3.1}; list every valid asymptotic relation.
