---
id: "Q-2016-FINAL-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Final]]"
source_pdf: "knowledge_base/past_paper/2016-final.pdf"
source_page: 3
solution_page: [3]
question_number: "1(b)"
year: 2016
term: "fall"
exam_type: "final"
marks: 2
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]"]
concepts: ["[[Random Variables - 随机变量]]"]
methods: ["[[Random-Variable Method - 随机变量方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Linearity adds the five wheel means even though the token displacement is a sum of distinct spins."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-FINAL-P01-b

## Source

![[knowledge_base/past_paper/2016-final.pdf#page=3]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-final.pdf#page=3]]

## Question

(b) You are now playing a boardgame. Each time you move your token $x$ steps forward if you spin the wheel and obtain a number $x$. What is the expected number of steps moved if you spin the wheel 5 times?

Shared context: [[STEM-2016-FINAL-P01 - Shared Problem Prompt]].

## 中文解析

单次轮盘均匀取二到十二，平均值是首尾平均即七。五次总步数是五个随机变量之和，利用期望线性相加得三十五，不需要把五次结果假设为同一个数。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 3. The Chinese derivation expands the reasoning.

**Answer.** $35$ steps.

**Derivation/proof.** For spin $X_i$, $E[X_i]=(2+3+\cdots+12)/11=7$. The total is $S=X_1+\cdots+X_5$, so $E[S]=\sum_{i=1}^{5}E[X_i]=5\cdot7=35$. Independence is not needed for this use of linearity.

### 中文解答

**推导。** 第i转步数 $X_i$ 均匀分布在2至12这11个整数，所以 $E(X_i)=(2+3+\cdots+12)/11=77/11=7$。总步数是五个变量的和，不是把每转当同一个随机变量。线性性给 $E(\sum_{i=1}^5X_i)=\sum_{i=1}^5E(X_i)=5\cdot7=35$。相加期望本身不需独立性。

## Common Mistakes

- 将五次相加误算成单次期望的五次方。
- 忽略轮盘最小值为二而从一开始求平均。

## Connections

- [[Subtopic - Random Variables - 随机变量]]
- [[Random Variables - 随机变量]]
- [[Random-Variable Method - 随机变量方法]]
