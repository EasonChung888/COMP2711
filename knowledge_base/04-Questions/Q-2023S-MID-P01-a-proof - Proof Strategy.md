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

## 中文解析

先由没有颁奖和比赛会导致颁奖推出比赛没有举行。这样后件中的 conjunction 为假，利用原天气蕴含式的 contrapositive 可知两个天气否定均为假，最后取出下雨的结论。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 可以推出 $r$，即“it rains”。

**推导。**

1. 把三条已翻译前提编号为① $(\neg r\lor\neg f)\to(s\land l)$，② $s\to t$，③ $\neg t$。由②③用 modus tollens 得④ $\neg s$。
2. 由④使用 addition 得⑤ $\neg s\lor\neg l$，再由 De Morgan 得⑥ $\neg(s\land l)$。⑤只需已知 $\neg s$ 就成立，并没有推断 $\neg l$ 单独为真；这里不能照抄原解答的错误前提引用。
3. 由①⑥再次用 modus tollens 得⑦ $\neg(\neg r\lor\neg f)$。对⑦使用 De Morgan 与 double negation，得⑧ $r\land f$；最后由⑧ simplification 得⑨ $r$。每一步都来自已列前提或较早结论，没有把待证的下雨预先当成事实。

### English solution

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

## Common Mistakes

- 从没有比赛直接推没有救生示范并无依据。 / Only the conjunction needs to fail.
- 把原答案第 7 步错误引用的 (2) 照抄会破坏推导。 / Addition uses the established $\neg s$.

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
