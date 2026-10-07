---
id: "Q-2024F-FINAL-P09-a-ii"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 23
question_number: "9(a)(ii)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Compare A/B for 9(a)(ii) with A=10n^2, B=2n^2+10000n+5n\\log n; list every valid asymptotic relation."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
marks: 1
---
# Q-2024F-FINAL-P09-a-ii

## Source

[[2024 Fall Final]]; printed item 9(a)(ii); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=23]]

Page 24 printed answer for this label: “(ii) A = O(B)”. The answer line has only four entries for five printed items. This note preserves the literal label-specific source claim and independently derives the result without shifting answers to different questions.

Printed discrepant/incomplete material: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=24]].

## Question

(ii) $A=10n^2\qquad B=2n^2+10000n+5n\log n$

Shared printed context: ![[STEM-2024F-FINAL-P09-a - Shared Problem Prompt#Shared printed wording]]

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=24|physical PDF page 24]].

> (ii) $A=O(B)$

## Supplementary Explanation

**Answer.** $O,\Omega,\Theta$.

**Derivation/proof.** Dividing by $n^2$ gives $A/B=10/(2+10000/n+5\log n/n)\to10/2=5$. The finite positive limit gives positive upper and lower bounds eventually, so $A=\Theta(B)$. Theta entails both big O and big Omega, and the question asks for all relations, so all three labels $O,\Omega,\Theta$ must be listed. The coefficient 10000 affects only a finite range, not the asymptotic order.

## Connections

- [[Subtopic - Algorithms - 算法]]

- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

Compare A/B for 9(a)(ii) with A=10n^2, B=2n^2+10000n+5n\log n; list every valid asymptotic relation.
