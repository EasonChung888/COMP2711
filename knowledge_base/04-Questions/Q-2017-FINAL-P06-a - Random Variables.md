---
id: "Q-2017-FINAL-P06-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 10
solution_page: [10]
question_number: "6(a)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]"]
concepts: ["[[Random Variables - 随机变量]]"]
methods: ["[[Random-Variable Method - 随机变量方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "The random variable counts rows, so all heads makes each of the eight rows homogeneous."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
marks: 1
---
# Q-2017-FINAL-P06-a

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=10]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=10]]

## Question

(a) If all coin flips come up heads, what is the value of $X$?

Shared context: [[STEM-2017-FINAL-P06 - Shared Problem Prompt]].

## 中文解析

X 数的是满足条件的行数，不是正面硬币数。全部六十四枚都是正面时，每一行都满足八枚同面的条件，而总共只有八行，因此随机变量取最大值八。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 10. The Chinese derivation expands the reasoning.

**Answer.** $X=8$.

**Derivation/proof.** Each row consists of eight heads and therefore satisfies the definition of homogeneous. There are eight rows, so exactly eight row indicators equal one and their sum $X$ is eight, not sixty-four.

### 中文解答

**推导。** 所有六十四枚均为正面时，每一行的八枚币都显示同一符号，因此每行都满足 homogeneous 的定义。全块有八行，行指标 $I_1=\cdots=I_8=1$，所以 $X=\sum_{i=1}^8I_i=8$。$X$ 数的是齐同行数，不是正面币数 $64$。

## Common Mistakes

- 回答正面硬币数六十四。
- 把一整块同面只算作一行。

## Connections

- [[Subtopic - Random Variables - 随机变量]]
- [[Random Variables - 随机变量]]
- [[Random-Variable Method - 随机变量方法]]
