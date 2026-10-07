---
id: "Q-2024F-MID-P03-a-iv"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf"
source_page: 7
question_number: "3(a)(iv)"
year: 2024
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["classification"]
difficulty: 3
difficulty_basis: "Use Cantor power-set strictness to show removing at most continuum many elements cannot leave a countable set."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [7]
marks: 1
---
# Q-2024F-MID-P03-a-iv

## Source

[[2024 Fall Midterm]]; printed item 3(a)(iv); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=7]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=7]]

The fourth printed answer on page 7 is mislabeled (iii); its position and Uncountable answer correspond to question (iv).

## Question

(iv) The set $\mathcal P(\mathbb R)-\mathbb R$, where $\mathbb R$ is the set of real numbers and $\mathcal P(\mathbb R)$ is its power set.

Shared printed context: ![[STEM-2024F-MID-P03-a - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf#page=7|physical PDF page 7]].

> (iii) Uncountable

## Supplementary Explanation

**Answer.** Uncountable.

**Derivation/proof.** Suppose for contradiction that $C=\mathcal P(\mathbb R)\setminus\mathbb R$ is countable. The remaining part $D=\mathcal P(\mathbb R)\cap\mathbb R$ is a subset of the reals, so has cardinality at most $|\mathbb R|$. Hence $\mathcal P(\mathbb R)=C\cup D$ has cardinality at most $|\mathbb R|$, since adding countably many elements to an infinite real set does not increase its cardinality. Cantor's theorem gives $|\mathcal P(\mathbb R)|>|\mathbb R|$, a contradiction. Thus the difference is uncountable, without treating all reals as all real subsets.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]

- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]

Use Cantor power-set strictness to show removing at most continuum many elements cannot leave a countable set.
