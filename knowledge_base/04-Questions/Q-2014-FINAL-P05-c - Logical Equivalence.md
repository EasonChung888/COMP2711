---
id: "Q-2014-FINAL-P05-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 9
solution_page: [9]
question_number: "5(c)"
year: 2014
term: "fall"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "The universal/existential equivalence claim needs a proof that follows the witness and scope of implication rather than symbol rearrangement."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P05-c

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=9]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=9]].

## Question

(c) $\exists x\in U\ p(x)\Rightarrow\forall y\in V\ q(y)$ and $\forall x\in U\forall y\in V(p(x)\Rightarrow q(y))$

Shared context: [[STEM-2014-FINAL-P05 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2014-final.pdf#page=9|PDF physical page 9]].

(c) Equivalent.
$$\begin{aligned}
\exists x\in U\,p(x)\Rightarrow\forall y\in V\,q(y)&\equiv\neg(\exists x\in U\,p(x))\lor(\forall y\in V\,q(y))\\
&\equiv(\forall x\in U\,\neg p(x))\lor(\forall y\in V\,q(y))\\
&\equiv\forall x\in U\forall y\in V(\neg p(x)\lor q(y))\\
&\equiv\forall x\in U\forall y\in V(p(x)\Rightarrow q(y))
\end{aligned}$$

## Supplementary Explanation

**Answer.** Yes.

**Derivation/proof.** The left formula is $\neg\exists x,p(x)\lor\forall y,q(y)=\forall x\neg p(x)\lor\forall yq(y)$. Distributing universal quantifiers over this two-variable disjunction gives $\forall x\forall y(\neg p(x)\lor q(y))$, the right formula.

Conversely, if the right side holds and $p(u)$ holds for some $u$, instantiate at $(u,y)$ for arbitrary $y$ to derive $q(y)$. If there is no such $u$, the left antecedent is false. These cases also cover empty domains.

If no object satisfies $p$, every implication on the right has a false antecedent. If some object satisfies $p$, the left side forces $q(y)$ for every $y$, again proving the right side.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]
- [[Proof Method - 证明方法]]
