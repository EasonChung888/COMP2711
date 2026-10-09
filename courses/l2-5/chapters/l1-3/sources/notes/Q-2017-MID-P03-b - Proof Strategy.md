---
id: "Q-2017-MID-P03-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Midterm]]"
source_pdf: "knowledge_base/past_paper/2017-midterm.pdf"
source_page: 5
solution_page: [5]
question_number: "3(b)"
year: 2017
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Proof Strategy - 证明策略]]"]
methods: ["[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Contraposition reduces irrationality of a square to closure of rational numbers under multiplication."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-MID-P03-b

## Source

![[knowledge_base/past_paper/2017-midterm.pdf#page=5]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-midterm.pdf#page=5]]

Source verification: The printed intermediate equality starts $x=(\sqrt{x})^2=(a/b)^2$; the valid equality is $x^2=(a/b)^2$. The stated conclusion is unchanged.

Source correction (official conclusion retained): PDF page 5 prints x=(√x)²=(a/b)²=a²/b². Starting with x=a/b, the correct squared equality is x²=(a/b)²=a²/b². The official contrapositive method and conclusion are unchanged; the displayed intermediate equality is corrected.

## Question

(b) If $x^2$ is irrational, then $x$ is irrational.

Shared context: [[STEM-2017-MID-P03 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2017-midterm.pdf#page=5|physical PDF page 5]].

We use a proof by contraposition to show that if $x$ is rational, then $x^2$ is rational. Since $x$ is rational, let $x=\frac ab$ for some integers $a$ and $b$. $x=(\sqrt x)^2=(\frac ab)^2=\frac{a^2}{b^2}$; both $a^2$ and $b^2$ are integers. Thus $x^2$ is rational.

## Supplementary Explanation

**Answer.** The implication is true.

**Derivation/proof.** Prove its contrapositive. If $x$ is rational, write $x=a/b$ for integers $a,b$ with $b\ne0$. Then $x^2=a^2/b^2$ is rational, because $a^2,b^2$ are integers and $b^2\ne0$. Hence an irrational square cannot have a rational base.

## Connections

- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Proof Strategy - 证明策略]]
- [[Proof Method - 证明方法]]
