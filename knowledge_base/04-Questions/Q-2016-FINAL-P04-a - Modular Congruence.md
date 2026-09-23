---
id: "Q-2016-FINAL-P04-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Final]]"
source_pdf: "knowledge_base/past_paper/2016-final.pdf"
source_page: 8
solution_page: [8]
question_number: "4(a)"
year: 2016
term: "fall"
exam_type: "final"
marks: 5
topics: ["[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Modular Congruence - 同余]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Repeated squaring cycles between residues thirty-six and ninety-two before the binary exponent factors are multiplied."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-FINAL-P04-a

## Source

![[knowledge_base/past_paper/2016-final.pdf#page=8]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-final.pdf#page=8]]

## Question

(a) Evaluate $6^{1161}\bmod602$.

## 中文解析

把指数写成二进制幂的和，只需连续平方取模，不用算巨大整数。这里平方余数在三十六与九十二间交替，选取一千零二十四、一百二十八、八和一对应的因子相乘。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 8. The Chinese derivation expands the reasoning.

**Answer.** $216$.

**Derivation/proof.** Since $6^2\equiv36$, $6^4\equiv36^2\equiv92$, and $6^8\equiv92^2\equiv36\pmod{602}$, successive squarings alternate 36 and 92. As $1161=1024+128+8+1$, $6^{1161}\equiv92\cdot36\cdot36\cdot6\pmod{602}$. Reducing the products gives $92\cdot36\equiv302$, $302\cdot36\equiv36$, then $36\cdot6=216$.

### 中文解答

**推导。** 反复平方模602：$6^2\equiv36$，$6^4\equiv36^2\equiv92$，$6^8\equiv92^2\equiv36$，以后36与92交替。指数 $1161=1024+128+8+1$，对应因子为92、36、36、6。因此 $6^{1161}\equiv92\cdot36\cdot36\cdot6$。依次取模，$92\cdot36\equiv302$、$302\cdot36\equiv36$、$36\cdot6=216$，故答案216。

## Common Mistakes

- 在复合模数六百零二上直接使用费马小定理。
- 把 $6^{1161}$ 抄成没有指数层级的整数。

## Connections

- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Modular Congruence - 同余]]
- [[Modular Arithmetic Method - 模运算方法]]
