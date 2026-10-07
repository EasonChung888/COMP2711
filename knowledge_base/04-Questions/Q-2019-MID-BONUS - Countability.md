---
id: "Q-2019-MID-BONUS"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2019 Midterm]]"
source_pdf: "knowledge_base/past_paper/2019-midterm.pdf"
source_page: 15
solution_page: [15]
question_number: "Bonus Problem"
year: 2019
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Sets and Functions - 集合与函数]]"]
subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
concepts: ["[[Countability - 可数性]]"]
methods: ["[[Enumeration and Cardinality Method - 枚举与基数方法]]"]
question_types: ["construction"]
difficulty: 4
difficulty_basis: "Diagonal enumeration covers every positive integer position-speed pair and each guess is evaluated at its firing time."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 10
---
# Q-2019-MID-BONUS

## Source

![[knowledge_base/past_paper/2019-midterm.pdf#page=15]]

Published answer and marking material: ![[knowledge_base/past_paper/2019-midterm.pdf#page=15]]

## Question

An enemy tank is moving at a constant speed along a road. You can imagine the road as the infinite number line, where every position is identified by a number. The tank starts at time 0 at an unknown location $x$ and moves at an unknown speed of $y$ meters a minute, but we know that $x$ and $y$ are both positive integers. We can fire a cannon every minute at a specific location, but cannot see the tank. Can you design a strategy that guarantees to hit the tank eventually?

## Official Answer

Source: [[knowledge_base/past_paper/2019-midterm.pdf#page=15|physical PDF page 15]].

The Cartesian product $\mathbb Z^+\times\mathbb Z^+$ is countable, and we can enumerate the pairs $(x,y)\in\mathbb Z^+\times\mathbb Z^+$ one by one. At time $i$, we use the $i$-th pair $(x,y)$ in this enumeration to decide the firing location. Note that if $(x,y)$ are correct, the tank will be at position $x+y\cdot i$, so we fire at this location. Because every pair $(x,y)$ will eventually be enumerated, we are guaranteed to hit the tank.

## Supplementary Explanation

**Answer.** Enumerate all positive integer pairs $(x_i,y_i)$; at minute $i$, fire at $x_i+i y_i$.

**Derivation/proof.** Enumerate pairs by increasing sum $x+y$, and within each finite diagonal by increasing x: $(1,1),(1,2),(2,1),\ldots$. Every positive integer pair occurs at a finite index because only finitely many pairs have smaller sum. If the true parameters occur at index $i$, the tank's position at that minute is exactly $x_i+i y_i$, the chosen firing point. Hence a hit occurs no later than that finite minute. This is a deterministic exhaustive strategy, not a claim of a uniform time bound over all parameters.

Use the diagonals $x+y=2,3,4,\ldots$, each of which contains finitely many positive pairs. When the true pair is enumerated as $(x_j,y_j)$, the tank at time $j$ is at $x+jy=x_j+jy_j$, precisely the chosen firing location.

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]
