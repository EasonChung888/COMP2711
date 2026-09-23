---
id: "Q-2024F-FINAL-P01-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 3
question_number: "1(a)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Reduce both implications to the same three-literal disjunction using implication elimination and De Morgan."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 3
---
# Q-2024F-FINAL-P01-a

## Source

[[2024 Fall Final]]; printed item 1(a); 3 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=3]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=4]]

Page 4 labels the valid equality ¬p∨(q∨r) ≡ (¬p∨q)∨(¬p∨r) “Distributive law”. It follows from associativity and idempotence; the mathematical conclusion is unchanged.

## Question

(a) Let $p,q,r$ denote primitive statements. Use the laws of logic to show that $p\to(q\lor r)$ is equivalent with $(p\land\neg q)\to r$.

## 中文解析

将两个蕴含式都化成析取标准形式，可直接看出相同的三个文字。第二式前件有否定，应用德摩根时要小心双重否定。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $p\to(q\lor r)\equiv(p\land\neg q)\to r$。

**推导。** 左式由 implication law 化为 $\neg p\lor(q\lor r)\equiv\neg p\lor q\lor r$。右式先消去蕴含：$(p\land\neg q)\to r\equiv\neg(p\land\neg q)\lor r$；用 De Morgan 得 $(\neg p\lor\neg\neg q)\lor r$；再双重否定得 $\neg p\lor q\lor r$。两式化到同一表达式，因此对所有赋值真值相同。原答案重复 $\neg p$ 的等式也成立，但所需规则是幂等与结合，而非其所标的分配律。

## Common Mistakes

- $\neg(p\land\neg q)$ 应为 $\neg p\lor q$，不是 $\neg p\land q$。
- 源答案的规则名称有误，重复一个析取项用幂等律说明即可。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]

- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]

Reduce both implications to the same three-literal disjunction using implication elimination and De Morgan.
