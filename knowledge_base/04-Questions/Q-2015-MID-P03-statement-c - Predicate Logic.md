---
id: "Q-2015-MID-P03-statement-c"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2015 Midterm]]"
source_pdf: "knowledge_base/past_paper/2015-midterm.pdf"
source_page: 7
solution_page: [8]
question_number: "3(c)"
year: 2015
term: "fall"
exam_type: "midterm"
marks: 2
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "The famous-person restriction is outermost, while richness supplies the condition for success inside it."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2015-MID-P03-statement-c

## Source

![[knowledge_base/past_paper/2015-midterm.pdf#page=7]]

Official answer or marking material: ![[knowledge_base/past_paper/2015-midterm.pdf#page=8]]

## Question

(c) A famous person is successful if she/he is rich.

Shared context: [[STEM-2015-MID-P03 - Shared Problem Prompt]].

## 中文解析

这一句先谈著名的人，再说他若富有就成功。与上一句相比，两层前件的顺序调换，但两项条件仍共同限制成功的结论。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 8. The Chinese derivation expands the reasoning.

**Answer.** $\forall x\in U(famous(x)\to(rich(x)\to successful(x)))$.

**Derivation/proof.** For arbitrary $x$, assume $famous(x)$. What must then hold is the conditional $rich(x)\to successful(x)$. Universal quantification gives the displayed formula.

### 中文解答

**推导。** 对任意人 x，外层谈论著名的人，所以前件是 $famous(x)$。句内条件是“若富有，则成功”，写为 $rich(x)\to successful(x)$。因此完整全称式是 $\forall x\in U(famous(x)\to(rich(x)\to successful(x)))$，两个条件的次序与上一句相反，但并未声称所有著名者无条件成功。

## Common Mistakes

- 把外层条件仍照抄为 rich，未对应本句主语限制。
- 写成成功者必然富有而著名，反转了整个条件。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]
