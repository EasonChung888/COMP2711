---
id: "Q-2023S-MID-P08-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 12
question_number: "8(c)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "The printed 5 is a logarithm base, so change of base gives a positive constant ratio."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [12]
marks: 2
---
# Q-2023S-MID-P08-c

## Source

[[2023 Spring Midterm]]; printed item 8(c); 2 marks.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=12]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=12]]

## Question

(c) $A=\log n$, $B=\log_5 n$;

Shared printed context: ![[STEM-2023S-MID-P08 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

图像中五写在 log 的下标，表示换底而不是五次方。任意固定大于一的对数底数只改变一个正常数因子，所以三种渐近关系全部成立，答案要把 A 写出来。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $A=O(B)$、$A=\Omega(B)$、$A=\Theta(B)$ 全部成立。

**推导。**

1. 将未标底的 $\log$ 记作某个固定底 $b>1$。原题的五是底数下标；由 change of base，
   $$B=\log_5n=\frac{\log_bn}{\log_b5},\qquad \frac AB=\log_b5.$$
   右边不依赖 $n$，并且因 $b>1,5>1$ 是有限正常数。
2. 对 $n>1$，这个固定比值同时给出正下界与有限上界，所以 $A=\Theta(B)$。按照定义，$\Theta$ 同时蕴含 $O$ 与 $\Omega$，因此题目要求的所有适用关系都应列出。不能把 $\log_5 n$ 误读为 $(\log n)^5$，后者不会具有这里的常数比值。

### English solution

**Answer.** $A=O(B)$, $A=\Omega(B)$, and $A=\Theta(B)$.

**Derivation/proof.** Let the unsubscripted logarithm have a fixed base $b>1$. By change of base, $\log_5 n=(\log_b n)/(\log_b5)$. Consequently $A/B=\log_b5$, a positive constant independent of n. This gives both a positive lower bound and a finite upper bound on the ratio; hence $A=\Theta(B)$ and both $A=O(B)$ and $A=\Omega(B)$ also hold.

## Common Mistakes

- 下标五表示 log₅ n，不是 (log n)⁵。 / Preserve the logarithm base.
- Θ 成立时 O 与 Ω 也成立，必须全部写出。 / List all three relations.

## Connections

- [[Subtopic - Algorithms - 算法]]

- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

The printed 5 is a logarithm base, so change of base gives a positive constant ratio.
