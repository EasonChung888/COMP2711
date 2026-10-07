---
id: "Q-2016-FINAL-P06-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Final]]"
source_pdf: "knowledge_base/past_paper/2016-final.pdf"
source_page: 11
solution_page: [11]
question_number: "6(a)"
year: 2016
term: "fall"
exam_type: "final"
marks: 8
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "The noncoprime congruences are compatible and constrain the quotient to multiples of seven before the range is imposed."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-FINAL-P06-a

## Source

![[knowledge_base/past_paper/2016-final.pdf#page=11]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-final.pdf#page=11]]

## Question

(a) Consider the following two modular equations.
$$x\bmod990=733$$
$$x\bmod693=40$$
Does there exist a solution for $x\in Z_{3000}$ such that $x$ satisfies the above two modular equations? If yes, please give all possible solutions in $Z_{3000}$ and show your steps. If no, please explain why there is no solution in $Z_{3000}$.

Shared context: [[STEM-2016-FINAL-P06 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2016-final.pdf#page=11|PDF physical page 11]].

(a) Yes.

Based on the two modular equations, we express them as follows.
$$x=990q_1+733\ldots\ldots\ldots(*)$$
$$x=693q_2+40\ldots\ldots\ldots(**)$$
where $q_1$ and $q_2$ are two integers.

We derive as follows.
$$\begin{aligned}
990q_1+733&=693q_2+40\\693&=693q_2-990q_1\\99\cdot7&=99\cdot7q_2-99\cdot10q_1\\7&=7q_2-10q_1\\7q_2&=7+10q_1\\q_2&=1+\frac{10}7q_1
\end{aligned}$$
Since both $q_1$ and $q_2$ are integers, we derive that $q_1$ is a multiple of 7.

Consider (*).

When $q_1=0$, $x=990\cdot0+733=733$.

Thus, all solution in $Z_{3000}$ is 733.

## Supplementary Explanation

**Answer.** The only solution in $\mathbb Z_{3000}$ is $x=733$.

**Derivation/proof.** Write $x=733+990t$. Since $733\equiv40\pmod{693}$, the second condition is $990t\equiv0\pmod{693}$. Dividing by $\gcd(990,693)=99$ gives $10t\equiv0\pmod7$, hence $t\equiv0\pmod7$. All integer solutions are $733+6930k$. Only $k=0$ lies in $[0,2999]$. Check: $733\bmod990=733$ and $733\bmod693=40$.

After enforcing the interval, the only solution is $733$.

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
