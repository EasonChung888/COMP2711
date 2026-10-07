---
id: "Q-2013-FINAL-P05-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Final]]"
source_pdf: "knowledge_base/past_paper/2013-final.pdf"
source_page: 8
solution_page: [8]
question_number: "5(c)"
year: 2013
term: "spring"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["counterexample"]
difficulty: 2
difficulty_basis: "A counterexample must make the two compound propositions differ, which requires a deliberately chosen truth assignment rather than a random row."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-FINAL-P05-c

## Source

![[knowledge_base/past_paper/2013-final.pdf#page=8]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-final.pdf#page=8]].

## Question

(c) $(p\Rightarrow r)\land(q\Rightarrow r)$ and $(p\land q)\Rightarrow r$

Shared context: [[STEM-2013-FINAL-P05 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2013-final.pdf#page=8|PDF physical page 8]].

(c) Not equivalent. Counter example: $p=T$, $q=F$, $r=F$. The first statement is false, while the second statement is true.

## Supplementary Explanation

**Answer.** No; take $p=T,q=F,r=F$.

**Derivation/proof.** At $p=T,q=F,r=F$, the first conjunction is $(T\Rightarrow F)\land(F\Rightarrow F)=F$, whereas $(p\land q)\Rightarrow r=F\Rightarrow F=T$. The differing truth values disprove equivalence.

Explicitly, the first expression is $F\land T=F$, whereas the second is $F\Rightarrow F=T$.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
