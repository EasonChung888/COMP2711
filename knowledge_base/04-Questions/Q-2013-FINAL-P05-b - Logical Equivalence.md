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

## Official Answer

Source: [[knowledge_base/past_paper/2013-final.pdf#page=8|PDF physical page 8]].

(b) Equivalent.
$$\begin{aligned}
\neg r\Rightarrow(p\Rightarrow\neg q)&\equiv r\lor(\neg p\lor\neg q)&&(s\Rightarrow t\equiv\neg s\lor t)\\
&\equiv(p\land q)\Rightarrow r&&\text{(by part (a))}
\end{aligned}$$

## Supplementary Explanation

**Answer.** Yes.

**Derivation/proof.** $\neg r\Rightarrow(p\Rightarrow\neg q)\equiv r\lor(\neg p\lor\neg q)=\neg p\lor\neg q\lor r$, which is the expression obtained from $(p\land q)\Rightarrow r$ in part (a).

The first expression also becomes $\neg(p\land q)\lor r\equiv\neg p\lor\neg q\lor r$.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
