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

## 中文解析

三句话都只排除同一类人：既富有又著名却不成功的人。将外层和内层蕴含分别消去后，都得到“非富有或非著名或成功”，因此在每一个人上完全一致。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 8. The Chinese derivation expands the reasoning.

**Answer.** Yes; all three statements are logically equivalent.

**Derivation/proof.** For fixed $x$, abbreviate the predicates by $R,F,S$.

$(R\land F)\to S\equiv\neg(R\land F)\lor S\equiv\neg R\lor\neg F\lor S$ (implication, De Morgan, associativity).

$R\to(F\to S)\equiv R\to(\neg F\lor S)\equiv\neg R\lor\neg F\lor S$ (implication twice, associativity).

$F\to(R\to S)\equiv F\to(\neg R\lor S)\equiv\neg F\lor\neg R\lor S\equiv\neg R\lor\neg F\lor S$ (implication twice, commutativity).

Each identity holds pointwise for every $x$, so putting the same $\forall x\in U$ around each preserves equivalence.

### 中文解答

**推导。** 固定 x，以 R、F、S 依次简记富有、著名、成功。第一式 $(R\land F)\to S\equiv\neg(R\land F)\lor S\equiv\neg R\lor\neg F\lor S$，用蕴含、德摩根、结合律。第二式 $R\to(F\to S)\equiv\neg R\lor(\neg F\lor S)\equiv\neg R\lor\neg F\lor S$，用两次蕴含及结合律。第三式 $F\to(R\to S)\equiv\neg F\lor\neg R\lor S\equiv\neg R\lor\neg F\lor S$，再用交换律。三者在每个 x 上相同，外加同一个全称量词仍相同，所以三句逻辑等价。

## Common Mistakes

- 只凭三句听起来相似就声称等价，而不给逻辑变形。
- 消去嵌套蕴含时给后件错误添加否定。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
