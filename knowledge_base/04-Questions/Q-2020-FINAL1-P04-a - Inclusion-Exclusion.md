---
id: "Q-2020-FINAL1-P04-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2020 Final Part 1]]"
source_pdf: "knowledge_base/past_paper/2020-final-part-1.pdf"
source_page: 3
question_number: "4(a)"
year: 2020
term: "spring"
exam_type: "final"
topics: ["[[Topic - Counting - 计数]]","[[Topic - Number Theory - 数论]]"]
subtopics: ["[[Subtopic - Inclusion-Exclusion - 容斥原理]]","[[Subtopic - Modular Arithmetic - 模运算]]"]
concepts: ["[[Inclusion-Exclusion - 容斥原理]]","[[Modular Congruence - 同余]]"]
methods: ["[[Inclusion-Exclusion Method - 容斥方法]]","[[Modular Arithmetic Method - 模运算方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Inclusion-exclusion must count zero in each divisibility class."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [3]
marks: 3
---
# Q-2020-FINAL1-P04-a

## Source

![[knowledge_base/past_paper/2020-final-part-1.pdf#page=3]]

Published solution material: ![[knowledge_base/past_paper/2020-final-part-1.pdf#page=3]]

## Question

$n$ is divisible by 2, 3 or 5?

Shared context: [[STEM-2020-FINAL1-P04 - Shared Problem Prompt]].

## 中文解析

范围包含零，零可被每个非零整数整除，所以每项都要加一。容斥先加三个集合，再减三个两两交集，最后补回三重交集；若漏零，所有中间计数与最后结果都会受影响。

## Detailed Solution

Provenance: published official answer, independently checked by the derivation below.

**Answer.** $734$.

**Derivation/proof.** For d>0 the number of multiples in [0,999] is $f(d)=1+\lfloor999/d\rfloor$, including zero. The counts for 2,3,5 are 500,334,200; pairwise intersections use 6,10,15 and give 167,100,67; the triple uses 30 and gives 34. Inclusion-exclusion yields $500+334+200-167-100-67+34=734$. Zero is counted once after cancellation.

### 中文解答

**推导。** 零也在范围内，故对正数 $d$，倍数计数为 $f(d)=1+\lfloor999/d\rfloor$。三集合分别有 $f(2)=500,f(3)=334,f(5)=200$ 个；两两交集是最小公倍数 $6,10,15$ 的倍数，数量分别为 $167,100,67$；三重交集为三十的倍数，有 $34$ 个。容斥给 $500+334+200-167-100-67+34=734$。零在加减中系数 $3-3+1=1$，因此只计一次。

## Common Mistakes

- 从一开始数而漏掉零。
- 把交集模数取和而非最小公倍数。

## Connections

- [[Subtopic - Inclusion-Exclusion - 容斥原理]]
- [[Subtopic - Modular Arithmetic - 模运算]]
- [[Inclusion-Exclusion - 容斥原理]]
- [[Modular Congruence - 同余]]
- [[Inclusion-Exclusion Method - 容斥方法]]
- [[Modular Arithmetic Method - 模运算方法]]
