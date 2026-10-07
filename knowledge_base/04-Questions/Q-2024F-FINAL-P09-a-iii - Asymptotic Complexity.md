---
id: "Q-2024F-FINAL-P09-a-iii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 23
question_number: "9(a)(iii)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Compare A/B for 9(a)(iii) with A=n^2, B=5^{\\log_2 n}; list every valid asymptotic relation."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
marks: 1
---
# Q-2024F-FINAL-P09-a-iii

## Source

[[2024 Fall Final]]; printed item 9(a)(iii); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=23]]

Page 24 printed answer for this label: “(iii) A = Ω(B)”. The answer line has only four entries for five printed items. This note preserves the literal label-specific source claim and independently derives the result without shifting answers to different questions.

Printed discrepant/incomplete material: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=24]].

## Question

(iii) $A=n^2\qquad B=5^{\log_2 n}$

Shared printed context: ![[STEM-2024F-FINAL-P09-a - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=24|physical PDF page 24]].

> (iii) $A=\Omega(B)$

## Supplementary Explanation

**Answer.** $O$ only.

**Derivation/proof.** The identity $5^{\log_2 n}=n^{\log_2 5}$ rewrites $B$. Since $5>4$, $\log_2 5>2$, so $A/B=n^{2-\log_2 5}\to0$. Thus $A$ grows strictly slower than $B$, giving only $A=O(B)$, with neither $\Omega$ nor $\Theta$. The entire $\log_2 n$ is the exponent of five; $B$ is not five times a logarithm.

## Connections

- [[Subtopic - Algorithms - 算法]]

- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

Compare A/B for 9(a)(iii) with A=n^2, B=5^{\log_2 n}; list every valid asymptotic relation.
