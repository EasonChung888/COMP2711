---
id: "Q-2017-FINAL-P03-a"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2017 Final]]"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 5
solution_page: [5]
question_number: "3(a)"
year: 2017
term: "fall"
exam_type: "final"
topics: ["[[Topic - Algorithms - 算法]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Algorithms - 算法]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Asymptotic Complexity - 渐近复杂度]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Asymptotic Bound Method - 渐近界方法]]","[[Counting Method - 计数方法]]"]
question_types: ["algorithm-analysis"]
difficulty: 2
difficulty_basis: "Fixing the final bit leaves n minus one free bits, each requiring one constant-time print."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
---
# Q-2017-FINAL-P03-a

## Source

![[knowledge_base/past_paper/2017-final.pdf#page=5]]

Published answer and marking material: ![[knowledge_base/past_paper/2017-final.pdf#page=5]]

## Question

(a) An algorithm that prints all bit strings of length n that end with 1.

Shared context: [[STEM-2017-FINAL-P03 - Shared Problem Prompt]].

## 中文解析

末位固定为一，只剩前 n 减一位自由选择，所以需要输出二的 n 减一次方个串。题目特别规定打印整个字符串只花常数时间，因此不能另外乘上串长 n；常数二倍不影响渐近类别。

## Detailed Solution

Provenance: official; supplied source conclusion checked on PDF page(s) 5. The Chinese derivation expands the reasoning.

**Answer.** $O(2^n)$ (in fact $\Theta(2^n)$).

**Derivation/proof.** The last bit is fixed and the other $n-1$ bits have two choices each, so $2^{n-1}$ strings must be printed. Under the stipulated constant cost per string, this output work is $\Theta(2^{n-1})=\Theta(2^n)$; enumeration with constant amortized work per output attains it.

### 中文解答

**推导。** 最后一位固定为 $1$，前 $n-1$ 位各有两个选择，所以应打印 $2^{n-1}$ 个不同串。依题设一次打印任意长字符串按常数计费，枚举这些串并打印的工作量为 $\Theta(2^{n-1})=\Theta(2^n)$，因此选 $O(2^n)$。若逐位输出另计成本会是另一模型，本题明确不采用。

## Common Mistakes

- 把最后一位也当成自由选择而解释错误。
- 忽略题设打印成本而额外乘 n。

## Connections

- [[Subtopic - Algorithms - 算法]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Asymptotic Complexity - 渐近复杂度]]
- [[Counting Principles - 计数原理]]
- [[Asymptotic Bound Method - 渐近界方法]]
- [[Counting Method - 计数方法]]
