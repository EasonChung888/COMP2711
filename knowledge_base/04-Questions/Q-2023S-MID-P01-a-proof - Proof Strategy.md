---
id: "Q-2023S-MID-P01-a-proof"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf"
source_page: 3
question_number: "1(a)"
year: 2023
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Proof Strategy - 证明策略]]","[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Modus tollens excludes the race; a negated conjunction then reverses the weather implication to force rain."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
related_questions: ["[[Q-2023S-MID-P01-a-1 - Logical Equivalence]]","[[Q-2023S-MID-P01-a-2 - Logical Equivalence]]","[[Q-2023S-MID-P01-a-3 - Logical Equivalence]]"]
---
# Q-2023S-MID-P01-a-proof

## Source

[[2023 Spring Midterm]]; printed item 1(a). No separate atomic mark allocation is printed.

![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=3]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=4]]

Editorial source correction: the published step 7 calls “¬s∨¬l” a simplification from step (2), which is s→t. It is actually addition from published step (3), ¬s. The published conclusion is unchanged.

Prerequisite context (editorial): [[Q-2023S-MID-P01-a-1 - Logical Equivalence]]; [[Q-2023S-MID-P01-a-2 - Logical Equivalence]]; [[Q-2023S-MID-P01-a-3 - Logical Equivalence]]. The three translated hypotheses are $(\neg r\lor\neg f)\to(s\land l)$, $s\to t$, and $\neg t$. 三条式子是已知前提，结论 r 不能作为前提使用。 本题要求从前提推出下雨，不能把下雨当作额外已知事实。

## Question

Then use rules of inference to prove the conclusion “it rains”. For each step, you need to write from which earlier statement this step is derived from, but you don't have to write the name of the rule used.

Shared printed context: ![[STEM-2023S-MID-P01-a - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2023_Midterm.pdf#page=4|physical PDF page 4]].

> (a) We are given premises $(\neg r\lor\neg f)\to(s\land l)$, $s\to t$, and $\neg t$. We want to conclude $r$.
>
> | Step | Reason |
> | --- | --- |
> | 1. $\neg t$ | Premise |
> | 2. $s\to t$ | Premise |
> | 3. $\neg s$ | Modus tollens using (1) and (2) |
> | 4. $(\neg r\lor\neg f)\to(s\land l)$ | Premise |
> | 5. $(\neg(s\land l))\to\neg(\neg r\lor\neg f)$ | Contrapositive of (4) |
> | 6. $(\neg s\lor\neg l)\to(r\land f)$ | Simplification using (5) |
> | 7. $\neg s\lor\neg l$ | Simplification using (2) |
> | 8. $r\land f$ | Modus ponens using (6,7) |
> | 9. $r$ | Simplification from (8) |

## Supplementary Explanation

**Answer.** $r$.

**Derivation/proof.** 1. $(\neg r\lor\neg f)\to(s\land l)$ (premise).
2. $s\to t$ (premise).
3. $\neg t$ (premise).
4. $\neg s$ (2,3; modus tollens).
5. $\neg s\lor\neg l$ (4; addition).
6. $\neg(s\land l)$ (5; De Morgan).
7. $\neg(\neg r\lor\neg f)$ (1,6; modus tollens).
8. $r\land f$ (7; De Morgan and double negation).
9. $r$ (8; simplification).

Every step cites existing premises or earlier conclusions; none assumes the desired conclusion.

Addition proves the disjunction without establishing $\neg l$ individually. Step 9 concludes $r$.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Subtopic - Inference and Proofs - 推理与证明]]

- [[Proof Strategy - 证明策略]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
- [[Proof Method - 证明方法]]

Modus tollens excludes the race; a negated conjunction then reverses the weather implication to force rain.

- Prerequisite: [[Q-2023S-MID-P01-a-1 - Logical Equivalence]]: The weather premise links the failed race-and-demonstration conjunction to rain by modus tollens. 天气蕴含式提供最后反推下雨的入口。
- Prerequisite: [[Q-2023S-MID-P01-a-2 - Logical Equivalence]]: The premise that a race implies prize-giving, combined with no prize-giving, rules out the race. 比赛必有颁奖与没有颁奖合用，先推出没有比赛。
- Prerequisite: [[Q-2023S-MID-P01-a-3 - Logical Equivalence]]: The no-prize-giving premise starts the inference chain and rules out the race by modus tollens. 没有颁奖是证明的事实起点，不能换成所求的下雨结论。
