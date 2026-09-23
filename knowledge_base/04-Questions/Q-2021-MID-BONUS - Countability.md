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

## 中文解析

一方向取 (x,1/2) 即可，不能像原答案那样用零作为第二坐标，因为零不在开区间里。反方向交错两数的小数位，先排除无限九的重复表示，才能保证输出唯一解码出原来两数。

## Detailed Solution

Provenance: independently derived answer; the published material is discussed in Source.

**Answer.** The interval and its Cartesian square have equal cardinality.

**Derivation/proof.** An injection into the square is f(x)=(x,1/2). For the reverse direction choose the unique decimal representations of x,y not eventually all 9s, and interleave their digits: g(x,y)=0.x1y1x2y2…. This number is positive because at least one input digit is positive, and less than one because the interleaving is not all 9s. It is not eventually all 9s, since that would force both input expansions eventually all 9s. Thus its canonical digits uniquely recover both inputs, proving injectivity. Cantor–Schröder–Bernstein now gives a bijection and equality of cardinalities.

### 中文解答

**推导。** 先构造单射 $f:(0,1)\to(0,1)^2$，取 $f(x)=(x,1/2)$；其值确在开方形内，且相同像的第一坐标迫使 $x$ 相同。印本的 $(x,0)$ 不在目标集合，必须保留为源错误而不采用。反方向，对 $(x,y)$ 取各自唯一的不以无限九结尾的十进制展开 $x=0.x_1x_2\ldots$、$y=0.y_1y_2\ldots$，定义 $g(x,y)=0.x_1y_1x_2y_2\ldots$。至少一位非零，故输出大于零；它不可能全为九，故小于一。若交错串最终全九，则原来两个展开也最终全九，矛盾，所以输出本身就是规范展开。由其奇数位恢复 $x$、偶数位恢复 $y$，相同输出必有相同输入，证明单射。两个方向都有单射，康托尔–施罗德–伯恩斯坦定理推出两个集合等势。

## Common Mistakes

- 照抄 (x,0) 导致不在目标开正方形。
- 不固定小数表示而失去单射证明。

## Connections

- [[Subtopic - Sets and Functions - 集合与函数]]
- [[Countability - 可数性]]
- [[Functions - 函数]]
- [[Enumeration and Cardinality Method - 枚举与基数方法]]
- [[Proof Method - 证明方法]]
