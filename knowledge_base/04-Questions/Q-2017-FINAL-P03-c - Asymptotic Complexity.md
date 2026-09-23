---
id: "Q-2017-FINAL-P03-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 5
solution_page: [5]
question_number: "3(c)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 2
difficulty_basis: "Repeated floor division by four reduces the argument geometrically until it is at most one."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-FINAL-P03-c

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=5]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=5]]

## Question

(c) The number of print statements in the following:

while $n>1$

    print “hello”; $n:=\lfloor n/4\rfloor$

Shared context: [[STEM-2017-FINAL-P03 - Shared Problem Prompt]].

## 中文解析

每轮不是减四，而是除四取整，因此参数以几何速度缩小。经过 k 轮大约剩 n 除以四的 k 次方，让它降到一附近需要对数轮数；每轮恰好打印一次。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 5. The Chinese derivation expands the reasoning.

**Answer.** $O(\log n)$ (in fact $\Theta(\log n)$).

**Derivation/proof.** After $k$ iterations the value is $\lfloor n/4^k\rfloor$. The loop ends when this is at most one, which occurs after a number of iterations within a constant of $\log_4 n$. Every iteration prints once, so the count is logarithmic; changing the logarithm base only changes a constant factor.

### 中文解答

**推导。** 把初值记为 $n_0$。执行 $k$ 次后，整数除法的嵌套取整给出当前值 $\lfloor n_0/4^k\rfloor$，每次恰打印一次。停止条件是该值不超过 $1$，等价于 $n_0/4^k<2$；因此最小 $k$ 与 $\log_4 n_0$ 至多差常数。打印次数为 $\Theta(\log n_0)$，选择 $O(\log n)$，而不是把除四误当成减四得到线性次数。

## Common Mistakes

- 把除四误当减四，得出线性复杂度。
- 把对数底四当作不同的渐近类别。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Asymptotic Bound Method - 渐近界方法]]
