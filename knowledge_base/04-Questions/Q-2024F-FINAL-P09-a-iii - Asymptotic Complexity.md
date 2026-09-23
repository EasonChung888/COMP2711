---
id: "Q-2024F-FINAL-P09-a-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 23
question_number: "9(a)(iii)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Compare A/B for 9(a)(iii) with A=n^2, B=5^{\\log_2 n}; list every valid asymptotic relation."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
marks: 1
---
# Q-2024F-FINAL-P09-a-iii

## Source

[[2024 Fall Final]]; printed item 9(a)(iii); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=23]]

Page 24 printed answer for this label: “(iii) A = Ω(B)”. The answer line has only four entries for five printed items. This note preserves the literal label-specific source claim and independently derives the result without shifting answers to different questions.

Printed discrepant/incomplete material: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=24]].

## Question

(iii) $A=n^2\qquad B=5^{\log_2 n}$

Shared printed context: ![[STEM-2024F-FINAL-P09-a - Shared Problem Prompt#Shared printed wording]]

## 中文解析

用指数换底恒等式 $5^{\log_2 n}=n^{\log_2 5}$。通过该比值识别本题所有成立的渐近关系，并逐一排除不成立的标签。

## Detailed Solution

Provenance: independently derived; any supplied answer discrepancy is documented in Source.

### 中文解答

**答案。** $O$ only.

**推导。** 用指数换底恒等式 $5^{\log_2 n}=n^{\log_2 5}$。因为 $5>4$，$\log_2 5>2$，所以 $A/B=n^{2-\log_2 5}\to0$。因此 A 严格慢于 B，仅有 $A=O(B)$，没有 $\Omega$ 或 $\Theta$。这里 $\log_2 n$ 整体位于五的指数上，不能把 B 误读成五乘对数。

## Common Mistakes

- 五的整个指数是 $\log_2 n$，应换写成 $n^{\log_2 5}$；因 $\log_2 5>2$，比值为 $n^{2-\log_2 5}\to0$，不是正的常数。这里仅有 $O$，不存在 $\Omega$ 的正下界，因而也没有 $\Theta$。
- 原答案 (iii) 写 $A=\Omega(B)$，此标签错误：它错误断言 $n^2$ 至少增长得和 $B$ 一样快；实际 $n^2=o(B)$。不能把本题误套成前一题的有限正极限情形；应保留正确的 $O$，排除 $\Omega$ 和 $\Theta$。

## Connections

- [[Subtopic - Algorithms - 算法]]

- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

Compare A/B for 9(a)(iii) with A=n^2, B=5^{\log_2 n}; list every valid asymptotic relation.
