---
id: "Q-2021-MID-BONUS"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2021 Midterm]]"
source_pdf: "knowledge_base/past_paper/2021-midterm.pdf"
source_page: 4
question_number: "Bonus"
year: 2021
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]","[[Functions - 函数]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]","[[Proof Method - 证明方法]]"]
question_types: ["proof"]
difficulty: 4
difficulty_basis: "Two injections require canonical decimal expansions and a codomain-valid constant coordinate."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
solution_page: [4,5]
marks: 10
---
# Q-2021-MID-BONUS

## Source

![[knowledge_base/past_paper/2021-midterm.pdf#page=4]]

Published solution material: ![[knowledge_base/past_paper/2021-midterm.pdf#page=4]] ![[knowledge_base/past_paper/2021-midterm.pdf#page=5]]

Source verification: Published solution page 4 uses f(x)=(x,0), which is outside (0,1)×(0,1). The independently corrected first injection uses 1/2; the canonical-decimal injection and the theorem then prove the unchanged source claim.

## Question

Prove $|(0,1)|=|(0,1)\times(0,1)|$.

## Official Answer

Source: [[knowledge_base/past_paper/2021-midterm.pdf#page=4|physical PDF page 4]], [[knowledge_base/past_paper/2021-midterm.pdf#page=5|physical PDF page 5]].

> We need to construct an injection from $(0,1)$ to $(0,1)\times(0,1)$, as well as one the other way round. Then applying the Schröder-Bernstein theorem would complete the proof. An injection $f:(0,1)\to(0,1)\times(0,1)$ is trivial, e.g., $f(x)=(x,0)$. An injection $f:(0,1)\times(0,1)\to(0,1)$ can be defined as follows. For any $x,y\in(0,1)$, let $x=0.x_1x_2\cdots$ and $y=0.y_1y_2\cdots$ be their valid decimal representations (i.e., not ending with infinitely many 9's). Define $f(x,y)=0.x_1y_1x_2y_2\cdots$. Note that this must also be a valid decimal representation of some real number in $(0,1)$, because if it's not, $x=0.x_1x_2\cdots$ and $y=0.y_1y_2\cdots$ must end with infinitely many 9's. For any $(x,y)\ne(x',y')$, they must have at least one different digit, so $f(x,y)\ne f(x',y')$, hence $f$ is an injection.

## Supplementary Explanation

**Answer.** The interval and its Cartesian square have equal cardinality.

**Derivation/proof.** An injection into the square is f(x)=(x,1/2). For the reverse direction choose the unique decimal representations of x,y not eventually all 9s, and interleave their digits: g(x,y)=0.x1y1x2y2…. This number is positive because at least one input digit is positive, and less than one because the interleaving is not all 9s. It is not eventually all 9s, since that would force both input expansions eventually all 9s. Thus its canonical digits uniquely recover both inputs, proving injectivity. Cantor–Schröder–Bernstein now gives a bijection and equality of cardinalities.

Equality of images under $f(x)=(x,1/2)$ forces equality of first coordinates. For the reverse map, odd-position digits recover $x$ and even-position digits recover $y$.

For $g(x,y)=0.x_1y_1x_2y_2\cdots$, odd positions recover $x$ and even positions recover $y$. If its digits were eventually all nines, both input expansions would also be eventually all nines, contrary to the canonical choice.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Functions - 函数]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]
- [[Proof Method - 证明方法]]
