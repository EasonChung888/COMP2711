---
id: "Q-2020-FINAL1-P06-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-1.pdf"
source_page: 5
question_number: "6(a)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 2
difficulty_basis: "The double coefficient loop dominates the linear initialization and output loops."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 2
related_questions: ["[[Q-2020-FINAL1-P06-b - Asymptotic Complexity]]"]
---
# Q-2020-FINAL1-P06-a

## Source

![[knowledge_base/past_paper/2020-final-part-1.pdf#page=5]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-1.pdf#page=5]]

## Question

Algorithm 1 computes the multiplication of two polynomials with degree $m$ and $n$ respectively. What is its time complexity? Write your answer in the best big-$O$ notation with respect to $m$ and $n$.

Shared context: [[STEM-2020-FINAL1-P06 - Shared Problem Prompt]].

## 中文解析

循环包含零次项，因此精确次数是 (m+1)(n+1)。当两次数都至少一时与 mn 同阶，符合标准答案；如果允许常数多项式，用带加一的形式才能覆盖零次数边界，不能把实际工作量写成零。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $O(mn)$ as both degrees grow; more uniformly $\Theta((m+1)(n+1))$ also covers degree zero.

**Derivation/proof.** The coefficient reads cost Θ(m+n+2), and zeroing/output construction cost Θ(m+n+1). The nested loop performs exactly (m+1)(n+1) coefficient multiply-adds. This product dominates the linear terms, giving Θ((m+1)(n+1)) in the source's unit-cost coefficient-operation model. For m,n≥1 this is Θ(mn), whose tight big-O answer is O(mn).

### 中文解答

**推导。** 读入两多项式系数共 $(m+1)+(n+1)$ 次；清零与构造输出各需线性于 $m+n+1$ 的工作。主双重循环含端点 $i=0,\ldots,m$、$j=0,\ldots,n$，因此精确执行 $(m+1)(n+1)$ 次系数乘加。这个乘积控制前面各线性项，按每次系数运算常数时间的模型，总时间 $\Theta((m+1)(n+1))$。当两次数 $m,n\ge1$ 时它与 $mn$ 同阶，故源文的最佳大 O 答案是 $O(mn)$。加一形式另外明确覆盖某个次数为零的常数多项式边界，不能把这种情形工作量说成零。

## Common Mistakes

- 忘记系数从零次项开始。
- 把连续两个循环和嵌套循环都当作相加。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

- Used by: [[Q-2020-FINAL1-P06-b - Asymptotic Complexity]]
