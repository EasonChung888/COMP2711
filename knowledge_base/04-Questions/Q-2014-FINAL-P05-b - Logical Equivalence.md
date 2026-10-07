---
id: "Q-2014-FINAL-P05-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 9
solution_page: [9]
question_number: "5(b)"
year: 2014
term: "fall"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]","[[Proof Method - 证明方法]]"]
question_types: ["counterexample"]
difficulty: 3
difficulty_basis: "The existential formulas can be separated by a small universe and predicate assignment, making a concrete countermodel decisive."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P05-b

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=9]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=9]].

## Question

(b) $\exists x\in U\ p(x)\Rightarrow\exists x\in U\ q(x)$ and $\exists x\in U(p(x)\Rightarrow q(x))$

Shared context: [[STEM-2014-FINAL-P05 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2014-final.pdf#page=9|PDF physical page 9]].

(b) Not equivalent. Counterexample:

- $U$: All animals; $p(x)$: $x$ can fly; $q(x)$: $x$ can fly airplane.
- LHS is false because there are animals that can fly, but no animal can fly airplane.
- RHS is true because there are animals that cannot fly and hence $p(x)\Rightarrow q(x)$ is true.

## Supplementary Explanation

**Answer.** No.

**Derivation/proof.** Let $U$ be animals, $p(x)$ mean ‘$x$ can fly’, and $q(x)$ mean ‘$x$ can fly an airplane’. The left implication is false (some animal flies but none flies an airplane), while the right is true because any non-flying animal makes $p(x)\Rightarrow q(x)$ true.

To remove ambiguity in the informal animal example, take $U=\{u,v\}$, $p(u)=T,p(v)=F$, and $q(u)=q(v)=F$. On the left, $\exists x\,p(x)$ is true and $\exists x\,q(x)$ is false. On the right, $v$ witnesses $p(v)\Rightarrow q(v)=F\Rightarrow F=T$.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]
- [[Proof Method - 证明方法]]
