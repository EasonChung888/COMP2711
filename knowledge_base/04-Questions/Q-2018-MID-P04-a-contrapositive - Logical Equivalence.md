---
id: "Q-2018-MID-P04-a-contrapositive"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Midterm]]"
source_pdf: "knowledge_base/past_paper/2018-midterm.pdf"
source_page: 6
solution_page: [6]
question_number: "4(a)"
year: 2018
term: "fall"
exam_type: "midterm"
topics: ["[[Topic - Logic - 逻辑]]","[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]","[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]","[[Functions - 函数]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]","[[Proof Method - 证明方法]]"]
question_types: ["translation"]
difficulty: 1
difficulty_basis: "Contraposition reverses the implication and replaces at least by strictly fewer."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-MID-P04-a-contrapositive

## Source

![[knowledge_base/past_paper/2018-midterm.pdf#page=6]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-midterm.pdf#page=6]]

## Question

(a) Consider finite sets $S$ and $T$, and a function $f:S\to T$. Write down the contrapositive of “If $f$ is injective, then $|T|\ge|S|$.”

Shared context: [[STEM-2018-MID-P04-a - Shared Problem Prompt]].

## 中文解析

逆否命题需要交换前后件并同时取否定。基数大于等于的否定是严格小于，而非小于等于；单射的否定是至少有两个不同输入具有相同输出。两处否定都不能省略。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 6. The Chinese derivation expands the reasoning.

**Answer.** If $|T|<|S|$, then $f$ is not injective.

**Derivation/proof.** Write the original statement as $A\to B$, where $A$ is injectivity and $B$ is $|T|\ge|S|$. Its contrapositive is $\neg B\to\neg A$. For finite cardinalities, $\neg(|T|\ge|S|)$ is exactly $|T|<|S|$, yielding the stated sentence.

### 中文解答

**推导。** 记 $A$ 为“$f$ 单射”，$B$ 为“$|T|\ge|S|$”，原句为 $A\to B$。逆否命题须同时换向并否定，成为 $\neg B\to\neg A$。有限基数按通常整数次序比较，$\neg(|T|\ge|S|)$ 就是 $|T|<|S|$，因此答案为“若 $|T|<|S|$，则 $f$ 不是单射”。它不同于只调换前后件的逆命题。

## Common Mistakes

- 只交换前后件得到逆命题。
- 把大于等于的否定写成小于等于。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Logical Equivalence - 逻辑等价]]
- [[Functions - 函数]]
- [[Logic-Law Method - 逻辑律方法]]
- [[Proof Method - 证明方法]]
