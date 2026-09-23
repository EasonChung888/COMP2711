---
id: "Q-2015-MID-P01-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 3
solution_page: [4]
question_number: "1(a)"
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
difficulty_basis: "Each option must be compared with the two equal-truth-value cases defining a biconditional."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P01-a

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=3]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=4]]

## Question

(a) Let $p$ and $q$ be two propositions. Which of the following propositions is/are equivalent to $p\leftrightarrow q$?

1. $(p\to q)\land(q\to p)$
2. $(\neg p\to\neg q)\land(\neg q\to\neg p)$
3. $(p\land q)\land(\neg p\land\neg q)$
4. $(p\land q)\lor(\neg p\land\neg q)$
5. None of above.

Shared context: [[STEM-2015-MID-P01 - Shared Problem Prompt]].

## 中文解析

双条件命题要求两边真值相同。第一项就是定义；第二项交换两条蕴含的逆否命题，仍等价；第四项直接列出同真、同假。第三项要求同时真和假，永远不成立。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** 1, 2, 4.

**Derivation/proof.** Option 1 is the definition of the biconditional. Contraposition changes its two implications to the two factors in option 2. The true rows of $p\leftrightarrow q$ are $(T,T)$ and $(F,F)$, exactly option 4. Option 3 is always false, so it fails on both those rows; consequently option 5 is false.

### 中文解答

**推导。** 双条件 $p\leftrightarrow q$ 在 $(T,T),(F,F)$ 两行真，在另两行假。选项一是定义式；由逆否等价，$\neg p\to\neg q$ 等价于 $q\to p$，另一因子等价于 $p\to q$，所以二也成立。四恰好列出同真或同假的两行，也等价。三要求 p 与非 p 同时真，恒假，在同真行与目标不同。因此选择 1、2、4，五不选。

## Common Mistakes

- 把第三项中的合取看成析取，会误把矛盾式当作双条件。
- 只选定义式而漏掉逆否和真值展开形式。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
