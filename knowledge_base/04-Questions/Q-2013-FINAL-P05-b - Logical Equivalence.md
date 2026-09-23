---
id: "Q-2013-FINAL-P05-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Final]]"
source_pdf: "knowledge_base/past_paper/2013-final.pdf"
source_page: 8
solution_page: [8]
question_number: "5(b)"
year: 2013
term: "spring"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["proof"]
difficulty: 1
difficulty_basis: "The nested implication must be expanded twice before its disjunctive form can be compared with the first proposition."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-FINAL-P05-b

## Source

![[knowledge_base/past_paper/2013-final.pdf#page=8]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-final.pdf#page=8]].

## Question

(b) $(p\land q)\Rightarrow r$ and $\neg r\Rightarrow(p\Rightarrow\neg q)$

Shared context: [[STEM-2013-FINAL-P05 - Shared Problem Prompt]].

## 中文解析

右式先把外层和内层蕴含各自改写成析取，结果与左式的标准析取形式完全一致。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 8. The Chinese derivation expands the reasoning.

**Answer.** Yes.

**Derivation/proof.** $\neg r\Rightarrow(p\Rightarrow\neg q)\equiv r\lor(\neg p\lor\neg q)=\neg p\lor\neg q\lor r$, which is the expression obtained from $(p\land q)\Rightarrow r$ in part (a).

### 中文解答

**推导。** 第二式两次消去蕴含：$\neg r\Rightarrow(p\Rightarrow\neg q)\equiv r\lor(\neg p\lor\neg q)$。由析取交换律，这等于 $\neg p\lor\neg q\lor r$。第一式也化为 $\neg(p\land q)\lor r\equiv\neg p\lor\neg q\lor r$，因此两式逻辑等价。

## Common Mistakes

- 把 $\neg r\Rightarrow s$ 化成 $\neg r\lor s$。
- 漏掉内层 $p\Rightarrow\neg q$ 的否定 $\neg p$。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
