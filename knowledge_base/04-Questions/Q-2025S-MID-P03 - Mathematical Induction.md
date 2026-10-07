---
id: "Q-2025S-MID-P03"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf"
source_page: 5
question_number: "3"
year: 2025
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Induction Proof Method - 归纳证明法]]"]
question_types: ["proof"]
difficulty: 4
difficulty_basis: "Induct on one variable while quantifying over the other and derive predecessor coverage using induction."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [5]
marks: 12
---
# Q-2025S-MID-P03

## Source

[[2025 Spring Midterm]]; printed item 3; 12 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=5]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=5]]

## Question

Take the natural numbers $\mathbb N$ as the domain. Recall that in Peano's axiomatic system, addition is defined as follows: (i) $x+0=x$; (ii) $x+S(y)=S(x+y)$. We can further define the predicate $x\le y$ as $\exists k(x+k=y)$. Prove that for any $x,y\in\mathbb N$, either $x\le y$ or $y\le x$ is true. You are only allowed to use Peano's axioms (including induction), definitions, and the commutative law of addition.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=5|physical PDF page 5]].

Proof. We will use induction on $x$ to prove the statement.

Base case $x=0$: we will show that for any $y\in\mathbb N$, $0\le y$. By the definition of $\le$, $0\le y$ means $\exists k(0+k=y)$. Taking $k=y$, we have $0+y=y+0=y$, so this is true.

Inductive step: Assume that for some $x\in\mathbb N$, the statement holds, i.e., for any $y\in\mathbb N$, either $x\le y$ or $y\le x$. We will prove that the statement also holds for $S(x)$, i.e., for any $y\in\mathbb N$, either $S(x)\le y$ or $y\le S(x)$.

Case 1: $y=0$: In this case, we can show that $y\le S(x)$ following the same argument as above.

Case 2: $y\ne0$: Since $y\ne0$, $y=S(y')$ for some $y'\in\mathbb N$ (by Peano's axioms). By the inductive hypothesis, either $x\le y'$ or $y'\le x$.

- If $x\le y'$, then $\exists k(x+k=y')$. Applying $S$ to both sides gives $S(x+k)=S(y')$. By the commutative law and the definition of addition, $S(x+k)=S(k+x)=k+S(x)=S(x)+k$. This means $S(x)\le S(y')$, i.e., $S(x)\le y$.
- If $y'\le x$, then $\exists k(y'+k=x)$. Applying $S$ to both sides gives $S(y'+k)=S(x)$. By the commutative law and the definition of addition, $S(y'+k)=S(k+y')=k+S(y')=S(y')+k$. This means $S(y')\le S(x)$, i.e., $y\le S(x)$.

## Supplementary Explanation

**Answer.** $\forall x\forall y(x\le y\lor y\le x)$.

**Derivation/proof.** First, induction shows that every natural number is zero or a successor: zero satisfies the disjunction, and any $S(z)$ is itself a successor. Now induct on $x$. For $x=0$, arbitrary $y$ satisfies $0+y=y+0=y$, so $k=y$ witnesses $0\le y$.

Assume that for every $y$ we have $x\le y$ or $y\le x$. Compare $S(x)$ with arbitrary $y$. If $y=0$, choose $k=S(x)$ to obtain $0\le S(x)$. Otherwise write $y=S(y')$ and apply the hypothesis to $y'$. If $x+k=y'$, then $S(x)+k=k+S(x)=S(k+x)=S(x+k)=S(y')=y$, so $S(x)\le y$. If $y'+k=x$, the same identities give $S(y')+k=S(y'+k)=S(x)$, so $y\le S(x)$. All cases are covered, establishing the claim by induction without assuming a preexisting total order.

## Connections

- [[Topic - Induction and Recursion - 归纳与递归]]
- [[Subtopic - Induction - 数学归纳法]]
- [[Mathematical Induction - 数学归纳法]]
- [[Induction Proof Method - 归纳证明法]]

Induct on one variable while quantifying over the other and derive predecessor coverage using induction.
