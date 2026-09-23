---
id: "Q-2024F-FINAL-P01-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2024 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2024_Final.pdf"
source_page: 4
question_number: "1(b)"
year: 2024
term: "fall"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Predicate Translation Method - 谓词翻译方法]]"]
question_types: ["translation"]
difficulty: 2
difficulty_basis: "Translate Bertrand-form wording with an integer-domain implication and strict inequalities for the prime witness."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 2
related_questions: ["[[Q-2024F-FINAL-P01-c - Predicate Logic]]"]
---
# Q-2024F-FINAL-P01-b

## Source

[[2024 Fall Final]]; printed item 1(b); 2 marks.

![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=4]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2024_Final.pdf#page=4]]

## Question

(b) Assume the domain to be all integers, $Prime(x)$ is a predicates that means $x$ is prime. Express the following statement in terms of quantifiers, variable(s), predicates, and the inequality symbols $<$ or $>$.
For every integer $n$ bigger than 1, there is a prime strictly between $n$ and $2n$.
(Strictly between $n$ and $2n$ means it can not be equal to $n$ an it can not be equal to $2n$)

## 中文解析

每个大于一的整数对应至少一个位于开区间内的素数。两个严格边界必须同时限制同一个素数，不能把它们变成可任选的析取。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** $\forall n((n>1)\to\exists p(Prime(p)\land n<p\land p<2n))$。

**推导。** 使用 $\forall n$ 遍历整数论域。由于只要求 $n>1$ 的情形，写成蕴含前件 $(n>1)$；后件 $\exists p$ 允许素数依赖 n。$Prime(p)$ 规定它为素数，$n<p$ 与 $p<2n$ 排除两个端点，用合取组合三项，得到上式。对 $n\le1$ 蕴含不提出额外要求。这里仅翻译给定句子，无需证明其数论真实性。

## Common Mistakes

- 不能用 $\le$ 表达 strictly between，端点均明确禁止。
- 应让 $\exists p$ 位于 $\forall n$ 内，否则要求一个素数适用于所有 n。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]

- [[Predicate Logic - 谓词逻辑]]
- [[Predicate Translation Method - 谓词翻译方法]]

Translate Bertrand-form wording with an integer-domain implication and strict inequalities for the prime witness.

- Used by: [[Q-2024F-FINAL-P01-c - Predicate Logic]]: 此结果在后续小题中的具体用途：Negate $\forall n((n>1)\to\exists p(Prime(p)\land n<p\land p<2n))$ over all integers.
