---
id: "Q-2014-FINAL-P09-theta"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 13
solution_page: [13]
question_number: "9"
year: 2014
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 2
difficulty_basis: "The Theta classification follows by comparing the two terms in the derived formula, including the lower-bound contribution."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P09-theta

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=13]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=13]].

## Question

Then simplify the closed-form expression using the big $\Theta$ notation.

Shared context: [[STEM-2014-FINAL-P09 - Shared Problem Prompt]].

## 中文解析

比较指数而非只看两项系数。$\log_2 5\approx2.322$ 大于 2，因此递归树的叶子贡献主导。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 13. The Chinese derivation expands the reasoning.

**Answer.** $T(n)=\Theta(n^{\log_25})$.

**Derivation/proof.** Since $\log_25>2$, the term $5n^{\log_25}$ dominates $4n^2$ in the closed form, leaving the stated tight order. Indeed, $n^{\log_2 5}\le5n^{\log_2 5}-4n^2\le5n^{\log_2 5}$ for $n\ge1$.

### 中文解答

**推导。** 闭式是 $T(n)=5n^{\log_2 5}-4n^2$。因为 $\log_2 5>2$，当 $n\ge1$ 时 $n^2\le n^{\log_2 5}$。故 $n^{\log_2 5}\le T(n)\le5n^{\log_2 5}$。上下界系数分别可取一与五，因此 $T(n)=\Theta(n^{\log_2 5})$。

## Common Mistakes

- 把结果写成 $\Theta(n^2)$。
- 忽略负的低阶项便声称函数可能为负。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
