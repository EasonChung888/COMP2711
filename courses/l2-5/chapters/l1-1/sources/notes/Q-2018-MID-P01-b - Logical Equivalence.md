---
id: "Q-2018-MID-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 3
solution_page: [3]
question_number: "1(b)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]","[[Proof Strategy - 证明策略]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]","[[Proof Method - 证明方法]]"]
question_types: ["classification"]
difficulty: 2
difficulty_basis: "Bobs self-inclusive claim rules out his being a knight and then forces Alice to be truthful."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P01-b

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=3]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=3]]

## Question

(b) Solve your proposition in (a) to show whether Alice is a knight or a knave, and Bob is a knight or a knave. (There may be multiple or no correct answers; list all of them.)

Shared context: [[STEM-2018-MID-P01 - Shared Problem Prompt]].

## 中文解析

鲍勃如果是骑士，却说自己是骗子，会立刻矛盾，所以他只能是骗子。他所说的“我们都是骗子”必须为假，既然自己确是骗子，爱丽丝就不能是骗子。最后检查她的话也为真。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 3. The Chinese derivation expands the reasoning.

**Answer.** Alice is a knight and Bob is a knave; this is the only solution.

**Derivation/proof.** If $q=T$, Bob's statement $\neg p\land\neg q$ is false, contradicting his being a knight. Hence $q=F$. His statement must then be false, so $\neg p\land T$ is false and $p=T$. Alice's assertion $\neg q$ is true, consistent with her being a knight. Both statements are now checked and all alternatives excluded.

### 中文解答

**推导。** 若 $q=T$，Bob 是骑士，但他的句子 $\neg p\land\neg q$ 因 $\neg q=F$ 必假，矛盾。所以 $q=F$。此时他是骗子，句子 $\neg p\land T=\neg p$ 必假，迫使 $p=T$。再核对 Alice 说的 $\neg q=T$，与她是骑士一致；Bob 说两人都骗子为假，与他的身份一致。故唯一解 $p=T,q=F$：Alice 为骑士、Bob 为骗子。

## Common Mistakes

- 只确定鲍勃而未检验爱丽丝。
- 认为骗子所说合取的每一部分都必须为假。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Subtopic - Inference and Proofs - 推理与证明]]
- [[Logical Equivalence - 逻辑等价]]
- [[Proof Strategy - 证明策略]]
- [[Logic-Law Method - 逻辑律方法]]
- [[Proof Method - 证明方法]]
