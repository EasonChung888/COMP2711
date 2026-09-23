---
id: "Q-2016-MID-P02-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Midterm]]"
source_pdf: "knowledge_base/past_paper/2016-midterm.pdf"
source_page: 4
solution_page: [4]
question_number: "2(a)"
year: 2016
term: "fall"
exam_type: "midterm"
marks: 4
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 2
difficulty_basis: "Four disjoint role groups have separate fixed quotas, so their binomial selection counts multiply."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-MID-P02-a

## Source

![[knowledge_base/past_paper/2016-midterm.pdf#page=4]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-midterm.pdf#page=4]]

## Question

(a) How many possible groups of guests are there?

Shared context: [[STEM-2016-MID-P02 - Shared Problem Prompt]].

## 中文解析

四类人员没有交集，可独立从每一类中按配额选人。每类内部只关心选中了谁，不关心邀请顺序，因此使用组合数再相乘。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 4. The Chinese derivation expands the reasoning.

**Answer.** $\binom{300}{4}\binom{500}{10}\binom{600}{10}\binom{10000}{40}$.

**Derivation/proof.** Select 4 of 300 faculty, 10 of 500 assistants, 10 of 600 postgraduates, and 40 of 10,000 undergraduates. The original roles are disjoint, so each combination of four selections gives one allowed guest group.

### 中文解答

**推导。** 四类身份初始互斥。选4位教员有 $\binom{300}{4}$，选10位助教有 $\binom{500}{10}$，选10位研究生有 $\binom{600}{10}$，选40位本科生有 $\binom{10000}{40}$。各类选择组合唯一确定一个宾客集合，故乘积为 $\binom{300}{4}\binom{500}{10}\binom{600}{10}\binom{10000}{40}$。邀请顺序不区分，所以每一类用组合而非排列。

## Common Mistakes

- 将全部人员合在一起选六十四人，无法保证角色配额。
- 在每个组合数上额外乘阶乘计邀请次序。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Method - 计数方法]]
