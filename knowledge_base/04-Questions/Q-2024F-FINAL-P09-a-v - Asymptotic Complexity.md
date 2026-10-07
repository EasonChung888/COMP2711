---
id: "Q-2024F-FINAL-P09-a-v"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 23
question_number: "9(a)(v)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Compare A/B for 9(a)(v) with A=n^3(\\log n)^5, B=n^{3.1}; list every valid asymptotic relation."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
marks: 1
---
# Q-2024F-FINAL-P09-a-v

## Source

[[2024 Fall Final]]; printed item 9(a)(v); 1 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=23]]

Editorial observation: No (v) answer is printed on page 24. The answer line has only four entries for five printed items. This observation describes an omission; it is not a quotation from the PDF. The result below is independently derived without shifting answers to different questions.

Printed discrepant/incomplete material: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=24]].

## Question

(v) $A=n^3(\log n)^5\qquad B=n^{3.1}$

Shared printed context: ![[STEM-2024F-FINAL-P09-a - Shared Problem Prompt#Shared printed wording]]

## Official Answer

No official answer is provided in the supplied source.

Checked source: [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=24|physical PDF page 24]].

## Supplementary Explanation

The published answer on [[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=24|physical PDF page 24]] lists (i) through (iv) only. It contains no answer for (v); this solution is independently derived.

**Answer.** $O$ only.

**Derivation/proof.** The ratio is $A/B=(\log n)^5/n^{0.1}$. Every fixed logarithmic power is dominated by every fixed positive power, even exponent $0.1$, so the ratio tends to zero. Therefore $A=O(B)$; the positive lower bound required for $\Omega$ does not exist, so neither $\Omega$ nor $\Theta$ holds. These relations concern $n$ tending to infinity and do not depend on numerical crossovers for small $n$.

## Connections

- [[Subtopic - Algorithms - 算法]]

- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]

Compare A/B for 9(a)(v) with A=n^3(\log n)^5, B=n^{3.1}; list every valid asymptotic relation.
