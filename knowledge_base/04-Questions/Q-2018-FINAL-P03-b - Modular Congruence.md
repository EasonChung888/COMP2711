---
id: "Q-2018-FINAL-P03-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2018 Final]]"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 5
solution_page: [5]
question_number: "3(b)"
year: 2018
term: "fall"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Recursion - 递归]]","[[Subtopic - Induction - 数学归纳法]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Recursive Structures - 递归结构]]","[[Mathematical Induction - 数学归纳法]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Structural Induction Method - 结构归纳法]]","[[Induction Proof Method - 归纳证明法]]"]
question_types: ["calculation","proof"]
difficulty: 4
difficulty_basis: "The Euclidean remainder chain constructs 78 inside S and two containment proofs establish exact equality."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2018-FINAL-P03-b

## Source

![[knowledge_base/past_paper/2018-final.pdf#page=5]]

Published answer and marking material: ![[knowledge_base/past_paper/2018-final.pdf#page=5]]

## Question

(b) Let $A_m$ be the set of all multiples of some integer $m$. Find the integer $m$ such that $S=A_m$, and provide a complete proof of this equality, showing all steps.

Shared context: [[STEM-2018-FINAL-P03 - Shared Problem Prompt]].

## 中文解析

最大公因数是候选生成元，但仅算出它还不够。要沿欧几里得余数链证明七十八本身能由递归规则生成，再由倍数闭合得到一个包含方向；另一个方向用结构归纳说明生成过程始终保持被七十八整除。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 5. The Chinese derivation expands the reasoning.

**Answer.** $m=78$ is the positive generator, and $S=78\mathbb Z$ (also $A_{-78}=A_{78}$).

**Derivation/proof.** Euclid gives $4914=3588+1326$, $3588=2\cdot1326+936$, $1326=936+390$, $936=2\cdot390+156$, $390=2\cdot156+78$, $156=2\cdot78$. Every remainder belongs to $S$: previous entries and their multiples belong by part (a), and differences are allowed. Thus $78\in S$, and part (a), together with $0\in S$, gives $78\mathbb Z\subseteq S$. Conversely $4914=63\cdot78$ and $3588=46\cdot78$. Differences of multiples of 78 remain multiples, so structural induction gives $S\subseteq78\mathbb Z$. Both inclusions prove equality.

### 中文解答

**推导。** 欧几里得除法为 $4914=3588+1326$，$3588=2\cdot1326+936$，$1326=936+390$，$936=2\cdot390+156$，$390=2\cdot156+78$，$156=2\cdot78$。基础两数在 $S$，由(a)倍数在 $S$，再逐步取差，故所有余数尤其 $78$ 都在 $S$。再由(a)和零元素，$78\mathbb Z\subseteq S$。反向，基础 $4914=63\cdot78$、$3588=46\cdot78$ 都是 $78$ 倍数，两个这样的数之差仍为倍数；按递归构造作结构归纳，得 $S\subseteq78\mathbb Z$。两包含合起来 $S=A_{78}$，可取 $m=78$；负生成元 $-78$ 给出同一集合。

## Common Mistakes

- 只证明 S 的元素都是七十八的倍数。
- 直接宣布最大公因数属于 S 而未展示构造。

## Connections

- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Recursion - 递归]]
- [[Subtopic - Induction - 数学归纳法]]
- [[Modular Congruence - 同余]]
- [[Recursive Structures - 递归结构]]
- [[Mathematical Induction - 数学归纳法]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Structural Induction Method - 结构归纳法]]
- [[Induction Proof Method - 归纳证明法]]
