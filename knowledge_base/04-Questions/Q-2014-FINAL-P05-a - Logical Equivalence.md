---
id: "Q-2014-FINAL-P05-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 9
solution_page: [9]
question_number: "5(a)"
year: 2014
term: "fall"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Propositional Logic - 命题逻辑]]"]
concepts: ["[[Logical Equivalence - 逻辑等价]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]"]
question_types: ["proof"]
difficulty: 2
difficulty_basis: "Propositional equivalence requires a sequence of logic-law rewrites that preserves the connective structure on both sides."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P05-a

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=9]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=9]].

## Question

(a) $(p\land\neg q)\Rightarrow(r\land\neg r)$ and $p\Rightarrow q$

Shared context: [[STEM-2014-FINAL-P05 - Shared Problem Prompt]].

## 中文解析

后件 $r\land\neg r$ 恒假，蕴含式化为前件的否定；德摩根律后得到普通的 $p\Rightarrow q$。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 9. The Chinese derivation expands the reasoning.

**Answer.** Yes.

**Derivation/proof.** Because $r\land\neg r=F$, the first formula is $\neg(p\land\neg q)\lor F=\neg p\lor q$, which is exactly $p\Rightarrow q$.

### 中文解答

**推导。** 第一式消去蕴含为 $\neg(p\land\neg q)\lor(r\land\neg r)$。后面的矛盾式恒假，而德摩根律使前面化为 $\neg p\lor q$。因此整体等价于 $\neg p\lor q\lor F\equiv\neg p\lor q\equiv p\Rightarrow q$，与第二式一致。

## Common Mistakes

- 把矛盾式 $r\land\neg r$ 当成未知变量。
- 把 $\neg(p\land\neg q)$ 化错。

## Connections

- [[Subtopic - Propositional Logic - 命题逻辑]]
- [[Logical Equivalence - 逻辑等价]]
- [[Logic-Law Method - 逻辑律方法]]
