---
id: "Q-2015-MID-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 3
solution_page: [4]
question_number: "1(b)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 3
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Eliminating the nested implication separates the two tautologies from expressions falsified by p true and q false."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P01-b

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=3]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=4]]

## Question

(b) Let $p$ and $q$ be two propositions. Which of the following propositions is/are tautology/tautologies?

1. $p\to(p\to q)$
2. $\neg p\to(p\to q)$
3. $q\to(p\to q)$
4. $\neg q\to(p\to q)$
5. None of above.

Shared context: [[STEM-2015-MID-P01 - Shared Problem Prompt]].

## 中文解析

将蕴含改写为“非前件或后件”。第二项含有 $p\lor\neg p$，第三项含有 $q\lor\neg q$，因此总真；第一、四项在 $p$ 真而 $q$ 假时失败。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** 2, 3.

**Derivation/proof.** The four formulas simplify respectively to $\neg p\lor q$, $p\lor\neg p\lor q$, $\neg q\lor\neg p\lor q$, and $q\lor\neg p\lor q$. The middle two contain a complementary pair and are true for all assignments. The first and fourth both reduce to $\neg p\lor q$, false at $p=T,q=F$.

### 中文解答

**推导。** 用 $A\to B\equiv\neg A\lor B$ 消去蕴含。四项依次化为 $\neg p\lor q$、$p\lor\neg p\lor q$、$\neg q\lor\neg p\lor q$、$q\lor\neg p\lor q$。二含互补对 $p\lor\neg p$，三含互补对 $\neg q\lor q$，所以恒真。一与四均等价于 $\neg p\lor q$，在 $p=T,q=F$ 时为假。故只选 2、3。

## Common Mistakes

- 把内层蕴含当作无条件真命题。
- 找到某一个真值赋值成立，不能据此判断重言式。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
