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

## Official Answer

Source: [[knowledge_base/past_paper/2013-final.pdf#page=9|PDF physical page 9]].

(b) Yes, (i) does imply (iii).

**Proof:** Statement (i) can be broken up into the following two statements:
$$\forall x\in U(R(x)\Rightarrow F(x))$$
$$\forall x\in U(R(x)\Rightarrow\neg J(x))$$
The contrapositive of the second rule is:
$$\forall x\in U(J(x)\Rightarrow\neg R(x))$$
Let $x$ be a generic element in $U$. We have
$$\begin{aligned}S(x)\land J(x)&\Rightarrow J(x)\\J(x)&\Rightarrow\neg R(x)\end{aligned}$$
By transitivity of logic implication, we get:
$$S(x)\land J(x)\Rightarrow\neg R(x)$$
By the rule of Universal Generalization, we obtain:
$$\forall x\in U(S(x)\land J(x)\Rightarrow\neg R(x)).$$
Q.E.D

## Supplementary Explanation

**Answer.** Yes, (i) implies (iii).

**Derivation/proof.** From (i), simplify to $\forall x(R(x)\Rightarrow\neg J(x))$. By contraposition, $\forall x(J(x)\Rightarrow\neg R(x))$. For arbitrary $x$, $(S(x)\land J(x))\Rightarrow J(x)$; transitivity yields $(S(x)\land J(x))\Rightarrow\neg R(x)$. Universally generalize.

Universal instantiation gives the premise for an arbitrary $x$; conjunction elimination supplies $J(x)$, and modus ponens supplies $\neg R(x)$. Since $x$ was arbitrary, universal generalization is valid.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Predicate Logic - 谓词逻辑]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]
