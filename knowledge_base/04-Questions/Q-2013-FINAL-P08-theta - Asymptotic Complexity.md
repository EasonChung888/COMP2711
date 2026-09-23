---
id: "Q-2013-FINAL-P08-theta"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Final]]"
source_pdf: "knowledge_base/past_paper/2013-final.pdf"
source_page: 11
solution_page: [11]
question_number: "8"
year: 2013
term: "spring"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 2
difficulty_basis: "The asymptotic conclusion follows only after comparing the exponents two and log base two of three in the established closed form."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-FINAL-P08-theta

## Source

![[knowledge_base/past_paper/2013-final.pdf#page=11]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-final.pdf#page=11]].

## Question

Simplify the closed-form expression using the big $\Theta$ notation.

Shared context: [[STEM-2013-FINAL-P08 - Shared Problem Prompt]].

## 中文解析

闭式已显示两个幂次。比较指数 $2$ 与 $\log_2 3$，而不是只看系数 $4$ 和 $-3$。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 11. The Chinese derivation expands the reasoning.

**Answer.** $T(n)=\Theta(n^2)$.

**Derivation/proof.** From $T(n)=4n^2-3n^{\log_2 3}$ and $\log_2 3<2$, the $n^2$ term asymptotically dominates $n^{\log_2 3}$; the positive leading coefficient establishes $\Theta(n^2)$. Explicitly, $n^2\le4n^2-3n^{\log_2 3}\le4n^2$ for $n\ge1$.

### 中文解答

**推导。** 由闭式 $T(n)=4n^2-3n^{\log_2 3}$，且 $\log_2 3<2$，对 $n\ge1$ 有 $n^{\log_2 3}\le n^2$。因此 $n^2\le4n^2-3n^{\log_2 3}\le4n^2$。上下界常数可取 1 与 4，所以 $T(n)=\Theta(n^2)$，负的低阶项不会抵消二次主项。

## Common Mistakes

- 写成 $\Theta(n^{\log_2 3})$。
- 把 $O(n^2)$ 当作足以回答 $\Theta$。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
