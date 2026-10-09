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

## Official Answer

Source: [[knowledge_base/past_paper/2015-midterm.pdf#page=4|PDF physical page 4]].

(a) 1, 2, 4

## Supplementary Explanation

**Answer.** 1, 2, 4.

**Derivation/proof.** Option 1 is the definition of the biconditional. Contraposition changes its two implications to the two factors in option 2. The true rows of $p\leftrightarrow q$ are $(T,T)$ and $(F,F)$, exactly option 4. Option 3 is always false, so it fails on both those rows; consequently option 5 is false.

Option 2 uses $\neg p\to\neg q\equiv q\to p$ and $\neg q\to\neg p\equiv p\to q$. Option 3 requires both $p$ and $\neg p$, so it is false even on the target's true rows.

The two true rows of the biconditional are $(T,T),(F,F)$.

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
