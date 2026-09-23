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

## 中文解析

关键不是猜位置，而是枚举起点和速度组成的整数对。按两坐标之和递增列举，能保证每一对在有限步出现；到第 i 分钟试这一对时，炮口必须瞄准其当前预测位置 x 加 i 倍 y，而不是初始位置。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 15. The Chinese derivation expands the reasoning.

**Answer.** Enumerate all positive integer pairs $(x_i,y_i)$; at minute $i$, fire at $x_i+i y_i$.

**Derivation/proof.** Enumerate pairs by increasing sum $x+y$, and within each finite diagonal by increasing x: $(1,1),(1,2),(2,1),\ldots$. Every positive integer pair occurs at a finite index because only finitely many pairs have smaller sum. If the true parameters occur at index $i$, the tank's position at that minute is exactly $x_i+i y_i$, the chosen firing point. Hence a hit occurs no later than that finite minute. This is a deterministic exhaustive strategy, not a claim of a uniform time bound over all parameters.

### 中文解答

**推导。** 把所有可能参数对 $\mathbb Z^+\times\mathbb Z^+$ 按 $x+y=2,3,4,\ldots$ 的对角线枚举，每条线上按 $x$ 递增排列，得到 $(x_1,y_1),(x_2,y_2),\ldots$。第 $i$ 分钟只发一炮，瞄准 $x_i+i y_i$。真实参数 $(x,y)$ 所在的对角线之前只有有限多个参数对，因此必在某个有限序号 $j$ 出现。第 $j$ 分钟坦克实际位置为 $x+jy=x_j+jy_j$，恰与瞄准位置相同，于是必被击中。关键是枚举参数而不是固定位置；目标随时间移动已被 $iy_i$ 计入。

## Common Mistakes

- 按字典序无限列第一行，永远轮不到其他起点。
- 枚举正确参数后仍只瞄准其时间零位置。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]
