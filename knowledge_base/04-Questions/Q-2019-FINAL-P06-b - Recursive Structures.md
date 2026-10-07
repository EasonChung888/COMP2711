---
id: "Q-2019-FINAL-P06-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Final]]"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 8
solution_page: [8]
question_number: "6(b)"
year: 2019
term: "spring"
exam_type: "final"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]","[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Recursive Structures - 递归结构]]","[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Structural Induction Method - 结构归纳法]]","[[Induction Proof Method - 归纳证明法]]"]
question_types: ["proof"]
difficulty: 3
difficulty_basis: "Structural induction on the second string uses concatenation associativity to expose its last-bit constructor."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 6
---
# Q-2019-FINAL-P06-b

## Source

![[knowledge_base/past_paper/2019-final.pdf#page=8]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-final.pdf#page=8]]

## Question

(b) Use structural induction to prove that $ones(st)=ones(s)+ones(t)$.

Shared context: [[STEM-2019-FINAL-P06 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2019-final.pdf#page=8|physical PDF page 8]].

We prove by induction on the length of $t$. The basis step is when $t=\lambda$, in which case we have $\operatorname{ones}(s\lambda)=\operatorname{ones}(s)=\operatorname{ones}(s)+0=\operatorname{ones}(s)+\operatorname{ones}(\lambda)$.
For the inductive step, write $t=wx$, where $w$ is a bit string and $x$ is a bit. Then we have
$$\begin{aligned}\operatorname{ones}(s(wx))&=\operatorname{ones}((sw)x)\\&=x+\operatorname{ones}(sw)&&\text{(by definition)}\\&=x+\operatorname{ones}(s)+\operatorname{ones}(w)&&\text{(by the inductive hypothesis)}\\&=\operatorname{ones}(s)+(x+\operatorname{ones}(w))\\&=\operatorname{ones}(s)+\operatorname{ones}(wx)&&\text{(by definition)}\\&=\operatorname{ones}(s)+\operatorname{ones}(t).\end{aligned}$$

## Supplementary Explanation

**Answer.** The identity holds for all finite bit strings s,t.

**Derivation/proof.** Fix any s and induct structurally on t. For $t=\lambda$, $s\lambda=s$ and $\operatorname{ones}(\lambda)=0$, proving the base. Assume the identity for a prefix w and append a bit x. Then $\operatorname{ones}(s(wx))=\operatorname{ones}((sw)x)=\operatorname{ones}(sw)+x=\operatorname{ones}(s)+\operatorname{ones}(w)+x=\operatorname{ones}(s)+\operatorname{ones}(wx)$. The middle equality uses the induction hypothesis for w; the other count equalities use the recursive definition. Thus the constructor preserves the identity.

For the structural-induction basis, $\lambda$ is the empty string and $\operatorname{ones}(s\lambda)=\operatorname{ones}(s)=\operatorname{ones}(s)+\operatorname{ones}(\lambda)$. Appending the empty string changes neither the string nor the number of ones.

## Connections

- [[Subtopic - Recursion - 递归]]
- [[Subtopic - Induction - 数学归纳法]]
- [[Recursive Structures - 递归结构]]
- [[Mathematical Induction - 数学归纳法]]
- [[Structural Induction Method - 结构归纳法]]
- [[Induction Proof Method - 归纳证明法]]
