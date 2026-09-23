---
id: "Q-2013-FINAL-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Final]]"
source_pdf: "knowledge_base/past_paper/2013-final.pdf"
source_page: 9
solution_page: [9]
question_number: "6(b)"
year: 2013
term: "spring"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Universal instantiation, contraposition, simplification, and universal generalization must connect the rich-person premise to the student conclusion."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-FINAL-P06-b

## Source

![[knowledge_base/past_paper/2013-final.pdf#page=9]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-final.pdf#page=9]].

## Question

(b) Does (i) logically imply (iii)? If yes, give a proof. Clearly state the logic inference rule that you use at each step. If no, explain why not.

Shared context: [[STEM-2013-FINAL-P06 - Shared Problem Prompt]].

## 中文解析

富人没有兼职的逆否命题是有兼职的人不富有。学生条件虽不用于逆否本身，但可由合取前件推出兼职，再链式推出不富有。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 9. The Chinese derivation expands the reasoning.

**Answer.** Yes, (i) implies (iii).

**Derivation/proof.** From (i), simplify to $\forall x(R(x)\Rightarrow\neg J(x))$. By contraposition, $\forall x(J(x)\Rightarrow\neg R(x))$. For arbitrary $x$, $(S(x)\land J(x))\Rightarrow J(x)$; transitivity yields $(S(x)\land J(x))\Rightarrow\neg R(x)$. Universally generalize.

### 中文解答

**推导。** 答案是可以。取任意人 x，由 (i) 全称实例化并简化后件，得 $R(x)\Rightarrow\neg J(x)$。逆否律给 $J(x)\Rightarrow\neg R(x)$。若 $S(x)\land J(x)$，由合取消去得到 $J(x)$，再由肯定前件得到 $\neg R(x)$。所以 $(S(x)\land J(x))\Rightarrow\neg R(x)$；x 任意，作全称推广便是 (iii)。

## Common Mistakes

- 把逆否命题写成 $\neg R\Rightarrow J$。
- 声称 $S(x)$ 单独能推出 $\neg R(x)$。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Predicate Logic - 谓词逻辑]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]
