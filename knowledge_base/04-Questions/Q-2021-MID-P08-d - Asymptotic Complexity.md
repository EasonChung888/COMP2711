---
id: "Q-2021-MID-P08-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 3
question_number: "8(d)"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 1
difficulty_basis: "Changing logarithm bases gives a fixed positive ratio."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 3
---
# Q-2021-MID-P08-d

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=4]]

## Question

$f(x)=\log_3(x),g(x)=\log_{20}(x)$.

Shared context: [[STEM-2021-MID-P08 - Shared Problem Prompt]].

## 中文解析

对数换底只改变常数因子。两个函数之比固定为 ln20/ln3，既有正的上界也有正的下界，所以 Θ 成立，而题目要求多选，O 与 Ω 也必须一并选上。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** (i), (ii), and (iii).

**Derivation/proof.** For x>1, change of base gives $f(x)=\ln x/\ln3$ and $g(x)=\ln x/\ln20$. Consequently f/g=ln20/ln3 is a fixed positive constant. Taking that constant (or slightly larger/smaller constants) yields both upper and lower bounds, so Θ holds and automatically includes O and Ω.

### 中文解答

**推导。** 对 $x>1$ 用换底公式：$f(x)=\ln x/\ln3$，$g(x)=\ln x/\ln20$，故 $f(x)/g(x)=\ln20/\ln3=c>0$ 为固定常数。因此 $f=cg$ 同时给出正的常数上界和下界，$f=\Theta(g)$，也必有 $f=O(g)$ 和 $f=\Omega(g)$。题目多选“所有适用”，所以(i)、(ii)、(iii)都选。

## Common Mistakes

- 只选 Θ，忘记它蕴含 O 和 Ω。
- 把底数大小当作不同增长阶。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
