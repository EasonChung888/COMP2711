---
id: "Q-2015-MID-P01-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 3
solution_page: [4]
question_number: "1(d)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 4
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["classification"]
difficulty: 3
difficulty_basis: "A single witness must work for every y, so quantifier order and the nonempty-domain convention determine the valid implications."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P01-d

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=3]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=4]]

## Question

(d) Let $U_1$ and $U_2$ be two domains, and let $P(x)$ and $R(x,y)$ be two predicates. Which of the following statements logically implies/imply $\exists x\in U_2\forall y\in U_1(P(x)\to R(x,y))$?

1. $\forall y\in U_1\exists x\in U_2(P(x)\to R(x,y))$
2. $\exists x\in U_2\forall y\in U_1(P(x))$
3. $\exists x\in U_2\forall y\in U_1(R(x,y))$
4. $\forall x\in U_2\forall y\in U_1(P(x)\to R(x,y))$
5. None of above.

Shared context: [[STEM-2015-MID-P01 - Shared Problem Prompt]].

## 中文解析

目标需要同一个 $x$ 对所有 $y$ 都有效。第三项直接保证后件；第四项对全部 $x$ 成立，从非空域中任选一个即可。第一项允许随 $y$ 换见证，第二项只保证前件，均不足够。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** 3, 4, under the usual nonempty-domain convention used by the official answer.

**Derivation/proof.** Option 3 supplies a witness for which every consequent is true, making all implications true. For option 4 choose any $x\in U_2$; universal instantiation gives the target. To refute option 1 take $U_1=U_2=\{0,1\}$, $P$ always true, and $R(x,y)$ meaning $x=y$: a witness exists for each $y$, but no common witness exists. For option 2 take singleton domains, $P$ true, and $R$ false. If empty $U_2$ were permitted, option 4 would need that extra nonemptiness assumption.

### 中文解答

**推导。** 按官方采用的一阶逻辑非空域惯例，三提供一个对所有 y 都使 R 为真的 x，故每个蕴含后件真，该 x 就是目标见证。四对所有 x 都成立，从非空 $U_2$ 任取一个即得目标。反驳一：取 $U_1=U_2=\{0,1\}$，P 恒真，$R(x,y)$ 表示 $x=y$；每个 y 都有各自见证，但没有共同 x。反驳二：取单元素域，P 真、R 假，则二真目标假。因此选 3、4；若另行允许空 $U_2$，四不再推出存在式，这个约定不可省略。

## Common Mistakes

- 将 $\forall y\exists x$ 交换成 $\exists x\forall y$。
- 只知道前件为真，不能推出蕴含成立。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
