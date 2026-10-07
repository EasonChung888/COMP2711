---
id: "Q-2018-MID-P04-a-contrapositive"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 6
solution_page: [6]
question_number: "4(a)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]","[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]","[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]","[[Functions - 函数]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]","[[Proof Method - 证明方法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "Contraposition reverses the implication and replaces at least by strictly fewer."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P04-a-contrapositive

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=6]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=6]]

## Question

(a) Consider finite sets $S$ and $T$, and a function $f:S\to T$. Write down the contrapositive of “If $f$ is injective, then $|T|\ge|S|$.”

Shared context: [[STEM-2018-MID-P04-a - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2018-midterm.pdf#page=6|physical PDF page 6]].

The contrapositive is “If $\lvert T\rvert<\lvert S\rvert$, then $f$ is not injective”. We can prove it by the pigeonhole principle. $f$ maps pigeons in $S$ to holes in $T$. Since $\lvert T\rvert<\lvert S\rvert$, there must be two pigeons that share a same hole, say $a,b\in S$. Then $a\ne b$ but $f(a)=f(b)$, so $f$ is not injective.

## Supplementary Explanation

**Answer.** If $|T|<|S|$, then $f$ is not injective.

**Derivation/proof.** Write the original statement as $A\to B$, where $A$ is injectivity and $B$ is $|T|\ge|S|$. Its contrapositive is $\neg B\to\neg A$. For finite cardinalities, $\neg(|T|\ge|S|)$ is exactly $|T|<|S|$, yielding the stated sentence.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Logical Equivalence - 逻辑等价]]
- [[Functions - 函数]]
- [[Logic-Law Method - 逻辑律方法]]
- [[Proof Method - 证明方法]]
