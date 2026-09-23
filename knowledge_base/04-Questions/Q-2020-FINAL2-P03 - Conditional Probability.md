---
id: "Q-2020-FINAL2-P03"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 2]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-2.pdf"
source_page: 2
question_number: "3"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]","[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Conditional Probability - 条件概率]]","[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Conditional Probability - 条件概率]]","[[Set Operations - 集合运算]]"]
methods: ["[[Conditional-Probability Method - 条件概率方法]]","[[Set Identity Method - 集合恒等式方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Absorption in the numerator and complement of a difference in the denominator give five ninths."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [2]
marks: 5
---
# Q-2020-FINAL2-P03

## Source

![[knowledge_base/past_paper/2020-final-part-2.pdf#page=2]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-2.pdf#page=2]]

## Question

Let $A$ and $B$ be two events. It is known that $p(A)=0.7$, $p(B)=0.6$, $p(A\cap B)=0.5$, what is $p(B\mid A\cup\overline B)$?

## 中文解析

条件事件里 B 上方有补集横线，不能忽略。与 B 相交后只剩 A 与 B 的交集；分母可用补集求得，排除“属于 B 但不属于 A”的一成，剩九成，所以答案为九分之五。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $5/9$.

**Derivation/proof.** The conditional numerator is $p(B\cap(A\cup\overline B))=p(A\cap B)=.5$, since $B\cap\overline B=\varnothing$. The conditioning event excludes exactly $\overline A\cap B$, of probability $.6-.5=.1$. Its probability is therefore .9. Dividing gives $.5/.9=5/9$. The bar over B is visible in the printed prompt and materially changes both event calculations.

### 中文解答

**推导。** 条件事件是 $A\cup\overline B$，必须保留 $B$ 上的补集横线。分子由分配律得 $B\cap(A\cup\overline B)=(A\cap B)\cup(B\cap\overline B)=A\cap B$，所以概率 $0.5$。分母可取补集：$\overline{A\cup\overline B}=\overline A\cap B$，概率为 $P(B)-P(A\cap B)=0.6-0.5=0.1$，故条件事件概率 $0.9$。于是 $P(B\mid A\cup\overline B)=0.5/0.9=5/9$。

## Common Mistakes

- 丢掉 B 上的横线而算成普通并集。
- 把条件概率分母误用 p(A)。

## Connections

- [[Subtopic - Conditional Probability - 条件概率]]
- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Conditional Probability - 条件概率]]
- [[Set Operations - 集合运算]]
- [[Conditional-Probability Method - 条件概率方法]]
- [[Set Identity Method - 集合恒等式方法]]
