---
id: "Q-2024F-FINAL-P09-a-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 23
question_number: "9(a)(ii)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Compare A/B for 9(a)(ii) with A=10n^2, B=2n^2+10000n+5n\\log n; list every valid asymptotic relation."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
marks: 1
---
# Q-2024F-FINAL-P09-a-ii

## Source

[[2024 Fall Final]]; printed item 9(a)(ii); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=23]]

Page 24 printed answer for this label: “(ii) A = O(B)”. The answer line has only four entries for five printed items. This note preserves the literal label-specific source claim and independently derives the result without shifting answers to different questions.

Printed discrepant/incomplete material: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=24]].

## Question

(ii) $A=10n^2\qquad B=2n^2+10000n+5n\log n$

Shared printed context: ![[STEM-2024F-FINAL-P09-a - Shared Problem Prompt#Shared printed wording]]

## 中文解析

将两边除以 $n^2$，有 $A/B=10/(2+10000/n+5\log n/n)\to10/2=5$。通过该比值识别本题所有成立的渐近关系，并逐一排除不成立的标签。

## Detailed Solution

Provenance: independently derived; any supplied answer discrepancy is documented in Source.

### 中文解答

**答案。** $O,\Omega,\Theta$.

**推导。** 将两边除以 $n^2$，有 $A/B=10/(2+10000/n+5\log n/n)\to10/2=5$。有限正极限给出最终正上下界，因此 $A=\Theta(B)$。由于 $\Theta$ 同时意味着大 O 与大 Omega，题目要求列全部关系，故三个 $O,\Omega,\Theta$ 都要列出。一万虽大，只影响有限范围，不改变极限阶。

## Common Mistakes

- 本题 $B=2n^2+10000n+5n\log n$，主项是 $2n^2$；不能误抄成上一题的线性项。比较时应得 $A/B\to5$，这个有限正极限同时给出上界与下界，不能因低阶项的系数一万很大就改变分类。
- 原答案 (ii) 只列 $O$：该标签本身正确，但遗漏了同样成立的 $\Omega$ 与 $\Theta$。题目要求列出全部关系，所以必须补齐这两项，不能误称官方漏掉的是 $O$。

## Connections

- [[Subtopic - Algorithms - 算法]]

- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

Compare A/B for 9(a)(ii) with A=10n^2, B=2n^2+10000n+5n\log n; list every valid asymptotic relation.
