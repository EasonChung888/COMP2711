---
id: "Q-2014-FINAL-P05-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2014 Final]]"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 9
solution_page: [9]
question_number: "5(b)"
year: 2014
term: "fall"
exam_type: "final"
topics: ["[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Predicate Logic - 谓词逻辑]]"]
concepts: ["[[Predicate Logic - 谓词逻辑]]"]
methods: ["[[Logic-Law Method - 逻辑律方法]]","[[Proof Method - 证明方法]]"]
question_types: ["counterexample"]
difficulty: 3
difficulty_basis: "The existential formulas can be separated by a small universe and predicate assignment, making a concrete countermodel decisive."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2014-FINAL-P05-b

## Source

![[knowledge_base/past_paper/2014-final.pdf#page=9]]

Official answer or marking material: ![[knowledge_base/past_paper/2014-final.pdf#page=9]].

## Question

(b) $\exists x\in U\ p(x)\Rightarrow\exists x\in U\ q(x)$ and $\exists x\in U(p(x)\Rightarrow q(x))$

Shared context: [[STEM-2014-FINAL-P05 - Shared Problem Prompt]].

## 中文解析

两式的存在量词作用范围不同。右式只需找一个让蕴含为真的对象，前件为假时即可；左式却要求从整体存在性推出另一整体存在性。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 9. The Chinese derivation expands the reasoning.

**Answer.** No.

**Derivation/proof.** Let $U$ be animals, $p(x)$ mean ‘$x$ can fly’, and $q(x)$ mean ‘$x$ can fly an airplane’. The left implication is false (some animal flies but none flies an airplane), while the right is true because any non-flying animal makes $p(x)\Rightarrow q(x)$ true.

### 中文解答

**推导。** 两式不等价。将原解答的会飞/不会飞反例明确为二元素域 $U=\{u,v\}$：令 $p(u)=T,p(v)=F$，且 $q(u)=q(v)=F$。左式按题目外层蕴含读取，前件 $\exists x\,p(x)$ 真、后件 $\exists x\,q(x)$ 假，故为假。右式取见证 v，则 $p(v)\Rightarrow q(v)=F\Rightarrow F=T$，故存在式真。具体赋值消除了自然语言中动物类别的歧义。

## Common Mistakes

- 把两个 $\exists x$ 当作同一个见证而未检验。
- 反例中让两式都为真。

## Connections

- [[Subtopic - Predicate Logic - 谓词逻辑]]
- [[Predicate Logic - 谓词逻辑]]
- [[Logic-Law Method - 逻辑律方法]]
- [[Proof Method - 证明方法]]
