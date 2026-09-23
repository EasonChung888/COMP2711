---
id: "Q-2013-MID-P01-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2013 Midterm]]"
source_pdf: "knowledge_base/past_paper/2013-midterm.pdf"
source_page: 3
solution_page: [3]
question_number: "1(a)"
year: 2013
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]", "[[Counting Principles - 计数原理]]"]
methods: ["[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 1
difficulty_basis: "Choosing five eggs from the twelve available eggs tests whether the unrestricted selection is recognized before colour constraints are introduced."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2013-MID-P01-a

## Source

![[knowledge_base/past_paper/2013-midterm.pdf#page=3]]

Official answer or marking material: ![[knowledge_base/past_paper/2013-midterm.pdf#page=3]].

## Question

(a) In how many different ways can the child choose 5 eggs?

Explain how your answers are derived.

Shared context: [[STEM-2013-MID-P01 - Shared Problem Prompt]].

## 中文解析

题目只限制选出五个不同的蛋，颜色没有额外条件，因此对象是从十二个带编号物品中选五个的组合，而不是排列。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 3. The Chinese derivation expands the reasoning.

**Answer.** $\binom{12}{5}=792$.

**Derivation/proof.** A selection is an unordered 5-subset of the twelve labelled eggs, so the binomial rule gives $\binom{12}{5}=792$.

### 中文解答

**推导。** 十二个蛋均有不同编号，选择不计顺序。故每次选择对应十二元素集合的一个五元素子集，数量为 $\binom{12}{5}=12\cdot11\cdot10\cdot9\cdot8/(5\cdot4\cdot3\cdot2\cdot1)=792$。除以 $5!$ 正是消去同一组蛋的重复排列。

## Common Mistakes

- 把不计顺序的选择误写成 $12^5$。
- 把颜色分组后重复计数。

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Counting Principles - 计数原理]]
- [[Counting Method - 计数方法]]
