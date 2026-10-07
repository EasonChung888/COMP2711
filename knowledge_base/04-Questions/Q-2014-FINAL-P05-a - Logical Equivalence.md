---
id: "Q-2014-FINAL-P05-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 9
solution_page: [9]
question_number: "5(a)"
year: 2014
term: "fall"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Propositional equivalence requires a sequence of logic-law rewrites that preserves the connective structure on both sides."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P05-a

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=9]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=9]].

## Question

(a) $(p\land\neg q)\Rightarrow(r\land\neg r)$ and $p\Rightarrow q$

Shared context: [[STEM-2014-FINAL-P05 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2014-final.pdf#page=9|PDF physical page 9]].

(a) Equivalent.
$$\begin{aligned}(p\land\neg q)\Rightarrow(r\land\neg r)&\equiv\neg(p\land\neg q)\lor(r\land\neg r)\\&\equiv\neg p\lor q\lor F\\&\equiv\neg p\lor q\\&\equiv p\Rightarrow q\end{aligned}$$

## Supplementary Explanation

**Answer.** Yes.

**Derivation/proof.** Because $r\land\neg r=F$, the first formula is $\neg(p\land\neg q)\lor F=\neg p\lor q$, which is exactly $p\Rightarrow q$.

After De Morgan and the contradiction law, the intermediate disjunction is $\neg p\lor q\lor F$.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
