---
id: "Q-2015-MID-P03-equivalence"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 7
solution_page: [8]
question_number: "3"
year: 2015
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]","[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "All three quantified statements must be reduced to the same disjunction using implication elimination and De Morgan laws."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P03-equivalence

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=7]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=8]]

## Question

Are the three statements logically equivalent? If not, explain why. If yes, give a proof. Show all steps of your proof, and state clearly the assumption or the inference rule used in each step.

Shared context: [[STEM-2015-MID-P03 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2015-midterm.pdf#page=8|PDF physical page 8]].

The three statements are equivalent because they are all equivalent to the same fourth statement, as shown below:
$$\begin{aligned}
&\forall x\in U((rich(x)\land famous(x))\to successful(x))\\
&\equiv\forall x\in U(\neg(rich(x)\land famous(x))\lor successful(x))&&p\to q\equiv\neg p\lor q\\
&\equiv\forall x\in U(\neg rich(x)\lor\neg famous(x)\lor successful(x))&&\text{DeMorgan's \& Associative Law}
\end{aligned}$$
$$\begin{aligned}
&\forall x\in U(rich(x)\to(famous(x)\to successful(x)))\\
&\equiv\forall x\in U(rich(x)\to(\neg famous(x)\lor successful(x)))&&p\to q\equiv\neg p\lor q\\
&\equiv\forall x\in U(\neg rich(x)\lor(\neg famous(x)\lor successful(x)))&&p\to q\equiv\neg p\lor q\\
&\equiv\forall x\in U(\neg rich(x)\lor\neg famous(x)\lor successful(x))&&\text{Associative Law}
\end{aligned}$$
$$\begin{aligned}
&\forall x\in U(famous(x)\to(rich(x)\to successful(x)))\\
&\equiv\forall x\in U(famous(x)\to(\neg rich(x)\lor successful(x)))&&p\to q\equiv\neg p\lor q\\
&\equiv\forall x\in U(\neg famous(x)\lor(\neg rich(x)\lor successful(x)))&&p\to q\equiv\neg p\lor q\\
&\equiv\forall x\in U(\neg rich(x)\lor\neg famous(x)\lor successful(x))&&\text{Associative \& Commutative Law}
\end{aligned}$$

## Supplementary Explanation

**Answer.** Yes; all three statements are logically equivalent.

**Derivation/proof.** For fixed $x$, abbreviate the predicates by $R,F,S$.

$(R\land F)\to S\equiv\neg(R\land F)\lor S\equiv\neg R\lor\neg F\lor S$ (implication, De Morgan, associativity).

$R\to(F\to S)\equiv R\to(\neg F\lor S)\equiv\neg R\lor\neg F\lor S$ (implication twice, associativity).

$F\to(R\to S)\equiv F\to(\neg R\lor S)\equiv\neg F\lor\neg R\lor S\equiv\neg R\lor\neg F\lor S$ (implication twice, commutativity).

Each identity holds pointwise for every $x$, so putting the same $\forall x\in U$ around each preserves equivalence.

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
