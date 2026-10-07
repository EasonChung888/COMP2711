---
id: "Q-2013-FINAL-P03"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Final]]"
source_pdf: "knowledge_base/past_paper/2013-final.pdf"
source_page: 6
solution_page: [6]
question_number: "3"
year: 2013
term: "spring"
exam_type: "final"
marks: 10
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Uniqueness needs divisibility by both coprime primes and the strict bound on the difference of two representatives modulo their product."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-FINAL-P03

## Source

![[knowledge_base/past_paper/2013-final.pdf#page=6]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-final.pdf#page=6]].

## Question

Let $p$ and $q$ be two different prime numbers. Let $a\in Z_p$ and $b\in Z_q$. Consider the following two modular equations:
$$x\bmod p=a,\qquad x\bmod q=b.$$
We have learned in class that there exists $x\in Z_{pq}$ that satisfies the two equations. Give a contrapositive proof for the following statement:

There is only one $x\in Z_{pq}$ that satisfies the two equations.

Note that this is the uniqueness part of the Chinese Reminder Theorem.

## Official Answer

Source: [[knowledge_base/past_paper/2013-final.pdf#page=6|PDF physical page 6]].

Let $s$ denote the statement. The premise is always true. So, the statement is $T\to s$. By contrapositive rule, we prove $\neg s\to F$. This means that we assume $\neg s$ and then derive some contradiction.

Assume there are two different numbers $x_1$ and $x_2$ from $Z_{pq}$ that satisfy the equations.

Without losing generality, assume $x_1>x_2$. Then $0<(x_1-x_2)<pq-1$. Hence $(x_1-x_2)$ is not divisible by $pq$.

Because both $x_1$ and $x_2$ satisfy the equations, we have
$$\begin{aligned}x_1\bmod p&=a,&x_1\bmod q&=b.\\x_2\bmod p&=a,&x_2\bmod q&=b.\end{aligned}$$
By subtracting the second line from the first, we
$$x_1\bmod p-x_2\bmod p=0,\qquad x_1\bmod q-x_2\bmod q=0,$$
which imply:
$$(x_1-x_2)\bmod p=0,\qquad(x_1-x_2)\bmod q=0.$$
These two equations mean that $(x_1-x_2)$ is divisible by $p$ and $q$. Because $p$ and $q$ are different prime numbers, this implies that $(x_1-x_2)$ is divisible by $pq$, which contradicts our earlier conclusion that $(x_1-x_2)$ is not divisible by $pq$.

The statement is therefore proved. Q.E.D

## Supplementary Explanation

**Answer.** Two distinct solutions cannot exist.

**Derivation/proof.** Assume distinct $x_1,x_2\in\{0,\ldots,pq-1\}$ both satisfy both congruences. Then $p\mid(x_1-x_2)$ and $q\mid(x_1-x_2)$. Coprimality implies $pq\mid(x_1-x_2)$, but $0<|x_1-x_2|<pq$, a contradiction.

Existence is given in the question. Excluding two distinct solutions therefore proves that there is exactly one.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
