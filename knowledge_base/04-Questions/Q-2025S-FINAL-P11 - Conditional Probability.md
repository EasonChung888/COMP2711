---
id: "Q-2025S-FINAL-P11"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 15
question_number: "11"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]"]
subtopics: ["[[Subtopic - Conditional Probability - 条件概率]]"]
concepts: ["[[Conditional Probability - 条件概率]]"]
methods: ["[[Conditional-Probability Method - 条件概率方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Condition on a yes response by separating truthful-six and lying-nonsix cases."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [15]
marks: 7
---
# Q-2025S-FINAL-P11

## Source

[[2025 Spring Final]]; printed item 11; 7 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=15]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=15]]

## Question

A man is known to tell the truth with probability $\frac34$ (independent of the event outcome) and can only respond with “YES” or “NO”. He rolls a fair six-sided die and is then asked whether the die landed on 6. He responds, “YES”! What is the probability that the die actually landed on 6? Justify your answer.

## 中文解析

听到 YES 后需更新六点概率；说谎时非六点也会产生同样回答。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $3/8$。

**推导。** 令 $S$ 为掷出六点，$M$ 为回答 YES。题目明确真假回答与点数独立，故 $P(S)=1/6$、$P(M\mid S)=3/4$、$P(M\mid\overline S)=1/4$。两种 YES 来源互斥且穷尽，所以 $P(M)=\frac16\frac34+\frac56\frac14=8/24$。其中掷出六点并回答 YES 的概率为 $P(S\cap M)=3/24$。因此 $P(S\mid M)=(3/24)/(8/24)=3/8$，该值低于可信率四分之三，因为非六点的先验较高。

## Common Mistakes

- 四分之三是给定点数后说真话的概率，不是给定 YES 后点数为六的概率。
- 他说谎且只许二选一，非六点时必答 YES，不能另设未知回答机制。

## Connections

- [[Topic - Probability - 概率]]
- [[Subtopic - Conditional Probability - 条件概率]]
- [[Conditional Probability - 条件概率]]
- [[Conditional-Probability Method - 条件概率方法]]

Condition on a yes response by separating truthful-six and lying-nonsix cases.
